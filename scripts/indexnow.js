// Tells Bing, and the other search engines that use IndexNow, which pages on
// the live site have changed. ChatGPT search and Copilot draw on Bing's index.
//
// Run it AFTER a deploy is live, never before:
//   node scripts/indexnow.js                       every page in the live sitemap
//   node scripts/indexnow.js /about /insights/x    only these pages
//
// The key below is not a secret. It only proves we own the site, because the
// same value is published at https://www.fatahibuilding.com/<key>.txt
// (the file lives in /public).

const HOST = "www.fatahibuilding.com";
const SITE = `https://${HOST}`;
const KEY = "d438c014d16ababd6acc515e8fc92298";

async function main() {
  const paths = process.argv.slice(2);
  let urlList;

  if (paths.length) {
    urlList = paths.map((p) => `${SITE}${p === "/" ? "" : p}`);
  } else {
    const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
    urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  }
  if (!urlList.length) throw new Error("No pages to submit.");

  // The key file has to be live first, or the submission is rejected.
  const keyFile = await fetch(`${SITE}/${KEY}.txt`);
  if (!keyFile.ok || (await keyFile.text()).trim() !== KEY) {
    throw new Error(`Key file is not live at ${SITE}/${KEY}.txt. Deploy first.`);
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${SITE}/${KEY}.txt`,
      urlList,
    }),
  });

  // 200 = accepted. 202 = accepted, key still being checked.
  console.log(`IndexNow: ${res.status} ${res.statusText}, ${urlList.length} page(s) submitted.`);
  if (!res.ok) process.exit(1);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

// Converts an insight markdown master into a Next.js page.tsx that follows the existing article template.
// Usage: node md2page.js <insights-dir> <site-app-insights-dir> <slug> [<slug>...]
const fs = require("fs");
const path = require("path");

const [, , mdDir, appDir, ...slugs] = process.argv;

const esc = (s) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");

function inline(text) {
  // links first, then bold; escape the plain text pieces
  const out = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(esc(text.slice(last, m.index)));
    if (m[1] !== undefined) {
      out.push(`<Link href="${m[2]}">${esc(m[1])}</Link>`);
    } else {
      out.push(`<strong>${inline(m[3])}</strong>`);
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(esc(text.slice(last)));
  return out.join("");
}

function blocks(md, indent) {
  const pad = " ".repeat(indent);
  const lines = md.split(/\r?\n/);
  const out = [];
  let para = [];
  let list = [];
  const flushPara = () => {
    if (para.length) {
      out.push(`${pad}<p>${inline(para.join(" "))}</p>`);
      para = [];
    }
  };
  const flushList = () => {
    if (list.length) {
      out.push(`${pad}<ul>`);
      for (const li of list) out.push(`${pad}  <li>${inline(li)}</li>`);
      out.push(`${pad}</ul>`);
      list = [];
    }
  };
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) {
      flushPara();
      flushList();
      continue;
    }
    if (/^\*This insight connects/.test(line)) continue; // knowledge-base footer only
    const h = line.match(/^#{2,3}\s+(.*)$/);
    if (h) {
      flushPara();
      flushList();
      out.push(`${pad}<h2>${inline(h[1])}</h2>`);
      continue;
    }
    const li = line.match(/^-\s+(.*)$/);
    if (li) {
      flushPara();
      list.push(li[1]);
      continue;
    }
    flushList();
    para.push(line);
  }
  flushPara();
  flushList();
  return out.join("\n");
}

for (const slug of slugs) {
  const md = fs.readFileSync(path.join(mdDir, `${slug}.md`), "utf8");
  const field = (name) => {
    const m = md.match(new RegExp(`^\\*\\*${name}:\\*\\*\\s*(.+)$`, "m"));
    if (!m) throw new Error(`${slug}: missing field ${name}`);
    return m[1].trim().replace(/^`|`$/g, "");
  };
  const headline = md.match(/^#\s+(.+)$/m)[1].trim();
  const summaryMd = md.split(/^## Summary\s*$/m)[1].split(/^---\s*$/m)[0];
  const fullMd = md.split(/^## Full Insight\s*$/m)[1];
  if (field("Slug") !== slug) throw new Error(`${slug}: slug field mismatch`);

  const component =
    slug
      .split("-")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join("") + "Article";
  const js = (s) => JSON.stringify(s);

  const page = `import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";
import JsonLd from "@/components/JsonLd";
import { articleSchema, insightBreadcrumbs } from "@/lib/schema";

export const metadata: Metadata = {
  title: ${js(field("Search title") + " | Fatahi Building")},
  description: ${js(field("Meta description"))},
  alternates: { canonical: ${js("/insights/" + slug)} },
};

export default function ${component}() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: ${js(headline)},
            description: String(metadata.description),
            slug: ${js(slug)},
            datePublished: ${js(field("Published"))},
          }),
          insightBreadcrumbs(${js(headline)}, ${js(slug)}),
        ]}
      />
      {/* HERO */}
      <section className="relative py-32 md:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <Link
              href="/insights"
              className="inline-flex items-center text-beige text-[13px] font-light tracking-[0.15em] mb-12 hover:text-beige-light transition-colors duration-300"
            >
              <svg
                className="mr-2 w-3.5 h-3.5 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              All Insights
            </Link>
            <p className="section-label mb-6">${esc(field("Category"))}</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-8">
              ${esc(headline)}
            </h1>
            <p className="text-white/40 text-sm font-light">${esc(field("Date"))}</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ARTICLE BODY */}
      <section className="py-10 md:py-16">
        <ArticleView
          summary={
            <>
${blocks(summaryMd, 14)}
            </>
          }
        >
${blocks(fullMd, 10)}
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">${esc(field("CTA label"))}</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              ${esc(field("CTA heading"))}
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              ${esc(field("CTA text"))}
            </p>
            <Link
              href="/contact"
              className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
`;
  const dir = path.join(appDir, slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), page);
  console.log("wrote", path.join(dir, "page.tsx"), `(${field("Search title").length + 18} char title)`);
}

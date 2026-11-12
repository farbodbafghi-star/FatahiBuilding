// Structured data helpers. Every page describes itself in relation to one
// business entity, identified by BUSINESS_ID, so search engines and AI
// assistants read the site as a single organisation.

export const SITE = "https://www.fatahibuilding.com";
export const BUSINESS_ID = `${SITE}/#business`;

export const AREAS_SERVED = [
  "Toronto",
  "North York",
  "Willowdale",
  "York Mills",
  "Lawrence Park",
  "Midtown Toronto",
  "Richmond Hill",
  "Vaughan",
  "Markham",
].map((name) => ({ "@type": "Place", name }));

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function articleSchema({
  headline,
  description,
  slug,
  datePublished,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
}) {
  const url = `${SITE}/insights/${slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    mainEntityOfPage: url,
    datePublished,
    inLanguage: "en-CA",
    author: { "@id": BUSINESS_ID },
    publisher: { "@id": BUSINESS_ID },
  };
}

export function serviceSchema({
  name,
  serviceType,
  description,
  path,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    url: `${SITE}${path}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREAS_SERVED,
  };
}

export function insightBreadcrumbs(headline: string, slug: string) {
  return breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: headline, path: `/insights/${slug}` },
  ]);
}

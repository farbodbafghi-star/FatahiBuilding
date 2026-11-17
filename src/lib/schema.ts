// Structured data helpers. Every page describes itself in relation to one
// business entity, identified by BUSINESS_ID, so search engines and AI
// assistants read the site as a single organisation.

export const SITE = "https://www.fatahibuilding.com";
export const BUSINESS_ID = `${SITE}/#business`;
export const WEBSITE_ID = `${SITE}/#website`;
export const MAJID_ID = `${SITE}/about#majid-fatahi`;
export const FARBOD_ID = `${SITE}/about#farbod-fatahi`;

// The two people behind the firm. Sent on every page so the business, the
// About page and (once articles carry a byline) the authors all point at the
// same two entries instead of describing the same person twice.
export const peopleSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": MAJID_ID,
    name: "Majid Fatahi",
    jobTitle: "Founder, Lead Designer & Builder",
    description:
      "Designer and builder with over 30 years of experience. Founder of Fatahi Building.",
    image: `${SITE}/images/branding/majid-portrait.jpg`,
    url: `${SITE}/about`,
    worksFor: { "@id": BUSINESS_ID },
    sameAs: ["https://www.linkedin.com/in/majidfatahi/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": FARBOD_ID,
    name: "Farbod Fatahi",
    jobTitle: "Client Relations & Project Management",
    image: `${SITE}/images/branding/farbod-portrait.jpg`,
    url: `${SITE}/about`,
    worksFor: { "@id": BUSINESS_ID },
    sameAs: ["https://www.linkedin.com/in/farbodfatahi/"],
  },
];

// City, province and country only. Service-area business: no street address.
export const CITY_ADDRESS = {
  "@type": "PostalAddress",
  addressLocality: "Toronto",
  addressRegion: "ON",
  addressCountry: "CA",
};

export const AREAS_SERVED = [
  "Toronto",
  "North York",
  "Willowdale",
  "York Mills",
  "The Bridle Path",
  "Rosedale",
  "Forest Hill",
  "Lawrence Park",
  "Midtown Toronto",
  "Etobicoke",
  "Scarborough",
  "Vaughan",
  "Richmond Hill",
  "Markham",
  "King City",
  "Aurora",
  "Newmarket",
  "Mississauga",
  "Oakville",
  "Greater Toronto Area",
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
  dateModified,
}: {
  headline: string;
  description: string;
  slug: string;
  datePublished: string;
  // The day the article's text last changed. Leave out if it never has.
  dateModified?: string;
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
    dateModified: dateModified ?? datePublished,
    image: `${SITE}/images/share/default.jpg`,
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

// A home we built, described as a piece of work by the firm. Only state what
// the project page itself shows: leave out `yearCompleted` for a home still
// under construction and `images` if the page has no photos yet.
export function projectSchema({
  name,
  description,
  path,
  yearCompleted,
  images = [],
}: {
  name: string;
  description: string;
  path: string;
  yearCompleted?: string;
  images?: string[];
}) {
  const url = `${SITE}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${url}#project`,
    name,
    description,
    url,
    mainEntityOfPage: url,
    genre: "Custom home",
    ...(yearCompleted ? { dateCreated: yearCompleted } : {}),
    inLanguage: "en-CA",
    creator: { "@id": BUSINESS_ID },
    contentLocation: {
      "@type": "Place",
      name: "North York, Toronto",
      address: CITY_ADDRESS,
    },
    ...(images.length
      ? { image: images.map((src) => `${SITE}${encodeURI(src)}`) }
      : {}),
  };
}

export function insightBreadcrumbs(headline: string, slug: string) {
  return breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: headline, path: `/insights/${slug}` },
  ]);
}

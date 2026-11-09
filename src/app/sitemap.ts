import type { MetadataRoute } from "next";

const BASE = "https://www.fatahibuilding.com";

// When you add a page or an insight article, add its path here.
const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1 },
  { path: "/services/custom-homes", priority: 0.9 },
  { path: "/services/transformations", priority: 0.9 },
  { path: "/services/additions", priority: 0.9 },
  { path: "/projects", priority: 0.8 },
  { path: "/projects/131-poyntz-ave", priority: 0.8 },
  { path: "/projects/23-terrace", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/testimonials", priority: 0.6 },
  { path: "/contact", priority: 0.7 },
  { path: "/insights", priority: 0.7 },
  { path: "/insights/the-90-percent-you-never-see", priority: 0.6 },
  { path: "/insights/committee-of-adjustment-toronto", priority: 0.6 },
  { path: "/insights/tree-protection-zones-toronto", priority: 0.6 },
  { path: "/insights/building-custom-homes-north-york", priority: 0.6 },
  { path: "/insights/renovate-or-rebuild", priority: 0.6 },
  { path: "/insights/what-to-expect-during-preconstruction", priority: 0.6 },
  { path: "/insights/why-layout-matters-more-than-finishes", priority: 0.6 },
  { path: "/insights/why-design-build-changes-everything", priority: 0.6 },
  { path: "/insights/choosing-materials-that-last", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority,
  }));
}

import type { MetadataRoute } from "next";
import { areas } from "@/data/areas";

const BASE = "https://www.fatahibuilding.com";

// When you add a page or an insight article, add its path here.
// `updated` is the day the page's content last changed (YYYY-MM-DD). Change it
// when the words or photos on a page change, not for behind-the-scenes edits.
const AREAS_UPDATED = "2026-11-12";

const pages: { path: string; priority: number; updated: string }[] = [
  { path: "/", priority: 1, updated: "2026-11-12" },
  { path: "/services/custom-homes", priority: 0.9, updated: "2026-11-12" },
  { path: "/services/transformations", priority: 0.9, updated: "2026-11-12" },
  { path: "/services/additions", priority: 0.9, updated: "2026-11-12" },
  { path: "/projects", priority: 0.8, updated: "2026-11-12" },
  { path: "/projects/225-old-yonge", priority: 0.8, updated: "2026-11-12" },
  { path: "/projects/131-poyntz-ave", priority: 0.8, updated: "2026-11-11" },
  { path: "/projects/23-terrace", priority: 0.8, updated: "2026-11-11" },
  { path: "/areas", priority: 0.8, updated: AREAS_UPDATED },
  ...areas.map((area) => ({
    path: `/areas/${area.slug}`,
    priority: 0.8,
    updated: AREAS_UPDATED,
  })),
  { path: "/about", priority: 0.7, updated: "2026-11-12" },
  { path: "/testimonials", priority: 0.6, updated: "2026-11-11" },
  { path: "/contact", priority: 0.7, updated: "2026-11-12" },
  { path: "/insights", priority: 0.7, updated: "2026-11-12" },
  { path: "/insights/custom-home-foundation-north-york", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/cost-per-square-foot-custom-home", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/custom-home-timeline-toronto-before-you-build", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/fixed-price-vs-cost-plus-custom-home", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/the-90-percent-you-never-see", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/committee-of-adjustment-toronto", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/tree-protection-zones-toronto", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/building-custom-homes-north-york", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/renovate-or-rebuild", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/what-to-expect-during-preconstruction", priority: 0.6, updated: "2026-11-11" },
  { path: "/insights/why-layout-matters-more-than-finishes", priority: 0.6, updated: "2026-11-12" },
  { path: "/insights/why-design-build-changes-everything", priority: 0.6, updated: "2026-11-12" },
  { path: "/insights/choosing-materials-that-last", priority: 0.6, updated: "2026-11-11" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority, updated }) => ({
    url: `${BASE}${path === "/" ? "" : path}`,
    lastModified: updated,
    changeFrequency: "monthly",
    priority,
  }));
}

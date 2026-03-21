# Fatahi Building Website — Full Context

## What This Is
A custom website for **Fatahi Building**, a design-build custom home builder in Toronto & GTA. Built with Next.js 16, Tailwind CSS v4, TypeScript, App Router.

**Project location:** `C:\Users\fatah\OneDrive\Desktop\fatahi-building-website`

## Current Status
- `npm run build` passes — all 17 routes compile successfully
- Dev server: `npm run dev` → `http://localhost:3000`
- **Visual overhaul COMPLETE** — unified dark aesthetic applied across all pages
- Site uses a single dark navy background (`navy-dark`) with no alternating sections
- **Insights COMPLETE** — 3 full longform articles written, wired as real pages
- **Footer CTA** — only shows on homepage (removed from all other pages to avoid duplication)
- **Content strategy** — documented in `INSIGHTS-STRATEGY.md` with LinkedIn repurposing plan

---

## Visual Design — Current State

### Single Dark Background
- The ENTIRE site uses one background color: `navy-dark` (#182640)
- NO alternating light/dark sections. No warm-white, cream, gray, or multiple navy shades.
- Sections separated by `<div className="section-sep" />` (thin gradient beige line at 12% opacity)

### Section Padding
- Standard sections: `py-10 md:py-16`
- Compact sections (stats, form areas): `py-8 md:py-12`
- Hero sections have their own padding (pt-44 pb-24 etc.)
- Container: `max-w-7xl mx-auto px-8 md:px-16`

### Text Contrast System (all on dark bg)
- **Headings:** `text-white`
- **Body text:** `text-white/70`
- **Muted/secondary:** `text-white/40`
- **Emphasized names/quotes:** `text-cream`
- **Links/CTAs:** `text-beige` with `hover:text-beige-light`
- **Section labels:** `.section-label` class (beige-dark)
- **Decorative quotation marks:** `text-beige/15`

### Cards & Containers
- Cards: `bg-white/5 border border-white/10`
- Buttons: `border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500`

---

## What Was Built (17 pages)

All pages are in `src/app/`:

| Route | File | Description |
|-------|------|-------------|
| `/` | `page.tsx` | Homepage — hero, philosophy, featured projects, services, process, testimonials, team teaser |
| `/about` | `about/page.tsx` | About — philosophy, Majid & Farbod bios with LinkedIn links, values, stats, CTA |
| `/process` | `process/page.tsx` | Our Process — 6 detailed phases |
| `/services` | `services/page.tsx` | Services overview — 3 service types with images |
| `/services/custom-homes` | `services/custom-homes/page.tsx` | Custom Homes detail + process + gallery |
| `/services/transformations` | `services/transformations/page.tsx` | Whole-Home Transformations detail (no gallery — photos not ready) |
| `/services/additions` | `services/additions/page.tsx` | Additions & Extensions detail |
| `/projects` | `projects/page.tsx` | Projects listing — 2 completed, 2 in-progress |
| `/projects/131-poyntz-ave` | `projects/131-poyntz-ave/page.tsx` | Project gallery + specs (13 images) |
| `/projects/23-terrace` | `projects/23-terrace/page.tsx` | Project gallery + specs (6 images) |
| `/testimonials` | `testimonials/page.tsx` | 3 Google reviews, rating badge, values |
| `/insights` | `insights/page.tsx` | Blog listing with category icons — 3 real articles |
| `/insights/why-design-build-changes-everything` | `insights/why-design-build-changes-everything/page.tsx` | Longform article (~1,500 words) — March 2026 |
| `/insights/what-to-expect-during-preconstruction` | `insights/what-to-expect-during-preconstruction/page.tsx` | Longform article (~1,500 words) — February 2026 |
| `/insights/choosing-materials-that-last` | `insights/choosing-materials-that-last/page.tsx` | Longform article (~1,700 words) — January 2026 |
| `/contact` | `contact/page.tsx` | Lead capture form + sidebar contact info + LinkedIn |

### Components (`src/components/`)
- `Header.tsx` — Fixed nav, services dropdown, mobile hamburger. Dark always (never white on scroll).
- `Footer.tsx` — CTA banner (homepage only, hidden on other pages via `usePathname`), site links, contact info, monogram
- `ScrollReveal.tsx` — SSR-safe IntersectionObserver wrapper

### Insights System
- **Content strategy:** `INSIGHTS-STRATEGY.md` — monthly cadence, LinkedIn repurposing plan for 3 profiles
- **Raw markdown articles:** `src/content/insights/` — each `.md` file contains full article text + LinkedIn post templates
- **Listing page:** Category icons (SVG) — pencil+ruler for Design-Build, clipboard for Process, stacked layers for Materials
- **Article pages:** Use `.prose-custom` CSS class for typography (defined in `globals.css`)
- **Dates staggered:** Jan, Feb, Mar 2026 to look like 3 months of consistent publishing

---

## Technical Architecture

### CSS System (`globals.css`)
Tailwind v4 `@theme inline` custom colors:
```
--color-navy: #1e2d4d
--color-navy-light: #2a3f6b
--color-navy-dark: #182640    ← THE background color (matched to logo)
--color-beige: #c4b49e        ← accent (links, dividers, CTA borders)
--color-beige-light: #d4c8b6  ← hover state for beige links
--color-beige-dark: #a89878   ← section labels
--color-cream: #f5f0eb        ← emphasized text on dark backgrounds
```

Body defaults: `background: navy-dark`, `color: cream`

**IMPORTANT — Tailwind v4 CSS Reset:**
Do NOT add `* { margin: 0; padding: 0; }` or any un-layered reset to globals.css. In Tailwind v4, utilities are in `@layer utilities`, and un-layered CSS always wins over layered CSS. Adding a global reset will break ALL Tailwind padding/margin utilities site-wide. Tailwind v4 Preflight handles the reset automatically.

### Custom Utility Classes
- `.font-heading` — Cormorant Garamond serif
- `.section-label` — 0.7rem, 500 weight, 0.25em tracking, uppercase, beige-dark
- `.divider` — 50px x 1px beige line
- `.section-sep` — full-width subtle gradient beige line (12% opacity) for section separation
- `.img-zoom` — overflow hidden + scale(1.04) on hover
- `.reveal-hidden` / `.reveal-hidden.visible` — scroll animation
- `.animate-fade-up`, `.animate-fade-in`, `.animate-slide-right`, `.animate-scale-in`
- `.animate-delay-100` through `.animate-delay-700`
- `.prose-custom` — article body typography (p, h2, h3, strong, ul/ol, li, a) for insight pages

### Font Loading (`layout.tsx`)
```tsx
import { Cormorant_Garamond, Inter } from "next/font/google";
const cormorant = Cormorant_Garamond({ variable: "--font-heading", subsets: ["latin"], weight: ["300","400","500","600","700"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"], weight: ["300","400","500","600"] });
```

### Header Pattern (`Header.tsx`)
- Fixed position, z-50
- NOT scrolled: `bg-transparent`, white/beige text
- Scrolled: `bg-navy-dark/95 backdrop-blur-md`, same text colors
- **NEVER white/light on scroll — always dark**
- Logo: CSS-cropped to just the F monogram icon (no "Fatahi Building" text)
  ```tsx
  <Link href="/" className="relative z-50 block h-9 w-9 overflow-hidden">
    <Image src="/images/branding/logo-beige.png" alt="Fatahi Building"
      width={300} height={300}
      className="absolute top-1/2 left-0 -translate-y-1/2 h-[220%] w-auto max-w-none"
      priority />
  </Link>
  ```
- Uses `overflow-hidden` container with oversized image and absolute positioning to crop the full logo PNG to just the icon portion

### Footer (`Footer.tsx`)
- **Client component** (`"use client"`) — uses `usePathname()` to conditionally render CTA
- **CTA Banner** — "Ready to build something that's truly yours?" — **HOMEPAGE ONLY** (hidden on all other pages)
- **Monogram** centered: same crop technique as header (`h-14 w-14 overflow-hidden`, `left-0`, `h-[220%]`), 40% opacity
- **Three columns** centered below: Explore, Services, Connect — `text-center max-w-4xl mx-auto`
- **Social icons:** Instagram + LinkedIn as SVG icons (not text links)
- **Bottom bar:** copyright + tagline, `text-[11px] text-white/15`
- Compact padding: `pt-14 pb-12` for footer body

### ScrollReveal Pattern (`ScrollReveal.tsx`)
Server: renders children visible (no class). Client: after `useEffect`, adds `reveal-hidden` class. IntersectionObserver (threshold 0.15) adds `visible` class when in viewport. Accepts `delay` prop.

---

## Brand Identity & Copy

### Company
- **Name:** Fatahi Building
- **Tagline:** "We design it. We build it."
- **Type:** Design-build custom home builder
- **Location:** Toronto & GTA
- **Differentiator:** They design AND build — same person draws and builds

### People
- **Majid Fatahi** — Founder, Lead Designer & Builder. 30+ years. On site every day.
  - LinkedIn: https://www.linkedin.com/in/majidfatahi/
- **Farbod Fatahi** — Client Relations & Project Management. Weekly Friday reports.
  - LinkedIn: https://www.linkedin.com/in/farbodfatahi/
- **Company LinkedIn:** https://www.linkedin.com/company/fatahi-building-inc/
- **Together:** "Two generations. One standard."

### Services (exact names)
- Custom Homes
- Whole-Home Transformations (NOT "renovations")
- Additions & Extensions

### Privacy — Address Display
- Use **street names only** (no house numbers) in display text
- "Poyntz Avenue" not "131 Poyntz Avenue", "Terrace" not "23 Terrace"
- Route slugs remain unchanged: `/projects/131-poyntz-ave`, `/projects/23-terrace`

### Testimonials (3 real Google reviews)
1. "The work was completed right on time, and Majid along with his entire team handled the project with professionalism, care, and great attention to detail. Everything was finished to a very high standard." — Ali N.
2. "He truly cares about the quality of his work. One thing I really appreciated is that he tries to make sure there is no wasted or unused space in the house, which makes the design very practical and efficient." — Azita N.
3. "Reliable, pays close attention to detail, and focuses on high-quality work. Especially appreciated his effort to create practical, efficient designs." — Green Building Canmo

---

## Projects

### Completed

**Poyntz Avenue** (Custom Home)
- **Location:** North York, Toronto | **Completed:** 2023
- Modern custom home, clean contemporary lines, glass staircase, marble fireplace, wine display, warm oak flooring
- Route: `/projects/131-poyntz-ave` | 13 images (3 twilight exterior + 10 interior)

**Terrace** (Custom Home)
- **Location:** Toronto | **Completed:** 2021
- Walnut ceiling details, black marble kitchen island, brass fixtures, floating oak staircase
- Route: `/projects/23-terrace` | 6 images — **photo selection is weak, needs more angles**
- **NOTE:** This is a CUSTOM HOME, not a transformation/renovation

**Brookdale Avenue** (Whole-Home Transformation — full reno + addition)
- **Status:** Photos NOT ready. Client lives there. Need to arrange photographer.
- Empty folder at `public/images/projects/brookdale/`

**Etobicoke** (Custom Home)
- **Status:** Nearly finished, client has moved in. Photos NOT ready. Need to arrange photographer.
- No folder created yet.

### Currently Building (shown on projects page)

**Betty Ann Drive** — North York, Toronto | Est. Summer 2026
- ~7,000 sq ft on 55×135 ft lot | 4 bed / 8 bath | 3-car garage | Elevator
- 10.5' main floor ceilings, ~14' basement ceilings, walkout basement
- Heated driveway, heated basement floor, massive aluminum windows
- Engineered white oak flooring, custom white oak millwork
- Dual kitchen (show + chef's), deck integrated into concrete structure
- Image folder: `public/images/projects/betty-ann/` — **⚠️ NEEDS `exterior-1.jpg` (fascia photo)**
- Code expects: `/images/projects/betty-ann/exterior-1.jpg`

**Farrell Avenue** — North York, Toronto | Est. Summer 2026
- ~4,500 sq ft | 2-car garage | Walkout basement | Heated driveway | Heated basement
- Scaled-down version of Betty Ann — modern design, oversized windows, open concept
- Image folder: `public/images/projects/farrell/` — **⚠️ NEEDS `exterior-1.jpg` (fascia photo)**
- Code expects: `/images/projects/farrell/exterior-1.jpg`

### Pre-Permit (NOT on website yet)
- 1 custom home in North York — design phase. Will add to site once renderings are ready.

### Photo TODO — Client Outreach
To get photos of completed projects where clients have moved in (Etobicoke, Brookdale):
- Offer free professional photography — client keeps all high-res files
- Frame it as: "Your home is one of our best — we'd love to feature it"
- Assure privacy: no address shown, they review every image before publishing
- Reach out NOW while relationship is warm — gets harder with time
- Brookdale has before/after potential (before shots exist) — mention this as a selling point

---

## Image Assets (all in `public/`)

### Poyntz Ave (`public/images/projects/poyntz/`)
- `twilight-1.jpg` — **PRIMARY HERO IMAGE** (house facade, `background-position: center 60%`)
- `twilight-2.jpg`, `twilight-3.jpg` — Additional twilight exterior shots
- `interior-01.jpg` through `interior-10.jpg` — Staircase, living room, kitchen, family room, etc.

### Terrace (`public/images/projects/terrace/`)
- `kitchen-1.jpg`, `kitchen-2.jpg` — Walnut ceiling, black marble island, brass fixtures
- `dining.jpg` — Walnut wall detail, glass table, designer chairs
- `living.jpg` — Fireplace, media niche
- `interior-01.jpg`, `interior-02.jpg`

### Branding (`public/images/branding/`)
- `logo-beige.png` — Beige logo on transparent (used site-wide for both header icon crop and footer)
- `logo-navy.png` — Navy logo on transparent (not currently used)
- `logo-inverted.jpg` — Navy logo on beige background
- `profile-navy.jpg`, `profile-icon.jpg` — Logo icons (profile-icon.jpg has baked-in navy bg — don't use against navy-dark)

### Logo
Geometric/architectural "F" monogram forming an isometric cube/house shape. Clean, modern, minimal. The full PNG includes "Fatahi Building" text to the right of the icon.

---

## LinkedIn Links

| Where | URL | Location in Code |
|-------|-----|-----------------|
| Majid (personal) | https://www.linkedin.com/in/majidfatahi/ | `about/page.tsx` — after Majid's bio |
| Farbod (personal) | https://www.linkedin.com/in/farbodfatahi/ | `about/page.tsx` — after Farbod's bio |
| Company | https://www.linkedin.com/company/fatahi-building-inc/ | `contact/page.tsx` sidebar, `Footer.tsx` |
| Instagram | https://instagram.com/fatahibuilding | `contact/page.tsx` sidebar, `Footer.tsx` |

---

## Contact Info
- **Email:** info@fatahibuilding.com (displayed on site) — actual current email is fatahibuilding@gmail.com, needs Google Workspace setup to use the custom domain
- **Phone:** (647) 631-1211 (Farbod's number — primary contact for leads)
- **Instagram:** @fatahibuilding
- **Location:** Toronto & GTA

---

## Pre-Launch Checklist

### CRITICAL — Must fix before going live

- [ ] **1. Contact form backend** — currently `console.log` only (line 22 of `contact/page.tsx`). Wire up with Resend (free tier, works with Next.js API routes). Needs to send to fatahibuilding@gmail.com (or info@fatahibuilding.com once Google Workspace is set up).
- [ ] **2. Majid & Farbod portraits** — About page has "Photo Coming Soon" placeholder boxes. Non-negotiable for a premium site targeting $3-5M clients. Drop photos into `public/images/team/majid.jpg` and `farbod.jpg`.
- [ ] **3. Privacy Policy page** — legal requirement. Create at `/privacy`. High-net-worth clients notice this.
- [ ] **4. robots.txt** — missing from `public/`. Need a basic one allowing all crawlers.
- [ ] **5. sitemap.xml** — missing. Use Next.js built-in sitemap generation or create static file in `public/`.
- [ ] **6. OpenGraph image** — no `og:image` defined. When links are shared on LinkedIn/iMessage, there's no preview image. Create a branded OG image (1200×630) at `public/images/og-image.jpg` and add to root layout metadata.

### HIGH PRIORITY — Before promoting the site

- [ ] **7. Betty Ann & Farrell fascia photos** → drop into `public/images/projects/betty-ann/exterior-1.jpg` and `farrell/exterior-1.jpg` — in-progress section is built and waiting for images
- [ ] **8. Brookdale photography** — arrange photographer, client lives there (full reno + addition). Before/after potential.
- [ ] **9. Etobicoke photography** — arrange photographer, client has moved in (custom home)
- [ ] **10. Terrace re-shoot** — current 6 images lack variety, need more angles
- [ ] **11. JSON-LD structured data** — add LocalBusiness schema to root layout for Google search results (business name, address, phone, rating, service area)
- [ ] **12. Google Analytics (GA4)** — no analytics currently. Can't measure what's working without it.
- [ ] **13. Deploy to Vercel** — site is ready for deployment once contact form works

### MEDIUM PRIORITY — Within first month after launch

- [ ] **14. Google Workspace setup** — migrate fatahibuilding@gmail.com → info@fatahibuilding.com (~$7/mo CAD)
- [ ] **15. Google Business Profile** — verify business on Google for local search visibility
- [ ] **16. FAQ page** — high-end clients have specific questions (timeline, budget process, what's included). Reduces friction before they reach out.
- [ ] **17. More testimonials** — only 3 currently. Ask recent clients for Google reviews. Volume of social proof matters for luxury positioning.
- [ ] **18. Review site on mobile** — verify padding/spacing at all breakpoints
- [ ] **19. Add pre-permit project** once renderings are ready

### COMPLETED
- [x] Footer redesign — centered monogram + 3-column layout
- [x] Update phone number — (647) 631-1211 in Footer + Contact page
- [x] Footer CTA — moved to homepage only (removed duplication on other pages)
- [x] Real blog posts for Insights page — 3 longform articles written + wired as pages
- [x] Content strategy — `INSIGHTS-STRATEGY.md` with LinkedIn repurposing plan

---

## Package Versions
```json
{
  "next": "16.1.6",
  "react": "19.2.3",
  "react-dom": "19.2.3",
  "tailwindcss": "^4",
  "@tailwindcss/postcss": "^4"
}
```

---

## Key Lessons (for future sessions)

1. **Tailwind v4 cascade layers:** Never add un-layered `* {}` resets — they override ALL Tailwind utilities because utilities are in `@layer utilities` and un-layered CSS always wins.
2. **Logo cropping:** Use `overflow-hidden` container with oversized image and absolute positioning to crop a PNG to a specific region, avoiding the need for a separate cropped image file.
3. **Navy color matching:** The navy-dark color (#182640) was tuned through 4 iterations to match the logo color. Previous values that were too dark or too bright: #0f1829, #2b3856, #1e2d4d.
4. **Footer monogram centering:** Use same crop as header (`left-0 -translate-y-1/2 h-[220%]`) inside a `h-14 w-14 overflow-hidden` container, centered with `flex justify-center`. The `left-0` approach works because the icon is at the left edge of the full logo PNG.
5. **"30+ Years" overlay on hero:** `bg-white/5` is invisible against bright photos. Use `bg-navy-dark/60 backdrop-blur-md` for legibility.
6. **Footer CTA duplication:** The "Ready to build?" CTA was on every page, duplicating per-page CTAs. Fixed by using `usePathname()` in Footer to show CTA only on homepage. This made Footer a client component (`"use client"`).
7. **Insight article typography:** Un-layered `.prose-custom` CSS class handles all article body styling (p, h2, h3, strong, lists). Because it's un-layered it wins over Tailwind utilities — this is intentional for prose content but be careful not to conflict elsewhere.
8. **Insights page thumbnails:** Tried real project photos (felt redundant with projects page), abstract decorative letters (too subtle), and settled on thin-stroke SVG category icons (pencil+ruler, clipboard, stacked layers) — best balance of visual interest and editorial feel.

import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "New Custom Home in North York: Old Yonge | Fatahi Building",
  description:
    "A custom home of more than 8,000 sq ft under construction on Old Yonge Street in North York. Follow the build from design and approvals to the foundation.",
  alternates: { canonical: "/projects/225-old-yonge" },
};

const highlights = [
  "8,000+ sq ft",
  "3-car garage",
  "Heated driveway",
  "Elevator",
  "11’ basement ceilings",
  "Walkout basement",
  "Radiant heated floors",
  "Full-height foundation walls",
];

const buildLog: { when: string; what: string; detail: string }[] = [
  {
    when: "Spring 2026",
    what: "Design begins",
    detail:
      "The first months were all on paper: where the house sits on the lot, how it works, and what the clients need from it.",
  },
  {
    when: "End of July 2026",
    what: "Committee of Adjustment approval",
    detail:
      "The design needed some variances, so it went to the Committee of Adjustment. It was approved on the first application.",
  },
  {
    when: "Summer 2026",
    what: "Tree protection",
    detail:
      "The tree protection zones were fenced before anything else happened on site. One zone at the front carries two kinds of fence, because it crosses the property line.",
  },
  {
    when: "End of September 2026",
    what: "Permits issued",
    detail:
      "From the first meeting to permits in hand was five to six months. From the street, the lot looked the same the whole time.",
  },
  {
    when: "October 2026",
    what: "Demolition and site preparation",
    detail:
      "The old house came down. The driveway was cut down to remove its slope, and a base of crushed stone went in so machines don’t get stuck and mud isn’t dragged across the street.",
  },
  {
    when: "Late October 2026",
    what: "Excavation and footings",
    detail:
      "The dig started at the basement walkout. The footings were formed and poured, with the drawings and the soil conditions checked before any concrete went in.",
  },
  {
    when: "November 2026",
    what: "Foundation walls",
    detail:
      "The forms for the foundation walls are going up. On this house they run full height, with the concrete carried all the way up to where the main floor starts.",
  },
];

export default function OldYongeProjectPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: "Old Yonge", path: "/projects/225-old-yonge" },
        ])}
      />

      {/* HERO */}
      <section className="relative pt-44 pb-16 md:pt-52 md:pb-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-3xl">
            <Link href="/projects" className="inline-flex items-center text-white/50 text-[13px] font-medium tracking-[0.15em] hover:text-beige transition-colors duration-500 mb-8 group">
              <svg className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              All Projects
            </Link>
            <div className="divider mb-6" />
            <p className="section-label mb-6">Custom Home Under Construction in North York</p>
            <h1 className="text-4xl md:text-5xl font-light font-heading text-white leading-tight tracking-wide">Old Yonge</h1>
            <p className="mt-8 text-lg text-white/70 font-light leading-relaxed">
              A modern custom home in the heart of North York that blends open-concept living with contemporary styling, designed for effortless living.
            </p>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROJECT INFO */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-28">
              <div className="lg:col-span-4">
                <div className="space-y-8">
                  <div><p className="section-label mb-2">Project Type</p><p className="text-white font-light text-lg">Custom Home</p></div>
                  <div><p className="section-label mb-2">Location</p><p className="text-white font-light text-lg">Old Yonge Street, North York, Toronto</p></div>
                  <div><p className="section-label mb-2">Status</p><p className="text-white font-light text-lg">Under construction</p></div>
                  <div><p className="section-label mb-2">Scope</p><p className="text-white font-light text-lg">Design &amp; Build</p></div>
                  <div><p className="section-label mb-2">Living Space</p><p className="text-white font-light text-lg">More than 8,000 sq ft</p></div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-2xl md:text-3xl font-light font-heading text-white tracking-wide mb-8">The home</h2>
                <div className="prose-custom">
                  <p>
                    Grand open spaces and tall ceilings, warmed by natural
                    materials and millwork. The home has a three-car garage, a
                    heated driveway and an elevator. Below, the basement has
                    11-foot ceilings, radiant heated floors in the slab, and a
                    walkout at the back.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {highlights.map((h) => (
                    <span key={h} className="text-[11px] font-light tracking-[0.1em] text-white/50 border border-white/10 px-3 py-1.5">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* BUILD LOG */}
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="section-label mb-8">Build Log</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-10">How this house has come together so far</h2>
            <ol className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
              {buildLog.map((entry) => (
                <li key={entry.what} className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-8 py-6">
                  <p className="section-label md:pt-1">{entry.when}</p>
                  <div className="md:col-span-3">
                    <h3 className="text-white font-light text-lg mb-2">{entry.what}</h3>
                    <p className="text-white/70 font-light text-[15px] leading-[1.85]">{entry.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-white/50 font-light text-sm leading-relaxed mt-8">
              Next: framing, and getting the house closed in before the first snowfall.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* DESIGN DECISIONS */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="section-label mb-8">Design Decisions</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-10">Three decisions made before the dig</h2>
            <div className="prose-custom">
              <h3>The driveway came down</h3>
              <p>
                The old house sat high relative to the street, so the driveway
                had a steep slope. It was one of the biggest issues with the
                property and one of the first things the design set out to
                fix. The driveway was brought down and flattened, which makes
                it bigger, lets it fit more cars, and makes it easier to use
                day to day. The garage sits underneath the main floor and
                above the basement, which gives a bigger main floor, a bigger
                basement and a more usable garage.
              </p>
              <p>
                It also changed the ceilings. Every lot has an established
                grade, which is basically where the old house and driveway
                sat, and lowering the driveway doesn&apos;t move it. So the new
                house can start lower in the ground, and because height limits
                are measured from the established grade, the main and second
                floors get significantly higher ceilings.
              </p>

              <h3>The foundation walls run full height</h3>
              <p>
                The concrete goes all the way up to where the main floor
                starts. That gets the lumber further away from the ground and
                the moisture, which reduces the risk of rot, and it gives a
                solid base to build the house up from. The full account is in{" "}
                <Link href="/insights/custom-home-foundation-north-york">The Concrete on This House Doesn&apos;t Stop at the Ground</Link>.
              </p>

              <h3>The elevator was planned from the first drawing</h3>
              <p>
                The slab under the elevator gets its own footings and sits a
                foot lower than the rest of the basement, so there is no step
                walking in and out. The structure is reinforced around the
                shaft all the way up the house, and nothing can protrude into
                it. It isn&apos;t something that can be added later.
              </p>

              <h3>More on this build</h3>
              <ul>
                <li>
                  <Link href="/insights/custom-home-timeline-toronto-before-you-build">For Six Months You Could Have Driven Past This Lot</Link>:
                  the design and approvals before demolition.
                </li>
                <li>
                  <Link href="/insights/tree-protection-zones-toronto">You Can Kill a Tree on a Construction Site Without Ever Touching It</Link>:
                  the tree protection zones on this lot.
                </li>
                <li>
                  <Link href="/insights/fixed-price-vs-cost-plus-custom-home">The Two Ways to Price a Custom Home</Link>:
                  why the slope of this lot couldn&apos;t be priced from a photo.
                </li>
                <li>
                  <Link href="/insights/building-custom-homes-north-york">What It&apos;s Actually Like to Build a Custom Home in North York</Link>.
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">See It in Person</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">Walk an active site with us</h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              If you&apos;re planning a custom home, come see this one while it&apos;s being built. Leave your details and we&apos;ll call you.
            </p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">
              Request a Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

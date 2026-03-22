import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Insights | Fatahi Building",
  description: "Practical advice on custom home building, design-build, material selection, and the construction process from the Fatahi Building team.",
};

/* Category icons — thin-stroke SVG paths */
const categoryIcons: Record<string, React.ReactNode> = {
  "Design-Build": (
    /* Pencil + ruler — design & construction */
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <path d="M6 42l4-14L34 4l4 4L14 32z" />
      <path d="M10 28l4 4" />
      <path d="M28 8l4 4" />
      <path d="M38 10l2-2a2 2 0 00-3-3l-2 2" />
      <path d="M42 6v36H18" />
      <path d="M42 14h-3M42 22h-3M42 30h-3M42 38h-3" />
      <path d="M26 42v-3M34 42v-3" />
    </svg>
  ),
  Process: (
    /* Clipboard with checklist — process / planning */
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <rect x="10" y="6" width="28" height="38" rx="2" />
      <path d="M18 6V4a4 4 0 018 0v2" />
      <rect x="18" y="2" width="12" height="6" rx="1" />
      <path d="M17 20l2 2 4-4" />
      <path d="M27 20h6" />
      <path d="M17 29l2 2 4-4" />
      <path d="M27 29h6" />
      <path d="M17 38h16" />
    </svg>
  ),
  Materials: (
    /* Stacked layers — materials / surfaces */
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" className="w-16 h-16">
      <path d="M24 4L4 16l20 12 20-12z" />
      <path d="M4 24l20 12 20-12" />
      <path d="M4 32l20 12 20-12" />
    </svg>
  ),
};

const articles = [
  { slug: "/insights/why-design-build-changes-everything", title: "Why Design-Build Changes Everything", excerpt: "When the person who designs your home is the same person building it, nothing gets lost in translation. Here\u2019s why the design-build model leads to better outcomes, fewer surprises, and a home that matches what was promised.", date: "March 2026", category: "Design-Build" },
  { slug: "/insights/what-to-expect-during-preconstruction", title: "What to Expect During Preconstruction", excerpt: "The weeks before construction begins are where the real decisions happen. From material selections to permit timelines, here\u2019s what the preconstruction phase looks like and why it matters more than most people think.", date: "February 2026", category: "Process" },
  { slug: "/insights/choosing-materials-that-last", title: "Choosing Materials That Last", excerpt: "Not every premium material is the right choice for every home. We break down how to evaluate flooring, countertops, and fixtures based on durability, maintenance, and how you actually live.", date: "January 2026", category: "Materials" },
];

export default function InsightsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="section-label mb-8">Insights</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-heading text-white leading-tight tracking-wide">
                Building Knowledge
              </h1>
              <div className="divider mt-10 mb-10" />
              <p className="text-white/50 font-light leading-relaxed max-w-lg">
                Practical guidance on custom home building, materials, and the design-build process &mdash; from a team with over 30 years in the trade.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ARTICLES */}
      <section className="py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-8 md:px-16">
          <div className="space-y-0 divide-y divide-white/10">
            {articles.map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 100}>
                <Link href={article.slug} className="group block py-16 first:pt-4 last:pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                    <div className="md:col-span-5">
                      <div className="aspect-[4/3] bg-white/[0.03] border border-white/10 relative overflow-hidden flex items-center justify-center">
                        <div className="text-white/15 group-hover:text-beige/25 transition-colors duration-500">
                          {categoryIcons[article.category]}
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <p className="text-white/20 text-[11px] font-medium tracking-[0.2em]">{article.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="md:col-span-7">
                      <p className="section-label mb-4">{article.category}</p>
                      <h2 className="text-xl md:text-2xl font-light font-heading text-white tracking-wide mb-5 group-hover:text-beige transition-colors duration-300">
                        {article.title}
                      </h2>
                      <p className="text-white/60 font-light text-sm leading-relaxed mb-6">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <p className="text-white/30 text-xs font-light">{article.date}</p>
                        <span className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] group-hover:text-beige-light transition-colors duration-300">
                          Read More
                          <svg className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Have Questions?</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              We&apos;re happy to help
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Whether you&apos;re in the early planning stages or ready to start building, we&apos;re here to answer your questions.
            </p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

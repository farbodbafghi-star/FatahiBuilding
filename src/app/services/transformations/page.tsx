import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  { title: "Complete Redesign", description: "We don&apos;t work around existing layouts — we reimagine them. Walls move. Spaces open up. The home gets redesigned from the inside out to match how you actually live." },
  { title: "Structural Integrity", description: "Every modification is engineered properly. Load-bearing walls, foundation work, structural steel — we handle the complexity so the result feels effortless." },
  { title: "Modern Systems", description: "New electrical, plumbing, HVAC, and insulation integrated into the existing framework. The bones of the house get upgraded along with everything you see." },
  { title: "Design Continuity", description: "The finished home should feel cohesive — not like a renovation was done. Every material, finish, and detail is selected to create a unified result." },
];


export default function TransformationsPage() {
  return (
    <>
      {/* HERO — with image */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/poyntz/interior-01.jpg" alt="Whole-home transformation by Fatahi Building" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-8 animate-fade-in">Whole-Home Transformations</p>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">Redesigned and rebuilt.<br />Not just renovated.</h1>
            <p className="mt-6 text-lg text-white/70 font-light leading-relaxed animate-fade-up animate-delay-200">Complete reimagining of an existing structure. The result should feel like it was always meant to be this way.</p>
            <div className="divider mt-10 animate-fade-in animate-delay-300" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <ScrollReveal>
              <div>
                <p className="section-label mb-8">Beyond Renovation</p>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-white leading-snug tracking-wide">The difference between<br />renovating and transforming</h2>
                <div className="divider mt-10 mb-10" />
                <p className="text-white/70 font-light leading-relaxed mb-6">A renovation updates surfaces. A transformation rethinks everything. We take an existing structure and completely reimagine how it functions — new layouts, new systems, new finishes — while preserving what makes the home worth keeping.</p>
                <p className="text-white/70 font-light leading-relaxed mb-6">Because we design and build under one roof, we can see possibilities that others miss. Walls that should move. Spaces that should open. Light that should reach rooms it never did before.</p>
                <p className="text-white/70 font-light leading-relaxed">The goal isn&apos;t a home that looks renovated. It&apos;s a home that feels like it was always meant to be this way.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="img-zoom">
                  <Image src="/images/projects/poyntz/interior-03.jpg" alt="Interior — whole-home transformation" width={800} height={600} className="w-full h-[500px] object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* FEATURES */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">Our Approach</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide">What a transformation includes</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="border-l border-beige/40 pl-8">
                  <h3 className="font-heading text-lg font-light text-white tracking-wide mb-4">{feature.title}</h3>
                  <p className="text-white/50 font-light text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.description }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* WHEN IS IT RIGHT */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="section-label mb-8">Is This Right for You?</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-8">A transformation makes sense when...</h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  "You love your neighbourhood but your home no longer fits your life.",
                  "The layout feels disconnected — rooms that don&apos;t flow, space that isn&apos;t used well.",
                  "You want a result that feels custom-built, not patched together.",
                  "You&apos;ve outgrown cosmetic updates and need something more fundamental.",
                  "You want one team handling design, permits, engineering, and construction.",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 shrink-0" />
                    <p className="text-white/70 font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Ready to Transform?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-8">Tell us about your home</h2>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xl mx-auto mb-10">We&apos;ll start with a conversation about what&apos;s working, what isn&apos;t, and what&apos;s possible. No commitment — just clarity.</p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

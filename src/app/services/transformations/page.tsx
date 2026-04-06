import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessJourney from "@/components/ProcessJourney";
import { transformationsPhases } from "@/data/process-phases";

export default function TransformationsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/terrace/3Q1A2136.JPG" alt="Whole-home transformation by Fatahi Building" fill className="object-cover" priority quality={90} />
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
                <p className="text-white/70 font-light leading-relaxed mb-6">A renovation refreshes surfaces. A transformation reconceives the entire residence: new layouts, new systems, new finishes, while preserving what makes the home worth keeping.</p>
                <p className="text-white/70 font-light leading-relaxed">Because we design and build under one roof, we resolve the full composition before a single wall is moved. The goal is a home that feels like it was always meant to be this way.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="img-zoom">
                  <Image src="/images/projects/terrace/3Q1A2233.JPG" alt="Interior, whole-home transformation" width={800} height={600} className="w-full h-[500px] object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROCESS */}
      <ProcessJourney phases={transformationsPhases} heading="How your transformation unfolds" />

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
                  "You&apos;ve outgrown cosmetic updates and need something more fundamental.",
                  "You want one team handling design, engineering, and construction.",
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

      {/* IMAGE BREAK */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/projects/terrace/3Q1A2238.JPG" alt="Open-concept living and dining, whole-home transformation" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/30" />
      </section>

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Ready to Transform?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-8">Share your vision with us</h2>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xl mx-auto mb-10">We&apos;ll start with a conversation about what&apos;s working, what isn&apos;t, and what&apos;s possible. No commitment, just clarity.</p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

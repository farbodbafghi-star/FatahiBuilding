import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessJourney from "@/components/ProcessJourney";
import { additionsPhases } from "@/data/process-phases";

export default function AdditionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/poyntz/twilight-2.jpg" alt="Home addition by Fatahi Building" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-8 animate-fade-in">Additions &amp; Extensions</p>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">Expansion that feels<br />like it was always there</h1>
            <p className="mt-6 text-lg text-white/70 font-light leading-relaxed animate-fade-up animate-delay-200">Seamless additions designed to integrate with your existing architecture, not just attach to it.</p>
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
                <p className="section-label mb-8">Seamless by Design</p>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-white leading-snug tracking-wide">Built to look like it<br />was always there</h2>
                <div className="divider mt-10 mb-10" />
                <p className="text-white/70 font-light leading-relaxed mb-6">A great addition is invisible. Rooflines align. Materials match. Inside, every floor height, trim profile, and finish flows seamlessly from original to new.</p>
                <p className="text-white/70 font-light leading-relaxed">Our design-build approach lets us study the existing architecture and design the addition as if it were part of the original plan. The measure of success is the point where old and new become indistinguishable.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom aspect-[3/4]">
                  <Image src="/images/projects/poyntz/interior-07.jpg" alt="Interior craftsmanship, addition detail" width={400} height={530} className="w-full h-full object-cover" />
                </div>
                <div className="img-zoom aspect-[3/4] mt-12">
                  <Image src="/images/projects/terrace/interior-02.jpg" alt="Seamless interior transition" width={400} height={530} className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROCESS */}
      <ProcessJourney phases={additionsPhases} heading="How your addition takes shape" />

      <div className="section-sep" />

      {/* IMAGE BREAK */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/projects/terrace/kitchen-1.jpg" alt="Custom kitchen with walnut ceiling detail and island" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/30" />
      </section>

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Expand with Intention</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-8">Let&apos;s talk about what&apos;s possible</h2>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xl mx-auto mb-10">Tell us about your residence and your vision for it. We&apos;ll discuss how an addition can honour your existing architecture and whether it&apos;s the right approach.</p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

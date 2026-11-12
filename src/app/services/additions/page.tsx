import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessJourney from "@/components/ProcessJourney";
import Faq, { type FaqItem } from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { additionsPhases } from "@/data/process-phases";

const faqs: FaqItem[] = [
  {
    q: "Can my house carry a second-storey addition?",
    a: "That's the first thing we check. Adding a second storey to a bungalow often means reinforcing or replacing the first-floor structure so it can take the new load. The structural engineering is worked out at the design stage, before anything is priced.",
  },
  {
    q: "Will a home addition need a variance?",
    a: "It depends on the lot. If the addition goes past a zoning limit, such as height, a setback or lot coverage, it needs a minor variance from the Committee of Adjustment, which adds two to four months at minimum. On some wide lots, the zoning allows more than what's there today.",
    href: "/insights/committee-of-adjustment-toronto",
    linkLabel: "Read how the Committee of Adjustment works.",
  },
  {
    q: "Should I add on, or rebuild?",
    a: "If the existing structure can carry the addition, adding on keeps the home and the street you already have. If the first floor would need to be largely rebuilt to carry it, a new build may give you a better result. We'll tell you which on the first walk.",
    href: "/insights/renovate-or-rebuild",
    linkLabel: "How to think through renovating or rebuilding.",
  },
  {
    q: "How is a home addition priced?",
    a: "We work off a fixed price. The foundation requirements, the zoning compliance and every finish are resolved before construction begins, and the price holds for the scope you agreed on.",
    href: "/insights/fixed-price-vs-cost-plus-custom-home",
    linkLabel: "Fixed price and cost plus, compared.",
  },
  {
    q: "Will the addition match the rest of the house?",
    a: "That's the measure we hold it to. Rooflines align and materials match on the outside. Inside, floor heights, trim profiles and finishes carry from the original house into the new space.",
  },
  {
    q: "What is the first step?",
    a: "Send us a message and we'll come walk the house and the lot with you. We look at the structure and the zoning first, talk through what your home is missing, and tell you whether an addition is the right way to get it.",
  },
];

export const metadata: Metadata = {
  title: "Home Additions in Toronto | Fatahi Building",
  description:
    "Second-storey and rear additions in Toronto, designed and built to look like they were always part of the house.",
  alternates: { canonical: "/services/additions" },
};

export default function AdditionsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Home Additions and Extensions",
            serviceType: "Home addition",
            description: String(metadata.description),
            path: "/services/additions",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Additions", path: "/services/additions" },
          ]),
        ]}
      />
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/poyntz/004-131 Poyntz Ave - N. York - Twilights-4.jpg" alt="Home designed and built by Fatahi Building, North York" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <h1 className="section-label mb-8 animate-fade-in">Home Additions &amp; Second-Storey Additions in Toronto</h1>
            <p className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">Expansion that feels<br />like it was always there</p>
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
              <div className="hidden lg:block" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* WHAT IT INVOLVES */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="section-label mb-8">Home Additions in Toronto</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-10">More room, without moving</h2>
            <div className="prose-custom">
              <p>
                Some homes don&apos;t need a renovation or a rebuild. They need
                an addition, to make room for how you live now. We design and
                build second-storey additions, rear additions and extensions
                in Toronto, whether that&apos;s a new floor, a rear extension
                or an entirely new wing.
              </p>

              <h3>Second-storey additions: the structure comes first</h3>
              <p>
                If it&apos;s a second storey on a bungalow, the first thing we
                check is whether the existing house can carry it. Often the
                first-floor structure needs reinforcing or replacing to take
                the new load. That is settled at the design stage, with the
                structural engineering, before anything is priced.
              </p>

              <h3>What the lot allows</h3>
              <p>
                Zoning can go either way. On a wide lot in North York, the
                rules sometimes let you build out more than what&apos;s there
                today. And where an addition goes past a limit, such as
                height, a setback or lot coverage, it needs a minor variance
                from the{" "}
                <Link href="/insights/committee-of-adjustment-toronto">Committee of Adjustment</Link>,
                which adds two to four months at minimum. We check the zoning
                before a design is final, so the approvals are part of the
                plan.
              </p>

              <h3>When an addition isn&apos;t the answer</h3>
              <p>
                Sometimes the work needed to carry an addition comes close to
                rebuilding the floor underneath it. At that point it&apos;s
                worth comparing a{" "}
                <Link href="/services/transformations">whole-home transformation</Link>{" "}
                or a{" "}
                <Link href="/services/custom-homes">new custom home</Link>,
                and we&apos;ll tell you which way it should go. The full
                reasoning is in{" "}
                <Link href="/insights/renovate-or-rebuild">Is It Worth Renovating or Should You Rebuild?</Link>
              </p>

              <h3>One scope, one price, one team</h3>
              <p>
                The foundation requirements, the zoning compliance and every
                finish are resolved before construction begins. We work off{" "}
                <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>,
                so the number holds for the scope you agreed on. During
                construction Majid is on site daily, making sure the new
                structure ties into the existing one, and you receive a
                written progress report every Friday.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROCESS */}
      <ProcessJourney phases={additionsPhases} heading="How your addition takes shape" />

      <div className="section-sep" />

      {/* IMAGE BREAK */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/projects/poyntz/035-Images_025.jpg" alt="Open-concept kitchen and living area" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/30" />
      </section>

      <Faq heading="Addition questions we hear most" items={faqs} />

      <div className="section-sep" />

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

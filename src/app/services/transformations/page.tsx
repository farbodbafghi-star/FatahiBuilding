import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessJourney from "@/components/ProcessJourney";
import Faq, { type FaqItem } from "@/components/Faq";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { transformationsPhases } from "@/data/process-phases";

const faqs: FaqItem[] = [
  {
    q: "Should I renovate my house or rebuild it?",
    a: "It depends on the house, the lot and what you're trying to achieve. If the foundation, the framing and the mechanical systems can carry the home you want, a whole-home renovation is a real option. If the structure is too far gone, or the existing layout can't fit the one you want, building new is the more honest path.",
    href: "/insights/renovate-or-rebuild",
    linkLabel: "How to think through renovating or rebuilding.",
  },
  {
    q: "Is a whole-home renovation less expensive than building new?",
    a: "Not always. Once walls are opened, the wiring, the plumbing and the insulation usually need replacing, and that work adds up. The gap between a deep renovation and a new build is often narrower than it first appears, which is why we look at both options for your specific property.",
  },
  {
    q: "Will my renovation need permits or a variance?",
    a: "We handle the permits and the municipal approvals. If the design adds space beyond what the zoning allows, it goes to the Committee of Adjustment first, which adds two to four months at minimum.",
    href: "/insights/committee-of-adjustment-toronto",
    linkLabel: "Read how the Committee of Adjustment works.",
  },
  {
    q: "How is a whole-home renovation priced?",
    a: "We work off a fixed price. Every structural modification, system upgrade and finish is specified and priced, and you approve the complete scope before any wall is touched. The price holds for the scope you agreed on.",
    href: "/insights/fixed-price-vs-cost-plus-custom-home",
    linkLabel: "Fixed price and cost plus, compared.",
  },
  {
    q: "Could rebuilding mean ending up with a smaller house?",
    a: "In some Toronto neighbourhoods, yes. Current zoning can be more restrictive than when the house was built, so tearing down can mean building back smaller. In those cases a renovation within the existing footprint gives you more usable space. We assess zoning early in every conversation.",
  },
  {
    q: "What is the first step?",
    a: "Send us a message and we'll come walk the house with you. We look at the structure first, talk through how you live and what isn't working, and tell you whether it should be a renovation, an addition or a new build.",
  },
];

export const metadata: Metadata = {
  title: "Whole-Home Renovations in Toronto | Fatahi Building",
  description:
    "Whole-home transformations in Toronto: open layouts, new systems and a rebuilt interior, while keeping the home you already have. Designed and built by one team.",
  alternates: { canonical: "/services/transformations" },
};

export default function TransformationsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Whole-Home Renovations and Transformations",
            serviceType: "Whole-home renovation",
            description: String(metadata.description),
            path: "/services/transformations",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Whole-Home Transformations", path: "/services/transformations" },
          ]),
        ]}
      />
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/terrace/3Q1A2136.JPG" alt="Interior designed and built by Fatahi Building, North York" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <Breadcrumbs className="mb-6 animate-fade-in" items={[{ name: "Home", path: "/" }, { name: "Whole-Home Transformations" }]} />
            <h1 className="section-label mb-8 animate-fade-in">Whole-Home Renovations &amp; Transformations in Toronto</h1>
            <p className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">Redesigned and rebuilt.<br />Not just renovated.</p>
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
                  <Image src="/images/projects/terrace/3Q1A2233.JPG" alt="Interior detail by Fatahi Building, North York" width={800} height={600} className="w-full h-[500px] object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* WHAT IT INVOLVES */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="section-label mb-8">Whole-Home Renovation in Toronto</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-10">Not every project starts with knocking a house down</h2>
            <div className="prose-custom">
              <p>
                Most of what we build is custom homes from the ground up, but
                not every project starts with knocking a house down. Some
                homes just need a few walls opened up and new finishes. Some
                need an addition to make room for how you live now. And some
                are structurally too far gone, or can&apos;t fit the layout you
                want, and that&apos;s when we build new.
              </p>
              <p>
                A whole-home transformation is for the first kind: you love
                where your house is, but not how it works.
              </p>

              <h3>We start with what&apos;s under the kitchen</h3>
              <p>
                The way we look at a house starts underneath, with the
                foundation, the framing and the mechanical systems. A lot of
                Toronto homes built from the 1950s through the 1970s sit on
                concrete block rather than poured concrete. If the bones can
                carry the home you want, renovating is a real option. If they
                can&apos;t, we&apos;ll tell you that on the first walk. We go
                through the whole decision in{" "}
                <Link href="/insights/renovate-or-rebuild">Is It Worth Renovating or Should You Rebuild?</Link>
              </p>

              <h3>What a whole-home renovation usually includes</h3>
              <ul>
                <li>Selective demolition, often down to the studs through most or all of the home</li>
                <li>New mechanical, electrical and plumbing throughout</li>
                <li>Structural reinforcement or modification, so the layout can open up</li>
                <li>A full interior buildout: floors, walls, ceilings, the kitchen, bathrooms and millwork</li>
                <li>Often a new roof, new windows and new exterior cladding</li>
              </ul>
              <p>
                The kitchen and the main floor are usually where the layout
                changes most, and{" "}
                <Link href="/insights/why-layout-matters-more-than-finishes">layout is the decision that matters more than any finish</Link>.
              </p>

              <h3>What the zoning allows</h3>
              <p>
                In some Toronto neighbourhoods, the current by-laws are more
                restrictive than when the house was built, so tearing it down
                can mean building back smaller. In those cases a
                transformation within the existing footprint gives you more
                usable space than a new build would. We assess zoning early
                in every conversation.
              </p>

              <h3>A fixed scope before any wall is touched</h3>
              <p>
                Every structural modification, system upgrade and finish is
                specified and priced, and you approve the complete scope
                before construction begins. We work off{" "}
                <Link href="/insights/fixed-price-vs-cost-plus-custom-home">a fixed price</Link>,
                so the number holds for the scope you agreed on. During
                construction Majid is on site daily, and you receive a written
                progress report every Friday.
              </p>
            </div>
          </ScrollReveal>
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
        <Image src="/images/projects/terrace/3Q1A2238.JPG" alt="Open-concept living and dining by Fatahi Building, North York" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/30" />
      </section>

      <Faq heading="Renovation questions we hear most" items={faqs} />

      <div className="section-sep" />

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

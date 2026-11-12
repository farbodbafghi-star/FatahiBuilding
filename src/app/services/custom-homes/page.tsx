import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessJourney from "@/components/ProcessJourney";
import Faq, { type FaqItem } from "@/components/Faq";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import { customHomesPhases } from "@/data/process-phases";

const galleryImages = [
  { src: "/images/projects/poyntz/027-Images_017.jpg", alt: "Custom home living room with marble fireplace" },
  { src: "/images/projects/poyntz/025-Images_015.jpg", alt: "Custom staircase with glass railings" },
  { src: "/images/projects/poyntz/033-Images_023.jpg", alt: "Dining area with wine wall display" },
  { src: "/images/projects/poyntz/045-Images_035.jpg", alt: "Kitchen with marble backsplash and pendants" },
  { src: "/images/projects/poyntz/070-Images_060.jpg", alt: "Ensuite bathroom with freestanding tub" },
  { src: "/images/projects/terrace/3Q1A2268.JPG", alt: "Kitchen with black marble island and walnut details" },
];

const faqs: FaqItem[] = [
  {
    q: "How long before construction can start on a custom home in Toronto?",
    a: "From our first conversation to permits in hand, there's about five to six months of work on average. That covers the design, the engineering, arborist reports where there are mature trees, and for most homes the Committee of Adjustment, which on its own adds two to four months at minimum.",
    href: "/insights/custom-home-timeline-toronto-before-you-build",
    linkLabel: "See how those months ran on our Old Yonge build.",
  },
  {
    q: "Will my custom home need to go to the Committee of Adjustment?",
    a: "For most homes nowadays, yes. A design that fits its lot often needs at least one minor variance, and each one is decided at a public hearing. We design with the zoning by-law in front of us, so we know every variance a design will need before the drawings are final.",
    href: "/insights/committee-of-adjustment-toronto",
    linkLabel: "Read how the Committee of Adjustment works.",
  },
  {
    q: "How do you price a custom home?",
    a: "We work off a fixed price. We settle the scope first, build an accurate budget and a real schedule around it, and then the number stops moving. The price holds for the scope you agreed on.",
    href: "/insights/fixed-price-vs-cost-plus-custom-home",
    linkLabel: "Fixed price and cost plus, compared.",
  },
  {
    q: "What does it cost per square foot to build a custom home?",
    a: "Two houses can be identical in size and cost completely different amounts to build, depending on the lot, the layout, the materials and the finishes. So we walk you through what our previous projects have averaged for those specific homes, and how much more or less yours would cost based on what you're planning.",
    href: "/insights/cost-per-square-foot-custom-home",
    linkLabel: "What a cost per square foot figure leaves out.",
  },
  {
    q: "Can I bring my own architect or designer?",
    a: "Yes. We design and build as one team, and we also build homes designed by outside architects. When we do, we build them the way they were drawn.",
  },
  {
    q: "What is the first step?",
    a: "A small one. Reach out, come see our past work in person or visit an active site, and sit down with us to talk through your goals, your needs and how you live. You leave with a direction, a timeline and a rough estimate. Committing to anything comes later.",
  },
];

export const metadata: Metadata = {
  title: "Custom Home Builder in Toronto & North York | Fatahi Building",
  description:
    "Design-build custom homes in Toronto and North York. Design, engineering, approvals and construction handled by one team, from teardown to keys.",
  alternates: { canonical: "/services/custom-homes" },
};

export default function CustomHomesPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: "Custom Home Design and Build",
            serviceType: "Custom home builder",
            description: String(metadata.description),
            path: "/services/custom-homes",
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Custom Homes", path: "/services/custom-homes" },
          ]),
        ]}
      />
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/poyntz/twilight-1.jpg" alt="Custom home by Fatahi Building, Poyntz at twilight" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <Breadcrumbs className="mb-6 animate-fade-in" items={[{ name: "Home", path: "/" }, { name: "Custom Homes" }]} />
            <h1 className="section-label mb-8 animate-fade-in">Custom Home Builder in Toronto &amp; North York</h1>
            <p className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">Designed around<br />your life</p>
            <p className="mt-6 text-lg text-white/70 font-light leading-relaxed animate-fade-up animate-delay-200">A complete design-build experience. One team, one vision, one uncompromising standard.</p>
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
                <p className="section-label mb-8">Our Approach</p>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-white leading-snug tracking-wide">Conceived and realized<br />as one</h2>
                <div className="divider mt-10 mb-10" />
                <p className="text-white/70 font-light leading-relaxed mb-6">Majid leads every project as both its designer and master builder. A discipline that ensures the creative vision remains uncompromised from the first concept through to the finished residence.</p>
                <p className="text-white/70 font-light leading-relaxed mb-6">Every design decision is informed by three decades of craft. Materials, proportions, and finishes are resolved with precision. The residence you approve is exactly the one we deliver.</p>
                <p className="text-white/70 font-light leading-relaxed">The result is a residence where every detail feels inevitable, because nothing has been left to interpretation.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="img-zoom">
                <Image src="/images/projects/poyntz/001-131 Poyntz Ave - N. York - Twilights-1.jpg" alt="Custom home exterior at twilight" width={800} height={600} className="w-full h-[500px] object-cover" />
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
            <p className="section-label mb-8">Building a Custom Home in Toronto</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-10">What building with us involves</h2>
            <div className="prose-custom">
              <p>
                We design and build custom homes in Toronto, with most of our
                work in North York. Design, engineering, approvals and
                construction are handled by one team, so the home you approve
                on paper is the home you move into.
              </p>

              <h3>Before construction: five to six months on paper</h3>
              <p>
                From our first conversation to permits in hand, there&apos;s
                about five to six months of work on average before we can put
                a shovel in the ground. That covers the design, the
                engineering, arborist reports where there are{" "}
                <Link href="/insights/tree-protection-zones-toronto">mature trees</Link>,
                and for most homes now, the{" "}
                <Link href="/insights/committee-of-adjustment-toronto">Committee of Adjustment</Link>,
                which on its own adds two to four months at minimum.
              </p>
              <p>
                None of that work happens on site, so it&apos;s the part nobody
                sees. It&apos;s also what decides how the build goes. We wrote
                about{" "}
                <Link href="/insights/custom-home-timeline-toronto-before-you-build">how those months ran on our Old Yonge build</Link>.
              </p>

              <h3>A fixed price, built on the property and the drawings</h3>
              <p>
                We work off a fixed price. We settle the scope first, we build
                an accurate budget and a real schedule around it, and then the
                number stops moving. That price is built on time spent on your
                property and time spent on the drawings, which is why we
                don&apos;t price a home from a photo. Here is{" "}
                <Link href="/insights/fixed-price-vs-cost-plus-custom-home">how a fixed price compares with cost plus</Link>,
                and{" "}
                <Link href="/insights/cost-per-square-foot-custom-home">why a cost per square foot doesn&apos;t tell you much</Link>.
              </p>

              <h3>The part of the house you never see</h3>
              <p>
                On our current build on Old Yonge Street in North York, the
                foundation walls run full height in concrete, the basement has
                11-foot ceilings with radiant heated floors in the slab, and
                the elevator was planned from the first drawing. That stage is
                covered in{" "}
                <Link href="/insights/custom-home-foundation-north-york">The Concrete on This House Doesn&apos;t Stop at the Ground</Link>,
                and the thinking behind it in{" "}
                <Link href="/insights/the-90-percent-you-never-see">The 90% You&apos;ll Never See</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROCESS */}
      <ProcessJourney phases={customHomesPhases} heading="How your home comes to life" />

      <div className="section-sep" />

      {/* GALLERY */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">Craftsmanship</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide">A study in precision</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="img-zoom aspect-[4/3]">
                  <Image src={img.src} alt={img.alt} width={600} height={450} className="w-full h-full object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* RECENT WORK AND AREAS */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <p className="section-label mb-8">Recent Custom Homes</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-10">Where we&apos;ve been building</h2>
            <div className="prose-custom">
              <ul>
                <li>
                  <strong>Old Yonge, North York (under construction).</strong>{" "}
                  A new custom home with more than 8,000 square feet of living
                  space. Design began in the spring of 2026, the permits came
                  through at the end of September, and the foundation is going
                  in now.{" "}
                  <Link href="/projects/225-old-yonge">Follow the build</Link>.
                </li>
                <li>
                  <strong>Betty Ann and Farrell, Willowdale West.</strong> Two
                  custom homes, completing at the end of 2026.
                </li>
                <li>
                  <strong>Poyntz, North York (2023).</strong> A modern custom
                  home at Yonge and Sheppard.{" "}
                  <Link href="/projects/131-poyntz-ave">See the project</Link>.
                </li>
                <li>
                  <strong>Terrace, North York (2021).</strong>{" "}
                  <Link href="/projects/23-terrace">See the project</Link>.
                </li>
              </ul>
              <p>
                Most of our work sits in Willowdale West and along the Yonge
                corridor through North York, including the streets around Old
                Yonge, and we build across Toronto and the GTA. If you&apos;re
                looking at a lot here, start with{" "}
                <Link href="/insights/building-custom-homes-north-york">what it&apos;s actually like to build a custom home in North York</Link>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      <Faq heading="Custom home questions we hear most" items={faqs} />

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Ready to Begin?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-8">Every residence begins with a vision</h2>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xl mx-auto mb-10">Share your vision with us. We&apos;ll show you what&apos;s possible. No obligation. Simply a conversation between you and the team who will bring it to life.</p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

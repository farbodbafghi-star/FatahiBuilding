import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    number: "01",
    title: "Custom Homes",
    headline: "Your home, designed around your life",
    description:
      "Ground-up design and construction. Your home, designed around your life, built by the same team that drew it. From first sketch to final walkthrough, one team handles everything.",
    details: [
      "Architectural design tailored to how you actually live",
      "Full construction management from foundation to finish",
      "One team from concept through completion",
      "Weekly progress reports and full transparency",
    ],
    image: "/images/projects/poyntz/twilight-1.jpg",
    imageAlt: "Custom home exterior at twilight — Poyntz Avenue",
    href: "/services/custom-homes",
  },
  {
    number: "02",
    title: "Whole-Home Transformations",
    headline: "Redesigned and rebuilt — not just renovated",
    description:
      "Complete reimagining of an existing structure. We redesign and rebuild — not just renovate. The result should feel like it was always meant to be this way.",
    details: [
      "Full interior redesign with structural modifications",
      "Modern systems integrated into existing frameworks",
      "Design continuity throughout every room",
      "Permits, engineering, and construction under one roof",
    ],
    image: "/images/projects/terrace/kitchen-1.jpg",
    imageAlt: "Whole-home transformation — modern kitchen design",
    href: "/services/transformations",
  },
  {
    number: "03",
    title: "Additions & Extensions",
    headline: "Expansion that feels original",
    description:
      "Seamless expansion that feels like it was always part of the original design. We design the addition to integrate with the existing architecture.",
    details: [
      "Architectural integration with existing structure",
      "Foundation and structural engineering",
      "Interior design continuity with the original home",
      "Full permit management and municipal coordination",
    ],
    image: "/images/projects/poyntz/twilight-2.jpg",
    imageAlt: "Home addition seamlessly integrated with original architecture",
    href: "/services/additions",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* HERO — with image */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end">
        <Image
          src="/images/projects/poyntz/twilight-3.jpg"
          alt="Custom home by Fatahi Building"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-8 animate-fade-in">Our Services</p>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">
              Built around
              <br />
              how you live
            </h1>
            <div className="divider mt-10 animate-fade-in animate-delay-200" />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      {services.map((service, i) => (
        <div key={service.number}>
          <section className="relative py-10 md:py-16">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center ${
                  i % 2 !== 0 ? "lg:[direction:rtl] lg:[&>*]:[direction:ltr]" : ""
                }`}
              >
                <ScrollReveal>
                  <div className="img-zoom relative">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      width={800}
                      height={600}
                      className="w-full h-[450px] md:h-[550px] object-cover"
                    />
                    <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm px-5 py-3">
                      <span className="text-beige text-2xl font-light">{service.number}</span>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <div>
                    <p className="section-label mb-8">{service.title}</p>
                    <h2 className="font-heading text-3xl md:text-4xl font-light text-white leading-snug tracking-wide">
                      {service.headline}
                    </h2>
                    <div className="divider mt-10 mb-10" />
                    <p className="text-white/70 font-light leading-relaxed mb-8">{service.description}</p>

                    <ul className="space-y-4 mb-10">
                      {service.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 shrink-0" />
                          <span className="text-white/40 font-light text-sm leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.href}
                      className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] uppercase hover:text-beige-light transition-colors duration-500 group"
                    >
                      Learn More
                      <svg className="ml-3 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
          <div className="section-sep" />
        </div>
      ))}

      {/* WHY DESIGN-BUILD */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">The Difference</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide">
                Why design-build?
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 lg:gap-28 items-start">
            <ScrollReveal>
              <div>
                <h3 className="font-heading text-xl font-light text-white/40 tracking-wide mb-6">
                  The traditional approach
                </h3>
                <div className="space-y-5">
                  {[
                    "You hire an architect. Then find a builder. They&apos;ve never worked together.",
                    "The builder interprets the drawings differently than the architect intended.",
                    "Changes cost more because two separate companies need to coordinate.",
                    "Timelines stretch. Budgets inflate. Details get lost between teams.",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-white/20 text-sm mt-0.5">&times;</span>
                      <p className="text-white/40 font-light text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h3 className="font-heading text-xl font-light text-white tracking-wide mb-6">
                  The design-build approach
                </h3>
                <div className="space-y-5">
                  {[
                    "One team designs and builds. The person who draws your home is on site every day.",
                    "No gaps between design intent and construction execution.",
                    "Changes are handled in real time by people who understand both the design and the build.",
                    "Faster timelines, predictable costs, and a finished home that matches what was envisioned.",
                  ].map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 shrink-0" />
                      <p className="text-white/70 font-light text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-20">
              <div className="w-px h-12 bg-white/10 mx-auto mb-8" />
              <p className="text-white/40 font-light text-sm leading-relaxed max-w-xl mx-auto mb-10">
                Over 30 years of designing and building custom homes in Toronto. Every project. One team. No gaps.
              </p>
              <Link
                href="/contact"
                className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
              >
                Start a Conversation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-3xl">
            <div className="divider mb-10" />
            <p className="section-label mb-8">About Us</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-tight tracking-wide">
              Two generations.
              <br />
              One standard.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
              A father and son united by a singular conviction: that the mind
              which conceives a home should be the same one that brings it to
              life. Three decades. One standard.
            </p>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* TEAM */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">The Team</p>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-wide">
                Father &amp; son. Designer &amp; builder.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            <ScrollReveal>
              <div>
                <div className="aspect-[3/4] bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <div className="w-16 h-px bg-beige/30 mx-auto mb-4" />
                    <p className="text-white/20 text-sm font-light tracking-widest uppercase">Photo Coming Soon</p>
                    <div className="w-16 h-px bg-beige/30 mx-auto mt-4" />
                  </div>
                </div>
                <p className="section-label mb-3">Founder, Lead Designer &amp; Builder</p>
                <h3 className="text-2xl font-heading font-light text-white tracking-wide mb-4">Majid Fatahi</h3>
                <div className="divider mb-6" />
                <p className="text-white/70 font-light text-[15px] leading-[1.85] mb-4">
                  For over three decades, Majid has led every project as both
                  its architect and its master builder. A rare discipline that
                  ensures the integrity of the original vision is never compromised.
                </p>
                <p className="text-white/70 font-light text-[15px] leading-[1.85]">
                  His philosophy is simple: the person who conceives a space
                  should be the one accountable for its realization. That
                  commitment has defined every residence he has created.
                </p>
                <a href="https://www.linkedin.com/in/majidfatahi/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige text-sm font-light hover:text-beige-light transition-colors duration-300 mt-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <div className="aspect-[3/4] bg-white/5 border border-white/10 flex items-center justify-center mb-8">
                  <div className="text-center">
                    <div className="w-16 h-px bg-beige/30 mx-auto mb-4" />
                    <p className="text-white/20 text-sm font-light tracking-widest uppercase">Photo Coming Soon</p>
                    <div className="w-16 h-px bg-beige/30 mx-auto mt-4" />
                  </div>
                </div>
                <p className="section-label mb-3">Client Relations &amp; Project Management</p>
                <h3 className="text-2xl font-heading font-light text-white tracking-wide mb-4">Farbod Fatahi</h3>
                <div className="divider mb-6" />
                <p className="text-white/70 font-light text-[15px] leading-[1.85] mb-4">
                  Farbod orchestrates the client experience from the initial
                  consultation through to the final reveal, ensuring absolute
                  clarity, precision in scheduling, and an unwavering standard
                  of communication.
                </p>
                <p className="text-white/70 font-light text-[15px] leading-[1.85]">
                  Comprehensive weekly briefings. Every decision documented
                  with full transparency on scope, cost, and timeline. Our
                  clients are never left to wonder.
                </p>
                <a href="https://www.linkedin.com/in/farbodfatahi/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-beige text-sm font-light hover:text-beige-light transition-colors duration-300 mt-4">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* DESIGN-BUILD PHILOSOPHY */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <ScrollReveal>
              <div>
                <p className="section-label mb-8">Our Philosophy</p>
                <h2 className="text-3xl md:text-4xl font-heading font-light text-white leading-snug tracking-wide">
                  Design and construction
                  <br />
                  in the same hands
                </h2>
                <div className="divider mt-10 mb-10" />
                <p className="text-white/70 font-light text-[15px] leading-[1.85] mb-6">
                  Design and construction exist as a single discipline within
                  our practice. The creative vision that shapes a residence is
                  the same intelligence that guides its realization, ensuring
                  nothing is lost, nothing is compromised.
                </p>
                <p className="text-white/70 font-light text-[15px] leading-[1.85] mb-6">
                  Every design decision is informed by a deep understanding of
                  materials, structure, and craft. The residence you approve is
                  precisely the residence we deliver.
                </p>
                <p className="text-white/70 font-light text-[15px] leading-[1.85]">
                  When design and construction are in the same hands, nothing
                  gets lost.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative bg-white/5 border border-white/10 p-10 md:p-14">
                <span className="text-beige/15 text-7xl font-serif leading-none absolute top-6 left-8">
                  &ldquo;
                </span>
                <div className="relative z-10 pt-8">
                  <p className="text-cream font-light text-lg leading-relaxed italic">
                    The mind that conceives the space is the same one that
                    ensures every detail is realized with precision. That is
                    the Fatahi standard.
                  </p>
                  <div className="divider mt-10 mb-4" />
                  <p className="text-white/40 text-sm font-light">
                    The Fatahi Building approach
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* VALUES */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">What We Stand For</p>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-wide">
                Principles, not promises
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Design-Build Integrity", description: "A singular creative vision guides every project from concept through completion. No delegation. No dilution." },
              { title: "Total Transparency", description: "Comprehensive weekly briefings. Documented change orders. Clear budgets. You will never have to wonder where your project stands." },
              { title: "Constant Presence", description: "Majid maintains a direct, hands-on involvement with every project, ensuring the architectural intent is honoured in every detail." },
              { title: "Built to Last", description: "We use materials and methods that stand the test of time, because your home should outlast trends." },
            ].map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 p-10 md:p-12 h-full">
                  <span className="text-beige/40 text-sm font-light">0{i + 1}</span>
                  <h3 className="text-lg font-heading font-light text-white tracking-wide mt-4 mb-6">{value.title}</h3>
                  <p className="text-white/50 font-light text-sm leading-relaxed">{value.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* STATS BAR */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {[
              { stat: "30+", label: "Years of Experience" },
              { stat: "Design-Build", label: "Under One Roof" },
              { stat: "GTA", label: "Toronto & Surrounding Areas" },
              { stat: "5-Star", label: "Client Rated" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="text-center">
                  <p className="text-white text-3xl md:text-4xl font-heading font-light tracking-wide">{item.stat}</p>
                  <div className="w-8 h-px bg-beige mx-auto my-4" />
                  <p className="text-white/40 text-xs font-light tracking-widest uppercase">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="section-label mb-8">Start Here</p>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-wide mb-6">
                Let&apos;s talk about your home
              </h2>
              <p className="text-white/70 font-light text-[15px] leading-[1.85] mb-10">
                Every project starts with a conversation. Tell us how you want
                to live, and we&apos;ll show you what&apos;s possible.
              </p>
              <Link
                href="/contact"
                className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
              >
                Book a Conversation
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

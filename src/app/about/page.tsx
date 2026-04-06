import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <div>
              <div className="divider mb-10" />
              <p className="section-label mb-8">About Us</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-tight tracking-wide">
                Two generations.
                <br />
                One standard.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-white/70 font-light leading-relaxed">
                A father and son united by a singular conviction: that the mind
                which conceives a home should be the same one that brings it to
                life. Three decades. One standard.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/branding/duo-portrait.jpg"
                  alt="Majid and Farbod Fatahi"
                  width={1600}
                  height={2000}
                  quality={95}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
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
                <div className="aspect-[3/4] overflow-hidden mb-8">
                  <Image
                    src="/images/branding/majid-portrait.jpg"
                    alt="Majid Fatahi"
                    width={1200}
                    height={1600}
                    quality={95}
                    className="w-full h-full object-cover"
                  />
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
                <div className="aspect-[3/4] overflow-hidden mb-8">
                  <Image
                    src="/images/branding/farbod-portrait.jpg"
                    alt="Farbod Fatahi"
                    width={1200}
                    height={1600}
                    quality={95}
                    className="w-full h-full object-cover"
                  />
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
                  <p className="text-white/40 text-xs font-light tracking-widest">{item.label}</p>
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
                className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500"
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

import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  { quote: "The work was completed right on time, and Majid along with his entire team handled the project with professionalism, care, and great attention to detail. Everything was finished to a very high standard.", author: "Ali N.", project: "Custom Home" },
  { quote: "He truly cares about the quality of his work. One thing I really appreciated is that he tries to make sure there is no wasted or unused space in the house, which makes the design very practical and efficient.", author: "Azita N.", project: "Custom Home" },
  { quote: "Reliable, pays close attention to detail, and focuses on high-quality work. Especially appreciated his effort to create practical, efficient designs.", author: "Green Building Canmo", project: "Partner Review" },
];

export default function TestimonialsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-2xl">
            <p className="section-label mb-8 animate-fade-in">Client Experiences</p>
            <h1 className="text-4xl md:text-5xl font-light font-heading text-white leading-tight tracking-wide animate-fade-up">
              What our clients say
            </h1>
            <div className="divider mt-10 mb-10 animate-fade-in animate-delay-200" />
            <p className="text-white/50 font-light leading-relaxed animate-fade-up animate-delay-200">
              Our reputation is defined by those we serve.
            </p>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* GOOGLE REVIEWS BADGE */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="flex items-center gap-2">
                <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <div>
                  <p className="text-white text-sm font-medium">Google Reviews</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-white/40 text-sm font-light ml-1">5.0</span>
                  </div>
                </div>
              </div>
              <div className="hidden md:block w-px h-12 bg-white/10" />
              <p className="text-white/40 font-light text-sm text-center md:text-left">
                Rated 5 stars on Google, every project, every time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* TESTIMONIALS */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="space-y-28">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
                    <div className="md:col-span-1 flex md:justify-end">
                      <span className="text-beige/15 text-7xl font-serif leading-none">&ldquo;</span>
                    </div>
                    <div className="md:col-span-11">
                      <blockquote>
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed italic">{t.quote}</p>
                      </blockquote>
                      <div className="mt-8 flex items-center gap-4">
                        <div className="w-12 h-px bg-beige" />
                        <div>
                          <p className="text-cream text-sm font-medium">{t.author}</p>
                          <p className="text-white/40 text-xs font-light mt-0.5">{t.project}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* VALUES */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">Why Clients Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide">The Fatahi difference</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "One Team, Start to Finish", description: "A singular creative vision guides each project from concept through completion. Every detail honoured, nothing left to interpretation." },
              { title: "Absolute Clarity", description: "Comprehensive weekly briefings. Complete documentation. Our clients enjoy total transparency throughout the entire journey." },
              { title: "Uncompromising Craft", description: "Three decades of meticulous attention to every element, whether visible or concealed. The standard never wavers." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="text-center">
                  <span className="text-beige text-2xl font-light">0{i + 1}</span>
                  <div className="w-8 h-px bg-beige/30 mx-auto my-5" />
                  <h3 className="text-sm font-medium font-heading text-white tracking-wider mb-4">{item.title}</h3>
                  <p className="text-white/50 font-light text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Your Project</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-8">
              Ready to begin something extraordinary?
            </h2>
            <p className="text-white/40 font-light text-sm leading-relaxed max-w-xl mx-auto mb-10">
              Every project on this page began the same way, with a vision and a conversation. Share yours.
            </p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

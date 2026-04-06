import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProcessJourney from "@/components/ProcessJourney";
import { customHomesPhases } from "@/data/process-phases";

const galleryImages = [
  { src: "/images/projects/poyntz/027-Images_017.jpg", alt: "Custom home living room with marble fireplace" },
  { src: "/images/projects/poyntz/025-Images_015.jpg", alt: "Custom staircase with glass railings" },
  { src: "/images/projects/poyntz/033-Images_023.jpg", alt: "Dining area with wine wall display" },
  { src: "/images/projects/poyntz/045-Images_035.jpg", alt: "Kitchen with marble backsplash and pendants" },
  { src: "/images/projects/poyntz/070-Images_060.jpg", alt: "Ensuite bathroom with freestanding tub" },
  { src: "/images/projects/terrace/3Q1A2268.JPG", alt: "Kitchen with black marble island and walnut details" },
];

export default function CustomHomesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/poyntz/twilight-1.jpg" alt="Custom home by Fatahi Building, Poyntz at twilight" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-8 animate-fade-in">Custom Homes</p>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">Designed around<br />your life</h1>
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
                <p className="text-white/70 font-light leading-relaxed mb-6">Majid leads every project as both its architect and master builder. A discipline that ensures the creative vision remains uncompromised from the first concept through to the finished residence.</p>
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

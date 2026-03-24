import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Poyntz | Projects | Fatahi Building",
  description: "A modern custom home in North York, Toronto featuring clean contemporary lines, glass staircase, marble fireplace surround, and warm oak flooring. Designed and built by Fatahi Building.",
};

const galleryImages = [
  { src: "/images/projects/poyntz/twilight-1.jpg", alt: "Poyntz Avenue, twilight exterior view" },
  { src: "/images/projects/poyntz/twilight-2.jpg", alt: "Poyntz Avenue, twilight angle view" },
  { src: "/images/projects/poyntz/twilight-3.jpg", alt: "Poyntz Avenue, evening exterior" },
  { src: "/images/projects/poyntz/interior-01.jpg", alt: "Poyntz Avenue, interior living space" },
  { src: "/images/projects/poyntz/interior-02.jpg", alt: "Poyntz Avenue, glass staircase detail" },
  { src: "/images/projects/poyntz/interior-03.jpg", alt: "Poyntz Avenue, open-concept living area" },
  { src: "/images/projects/poyntz/interior-04.jpg", alt: "Poyntz Avenue, kitchen and dining" },
  { src: "/images/projects/poyntz/interior-05.jpg", alt: "Poyntz Avenue, fireplace surround" },
  { src: "/images/projects/poyntz/interior-06.jpg", alt: "Poyntz Avenue, primary bedroom" },
  { src: "/images/projects/poyntz/interior-07.jpg", alt: "Poyntz Avenue, ensuite bathroom" },
  { src: "/images/projects/poyntz/interior-08.jpg", alt: "Poyntz Avenue, wine display" },
  { src: "/images/projects/poyntz/interior-09.jpg", alt: "Poyntz Avenue, hallway detail" },
  { src: "/images/projects/poyntz/interior-10.jpg", alt: "Poyntz Avenue, finishing details" },
];

export default function PoyntzAvenuePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <Image src="/images/projects/poyntz/twilight-1.jpg" alt="Poyntz Avenue, custom home exterior at twilight" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-16 w-full">
          <div className="max-w-2xl">
            <Link href="/projects" className="inline-flex items-center text-white/50 text-[13px] font-medium tracking-[0.15em] hover:text-beige transition-colors duration-500 mb-8 group">
              <svg className="mr-2 w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
              </svg>
              All Projects
            </Link>
            <div className="divider mb-6" />
            <h1 className="text-4xl md:text-5xl font-light font-heading text-white leading-tight tracking-wide">Poyntz</h1>
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-28">
              <div className="lg:col-span-4">
                <div className="space-y-8">
                  <div><p className="section-label mb-2">Project Type</p><p className="text-white font-light text-lg">Custom Home</p></div>
                  <div><p className="section-label mb-2">Location</p><p className="text-white font-light text-lg">North York, Toronto</p></div>
                  <div><p className="section-label mb-2">Completed</p><p className="text-white font-light text-lg">2023</p></div>
                  <div><p className="section-label mb-2">Scope</p><p className="text-white font-light text-lg">Design &amp; Build</p></div>
                </div>
              </div>
              <div className="lg:col-span-8">
                <h2 className="text-2xl md:text-3xl font-light font-heading text-white tracking-wide mb-6">Modern living, grounded in craft</h2>
                <div className="divider mb-8" />
                <div className="space-y-6 text-white/70 font-light leading-relaxed">
                  <p>A modern custom home featuring clean contemporary lines, an open-concept interior with glass staircase, marble fireplace surround, built-in wine display, and warm oak flooring throughout. Designed and built by Fatahi Building.</p>
                  <p>Every detail of this home was considered from the earliest sketches through to final construction. The design integrates natural light at every turn, with floor-to-ceiling windows that frame the surrounding landscape. Interior materials were selected for both beauty and durability: engineered oak flooring, honed marble, tempered glass, and custom millwork throughout.</p>
                  <p>The result is a home that feels both striking and livable, a space that works for how the family actually lives, not just how it photographs.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* GALLERY */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="section-label mb-8">Gallery</p>
              <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide">The Details</h2>
            </div>
          </ScrollReveal>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={(i % 3) * 100}>
                <div className="break-inside-avoid overflow-hidden group">
                  <Image src={img.src} alt={img.alt} width={800} height={i % 3 === 0 ? 600 : i % 3 === 1 ? 800 : 500} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
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
            <p className="section-label mb-8">Your Home, Your Way</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">Inspired by what you see?</h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Every project starts with a conversation about how you want to live. Let&apos;s talk about what&apos;s possible for your home.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">Start a Conversation</Link>
              <Link href="/projects" className="text-white/50 px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:text-beige transition-colors duration-500">View All Projects</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

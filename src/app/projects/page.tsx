import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Projects | Fatahi Building",
  description: "Explore custom homes designed and built by Fatahi Building in Toronto and the GTA. From ground-up builds to whole-home transformations.",
};

const projects = [
  { slug: "131-poyntz-ave", title: "Poyntz", location: "North York, Toronto", type: "Custom Home", year: "2023", image: "/images/projects/poyntz/twilight-1.jpg", description: "A modern custom home featuring clean contemporary lines, an open-concept interior with glass staircase, and warm oak flooring throughout." },
  { slug: "23-terrace", title: "Terrace", location: "North York, Toronto", type: "Custom Home", year: "2021", image: "/images/projects/terrace/dining.jpg", description: "A warm, sophisticated custom home with walnut ceiling details, black marble kitchen island with brass fixtures, and floating oak staircase." },
];

const inProgress = [
  {
    title: "Betty Ann",
    location: "North York, Toronto",
    type: "Custom Home",
    expected: "Summer 2026",
    image: "/images/projects/betty-ann/exterior-1.jpg",
    highlights: ["~7,000 sq ft", "10.5\u2019 main floor ceilings", "12\u2019 basement ceilings", "4 bed / 8 bath", "Elevator", "3-car garage"],
    description: "A statement custom home with heated driveway, walkout basement, massive aluminum windows, engineered white oak flooring and millwork throughout, dual show-and-chef\u2019s kitchen, and a deck integrated into the concrete structure.",
  },
  {
    title: "Farrell",
    location: "North York, Toronto",
    type: "Custom Home",
    expected: "Summer 2026",
    image: "/images/projects/farrell/exterior-1.jpg",
    highlights: ["~4,500 sq ft", "14\u2019 basement ceilings", "2-car garage", "Walkout basement", "Open concept", "Heated driveway"],
    description: "A modern custom home with 14-foot basement ceilings, oversized windows on every floor, engineered white oak flooring throughout, a chef\u2019s kitchen with top-of-the-line appliances, heated driveway, and a walkout lower level.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 md:py-40">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="section-label mb-8">Our Work</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light font-heading text-white leading-tight tracking-wide">Selected Projects</h1>
              <div className="divider mt-10 mb-10" />
              <p className="text-white/50 font-light leading-relaxed max-w-lg">
                Each residence begins with a deeply personal vision. These are some of the homes we&apos;ve brought to life across Toronto and the GTA.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROJECT CARDS */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 space-y-32">
          {projects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 100}>
              <Link href={`/projects/${project.slug}`} className="group block">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                  <div className="lg:col-span-8">
                    <div className="group/img relative aspect-[16/10] overflow-hidden">
                      <Image src={project.image} alt={`${project.title}, ${project.type} in ${project.location}`} fill className="object-cover transition-transform duration-700 group-hover/img:scale-105" sizes="(max-width: 1024px) 100vw, 66vw" />
                      <div className="absolute inset-0 bg-navy/0 group-hover/img:bg-navy/15 transition-all duration-500" />
                    </div>
                  </div>
                  <div className="lg:col-span-4">
                    <p className="section-label mb-4">{project.type}</p>
                    <h2 className="text-2xl md:text-3xl font-light font-heading text-white tracking-wide group-hover:text-beige transition-colors duration-300">{project.title}</h2>
                    <p className="text-white/40 text-sm font-light mt-2">{project.location} &middot; {project.year}</p>
                    <div className="w-10 h-px bg-beige/30 my-6" />
                    <p className="text-white/70 font-light text-sm leading-relaxed mb-8">{project.description}</p>
                    <span className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] group-hover:text-beige-light transition-colors duration-300">
                      View Project
                      <svg className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="section-sep" />

      {/* CURRENTLY BUILDING */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="mb-20">
              <p className="section-label mb-8">Currently Building</p>
              <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide">In Progress</h2>
              <div className="divider mt-8" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20">
            {inProgress.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 100}>
                <div className="text-center">
                  <p className="section-label mb-4">{project.type}</p>
                  <h3 className="text-2xl md:text-3xl font-light font-heading text-white tracking-wide">{project.title}</h3>
                  <p className="text-white/40 text-sm font-light mt-2">{project.location} &middot; Est. {project.expected}</p>
                  <div className="w-10 h-px bg-beige/30 mx-auto my-6" />
                  <p className="text-white/70 font-light text-sm leading-relaxed mb-6">{project.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-[11px] font-light tracking-[0.1em] text-white/50 border border-white/10 px-3 py-1.5 transition-all duration-300 hover:border-beige/30 hover:text-white/70 hover:shadow-[0_0_12px_-3px_rgba(196,180,158,0.25)] cursor-default">
                        {h}
                      </span>
                    ))}
                  </div>
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
            <p className="section-label mb-8">Start Your Project</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Ready to begin something
              <br />
              truly yours?
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              It begins with a vision. Share yours, and we&apos;ll show you what&apos;s possible.
            </p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">
              Let&apos;s Talk
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

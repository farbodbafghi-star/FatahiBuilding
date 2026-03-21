import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const approachPoints = [
  { title: "Architectural Integration", description: "The addition is designed to match the existing rooflines, materials, and proportions. From the outside, it should look like it was always there." },
  { title: "Interior Continuity", description: "Floor heights, trim profiles, door styles, and finishes are matched to the original home. The transition between old and new should be invisible." },
  { title: "Structural Engineering", description: "Proper foundation work, structural connections, and load management. We engineer the addition to integrate with the existing structure, not just attach to it." },
  { title: "Permit &amp; Municipal Coordination", description: "Zoning analysis, permit applications, committee of adjustment if needed. We handle the process from start to approval." },
];

const additionTypes = [
  { title: "Second-Storey Additions", description: "Adding a full or partial second floor to a bungalow or single-storey home. Foundation assessment, structural reinforcement, and seamless exterior integration." },
  { title: "Rear &amp; Side Extensions", description: "Expanding the footprint of your home into your lot. Kitchen extensions, family room additions, primary suite expansions — designed to flow naturally from the existing layout." },
  { title: "Garage Conversions &amp; Additions", description: "Attached garage additions or converting existing garage space into livable area with a new garage built to match." },
  { title: "In-Law Suites", description: "Self-contained suites designed with privacy and independence in mind, while maintaining the architectural integrity of the main home." },
];

export default function AdditionsPage() {
  return (
    <>
      {/* HERO — with image */}
      <section className="relative h-[70vh] min-h-[550px] flex items-end">
        <Image src="/images/projects/poyntz/twilight-2.jpg" alt="Home addition by Fatahi Building" fill className="object-cover" priority quality={90} />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-navy-dark/40 to-navy-dark/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-24 w-full">
          <div className="max-w-2xl">
            <p className="section-label mb-8 animate-fade-in">Additions &amp; Extensions</p>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-white leading-tight tracking-wide animate-fade-up">Expansion that feels<br />like it was always there</h1>
            <p className="mt-6 text-lg text-white/70 font-light leading-relaxed animate-fade-up animate-delay-200">Seamless additions designed to integrate with your existing architecture — not just attach to it.</p>
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
                <p className="section-label mb-8">The Challenge</p>
                <h2 className="font-heading text-3xl md:text-4xl font-light text-white leading-snug tracking-wide">Most additions look<br />like additions</h2>
                <div className="divider mt-10 mb-10" />
                <p className="text-white/70 font-light leading-relaxed mb-6">You can usually spot where an addition starts. The roofline changes. The materials don&apos;t quite match. Inside, there&apos;s a step up or a hallway that feels like an afterthought. It&apos;s clear the new part was bolted onto the old.</p>
                <p className="text-white/70 font-light leading-relaxed mb-6">Because we design and build, we approach additions differently. We study the existing architecture — its proportions, materials, rooflines, and interior character — and design the addition as if it were part of the original plan.</p>
                <p className="text-white/70 font-light leading-relaxed">The goal is simple: when it&apos;s finished, no one should be able to tell where the original home ends and the addition begins.</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom aspect-[3/4]">
                  <Image src="/images/projects/poyntz/interior-07.jpg" alt="Interior craftsmanship — addition detail" width={400} height={530} className="w-full h-full object-cover" />
                </div>
                <div className="img-zoom aspect-[3/4] mt-12">
                  <Image src="/images/projects/terrace/interior-02.jpg" alt="Seamless interior transition" width={400} height={530} className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* APPROACH */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">Our Approach</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide">How we make it seamless</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {approachPoints.map((point, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="border-l border-beige/40 pl-8">
                  <h3 className="font-heading text-lg font-light text-white tracking-wide mb-4" dangerouslySetInnerHTML={{ __html: point.title }} />
                  <p className="text-white/50 font-light text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: point.description }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* TYPES OF ADDITIONS */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">Types of Additions</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide">What we build</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionTypes.map((type, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 p-10 md:p-12 h-full">
                  <span className="text-beige/40 text-sm font-light">0{i + 1}</span>
                  <h3 className="font-heading text-lg font-light text-white tracking-wide mt-4 mb-4" dangerouslySetInnerHTML={{ __html: type.title }} />
                  <p className="text-white/50 font-light text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: type.description }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image src="/images/projects/terrace/living.jpg" alt="Interior living space — seamless addition" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy-dark/30" />
      </section>

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Need More Space?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-8">Let&apos;s talk about what&apos;s possible</h2>
            <p className="text-white/50 font-light text-sm leading-relaxed max-w-xl mx-auto mb-10">Tell us about your home and what you need. We&apos;ll discuss how an addition can work with your existing architecture — and whether it&apos;s the right approach for your situation.</p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500">Start a Conversation</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

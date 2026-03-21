import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const phases = [
  {
    number: "01",
    title: "Initial Conversation",
    description: "We start with one question: how do you want to live? Before budgets or square footage, we want to understand what your home needs to do for you.",
    details: [
      "We listen to how you use your space today and what isn\u2019t working",
      "We discuss your vision, lifestyle, and long-term plans",
      "We walk through budget expectations and realistic timelines",
      "No commitments \u2014 just an honest conversation about what\u2019s possible",
    ],
  },
  {
    number: "02",
    title: "Design",
    description: "Majid works with you to design a home around how you actually live. Every layout, material, and detail is decided together before construction begins.",
    details: [
      "Majid creates concept drawings based on your conversation",
      "You review and refine together \u2014 nothing moves forward until you\u2019re satisfied",
      "Materials, finishes, and specifications are selected during design",
      "The final design becomes the blueprint for construction \u2014 no guesswork later",
    ],
  },
  {
    number: "03",
    title: "Preconstruction",
    description: "This is where most builders skip ahead. We don\u2019t. Every trade, material, timeline, and cost is locked in before we break ground. Our clients sometimes want to rush past this step. All of them thank us for it later.",
    details: [
      "Detailed scope of work and specifications documented",
      "All trades contracted and scheduled",
      "Complete budget finalized \u2014 no allowances, no surprises",
      "Construction timeline mapped week by week",
    ],
  },
  {
    number: "04",
    title: "Construction",
    description: "Majid is on site every day. Farbod sends you a project report every Friday. You\u2019ll know what happened this week, what\u2019s coming next week, and if any decisions need your input.",
    details: [
      "Majid oversees every phase of construction personally",
      "Weekly Friday reports with progress, photos, and upcoming milestones",
      "Any change orders documented with scope, cost, and timeline impact",
      "Direct communication \u2014 no layers between you and the people building your home",
    ],
  },
  {
    number: "05",
    title: "Quality Assurance & Handover",
    description: "Before we hand over the keys, every detail is inspected against what was designed. We walk through the home together. Everything documented. Everything built as agreed.",
    details: [
      "Comprehensive inspection against original design specifications",
      "Walkthrough with you to review every room, finish, and system",
      "Deficiency list addressed before final handover",
      "Complete documentation package: warranties, manuals, as-built drawings",
    ],
  },
  {
    number: "06",
    title: "After the Keys",
    description: "The relationship doesn\u2019t end at move-in. We stay available, we stand behind the work, and we make sure everything performs the way it was designed to.",
    details: [
      "Post-move-in check-in to address any settling or seasonal adjustments",
      "Warranty support for all workmanship and materials",
      "Available for future projects, additions, or modifications",
      "A relationship built to last \u2014 not just a transaction",
    ],
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-24 md:pt-52 md:pb-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-3xl">
            <div className="divider mb-10" />
            <p className="section-label mb-8">How We Work</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-tight tracking-wide">
              A process built
              <br />
              on clarity
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl">
              Six phases. No shortcuts. Every step is designed so you always know
              what&apos;s happening, what&apos;s coming next, and exactly what
              you&apos;re getting.
            </p>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PROCESS OVERVIEW BAR */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i * 80}>
                <div className="text-center">
                  <span className="text-beige text-2xl font-heading font-light">{phase.number}</span>
                  <div className="w-8 h-px bg-beige/30 mx-auto my-3" />
                  <p className="text-white/40 text-xs font-medium tracking-wider uppercase">{phase.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* PHASES — DETAILED */}
      {phases.map((phase, i) => (
        <div key={phase.number}>
          <section className="relative py-28 md:py-36">
            <div className="max-w-7xl mx-auto px-8 md:px-16">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center ${
                  i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* TEXT SIDE */}
                <ScrollReveal>
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <span className="text-beige/20 text-6xl md:text-7xl font-heading font-light leading-none">
                      {phase.number}
                    </span>
                    <p className="section-label mt-6 mb-3">Phase {phase.number}</p>
                    <h2 className="text-3xl md:text-4xl font-heading font-light text-white leading-snug tracking-wide">
                      {phase.title}
                    </h2>
                    <div className="divider mt-10 mb-10" />
                    <p className="text-white/70 font-light leading-relaxed text-lg">
                      {phase.description}
                    </p>
                  </div>
                </ScrollReveal>

                {/* DETAILS SIDE */}
                <ScrollReveal delay={200}>
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <div className="p-10 md:p-12 bg-white/5 border border-white/10">
                      <p className="section-label mb-8">What This Looks Like</p>
                      <ul className="space-y-5">
                        {phase.details.map((detail, j) => (
                          <li key={j} className="flex items-start gap-4">
                            <span className="text-beige/40 text-xs font-light mt-1 shrink-0">0{j + 1}</span>
                            <p className="text-white/50 font-light text-sm leading-relaxed">{detail}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </section>
          {i < phases.length - 1 && <div className="section-sep" />}
        </div>
      ))}

      <div className="section-sep" />

      {/* PROMISE STRIP */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              {[
                { title: "No Surprises", desc: "Every cost, timeline, and scope change is documented and approved before it happens." },
                { title: "Weekly Updates", desc: "A Friday report every week with progress, photos, and what\u2019s coming next." },
                { title: "One Team", desc: "The person who designed your home is the same person building it. Start to finish." },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg font-heading font-light text-white tracking-wide mb-4">{item.title}</h3>
                  <div className="w-8 h-px bg-beige/30 mx-auto mb-4" />
                  <p className="text-white/40 font-light text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto">
              <p className="section-label mb-8">Ready to Start?</p>
              <h2 className="text-3xl md:text-4xl font-heading font-light text-white tracking-wide mb-6">
                It starts with a conversation
              </h2>
              <p className="text-white/70 font-light text-[15px] leading-[1.85] mb-10">
                Tell us how you want to live. We&apos;ll walk you through our
                process and show you exactly what building with Fatahi looks like.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
                >
                  Book a Conversation
                </Link>
                <Link
                  href="/projects"
                  className="text-white/50 px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:text-beige transition-colors duration-500"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

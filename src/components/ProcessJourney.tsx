import ScrollReveal from "@/components/ScrollReveal";
import { ProcessPhase } from "@/data/process-phases";

interface ProcessJourneyProps {
  phases: ProcessPhase[];
  heading: string;
  sectionLabel?: string;
}

export default function ProcessJourney({
  phases,
  heading,
  sectionLabel = "From Vision to Keys",
}: ProcessJourneyProps) {
  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="section-label mb-8">{sectionLabel}</p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide">
              {heading}
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, i) => (
            <ScrollReveal key={phase.number} delay={i * 100}>
              <div className="bg-white/5 border border-white/10 p-8 md:p-10 h-full transition-all duration-300 hover:border-beige/30 hover:shadow-[0_0_20px_-5px_rgba(196,180,158,0.2)]">
                <span className="text-beige/40 text-sm font-light">
                  {phase.number}
                </span>
                <h3 className="font-heading text-lg font-light text-white tracking-wide mt-4 mb-4">
                  {phase.title}
                </h3>
                <p className="text-white/50 font-light text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Why Design-Build Changes Everything | Fatahi Building",
  description:
    "When the person who designs your home is the same person building it, nothing gets lost in translation. Here's why design-build leads to better custom homes.",
};

export default function DesignBuildArticle() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-32 md:py-40">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <Link
              href="/insights"
              className="inline-flex items-center text-beige text-[13px] font-light tracking-[0.15em] uppercase mb-12 hover:text-beige-light transition-colors duration-300"
            >
              <svg
                className="mr-2 w-3.5 h-3.5 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
              All Insights
            </Link>
            <p className="section-label mb-6">Design-Build</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-8">
              Why Design-Build Changes Everything
            </h1>
            <p className="text-white/40 text-sm font-light">March 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ARTICLE BODY */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="prose-custom">
              <p>
                Most people building a custom home start the same way: hire an
                architect, get a beautiful set of drawings, then find a builder
                to make it real. It sounds logical. But after 30 years of
                designing and building custom homes in Toronto, we can tell you
                &mdash; that gap between the drawing and the build is where most
                problems start.
              </p>
              <p>
                Design-build is different. It means the person who draws your
                home is the same person who builds it. At Fatahi Building,
                that&apos;s how we&apos;ve always worked. And it&apos;s not a
                business strategy &mdash; it&apos;s the only way we know how to
                build something we&apos;re proud of.
              </p>

              <h2>The Problem With Splitting Design and Construction</h2>
              <p>
                When an architect designs a home in isolation, they&apos;re
                solving a visual problem. They&apos;re thinking about proportion,
                light, flow, aesthetics. And they should be &mdash; that&apos;s
                their craft.
              </p>
              <p>
                But a drawing doesn&apos;t know what things cost. It doesn&apos;t
                know that the structural engineer will need to add a beam that
                changes the ceiling height in the living room. It doesn&apos;t
                know that the window spec will blow the budget by $40,000, or
                that the cantilever over the garage is going to require a
                foundation redesign.
              </p>
              <p>
                These aren&apos;t rare problems. They happen on the majority of
                custom home projects where design and construction are handled by
                separate teams. The result is a painful cycle: the homeowner
                falls in love with a design, gets a construction quote that&apos;s
                30&ndash;50% over budget, and then spends months redesigning
                &mdash; or worse, cutting corners to make the numbers work.
              </p>
              <p>
                The home that gets built is a compromise of the home that was
                designed. Nobody wins.
              </p>

              <h2>What Changes When One Team Does Both</h2>
              <p>
                When we sit down to design a home, we&apos;re not just thinking
                about how it looks. We&apos;re thinking about how it gets built.
              </p>
              <p>
                Every line we draw, we already know what it costs. We know how
                the structure works. We know which materials will perform in
                Toronto&apos;s climate &mdash; the freeze-thaw cycles, the
                humidity, the wind loads on an exposed elevation. We know where
                we can push the design and where the budget needs us to be smart.
              </p>
              <p>
                This means the design you approve is the home you get. Not a
                version of it. Not a scaled-back compromise. The actual home.
              </p>
              <p>Here&apos;s what that looks like in practice:</p>
              <p>
                <strong>No budget surprises.</strong> Because we&apos;re pricing
                as we design, you know the real cost before construction starts
                &mdash; not an optimistic estimate that inflates once a builder
                gets involved.
              </p>
              <p>
                <strong>Faster timelines.</strong> There&apos;s no back-and-forth
                between an architect and a builder interpreting each other&apos;s
                intent. We don&apos;t need three rounds of value engineering. The
                design is buildable from day one.
              </p>
              <p>
                <strong>Better problem-solving on site.</strong> Construction
                always has surprises &mdash; soil conditions, material lead
                times, a detail that works on paper but not in three dimensions.
                When the designer is on site every day (which Majid is), those
                problems get solved in real time. There&apos;s no waiting for an
                architect to issue a revised drawing.
              </p>
              <p>
                <strong>Design that respects the craft.</strong> When you&apos;ve
                spent decades actually building &mdash; framing walls, setting
                stone, installing millwork &mdash; you design differently. You
                think about how a joint will be finished, how a transition
                between materials will age, how a staircase will feel to walk up
                every day. These are things that don&apos;t show up in a
                rendering but define whether a home feels right.
              </p>

              <h2>The Misconception About Design-Build</h2>
              <p>
                Some people assume that design-build means you&apos;re getting a
                builder who can draw &mdash; that the design quality suffers
                because the focus is on construction. That&apos;s a fair concern,
                but it depends entirely on who you&apos;re working with.
              </p>
              <p>
                At Fatahi Building, design is not an add-on. It&apos;s where
                every project starts. Majid has been designing homes for over
                three decades &mdash; not just building them. The design process
                is thorough: we start with how you want to live, study the lot,
                understand the neighbourhood context, and develop a home
                that&apos;s specific to you. The difference is that every design
                decision is grounded in the reality of how it will be built.
              </p>
              <p>
                Design-build doesn&apos;t mean less design. It means
                better-informed design.
              </p>

              <h2>What This Means for You</h2>
              <p>
                If you&apos;re early in the process of planning a custom home in
                Toronto or the GTA, you have a choice in how you structure your
                team. You can hire an architect and a builder separately &mdash;
                and many good homes get built that way. But know that you&apos;re
                introducing a gap between vision and execution that will cost you
                time, money, and probably some of the details that made you fall
                in love with the design in the first place.
              </p>
              <p>
                Or you can work with a team where those two things were never
                separate to begin with.
              </p>

              <h2>Questions Worth Asking</h2>
              <ul>
                <li>
                  Who is responsible when the design exceeds the budget?
                </li>
                <li>
                  Will the person who designed the home be on site during
                  construction?
                </li>
                <li>
                  How many projects have gone through redesign after the initial
                  construction quote?
                </li>
                <li>
                  Can you show me a finished home that matches the original
                  design drawings?
                </li>
              </ul>
              <p>
                The answers will tell you a lot about how the next 12&ndash;18
                months of your life are going to go.
              </p>
              <p>
                If you&apos;re considering a custom build and want to understand
                how the design-build process works, we&apos;re always happy to
                have that conversation.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Start Here</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Considering a custom build?
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Every project starts with a conversation about how you want to
              live. We&apos;d love to hear what you have in mind.
            </p>
            <Link
              href="/contact"
              className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

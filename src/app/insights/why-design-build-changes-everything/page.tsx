import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "Why Design-Build Changes Everything | Fatahi Building",
  description:
    "When the person who designs your home is the same person building it, nothing gets lost in translation. Here's what design-build actually looks like from the inside.",
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
              className="inline-flex items-center text-beige text-[13px] font-light tracking-[0.15em] mb-12 hover:text-beige-light transition-colors duration-300"
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
        <ArticleView
          summary={
            <>
              <p>
                Design-build means the person who designs your home is the same person who builds it. At Fatahi Building, that person is Majid. He draws the plans, and he&apos;s on site every day making sure the finished home matches what was envisioned.
              </p>
              <h2>What this delivers:</h2>
              <ul>
                <li>
                  <strong>The design you approve is the home you get.</strong> Because Majid knows what every line costs as he draws it, the design reflects reality from day one. No rework. No scaling back.
                </li>
                <li>
                  <strong>Faster, cleaner timelines.</strong> One team means one conversation. Decisions happen in real time on site, not through layers of coordination.
                </li>
                <li>
                  <strong>Design that respects the craft.</strong> When you&apos;ve spent decades framing walls, setting stone, and installing millwork, you design differently. You think about how a joint finishes, how materials transition, how a staircase feels underfoot every morning.
                </li>
                <li>
                  <strong>Cost intelligence built into every detail.</strong> Budgets aren&apos;t a constraint applied after the design is done. They&apos;re part of the creative process from the first sketch.
                </li>
              </ul>
              <p>
                Design-build is not a business model. It&apos;s the only way to guarantee complete continuity between what&apos;s imagined and what&apos;s built. One team, one vision, from concept to keys.
              </p>
              <p>
                If you&apos;re beginning to think about a custom home, we&apos;d welcome a conversation about what this process looks like for your project.
              </p>
            </>
          }
        >
          <p>
            After 30 years of designing and building custom homes in Toronto, Majid has never handed a set of drawings to someone else to build. Not because he can&apos;t. Because the continuity between the drawing and the build is where the quality lives.
          </p>
          <p>
            Design-build means one team handles both. At Fatahi Building, the person who imagines the home is the same person on site every day constructing it. That&apos;s not a tagline. It&apos;s the daily reality of how every project moves from concept to keys.
          </p>

          <h2>What Design-Build Unity Actually Looks Like</h2>
          <p>
            When Majid sits down to design a home, he isn&apos;t solving a visual problem in isolation. He&apos;s thinking about structure, cost, sequence, materials, and climate all at once. Every line he draws, he already knows what it will take to build.
          </p>
          <p>This changes the design process in ways that matter:</p>
          <p>
            <strong>The design you approve is the home you get.</strong> Because construction knowledge is embedded in every design decision, the plans reflect reality from the start. The home that gets built is the home that was envisioned. Not a version of it. Not a scaled-back compromise.
          </p>
          <p>
            <strong>Cost intelligence is part of the creative process.</strong> Majid knows what things cost to build as he designs them. That dramatic double-height living room? He&apos;s already figured out the steel. That cantilevered upper floor? He knows the foundation implications before you see the drawing. The budget isn&apos;t a constraint applied later. It shapes the design from the first conversation.
          </p>
          <p>
            <strong>Decisions happen in real time.</strong> Construction always has moments that require judgment: soil conditions differ from the report, a material lead time shifts, a detail that works on paper needs adjustment in three dimensions. When the designer is on site every day, those moments get resolved immediately. No waiting. No back-and-forth. Just a decision made by the person who understands both the design intent and the construction reality.
          </p>
          <p>
            <strong>The craft runs deeper.</strong> When you&apos;ve spent decades physically building &mdash; framing walls, setting stone, installing millwork &mdash; you design with your hands as much as your eyes. You think about how a joint will be finished. How a transition between materials will age. How 22 feet of continuous white oak grain should flow from the first floor to the third without a single break. These are details that don&apos;t show up in a rendering, but they define whether a home feels right.
          </p>

          <h2>Design-Build Is Not &ldquo;A Builder Who Can Draw&rdquo;</h2>
          <p>
            Design is where every Fatahi Building project starts. Majid has been designing homes for over three decades. The process is thorough: it begins with how you want to live, studies the lot and neighbourhood context, and develops a home that is specific to you and your family.
          </p>
          <p>
            The difference is that every design decision is grounded in the reality of how it will be built. This doesn&apos;t limit the design. It makes the design more honest.
          </p>
          <p>
            We know which materials will perform in Toronto&apos;s climate &mdash; the freeze-thaw cycles, the humidity swings, the wind loads on an exposed elevation. We know where a design can push boundaries and where the budget needs us to be strategic. That knowledge doesn&apos;t constrain creativity. It focuses it.
          </p>

          <h2>What This Means for Your Project</h2>
          <p>
            If you&apos;re early in the process of planning a custom home in Toronto or the GTA, you have a choice in how you structure your team. Design-build gives you complete continuity: one team from the first sketch to the final walkthrough. One conversation instead of a chain of coordination. A home where every detail carries through exactly as intended.
          </p>
          <p>
            <strong>Questions worth asking any team you&apos;re considering:</strong>
          </p>
          <ul>
            <li>
              Who is responsible when the design exceeds the budget?
            </li>
            <li>
              Will the person who designed the home be on site during construction?
            </li>
            <li>
              Can you show me a finished home that matches the original design drawings?
            </li>
          </ul>
          <p>
            The answers will tell you a lot about how the next 12 to 18 months of your life are going to go.
          </p>
          <p>
            If you&apos;re considering a custom build, we&apos;re always happy to have that conversation.
          </p>
        </ArticleView>
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
              className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

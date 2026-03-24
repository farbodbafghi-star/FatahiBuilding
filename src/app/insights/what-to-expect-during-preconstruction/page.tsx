import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "What to Expect During Preconstruction | Fatahi Building",
  description:
    "The weeks before construction begins are where the real decisions happen. Here&apos;s what preconstruction looks like for a custom home in Toronto.",
};

export default function PreconstructionArticle() {
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
            <p className="section-label mb-6">Process</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-8">
              What to Expect During Preconstruction
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
                Preconstruction is the phase between your first conversation and the day we break ground. It typically takes 3 to 5 months. That pace is deliberate: every decision made here determines whether the build goes smoothly or becomes a series of expensive surprises.
              </p>
              <h2>What happens during preconstruction:</h2>
              <ul>
                <li><strong>It starts with how you live.</strong> The first conversation isn&apos;t about square footage. It&apos;s about your daily life, how you cook, work, entertain, and move through your home. The answers drive the floor plan.</li>
                <li><strong>The lot shapes the design.</strong> Zoning bylaws, soil conditions, sun orientation, grading, and neighbourhood context all inform what&apos;s possible. We study the site before we draw a single line.</li>
                <li><strong>Design develops with you, not for you.</strong> Floor plans, elevations, structure, and materials are refined together in an iterative process. Changes at this stage cost nothing. Changes during construction cost a lot.</li>
                <li><strong>Permits set the timeline.</strong> In Toronto, building permits take 8 to 16 weeks. Committee of Adjustment adds 2 to 4 months if needed. We manage the full process.</li>
                <li><strong>You receive a complete preconstruction package</strong> before we break ground: finalized drawings, engineering, a detailed scope of work, a construction schedule, and a fixed contract price. Everything is decided before we start.</li>
              </ul>
              <p>
                The time invested in preconstruction is what makes the construction phase feel controlled. When our crew arrives on day one, they know exactly what they&apos;re building.
              </p>
              <p>
                If you&apos;re thinking about a custom home and wondering where to start, the answer is a conversation.
              </p>
            </>
          }
        >
          <p>
            Everyone pictures the exciting part: watching the framing go up,
            seeing the kitchen take shape, walking through the finished home
            for the first time. But the months before a single shovel hits the
            ground are where your custom home is actually made.
          </p>
          <p>
            At Fatahi Building, preconstruction is where we spend the most
            time thinking. Every decision made here, from the foundation
            design to the window placement to the plumbing layout, determines
            whether the build goes smoothly or becomes a series of expensive
            surprises.
          </p>
          <p>
            Here&apos;s what that process actually looks like.
          </p>

          <h2>It Starts With How You Want to Live</h2>
          <p>
            The first conversation isn&apos;t about square footage or
            finishes. It&apos;s about your life.
          </p>
          <p>
            How do you use your kitchen? Do you cook together, or is one
            person the chef? Do your kids need a playroom now that becomes a
            media room in five years? Do you work from home? Do you want to
            see the backyard from the kitchen? Do you entertain, and if so,
            is it ten people for dinner or fifty for a party?
          </p>
          <p>
            These aren&apos;t soft questions. The answers drive the floor
            plan. A home designed around how you actually live feels
            effortless. A home designed around assumptions feels like
            you&apos;re always working around it.
          </p>
          <p>
            We spend real time here. We listen more than we talk. And we come
            back with a design that reflects what we heard, not a template
            we&apos;ve used before.
          </p>

          <h2>Site Analysis and What the Lot Tells Us</h2>
          <p>
            Before we design anything, we study the lot. In Toronto and the
            GTA, every property has constraints that shape what&apos;s
            possible:
          </p>
          <p>
            <strong>Zoning bylaws.</strong> How far you can build from the
            property line (setbacks), maximum height, lot coverage limits,
            number of storeys. In many North York neighbourhoods, these are
            tighter than people expect.
          </p>
          <p>
            <strong>Grading and drainage.</strong> How water moves across the
            lot matters more than most homeowners realize. A walkout
            basement, for example, requires specific grading conditions. We
            assess this early so the foundation design accounts for it from
            the start.
          </p>
          <p>
            <strong>Soil conditions.</strong> We commission a geotechnical
            report early. Toronto&apos;s soil varies dramatically: clay in
            one neighbourhood, rock in another. The soil determines the
            foundation type, which affects cost and timeline.
          </p>
          <p>
            <strong>Sun orientation.</strong> Where the sun hits the lot
            throughout the day determines window placement, room positioning,
            and energy performance. A south-facing kitchen with
            floor-to-ceiling glass is beautiful until it&apos;s 35 degrees
            in July and you can&apos;t stand in your own kitchen.
          </p>
          <p>
            <strong>Neighbourhood context.</strong> Streetscape, adjacent
            homes, sightlines from the street, privacy from neighbours. A
            custom home should feel like it belongs on its street, even if
            it&apos;s the most distinctive house there.
          </p>

          <h2>Design Development: Where the Details Get Real</h2>
          <p>
            Once we understand how you live and what the lot allows, design
            development begins. This is iterative. We don&apos;t present a
            finished design. We develop it with you.
          </p>
          <p>
            <strong>Floor plans come first.</strong> Layout, flow, room
            sizes, relationships between spaces. We refine these until they
            feel right. Changes here cost nothing. Changes during
            construction cost a lot.
          </p>
          <p>
            <strong>Elevations and massing.</strong> How the house looks from
            the outside. Proportions, rooflines, material expression. We work
            through this until the exterior feels cohesive with the interior,
            because we&apos;re designing both at the same time.
          </p>
          <p>
            <strong>Structural integration.</strong> Because we&apos;re also
            the builder, we&apos;re thinking about structure as we design.
            That dramatic double-height living room? We already know how to
            support it. That cantilevered upper floor? We&apos;ve figured out
            the steel before you see the drawing. There are no surprises when
            the structural engineer reviews the plans because we&apos;ve been
            engineering as we go.
          </p>
          <p>
            <strong>Material selections.</strong> This is where most
            homeowners spend the most time, and for good reason. Flooring,
            countertops, cabinetry, tile, fixtures, hardware: the number of
            decisions is significant. We guide you through this with a clear
            framework: durability, maintenance, aesthetics, and budget. Not
            every premium material is the right choice for every room.
          </p>

          <h2>Permits: The Part Nobody Loves</h2>
          <p>
            In Toronto, the permit process is a reality of custom home
            building. Timelines vary, but here&apos;s what to expect:
          </p>
          <ul>
            <li>
              <strong>Building permit:</strong> Typically 8 to 16 weeks
              from submission, depending on the ward and complexity. Some
              areas of North York are faster than others.
            </li>
            <li>
              <strong>Committee of Adjustment</strong> (if needed): Required
              for minor variances, such as a slightly deeper setback or more
              lot coverage than zoning allows. Adds 2 to 4 months.
            </li>
            <li>
              <strong>Heritage review</strong> (if applicable): Homes in
              designated heritage areas face additional design review. This
              can add significant time if not anticipated early.
            </li>
          </ul>
          <p>
            We handle all permit submissions and manage the process. But
            it&apos;s important to understand the timeline so your
            expectations are calibrated. A custom home in Toronto is not a
            6-month project. From first meeting to move-in, 14 to 20 months
            is realistic depending on size and complexity.
          </p>

          <h2>The Preconstruction Package</h2>
          <p>
            Before we break ground, you receive a complete package:
          </p>
          <ul>
            <li>Finalized architectural drawings</li>
            <li>Structural engineering</li>
            <li>Mechanical, electrical, and plumbing plans</li>
            <li>
              A detailed scope of work with material specifications
            </li>
            <li>A construction schedule with milestones</li>
            <li>A fixed contract price</li>
          </ul>
          <p>
            That last point matters. Because we&apos;ve done the design and
            the costing together, the number you see is the number you pay
            (assuming no changes to the scope). There&apos;s no &ldquo;we&apos;ll
            figure it out during construction.&rdquo; Everything is decided
            before we start.
          </p>

          <h2>Why This Phase Takes Time (and Why That&apos;s a Good Thing)</h2>
          <p>
            Preconstruction for a custom home typically takes 3 to 5 months.
            That can feel slow when you&apos;re eager to see your home take
            shape. But consider the alternative: rushing into construction
            with unresolved design questions, incomplete engineering, or a
            vague scope leads to change orders, delays, and the feeling that
            you&apos;re making decisions worth tens of thousands of dollars
            on the spot.
          </p>
          <p>
            The time we invest in preconstruction is what makes the
            construction phase feel controlled. When our crew arrives on day
            one, they know exactly what they&apos;re building. Every material
            has been selected. Every detail has been resolved. The build
            becomes an execution of a plan, not an improvisation.
          </p>
          <p>That&apos;s the goal. A build with no surprises.</p>
          <p>
            If you&apos;re thinking about a custom home and wondering where
            to start, the answer is a conversation. We&apos;ll walk you
            through what the preconstruction process looks like for your
            specific project.
          </p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Ready to Start?</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Let&apos;s talk about your project
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Whether you&apos;re in the early planning stages or ready to start
              building, we&apos;re here to walk you through the process.
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

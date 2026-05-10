import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "Why Layout Matters More Than Finishes in a Custom Home | Fatahi Building",
  description:
    "Finishes get the attention. But the layout — how the spaces flow, where the light lands, how rooms connect — is what makes a home feel right. Here’s why it matters more than most people realize.",
};

export default function LayoutMattersMoreThanFinishesArticle() {
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
              Why Layout Matters More Than Finishes in a Custom Home
            </h1>
            <p className="text-white/40 text-sm font-light">May 2026</p>
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
                Most conversations about a custom home begin with finishes. The
                marble. The white oak. The fixtures. These are the visible,
                comparable, photographable decisions &mdash; and they get the
                attention.
              </p>
              <p>
                But the decisions that shape how a home actually feels to live
                in are made earlier, on the layout. Where the kitchen sits.
                What the light does at breakfast. How the front door connects
                to the living spaces. Whether the primary suite is a refuge or
                just a room.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>
                  <strong>Layout is permanent. Finishes are not.</strong> A
                  backsplash can be swapped in a week. Moving a kitchen costs
                  months and major construction. The layout will define the
                  home for decades; the finishes will be replaced two or three
                  times in the same span.
                </li>
                <li>
                  <strong>
                    Layout is what you feel; finishes are what you see.
                  </strong>{" "}
                  The first thing you experience walking into a well-designed
                  home is the light, the proportions, and the flow. You feel
                  the layout every single day. You stop noticing finishes
                  within months.
                </li>
                <li>
                  <strong>
                    Toronto lots make layout decisions harder, not optional.
                  </strong>{" "}
                  Narrow lots, mature trees that can&apos;t be removed, ravine
                  orientations, heritage districts &mdash; the lot shapes what
                  a good layout looks like. A floor plan that works on a wide
                  Oakville lot may not work on a 30-foot Forest Hill lot.
                </li>
                <li>
                  <strong>
                    A good layout is invisible. A bad one is felt every day.
                  </strong>{" "}
                  The best homes don&apos;t announce their cleverness. You
                  just enjoy living in them &mdash; the morning light pours
                  in, the rooms relate to each other the way you actually
                  live, the path from the entry feels intentional.
                </li>
              </ul>
              <p>
                At Fatahi Building, design and construction are one continuous
                process. The person designing the layout is the same person
                building it &mdash; every decision made with construction
                reality in mind from the first sketch forward.
              </p>
            </>
          }
        >
          <p>
            The first photos a client usually sends us are of finishes. A
            specific tile they saw in a magazine. A kitchen with a marble
            waterfall island. A bathroom they pinned to a mood board. The
            conversation starts with what the home should look like.
          </p>
          <p>
            That&apos;s understandable. Finishes are visible. They&apos;re
            easy to compare. They photograph beautifully. They&apos;re what
            shows up in the design magazines and on Instagram. And they do
            matter &mdash; the right materials, well-installed, will outlast
            trends and continue to feel current decades later.
          </p>
          <p>
            But finishes are the surface. The decisions that determine whether
            a home actually works &mdash; whether you love living in it on a
            Tuesday morning in November &mdash; are made earlier, on the
            layout. And those decisions are far more permanent than any
            backsplash.
          </p>
          <p>
            After more than thirty years of designing and building homes
            across the GTA, we&apos;ve learned that the homes our clients love
            most have one thing in common: the layout was right before anyone
            talked about finishes.
          </p>

          <h2>What Layout Actually Means</h2>
          <p>
            When we talk about layout, we mean more than the floor plan. A
            floor plan is a drawing. A layout is a set of decisions about how
            the home will be lived in.
          </p>
          <p>
            <strong>Flow.</strong> How the spaces connect. What sequences
            feel right when you move through the house from the front door to
            the kitchen, from the kitchen to the outdoor space, from the
            primary bedroom to the ensuite.
          </p>
          <p>
            <strong>Proportion.</strong> Ceiling height in relation to floor
            area. The width of a hallway. The size of a window relative to
            the wall it sits in. Proportion is what makes a small room feel
            intimate instead of cramped, and what makes a large room feel
            grand instead of hollow.
          </p>
          <p>
            <strong>Light.</strong> Where the windows go and what time of day
            each room receives sun. A kitchen that faces north will be in
            cool, indirect light all day &mdash; beautiful for some uses,
            frustrating for others. A primary bedroom that catches direct
            east sun will wake you with the sunrise whether you want it to
            or not.
          </p>
          <p>
            <strong>Adjacencies.</strong> What rooms sit next to what. The
            kitchen-dining-living triangle. The primary suite buffered from
            the kids&apos; rooms. The mudroom near the garage entry, not the
            front door. The laundry placed where laundry actually happens.
          </p>
          <p>
            <strong>Sightlines.</strong> What you see from each room. From
            the entry. From the dining table. From the kitchen sink. A good
            layout uses sightlines to draw you through the house and to
            connect spaces visually without losing acoustic or functional
            separation.
          </p>
          <p>
            These five elements work together. Get them right and the house
            feels considered, calm, and intentional. Get them wrong and no
            finish in the world can fix it.
          </p>

          <h2>Why Finishes Get the Attention Anyway</h2>
          <p>
            Finishes are easy to talk about. There&apos;s a vocabulary for
            them &mdash; Calacatta marble, white oak, satin nickel, matte
            black. There are showrooms for them. They can be compared across
            builders, across budgets, across mood boards.
          </p>
          <p>
            Layout doesn&apos;t have that vocabulary. A photo of a great
            layout doesn&apos;t read on a screen the way a stone slab does.
            The proof of a good layout is the experience of being in it, not
            the image of it.
          </p>
          <p>
            And finishes get sold. Showrooms exist for them. Suppliers post
            them. Designers feature them on social media. Every part of the
            industry is built around helping clients pick finishes &mdash;
            because there&apos;s a product to sell at the end.
          </p>
          <p>
            Layout doesn&apos;t have a sales engine behind it. There&apos;s
            no showroom for &ldquo;thoughtful adjacencies.&rdquo; Which means
            the homeowner has to drive the layout conversation themselves,
            or work with a team that takes it as seriously as the finishes.
          </p>

          <h2>Layout Decisions Are Permanent</h2>
          <p>
            This is the part most people underestimate. The cost &mdash; and
            difficulty &mdash; of changing a finish versus changing a layout.
          </p>
          <p>
            A backsplash can be swapped in a week. Cabinet doors can be
            replaced. Floors can be refinished or even replaced. These are
            real projects, but they&apos;re contained &mdash; a single
            trade, a single room, a defined timeline.
          </p>
          <p>
            Moving a kitchen is different. Plumbing has to be relocated.
            Electrical has to be rerun. Structural walls may need to be
            opened. Mechanical systems may need to be rerouted. Permits,
            demolition, weeks of work and waiting. The kind of project
            people put off for years because it&apos;s too disruptive.
          </p>
          <p>
            Adding a window where there isn&apos;t one means structural
            work, exterior re-cladding, possibly a permit. Removing a
            load-bearing wall means engineering, temporary support, lintel
            installation. Changing the sequence from the front door to the
            kitchen often means rebuilding most of the main floor.
          </p>
          <p>
            This is why getting the layout right at design time matters more
            than any other single decision. The finishes you choose in 2026
            will not be the finishes in the home in 2046. The layout will
            be.
          </p>

          <h2>The Toronto Lot Problem</h2>
          <p>
            A good layout starts with what the lot allows, not with a floor
            plan template imported from somewhere else.
          </p>
          <p>
            Toronto lots come with specific constraints that shape every
            layout decision:
          </p>
          <p>
            <strong>Narrow widths.</strong> Many Toronto lots are 25 to 50
            feet wide. On a 30-foot lot, every foot of width matters. The
            choices about where the staircase sits, whether the kitchen
            opens left or right, and how the house catches light from the
            side are all different than on a 60-foot lot.
          </p>
          <p>
            <strong>Mature trees.</strong> The City of Toronto&apos;s tree
            protection bylaws mean that mature trees often can&apos;t be
            removed. A 100-year-old maple at the back of the lot may dictate
            the placement of every window facing the rear garden.
          </p>
          <p>
            <strong>Ravine orientations.</strong> A ravine-back lot is a
            gift &mdash; but only if the layout uses it. We design every
            common space to pull toward the ravine view, with the service
            spaces (pantries, mudrooms, laundry) tucked along the street
            side where the view doesn&apos;t matter.
          </p>
          <p>
            <strong>Light orientation.</strong> A north-facing front means
            most of the day&apos;s light comes from the back. A
            south-facing front means the rear yard is shaded most of the
            day. The layout has to respond to which direction the lot faces
            &mdash; the rooms that need morning light, the rooms that
            benefit from evening light, and the rooms that can do without
            direct sun all change based on orientation.
          </p>
          <p>
            <strong>Heritage districts.</strong> In neighbourhoods like
            Cabbagetown, the Annex, or parts of Rosedale, the facade is
            constrained by heritage rules. The layout becomes the only real
            variable. The exterior may have to look a specific way, but the
            interior can be reimagined entirely &mdash; and that&apos;s
            where a good layout earns its keep.
          </p>
          <p>
            A floor plan that hasn&apos;t responded to the specific lot is a
            floor plan that could be on any lot. That&apos;s the first sign
            it wasn&apos;t designed for the home it&apos;s about to become.
          </p>

          <h2>How to Tell If a Layout Was Designed or Decorated</h2>
          <p>There are signals you can read in a floor plan.</p>
          <p>
            <strong>Signs of a designed layout:</strong>
          </p>
          <ul>
            <li>
              Light works in every primary room at the time of day
              you&apos;d actually use that room
            </li>
            <li>
              The path from the front door to the main living space feels
              intentional, not accidental
            </li>
            <li>
              The kitchen connects to the right outdoor space &mdash; the
              morning coffee patio, or the evening dining terrace, depending
              on the home
            </li>
            <li>
              Kids&apos; rooms are buffered from the primary suite by
              stairs, a hall, or a service zone
            </li>
            <li>
              Sightlines pull you through the house &mdash; you can see from
              the entry to the back garden, or from the kitchen to the
              family room, or from the primary bedroom to a tree
            </li>
            <li>
              Service spaces (laundry, mudroom, storage) are placed where
              the activity actually happens, not as afterthoughts
            </li>
          </ul>
          <p>
            <strong>
              Signs of a layout that was decorated rather than designed:
            </strong>
          </p>
          <ul>
            <li>
              Beautiful finishes in rooms that feel cramped or oddly
              proportioned
            </li>
            <li>
              All the light comes from one direction only &mdash; the rest
              of the house feels darker than it should
            </li>
            <li>The dining room sits in a corner with no natural light</li>
            <li>A bathroom door opens directly toward a bed</li>
            <li>You can see into the bathroom from the front entry</li>
            <li>
              The kitchen sink faces a wall instead of facing the people in
              the room
            </li>
            <li>Hallways are too narrow, or stairs land in awkward places</li>
          </ul>
          <p>
            These aren&apos;t aesthetic preferences. They&apos;re decisions
            that affect how the home is lived in, every day.
          </p>

          <h2>Questions to Ask Before You Approve a Plan</h2>
          <p>Before signing off on a floor plan, sit with these:</p>
          <ul>
            <li>
              Where does the light land at 8 AM, noon, and 6 PM? Walk
              through the plan room by room and answer this for each.
            </li>
            <li>
              Where do you naturally want to gather as a family? Is that
              what the floor plan supports, or is it placing the gathering
              space somewhere that doesn&apos;t reflect how you live?
            </li>
            <li>
              What&apos;s the sequence from the front door to the kitchen?
              Does it feel like an arrival, or like a hallway?
            </li>
            <li>
              Can you stand at the kitchen sink and see the people you
              love? Or are you facing a wall?
            </li>
            <li>
              Is the primary suite a refuge, or just another bedroom in
              size?
            </li>
            <li>
              Does the plan respond to your specific lot, or could it be on
              any lot?
            </li>
          </ul>
          <p>
            If any of these makes you pause, the layout needs another pass.
            The finishes can wait.
          </p>

          <h2>The Closing Argument</h2>
          <p>
            A great layout is one of the few things in a home that compounds
            over years. You feel it every morning when the light comes in.
            You feel it when guests walk through the door. You feel it on a
            quiet Sunday afternoon when the house just works.
          </p>
          <p>
            Finishes are the surface. Layout is the foundation underneath.
            The two are linked &mdash; beautiful materials placed within a
            thoughtful layout create something neither could create on its
            own &mdash; but if there&apos;s one thing you can only get right
            once, it&apos;s the layout.
          </p>
          <p>
            At Fatahi Building, design and construction are one continuous
            process. Majid designs the home knowing exactly how it will be
            built. Layout decisions get made with construction reality in
            mind &mdash; material thickness, structural spans, mechanical
            routing, daylight angles &mdash; every constraint and
            opportunity considered from the first sketch forward.
          </p>
          <p>
            If you&apos;re starting to think about a custom home or a
            whole-home transformation, we&apos;d welcome a conversation.
            The layout is where it starts.
          </p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Starting With the Right Plan</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              The layout is where it starts
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Whether you&apos;re building from the ground up or transforming
              an existing home, the layout conversation is the place to
              begin.
            </p>
            <Link
              href="/contact"
              className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500"
            >
              Start a Conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

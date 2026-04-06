import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "Is It Worth Renovating or Should You Rebuild? | Fatahi Building",
  description:
    "The decision between renovating your existing home and building new isn\u2019t just about cost. Here\u2019s how to think through it clearly, from a team that does both.",
};

export default function RenovateOrRebuildArticle() {
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
            <p className="section-label mb-6">Investment &amp; Value</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-8">
              Is It Worth Renovating or Should You Rebuild?
            </h1>
            <p className="text-white/40 text-sm font-light">April 2026</p>
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
                This is the question we hear most often from homeowners in
                established Toronto neighbourhoods: do I renovate what I have, or
                start fresh?
              </p>
              <p>
                The honest answer is that it depends on the house, the lot, and
                what you&apos;re trying to achieve. But there&apos;s a framework
                that makes the decision clearer.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>
                  <strong>Start with the structure, not the finishes.</strong> If
                  the bones of the house are sound (foundation, framing,
                  mechanical systems), a whole-home transformation can deliver a
                  completely new living experience. If the foundation is failing
                  or the structure can&apos;t support what you want, rebuilding
                  is the more honest path forward.
                </li>
                <li>
                  <strong>Consider what the lot allows.</strong> Zoning bylaws in
                  Toronto have changed significantly. Some older homes sit on
                  lots where current zoning would allow a larger footprint.
                  Others are in areas where a new build would be restricted to
                  something smaller than what exists today.
                </li>
                <li>
                  <strong>Understand the real cost comparison.</strong> A
                  whole-home transformation is not always less expensive than
                  building new. The gap between a deep transformation and a new
                  build is often narrower than it first appears.
                </li>
                <li>
                  <strong>Think about how long you plan to stay.</strong> A
                  transformation makes sense when you love your neighbourhood and
                  your lot. A rebuild makes sense when the house itself is the
                  limitation.
                </li>
              </ul>
              <p>
                Both paths lead to a home that fits your life. The right choice
                is the one grounded in reality, not assumption.
              </p>
            </>
          }
        >
          <p>
            You love your neighbourhood. Your kids walk to school. You know your
            neighbours. The lot is mature, with trees that took decades to grow.
            But the house itself stopped fitting your life years ago.
          </p>
          <p>
            This is the starting point for most of the homeowners we work with
            in Toronto&apos;s established neighbourhoods. And the first real
            question is always the same: do we renovate what&apos;s here, or do
            we take it down and build the home we actually want?
          </p>
          <p>
            It&apos;s a significant decision, and it deserves a clear-eyed
            answer rather than an emotional one. Here&apos;s how we help our
            clients think through it.
          </p>

          <h2>Start With the Structure, Not the Kitchen</h2>
          <p>
            Most people begin this conversation by thinking about finishes. They
            imagine a new kitchen, opened-up living spaces, a primary suite that
            actually feels like a retreat. Those are the visible outcomes. But
            the decision between renovating and rebuilding starts underneath all
            of that.
          </p>
          <p>
            <strong>The foundation.</strong> Is it sound? Is it cracking,
            shifting, or allowing water intrusion? In many Toronto homes built
            in the 1950s through 1970s, the foundation is concrete block rather
            than poured concrete. Some of these are perfectly serviceable.
            Others are reaching the end of their structural life. If the
            foundation needs replacing, you&apos;re already doing the most
            expensive and disruptive part of a new build.
          </p>
          <p>
            <strong>The framing.</strong> Can the existing structure support what
            you want? Adding a second storey to a bungalow, for example, often
            requires reinforcing or replacing the entire first-floor structure
            to carry the new load. At a certain point, you&apos;re keeping the
            old framing out of sentiment rather than savings.
          </p>
          <p>
            <strong>The mechanical systems.</strong> Wiring, plumbing, HVAC. In
            older Toronto homes, these are often original or partially updated.
            A whole-home transformation typically means replacing all of them.
            This is the right thing to do, but it&apos;s important to account
            for it honestly in the budget rather than treating it as a surprise
            once the walls are open.
          </p>
          <p>
            The principle is simple: if the bones can support the home you want,
            renovating is a real option. If the bones are the problem, building
            new is the more honest path.
          </p>

          <h2>What the Lot Allows (and Doesn&apos;t)</h2>
          <p>
            Zoning is the factor most homeowners underestimate. Toronto&apos;s
            zoning bylaws have evolved significantly, and many older homes exist
            under rules that no longer apply.
          </p>
          <p>
            <strong>Sometimes zoning works in your favour.</strong> An older
            bungalow on a wide lot in North York might sit well within current
            setback and coverage limits, meaning a new build could be larger and
            better positioned than what&apos;s there today. In these cases,
            rebuilding gives you a home that fully uses what the lot offers.
          </p>
          <p>
            <strong>Sometimes zoning works against you.</strong> In some
            neighbourhoods, current bylaws are more restrictive than when the
            existing home was built. A home that covers 40% of the lot might be
            in an area where new construction is limited to 35%. Tearing down
            means building back smaller. In these cases, a transformation that
            works within the existing footprint actually gives you more usable
            space.
          </p>
          <p>
            We assess zoning early in every conversation. It&apos;s one of the
            first things that shapes our recommendation, and it&apos;s
            something most homeowners don&apos;t have visibility into until they
            ask.
          </p>

          <h2>The Real Cost Comparison</h2>
          <p>
            There&apos;s a common assumption that renovating is significantly
            less expensive than building new. In some cases, that&apos;s true.
            In many, the gap is smaller than expected.
          </p>
          <p>A whole-home transformation involves:</p>
          <ul>
            <li>
              Selective demolition (often down to the studs on most or all of
              the home)
            </li>
            <li>New mechanical, electrical, and plumbing throughout</li>
            <li>Structural reinforcement or modification</li>
            <li>
              Full interior buildout: new floors, walls, ceilings, kitchens,
              bathrooms, millwork
            </li>
            <li>
              Often a new roof, new windows, and exterior cladding
            </li>
          </ul>
          <p>
            When you add these up, the cost of a deep transformation can reach
            60 to 80% of what a comparable new build would cost. The savings
            are real but they&apos;re not as dramatic as many people expect
            walking in.
          </p>
          <p>
            Where transformation delivers clear value is when the existing
            structure genuinely supports the vision. A home with a solid
            poured-concrete foundation, good bones, and a layout that works
            with modification rather than wholesale replacement can be
            transformed beautifully at a meaningful savings over building new.
          </p>
          <p>
            Where rebuilding delivers clear value is when the scope of work
            required to bring the existing home up to standard is so extensive
            that you&apos;re effectively building a new home inside an old
            shell. In those situations, starting fresh gives you a better
            result with fewer compromises.
          </p>

          <h2>The Neighbourhood Question</h2>
          <p>
            Cost and structure matter. But for many of our clients, the
            decision comes down to something less tangible: what the
            neighbourhood means to them.
          </p>
          <p>
            Established Toronto neighbourhoods carry something a new
            subdivision can&apos;t replicate. Mature streetscapes,
            walkability, proximity to schools and parks you&apos;ve been part
            of for years. These things have real value, and they&apos;re a
            legitimate reason to invest in transforming a home rather than
            selling and building elsewhere.
          </p>
          <p>
            On the other hand, if the lot itself is the limitation (too narrow,
            poor orientation, restrictive zoning), sometimes the right move is
            finding a better lot and building the home that fits your life from
            scratch.
          </p>
          <p>
            We&apos;ve guided clients in both directions. The recommendation
            always starts with the property, not a preference for one approach
            over the other.
          </p>

          <h2>Questions to Ask Yourself</h2>
          <p>Before you commit to either path, sit with these:</p>
          <ul>
            <li>
              What is the condition of the foundation, and has it been assessed
              by an engineer?
            </li>
            <li>
              Does current zoning allow me to build what I want, or would I be
              building back smaller?
            </li>
            <li>
              Am I keeping the existing structure because it serves the design,
              or because it feels like the safer choice?
            </li>
            <li>
              How long do I plan to live here? Five years? Twenty? The answer
              changes the math.
            </li>
            <li>
              Have I seen a realistic cost comparison for both options on my
              specific property?
            </li>
          </ul>
          <p>
            The answers won&apos;t make the decision for you, but they&apos;ll
            make sure you&apos;re deciding based on reality.
          </p>

          <h2>Both Paths Lead to the Same Place</h2>
          <p>
            Whether you transform an existing home or build from the ground up,
            the outcome is the same: a home designed around how you live, built
            with materials and craft that will last, in a neighbourhood
            you&apos;ve chosen deliberately.
          </p>
          <p>
            At Fatahi Building, we do both. Majid has designed and built new
            custom homes from the foundation up, and he&apos;s led whole-home
            transformations that made a 1960s bungalow unrecognizable from the
            inside while respecting its place on the street. The process is the
            same either way: we start with how you want to live, we study the
            property, and we give you an honest recommendation based on what
            will deliver the best result.
          </p>
          <p>
            If you&apos;re weighing this decision, we&apos;d welcome a
            conversation. It starts with the property, and the answer usually
            becomes clear once we&apos;ve looked at it together.
          </p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Weighing Your Options?</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Let&apos;s look at your property together
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              The answer usually becomes clear once we&apos;ve assessed the
              structure, the lot, and what you&apos;re trying to achieve.
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

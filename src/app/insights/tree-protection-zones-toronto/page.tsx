import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title:
    "You Can Kill a Tree on a Construction Site Without Ever Touching It | Fatahi Building",
  description:
    "The fence around a tree on a construction site isn't drawn around the tree. It's drawn around roots nobody can see, calculated backwards from the trunk. Here's what a tree protection zone actually is, why one zone can carry two different fences, and why it's settled before a shovel moves.",
};

export default function TreeProtectionZonesArticle() {
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
              You Can Kill a Tree on a Construction Site Without Ever Touching
              It
            </h1>
            <p className="text-white/40 text-sm font-light">August 2026</p>
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
                Drive past a custom home site in Toronto and you&apos;ll see
                hoarding around the trees. Most people read it as tidiness, or
                as a rule someone is complying with. It&apos;s neither. It&apos;s
                the outcome of a calculation made before the project started,
                and getting it wrong can cost a mature tree that took seventy
                years to grow.
              </p>
              <p>
                <strong>The thing that surprises people:</strong> you can kill a
                tree on a construction site without ever touching it. No cut, no
                scrape, nothing that would show up in a photograph. Compact the
                soil over its root system with equipment or stored material, and
                you cut off the water and air the roots need. The tree can look
                fine for a long time before it shows you what happened.
              </p>
              <h2>How the Zone Is Actually Set</h2>
              <ul>
                <li>
                  <strong>
                    It protects the root system, not the trunk.
                  </strong>{" "}
                  The visible tree is the smaller half of the problem.
                </li>
                <li>
                  <strong>
                    The radius comes off the diameter of the trunk.
                  </strong>{" "}
                  Trunk size is how you work out how far the roots run, so the
                  fence is calculated backwards from the one part you can
                  measure.
                </li>
                <li>
                  <strong>An arborist report sets it</strong> before anything
                  happens on the lot.
                </li>
                <li>
                  <strong>
                    Inside the line: no digging, no compaction, no storing
                    material.
                  </strong>{" "}
                  Nothing crosses it for the whole job.
                </li>
              </ul>
              <p>
                <strong>
                  And one zone can carry two different fences.
                </strong>{" "}
                Anything inside the property line gets solid plywood hoarding.
                The property line usually sits a few feet back from the curb, so
                the strip at the very front is technically city property, and
                that portion gets orange mesh instead, so it stays visible.
              </p>
              <p>
                Two invisible things, a root system and a property line, decide
                everything you can see on the lot.
              </p>
            </>
          }
        >
          <p>
            On our Old Yonge Street project, the first thing that went up
            wasn&apos;t a fence around the site. It was a fence around a tree.
          </p>
          <p>
            There&apos;s a large old tree at the front of that lot, and a run of
            trees across the back. Before any equipment arrived, before a shovel
            moved, the protection zones were surveyed, drawn, and built.
            That&apos;s the actual first day of a custom home on a mature
            Toronto lot, and almost nobody outside the industry knows it.
          </p>
          <p>
            It&apos;s worth explaining properly, because the reasoning behind it
            is genuinely interesting, and because it&apos;s one of the clearest
            examples of something we say often: the most consequential work on a
            build happens before anything visible does.
          </p>

          <h2>The Part That Surprises People</h2>
          <p>
            You can kill a tree on a construction site without ever touching it.
          </p>
          <p>
            Not a cut, not a scrape, nothing that would show in a photograph.
            You park equipment over its roots, or you store a pallet of material
            there for a few months, and the soil compacts. Compacted soil stops
            moving water and air the way loose soil does, and the fine roots
            that do most of the actual work of keeping a tree alive are the
            first thing to suffer.
          </p>
          <p>
            The tree doesn&apos;t fall over that week. It can look completely
            normal through the build and for a while after it. That&apos;s what
            makes it dangerous: the damage and the consequence are separated by
            enough time that nobody connects them.
          </p>
          <p>
            That&apos;s the risk a tree protection zone exists to remove, and
            once you understand that, the way the zone is drawn makes sense.
          </p>

          <h2>The Fence Isn&apos;t Drawn Around the Tree</h2>
          <p>Here&apos;s the part that reframes the whole thing.</p>
          <p>
            A tree protection zone is a set radius around the trunk, and{" "}
            <strong>the radius isn&apos;t chosen by eye.</strong> It comes off
            the diameter of the trunk. Trunk size is how you work out how far
            the roots are likely to run, so the protected area is calculated
            backwards from the one measurement you can actually take.
          </p>
          <p>
            You&apos;re not protecting the tree. You&apos;re protecting the root
            system. And the roots reach further out than the tree looks like it
            should need, which is why the fence often sits much wider than
            people expect and why &ldquo;just give it a few feet&rdquo; is not
            how any of this works.
          </p>
          <p>
            On our projects, an arborist report sets the zone before we touch
            the lot. It&apos;s not a judgement call made on the day by whoever
            shows up first.
          </p>

          <h2>What &ldquo;Protected&rdquo; Actually Means</h2>
          <p>Inside that line, for the entire duration of the job:</p>
          <ul>
            <li>
              <strong>No digging.</strong> No excavation, no trenching, no
              service runs.
            </li>
            <li>
              <strong>No compaction.</strong> No equipment driving or parking
              over it, no vehicles crossing it as a shortcut.
            </li>
            <li>
              <strong>No storing material.</strong> Not soil, not lumber, not a
              temporary pile of anything.
            </li>
            <li>
              <strong>No washing out.</strong> Nothing gets rinsed or dumped
              inside the zone.
            </li>
          </ul>
          <p>
            Nothing crosses that line for the whole build. It stops being usable
            ground the moment the fence goes up, which on a tight lot is a real
            constraint on how the site gets sequenced, and it&apos;s one of the
            things that has to be designed around rather than discovered halfway
            through.
          </p>

          <h2>Why One Zone Can Have Two Different Fences</h2>
          <p>
            This is the detail that gets noticed most on site, and the reason
            for it is not what people assume.
          </p>
          <p>
            Walk the front of our Old Yonge lot and you&apos;ll see solid
            plywood hoarding along part of one protection zone, and bright
            orange mesh fencing along the rest of the same zone. Same tree. Same
            zone. Two different fences.
          </p>
          <p>
            It has nothing to do with what each fence physically stops.{" "}
            <strong>It&apos;s about whose land each section sits on.</strong>
          </p>
          <ul>
            <li>
              <strong>
                Anything inside the property line gets solid plywood hoarding.
              </strong>{" "}
              It&apos;s a real barrier and it&apos;s opaque.
            </li>
            <li>
              <strong>
                The property line usually sits about four or five feet back from
                the curb.
              </strong>{" "}
              So that last strip at the very front, the part that feels like it
              belongs to the house, is technically city property.
            </li>
            <li>
              <strong>That portion gets orange mesh instead.</strong> It&apos;s
              high-visibility rather than solid, because on public land the
              priority is that people can see it.
            </li>
          </ul>
          <p>
            So the thing that decides which fence you&apos;re looking at is a
            property line, and you cannot see a property line standing there.
            Two invisible things, a root system and a boundary, produce every
            visible thing on that lot.
          </p>

          <h2>What It Looks Like on a Real Lot</h2>
          <p>
            Old Yonge ended up with two arrangements, driven by where the trees
            actually are:
          </p>
          <ul>
            <li>
              <strong>One zone at the front</strong>, wrapped around the large
              old tree, carrying both fence types because it crosses the
              property line.
            </li>
            <li>
              <strong>A solid line across the entire back</strong>, protecting a
              run of several trees at once rather than fencing each one
              individually.
            </li>
          </ul>
          <p>
            That second one is common on established streets, where trees
            planted decades ago now sit close enough together that individual
            zones would overlap into one continuous area anyway.
          </p>

          <h2>Why This Is a Design Question, Not a Site Question</h2>
          <p>
            The mistake is treating tree protection as something that gets
            handled when construction starts. By then, the decisions have
            already been made for you.
          </p>
          <p>
            A protection zone is a piece of the lot you cannot use. Not for the
            building, not for access, not for storage, not for a crane position.
            On a wide lot with mature trees, that can reshape where the house
            sits, where the driveway runs, how the site is staged, and the order
            the trades come in.
          </p>
          <p>
            Which is why we deal with it while the design is still moving. Where
            the trees stand is where the house does not go, and it&apos;s much
            cheaper to know that at the drawing stage than to find it out when
            the excavator is booked.
          </p>
          <p>
            There&apos;s a second reason too, and it&apos;s the one that matters
            more to us. Those trees are most of why these streets are worth
            building on. A wide North York lot with a seventy-year-old canopy is
            not something you can create; you can only inherit it or lose it.
            Designing around a tree is not a compliance exercise. It&apos;s the
            reason the finished house feels like it belongs there.
          </p>

          <h2>What This Means If You&apos;re Building</h2>
          <p>A few practical things worth knowing before you start:</p>
          <ul>
            <li>
              <strong>
                Mature trees on or near your lot will affect your design.
              </strong>{" "}
              Not might. Will. Better to know which ones and by how much before
              you fall in love with a floor plan.
            </li>
            <li>
              <strong>The arborist report is early work, not late work.</strong>{" "}
              It feeds the zone, and the zone feeds the site plan.
            </li>
            <li>
              <strong>Neighbouring trees count.</strong> A tree on the property
              next door can have a protection zone that reaches onto your lot,
              and it constrains you just as much as your own.
            </li>
            <li>
              <strong>This connects to your approvals.</strong> Tree
              requirements are one of the more common reasons a minor variance
              application stalls, which is covered in more detail in our piece
              on the{" "}
              <Link href="/insights/committee-of-adjustment-toronto">
                Committee of Adjustment
              </Link>
              .
            </li>
          </ul>
          <p>
            None of this is a reason to avoid a lot with trees on it. It&apos;s
            the opposite. It&apos;s a reason to plan for them early, when
            planning is still free.
          </p>

          <h2>How We Approach It</h2>
          <p>
            We survey and settle the protection zones before the design is
            final, so the constraints are part of the drawing rather than a
            correction to it. The arborist report gets commissioned early, not
            when someone asks for it. And the hoarding goes up before the first
            piece of equipment arrives, not after.
          </p>
          <p>
            That&apos;s not caution. On a lot like Old Yonge, the trees are the
            single most valuable thing standing there on day one, and
            they&apos;re the only element of the project that cannot be replaced
            if it&apos;s damaged. Everything else on that site we can build
            again.
          </p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Before the First Shovel</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              The trees decide where the house goes
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              If you&apos;re looking at a lot with mature trees and want to know
              what it will actually allow, that&apos;s the conversation worth
              having early.
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

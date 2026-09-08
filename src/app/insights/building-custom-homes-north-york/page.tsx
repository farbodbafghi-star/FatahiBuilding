import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title:
    "What It's Actually Like to Build a Custom Home in North York | Fatahi Building",
  description:
    "Most of what makes North York a good place to build a custom home is the same thing that makes it difficult. Wide lots, deep frontages and seventy-year-old trees give you room to design properly, and they bring protection zones, variance hearings and neighbours ten feet away. Here is the honest version.",
};

export default function NorthYorkArticle() {
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
            <p className="section-label mb-6">Neighbourhoods</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-8">
              What It&apos;s Actually Like to Build a Custom Home in North York
            </h1>
            <p className="text-white/40 text-sm font-light">September 2026</p>
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
                We finished two custom homes in Willowdale West this past year,
                and we break ground on a third on Old Yonge Street in the next
                few weeks. Three houses within a few streets of each other.
              </p>
              <p>
                That concentration isn&apos;t an accident, and this is the
                article explaining why. It is also the honest version rather
                than the brochure version, because the things that make North
                York worth building in are the same things that make it harder
                than a new subdivision.
              </p>
              <p>
                <strong>What the lots give you:</strong> wide frontages, real
                depth, and mature trees planted when the streets were laid out.
                That&apos;s room to place a house properly instead of squeezing
                it onto whatever the setbacks leave you. On a narrow lot the
                house is largely decided before you start: it goes up, and the
                stairs land wherever they fit. On these lots you can put the
                stairs where they belong and bring light in from more than one
                direction.
              </p>
              <h2>What the Lots Cost You</h2>
              <ul>
                <li>
                  <strong>Mature trees mean protection zones</strong>, arborist
                  reports, and a piece of the lot you cannot use for anything,
                  before a shovel moves.
                </li>
                <li>
                  <strong>
                    Established streets mean the Committee of Adjustment.
                  </strong>{" "}
                  A design that fits the land it&apos;s on usually needs at
                  least one minor variance, and that&apos;s two to four months.
                </li>
                <li>
                  <strong>Infill means neighbours.</strong> You&apos;re building
                  ten feet from people who live there now, which shapes site
                  access, staging, and sequencing.
                </li>
              </ul>
              <p>
                <strong>And why people want to be here:</strong> the 401 and 404
                within minutes, a straightforward drive to downtown, Vaughan,
                Markham and Richmond Hill, and the subway running down Yonge. A
                quiet residential street with the city right there with it.
              </p>
              <p>
                None of the difficulty is a complaint. It&apos;s the job here,
                and knowing it going in is most of what keeps a build on
                schedule.
              </p>
            </>
          }
        >
          <p>
            We finished two custom homes in Willowdale West this past year. In
            the next few weeks we break ground on a third, on Old Yonge Street.
          </p>
          <p>
            Three houses within a few streets of each other, which is a
            deliberate choice rather than a coincidence, and it&apos;s worth
            explaining why. Because the honest answer isn&apos;t that North York
            is easy to build in. It&apos;s that what makes it difficult and what
            makes it worth it are the same set of facts.
          </p>

          <h2>Start With the Lots</h2>
          <p>
            The thing that separates an established North York street from a
            newer development is the ground itself.
          </p>
          <p>
            Wide frontages. Real depth. And trees that were planted when the
            streets were first laid out, which in much of Willowdale and along
            the Yonge corridor means a canopy that has had generations to fill
            in.
          </p>
          <p>That changes what can be drawn.</p>
          <p>
            On a narrow lot, the house is mostly decided before design begins.
            It goes up rather than out, the stairs land where they fit rather
            than where they belong, and the plan bends around the setbacks
            instead of around the way a family actually lives. You can build
            something excellent on a narrow lot, and we have, but you&apos;re
            solving a constrained problem.
          </p>
          <p>
            On a wide lot you get choices back. Where the main stair sits.
            Whether the kitchen looks onto the garden or the street. How many
            directions daylight enters a room from. Whether the house can spread
            horizontally rather than stacking. These sound like design luxuries.
            They&apos;re actually the decisions that determine whether a house
            is comfortable to live in, which is a different question from
            whether it&apos;s impressive to walk into.
          </p>
          <p>
            That&apos;s the argument for building here, and it&apos;s a design
            argument rather than a market one.
          </p>

          <h2>Now the Part That Rarely Gets Mentioned</h2>
          <p>
            Everything above has a cost attached, and it lands before
            construction starts.
          </p>
          <p>
            <strong>Mature trees mean protection zones.</strong> A tree of any
            size on or near the lot brings an arborist report and a protected
            radius calculated off the trunk diameter, inside which nothing can
            be dug, compacted or stored for the entire build. That&apos;s a
            piece of your lot you cannot use, and on a tight site it reshapes
            where the house sits, where the driveway runs, and how the whole job
            is staged. We wrote about this in detail{" "}
            <Link href="/insights/tree-protection-zones-toronto">
              after starting Old Yonge
            </Link>
            , where one protection zone at the front carries two different
            fences because it crosses the property line.
          </p>
          <p>
            <strong>
              Established streets mean the Committee of Adjustment.
            </strong>{" "}
            The zoning by-law was written for a generic lot, and these lots are
            not generic. A design that genuinely fits the land it sits on very
            often needs at least one minor variance: a little more height, a
            tighter side yard, a bit more depth. That&apos;s an application,
            neighbour notification, and a public hearing, and realistically{" "}
            <Link href="/insights/committee-of-adjustment-toronto">
              two to four months
            </Link>{" "}
            before a building permit is even in play.
          </p>
          <p>
            <strong>Infill means neighbours.</strong> This is not a subdivision
            where the closest occupied house is a street away. You are building
            beside people who live there today, and that affects site access,
            where material can be stored, how deliveries are sequenced, and the
            hours certain work can happen. It&apos;s a real constraint on how a
            job runs and it needs planning, not apologies.
          </p>
          <p>
            None of that is a complaint. It&apos;s the actual job here. And
            knowing it going in is most of what keeps a build on schedule,
            because almost every one of those items is only a delay if it
            surprises you.
          </p>

          <h2>Why Building Repeatedly in One Area Compounds</h2>
          <p>
            Here&apos;s the part that isn&apos;t obvious until you&apos;ve done
            it more than once in the same few streets.
          </p>
          <p>
            By the second house, we already had a working sense of what the
            Committee of Adjustment would approve in this area, what it
            wouldn&apos;t, and how long the answer takes. We knew which lots in
            the pocket were likely to carry tree issues. We knew how the local
            approvals actually run, as opposed to how the published process
            describes them.
          </p>
          <p>
            None of that is written down anywhere. It&apos;s the kind of
            knowledge that only comes from having filed, waited, and been
            through it on the same streets.
          </p>
          <p>
            The practical value is simple: when we give a client a timeline in
            this area, we&apos;re not guessing at it. A schedule for a North
            York infill build is a set of estimates about approvals, trees and
            neighbours, and estimates get better with repetition in one place.
            That&apos;s the real argument for a builder working a concentrated
            area rather than taking whatever comes up across the GTA.
          </p>

          <h2>Why People Want to Live Here</h2>
          <p>
            Everything above is about building. This part is about living in the
            finished house, and it&apos;s most of why our clients choose these
            streets.
          </p>
          <p>
            You&apos;re on the 401 and the 404 within minutes. Downtown,
            Vaughan, Markham and Richmond Hill are all a straightforward drive.
            The subway runs straight down Yonge. For a family where two people
            work in different corners of the GTA, that combination is genuinely
            hard to find anywhere else in the city.
          </p>
          <p>
            So you get a quiet residential street, and the city right there with
            it, whatever the season and whatever time of day.
          </p>
          <p>
            That combination is also why the lots hold their value in a way that
            makes a custom build make sense here. You are not building an
            expensive house on a street that has to catch up to it. The street
            is already what it is.
          </p>

          <h2>Where We Build</h2>
          <p>
            Most of our work sits in <strong>Willowdale West</strong> and along
            the <strong>Yonge corridor</strong> through North York, including
            the streets around <strong>Old Yonge</strong>. It&apos;s an area we
            know at the level of specific lots, specific approvals and specific
            trees, rather than at the level of a postal code.
          </p>
          <p>
            We work across the GTA, and we&apos;re glad to. But the
            concentration is intentional, and it&apos;s the reason the third
            house on these streets starts from a better position than the first
            one did.
          </p>

          <h2>If You&apos;re Considering a Build Here</h2>
          <p>A few things worth doing early:</p>
          <ul>
            <li>
              <strong>
                Get a survey and an arborist opinion before you commit to a
                design.
              </strong>{" "}
              The trees and the lot lines will shape the plan more than any
              other input.
            </li>
            <li>
              <strong>Assume you&apos;ll need a variance.</strong> On these lots
              it&apos;s normal rather than exceptional, and planning for two to
              four months is much easier than absorbing it as a surprise.
            </li>
            <li>
              <strong>
                Ask any builder what they&apos;ve actually completed in the
                area.
              </strong>{" "}
              Not the city, not the region. The neighbourhood. The difference
              between a builder who has been through the local process and one
              who hasn&apos;t shows up in your schedule, not in your drawings.
            </li>
          </ul>
          <p>
            If you&apos;re thinking about building in North York and you want to
            know what your specific lot will allow before you get attached to a
            plan, that&apos;s exactly the conversation worth having early.
            We&apos;d welcome it.
          </p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">North York</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Find out what your lot will actually allow
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Before you get attached to a plan, it&apos;s worth knowing what
              the trees, the lot lines and the by-law will let you build.
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

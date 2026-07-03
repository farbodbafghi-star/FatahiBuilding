import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title:
    "The 90% You'll Never See: Why Two Identical-Looking Homes Age Completely Differently | Fatahi Building",
  description:
    "You judge a home by the 10% you can see: the counters, the floors, the tile. But the 90% behind the drywall is what decides how it holds up. Here is the invisible work that separates a home that ages gracefully from one that quietly falls apart.",
};

export default function NinetyPercentYouNeverSeeArticle() {
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
            <p className="section-label mb-6">Craft &amp; Quality</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-8">
              The 90% You&apos;ll Never See: Why Two Identical-Looking Homes Age
              Completely Differently
            </h1>
            <p className="text-white/40 text-sm font-light">July 2026</p>
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
                Walk through two finished custom homes on handover day and they
                can look identical. Same stone counters, same white oak floors,
                same clean lines. On camera, you couldn&apos;t tell them apart.
              </p>
              <p>
                Ten years later, they&apos;re not the same home at all. One
                still feels tight, quiet, and solid. The other creaks, drafts,
                and has a growing list of things &ldquo;that just do that.&rdquo;
                The difference was never in the 10% you could see. It was in the
                90% you couldn&apos;t.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>
                  <strong>You see the finishes. You live in the structure.</strong>{" "}
                  The counters and tile are what you notice at first. The
                  framing, insulation, waterproofing, and mechanical systems are
                  what you actually feel every day: as quiet, as comfort, as a
                  floor that doesn&apos;t move.
                </li>
                <li>
                  <strong>
                    The invisible layer is where corners get cut, because no one
                    can see them.
                  </strong>{" "}
                  When a build is rushed or underbid, the savings almost always
                  come from the part that gets covered up before anyone walks
                  through. The finishes have to look right. The 90% behind them
                  doesn&apos;t have to, until years later, when it announces
                  itself.
                </li>
                <li>
                  <strong>The failures show up as feelings, not defects.</strong>{" "}
                  You won&apos;t get a report card. You&apos;ll get a pipe that
                  bangs when someone runs the shower upstairs, a hallway you can
                  hear through the wall, a floor that creaks in year three, a
                  draft you can&apos;t find the source of.
                </li>
                <li>
                  <strong>
                    The best decisions have payoffs measured in decades.
                  </strong>{" "}
                  Proper base preparation, air-sealing, structural over-spec,
                  letting materials acclimate: none of it photographs, and all
                  of it decides how the home feels in 2046.
                </li>
              </ul>
              <p>
                The photograph is the finishes. The home is everything behind
                them.
              </p>
            </>
          }
        >
          <p>
            Here&apos;s a thing we&apos;ve made peace with: the work we&apos;re
            proudest of is the work no one will ever see.
          </p>
          <p>
            A client walks into a finished home and reacts to the island, the
            light, the stone, the grain of the wood. That&apos;s right and good.
            Those things are supposed to move you. But everything that decides
            whether the home still feels this good in fifteen years is already
            sealed inside the walls, under the floors, and beneath the driveway.
            It&apos;s covered up on purpose, and it&apos;s roughly ninety percent
            of what we actually did.
          </p>
          <p>
            After more than thirty years of building across the GTA, we&apos;ve
            learned that this invisible ninety percent is the entire difference
            between a home that ages gracefully and one that slowly turns into a
            list of small frustrations. Two homes can look identical the day the
            client gets the keys. They will not be identical on an ordinary
            Tuesday a decade later.
          </p>

          <h2>The 10% You See, the 90% You Live In</h2>
          <p>
            The visible layer of a home, the finishes, is what everyone judges it
            by. Counters, cabinetry, flooring, tile, fixtures, paint. It&apos;s
            photographable, comparable, and it&apos;s what shows up on Instagram.
            It matters. Good materials, well installed, are worth every bit of
            the attention they get.
          </p>
          <p>
            But the finishes sit on top of everything that actually makes a house
            a home you enjoy living in:
          </p>
          <ul>
            <li>
              <strong>The framing:</strong> how straight, how solid, how
              well-fastened the skeleton is.
            </li>
            <li>
              <strong>The structure:</strong> beams and spans sized with margin,
              so floors don&apos;t bounce and don&apos;t creak.
            </li>
            <li>
              <strong>The waterproofing and air-sealing:</strong> the layers
              that keep water out and conditioned air in.
            </li>
            <li>
              <strong>The insulation:</strong> not just its presence, but how
              completely and carefully it fills every cavity.
            </li>
            <li>
              <strong>The mechanical, plumbing, and electrical:</strong> how
              thoughtfully the systems are laid out, fastened, and wrapped.
            </li>
            <li>
              <strong>The base and site prep:</strong> what the whole thing sits
              on, and whether the ground was ready to carry it.
            </li>
          </ul>
          <p>
            You never see any of it again after drywall. But you feel all of it,
            every day, for as long as you live there.
          </p>

          <h2>Why You Can&apos;t See It, and Why That Matters</h2>
          <p>
            The invisible layer is invisible by design. It goes in first and
            gets covered by everything that comes after. By the time a home is
            photographed for a listing or a portfolio, the ninety percent is
            entirely hidden behind the ten percent.
          </p>
          <p>
            That&apos;s exactly why it&apos;s the part that gets compromised when
            a build is rushed or won on the lowest number. The finishes{" "}
            <em>have</em> to look right, because the client will inspect those on
            day one. The framing, the air-sealing, the fastening detail behind
            the wall? No one&apos;s going to open the drywall to check. A photo
            can&apos;t show it. A walkthrough can&apos;t reveal it. So under
            pressure, it&apos;s the first place money quietly comes out of the
            build.
          </p>
          <p>
            We&apos;re not interested in naming what anyone else does. We&apos;re
            interested in one fact: the place a home is most likely to be
            shortchanged is precisely the place you can&apos;t inspect. Which
            means the only real protection is a builder who treats the hidden
            work as if it were on display.
          </p>

          <h2>How the Missing Work Shows Up Later</h2>
          <p>
            The failures in the ninety percent rarely arrive as dramatic
            defects. They arrive as small, daily, hard-to-place annoyances, the
            kind you learn to live with because you can&apos;t quite tell where
            they&apos;re coming from:
          </p>
          <ul>
            <li>
              Pipes that weren&apos;t fastened and wrapped, so you hear them bang
              when someone runs the shower upstairs.
            </li>
            <li>
              Insulation that was rushed and left gaps, so you lie awake hearing
              the hallway, or the room is never quite warm in the corner.
            </li>
            <li>
              Framing that wasn&apos;t done with care, so the floor creaks in
              year three and the door that closed perfectly on day one now
              catches.
            </li>
            <li>
              Air-sealing that was skipped, so there&apos;s a draft in winter you
              can feel but can never find the source of.
            </li>
            <li>
              A base that wasn&apos;t properly compacted, so the driveway or the
              patio settles and cracks a few winters in.
            </li>
          </ul>
          <p>
            None of these are things you&apos;d catch at handover. All of them
            are decided long before handover, in work that was covered up months
            earlier. This is the real report card on a build, and it doesn&apos;t
            come in until years after everyone&apos;s moved on.
          </p>

          <h2>The Decisions With Decade-Long Payoffs</h2>
          <p>
            Some of the best calls we make on a build are ones whose entire
            payoff sits ten, twenty, fifty years out, and are invisible the
            whole time.
          </p>
          <ul>
            <li>
              <strong>Base preparation before winter.</strong> Compact a
              driveway base properly and then let a season of loaded trucks and a
              winter of freeze-thaw settle it, and you get compaction no machine
              can match, so it stays flat for decades instead of cracking in year
              five.
            </li>
            <li>
              <strong>Letting materials acclimate.</strong> Wood that&apos;s
              allowed to reach the home&apos;s humidity before it&apos;s
              installed doesn&apos;t cup, gap, or creak later. Rushing that step
              to hit a date is a decision you feel every dry January for the life
              of the home.
            </li>
            <li>
              <strong>Structural margin.</strong> Sizing beams and joists with
              room to spare costs a little more upfront and buys you floors that
              still don&apos;t move in fifteen years.
            </li>
            <li>
              <strong>
                Doing the waterproofing and air-sealing as if someone were
                watching.
              </strong>{" "}
              Because in a sense, someone is: the person who&apos;ll live there
              through every storm and every cold snap.
            </li>
          </ul>
          <p>
            These are the decisions that never make a photo and never get a
            thank-you, because when they&apos;re done right, nothing happens. The
            absence of a problem is the whole reward.
          </p>

          <h2>How Design-Build Protects the Invisible 90%</h2>
          <p>
            The hidden work is only as good as the accountability behind it. When
            design, construction, and site supervision are split across separate
            hands, the ninety percent is exactly where things fall between the
            cracks, each party assuming someone else owned the detail.
          </p>
          <p>
            The way we&apos;re built removes that gap. Design and construction
            are one continuous process, under one accountable team, from the
            first sketch to the last day. The person who designed the structure
            is watching it get framed. The invisible decisions get made by the
            people who have to stand behind the home for years, not handed off to
            be someone else&apos;s problem.
          </p>
          <p>
            And because we can&apos;t hand you a home that shows its ninety
            percent, we do the next best thing: we document it. Weekly
            photographic reports over the course of the build capture the
            framing, the systems, and the layers as they go in, so the work
            you&apos;ll never see again isn&apos;t taken on faith. You have a
            record of the part of your home that matters most and disappears
            first.
          </p>

          <h2>The Closing Argument</h2>
          <p>
            If you only ever compare custom homes by the ten percent you can see,
            every good builder looks roughly the same, because the finishes are
            the easy part, and everyone can make a photo look right. The real
            question, the one that decides how you&apos;ll feel about your home
            on an ordinary day a decade from now, is about the part you&apos;ll
            never see.
          </p>
          <p>
            Ask the person building your home how they handle the ninety percent.
            Ask what they do that gets covered up. The answer tells you far more
            than any finish ever could.
          </p>
          <p>
            If you&apos;re thinking about a custom home or a whole-home
            transformation and you want to understand what really separates one
            build from another, that&apos;s a conversation we&apos;re always glad
            to have.
          </p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Built to Last</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              The part that matters most is the part you&apos;ll never see
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              If you want to understand what really separates one build from
              another, that&apos;s a conversation we&apos;re always glad to have.
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

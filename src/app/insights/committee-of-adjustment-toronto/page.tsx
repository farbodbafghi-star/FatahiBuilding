import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title:
    "The Committee of Adjustment: The Approval Step Most Homeowners Have Never Heard Of | Fatahi Building",
  description:
    "Everyone building a custom home worries about the building permit. The step that quietly adds two to four months is the Committee of Adjustment. Here is what it is, when you need it, and how to get through it without losing a season.",
};

export default function CommitteeOfAdjustmentArticle() {
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
              The Committee of Adjustment: The Approval Step Most Homeowners
              Have Never Heard Of
            </h1>
            <p className="text-white/40 text-sm font-light">June 2026</p>
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
                When people picture the paperwork behind a custom home, they
                picture the building permit. That&apos;s the one everyone&apos;s
                heard of. But there&apos;s an earlier approval that catches most
                homeowners by surprise, and it&apos;s the one that can quietly
                add months to a build before a single shovel moves: the
                Committee of Adjustment.
              </p>
              <p>
                Every lot in Toronto comes with a set of rules baked into the
                zoning by-law: how tall you can build, how close to the property
                line, how much of the lot you can cover. The moment your design
                steps past any one of those lines, you can&apos;t just build it.
                You apply to the City for a minor variance, and a panel called
                the Committee of Adjustment decides whether the exception is
                reasonable.
              </p>
              <h2>Key Takeaways</h2>
              <ul>
                <li>
                  <strong>It&apos;s more common than it sounds.</strong> On
                  tight Toronto lots, a design that makes the most of the
                  property often needs at least one variance. A slightly deeper
                  build, a bit more height, or a tighter side setback is normal,
                  and any one of those triggers the process.
                </li>
                <li>
                  <strong>It runs on four tests, not opinion.</strong> The panel
                  weighs your request against four questions from the Planning
                  Act: is it minor, is it appropriate for the property, does it
                  respect the intent of the zoning by-law, and does it respect
                  the intent of the Official Plan.
                </li>
                <li>
                  <strong>It adds two to four months, sometimes more.</strong>{" "}
                  Application, neighbour notification, and a public hearing take
                  a season on their own. An appeal can add many more months on
                  top.
                </li>
                <li>
                  <strong>The delays are almost never the hearing.</strong>{" "}
                  They&apos;re incomplete submissions, tree and heritage issues,
                  design revisions, and weak planning justification, all
                  avoidable with the right preparation up front.
                </li>
              </ul>
              <p>
                The most important months of a custom home are often the ones
                where it looks like nothing is happening. This is one of them,
                and knowing about it early is most of the battle.
              </p>
            </>
          }
        >
          <p>
            We&apos;ve been on projects where, three months in, you could drive
            past the lot and swear we hadn&apos;t touched it. No excavator, no
            framing, no visible sign of a build. And yet the most consequential
            work of those three months was already done. It just happened on
            paper, at the Committee of Adjustment.
          </p>
          <p>
            Almost nobody outside the industry has heard of it. Clients come to
            us worried about the building permit, because that&apos;s the term
            everyone knows. The Committee of Adjustment is the step that sits in
            front of it, and it&apos;s the one that most often decides whether a
            project breaks ground in spring or in fall.
          </p>
          <p>
            After more than thirty years of designing and building across the
            GTA, we&apos;ve learned that the homeowners who sail through this
            step are the ones who understood it before they fell in love with a
            design. So here&apos;s the whole thing, plainly.
          </p>

          <h2>What the Committee of Adjustment Actually Is</h2>
          <p>
            Every property in Toronto is governed by a zoning by-law. It sets
            the rules for what you&apos;re allowed to build without any special
            permission: the maximum height, the required distance from each
            property line (the setbacks), how much of the lot the building can
            cover, how big the building can be relative to the lot (floor space
            index, or FSI), and how far back it can extend.
          </p>
          <p>
            Build entirely within those rules and you&apos;re
            &ldquo;as-of-right,&rdquo; and you go straight to the building
            permit. But the moment your design asks for something the by-law
            doesn&apos;t allow, whether a little more height for a better
            roofline, a slightly deeper footprint, or a tighter side yard to
            gain interior width, you need permission for that specific
            exception. That permission is called a <strong>minor variance</strong>,
            and the body that grants it is the{" "}
            <strong>Committee of Adjustment</strong>: a panel that hears these
            requests and decides them one at a time.
          </p>
          <p>
            It is not a rubber stamp, and it is not a formality. It&apos;s a
            genuine decision made in a public hearing.
          </p>

          <h2>When You Actually Need One</h2>
          <p>
            You need a minor variance whenever your design exceeds any single
            zoning limit. In practice, on Toronto lots, the most common triggers
            are:
          </p>
          <ul>
            <li>
              <strong>Setbacks:</strong> building closer to a side or rear
              property line than the by-law allows, usually to gain usable width
              or depth.
            </li>
            <li>
              <strong>Height:</strong> a taller building, or a taller main
              floor, than the zone permits.
            </li>
            <li>
              <strong>Lot coverage:</strong> the building footprint covering
              more of the lot than allowed.
            </li>
            <li>
              <strong>Floor space index (FSI):</strong> more total floor area
              relative to the lot size than the by-law permits.
            </li>
            <li>
              <strong>Building length or depth:</strong> a home that extends
              farther back on the lot than the standard allows.
            </li>
          </ul>
          <p>
            Here&apos;s the part people don&apos;t expect: on a narrow or
            irregular Toronto lot, a smart design often needs a variance
            precisely <em>because</em> it&apos;s making the most of the
            property. The rules were written for a generic lot. Your lot
            isn&apos;t generic. Wanting the design to fit the land you actually
            own is one of the most common reasons to end up in front of the
            Committee, and there&apos;s nothing unusual or worrying about it.
          </p>

          <h2>The Four Tests the Panel Weighs</h2>
          <p>
            A minor variance isn&apos;t granted because you asked nicely. Under
            Section 45(1) of Ontario&apos;s Planning Act, the Committee has to be
            satisfied on four points, the &ldquo;four tests&rdquo;:
          </p>
          <ol>
            <li>
              <strong>Is the variance minor?</strong> &ldquo;Minor&rdquo;
              doesn&apos;t mean physically small. It means the impact on the
              surrounding area is reasonable, not that the number is tiny.
            </li>
            <li>
              <strong>
                Is it desirable for the appropriate development of the property?
              </strong>{" "}
              Does the change make for a better, sensible use of the land?
            </li>
            <li>
              <strong>
                Does it maintain the general intent of the zoning by-law?
              </strong>{" "}
              The specific number is being bent, but is the <em>purpose</em>{" "}
              behind that rule still respected?
            </li>
            <li>
              <strong>
                Does it maintain the general intent of the Official Plan?
              </strong>{" "}
              Does it fit the broader vision for how the neighbourhood is meant
              to develop?
            </li>
          </ol>
          <p>
            All four have to be met. A strong application is really an argument
            that walks the panel through each one, which is why <em>how</em> the
            request is presented matters as much as the request itself.
          </p>

          <h2>How the Process Actually Runs</h2>
          <p>Start to finish, here&apos;s the sequence:</p>
          <ol>
            <li>
              <strong>You file the application.</strong> In Toronto, minor
              variance applications are submitted digitally, as a PDF package
              emailed to the City, along with the application fee (a set City fee
              in the low thousands, roughly $2,200 for a typical house as of
              2026, and updated annually).
            </li>
            <li>
              <strong>The City reviews and circulates it.</strong> Planning
              staff and other divisions review the request. This is where an
              incomplete package stalls: missing drawings, an unclear survey, an
              arborist report that hasn&apos;t been filed yet.
            </li>
            <li>
              <strong>Your neighbours are notified.</strong> The City mails
              notice to surrounding property owners and posts a sign on the
              property. Neighbours can support, object, or simply show up to the
              hearing.
            </li>
            <li>
              <strong>The hearing happens.</strong> The Committee hears the
              application, considers any objections, weighs it against the four
              tests, and makes a decision: approve, approve with conditions, or
              refuse.
            </li>
            <li>
              <strong>The appeal window opens.</strong> After the decision
              there&apos;s a short appeal period (20 days for a minor variance).
              If no one appeals, the decision becomes final. If someone does,
              whether a neighbour objecting or the applicant after a refusal, it
              goes to the <strong>Toronto Local Appeal Body (TLAB)</strong>, a
              separate and longer process.
            </li>
          </ol>

          <h2>What It Adds to Your Timeline</h2>
          <p>
            Realistically, from filing to a final decision, budget{" "}
            <strong>two to four months</strong> for a straightforward
            application. That&apos;s before the building permit, and before the
            first day on site.
          </p>
          <p>
            If the application is complex, needs revisions, or draws an appeal to
            the TLAB, it can stretch to six months or more. This is the single
            biggest reason a build that &ldquo;should have started in
            spring&rdquo; doesn&apos;t start until fall, and it&apos;s almost
            always avoidable with earlier planning.
          </p>

          <h2>Why Applications Get Delayed (and How to Avoid It)</h2>
          <p>
            In our experience, the hearing itself is rarely the hold-up. The
            delays come from a handful of predictable places:
          </p>
          <ul>
            <li>
              <strong>Incomplete submissions.</strong> A package missing a
              required drawing, report, or an up-to-date survey gets bounced
              before it&apos;s ever heard.
            </li>
            <li>
              <strong>Tree requirements.</strong> Toronto&apos;s tree protection
              rules are strict. A mature tree near the build often means an
              arborist report and an injury or removal permit, and if that
              isn&apos;t sorted early, it holds up everything.
            </li>
            <li>
              <strong>Heritage considerations.</strong> In a heritage district,
              there&apos;s an extra layer of review that has to be accounted for
              from the start.
            </li>
            <li>
              <strong>Weak planning justification.</strong> An application that
              doesn&apos;t clearly make the four-test argument invites questions,
              deferrals, and objections. A well-reasoned one moves.
            </li>
            <li>
              <strong>Late design changes.</strong> Changing the design after
              filing can mean re-notifying neighbours and starting parts of the
              clock over.
            </li>
          </ul>

          <h2>How We Approach It</h2>
          <p>
            The Committee of Adjustment is a place a project can lose a season,
            or not, depending entirely on the work done before the application
            is filed.
          </p>
          <p>
            So we design with the by-law open on the table. Before a drawing is
            final, we already know every line the design crosses and every
            variance it will need, because we&apos;ve measured the design
            against the zoning at the same time we&apos;re measuring it against
            the lot, the light, and the way the family wants to live. There are
            no surprises later, because the constraints were part of the design
            from the first sketch.
          </p>
          <p>
            That lets us file a complete package the day the drawings are done:
            survey, drawings, and any tree or planning documentation together,
            not trickled in over weeks. And because design and construction are
            one continuous process here, the person making the case to the
            Committee is the same person who will build the home. The variance
            we&apos;re asking for isn&apos;t a guess about what might look nice;
            it&apos;s a decision we already know how to build.
          </p>
          <p>
            When the hearing comes, it isn&apos;t a moment of suspense.
            It&apos;s the plan.
          </p>

          <h2>The Closing Argument</h2>
          <p>
            If you&apos;re building custom in Toronto, there&apos;s a good chance
            the Committee of Adjustment is in your future, and that&apos;s not a
            problem to dread. It&apos;s the mechanism that lets a home be
            designed for its actual lot instead of squeezed into a generic box.
            The homeowners who find it stressful are the ones who meet it by
            surprise, halfway through, when the calendar is already tight. The
            ones who find it routine are the ones who knew it was coming and
            prepared for it from the first conversation.
          </p>
          <p>
            The build hasn&apos;t stalled during those quiet months. That&apos;s
            where the whole thing is being won.
          </p>
          <p>
            If you&apos;re starting to think about a custom home or a whole-home
            transformation and you&apos;re not sure whether your ideas will need
            a variance, that&apos;s exactly the conversation to have early.
            We&apos;d welcome it.
          </p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Planning Ahead</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Know the approvals before you fall in love with a design
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              If you&apos;re not sure whether your ideas will need a variance,
              that&apos;s exactly the conversation to have early. We&apos;d
              welcome it.
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

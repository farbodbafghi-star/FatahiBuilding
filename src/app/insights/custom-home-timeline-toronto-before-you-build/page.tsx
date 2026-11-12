import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";
import JsonLd from "@/components/JsonLd";
import { articleSchema, insightBreadcrumbs } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Building a Custom Home in Toronto: Timeline | Fatahi Building",
  description: "Building a custom home in Toronto starts months before construction. Design, engineering, approvals and permits take five to six months on average.",
  alternates: { canonical: "/insights/custom-home-timeline-toronto-before-you-build" },
};

export default function CustomHomeTimelineTorontoBeforeYouBuildArticle() {
  return (
    <>
      <JsonLd
        data={[
          articleSchema({
            headline: "For Six Months You Could Have Driven Past This Lot and Thought Nothing Was Happening",
            description: String(metadata.description),
            slug: "custom-home-timeline-toronto-before-you-build",
            datePublished: "2026-11-11",
          }),
          insightBreadcrumbs("For Six Months You Could Have Driven Past This Lot and Thought Nothing Was Happening", "custom-home-timeline-toronto-before-you-build"),
        ]}
      />
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
              For Six Months You Could Have Driven Past This Lot and Thought Nothing Was Happening
            </h1>
            <p className="text-white/40 text-sm font-light">October 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ARTICLE BODY */}
      <section className="py-10 md:py-16">
        <ArticleView
          summary={
            <>
              <p>For six months you could have driven past our Old Yonge lot in North York and thought nothing was happening. Then, in one week in October, the whole house came down. Tearing a house down is the fast part. This is what the months before it were for, and what they mean if you&apos;re planning to build a custom home in Toronto.</p>
              <p><strong>How it ran on Old Yonge:</strong></p>
              <ul>
                <li><strong>Spring:</strong> design begins. Where the house sits on the lot, how it works, what the clients need from it.</li>
                <li><strong>End of July:</strong> the Committee of Adjustment approves the variances, on the first application.</li>
                <li><strong>End of September:</strong> the building permits come through.</li>
                <li><strong>October:</strong> demolition, then excavation.</li>
              </ul>
              <p><strong>The general rule:</strong> from a first conversation to permits in hand is about five to six months of work on average. The Committee of Adjustment alone adds two to four months at minimum, and most homes need it now.</p>
              <p><strong>What that means for you:</strong> if you&apos;re thinking about starting your build in the spring, you need to start planning now. None of this work happens on site, so it&apos;s the part nobody sees, but it decides whether you&apos;re digging in the spring or still waiting on paperwork in the summer.</p>
            </>
          }
        >
          <p>For six months you could have driven past this lot and thought nothing was happening. Then, in one week in October, the whole house came down.</p>
          <p>The lot is on Old Yonge Street in North York, where we&apos;re building a new custom home with more than 8,000 square feet of living space. Demolition is the part people notice, and it&apos;s also the fast part. The better question is how we got to the point where a machine could show up at all.</p>
          <h2>What Those Six Months Were For</h2>
          <p>We started on this home back in the spring, and those first months were all on paper: where the house sits on the lot, how it works, what the clients actually need from it.</p>
          <p>The design needed some variances, so we went to the <Link href="/insights/committee-of-adjustment-toronto">Committee of Adjustment</Link> and made the case for it. It was approved on the first application, at the end of July.</p>
          <p>Then the permits came through at the end of September. From our first meeting to permits in hand was five to six months.</p>
          <p>And through all of it, from the street, the lot looked exactly the same as the day we started.</p>
          <h2>What Has to Happen Before You Can Break Ground in Toronto</h2>
          <p>Old Yonge isn&apos;t unusual. Before you can even think about breaking ground on a custom home in Toronto, there is a set of work that has to be finished first:</p>
          <ul>
            <li><strong>The design.</strong> The house is worked out for the specific lot it sits on.</li>
            <li><strong>The engineering.</strong> The structure is designed and coordinated with the architecture.</li>
            <li><strong>Arborist reports.</strong> Mature trees on or near the lot bring <Link href="/insights/tree-protection-zones-toronto">protection zones</Link> that have to be settled before a shovel moves.</li>
            <li><strong>The Committee of Adjustment.</strong> For most homes nowadays you need to go, and on its own it adds two to four months at minimum to the timeline.</li>
            <li><strong>The building permit.</strong> Only once the approvals above are in place.</li>
          </ul>
          <p>So from our first conversation to getting permits in hand, there&apos;s about five to six months of work on average before we can actually put a shovel in the ground. <Link href="/insights/what-to-expect-during-preconstruction">What to Expect During Preconstruction</Link> goes through this phase step by step.</p>
          <h2>Why the Quiet Months Matter</h2>
          <p>None of that work happens on site, so it&apos;s the part nobody sees. It&apos;s also the part that decides how the build goes.</p>
          <p>When the machines showed up at Old Yonge, they were building a house that had already been worked out on paper. Before anyone got near the site, the structural and architectural drawings had been checked against each other, down to where every window and every opening goes. We wrote about what that looks like once the concrete starts in <Link href="/insights/custom-home-foundation-north-york">The Concrete on This House Doesn&apos;t Stop at the Ground</Link>.</p>
          <h2>If You Want to Build in the Spring</h2>
          <p>This is where the timeline becomes practical.</p>
          <p>If you&apos;re thinking about starting your build in the spring, you need to start planning now. Count five to six months back from the day you&apos;d like to break ground, and that&apos;s when the first conversation needs to happen. It&apos;s what decides whether you&apos;re digging in the spring or still waiting on paperwork in the summer.</p>
          <h2>The First Step Is a Small One</h2>
          <p>Starting early doesn&apos;t mean committing early. The first step is simple: reach out, come see our past work in person or visit an active site, and sit down with us to talk through your goals, your needs and how you live. From there we can tell you which path fits, whether that&apos;s a renovation, an addition or a new custom home, and you leave with a direction, a timeline and a rough estimate. Committing and locking everything in comes later.</p>
          <p>So if you&apos;re planning to build a custom home in Toronto next year, the early conversations about your home need to be happening now. Send us a message and let&apos;s start yours.</p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Timeline</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Planning to build in the spring?
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              The early conversations about your home need to be happening now. Send us a message and let&apos;s start yours.
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

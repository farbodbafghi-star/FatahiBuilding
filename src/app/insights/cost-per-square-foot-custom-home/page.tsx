import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "Cost Per Square Foot to Build in Ontario | Fatahi Building",
  description: "The cost per square foot to build a custom home in Ontario depends on the lot, the layout, the materials and the finishes. Here is what moves the number and how to get a real one.",
  alternates: { canonical: "/insights/cost-per-square-foot-custom-home" },
};

export default function CostPerSquareFootCustomHomeArticle() {
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
              Two Houses Can Be the Same Size and Cost Completely Different Amounts to Build
            </h1>
            <p className="text-white/40 text-sm font-light">November 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ARTICLE BODY */}
      <section className="py-10 md:py-16">
        <ArticleView
          summary={
            <>
              <p>The first thing almost everyone asks us is how much it costs per square foot to build a house. It&apos;s one of the hardest questions to answer in one sentence, and the reason is simple: two houses can be identical in size, the same square footage on paper, and cost completely different amounts to build.</p>
              <p><strong>What a cost per square foot figure leaves out:</strong></p>
              <ul>
                <li><strong>The lot.</strong> The slope, the access, and how much digging the house needs.</li>
                <li><strong>What sits below grade.</strong> Basement height, a walkout, heated floors in the slab.</li>
                <li><strong>The layout.</strong> How the structure has to work to give you the rooms you want.</li>
                <li><strong>Materials and finishes.</strong> The part everyone expects, and still only part of it.</li>
              </ul>
              <p><strong>How we answer it instead:</strong> we show you what our previous projects have averaged for those specific homes, and then, based on what you&apos;re planning, how much more or how much less yours would cost to build.</p>
              <p>You won&apos;t find a per square foot number in this article, and that&apos;s deliberate. A figure that doesn&apos;t know your lot or your choices would be wrong for your home, in one direction or the other.</p>
            </>
          }
        >
          <p>The first thing almost everyone asks us is how much it costs per square foot to build a house, and honestly it&apos;s one of the hardest questions to answer in one sentence.</p>
          <p>It&apos;s a fair question. If you&apos;re working out whether a custom home in Toronto or anywhere in Ontario is within reach, a cost per square foot feels like the quickest way to find out. The trouble is that the figure is the result of every decision in a house, and it gets used as if it were the starting point.</p>
          <h2>Why Cost Per Square Foot Is Hard to Pin Down</h2>
          <p>You can have two houses that are identical in size, the same square footage on paper, and they&apos;re completely different costs to build. It depends on the materials you use, how you want the layout to be, and the finishes. All of it matters.</p>
          <p>And before any of those choices, it depends on the property.</p>
          <h2>The Lot Is Priced Before the House Is</h2>
          <p>A square footage figure says nothing about the ground the house sits on.</p>
          <p>On our current build on Old Yonge Street in North York, the old house sat high on the lot, which gave the driveway a steep slope, and the back of the lot climbs up toward the property line. Both of those changed how much digging the house needed, and neither one appears in a floor area. It&apos;s also why <Link href="/insights/fixed-price-vs-cost-plus-custom-home">we never put a price on a property we haven&apos;t stood on</Link>.</p>
          <p>On established streets there is usually more. Mature trees bring <Link href="/insights/tree-protection-zones-toronto">protection zones</Link> that shape how the site can be used, and a design that fits its lot often goes through the <Link href="/insights/committee-of-adjustment-toronto">Committee of Adjustment</Link> first.</p>
          <h2>What Sits Below Grade</h2>
          <p>The same home has a basement with 11-foot ceilings, radiant heated floors in the slab, and a walkout at the back. The foundation walls run full height, with the concrete carried all the way up to where the main floor starts.</p>
          <p>A basement like that and a standard one can sit under the same main floor. The square footage upstairs is identical. What was built underneath it is not, and all of it is in the cost of the house.</p>
          <h2>The Layout</h2>
          <p>Layout is the decision that&apos;s hardest to change later, and it shapes the structure of the house. An elevator is a good example. It has to be planned from the first drawings: the slab under it gets its own footings, and the structure is reinforced around the shaft all the way up the house. Two homes of the same size, one built around an elevator and one without, are different buildings.</p>
          <p>We&apos;ve written about <Link href="/insights/why-layout-matters-more-than-finishes">why layout matters more than finishes</Link>, and cost is one more reason it comes first.</p>
          <h2>Materials and Finishes</h2>
          <p>This is the part everyone expects to matter, and it does.</p>
          <p>At our Betty Ann home in North York, the interior doors are over nine feet tall and solid core, so you feel the weight when you open one. The walnut millwork was custom stained so the kitchen cabinetry and the floating fireplace in the family room match. Those are choices, and a home of the same size could be built with different ones.</p>
          <p>Some of the most important choices are the ones you never see once the drywall goes up. That&apos;s <Link href="/insights/the-90-percent-you-never-see">the 90% behind the walls</Link>, and it&apos;s covered in <Link href="/insights/choosing-materials-that-last">how we think about materials</Link>.</p>
          <h2>How to Get a Number That Means Something</h2>
          <p>What we can do is give you an example based on our previous projects, and what the average cost has been for those specific homes. Then, based on what you&apos;re thinking of doing, we can tell you how much more or how much less it would cost to build yours.</p>
          <p>That takes a conversation, and the first step is a small one. Reach out, come see our past work in person or visit an active site, and sit down with us to talk through your goals, your needs and how you live. You leave with a direction, a timeline and a rough estimate. Committing to anything comes later.</p>
          <p>So if you&apos;re planning a build, send us a message. We&apos;ll walk you through what our past projects have averaged, what affects the cost, and a rough idea of what your ideal home would cost to build today.</p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Cost</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Find out what your home would cost to build
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              We&apos;ll walk you through what our past projects have averaged, what affects the cost, and a rough idea of what your home would cost to build today.
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

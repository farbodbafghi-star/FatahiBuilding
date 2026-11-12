import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "Fixed Price vs Cost Plus for a Custom Home | Fatahi Building",
  description: "Custom home builders in Toronto price a build one of two ways: cost plus or fixed price. Here is how each contract works, what makes a fixed price hold, and what to ask before you sign.",
  alternates: { canonical: "/insights/fixed-price-vs-cost-plus-custom-home" },
};

export default function FixedPriceVsCostPlusCustomHomeArticle() {
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
              The Two Ways to Price a Custom Home, and the One That Tells You What You&apos;ll Actually Pay
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
              <p>Ask a custom home builder what your home will cost, and the answer depends on something most people never think to ask about: how the contract is structured. There are two common ways to price a custom home, cost plus and fixed price, and they behave very differently once construction starts.</p>
              <p><strong>Cost plus:</strong> you pay for the work as it happens, plus a percentage on top. The longer the job runs and the more the scope grows, the bigger the invoice gets. Nobody has to be acting in bad faith for that to happen. It&apos;s what the structure does.</p>
              <p><strong>Fixed price:</strong> the scope is settled first, an accurate budget and a real schedule are built around it, and then the number stops moving.</p>
              <p><strong>What makes a fixed price hold:</strong></p>
              <ul>
                <li><strong>Time on the property.</strong> We never put a number on a lot we haven&apos;t stood on.</li>
                <li><strong>Finished drawings.</strong> A fixed price is only a price if the drawings are finished.</li>
                <li><strong>A detailed scope.</strong> The price holds for the scope you agreed on. Change the scope and the number changes with it.</li>
              </ul>
              <p>What you&apos;re buying with a fixed price isn&apos;t a cheaper house. It&apos;s knowing up front what the home costs and when you&apos;re moving into it.</p>
            </>
          }
        >
          <p>The first question most people ask a custom home builder is what the house will cost. It&apos;s the right question, and it usually gets asked one step too early. Before the number means anything, you need to know what kind of number it is.</p>
          <p>There are two common ways to price a custom home in Toronto, and only one of them tells you what you&apos;re actually going to pay.</p>
          <h2>How a Cost Plus Contract Works</h2>
          <p>Under cost plus, you pay for the work as it happens, plus a percentage on top for the builder. Materials, trades and labour are billed as they come in, and the builder&apos;s fee is calculated on the total.</p>
          <p>It has real appeal at the start, because construction can begin before every decision has been made.</p>
          <p>The difficulty is in how the structure behaves over the length of a build. The longer the job runs and the more the scope grows, the bigger the invoice gets, and the fee grows along with it. Nobody has to be acting in bad faith for that to be a problem. It&apos;s just what that structure does. And it means the final cost of the home is something you find out at the end.</p>
          <h2>How a Fixed Price Contract Works</h2>
          <p>We work off a fixed price, and the order is reversed. We settle the scope first, we build an accurate budget and a real schedule around it, and then the number stops moving.</p>
          <p>That changes where the effort goes. Under a fixed price, the builder has no incentive to let the job run long or let the scope grow. So the work of the first months is getting the scope, the budget and the schedule right, because those are what we&apos;ll be held to. Working this way is what lets us hold the craftsmanship and the quality while bringing the timeline and the cost down.</p>
          <p>So what you&apos;re actually buying with a fixed price isn&apos;t a cheaper house. It&apos;s knowing up front what the home costs and when you&apos;re moving into it.</p>
          <h2>What Makes a Fixed Price Hold</h2>
          <p>A fixed price is only as good as the work behind it. Three things have to be true.</p>
          <p><strong>Someone has stood on the property.</strong> You can get almost anything instantly online now, but an honest price on a custom home is one thing you&apos;ll never get from a photo. On our current build on Old Yonge Street in North York, the old house sat high on the lot, which gave the driveway a steep slope, and the back of the lot climbs up toward the property line. Neither shows in a photograph, and both changed how much digging the house needed. So when we give someone a price, it&apos;s built on time spent on the site and time spent on the drawings.</p>
          <p><strong>The drawings are finished.</strong> A fixed price is only a price if the drawings are finished. A number given against an unfinished set is an estimate, whatever the contract calls it.</p>
          <p><strong>The scope is written down in detail.</strong> The price holds for the scope you agreed on, and that condition is worth stating plainly. If you change the scope partway through, the number changes with it, and our contract also accounts for delays that come from the client&apos;s side. A detailed scope is what lets both of us see exactly what the price covers.</p>
          <h2>Three Questions to Ask a Custom Home Builder Before You Sign</h2>
          <ul>
            <li><strong>Is this a fixed price or cost plus, and what would change it?</strong> Ask to see the scope. It should be detailed enough that you can tell what is included without having to ask.</li>
            <li><strong>Can I see a real schedule, with dates?</strong> A schedule you can hold someone to is part of the price.</li>
            <li><strong>Can I come see an active job site?</strong> How a site is run tells you a lot about how your build would go.</li>
          </ul>
          <h2>Where the Square Footage Question Fits</h2>
          <p>Most people come to this topic through a different question: what does it cost per square foot? We&apos;ve written about <Link href="/insights/cost-per-square-foot-custom-home">why two houses of the same size can cost completely different amounts to build</Link>, and it&apos;s the natural next read. For what happens between a first conversation and a signed scope, see <Link href="/insights/what-to-expect-during-preconstruction">What to Expect During Preconstruction</Link>.</p>
          <p>If you&apos;re thinking about building a custom home or transforming your existing space, send us a message. We&apos;ll come see the property and show you what a fixed scope actually looks like.</p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Pricing</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              See what a fixed scope actually looks like
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              If you&apos;re planning a custom home or a whole-home renovation in Toronto, we&apos;ll walk you through how the scope, the budget and the schedule get built.
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

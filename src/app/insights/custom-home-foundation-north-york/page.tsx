import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ArticleView from "@/components/ArticleView";

export const metadata: Metadata = {
  title: "Home Construction in North York: Foundations | Fatahi Building",
  description: "Inside the foundation of an 8,000 sq ft custom home under construction in North York: footings, soil checks, full-height concrete walls, an 11-foot basement and an elevator planned from the first drawing.",
  alternates: { canonical: "/insights/custom-home-foundation-north-york" },
};

export default function CustomHomeFoundationNorthYorkArticle() {
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
              The Concrete on This House Doesn&apos;t Stop at the Ground
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
              <p>On our custom home on Old Yonge Street in North York, the concrete doesn&apos;t stop at the ground. It goes all the way up to the main floor. The footings are poured, the foundation wall forms are going up, and this is the stage of a build that decides how a house holds up 50 to 60 years from now.</p>
              <p><strong>What went into this foundation:</strong></p>
              <ul>
                <li><strong>The drawings, before the site.</strong> Structural and architectural drawings checked against each other: every window, every opening, where the elevator sits.</li>
                <li><strong>The soil, on site.</strong> Conditions are checked against the design. If the soil is softer than expected, the footings are revised.</li>
                <li><strong>Full-height foundation walls.</strong> Concrete all the way up to where the main floor starts, which keeps the lumber further from the ground and the moisture.</li>
                <li><strong>A basement built to be lived in.</strong> 11-foot ceilings, radiant heated floors in the slab, and a walkout at the back.</li>
                <li><strong>An elevator planned from the first drawing.</strong> Its slab gets its own footings and sits a foot below the rest of the basement.</li>
              </ul>
              <p>It isn&apos;t the flashiest part of a custom home. It is quite literally the foundation of one.</p>
            </>
          }
        >
          <p>The concrete on this house doesn&apos;t stop at the ground. It goes all the way up to the main floor.</p>
          <p>The house is our current build on Old Yonge Street in North York: a new custom home with more than 8,000 square feet of living space. Excavation started in mid-October, the footings were poured at the end of the month, and the forms for the foundation walls are going up now. Walk the outline of those forms and you can already start to feel the size of it.</p>
          <p>This is the stage of home construction that gets the least attention online, so here is what actually goes into it.</p>
          <h2>The Real Work Started Before the Site</h2>
          <p>Before we get anywhere near the site, we go over all of the drawings and make sure everything lines up between the structural and the architectural. That means double-checking where every window goes, every opening, where the elevator sits, all of it.</p>
          <p>The reason is simple. Once the concrete is poured, the positions are set. We want everything to be right before it goes in.</p>
          <h2>Checking the Soil</h2>
          <p>Once we&apos;re on site, we check the soil conditions to make sure they line up with the design.</p>
          <p>If they don&apos;t, the design changes to suit the ground. If we hit really soft soil, for example, we can revise the footings so the house is still as stable as it needs to be.</p>
          <h2>The Footings</h2>
          <p>The footings are the concrete base that the foundation walls sit on. Finishes get all the attention, but the footings are the base for the entire home, and any defect here can compromise the integrity of the whole house.</p>
          <h2>Full-Height Foundation Walls</h2>
          <p>On this house the foundation walls are going full height. The concrete runs all the way up above grade to where the main floor starts.</p>
          <p>We do that for two reasons. It gets our lumber further away from the ground and the moisture, which reduces the risk of rot. And it gives us a solid foundation to start building this house up from.</p>
          <p>It isn&apos;t one of the flashiest or prettiest upgrades you&apos;ll see, but it changes how this house is going to hold up 50 to 60 years from now. It&apos;s the kind of work we wrote about in <Link href="/insights/the-90-percent-you-never-see">The 90% You&apos;ll Never See</Link>.</p>
          <h2>A Basement With 11-Foot Ceilings</h2>
          <p>Those walls enclose more than a regular basement. This one has 11-foot ceilings, radiant heated floors in the slab, and a walkout at the back.</p>
          <p>That&apos;s the theme of the whole home: a modern house with grand open spaces and tall ceilings that still feels warm, because of the materials and the millwork that accent it.</p>
          <h2>A Home Elevator Starts in the Basement</h2>
          <p>Elevators are one of the biggest trends in custom homes right now. If you want one in your house, you have to start planning for it before construction even starts, and the work begins at the foundation.</p>
          <p>The slab underneath the elevator gets its own footings, and it sits a foot lower than the rest of the basement. The elevator drops down into that gap, so when you walk in and out there&apos;s no step and nothing is off height.</p>
          <p>Then, going all the way up the house, the structure needs extra reinforcement around the entire elevator shaft, and nothing can protrude into it.</p>
          <p>So it&apos;s not something you can add later. You have to plan for it right from the start, when you&apos;re doing your drawings, because the whole house has to be built around it.</p>
          <h2>What Comes Next at Old Yonge</h2>
          <p>Once the walls are up, every step from here gets us closer to having this house framed and closed in before the first snowfall.</p>
          <p>If you&apos;d like to know how this lot got to this point, <Link href="/insights/custom-home-timeline-toronto-before-you-build">the six months before demolition</Link> are their own story, and <Link href="/insights/building-custom-homes-north-york">building in North York</Link> covers why we keep working on these streets.</p>
          <p>If you&apos;re planning a custom home in North York or anywhere in Toronto, with or without an elevator, send us a message. We&apos;ll show you what it takes to plan it right from the very first drawing.</p>
        </ArticleView>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Old Yonge</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Planning a custom home in North York?
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Send us a message and we&apos;ll show you what it takes to plan it right from the very first drawing.
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

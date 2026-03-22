import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Choosing Materials That Last | Fatahi Building",
  description:
    "Not every premium material is the right choice for every home. A builder's guide to selecting flooring, countertops, and fixtures that perform as well as they look.",
};

export default function MaterialsArticle() {
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
            <p className="section-label mb-6">Materials</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-8">
              Choosing Materials That Last
            </h1>
            <p className="text-white/40 text-sm font-light">January 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ARTICLE BODY */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="prose-custom">
              <p>
                Walk into any tile showroom in Toronto and you&apos;ll see
                thousands of options. Beautiful options. The problem isn&apos;t
                finding something you love &mdash; it&apos;s knowing whether
                what you love will still look good in ten years, or whether
                you&apos;ll be replacing it in five.
              </p>
              <p>
                After three decades of building custom homes, we&apos;ve
                installed just about every material on the market. We&apos;ve
                seen what holds up, what doesn&apos;t, and what looks stunning on
                a sample board but fails in a real kitchen with real life
                happening on it. Here&apos;s what we&apos;ve learned.
              </p>

              <h2>The Rule We Follow: Beautiful Is Not Enough</h2>
              <p>A material needs to do three things:</p>
              <ol>
                <li>
                  <strong>Look the way you want it to.</strong> This is the easy
                  part. Everything looks good in a showroom.
                </li>
                <li>
                  <strong>Perform in the space it&apos;s installed.</strong> A
                  bathroom floor has different demands than a living room floor. A
                  kitchen countertop takes more abuse than a vanity top. Climate
                  matters too &mdash; Toronto&apos;s humidity swings between 20%
                  in winter and 80% in summer, and that affects wood, stone, and
                  tile differently.
                </li>
                <li>
                  <strong>Age well.</strong> Some materials develop character over
                  time &mdash; natural stone patinas, hardwood mellows, brass
                  tarnishes into warmth. Others just deteriorate. Knowing the
                  difference is critical.
                </li>
              </ol>
              <p>
                When a client falls in love with a material, we don&apos;t talk
                them out of it. But we do make sure they understand how it will
                behave in the specific room, with their specific lifestyle.
                That&apos;s the conversation most showrooms don&apos;t have with
                you.
              </p>

              <h2>Flooring: Where Most of the Money Goes</h2>
              <p>
                Flooring is the single most impactful material decision in a
                custom home. It covers every room, it&apos;s what you touch every
                day, and it sets the tone for everything else.
              </p>

              <h3>Engineered Hardwood &mdash; Our Go-To</h3>
              <p>
                For most custom homes in Toronto, engineered hardwood is the
                right choice. Not because it&apos;s cheaper than solid hardwood
                &mdash; in the grades we use, it&apos;s comparable &mdash; but
                because it handles Toronto&apos;s climate better.
              </p>
              <p>
                Solid hardwood expands and contracts with humidity changes. In a
                home with radiant floor heating (which most of our custom builds
                include), solid hardwood can gap, cup, or crack over a few
                seasons. Engineered hardwood has a real wood surface layer bonded
                to a stable plywood core. It moves less, performs better over
                radiant heat, and is available in wide planks that solid hardwood
                can&apos;t match without significant risk.
              </p>
              <p>
                <strong>What to look for:</strong> A wear layer of at least 4mm
                (this allows for future refinishing), European white oak for
                durability and grain consistency, and a matte or natural finish
                rather than high gloss (which shows every scratch and footprint).
              </p>
              <p>
                <strong>What to avoid:</strong> Engineered products with a veneer
                under 2mm &mdash; these can&apos;t be refinished and will show
                wear in high-traffic areas within a few years. Also avoid acacia,
                hickory, and other highly figured species if you want a clean,
                modern look &mdash; the grain variation fights the aesthetic.
              </p>

              <h3>Large-Format Porcelain Tile</h3>
              <p>
                Porcelain tile has come a long way. The best Italian and Spanish
                porcelains now convincingly replicate marble, concrete, and wood
                &mdash; without the maintenance concerns of natural stone.
              </p>
              <p>
                For bathroom floors, we typically recommend a textured porcelain
                with a slight grip. A polished marble floor in a bathroom is
                beautiful until someone steps out of the shower. For mudrooms and
                laundry rooms, durability is everything &mdash; porcelain handles
                water, dirt, salt, and dog claws without blinking.
              </p>
              <p>
                <strong>What to look for:</strong> Rectified edges (for tight
                grout lines), a PEI rating of 4 or 5 for floors, and
                body-coloured porcelain (so chips don&apos;t show a different
                colour underneath).
              </p>

              <h3>Natural Stone Floors &mdash; Be Selective</h3>
              <p>
                We love natural stone, but it needs to be placed thoughtfully.
                Marble in an entryway will etch and scratch. Limestone in a
                bathroom will stain if not sealed regularly. These aren&apos;t
                flaws &mdash; they&apos;re the nature of the material. But you
                need to decide if you&apos;re comfortable with patina or if you
                want your floors to look the same in year ten as year one.
              </p>
              <p>
                Where we do use natural stone on floors: formal living rooms with
                low traffic, powder rooms, and feature areas like a fireplace
                hearth.
              </p>

              <h2>Countertops: The Most Debated Surface in the Home</h2>

              <h3>Quartzite &mdash; The Best of Both Worlds</h3>
              <p>
                Natural quartzite (not to be confused with engineered quartz) has
                become our most recommended countertop material for kitchens.
                It&apos;s a natural stone that&apos;s harder than granite, more
                heat-resistant than engineered quartz, and available in stunning
                veined patterns that rival marble.
              </p>
              <p>
                Taj Mahal quartzite, for example, gives you the warm, soft
                veining of Calacatta marble with the hardness of granite. It
                needs sealing once a year, but it won&apos;t etch from lemon
                juice or wine the way marble does.
              </p>
              <p>
                <strong>The caveat:</strong> Quality varies enormously. Quartzite
                must be purchased slab-by-slab, inspected in person, and tested
                for hardness. Some slabs sold as &ldquo;quartzite&rdquo; are
                actually dolomite or soft marble mislabelled. We always test with
                a knife edge &mdash; real quartzite won&apos;t scratch.
              </p>

              <h3>Engineered Quartz &mdash; Practical and Consistent</h3>
              <p>
                For bathrooms, laundry rooms, and secondary kitchens, engineered
                quartz (Caesarstone, Cambria, Silestone) is a reliable choice.
                It&apos;s non-porous, doesn&apos;t need sealing, and is available
                in consistent colours.
              </p>
              <p>
                The limitation: it can&apos;t handle heat. A hot pan directly
                from the oven will scorch or crack an engineered quartz
                countertop. In a primary kitchen where someone is actively
                cooking, this matters.
              </p>

              <h3>Marble &mdash; Know What You&apos;re Signing Up For</h3>
              <p>
                Marble is the most beautiful natural stone. It&apos;s also the
                most high-maintenance. It etches from acid (lemon, tomato, wine,
                most cleaning products), it stains from oil, and it scratches
                more easily than quartzite or granite.
              </p>
              <p>
                We don&apos;t discourage marble &mdash; we&apos;ve installed it
                in many kitchens for clients who love it and accept the patina.
                But we always make sure the conversation happens before
                installation, not after the first dinner party. If you want a
                pristine countertop five years from now, marble isn&apos;t it. If
                you want a surface that tells the story of your kitchen,
                it&apos;s unmatched.
              </p>

              <h2>Fixtures and Hardware: The Details That Date a Home</h2>
              <p>
                Kitchens and bathrooms get renovated every 15&ndash;20 years. The
                materials that age the fastest aren&apos;t the big surfaces
                &mdash; they&apos;re the small things: faucets, cabinet pulls,
                light fixtures, door handles.
              </p>

              <h3>Finishes That Last</h3>
              <p>
                <strong>Brushed brass and unlacquered brass</strong> age
                beautifully. The patina develops over years and can be polished
                back if desired. Avoid polished brass with a lacquer coating
                &mdash; the lacquer eventually peels, and it looks worse than
                natural tarnish.
              </p>
              <p>
                <strong>Matte black</strong> is having a long moment and we
                expect it to remain current. It&apos;s also durable &mdash; most
                matte black fixtures use a PVD finish that resists scratching and
                corrosion.
              </p>
              <p>
                <strong>Polished chrome</strong> is the classic that never dates.
                If you&apos;re unsure, chrome is always safe.
              </p>

              <h3>Finishes to Be Cautious With</h3>
              <p>
                <strong>Brushed gold / champagne gold</strong> &mdash; currently
                very popular, which means it may feel dated in 10 years. We&apos;re
                not against it, but use it as an accent rather than a whole-home
                commitment.
              </p>
              <p>
                <strong>Oil-rubbed bronze</strong> &mdash; its moment has largely
                passed in contemporary design, though it still works in
                traditional or transitional homes.
              </p>
              <p>
                <strong>Rose gold / copper</strong> &mdash; trend-driven.
                We&apos;d limit this to easily replaceable items like cabinet
                pulls rather than plumbing fixtures.
              </p>

              <h2>The Real Test</h2>
              <p>
                This is the question Majid asks himself on every project: would I
                put this in my own home? After 30 years, he&apos;s seen materials
                come and go, trends rise and fade, and showroom favourites fail
                in real homes. The materials we recommend are the ones we&apos;d
                choose for our own families.
              </p>

              <h2>Before Your Next Material Selection</h2>
              <ul>
                <li>
                  How does this material handle Toronto&apos;s humidity swings?
                </li>
                <li>
                  Can it be repaired or refinished, or does it need full
                  replacement?
                </li>
                <li>How will it look in 10 years with daily use?</li>
                <li>
                  What maintenance does it actually require &mdash; and will I do
                  it?
                </li>
                <li>
                  Have I seen this material in a finished home, not just a
                  showroom?
                </li>
              </ul>
              <p>The answers will save you from expensive regret.</p>
              <p>
                If you&apos;re planning a custom home or renovation and want
                guidance on material selection, we&apos;re happy to walk you
                through what we&apos;ve learned.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Need Guidance?</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              We&apos;ll help you choose
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Material selection is one of the most important parts of your
              build. We&apos;re here to guide you through every decision.
            </p>
            <Link
              href="/contact"
              className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

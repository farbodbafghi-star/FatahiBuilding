import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import { areas, serviceRegions } from "@/data/areas";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve in Toronto & the GTA | Fatahi Building",
  description:
    "Fatahi Building designs and builds custom homes, additions and renovations across Toronto and the GTA, from Rosedale and Forest Hill to North York and Vaughan.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas We Serve", path: "/areas" },
        ])}
      />

      {/* HERO */}
      <section className="relative pt-44 pb-16 md:pt-52 md:pb-20">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-2xl">
            <Breadcrumbs className="mb-8" items={[{ name: "Home", path: "/" }, { name: "Areas We Serve" }]} />
            <div className="divider mb-6" />
            <h1 className="section-label mb-6">Areas We Serve in Toronto &amp; the GTA</h1>
            <p className="text-4xl md:text-5xl lg:text-6xl font-light font-heading text-white leading-tight tracking-wide">
              Toronto and the
              <br />
              Greater Toronto Area
            </p>
            <p className="mt-8 text-white/60 font-light leading-relaxed">
              We design and build custom homes, additions and whole-home
              transformations across Toronto and the GTA, from Rosedale,
              Forest Hill and Lawrence Park to North York, Vaughan and beyond.
              If your neighbourhood is below, we serve it.
            </p>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* SERVICE LIST */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
            {serviceRegions.map((group) => (
              <ScrollReveal key={group.region}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 py-10">
                  <h2 className="text-2xl font-light font-heading text-white tracking-wide">{group.region}</h2>
                  <ul className="lg:col-span-3 flex flex-wrap gap-2">
                    {group.places.map((place) =>
                      place.slug ? (
                        <li key={place.name}>
                          <Link
                            href={`/areas/${place.slug}`}
                            className="inline-block text-[12px] font-light tracking-[0.1em] text-beige border border-beige/40 px-4 py-2 hover:bg-beige hover:text-navy transition-all duration-300"
                          >
                            {place.name}
                          </Link>
                        </li>
                      ) : (
                        <li key={place.name} className="text-[12px] font-light tracking-[0.1em] text-white/60 border border-white/10 px-4 py-2">
                          {place.name}
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-white/40 font-light text-sm leading-relaxed mt-8 max-w-2xl">
            Don&apos;t see your neighbourhood? We serve the whole Greater
            Toronto Area. Areas outlined in gold have their own page.
          </p>
        </div>
      </section>

      <div className="section-sep" />

      {/* AREA GUIDES */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="mb-12">
              <p className="section-label mb-8">Area Guides</p>
              <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide">Building in your area</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {areas.map((area) => (
                <Link key={area.slug} href={`/areas/${area.slug}`} className="group block border border-white/[0.06] p-8 hover:border-beige/30 transition-colors duration-500">
                  <h3 className="text-2xl font-light font-heading text-white tracking-wide group-hover:text-beige transition-colors duration-300">{area.name}</h3>
                  <p className="text-white/60 font-light text-sm leading-relaxed mt-4">{area.description}</p>
                </Link>
              ))}
              <Link href="/insights/building-custom-homes-north-york" className="group block border border-white/[0.06] p-8 hover:border-beige/30 transition-colors duration-500">
                <h3 className="text-2xl font-light font-heading text-white tracking-wide group-hover:text-beige transition-colors duration-300">North York</h3>
                <p className="text-white/60 font-light text-sm leading-relaxed mt-4">
                  What it&apos;s actually like to build a custom home in North York: wide lots and mature trees, and what comes with them.
                </p>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">Your Home</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Tell us where you&apos;re building
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Leave your details and we&apos;ll call you.
            </p>
            <Link href="/contact" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">
              Request a Call
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { areas, getArea } from "@/data/areas";
import { BUSINESS_ID, SITE, breadcrumbSchema } from "@/lib/schema";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.description,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: Params) {
  const { slug } = await params;
  const area = getArea(slug);
  if (!area) notFound();

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Custom homes, additions and renovations in ${area.name}`,
            serviceType: "Custom home builder",
            description: area.description,
            url: `${SITE}/areas/${area.slug}`,
            provider: { "@id": BUSINESS_ID },
            areaServed: { "@type": "Place", name: area.name },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Areas We Serve", path: "/areas" },
            { name: area.name, path: `/areas/${area.slug}` },
          ]),
        ]}
      />

      {/* HERO */}
      <section className="relative pt-44 pb-16 md:pt-52 md:pb-20">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <Breadcrumbs
            className="mb-8"
            items={[
              { name: "Home", path: "/" },
              { name: "Areas We Serve", path: "/areas" },
              { name: area.name },
            ]}
          />
          <div className="divider mb-6" />
          <h1 className="section-label mb-6">{area.h1}</h1>
          <p className="text-4xl md:text-5xl font-light font-heading text-white leading-tight tracking-wide mb-10">
            {area.headline}
          </p>
          <div className="prose-custom">{area.intro}</div>
        </div>
      </section>

      <div className="section-sep" />

      {/* BODY */}
      <section className="py-10 md:py-16">
        <div className="max-w-3xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="prose-custom">
              {area.sections.map((section) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.body}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      <Faq heading={`Questions about building in ${area.name}`} items={area.faqs} />

      <div className="section-sep" />

      {/* CTA */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <ScrollReveal>
            <p className="section-label mb-8">{area.name}</p>
            <h2 className="text-3xl md:text-4xl font-light font-heading text-white tracking-wide mb-6">
              Find out what your lot will allow
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto mb-10">
              Leave your details and we&apos;ll call you. The first conversation happens over the phone.
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

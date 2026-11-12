import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export interface FaqItem {
  q: string;
  a: string;
  href?: string;
  linkLabel?: string;
}

// Renders a question-and-answer block and the matching FAQPage schema,
// so search engines and AI assistants can read each answer on its own.
export default function Faq({
  heading,
  items,
}: {
  heading: string;
  items: FaqItem[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-10 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-8 md:px-16">
        <ScrollReveal>
          <p className="section-label mb-8">Questions</p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mb-6">
            {heading}
          </h2>
          <div className="prose-custom">
            {items.map(({ q, a, href, linkLabel }) => (
              <div key={q}>
                <h3>{q}</h3>
                <p>
                  {a}
                  {href && linkLabel ? (
                    <>
                      {" "}
                      <Link href={href}>{linkLabel}</Link>
                    </>
                  ) : null}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const projects = [
  {
    slug: "131-poyntz-ave",
    title: "Poyntz Avenue",
    location: "North York, Toronto",
    type: "Custom Home",
    image: "/images/projects/poyntz/twilight-1.jpg",
  },
  {
    slug: "23-terrace",
    title: "Terrace",
    location: "Toronto",
    type: "Custom Home",
    image: "/images/projects/terrace/dining.jpg",
  },
];

const testimonials = [
  {
    quote:
      "The work was completed right on time, and Majid along with his entire team handled the project with professionalism, care, and great attention to detail.",
    author: "Ali N.",
  },
  {
    quote:
      "He truly cares about the quality of his work. One thing I really appreciated is that he tries to make sure there is no wasted or unused space in the house.",
    author: "Azita N.",
  },
  {
    quote:
      "Reliable, pays close attention to detail, and focuses on high-quality work. Especially appreciated his effort to create practical, efficient designs.",
    author: "Green Building Canmo",
  },
];

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        className="relative h-screen min-h-[750px] flex items-end"
        style={{
          backgroundImage: "url('/images/projects/poyntz/twilight-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 60%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy-dark/50 to-navy-dark/20" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 pb-28 w-full">
          <div className="max-w-2xl">
            <div className="divider mb-10 animate-fade-in" />
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] tracking-wide animate-fade-up">
              We design it.
              <br />
              We build it.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/60 font-light leading-relaxed animate-fade-up animate-delay-200 max-w-lg">
              Custom homes in Toronto &amp; the GTA. Over 30 years of
              design-build craftsmanship.
            </p>
            <div className="mt-12 flex flex-wrap gap-5 animate-fade-up animate-delay-300">
              <Link
                href="/projects"
                className="border border-beige/30 text-beige px-10 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="text-white/50 px-10 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:text-beige transition-colors duration-300"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in animate-delay-700">
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-beige/30" />
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <ScrollReveal>
              <div>
                <p className="section-label mb-8">Design-Build</p>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-white leading-snug tracking-wide">
                  One team from first
                  <br />
                  sketch to final nail
                </h2>
                <div className="divider mt-10 mb-10" />
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-5">
                  Most builders take someone else&apos;s drawings and interpret
                  them. Details get lost. Decisions get made without the designer
                  in the room.
                </p>
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-10">
                  We work differently. The person who designs your home is the
                  same person on site every day making sure it&apos;s built
                  exactly as drawn. No gaps between design and construction.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] uppercase hover:text-beige-light transition-colors duration-300 group"
                >
                  Learn More
                  <svg
                    className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="img-zoom">
                  <Image
                    src="/images/projects/poyntz/interior-02.jpg"
                    alt="Interior craftsmanship — custom staircase with glass railings"
                    width={800}
                    height={600}
                    className="w-full h-[550px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -left-8 bg-navy-dark/60 backdrop-blur-md border border-beige/15 px-10 py-8 hidden md:block z-10">
                  <p className="font-heading text-beige text-4xl font-light">30+</p>
                  <p className="text-white/60 text-xs font-light tracking-[0.15em] uppercase mt-2">
                    Years of craft
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="section-label mb-8">Selected Work</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
                Featured Projects
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <ScrollReveal key={project.slug} delay={i * 200}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block"
                >
                  <div className="img-zoom relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-all duration-700" />
                  </div>
                  <div className="mt-8">
                    <h3 className="font-heading text-2xl font-light text-white tracking-wide">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm font-light mt-2 tracking-wide">
                      {project.type} &mdash; {project.location}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-20">
              <Link
                href="/projects"
                className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] uppercase hover:text-beige-light transition-colors duration-300 group"
              >
                View All Projects
                <svg
                  className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ─── SERVICES ─── */}
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">What We Do</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
                Built around how you live
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Custom Homes",
                description:
                  "Ground-up design and construction. Your home, designed around your life, built by the same team that drew it.",
                href: "/services/custom-homes",
              },
              {
                title: "Whole-Home Transformations",
                description:
                  "Complete reimagining of an existing structure. We redesign and rebuild — not just renovate.",
                href: "/services/transformations",
              },
              {
                title: "Additions & Extensions",
                description:
                  "Seamless expansion that feels like it was always part of the original design.",
                href: "/services/additions",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 150}>
                <Link
                  href={service.href}
                  className="group block bg-white/5 border border-white/10 p-12 md:p-14 hover:bg-white/[0.07] transition-all duration-700 h-full"
                >
                  <span className="text-beige/40 text-sm font-light">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-light text-white tracking-wide mt-6 mb-7 group-hover:text-beige transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="text-white/50 font-light text-sm leading-[1.85] mb-10">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center text-white/40 text-xs font-medium tracking-[0.15em] uppercase group-hover:text-beige transition-colors duration-500">
                    Learn More
                    <svg
                      className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* ─── PROCESS PREVIEW ─── */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">How We Work</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
                A process built on clarity
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-12">
            {[
              { step: "01", title: "Conversation", desc: "Understanding how you want to live" },
              { step: "02", title: "Design", desc: "Your home, drawn to your life" },
              { step: "03", title: "Preconstruction", desc: "Every detail locked before we build" },
              { step: "04", title: "Construction", desc: "On site every day. Reports every Friday" },
              { step: "05", title: "Handover", desc: "Inspected, documented, complete" },
              { step: "06", title: "After the Keys", desc: "We stand behind the work" },
            ].map((phase, i) => (
              <ScrollReveal key={phase.step} delay={i * 100}>
                <div className="text-center">
                  <span className="font-heading text-beige text-3xl font-light">
                    {phase.step}
                  </span>
                  <div className="w-8 h-px bg-beige/30 mx-auto my-5" />
                  <h3 className="text-xs font-medium text-white tracking-[0.15em] uppercase">
                    {phase.title}
                  </h3>
                  <p className="text-white/40 text-xs font-light mt-3 leading-relaxed">
                    {phase.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-20">
              <Link
                href="/process"
                className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] uppercase hover:text-beige-light transition-colors duration-300 group"
              >
                See Our Full Process
                <svg
                  className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <ScrollReveal>
            <div className="text-center mb-16">
              <p className="section-label mb-8">Client Experiences</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
                What our clients say
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="relative">
                  <span className="font-heading text-beige/15 text-7xl leading-none absolute -top-6 -left-3">
                    &ldquo;
                  </span>
                  <blockquote className="relative z-10 pt-8">
                    <p className="text-white/70 font-light text-[15px] leading-[1.85] italic">
                      {t.quote}
                    </p>
                    <footer className="mt-8">
                      <div className="w-8 h-px bg-beige mb-5" />
                      <p className="text-cream text-sm font-medium tracking-wide">
                        {t.author}
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="text-center mt-20">
              <Link
                href="/testimonials"
                className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] uppercase hover:text-beige-light transition-colors duration-300 group"
              >
                Read More Reviews
                <svg
                  className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="section-sep" />

      {/* ─── TEAM TEASER ─── */}
      <section className="relative py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="grid grid-cols-2 gap-5">
                  <div className="img-zoom aspect-[3/4]">
                    <Image
                      src="/images/projects/poyntz/interior-03.jpg"
                      alt="Interior detail"
                      width={400}
                      height={530}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="img-zoom aspect-[3/4] mt-16">
                    <Image
                      src="/images/projects/terrace/kitchen-1.jpg"
                      alt="Kitchen craftsmanship"
                      width={400}
                      height={530}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <p className="section-label mb-8">The Team</p>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-white leading-snug tracking-wide">
                  Two generations.
                  <br />
                  One standard.
                </h2>
                <div className="divider mt-10 mb-10" />
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-5">
                  <span className="text-cream font-medium">Majid Fatahi</span>{" "}
                  has been designing and building custom homes for over 30 years.
                  He draws it, then he builds it. On site every day.
                </p>
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-10">
                  <span className="text-cream font-medium">Farbod Fatahi</span>{" "}
                  manages every project from first conversation to final
                  walkthrough. Weekly reports, documented change orders, full
                  transparency.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] uppercase hover:text-beige-light transition-colors duration-300 group"
                >
                  Meet the Team
                  <svg
                    className="ml-3 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5"
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
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

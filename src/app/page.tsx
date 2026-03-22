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
          backgroundImage: "url('/images/projects/poyntz/hero-exterior-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 15%",
        }}
      >
        <div className="absolute inset-0 bg-navy-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/90 via-transparent to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-navy-dark/70 to-transparent" />

        <div className="relative z-10 px-[5%] pb-28 w-full">
          <div className="max-w-2xl">
            <div className="divider mb-10 animate-fade-in" />
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-white leading-[1.15] tracking-wide animate-fade-up">
              We design it.
              <br />
              We build it.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-white/60 font-light leading-relaxed animate-fade-up animate-delay-200 max-w-lg">
              Luxury residences in Toronto &amp; the GTA. Three decades
              of design-build mastery.
            </p>
            <div className="mt-12 flex flex-wrap gap-5 animate-fade-up animate-delay-300">
              <Link
                href="/projects"
                className="border border-beige/30 text-beige px-10 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500"
              >
                View Our Work
              </Link>
              <Link
                href="/contact"
                className="text-white/50 px-10 py-4 text-[13px] font-light tracking-[0.15em] hover:text-beige transition-colors duration-300"
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

      {/* ─── THE TEAM ─── */}
      <section className="relative py-10 md:py-16">
        <div className="px-[5%]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-28 items-center">
            <ScrollReveal>
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
                  has spent over three decades as both architect and master
                  builder, bringing a rare depth of vision to every residence
                  he creates.
                </p>
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-10">
                  <span className="text-cream font-medium">Farbod Fatahi</span>{" "}
                  ensures an impeccable client experience from the very first
                  meeting through to handover. Complete clarity at every
                  stage.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] hover:text-beige-light transition-colors duration-300 group"
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

            <ScrollReveal delay={200}>
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
                <div className="absolute -bottom-8 -left-8 bg-navy-dark/60 backdrop-blur-md border border-beige/15 px-10 py-8 hidden md:block z-10">
                  <p className="font-heading text-beige text-4xl font-light">30+</p>
                  <p className="text-white/60 text-xs font-light tracking-[0.15em] mt-2">
                    Years of mastery
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* ─── WHAT WE DO ─── */}
      <section className="py-10 md:py-16">
        <div className="px-[5%]">
          <ScrollReveal>
            <div className="text-center mb-20">
              <p className="section-label mb-8">What We Do</p>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-white tracking-wide">
                Built around how you live
              </h2>
            </div>
          </ScrollReveal>

          {/* Custom Homes — Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 lg:mb-28">
            <ScrollReveal>
              <div className="img-zoom">
                <Image
                  src="/images/projects/poyntz/twilight-1.jpg"
                  alt="Custom home exterior at twilight"
                  width={800}
                  height={600}
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <span className="text-beige/40 text-sm font-light">01</span>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mt-6 mb-7">
                  Custom Homes
                </h3>
                <div className="divider mb-8" />
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-5">
                  A residence conceived entirely around you. From architectural
                  vision through to the finished home, every decision is made
                  with your life in mind.
                </p>
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-10">
                  We handle every phase — design, engineering, construction,
                  and finishing — so nothing is lost between disciplines and
                  every detail reflects the original intent.
                </p>
                <Link
                  href="/services/custom-homes"
                  className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] hover:text-beige-light transition-colors duration-300 group"
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
          </div>

          {/* Whole-Home Transformations — Text Left, Photo Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20 lg:mb-28">
            <ScrollReveal className="order-2 lg:order-1">
              <div>
                <span className="text-beige/40 text-sm font-light">02</span>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mt-6 mb-7">
                  Whole-Home Transformations
                </h3>
                <div className="divider mb-8" />
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-5">
                  A complete reimagining of an existing residence. Every space,
                  every system, every detail — reconceived from the ground up.
                </p>
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-10">
                  We see what a home can become, not just what it is. Structure,
                  flow, light, and materials are all rethought to create
                  something that feels entirely new.
                </p>
                <Link
                  href="/services/transformations"
                  className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] hover:text-beige-light transition-colors duration-300 group"
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
            <ScrollReveal delay={200} className="order-1 lg:order-2">
              <div className="img-zoom">
                <Image
                  src="/images/projects/terrace/kitchen-1.jpg"
                  alt="Whole-home transformation, modern kitchen"
                  width={800}
                  height={600}
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Additions & Extensions — Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <ScrollReveal>
              <div className="img-zoom">
                <Image
                  src="/images/projects/poyntz/interior-03.jpg"
                  alt="Seamless home addition, interior detail"
                  width={800}
                  height={600}
                  className="w-full h-[450px] lg:h-[550px] object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div>
                <span className="text-beige/40 text-sm font-light">03</span>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-white tracking-wide mt-6 mb-7">
                  Additions &amp; Extensions
                </h3>
                <div className="divider mb-8" />
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-5">
                  Expansion so precisely integrated, it appears to have always
                  been part of the original architecture.
                </p>
                <p className="text-white/70 font-light leading-[1.85] text-[15px] mb-10">
                  Whether it is a new floor, a reimagined rear extension, or
                  an entirely new wing — we ensure the addition reads as one
                  continuous design, not an afterthought.
                </p>
                <Link
                  href="/services/additions"
                  className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] hover:text-beige-light transition-colors duration-300 group"
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
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-10 md:py-16">
        <div className="px-[5%]">
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
                className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] hover:text-beige-light transition-colors duration-300 group"
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

      {/* ─── FEATURED PROJECTS ─── */}
      <section className="relative py-10 md:py-16">
        <div className="px-[5%]">
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
                      {project.type} · {project.location}
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
                className="inline-flex items-center text-beige text-[13px] font-medium tracking-[0.15em] hover:text-beige-light transition-colors duration-300 group"
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
    </>
  );
}

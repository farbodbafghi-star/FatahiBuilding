"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: `New inquiry from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="relative pt-44 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* LEFT — HEADLINE + FORM */}
          <div className="lg:col-span-7">
            <p className="section-label mb-8 animate-fade-in">Contact</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light font-heading text-white leading-[1.1] tracking-wide animate-fade-up mb-16">
              Let&apos;s Build<br />Something Together
            </h1>

            <ScrollReveal>
              {submitted ? (
                <div className="py-16">
                  <div className="w-16 h-px bg-beige mb-8" />
                  <h2 className="text-2xl md:text-3xl font-light font-heading text-white tracking-wide mb-6">Thank you</h2>
                  <p className="text-white/70 font-light leading-relaxed max-w-md">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="group">
                      <label htmlFor="name" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-4 group-focus-within:text-beige/70 transition-colors duration-300">Name</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                        className="w-full border-b border-white/10 pb-3 text-[15px] font-light text-white bg-transparent focus:outline-none focus:border-beige hover:border-beige/40 transition-colors duration-300 hover:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.3)] focus:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.4)]" />
                    </div>
                    <div className="group">
                      <label htmlFor="email" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-4 group-focus-within:text-beige/70 transition-colors duration-300">Email</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                        className="w-full border-b border-white/10 pb-3 text-[15px] font-light text-white bg-transparent focus:outline-none focus:border-beige hover:border-beige/40 transition-colors duration-300 hover:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.3)] focus:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.4)]" />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="phone" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-4 group-focus-within:text-beige/70 transition-colors duration-300">Phone <span className="text-white/20">(optional)</span></label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full border-b border-white/10 pb-3 text-[15px] font-light text-white bg-transparent focus:outline-none focus:border-beige hover:border-beige/40 transition-colors duration-300 hover:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.3)] focus:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.4)]" />
                  </div>

                  <div className="group">
                    <label htmlFor="message" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-4 group-focus-within:text-beige/70 transition-colors duration-300">What do you have in mind?</label>
                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange}
                      className="w-full border-b border-white/10 pb-3 text-[15px] font-light text-white bg-transparent focus:outline-none focus:border-beige hover:border-beige/40 transition-colors duration-300 hover:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.3)] focus:shadow-[0_1px_8px_-2px_rgba(196,180,158,0.4)] resize-none placeholder:text-white/20" />
                  </div>

                  <div className="pt-6">
                    <button type="submit" disabled={submitting} className="border border-beige/30 text-beige px-14 py-5 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500 disabled:opacity-50">
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              )}
            </ScrollReveal>
          </div>

          {/* RIGHT — SIDEBAR */}
          <div className="lg:col-span-4 lg:col-start-9">
            <ScrollReveal delay={200}>
              <div className="lg:sticky lg:top-44">
                <div className="border border-white/[0.06] p-10 md:p-12 space-y-10">
                  <div>
                    <p className="section-label mb-6">Direct</p>
                    <div className="space-y-3">
                      <a href="mailto:info@fatahibuilding.com" className="block text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">info@fatahibuilding.com</a>
                      <a href="tel:+16476311211" className="block text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">(647) 631-1211</a>
                    </div>
                  </div>

                  <div className="w-full h-px bg-white/[0.06]" />

                  <div>
                    <p className="section-label mb-6">Service Area</p>
                    <p className="text-white/70 font-light text-sm">Toronto &amp; the Greater Toronto Area</p>
                  </div>

                  <div className="w-full h-px bg-white/[0.06]" />

                  <div>
                    <p className="section-label mb-6">Follow</p>
                    <div className="flex items-center gap-8">
                      <a href="https://instagram.com/fatahibuilding" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">
                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        Instagram
                      </a>
                      <a href="https://www.linkedin.com/company/fatahi-building-inc/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">
                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const projectTypes = ["Custom Home", "Whole-Home Transformation", "Addition / Extension", "Not Sure Yet"];
const referralSources = ["Google Search", "Instagram", "Referral from a Friend", "Referral from a Professional", "Drove by a Project", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    projectType: "", location: "", description: "", referral: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-44 pb-24">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="max-w-2xl">
            <p className="section-label mb-8 animate-fade-in">Get in Touch</p>
            <h1 className="text-4xl md:text-5xl font-light font-heading text-white leading-tight tracking-wide animate-fade-up">
              Start a Conversation
            </h1>
            <div className="divider mt-10 mb-10 animate-fade-in animate-delay-200" />
            <p className="text-white/50 font-light leading-relaxed animate-fade-up animate-delay-200">
              Every project begins with understanding how you want to live. Tell us about yours.
            </p>
          </div>
        </div>
      </section>

      <div className="section-sep" />

      {/* FORM + SIDEBAR */}
      <section className="py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 lg:gap-28">
            {/* FORM */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-16 h-px bg-beige mx-auto mb-8" />
                    <h2 className="text-2xl md:text-3xl font-light font-heading text-white tracking-wide mb-6">Thank you</h2>
                    <p className="text-white/70 font-light leading-relaxed max-w-md mx-auto">
                      We&apos;ve received your message and will be in touch within one business day to continue the conversation.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="firstName" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">First Name</label>
                        <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleChange}
                          className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300" />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleChange}
                          className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">Email</label>
                        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                          className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">Phone</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                          className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="projectType" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">Project Type</label>
                        <select id="projectType" name="projectType" required value={formData.projectType} onChange={handleChange}
                          className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300 appearance-none cursor-pointer">
                          <option value="" className="bg-navy-dark">Select one</option>
                          {projectTypes.map((type) => (<option key={type} value={type} className="bg-navy-dark">{type}</option>))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="location" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">Project Location</label>
                        <input type="text" id="location" name="location" placeholder="City or neighbourhood" value={formData.location} onChange={handleChange}
                          className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300 placeholder:text-white/20" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">Tell Us About Your Project</label>
                      <textarea id="description" name="description" rows={5} value={formData.description} onChange={handleChange}
                        placeholder="What are you hoping to achieve? What matters most to you in a home?"
                        className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300 resize-none placeholder:text-white/20" />
                    </div>

                    <div>
                      <label htmlFor="referral" className="block text-xs font-medium tracking-[0.2em] text-white/40 mb-3">How Did You Hear About Us?</label>
                      <select id="referral" name="referral" value={formData.referral} onChange={handleChange}
                        className="w-full border-b border-white/10 pb-3 text-sm font-light text-white bg-transparent focus:outline-none focus:border-beige transition-colors duration-300 appearance-none cursor-pointer">
                        <option value="" className="bg-navy-dark">Select one</option>
                        {referralSources.map((source) => (<option key={source} value={source} className="bg-navy-dark">{source}</option>))}
                      </select>
                    </div>

                    <div className="pt-4">
                      <button type="submit" className="border border-beige/30 text-beige px-12 py-4 text-[13px] font-light tracking-[0.15em] hover:bg-beige hover:text-navy transition-all duration-500">
                        Send Message
                      </button>
                      <p className="mt-4 text-white/30 text-xs font-light">
                        This isn&apos;t a quote request. It&apos;s the start of a conversation about whether we&apos;re the right fit for your project.
                      </p>
                    </div>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-1">
              <ScrollReveal delay={200}>
                <div className="lg:sticky lg:top-32">
                  <div className="space-y-10">
                    <div>
                      <p className="section-label mb-8">Contact</p>
                      <div className="space-y-4">
                        <a href="mailto:info@fatahibuilding.com" className="block text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">info@fatahibuilding.com</a>
                        <a href="tel:+16476311211" className="block text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">(647) 631-1211</a>
                      </div>
                    </div>
                    <div className="w-8 h-px bg-white/10" />
                    <div>
                      <p className="section-label mb-8">Service Area</p>
                      <p className="text-white/70 font-light text-sm">Toronto &amp; the Greater Toronto Area</p>
                    </div>
                    <div className="w-8 h-px bg-white/10" />
                    <div>
                      <p className="section-label mb-8">Follow</p>
                      <a href="https://instagram.com/fatahibuilding" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        @fatahibuilding
                      </a>
                    </div>
                    <div className="w-8 h-px bg-white/10" />
                    <div>
                      <p className="section-label mb-8">LinkedIn</p>
                      <a href="https://www.linkedin.com/company/fatahi-building-inc/" target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-white/70 font-light text-sm hover:text-beige transition-colors duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        Fatahi Building
                      </a>
                    </div>
                    <div className="w-8 h-px bg-white/10" />
                    <div className="bg-white/5 border border-white/10 p-8">
                      <p className="text-white text-sm font-medium mb-3">What to expect</p>
                      <p className="text-white/40 font-light text-xs leading-relaxed">
                        After you reach out, we&apos;ll schedule a brief call to learn more about your project. If it&apos;s a good fit, we&apos;ll arrange a site visit and begin the design conversation. There&apos;s no obligation. This is about finding the right match for both sides.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

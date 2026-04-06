"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [subEmail, setSubEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "sending" | "done">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subEmail) return;
    setSubStatus("sending");
    try {
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          subject: "New Insights Subscriber",
          email: subEmail,
          message: `New subscriber: ${subEmail}`,
        }),
      });
      setSubStatus("done");
      setSubEmail("");
    } catch {
      setSubStatus("idle");
    }
  };

  return (
    <footer className="bg-navy-dark text-white/60">
      {/* CTA Banner, homepage only */}
      {isHome && (
        <div className="border-y border-white/10 bg-white/[0.03]">
          <div className="px-[5%] py-14 text-center max-w-3xl mx-auto">
            <p className="section-label mb-5">Begin</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight mb-5">
              Your vision deserves
              <br />
              to be realized.
            </h2>
            <div className="divider mx-auto mb-5" />
            <p className="text-white/50 font-light text-base mb-10 max-w-md mx-auto leading-relaxed">
              It begins with a conversation about how you envision your life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-beige text-navy-dark px-12 py-4 text-[13px] font-medium tracking-[0.15em] hover:bg-white transition-all duration-500"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}

      {/* Footer Body */}
      <div className="px-[5%] pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-10">
          {/* Column 1 — Logo & tagline */}
          <div>
            <Link href="/" className="relative block h-12 w-12 overflow-hidden mb-6">
              <Image
                src="/images/branding/logo-beige.png"
                alt="Fatahi Building"
                width={300}
                height={300}
                className="absolute top-1/2 left-0 -translate-y-1/2 h-[220%] w-auto max-w-none"
              />
            </Link>
            <p className="text-sm font-light text-white/40 leading-relaxed">
              Luxury design-build for custom homes,
              whole-home transformations, and extensions in Toronto &amp; the GTA.
            </p>
          </div>

          {/* Column 2 — Navigate */}
          <div>
            <p className="text-white text-sm font-medium mb-6">Navigate</p>
            <ul className="space-y-4">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/services/custom-homes", label: "Custom Homes" },
                { href: "/services/transformations", label: "Transformations" },
                { href: "/services/additions", label: "Additions" },
                { href: "/process", label: "Process" },
                { href: "/insights", label: "Insights" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/40 hover:text-beige transition-colors duration-300 inline-flex items-center gap-1"
                  >
                    {link.label}
                    <span className="text-[10px]">&#8599;</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <p className="text-white text-sm font-medium mb-6">Contact</p>
            <ul className="space-y-4 text-sm font-light text-white/40">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-beige transition-colors duration-300 inline-flex items-center gap-1"
                >
                  Start a Conversation <span className="text-[10px]">&#8599;</span>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:info@fatahibuilding.com"
                  className="hover:text-beige transition-colors duration-300"
                >
                  info@fatahibuilding.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+16476311211"
                  className="hover:text-beige transition-colors duration-300"
                >
                  (647) 631-1211
                </a>
              </li>
              <li className="pt-1 leading-relaxed">
                Toronto &amp; GTA
                <br />
                Ontario, Canada
              </li>
              <li className="pt-2 flex items-center gap-4">
                <a
                  href="https://instagram.com/fatahibuilding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-beige transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/fatahi-building-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 hover:text-beige transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Subscribe to Insights */}
          <div>
            <p className="text-white text-sm font-medium mb-6">Subscribe to Insights</p>
            <p className="text-sm font-light text-white/40 leading-relaxed mb-6">
              Receive perspectives on luxury home design, construction, and living well.
            </p>
            {subStatus === "done" ? (
              <p className="text-beige/70 text-sm font-light">Thank you for subscribing.</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-sm font-light text-white placeholder:text-white/30 outline-none focus:border-beige/30 transition-colors duration-300"
                />
                <button
                  type="submit"
                  disabled={subStatus === "sending"}
                  className="ml-2 bg-white/10 hover:bg-beige hover:text-navy border border-white/10 hover:border-beige rounded-full w-11 h-11 flex items-center justify-center text-white transition-all duration-300 shrink-0 disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[12px] font-light text-white/25 tracking-wide">
            &copy; {new Date().getFullYear()} Fatahi Building Inc. &middot; All rights reserved.
          </p>
          <p className="text-[12px] font-light text-white/25 tracking-wide">
            Custom homes designed &amp; built in Toronto
          </p>
        </div>
      </div>
    </footer>
  );
}

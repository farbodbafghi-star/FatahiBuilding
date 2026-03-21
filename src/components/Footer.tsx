"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="bg-navy-dark text-white/60">
      {/* CTA Banner, homepage only */}
      {isHome && (
        <div className="border-y border-white/5">
          <div className="max-w-4xl mx-auto px-8 md:px-16 py-24 text-center">
            <p className="section-label mb-8">Begin</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-wide leading-tight mb-8">
              Your vision deserves
              <br />
              to be realized.
            </h2>
            <div className="divider mx-auto mb-8" />
            <p className="text-white/40 font-light text-lg mb-14 max-w-md mx-auto leading-relaxed">
              It begins with a conversation about how you envision your life.
            </p>
            <Link
              href="/contact"
              className="inline-block border border-beige/30 text-beige px-14 py-4 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      )}

      {/* Footer Body */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 pt-14 pb-12">
        {/* Monogram */}
        <div className="flex justify-center mb-12">
          <Link href="/" className="relative block h-14 w-14 overflow-hidden opacity-40 hover:opacity-60 transition-opacity duration-500">
            <Image
              src="/images/branding/logo-beige.png"
              alt="Fatahi Building"
              width={300}
              height={300}
              className="absolute top-1/2 left-0 -translate-y-1/2 h-[220%] w-auto max-w-none"
            />
          </Link>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-16 text-center max-w-4xl mx-auto">
          {/* Explore */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/25 mb-6">Explore</p>
            <ul className="space-y-3">
              {[
                { href: "/projects", label: "Projects" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/insights", label: "Insights" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light text-white/40 hover:text-beige transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/25 mb-6">Services</p>
            <ul className="space-y-3">
              {[
                { href: "/services/custom-homes", label: "Custom Homes" },
                { href: "/services/transformations", label: "Transformations" },
                { href: "/services/additions", label: "Additions" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] font-light text-white/40 hover:text-beige transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-white/25 mb-6">Connect</p>
            <ul className="space-y-3 text-[13px] font-light text-white/40">
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
              <li className="text-white/30">Toronto &amp; GTA</li>
              <li className="pt-2 flex items-center justify-center gap-5">
                <a
                  href="https://instagram.com/fatahibuilding"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-beige transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/fatahi-building-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/30 hover:text-beige transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] font-light text-white/15 tracking-wide">
            &copy; {new Date().getFullYear()} Fatahi Building. All rights reserved.
          </p>
          <p className="text-[11px] font-light text-white/15 tracking-wide">
            Custom homes designed &amp; built in Toronto
          </p>
        </div>
      </div>
    </footer>
  );
}

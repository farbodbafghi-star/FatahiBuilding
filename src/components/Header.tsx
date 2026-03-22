"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/custom-homes", label: "Custom Homes" },
      { href: "/services/transformations", label: "Whole-Home Transformations" },
      { href: "/services/additions", label: "Additions & Extensions" },
    ],
  },
  { href: "/projects", label: "Projects" },
  { href: "/insights", label: "Insights" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="w-full px-[5%] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative block h-12 w-12 overflow-hidden">
          <Image
            src="/images/branding/logo-beige.png"
            alt="Fatahi Building"
            width={300}
            height={300}
            className="absolute top-1/2 left-0 -translate-y-1/2 h-[220%] w-auto max-w-none"
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative group flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span
                  className="text-white hover:text-beige text-[12px] font-light tracking-[0.15em] transition-colors duration-300 cursor-default leading-none"
                >
                  {link.label}
                </span>
                <div
                  className={`absolute top-full left-0 pt-5 transition-all duration-300 ${
                    servicesOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }`}
                >
                  <div className="bg-navy-dark/95 backdrop-blur-md border border-white/10 min-w-[280px] py-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-7 py-3 text-white/50 hover:text-beige hover:bg-white/5 text-sm font-light tracking-wide transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-beige text-[12px] font-light tracking-[0.15em] transition-colors duration-300 leading-none"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-2 border border-white/30 text-white px-6 py-2.5 text-[12px] font-light tracking-[0.15em] rounded-full hover:bg-beige hover:text-navy hover:border-beige transition-all duration-500"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
}

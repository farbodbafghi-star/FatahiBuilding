"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
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
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-navy-dark/95 backdrop-blur-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50 block h-9 w-9 overflow-hidden">
          <Image
            src="/images/branding/logo-beige.png"
            alt="Fatahi Building"
            width={300}
            height={300}
            className="absolute top-1/2 left-0 -translate-y-1/2 h-[220%] w-auto max-w-none"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.href}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-beige text-[13px] font-light tracking-[0.15em] uppercase transition-colors duration-300"
                >
                  {link.label}
                </Link>
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
                className="text-white/80 hover:text-beige text-[13px] font-light tracking-[0.15em] uppercase transition-colors duration-300"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="ml-6 border border-beige/30 text-beige px-7 py-2.5 text-[13px] font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
          >
            Start a Conversation
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-navy-dark z-40 flex flex-col items-center justify-center transition-all duration-500 lg:hidden ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.href} className="text-center">
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-white text-3xl font-light tracking-wide hover:text-beige transition-colors"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="mt-3 flex flex-col gap-2">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-white/40 text-sm font-light tracking-wide hover:text-beige transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-6 border border-beige/30 text-beige px-10 py-3.5 text-sm font-light tracking-[0.15em] uppercase hover:bg-beige hover:text-navy transition-all duration-500"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

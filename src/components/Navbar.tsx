"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "About", href: "#about" },
  { label: "The Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#closing" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/[0.92] backdrop-blur-md border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1720px] mx-auto px-5 sm:px-8 lg:px-12 h-[4.2rem] flex items-center justify-between">
        <a href="#" className="flex items-center shrink-0">
          <Image
            src={scrolled ? "/assets/Logo/PNG/VBlack.png" : "/assets/Logo/PNG/VWhite.png"}
            alt="Vaxen"
            width={100}
            height={28}
            className="h-16 w-auto pt-4"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-[clamp(1.5rem,3.5vw,5rem)] absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[0.95rem] lg:text-[1rem] transition-colors duration-200 font-semibold whitespace-nowrap ${
                scrolled ? "text-black/72 hover:text-black" : "text-white/90 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:access@vaxenglobal.com"
          className={`hidden md:inline-flex items-center justify-center rounded-full px-5 py-2 text-[0.85rem] font-bold transition-all duration-200 whitespace-nowrap ${
            scrolled
              ? "bg-black text-white hover:bg-black/80"
              : "bg-white/15 border border-white/40 text-white hover:bg-white hover:text-black"
          }`}
        >
          Request Access
        </a>

        <button
          className={`md:hidden ${scrolled ? "text-black/70 hover:text-black" : "text-white/80 hover:text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/96 backdrop-blur-md border-t border-black/5 px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-black/70 hover:text-black font-semibold py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:access@vaxenglobal.com"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-bold text-white hover:bg-black/80 transition-colors"
          >
            Request Access
          </a>
        </div>
      )}
    </nav>
  );
}

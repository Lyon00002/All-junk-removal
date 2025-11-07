"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import GetQuoteButton from "./GetQuoteButton";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faqs", label: "FAQs" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact US" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  return (
    <header className="absolute inset-x-0 top-5 z-50 w-full">
      <div className="mx-auto w-[1350px] max-w-[calc(100%-30px)] max-w-full px-6 sm:px-8">
        <nav className="flex items-center justify-between gap-3 sm:gap-4 rounded-full border border-white/30 bg-black/5 backdrop-blur-xs px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 lg:py-4">
          <div className="flex items-center gap-2">
            {/* Logo image placed in /public/logo.png */}
            <Link href="/" className="inline-flex items-center" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Logo"
                width={600}
                height={600}
                priority
                className="rounded h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-[11px] sm:text-xs md:text-sm lg:text-base">
            {links.map(({ href, label }) => {
              const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={[
                      "group relative pb-2 transition-colors font-normal",
                      active ? "text-primary" : "text-white/80 hover:text-white",
                    ].join(" ")}
                  >
                    <span>{label}</span>
                    <span
                      aria-hidden
                      className={[
                        "pointer-events-none absolute -bottom-1 left-0 h-0.5 rounded-full bg-primary transition-all duration-200 ease-out",
                        active ? "w-8" : "w-0 group-hover:w-8",
                      ].join(" ")}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-grid h-9 w-9 place-items-center rounded-md border border-white/30 text-white/90 hover:text-white hover:border-secondary transition-colors"
            >
              {/* Icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                ) : (
                  <>
                    <path d="M4 6h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>

          {/* CTA (desktop) */}
          <div className="hidden md:block shrink-0">
            <GetQuoteButton
              href="/quote"
              label="Get a quote"
              size="sm"
              className="font-normal px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2"
            />
          </div>
        </nav>

        {/* Mobile Panel */}
        {open && (
          <div className="md:hidden mt-2 rounded-2xl border border-white/20 bg-black/90 text-white shadow-lg">
            <div className="px-3 py-2">
              <ul className="flex flex-col divide-y divide-white/10">
                {links.map(({ href, label }) => {
                  const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
                  return (
                    <li key={href}>
                      <Link
                        href={href}
                        onClick={() => setOpen(false)}
                        className={[
                          "block px-2 py-3 font-normal",
                          active ? "text-primary" : "text-white/80 hover:text-white",
                        ].join(" ")}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="pt-3">
                <GetQuoteButton href="/quote" label="Get a quote" size="sm" className="w-full justify-center font-normal" />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

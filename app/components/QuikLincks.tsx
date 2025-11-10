"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function QuickLinks() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQs", href: "/faqs" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p className="font-medium">Quick links</p>

      <ul className="flex flex-col ">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="
                font-normal text-xs sm:text-sm md:text-sm text-white
                transition duration-200
                hover:text-primary hover:translate-x-1 inline-block
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

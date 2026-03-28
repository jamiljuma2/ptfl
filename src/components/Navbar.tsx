"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SITE } from "../data/site.config";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-zinc-900/80 backdrop-blur shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="#hero" className="font-extrabold text-xl text-green-700 dark:text-green-400 tracking-tight">
          {SITE.name}
        </Link>
        <div className="hidden md:flex gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="font-medium text-zinc-700 dark:text-zinc-200 hover:text-green-600 dark:hover:text-green-400 transition-colors px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-green-400">
              {link.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-2xl text-green-700 dark:text-green-400" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-white/95 dark:bg-zinc-900/95">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="font-medium text-zinc-700 dark:text-zinc-200 hover:text-green-600 dark:hover:text-green-400 transition-colors px-2 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

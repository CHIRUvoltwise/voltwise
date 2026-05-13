"use client";

import Link from "next/link";
import { Menu, Zap } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/tools", label: "Tools" },
  { href: "/favorites", label: "Favorites" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/appliance-wattage", label: "Wattage" },
  { href: "/rates", label: "Rates" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-emerald-400">
          <Zap size={22} />
          VoltWise
        </Link>

        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-emerald-400">
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-xl border border-slate-700 p-2 text-slate-300"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-800 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-slate-300">
            {links.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
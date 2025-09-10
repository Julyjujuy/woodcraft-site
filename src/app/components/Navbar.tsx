"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/collection", label: "Collection" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2B241E]/85 text-white backdrop-blur supports-[backdrop-filter]:bg-[#2B241E]/70">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-wide text-white">
          Bottega Marchi
        </Link>

        <button
          className="md:hidden p-2 text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>

        <nav className={`${open ? "block" : "hidden"} md:block`}>
          <ul className="md:flex md:gap-6">
            {LINKS.map((item) => (
              <li key={item.href} className="py-2 md:py-0">
                <Link
                  href={item.href}
                  className={`transition hover:underline underline-offset-4 ${
                    pathname === item.href ? "font-semibold text-white" : "text-white/90"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

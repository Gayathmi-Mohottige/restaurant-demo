"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Our Fire", href: "#story" },
  { label: "Gallery", href: "#gallery" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-charcoal/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-cream"
        >
          Ember <span className="text-ember">&amp;</span> Oak
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-ash transition-colors hover:text-cream"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#reserve"
          className="rounded-full bg-ember px-5 py-2.5 text-sm font-medium text-charcoal transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          Reserve
        </a>
      </nav>
    </header>
  );
}

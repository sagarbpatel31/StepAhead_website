"use client";
import { useState } from "react";
import site from "@/content/site.json";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-violet-950 text-white">
      <nav className="mx-auto flex max-w-[1536px] items-center justify-between px-6 py-4 md:px-12 md:py-0 md:h-24 lg:px-20 lg:h-28">
        {/* Desktop links */}
        <ul className="hidden md:flex md:gap-8 lg:gap-16 xl:gap-24">
          {site.nav.links.map((l) => (
            <li key={l} className="flex items-center py-2">
              <a
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="font-sans text-lg font-bold text-white lg:text-2xl xl:text-3xl"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className="block h-0.5 w-7 bg-white" />
          <span className="block h-0.5 w-7 bg-white" />
          <span className="block h-0.5 w-7 bg-white" />
        </button>

        {/* CTA button */}
        <a
          href="#cta"
          className="rounded-lg bg-sky-50 px-4 py-2 font-sans text-sm font-bold text-blue-950 outline outline-[2px] outline-offset-[-2px] outline-violet-950 md:px-5 md:py-3 md:text-base lg:px-6 lg:text-xl"
        >
          {site.nav.cta}
        </a>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col gap-4 bg-violet-950 px-6 pb-6 md:hidden">
          {site.nav.links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase().replace(/\s+/g, "-")}`}
                className="block font-sans text-xl font-bold text-white"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

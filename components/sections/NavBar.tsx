"use client";
import { useState } from "react";
import Link from "next/link";
import site from "@/content/site.json";

/** Map nav link labels to their destination href */
function navHref(label: string): string {
  if (label === "About Us") return "/about";
  if (label === "FAQ") return "/#faq";
  if (label === "Product") return "/#how-it-works";
  if (label === "Features") return "/features";
  if (label === "Resources") return "/resources";
  return `/#${label.toLowerCase().replace(/\s+/g, "-")}`;
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-20 bg-violet-950 text-white">
      <nav className="mx-auto flex max-w-[1536px] items-center justify-between gap-4 px-6 py-4 md:px-8 md:py-0 md:h-24 lg:px-12 lg:h-28 xl:px-20">
        {/* Desktop links */}
        <ul className="hidden md:flex md:gap-6 lg:gap-10 xl:gap-16 2xl:gap-24">
          <li className="flex items-center py-2">
            <Link href="/" className="whitespace-nowrap font-sans text-base font-bold text-white lg:text-xl xl:text-2xl 2xl:text-3xl">
              Home
            </Link>
          </li>
          {site.nav.links.map((l) => (
            <li key={l} className="flex items-center py-2">
              <Link
                href={navHref(l)}
                className="whitespace-nowrap font-sans text-base font-bold text-white lg:text-xl xl:text-2xl 2xl:text-3xl"
              >
                {l}
              </Link>
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
        <Link
          href="/waitlist"
          className="whitespace-nowrap rounded-lg bg-sky-50 px-4 py-2 font-sans text-sm font-bold text-blue-950 outline outline-[2px] outline-offset-[-2px] outline-violet-950 md:px-5 md:py-3 md:text-base lg:px-6 xl:text-xl"
        >
          {site.nav.cta}
        </Link>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <ul className="flex flex-col gap-4 bg-violet-950 px-6 pb-6 md:hidden">
          <li>
            <Link href="/" className="block font-sans text-xl font-bold text-white" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          {site.nav.links.map((l) => (
            <li key={l}>
              <Link
                href={navHref(l)}
                className="block font-sans text-xl font-bold text-white"
                onClick={() => setOpen(false)}
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

"use client";
import { useState } from "react";
import site from "@/content/site.json";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="mx-auto max-w-[1182px] px-6 py-10 md:px-12 md:py-16 lg:py-20">
      <h2 className="text-center font-sans text-3xl font-bold text-brand-deeper md:text-4xl lg:text-5xl">{site.faq.title}</h2>
      <ul className="mt-10">
        {site.faq.items.map((item, i) => (
          <li key={item.q} className="border-b border-brand-orange py-5 md:py-7">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between text-left gap-4"
            >
              <span className="font-sans text-lg font-semibold text-brand-deep md:text-2xl lg:text-3xl">{item.q}</span>
              <span className="shrink-0 text-2xl text-brand-orange md:text-3xl lg:text-4xl">{open === i ? "–" : "+"}</span>
            </button>
            {open === i && (
              <p className="mt-4 font-sans text-base leading-relaxed text-brand-deep/80 md:text-lg lg:text-xl">
                {item.a}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

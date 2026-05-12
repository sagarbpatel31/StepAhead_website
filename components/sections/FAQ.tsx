"use client";
import { useState } from "react";
import site from "@/content/site.json";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="mx-auto max-w-content px-6 py-32">
      <h2 className="f-h1 text-center text-brand-deeper">{site.faq.title}</h2>
      <ul className="mt-12">
        {site.faq.items.map((q, i) => (
          <li key={q} className="border-b border-brand-orange py-7">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-[36px] font-semibold text-brand-deep">{q}</span>
              <span className="text-4xl text-brand-orange">{open === i ? "–" : "+"}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

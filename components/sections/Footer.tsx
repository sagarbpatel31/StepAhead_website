import Image from "next/image";
import site from "@/content/site.json";

export default function Footer() {
  const f = site.footer;
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto max-w-[1536px] px-6 py-10 md:px-12 md:py-14 lg:px-20 lg:py-16">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 md:grid-cols-3 md:gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] lg:gap-12">

          {/* Col 1 — logo + store badges */}
          <div className="flex flex-col gap-5">
            <div className="inline-block w-fit rounded-xl bg-white p-2.5">
              <Image
                src={f.logo}
                alt="StepAhead"
                width={160}
                height={50}
                className="h-auto w-28 md:w-36 lg:w-40"
              />
            </div>
            <Image
              src={f.store.img}
              alt={f.store.alt}
              width={150}
              height={108}
              className="h-auto w-24 md:w-32 lg:w-36"
            />
          </div>

          {/* Cols 2–4 — link lists */}
          {f.columns.map((c) => (
            <div key={c.title}>
              <h5 className="mb-3 font-sans text-base font-bold text-white md:text-lg lg:text-xl">
                {c.title}
              </h5>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-sm text-white/80 hover:text-white hover:underline md:text-base">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Col 5 — contact */}
          <div className="flex flex-col gap-3 sm:col-span-2 md:col-span-1 lg:col-span-1">
            <a
              href={`mailto:${f.contact.email}`}
              className="font-sans text-base font-bold text-white hover:underline md:text-lg lg:text-xl"
            >
              {f.contact.email}
            </a>
            <address className="not-italic">
              {f.contact.addressLines.map((line) => (
                <div key={line} className="font-sans text-sm leading-7 text-white/80 md:text-base">
                  {line}
                </div>
              ))}
            </address>
            <p className="font-sans text-xs text-white/60 md:text-sm">{f.contact.copyright}</p>
          </div>

        </div>

        {/* Legal row */}
        <div className="mt-8 border-t border-white/20 pt-6">
          <ul className="flex flex-wrap gap-4 md:gap-6">
            {f.legal.map((l) => (
              <li key={l}>
                <a href="#" className="font-sans text-xs text-white/70 hover:text-white hover:underline md:text-sm">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </footer>
  );
}

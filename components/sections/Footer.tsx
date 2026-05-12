import Image from "next/image";
import site from "@/content/site.json";

export default function Footer() {
  const f = site.footer;
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto max-w-[1536px] px-6 py-12 md:px-12 md:py-16 lg:px-20">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr] lg:gap-12">
          {/* Column 1 — logo + app store badge */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <div className="inline-block rounded-xl bg-white p-3">
              <Image src={f.logo} alt="StepAhead" width={180} height={56} className="w-32 md:w-40 lg:w-[180px] h-auto" />
            </div>
            <div className="mt-6">
              <Image src={f.store.img} alt={f.store.alt} width={170} height={120} className="w-28 md:w-36 lg:w-[170px] h-auto" />
            </div>
          </div>

          {/* Columns 2–4 — link lists */}
          {f.columns.map((c) => (
            <div key={c.title}>
              <h5 className="mb-4 font-sans text-lg font-bold md:text-xl lg:text-2xl">{c.title}</h5>
              <ul className="space-y-2 opacity-95">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-sans text-sm hover:underline md:text-base lg:text-lg">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5 — contact */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1">
            <a href={`mailto:${f.contact.email}`} className="font-sans text-lg font-bold hover:underline md:text-xl lg:text-2xl">
              {f.contact.email}
            </a>
            <address className="mt-4 not-italic leading-7 opacity-95">
              {f.contact.addressLines.map((line) => (
                <div key={line} className="font-sans text-sm md:text-base lg:text-lg">{line}</div>
              ))}
            </address>
            <p className="mt-4 text-xs opacity-80 md:text-sm">{f.contact.copyright}</p>
          </div>
        </div>

        <ul className="mt-10 flex flex-wrap gap-4 text-xs opacity-90 md:gap-6 md:text-sm">
          {f.legal.map((l) => (
            <li key={l}>
              <a href="#" className="hover:underline">{l}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

import Image from "next/image";
import site from "@/content/site.json";

export default function Footer() {
  const f = site.footer;
  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto max-w-frame px-20 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1.4fr]">
          {/* Column 1 — logo + app store badge */}
          <div>
            <div className="inline-block rounded-xl bg-white p-3">
              <Image src={f.logo} alt="StepAhead" width={180} height={56} />
            </div>
            <div className="mt-6">
              <Image
                src={f.store.img}
                alt={f.store.alt}
                width={170}
                height={120}
              />
            </div>
          </div>

          {/* Columns 2–4 — link lists */}
          {f.columns.map((c) => (
            <div key={c.title}>
              <h5 className="mb-6 text-2xl font-bold">{c.title}</h5>
              <ul className="space-y-2 text-lg opacity-95">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:underline">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5 — contact info */}
          <div>
            <a
              href={`mailto:${f.contact.email}`}
              className="text-2xl font-bold hover:underline"
            >
              {f.contact.email}
            </a>
            <address className="mt-6 not-italic text-lg leading-8 opacity-95">
              {f.contact.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
            <p className="mt-6 text-sm opacity-80">{f.contact.copyright}</p>
          </div>
        </div>

        {/* Bottom legal row */}
        <ul className="mt-12 flex gap-8 text-sm opacity-90">
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
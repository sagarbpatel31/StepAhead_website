import site from "@/content/site.json";

export default function MissionBanner() {
  const m = site.mission;
  return (
    <section className="bg-brand-deep text-center text-white">
      <div className="mx-auto max-w-[1400px] px-20 py-28">
        <p className="font-sans text-3xl font-normal leading-relaxed">{m.text}</p>
        <a
          href="#team"
          className="mt-10 inline-flex items-center justify-center rounded-lg border border-white bg-white px-10 py-3 font-sans text-xl font-bold text-blue-950"
        >
          {m.cta}
        </a>
      </div>
    </section>
  );
}

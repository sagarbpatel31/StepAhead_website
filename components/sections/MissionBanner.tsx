import site from "@/content/site.json";

export default function MissionBanner() {
  const m = site.mission;
  return (
    <section className="bg-brand-deep text-center text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-28">
        <p className="font-sans text-xl font-bold leading-relaxed md:text-2xl lg:text-3xl">{m.text}</p>
        <a
          href="#team"
          className="mt-8 inline-flex items-center justify-center rounded-lg border border-white bg-white px-8 py-2.5 font-sans text-base font-bold text-blue-950 md:mt-10 md:px-10 md:py-3 md:text-lg lg:text-xl"
        >
          {m.cta}
        </a>
      </div>
    </section>
  );
}

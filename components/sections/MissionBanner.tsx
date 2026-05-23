import site from "@/content/site.json";

export default function MissionBanner() {
  const m = site.mission;
  return (
    <section className="bg-brand-deep text-center text-white">
      <div className="mx-auto max-w-[1400px] px-6 py-10 md:px-12 md:py-12 lg:px-20 lg:py-16">
        <p className="font-sans text-xl font-bold leading-relaxed md:text-2xl lg:text-3xl">{m.text}</p>
      </div>
    </section>
  );
}

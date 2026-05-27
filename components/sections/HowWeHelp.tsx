import PhoneFrame from "@/components/PhoneFrame";
import site from "@/content/site.json";

export default function HowWeHelp() {
  const s = site.howWeHelp;
  return (
    <section className="overflow-x-hidden bg-gray-50 py-10 md:py-12 lg:py-16">
      <div className="mx-auto max-w-[1536px] px-6 md:px-12 lg:px-20">

        <h2 className="text-center font-sans text-3xl font-bold text-blue-950 md:text-4xl lg:text-5xl">
          {s.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center font-sans text-lg font-bold leading-snug text-blue-950 md:mt-6 md:text-xl lg:text-2xl xl:text-3xl xl:max-w-5xl">
          {s.subtitle}
        </p>

        {/* 3 phones in a row — centered */}
        <div className="mt-10 flex justify-center gap-6 md:mt-16 md:gap-10 lg:gap-14">
          <PhoneFrame screen="/images/phones/analyze.png" orientation="portrait" />
          <PhoneFrame screen="/images/phones/movement.png" orientation="portrait" />
          <PhoneFrame screen="/images/phones/track.png" orientation="portrait" />
        </div>
      </div>
    </section>
  );
}

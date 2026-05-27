import Image from "next/image";
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

        {/* 3 phones in a row — composite (2 phones) + PhoneFrame */}
        <div className="mt-10 flex flex-col items-center gap-8 md:mt-16 md:flex-row md:justify-center md:items-end md:gap-6 lg:gap-10">
          <Image
            src={s.image}
            alt="StepAhead app screens"
            width={620}
            height={554}
            priority
            className="w-full max-w-sm h-auto md:max-w-md lg:max-w-lg"
          />
          <PhoneFrame screen="/images/phones/movement.png" orientation="portrait" />
        </div>
      </div>
    </section>
  );
}

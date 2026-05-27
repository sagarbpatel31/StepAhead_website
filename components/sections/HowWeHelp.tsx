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

        {/* Phones — all 3 centered */}
        <div className="mt-10 flex justify-center md:mt-16">
          <div className="relative w-full max-w-lg md:max-w-2xl lg:max-w-3xl">
            <Image
              src={s.image}
              alt="StepAhead app screens"
              width={620}
              height={554}
              priority
              className="w-full h-auto"
            />
            {/* 3rd phone — overlaid right side */}
            <div className="absolute bottom-0 right-0 translate-x-1/4">
              <PhoneFrame screen="/images/phones/movement.png" orientation="portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

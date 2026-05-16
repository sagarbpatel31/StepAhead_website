"use client";
import Image from "next/image";
import site from "@/content/site.json";

export default function Hero() {
  const { hero } = site;
  return (
    <section className="relative min-h-[480px] w-full overflow-hidden md:min-h-[560px] lg:min-h-[640px]">
      <Image src={hero.image} alt="" fill priority className="object-cover" />
      <div className="relative z-10 mx-auto flex max-w-[1536px] flex-col gap-6 px-6 pt-24 md:gap-8 md:px-12 md:pt-28 lg:px-20 lg:pt-32">
        <Image
          src={hero.logo}
          alt="StepAhead"
          width={689}
          height={188}
          priority
          className="w-48 md:w-80 lg:w-[450px] xl:w-[689px] h-auto"
        />
        <h1 className="max-w-xl font-sans text-2xl font-bold text-blue-950 md:text-3xl lg:text-4xl xl:max-w-[667px]">
          {hero.title}
        </h1>
        <p className="max-w-lg font-sans text-lg font-normal text-blue-950 md:text-2xl lg:text-3xl xl:max-w-[506px]">
          {hero.subLight}
        </p>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("open-waitlist"))}
          className="btn-cta-hero w-fit font-sans text-base font-bold leading-8 text-blue-950 md:text-xl lg:text-2xl"
        >
          {hero.cta}
        </button>
      </div>
    </section>
  );
}

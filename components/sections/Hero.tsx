import Image from "next/image";
import site from "@/content/site.json";

export default function Hero() {
  const { hero } = site;
  return (
    <section className="relative min-h-[987px] w-full overflow-hidden">
      <Image src={hero.image} alt="" fill priority className="object-cover" />
      <div className="relative z-10 mx-auto flex max-w-frame flex-col gap-8 px-20 pt-44">
        <Image src={hero.logo} alt="StepAhead" width={689} height={188} priority />
        <h1 className="max-w-[667px] font-sans text-4xl font-bold text-blue-950">
          {hero.title}
        </h1>
        <p className="max-w-[506px] font-sans text-3xl font-normal text-blue-950">
          {hero.subLight}
        </p>
        <a href="#cta" className="btn-cta-hero w-fit font-sans text-2xl font-bold leading-10 text-blue-950">
          {hero.cta}
        </a>
      </div>
    </section>
  );
}

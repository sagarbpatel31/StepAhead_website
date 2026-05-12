import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import site from "@/content/site.json";

export default function HowWeHelp() {
  const s = site.howWeHelp;
  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1536px] px-6 md:px-12 lg:px-20">

        <h2 className="text-center font-sans text-3xl font-bold text-blue-950 md:text-4xl lg:text-5xl">
          {s.title}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center font-sans text-lg font-bold leading-snug text-blue-950 md:mt-6 md:text-xl lg:text-2xl xl:text-3xl xl:max-w-5xl">
          {s.subtitle}
        </p>

        {/* Mobile: stacked. Desktop: side by side */}
        <div className="mt-10 flex flex-col items-center gap-10 md:mt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-12">

          {/* Phones — composite + overlay */}
          <div className="relative w-full max-w-sm md:max-w-md lg:max-w-none lg:flex-shrink-0">
            <Image
              src={s.image}
              alt="StepAhead app screens"
              width={620}
              height={554}
              priority
              className="w-full h-auto lg:w-[520px] xl:w-[620px]"
            />
            {/* Purple-framed phone — hidden on mobile, shown md+ */}
            <div className="absolute bottom-0 right-0 hidden md:block md:right-[-60px] lg:right-[-80px]">
              <PhoneFrame screen="/images/phones/movement.png" orientation="portrait" />
            </div>
          </div>

          {/* Testimonial */}
          <figure className="w-full max-w-sm md:max-w-md lg:max-w-[480px] xl:max-w-[500px] lg:flex-shrink-0">
            <div className="mb-6 flex flex-col items-center gap-4">
              <Image
                src={s.testimonial.avatar}
                alt=""
                width={120}
                height={120}
                className="rounded-full object-cover w-20 h-20 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px]"
              />
              <figcaption className="font-sans text-xl font-bold text-blue-950 md:text-2xl">
                {s.testimonial.name}
              </figcaption>
            </div>
            <blockquote className="font-sans text-lg italic leading-relaxed text-blue-950 md:text-xl lg:text-2xl">
              &ldquo;{s.testimonial.quote}&rdquo;
            </blockquote>
          </figure>

        </div>
      </div>
    </section>
  );
}

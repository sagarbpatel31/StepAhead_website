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

        {/* Mobile: stacked. Desktop: side by side */}
        <div className="mt-10 flex flex-col items-center gap-10 md:mt-16 lg:flex-row lg:items-start lg:justify-between lg:gap-8">

          {/* Phones — composite + overlay */}
          <div className="relative w-full max-w-sm md:max-w-md lg:w-auto lg:flex-shrink-0">
            <Image
              src={s.image}
              alt="StepAhead app screens"
              width={620}
              height={554}
              priority
              className="w-full h-auto lg:w-[440px] xl:w-[560px]"
            />
            {/* Purple-framed phone — hidden on mobile, shown lg+ only to avoid overflow */}
            <div className="absolute bottom-0 right-0 hidden lg:block lg:right-[-60px] xl:right-[-80px]">
              <PhoneFrame screen="/images/phones/movement.png" orientation="portrait" />
            </div>
          </div>

          {/* Testimonial */}
          <figure className="w-full min-w-0 max-w-sm md:max-w-md lg:max-w-[420px] xl:max-w-[500px]">
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

import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import site from "@/content/site.json";

export default function HowWeHelp() {
  const s = site.howWeHelp;
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-[1536px] px-20">

        {/* Header */}
        <h2 className="text-center font-sans text-5xl font-bold text-blue-950">
          {s.title}
        </h2>
        <p className="mx-auto mt-6 max-w-6xl text-center font-sans text-3xl font-bold leading-snug text-blue-950">
          {s.subtitle}
        </p>

        {/* Content row */}
        <div className="mt-16 flex items-center justify-between gap-12">

          {/* Left — phones composite + purple-framed overlay */}
          <div className="relative flex-shrink-0">
            {/* help.png: 3-phone composite from Figma */}
            <Image
              src={s.image}
              alt="StepAhead app screens"
              width={620}
              height={554}
              priority
            />
            {/* Purple-framed phone overlapping right edge */}
            <div className="absolute bottom-0 right-[-80px]">
              <PhoneFrame screen="/images/phones/movement.png" orientation="portrait" />
            </div>
          </div>

          {/* Right — testimonial */}
          <figure className="max-w-[500px] flex-shrink-0">
            <div className="mb-6 flex flex-col items-center gap-4">
              <Image
                src={s.testimonial.avatar}
                alt=""
                width={120}
                height={120}
                className="rounded-full object-cover"
              />
              <figcaption className="font-sans text-2xl font-bold text-blue-950">
                {s.testimonial.name}
              </figcaption>
            </div>
            <blockquote className="font-sans text-2xl italic leading-relaxed text-blue-950">
              &ldquo;{s.testimonial.quote}&rdquo;
            </blockquote>
          </figure>

        </div>
      </div>
    </section>
  );
}

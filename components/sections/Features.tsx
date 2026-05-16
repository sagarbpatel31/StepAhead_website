import Image from "next/image";
import site from "@/content/site.json";

export default function Features() {
  return (
    <section className="bg-brand-tint">
      <div className="mx-auto max-w-[1536px] px-6 py-10 md:px-12 md:py-12 lg:px-20 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          {/* Left column — icons + headings + body */}
          <ul className="w-full space-y-6 lg:max-w-[55%]">
            {site.features.map((f) => (
              <li key={f.title} className="flex items-start gap-4 md:gap-5">
                <Image src={f.icon} alt="" width={48} height={48} className="mt-2 shrink-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                <div>
                  <h3 className="font-sans text-xl font-bold text-blue-950 leading-tight md:text-2xl lg:text-3xl xl:text-4xl xl:leading-[71px]">
                    {f.title}
                  </h3>
                  <p className="font-sans text-base font-normal text-blue-950 md:text-lg lg:text-xl xl:text-2xl xl:leading-[51px]">
                    {f.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Right column — phone mockups */}
          <div className="flex justify-center lg:shrink-0">
            <Image
              src="/images/feature-phones.png"
              alt="StepAhead phone mockups"
              width={620}
              height={518}
              priority
              className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-[620px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

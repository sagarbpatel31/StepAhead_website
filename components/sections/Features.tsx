import Image from "next/image";
import site from "@/content/site.json";

export default function Features() {
  return (
    <section className="bg-brand-tint">
      <div className="mx-auto flex max-w-frame items-center justify-between gap-8 px-12 py-24">
        {/* Left column — icons + headings + body */}
        <ul className="w-[820px] space-y-2">
          {site.features.map((f) => (
            <li key={f.title} className="flex items-start gap-5">
              <Image
                src={f.icon}
                alt=""
                width={48}
                height={48}
                className="mt-4 shrink-0"
              />
              <div>
                <h3 className="text-blue-950 font-bold font-sans text-4xl leading-[71.10px]">
                  {f.title}
                </h3>
                <p className="text-blue-950 font-normal font-sans text-2xl leading-[50.79px]">
                  {f.body}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Right column — phone mockups image (792 × 673 per Figma) */}
        <div className="shrink-0">
          <Image
            src="/images/feature-phones.png"
            alt="StepAhead phone mockups"
            width={620}
            height={518}
            priority
          />
        </div>
      </div>
    </section>
  );
}

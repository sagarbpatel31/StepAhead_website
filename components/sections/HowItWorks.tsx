import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import site from "@/content/site.json";

type Step = { title: string; body: string; image: string; extra?: string };

export default function HowItWorks() {
  const s = site.howItWorks;
  const [record, analyze, track] = s.steps as Step[];

  return (
    <section className="bg-gray-100 py-24 text-center">
      <div className="mx-auto max-w-[1536px] px-20">

        {/* Header */}
        <h2 className="font-sans text-5xl font-bold leading-tight text-violet-950">
          {s.title}
        </h2>
        <p className="mx-auto mt-6 font-sans text-3xl font-bold leading-[1.35] text-violet-950">
          {s.subtitle}
        </p>

        {/* Text row — all three headings + bodies on same baseline */}
        <div className="mt-16 grid grid-cols-3 gap-16">
          {[record, analyze, track].map((step) => (
            <div key={step.title} className="flex flex-col items-center">
              <h3 className="font-sans text-3xl font-bold leading-10 text-violet-950">
                {step.title}
              </h3>
              <p className="mt-4 font-sans text-2xl font-medium leading-10 text-violet-950">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Phone row — landscape left, two portraits right, all top-aligned */}
        <div className="mt-10 grid grid-cols-3 items-start gap-16">

          {/* Record — landscape + stick */}
          <div className="flex flex-col items-center mt-24">
            <PhoneFrame screen={record.image} orientation="landscape" />
            {record.extra && (
              <Image src={record.extra} alt="" width={100} height={144} />
            )}
          </div>

          {/* Analyze — portrait */}
          <div className="flex items-start justify-center">
            <PhoneFrame screen={analyze.image} orientation="portrait" />
          </div>

          {/* Track — portrait */}
          <div className="flex items-start justify-center">
            <PhoneFrame screen={track.image} orientation="portrait" />
          </div>

        </div>
      </div>
    </section>
  );
}

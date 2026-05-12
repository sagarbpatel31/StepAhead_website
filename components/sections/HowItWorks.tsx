import Image from "next/image";
import PhoneFrame from "@/components/PhoneFrame";
import site from "@/content/site.json";

type Step = { title: string; body: string; image: string; extra?: string };

export default function HowItWorks() {
  const s = site.howItWorks;
  const [record, analyze, track] = s.steps as Step[];

  return (
    <section className="bg-gray-100 py-16 text-center md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1536px] px-6 md:px-12 lg:px-20">

        <h2 className="font-sans text-3xl font-bold leading-tight text-violet-950 md:text-4xl lg:text-5xl">
          {s.title}
        </h2>
        <p className="mx-auto mt-4 font-sans text-lg font-bold leading-snug text-violet-950 md:mt-6 md:text-xl lg:text-2xl xl:text-3xl">
          {s.subtitle}
        </p>

        {/* Mobile: stacked cards. Desktop: two rows (text + phones) */}
        <div className="mt-10 block lg:hidden">
          {[record, analyze, track].map((step, i) => (
            <div key={step.title} className="mb-12 flex flex-col items-center">
              <h3 className="font-sans text-2xl font-bold text-violet-950">{step.title}</h3>
              <p className="mt-2 max-w-xs font-sans text-lg font-medium text-violet-950">{step.body}</p>
              <div className="mt-6 flex flex-col items-center">
                <PhoneFrame
                  screen={step.image}
                  orientation={i === 0 ? "landscape" : "portrait"}
                  className="max-w-full"
                />
                {step.extra && i === 0 && (
                  <Image src={step.extra} alt="" width={80} height={115} className="mt-1" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout — text row then phone row */}
        <div className="hidden lg:block">
          <div className="mt-12 grid grid-cols-3 gap-8 xl:gap-16">
            {[record, analyze, track].map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <h3 className="font-sans text-2xl font-bold leading-10 text-violet-950 xl:text-3xl">{step.title}</h3>
                <p className="mt-4 font-sans text-lg font-medium leading-8 text-violet-950 xl:text-2xl xl:leading-10">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 items-start gap-8 xl:gap-16">
            <div className="mt-20 xl:mt-24 flex flex-col items-center">
              <PhoneFrame screen={record.image} orientation="landscape" />
              {record.extra && <Image src={record.extra} alt="" width={100} height={144} />}
            </div>
            <div className="flex justify-center">
              <PhoneFrame screen={analyze.image} orientation="portrait" />
            </div>
            <div className="flex justify-center">
              <PhoneFrame screen={track.image} orientation="portrait" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

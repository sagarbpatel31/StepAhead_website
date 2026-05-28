import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Resources — StepAhead" };

const articles = [
  {
    title: "CDC Developmental Milestones",
    source: "CDC",
    href: "https://www.cdc.gov/act-early/milestones/",
    teaser: "Official CDC milestone checklists from 2 months through 5 years.",
  },
  {
    title: "Motor Skill Development",
    source: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/Motor_skill",
    teaser: "Overview of gross and fine motor milestones across infancy and early childhood.",
  },
  {
    title: "When Will Your Baby Start Walking?",
    source: "HealthyChildren / AAP",
    href: "https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx",
    teaser: "AAP guide on what to expect and how to encourage safe walking.",
  },
  {
    title: "Tummy Time Basics",
    source: "HealthyChildren / AAP",
    href: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx",
    teaser: "Why tummy time builds trunk strength and how to do it from day one.",
  },
  {
    title: "Pediatric Physical Therapy",
    source: "APTA",
    href: "https://choosept.com/symptoms-conditions",
    teaser: "When and why to consult a pediatric physical therapist.",
  },
  {
    title: "Infant Crawling",
    source: "Wikipedia",
    href: "https://en.wikipedia.org/wiki/Crawling_(human)",
    teaser: "Crawling styles, timing, and what each variation means.",
  },
  {
    title: "Early Intervention Programs",
    source: "CDC",
    href: "https://www.cdc.gov/act-early/",
    teaser: "Free / low-cost services for children with developmental delays.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white">

        {/* Hero band */}
        <section className="bg-brand-deep px-6 pb-12 pt-36 text-center md:px-12 md:pb-14 md:pt-44 lg:px-20 lg:pb-16 lg:pt-48">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Resources
          </p>
          <h1 className="font-sans text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Learn More About Infant Motor Development
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
            Curated links from trusted clinical and research sources to help families and clinicians stay informed.
          </p>
        </section>

        {/* Arc divider */}
        <div className="bg-brand-deep">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>

        {/* Articles list */}
        <section className="mx-auto max-w-3xl px-6 pb-24 pt-10 md:px-12 lg:px-8">
          <ul className="space-y-5">
            {articles.map((a, i) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex gap-5 rounded-2xl border border-gray-100 bg-brand-tint p-6 transition hover:border-brand-deep/20 hover:shadow-md"
                >
                  {/* Number */}
                  <span className="shrink-0 font-sans text-2xl font-bold text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {/* Content */}
                  <div>
                    <h2 className="font-sans text-base font-bold text-brand-deep group-hover:underline md:text-lg">
                      {a.title}
                    </h2>
                    <p className="mt-1 font-sans text-sm text-gray-500">{a.source}</p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                      {a.teaser}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>

      </main>
      <Footer />
    </>
  );
}

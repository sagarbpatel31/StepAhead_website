import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "Resources — StepAhead" };

type Article = {
  title: string;
  source: string;
  domain: string;
  href: string;
  teaser: string;
  category: string;
  categoryColor: string;
  featured?: boolean;
};

const articles: Article[] = [
  {
    title: "CDC Developmental Milestones",
    source: "CDC",
    domain: "cdc.gov",
    href: "https://www.cdc.gov/act-early/milestones/",
    teaser: "Official CDC milestone checklists from 2 months through 5 years. The gold-standard reference for tracking whether your child is hitting key developmental markers on time.",
    category: "Milestones",
    categoryColor: "bg-blue-100 text-blue-700",
    featured: true,
  },
  {
    title: "Motor Skill Development",
    source: "Wikipedia",
    domain: "wikipedia.org",
    href: "https://en.wikipedia.org/wiki/Motor_skill",
    teaser: "Comprehensive overview of gross and fine motor milestones across infancy and early childhood — how the nervous system matures and translates into movement.",
    category: "Motor Development",
    categoryColor: "bg-orange-100 text-orange-700",
  },
  {
    title: "When Will Your Baby Start Walking?",
    source: "HealthyChildren · AAP",
    domain: "healthychildren.org",
    href: "https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx",
    teaser: "AAP-backed guide on what to expect at each stage and how to encourage safe, confident first steps — with red flags parents should watch for.",
    category: "Milestones",
    categoryColor: "bg-blue-100 text-blue-700",
    featured: true,
  },
  {
    title: "Tummy Time Basics",
    source: "HealthyChildren · AAP",
    domain: "healthychildren.org",
    href: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx",
    teaser: "Why tummy time builds trunk strength, neck control, and shoulder stability — and how to start from day one, even with a fussy baby.",
    category: "Tummy Time",
    categoryColor: "bg-green-100 text-green-700",
  },
  {
    title: "Pediatric Physical Therapy",
    source: "APTA · ChoosPT",
    domain: "choosept.com",
    href: "https://choosept.com/symptoms-conditions",
    teaser: "When and why to consult a pediatric physical therapist. Clear guidance on conditions, referral pathways, and what to expect from an evaluation.",
    category: "Therapy",
    categoryColor: "bg-purple-100 text-purple-700",
  },
  {
    title: "Infant Crawling",
    source: "Wikipedia",
    domain: "wikipedia.org",
    href: "https://en.wikipedia.org/wiki/Crawling_(human)",
    teaser: "Crawling styles, typical timing, and what each variation — belly crawl, classic crawl, bottom shuffle — means for motor development.",
    category: "Motor Development",
    categoryColor: "bg-orange-100 text-orange-700",
  },
  {
    title: "Early Intervention Programs",
    source: "CDC",
    domain: "cdc.gov",
    href: "https://www.cdc.gov/act-early/",
    teaser: "Free and low-cost federal and state services for children under 3 with developmental delays. How to refer, what to expect, and why early action matters.",
    category: "Early Intervention",
    categoryColor: "bg-teal-100 text-teal-700",
    featured: true,
  },
];

const stats = [
  { value: "7", label: "Curated resources" },
  { value: "4", label: "Trusted sources" },
  { value: "100%", label: "Free to access" },
];

const sourceColors: Record<string, string> = {
  "cdc.gov": "bg-blue-600",
  "wikipedia.org": "bg-gray-600",
  "healthychildren.org": "bg-green-600",
  "choosept.com": "bg-red-600",
};

export default function ResourcesPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white">

        {/* Hero */}
        <section className="bg-brand-deep px-6 pb-16 pt-36 text-center md:px-12 md:pb-20 md:pt-44 lg:px-20 lg:pb-24 lg:pt-48">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Resources
          </p>
          <h1 className="font-sans text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Trusted Reads on Infant Motor Development
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg">
            Hand-picked from the CDC, AAP, and leading clinical organisations — everything parents and clinicians need to stay informed.
          </p>

          {/* Stats row */}
          <div className="mx-auto mt-12 flex max-w-lg justify-center gap-10 md:gap-16">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="font-sans text-3xl font-bold text-white md:text-4xl">{s.value}</span>
                <span className="font-sans text-xs text-white/60 md:text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Arc */}
        <div className="bg-brand-deep">
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
            <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="white" />
          </svg>
        </div>

        {/* Featured strip */}
        <section className="mx-auto max-w-5xl px-6 pt-10 md:px-12 lg:px-8">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Featured
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {articles.filter((a) => a.featured).map((a) => (
              <a
                key={a.href}
                href={a.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-4 rounded-2xl bg-brand-deep p-6 transition hover:opacity-90"
              >
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${a.domain}&sz=64`}
                    alt={a.source}
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                  <span className={`rounded-full px-2.5 py-0.5 font-sans text-xs font-semibold ${a.categoryColor}`}>
                    {a.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-base font-bold text-white md:text-lg">{a.title}</h3>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-white/70">{a.teaser}</p>
                </div>
                <div className="flex items-center gap-1 font-sans text-xs font-semibold text-brand-orange">
                  {a.source}
                  <svg className="h-3 w-3 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* All articles */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-14 md:px-12 lg:px-8">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            All Resources
          </p>
          <ul className="space-y-4">
            {articles.map((a, i) => (
              <li key={a.href}>
                <a
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-5 rounded-2xl border border-gray-100 bg-brand-tint p-5 transition hover:border-brand-deep/20 hover:shadow-md md:p-6"
                >
                  {/* Source favicon + number */}
                  <div className="flex shrink-0 flex-col items-center gap-2 pt-0.5">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${sourceColors[a.domain] ?? "bg-gray-500"}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${a.domain}&sz=64`}
                        alt={a.source}
                        width={22}
                        height={22}
                        className="rounded"
                      />
                    </div>
                    <span className="font-sans text-xs font-bold text-brand-deep/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-sans text-base font-bold text-brand-deep group-hover:underline md:text-lg">
                        {a.title}
                      </h2>
                      <span className={`rounded-full px-2.5 py-0.5 font-sans text-xs font-semibold ${a.categoryColor}`}>
                        {a.category}
                      </span>
                      {a.featured && (
                        <span className="rounded-full bg-brand-orange/10 px-2.5 py-0.5 font-sans text-xs font-semibold text-brand-orange">
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 font-sans text-xs font-medium text-gray-400">{a.source}</p>
                    <p className="mt-2 font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                      {a.teaser}
                    </p>
                  </div>

                  {/* Arrow */}
                  <svg className="mt-1 h-5 w-5 shrink-0 text-brand-deep/30 transition group-hover:translate-x-1 group-hover:text-brand-deep" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
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

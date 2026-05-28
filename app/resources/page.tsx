"use client";
import { useState } from "react";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

type Article = {
  title: string;
  source: string;
  domain: string;
  href: string;
  teaser: string;
  category: string;
  featured?: boolean;
};

const CATEGORY_COLORS: Record<string, string> = {
  "Milestones":         "bg-blue-100 text-blue-700",
  "Motor Development":  "bg-orange-100 text-orange-700",
  "Tummy Time":         "bg-green-100 text-green-700",
  "Therapy":            "bg-purple-100 text-purple-700",
  "Early Intervention": "bg-teal-100 text-teal-700",
  "Cerebral Palsy":     "bg-rose-100 text-rose-700",
  "Research":           "bg-indigo-100 text-indigo-700",
  "Parent Guides":      "bg-amber-100 text-amber-700",
};

const SOURCE_BG: Record<string, string> = {
  "cdc.gov":                       "bg-blue-600",
  "wikipedia.org":                 "bg-gray-600",
  "healthychildren.org":           "bg-green-600",
  "choosept.com":                  "bg-red-600",
  "pathways.org":                  "bg-violet-600",
  "zerotothree.org":               "bg-amber-600",
  "cpresearchnetwork.org":         "bg-rose-700",
  "general-movements-trust.info":  "bg-indigo-700",
  "nichd.nih.gov":                 "bg-blue-800",
  "cparf.org":                     "bg-rose-600",
  "who.int":                       "bg-sky-600",
  "publications.aap.org":          "bg-emerald-700",
};

const articles: Article[] = [
  // ── Milestones ──────────────────────────────────────────────────────────────
  {
    title: "CDC Developmental Milestones",
    source: "CDC", domain: "cdc.gov",
    href: "https://www.cdc.gov/act-early/milestones/",
    teaser: "Gold-standard milestone checklists from 2 months through 5 years. Downloadable PDFs for every well-child visit.",
    category: "Milestones", featured: true,
  },
  {
    title: "When Will Your Baby Start Walking?",
    source: "HealthyChildren · AAP", domain: "healthychildren.org",
    href: "https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx",
    teaser: "AAP guide on expected walking timelines, encouraging first steps, and red flags every parent should know.",
    category: "Milestones", featured: true,
  },
  {
    title: "AAP Developmental Surveillance Policy",
    source: "AAP Publications", domain: "publications.aap.org",
    href: "https://publications.aap.org/pediatrics/article/145/1/e20193449/36917/",
    teaser: "Official policy statement on how and when pediatricians should screen, monitor, and refer for developmental delays.",
    category: "Milestones",
  },
  {
    title: "WHO Motor Development Norms",
    source: "World Health Organization", domain: "who.int",
    href: "https://www.who.int/tools/child-growth-standards/standards/motor-development-milestones",
    teaser: "Normative motor milestone data from the WHO Multicentre Growth Reference Study across 6 countries.",
    category: "Milestones",
  },

  // ── Motor Development ───────────────────────────────────────────────────────
  {
    title: "Motor Skill Development",
    source: "Wikipedia", domain: "wikipedia.org",
    href: "https://en.wikipedia.org/wiki/Motor_skill",
    teaser: "Comprehensive overview of gross and fine motor development — how the nervous system matures and translates into movement.",
    category: "Motor Development",
  },
  {
    title: "Infant Crawling",
    source: "Wikipedia", domain: "wikipedia.org",
    href: "https://en.wikipedia.org/wiki/Crawling_(human)",
    teaser: "Crawling styles, typical timing, and what each variation — belly crawl, classic, bottom shuffle — means for development.",
    category: "Motor Development",
  },
  {
    title: "Zero to Three — Movement & Play",
    source: "Zero to Three", domain: "zerotothree.org",
    href: "https://www.zerotothree.org/early-development/",
    teaser: "Research-backed parent guides on physical play, brain development, and motor learning in the first 36 months.",
    category: "Motor Development",
  },

  // ── Tummy Time ──────────────────────────────────────────────────────────────
  {
    title: "Tummy Time Basics",
    source: "HealthyChildren · AAP", domain: "healthychildren.org",
    href: "https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Back-to-Sleep-Tummy-to-Play.aspx",
    teaser: "Why tummy time builds trunk strength and shoulder stability — and how to start from day one, even with a fussy baby.",
    category: "Tummy Time",
  },
  {
    title: "Tummy Time Milestone Guide",
    source: "Pathways.org", domain: "pathways.org",
    href: "https://pathways.org/growth-development/0-3-months/tummy-time/",
    teaser: "Step-by-step tummy time progressions from birth to crawling, with therapist tips and video demonstrations.",
    category: "Tummy Time",
  },

  // ── Therapy ─────────────────────────────────────────────────────────────────
  {
    title: "Pediatric Physical Therapy",
    source: "APTA · ChoosPT", domain: "choosept.com",
    href: "https://choosept.com/symptoms-conditions",
    teaser: "When and why to consult a pediatric PT. Clear guidance on conditions, referral pathways, and what to expect at an evaluation.",
    category: "Therapy",
  },
  {
    title: "Child Development Tracker",
    source: "Pathways.org", domain: "pathways.org",
    href: "https://pathways.org/all-ages/",
    teaser: "Free therapist-designed milestone tracker and activity library across motor, sensory, and communication domains.",
    category: "Therapy",
  },

  // ── Early Intervention ──────────────────────────────────────────────────────
  {
    title: "Early Intervention Programs",
    source: "CDC", domain: "cdc.gov",
    href: "https://www.cdc.gov/act-early/",
    teaser: "Free and low-cost federal and state services for children under 3 with developmental delays — how to refer and what to expect.",
    category: "Early Intervention", featured: true,
  },

  // ── Cerebral Palsy ──────────────────────────────────────────────────────────
  {
    title: "General Movement Assessment",
    source: "General Movements Trust", domain: "general-movements-trust.info",
    href: "https://www.general-movements-trust.info/",
    teaser: "Prechtl's GMA — the most sensitive early predictor of cerebral palsy, detectable in infants as young as 9–20 weeks.",
    category: "Cerebral Palsy", featured: true,
  },
  {
    title: "CP Research Network",
    source: "CPRF", domain: "cpresearchnetwork.org",
    href: "https://cpresearchnetwork.org/",
    teaser: "North America's largest registry and biobank for cerebral palsy research, driving earlier diagnosis and better clinical outcomes.",
    category: "Cerebral Palsy",
  },
  {
    title: "Cerebral Palsy Alliance Research",
    source: "CP Alliance", domain: "cparf.org",
    href: "https://cparf.org/",
    teaser: "Latest clinical trials and translational research focused on earlier detection, intervention, and better outcomes for children with CP.",
    category: "Cerebral Palsy",
  },

  // ── Research ─────────────────────────────────────────────────────────────────
  {
    title: "NICHD Child Development Research",
    source: "NIH · NICHD", domain: "nichd.nih.gov",
    href: "https://www.nichd.nih.gov/health/topics/childdev",
    teaser: "NIH research portfolio on typical and atypical motor development, risk factors, and the science behind early intervention outcomes.",
    category: "Research",
  },

  // ── Parent Guides ────────────────────────────────────────────────────────────
  {
    title: "Baby Development Month by Month",
    source: "Zero to Three", domain: "zerotothree.org",
    href: "https://www.zerotothree.org/early-development/",
    teaser: "Plain-language monthly summaries of what to expect cognitively, physically, and socially — grounded in developmental science.",
    category: "Parent Guides",
  },
];

const ALL = "All";
const categories = [ALL, ...Array.from(new Set(articles.map((a) => a.category)))];

const stats = [
  { value: String(articles.length), label: "Curated resources" },
  { value: String(new Set(articles.map((a) => a.domain)).size), label: "Trusted sources" },
  { value: String(new Set(articles.map((a) => a.category)).size), label: "Topic areas" },
  { value: "100%", label: "Free to access" },
];

export default function ResourcesPage() {
  const [active, setActive] = useState(ALL);
  const visible = active === ALL ? articles : articles.filter((a) => a.category === active);
  const featured = articles.filter((a) => a.featured);

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
            Hand-picked from the CDC, AAP, NIH, and leading clinical organisations — everything parents and clinicians need to stay informed.
          </p>

          {/* Stats */}
          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap justify-center gap-8 md:gap-14">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1">
                <span className="font-sans text-3xl font-bold text-white md:text-4xl">{s.value}</span>
                <span className="font-sans text-xs text-white/50 md:text-sm">{s.label}</span>
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

        {/* Featured */}
        <section className="mx-auto max-w-5xl px-6 pt-10 md:px-12 lg:px-8">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            Featured
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((a) => (
              <a key={a.href} href={a.href} target="_blank" rel="noopener noreferrer"
                className="group flex flex-col justify-between gap-4 rounded-2xl bg-brand-deep p-5 transition hover:opacity-90">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://www.google.com/s2/favicons?domain=${a.domain}&sz=64`}
                    alt={a.source} width={22} height={22} className="rounded" />
                  <span className={`rounded-full px-2 py-0.5 font-sans text-xs font-semibold ${CATEGORY_COLORS[a.category]}`}>
                    {a.category}
                  </span>
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold leading-snug text-white md:text-base">{a.title}</h3>
                  <p className="mt-1.5 font-sans text-xs leading-relaxed text-white/60">{a.teaser}</p>
                </div>
                <p className="flex items-center gap-1 font-sans text-xs font-semibold text-brand-orange">
                  {a.source}
                  <svg className="h-3 w-3 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Filter tabs + list */}
        <section className="mx-auto max-w-5xl px-6 pb-24 pt-14 md:px-12 lg:px-8">
          <p className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            All Resources
          </p>

          {/* Category filters */}
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} onClick={() => setActive(c)}
                className={`rounded-full px-4 py-1.5 font-sans text-sm font-semibold transition ${
                  active === c
                    ? "bg-brand-deep text-white shadow"
                    : "bg-brand-tint text-brand-deep hover:bg-brand-deep/10"
                }`}>
                {c}
                {c !== ALL && (
                  <span className="ml-1.5 font-normal opacity-60">
                    {articles.filter((a) => a.category === c).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {visible.map((a, i) => (
              <a key={a.href} href={a.href} target="_blank" rel="noopener noreferrer"
                className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-brand-tint p-5 transition hover:border-brand-deep/20 hover:shadow-md">

                {/* Icon */}
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${SOURCE_BG[a.domain] ?? "bg-gray-500"}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`https://www.google.com/s2/favicons?domain=${a.domain}&sz=64`}
                    alt={a.source} width={24} height={24} className="rounded" />
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start gap-1.5">
                    <h2 className="font-sans text-sm font-bold text-brand-deep group-hover:underline md:text-base">
                      {a.title}
                    </h2>
                  </div>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5">
                    <span className={`rounded-full px-2 py-0.5 font-sans text-xs font-semibold ${CATEGORY_COLORS[a.category]}`}>
                      {a.category}
                    </span>
                    {a.featured && (
                      <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 font-sans text-xs font-semibold text-brand-orange">
                        Featured
                      </span>
                    )}
                    <span className="font-sans text-xs text-gray-400">{a.source}</span>
                  </div>
                  <p className="mt-2 font-sans text-sm leading-relaxed text-gray-600">
                    {a.teaser}
                  </p>
                </div>

                {/* Arrow */}
                <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep/30 transition group-hover:translate-x-1 group-hover:text-brand-deep"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            ))}
          </div>

          {visible.length === 0 && (
            <p className="py-12 text-center font-sans text-sm text-gray-400">No resources in this category yet.</p>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}

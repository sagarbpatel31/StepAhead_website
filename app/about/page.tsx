import Image from "next/image";
import NavBar from "@/components/sections/NavBar";
import Footer from "@/components/sections/Footer";

export const metadata = { title: "About Us — StepAhead" };

const team = [
  {
    name: "Dalina Delfing",
    title: "CEO & Co-Founder",
    img: "/images/team/dalina.jpg",
    objectPosition: "center top",
    bio: "Kinesiology PhD, Columbia's Center for Cerebral Palsy Research. Lived experience with cerebral palsy that went undetected in early childhood. Spent years researching computer vision and pediatric rehabilitation.",
  },
  {
    name: "Sagar Patel",
    title: "CTO & Co-Founder",
    img: "/images/team/sagar.jpg",
    objectPosition: "center 12%",
    bio: "AI, computer vision, and production software systems expert. Builds the technology that turns everyday video into structured, shareable movement observations.",
  },
];

const sections = [
  {
    label: "Our Story",
    body: "StepAhead was founded by Dalina Delfing and Sagar Patel. Dalina, a kinesiology PhD from Columbia's Center for Cerebral Palsy Research, has lived experience with cerebral palsy that went undetected in her own early childhood. After years of research at the intersection of computer vision and pediatric rehabilitation, she recognized a gap no tool had filled: families needed a way to document what they were observing, and clinicians lacked the objective movement data needed to make informed recommendations and treatment decisions. Together with Sagar, whose expertise spans AI, computer vision, and production software systems, they built StepAhead — a smartphone-based tool that turns everyday video into structured, shareable movement observations.",
  },
  {
    label: "Our Mission",
    body: "StepAhead exists to help families and clinicians notice more, earlier. Our tool is designed to support — not replace — clinical judgment. By giving parents a way to capture and track movement patterns over time, and giving clinicians structured observations to inform their assessments, we help ensure no red flag goes unshared and no referral comes too late.",
  },
  {
    label: "Our Values",
    body: "Every child deserves early support. We're here to make sure nothing gets in the way of that. StepAhead is an observational tool grounded in peer-reviewed movement science. Every feature we build is designed with one principle in mind: get the right information to the right clinician at the right time, so families can access the care their child may need.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <NavBar />

      {/* Hero — dark band */}
      <section className="bg-brand-deep px-6 pb-20 pt-40 md:px-12 md:pb-24 md:pt-48 lg:px-20 lg:pb-28 lg:pt-52">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            About StepAhead
          </p>
          <h1 className="font-sans text-3xl font-bold leading-snug text-white md:text-4xl lg:text-5xl xl:text-6xl">
            Built for the children who can&apos;t wait, and the families who never stopped looking.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl font-sans text-base leading-relaxed text-white/70 md:text-lg lg:text-xl">
            StepAhead helps parents and clinicians observe, track, and document movement patterns in infants and young children. It supports clinical conversations — it doesn&apos;t replace them.
          </p>
        </div>
      </section>

      {/* Divider arc */}
      <div className="bg-brand-deep">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="block w-full" preserveAspectRatio="none">
          <path d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

      {/* Story / Mission / Values */}
      <section className="px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-4xl space-y-16">
          {sections.map((s, i) => (
            <div key={s.label} className={`flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-16 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              {/* Label pill */}
              <div className="lg:w-48 lg:shrink-0 lg:pt-1">
                <span className="inline-block rounded-full bg-brand-tint px-4 py-1.5 font-sans text-sm font-bold text-brand-deep">
                  {s.label}
                </span>
              </div>
              {/* Body */}
              <p className="font-sans text-base leading-relaxed text-gray-700 md:text-lg lg:text-xl">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-brand-tint px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 text-center font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
            The Team
          </p>
          <h2 className="mb-12 text-center font-sans text-3xl font-bold text-brand-deep md:text-4xl">
            Our Founders
          </h2>

          <div className="flex flex-col items-center gap-12 sm:flex-row sm:justify-center sm:gap-16 lg:gap-24">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                {/* Photo */}
                <div className="relative mb-5 h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-48 md:w-48">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: member.objectPosition }}
                  />
                </div>
                {/* Name + title */}
                <h3 className="font-sans text-xl font-bold text-brand-deep md:text-2xl">
                  {member.name}
                </h3>
                <p className="mt-1 font-sans text-sm font-semibold text-brand-orange md:text-base">
                  {member.title}
                </p>
                {/* Bio */}
                <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-gray-600 md:text-base">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA band */}
      <section className="bg-brand-deep px-6 py-14 text-center md:px-12 md:py-16 lg:py-20">
        <p className="mx-auto max-w-2xl font-sans text-lg font-bold leading-snug text-white md:text-xl lg:text-2xl">
          Every child deserves early support. We&apos;re here to make sure nothing gets in the way of that.
        </p>
        <a
          href="/waitlist"
          className="btn-cta mt-8 inline-block font-sans text-base font-bold"
        >
          Join the Waitlist
        </a>
      </section>

      <Footer />
    </div>
  );
}

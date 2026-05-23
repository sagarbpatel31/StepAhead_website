import Image from "next/image";

const team = [
  {
    name: "Dalina Delfing",
    title: "CEO & Co-Founder",
    img: "/images/team/dalina.jpg",
    objectPosition: "center top",
    bio: "Dalina holds a PhD in Kinesiology from Columbia University's Center for Cerebral Palsy Research, where her work sits at the intersection of computer vision, biomechanics, and pediatric rehabilitation. She has lived experience with cerebral palsy that went undetected in early childhood — this tool exists because she knows firsthand what families and clinicians are missing.",
  },
  {
    name: "Sagar Patel",
    title: "CTO & Co-Founder",
    img: "/images/team/sagar.jpg",
    objectPosition: "center top",
    bio: "Sagar brings deep expertise in computer vision, embedded AI, and production software systems. He owns StepAhead's full technical stack, from model training to mobile app, and has built and shipped AI pipelines across the complete product lifecycle.",
  },
];

export default function OurTeam() {
  return (
    <section className="bg-white px-6 pt-10 pb-2 md:px-12 md:pt-12 md:pb-4 lg:px-20 lg:pt-16 lg:pb-6">
      <div className="mx-auto max-w-[1182px]">

        {/* Heading */}
        <p className="mb-2 text-center font-sans text-xs font-semibold uppercase tracking-widest text-brand-orange">
          The People Behind It
        </p>
        <h2 className="mb-12 text-center font-sans text-3xl font-bold text-brand-deep md:text-4xl lg:text-5xl">
          Our Team
        </h2>

        {/* Cards */}
        <div className="flex flex-col gap-10 md:flex-row md:gap-8 lg:gap-16">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-1 flex-col items-center gap-5 rounded-2xl bg-brand-tint px-8 py-10 text-center md:items-start md:text-left"
            >
              {/* Photo */}
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-lg md:h-32 md:w-32">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                  style={{ objectPosition: member.objectPosition }}
                />
              </div>

              {/* Name + title */}
              <div>
                <h3 className="font-sans text-xl font-bold text-brand-deep md:text-2xl">
                  {member.name}
                </h3>
                <p className="mt-0.5 font-sans text-sm font-semibold text-brand-orange md:text-base">
                  {member.title}
                </p>
              </div>

              {/* Bio */}
              <p className="font-sans text-sm leading-relaxed text-gray-600 md:text-base lg:text-lg">
                {member.bio}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

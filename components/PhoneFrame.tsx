import Image from "next/image";

type Props = {
  screen: string;
  orientation?: "portrait" | "landscape";
  className?: string;
};

// Portrait native: 195×422. Landscape native: 422×195.
// On mobile we scale down via CSS transform so fixed px layout doesn't overflow.
// scale() shrinks visually without affecting document flow — wrap in a sized container.

export default function PhoneFrame({
  screen,
  orientation = "portrait",
  className = "",
}: Props) {
  if (orientation === "landscape") {
    return (
      // Outer box reserves space at scaled size (mobile: 0.7× = ~295×137, md: 0.85× = ~359×166, lg+: 1×)
      <div className={`relative ${className} w-[295px] h-[137px] md:w-[359px] md:h-[166px] lg:w-[422px] lg:h-[195px]`}>
        <div
          className="absolute left-0 top-0 origin-top-left scale-[0.7] md:scale-[0.85] lg:scale-100"
          style={{ width: 422, height: 195 }}
        >
          <div className="absolute" style={{ left: 11, top: 11, width: 400, height: 173, overflow: "hidden", borderRadius: 18 }}>
            <Image src={screen} alt="" fill className="object-cover" sizes="400px" />
          </div>
          <Image
            src="/images/phones/frame-landscape.svg"
            alt=""
            width={422}
            height={195}
            className="absolute inset-0 pointer-events-none"
            style={{ width: 422, height: 195 }}
          />
        </div>
      </div>
    );
  }

  // Portrait native 195×422
  // mobile: 0.75× = ~146×317, md: 0.85× = ~166×359, lg+: 1×
  return (
    <div className={`relative ${className} w-[146px] h-[317px] md:w-[166px] md:h-[359px] lg:w-[195px] lg:h-[422px]`}>
      <div
        className="absolute left-0 top-0 origin-top-left scale-[0.75] md:scale-[0.85] lg:scale-100"
        style={{ width: 195, height: 422 }}
      >
        <div className="absolute" style={{ left: 11, top: 11, width: 173, height: 400, overflow: "hidden", borderRadius: 18 }}>
          <Image src={screen} alt="" fill className="object-cover" sizes="173px" />
        </div>
        <Image
          src="/images/phones/frame-portrait.svg"
          alt=""
          width={195}
          height={422}
          className="absolute inset-0 pointer-events-none"
          style={{ width: 195, height: 422 }}
        />
      </div>
    </div>
  );
}

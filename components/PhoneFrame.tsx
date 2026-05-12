import Image from "next/image";

type Props = {
  screen: string;
  orientation?: "portrait" | "landscape";
  className?: string;
};

export default function PhoneFrame({
  screen,
  orientation = "portrait",
  className = "",
}: Props) {
  if (orientation === "landscape") {
    // Native: 422×195. Scale: 0.7 mobile, 0.85 md, 1.0 lg+
    return (
      <div className={`relative ${className} h-[137px] w-[295px] md:h-[166px] md:w-[359px] lg:h-[195px] lg:w-[422px]`}>
        <div
          className="absolute left-0 top-0 origin-top-left scale-[0.7] md:scale-[0.85] lg:scale-100"
          style={{ width: 422, height: 195 }}
        >
          {/* Screen — plain img avoids Next fill positioning issues */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={screen}
            alt=""
            style={{ position: "absolute", left: 11, top: 11, width: 400, height: 173, borderRadius: 18, objectFit: "cover" }}
          />
          {/* Frame overlay */}
          <Image
            src="/images/phones/frame-landscape.svg"
            alt=""
            width={422}
            height={195}
            className="pointer-events-none absolute inset-0"
            style={{ width: 422, height: 195 }}
          />
        </div>
      </div>
    );
  }

  // Portrait native 195×422. Scale: 0.75 mobile, 0.85 md, 1.0 lg+
  return (
    <div className={`relative ${className} h-[317px] w-[146px] md:h-[359px] md:w-[166px] lg:h-[422px] lg:w-[195px]`}>
      <div
        className="absolute left-0 top-0 origin-top-left scale-[0.75] md:scale-[0.85] lg:scale-100"
        style={{ width: 195, height: 422 }}
      >
        {/* Screen */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={screen}
          alt=""
          style={{ position: "absolute", left: 11, top: 11, width: 173, height: 400, borderRadius: 18, objectFit: "cover" }}
        />
        {/* Frame overlay */}
        <Image
          src="/images/phones/frame-portrait.svg"
          alt=""
          width={195}
          height={422}
          className="pointer-events-none absolute inset-0"
          style={{ width: 195, height: 422 }}
        />
      </div>
    </div>
  );
}

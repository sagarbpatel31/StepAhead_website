import Image from "next/image";

type Props = {
  screen: string;
  orientation?: "portrait" | "landscape";
  className?: string;
};

// Screen PNGs are Figma exports that already include the app UI.
// We composite them inside an SVG iPhone frame overlay.
// Portrait frame cutout: inset ~3.6% each side from 195×422 container → screen at x=11,y=11 size 173×400
// Landscape frame cutout: inset ~3.6% → screen at x=11,y=11 size 400×173

export default function PhoneFrame({
  screen,
  orientation = "portrait",
  className = "",
}: Props) {
  if (orientation === "landscape") {
    // record-phone.png: 790×366 — render to fill cutout at 400×173
    return (
      <div className={`relative ${className}`} style={{ width: 422, height: 195 }}>
        {/* Screen behind frame */}
        <div className="absolute" style={{ left: 11, top: 11, width: 400, height: 173, overflow: "hidden", borderRadius: 18 }}>
          <Image
            src={screen}
            alt=""
            fill
            className="object-cover"
            sizes="400px"
          />
        </div>
        {/* Frame overlay */}
        <Image
          src="/images/phones/frame-landscape.svg"
          alt=""
          width={422}
          height={195}
          className="absolute inset-0 pointer-events-none"
          style={{ width: 422, height: 195 }}
        />
      </div>
    );
  }

  // Portrait — analyze: 352×783, track: 347×770
  // Container 195×422, cutout inset 11px each side → 173×400
  return (
    <div className={`relative ${className}`} style={{ width: 195, height: 422 }}>
      {/* Screen behind frame */}
      <div className="absolute" style={{ left: 11, top: 11, width: 173, height: 400, overflow: "hidden", borderRadius: 18 }}>
        <Image
          src={screen}
          alt=""
          fill
          className="object-cover"
          sizes="173px"
        />
      </div>
      {/* Frame overlay */}
      <Image
        src="/images/phones/frame-portrait.svg"
        alt=""
        width={195}
        height={422}
        className="absolute inset-0 pointer-events-none"
        style={{ width: 195, height: 422 }}
      />
    </div>
  );
}

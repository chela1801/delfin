import Image from "next/image";

interface HeroPhotoProps {
  src?: string;
  objectPosition?: string;
}

export default function HeroPhoto({ src = "/hero-bg.jpg", objectPosition = "center" }: HeroPhotoProps) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ opacity: 0.85, filter: "blur(2px)" }}
      >
        <Image
          src={src}
          alt=""
          fill
          className="object-cover"
          style={{ objectPosition }}
          priority
        />
      </div>

      {/* Vinjeta + prijelazi */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Radijalna vinjeta — tamni rubove, ostavlja centar */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 80% at 55% 45%, transparent 15%, rgba(0,0,0,0.52) 100%)",
          }}
        />
        {/* Donji prijelaz — spaja se s krivinom */}
        <div
          className="absolute inset-x-0 bottom-0 h-2/5"
          style={{
            background: "linear-gradient(to top, rgba(10,45,110,0.96) 0%, transparent 100%)",
          }}
        />
        {/* Gornji fade */}
        <div
          className="absolute inset-x-0 top-0 h-32"
          style={{
            background: "linear-gradient(to bottom, rgba(255,255,255,0.28) 0%, transparent 100%)",
          }}
        />
      </div>
    </>
  );
}

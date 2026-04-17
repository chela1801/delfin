/**
 * HeroBg — animirana pozadina za hero i bitne CTA sekcije.
 * Statična varijanta: samo bg-[var(--color-primary)] bez ove komponente.
 */
export default function HeroBg() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">

      {/* ── Bazni blobovi — sporo lebdenje ─────────────── */}
      <div
        className="absolute bottom-[-6rem] left-[6%] w-[540px] h-[540px] rounded-full bg-[var(--color-secondary)] opacity-50 blur-2xl"
        style={{
          animation: "blob-drift 13s ease-in-out infinite",
          willChange: "transform",
        }}
      />
      <div
        className="absolute bottom-[-10rem] left-[36%] w-[660px] h-[660px] rounded-full bg-[#2563EB] opacity-35 blur-2xl"
        style={{
          animation: "blob-drift-alt 18s ease-in-out infinite",
          willChange: "transform",
        }}
      />

      {/* ── Pulse val — 3 prstena, delay = 6s / 3 = 2s ─ */}
      <div
        className="absolute bottom-[-4rem] left-[10%] w-[400px] h-[400px] rounded-full bg-[var(--color-secondary)] blur-3xl"
        style={{
          animation: "pulse-rise 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "0s",
          willChange: "transform, opacity",
        }}
      />
      <div
        className="absolute bottom-[-4rem] left-[33%] w-[440px] h-[440px] rounded-full bg-[#2563EB] blur-3xl"
        style={{
          animation: "pulse-rise 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "2s",
          willChange: "transform, opacity",
        }}
      />
      <div
        className="absolute bottom-[-4rem] left-[54%] w-[380px] h-[380px] rounded-full bg-[var(--color-secondary)] blur-3xl"
        style={{
          animation: "pulse-rise 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
          animationDelay: "4s",
          willChange: "transform, opacity",
        }}
      />

    </div>
  );
}

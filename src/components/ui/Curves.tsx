/* Shared SVG curve dividers — koriste se između sekcija na svim stranicama */

interface CurveProps {
  fill: string;
  stroke?: string;
  heroShadow?: boolean;
}

export function CurveRight({ fill, stroke = "#D1DCF0", heroShadow = false }: CurveProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-20 block"
        xmlns="http://www.w3.org/2000/svg"
        style={heroShadow ? { overflow: "visible" } : undefined}
      >
        {heroShadow && (
          <defs>
            <filter id="hero-curve-shadow" x="0%" y="-200%" width="100%" height="350%">
              <feDropShadow dx="0" dy="-14" stdDeviation="16" floodColor="rgba(0,0,0,0.42)" />
            </filter>
          </defs>
        )}
        <path
          d="M0,0 Q480,80 1440,22 L1440,80 L0,80 Z"
          fill={fill}
          filter={heroShadow ? "url(#hero-curve-shadow)" : undefined}
        />
        <path d="M0,0 Q480,80 1440,22" fill="none" stroke={stroke} strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function CurveLeft({ fill, stroke = "#D1DCF0" }: CurveProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 block" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,22 Q960,80 1440,0 L1440,80 L0,80 Z" fill={fill} />
        <path d="M0,22 Q960,80 1440,0" fill="none" stroke={stroke} strokeWidth="1.5" />
      </svg>
    </div>
  );
}

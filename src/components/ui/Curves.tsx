/* Shared SVG curve dividers — koriste se između sekcija na svim stranicama */

export function CurveRight({ fill }: { fill: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 block" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 Q480,80 1440,22 L1440,80 L0,80 Z" fill={fill} />
        <path d="M0,0 Q480,80 1440,22" fill="none" stroke="#D1DCF0" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export function CurveLeft({ fill }: { fill: string }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 leading-none pointer-events-none" aria-hidden="true">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="w-full h-16 md:h-20 block" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,22 Q960,80 1440,0 L1440,80 L0,80 Z" fill={fill} />
        <path d="M0,22 Q960,80 1440,0" fill="none" stroke="#D1DCF0" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

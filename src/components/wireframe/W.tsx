// Wireframe utility komponente
// Koriste se isključivo u /wireframe/* stranicama
// Brišu se u UI fazi — ne importovati van wireframe foldera

// ─── WLabel ──────────────────────────────────────────────
// Oznaka koja opisuje UX odluku ispod sebe
export function WLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-1.5">
      {children}
    </p>
  );
}

// ─── WBox ────────────────────────────────────────────────
// Sivi placeholder za slike, ikonice, i vizualne elemente
interface WBoxProps {
  w?: string;
  h: string;
  label?: string;
  className?: string;
}
export function WBox({ w, h, label, className }: WBoxProps) {
  return (
    <div
      className={`bg-gray-200 rounded flex items-center justify-center flex-shrink-0 ${w ?? "w-full"} ${h} ${className ?? ""}`}
    >
      {label && (
        <span className="text-[10px] text-gray-500 font-semibold uppercase tracking-wide">
          {label}
        </span>
      )}
    </div>
  );
}

// ─── WDivider ────────────────────────────────────────────
// Horizontalna linija za razdvajanje elemenata unutar kartice
export function WDivider() {
  return <div className="border-t border-gray-200 w-full" />;
}

// ─── WSection ────────────────────────────────────────────
// Wrapper za sekciju s konzistentnim spacingom
interface WSectionProps {
  children: React.ReactNode;
  bg?: "white" | "gray" | "dark";
  border?: "top" | "bottom" | "both" | "none";
  compact?: boolean;
}
export function WSection({
  children,
  bg = "white",
  border = "none",
  compact = false,
}: WSectionProps) {
  const bgClass = {
    white: "bg-white",
    gray: "bg-gray-50",
    dark: "bg-gray-900",
  }[bg];

  const borderClass = {
    top: "border-t border-gray-200",
    bottom: "border-b border-gray-200",
    both: "border-y border-gray-200",
    none: "",
  }[border];

  const pyClass = compact ? "py-8" : "py-16 md:py-20";

  return (
    <section className={`${bgClass} ${borderClass} ${pyClass}`}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  );
}

// ─── WSectionHeading ─────────────────────────────────────
// Standardni heading za sekciju s labelom i subtitle
interface WSectionHeadingProps {
  label: string;
  heading: string;
  subtitle?: string;
  dark?: boolean;
}
export function WSectionHeading({ label, heading, subtitle, dark = false }: WSectionHeadingProps) {
  return (
    <div className="mb-10">
      <WLabel>{label}</WLabel>
      <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${dark ? "text-white" : "text-gray-900"}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`${dark ? "text-gray-400" : "text-gray-500"}`}>{subtitle}</p>
      )}
    </div>
  );
}

// ─── WBtn ────────────────────────────────────────────────
// Wireframe dugme — prikazuje varijantu i labelu
interface WBtnProps {
  label: string;
  variant?: "primary" | "secondary" | "ghost" | "white";
  fullWidth?: boolean;
}
export function WBtn({ label, variant = "primary", fullWidth = false }: WBtnProps) {
  const variantClass = {
    primary: "bg-gray-900 text-white",
    secondary: "bg-gray-600 text-white",
    ghost: "bg-gray-100 text-gray-700 border border-gray-300",
    white: "bg-white text-gray-900 border border-gray-200",
  }[variant];

  return (
    <div
      className={`px-6 py-3.5 ${variantClass} text-sm font-semibold rounded text-center ${fullWidth ? "w-full" : "w-fit"}`}
    >
      [ {variant.toUpperCase()} ] {label}
    </div>
  );
}

// ─── WBreadcrumb ─────────────────────────────────────────
// Breadcrumb navigacija za unutarnje stranice
interface WBreadcrumbProps {
  items: { label: string; href?: string }[];
}
export function WBreadcrumb({ items }: WBreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span>/</span>}
          <span className={i === items.length - 1 ? "text-gray-700 font-medium" : "hover:text-gray-600"}>
            {item.label}
          </span>
        </span>
      ))}
    </nav>
  );
}

// ─── WTag ────────────────────────────────────────────────
// Tag / badge za kategorije, segmente, labele
export function WTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
      {children}
    </span>
  );
}

// ─── WCheckItem ──────────────────────────────────────────
// Lista stavki s checkmark ikonom (šta je uključeno)
export function WCheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-2 text-sm text-gray-600">
      <div className="w-4 h-4 bg-gray-800 rounded-full flex-shrink-0" />
      {children}
    </li>
  );
}

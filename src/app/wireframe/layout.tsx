// Wireframe layout — sivi header i footer, bez brand boja

export default function WireframeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans">

      {/* Wireframe Header */}
      <header className="h-16 border-b border-gray-200 bg-white flex items-center px-6">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between">

          {/* Logo placeholder */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-800 rounded" />
            <div className="w-20 h-4 bg-gray-800 rounded" />
          </div>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-6">
            {["Početna", "Usluge", "O nama", "Kontakt"].map((link) => (
              <div key={link} className="text-sm text-gray-600 font-medium">
                {link}
              </div>
            ))}
          </nav>

          {/* CTA grupa */}
          <div className="flex items-center gap-3">
            <div className="text-sm text-gray-500 font-medium">Za firme →</div>
            <div className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded">
              Kontaktiraj nas
            </div>
          </div>

        </div>
      </header>

      {/* Sadržaj */}
      <main className="flex-1">{children}</main>

      {/* Wireframe Footer */}
      <footer className="border-t border-gray-200 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-3 gap-8 mb-10">

            {/* Brend */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded" />
                <div className="w-16 h-4 bg-white/40 rounded" />
              </div>
              <div className="w-full h-3 bg-white/20 rounded" />
              <div className="w-3/4 h-3 bg-white/20 rounded" />
              <div className="mt-2 w-36 h-9 bg-white/10 border border-white/20 rounded" />
            </div>

            {/* Usluge */}
            <div className="flex flex-col gap-3">
              <div className="w-16 h-3 bg-white/30 rounded" />
              {["", "", "", "", ""].map((_, i) => (
                <div key={i} className="w-full h-3 bg-white/20 rounded" />
              ))}
            </div>

            {/* Kompanija + kontakt */}
            <div className="flex flex-col gap-3">
              <div className="w-20 h-3 bg-white/30 rounded" />
              {["", "", ""].map((_, i) => (
                <div key={i} className="w-24 h-3 bg-white/20 rounded" />
              ))}
              <div className="mt-3 w-20 h-3 bg-white/30 rounded" />
              <div className="w-32 h-3 bg-white/20 rounded" />
              <div className="w-24 h-3 bg-white/20 rounded" />
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-6 border-t border-white/10 flex justify-between">
            <div className="w-48 h-3 bg-white/20 rounded" />
            <div className="w-32 h-3 bg-white/20 rounded" />
          </div>
        </div>
      </footer>

    </div>
  );
}

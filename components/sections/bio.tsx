"use client";

export function Bio() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-[#050505] relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Image Area (Minimal Placeholder) */}
        <div className="relative group">
          <div className="aspect-[3/4] rounded-sm overflow-hidden bg-neutral-900 relative">
            {/* Abstract/Stylized Portrait Representation */}
            <img
              src="/assets/11.webp"
              alt="Un sentiero notturno illuminato dalla luna"
              className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Decorative Frame */}
          <div className="absolute -inset-4 border border-white/10 -z-10 rounded-sm translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
        </div>

        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-2">
            <span className="text-xs font-bold text-blue-200 tracking-[0.3em] uppercase">
              About Me
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">
              Tra i libri
              <br />
              <span className="font-serif italic text-gray-400 font-normal">
                e le stelle.
              </span>
            </h2>
          </div>

          <div className="space-y-6 text-gray-400 font-light leading-relaxed text-lg">
            <p>
              Ciao, sono{" "}
              <span className="text-white font-medium">Francesca</span>.
            </p>
            <p>
              Ho 21 anni e, quando non sono immersa nello studio, i miei occhi
              cercano sempre il cielo. C&apos;è qualcosa nel bagliore argenteo
              della Luna che ha sempre catturato la mia immaginazione, un
              richiamo silenzioso che mi porta a sognare oltre l&apos;atmosfera
              terrestre.
            </p>
            <p>
              <strong className="text-white font-normal">Selenophile</strong>{" "}
              nasce da questa passione. È il mio rifugio digitale, un luogo dove
              la scienza incontra l&apos;emozione. Qui raccolgo tutto ciò che mi
              affascina del nostro satellite: dai dati orbitali più precisi alla
              pura poesia delle sue fasi. Benvenuti nel mio mondo.
            </p>
          </div>

          {/* Signature / Detail */}
          <div className="pt-8 border-t border-white/10 flex items-center gap-4">
            <div className="h-px w-12 bg-white/30" />
            <span className="font-serif italic text-white/60">
              Francesca &bull; Selenophile Creator
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

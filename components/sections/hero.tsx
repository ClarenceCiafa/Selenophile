"use client";

interface HeroProps {
  onScrollTo: () => void;
}

export function Hero({ onScrollTo }: HeroProps) {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-6 pt-20 pb-10">
      {/* 1. Deep Space Base */}
      <div className="absolute inset-0 bg-[#020202] z-0" />

      {/* 2. Cinematic Lighting (Subtle Glows) */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-900/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-indigo-900/5 rounded-full blur-[60px] md:blur-[100px] mix-blend-screen pointer-events-none" />

      {/* 3. The Moon Surface (Orbital View) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?auto=format&fit=crop&q=50&w=1400&fm=webp"
          alt="Moon Surface Texture"
          className="w-full h-full object-cover object-center opacity-40 mix-blend-luminosity scale-110"
          style={{ filter: "contrast(1.1) brightness(0.8)" }}
        />
        {/* Gradient to fade image into black at the bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-transparent to-transparent" />
      </div>

      {/* 4. Floating Dust/Stars */}
      <div className="absolute inset-0 opacity-60 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-0.5 h-0.5 bg-white rounded-full shadow-[0_0_4px_white]" />
        <div className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white/50 rounded-full" />
        <div className="absolute bottom-1/3 left-10 w-1 h-1 bg-white/20 rounded-full blur-[0.5px]" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-blue-100/40 rounded-full blur-[1px]" />
      </div>

      {/* 5. Content */}
      <div className="max-w-5xl w-full text-center space-y-8 md:space-y-12 z-10 relative animate-fade-in-up mt-10">
        {/* Elegant Subtitle */}
        <div className="flex items-center justify-center gap-4 md:gap-6">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-white/20" />
          <p className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-gray-400 uppercase whitespace-nowrap">
            Un&apos;ossessione celeste
          </p>
          <div className="w-24 h-px bg-gradient-to-l from-transparent via-white/20 to-white/20" />
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl relative break-words">
          SELENOPHILE
          {/* Decorative stroke/shadow for depth */}
          <span
            className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent blur-sm -z-10 transform translate-y-4 pointer-events-none hidden md:block"
            aria-hidden="true"
          >
            SELENOPHILE
          </span>
        </h1>

        {/* "by Francesca" - Visible on Mobile/Tablet only */}
        <p className="md:hidden text-sm text-gray-400 font-light tracking-widest -mt-4">
          by Francesca
        </p>

        {/* Description - Restored Original Text and Font Weight */}
        <p className="text-base sm:text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg px-4">
          La Luna non è solo un corpo celeste, è uno specchio del tempo. Un
          compagno silenzioso che danza con la Terra, influenzando le maree e
          illuminando le nostre notti più oscure.
        </p>

        {/* CTA / Scroll Indicator */}
        <div 
          onClick={onScrollTo}
          className="pt-8 md:pt-12 flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-opacity duration-500 cursor-pointer">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/60">
            Scopri
          </span>
          <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

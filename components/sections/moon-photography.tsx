export function MoonPhotography() {
  return (
    <section
      id="photography"
      className="py-20 md:py-32 px-6 bg-[#050505] relative border-t border-white/5"
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-4 md:gap-6">
          <div className="space-y-2">
            <span className="text-blue-200/60 tracking-[0.3em] text-xs font-bold uppercase pl-1 block">
              Tutorial
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
              CATTURARE LA LUCE
            </h2>
          </div>
          <p className="text-gray-400 font-light max-w-md text-sm md:text-right leading-relaxed">
            La Luna e il soggetto perfetto per iniziare l&apos;astrofotografia.
            Non serve un telescopio spaziale, basta conoscere la tecnica giusta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Card 1: The Gear */}
          <div className="group bg-[#0A0A0A] border border-white/10 p-6 md:p-8 rounded-sm hover:border-white/20 transition-all duration-300">
            <div className="w-10 h-10 md:w-12 md:h-12 mb-6 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
            <h3 className="text-lg md:text-xl text-white font-medium mb-3">
              L&apos;Attrezzatura
            </h3>
            <ul className="space-y-3 text-sm text-gray-400 font-light">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                <span>Treppiede (Fondamentale)</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                <span>{"Teleobiettivo (> 200mm)"}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-600 flex-shrink-0" />
                <span>Scatto remoto o Timer</span>
              </li>
            </ul>
          </div>

          {/* Card 2: The Settings */}
          <div className="md:col-span-2 bg-[#080808] border border-white/10 rounded-sm overflow-hidden relative group min-h-[300px] flex flex-col">
            {/* Viewfinder markings */}
            <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-white/20" />
            <div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-white/20" />
            <div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-white/20" />
            <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-white/20" />

            {/* Center Focus Point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/10 rounded-sm flex items-center justify-center opacity-30 md:opacity-100">
              <div className="w-1 h-1 bg-red-500/50 rounded-full" />
            </div>

            <div className="p-6 md:p-8 flex-1 flex flex-col justify-between relative z-10">
              <div>
                <h3 className="text-lg md:text-xl text-white font-medium mb-2">
                  Regola dell&apos;11 (Looney 11)
                </h3>
                <p className="text-gray-400 text-sm font-light max-w-lg">
                  La Luna e illuminata direttamente dal sole. E molto luminosa.
                  Non usare le impostazioni notturne automatiche.
                </p>
              </div>

              {/* Camera HUD Interface */}
              <div className="mt-8 flex flex-wrap gap-3 md:gap-4 items-center justify-start font-mono">
                <div className="flex flex-col items-center px-3 py-2 border border-white/20 rounded bg-black/50 backdrop-blur-sm">
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase">
                    ISO
                  </span>
                  <span className="text-lg md:text-xl text-white font-bold tracking-wider">
                    100
                  </span>
                </div>

                <div className="flex flex-col items-center px-3 py-2 border border-white/20 rounded bg-black/50 backdrop-blur-sm">
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase">
                    Apertura
                  </span>
                  <span className="text-lg md:text-xl text-white font-bold tracking-wider">
                    f/11
                  </span>
                </div>

                <div className="flex flex-col items-center px-3 py-2 border border-white/20 rounded bg-black/50 backdrop-blur-sm">
                  <span className="text-[9px] md:text-[10px] text-gray-500 uppercase">
                    Tempi
                  </span>
                  <span className="text-lg md:text-xl text-white font-bold tracking-wider">
                    1/125
                  </span>
                </div>

                <div className="w-full md:w-auto mt-2 md:mt-0">
                  <div className="text-[10px] text-blue-300 uppercase tracking-widest border border-blue-900/30 px-2 py-1 rounded inline-block">
                    Manual Mode
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Composition Tip */}
          <div className="md:col-span-3 bg-gradient-to-r from-[#0A0A0A] to-[#050505] border border-white/10 p-6 md:p-8 rounded-sm flex flex-col md:flex-row items-center gap-6 md:gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
              <svg
                className="text-gray-300"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg text-white font-medium mb-2">
                Il Segreto: Il Terminatore
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Evita la Luna Piena se vuoi i dettagli. Fotografa durante le
                fasi intermedie (Quarti o Gibbosa). Punta l&apos;obiettivo sulla
                linea d&apos;ombra (il <em>Terminatore</em>): e li che la luce
                radente del sole crea ombre lunghe, rivelando la profondita dei
                crateri e delle montagne lunari.
              </p>
            </div>

            <div className="hidden md:block opacity-30 group-hover:opacity-100 transition-opacity duration-500">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-white"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

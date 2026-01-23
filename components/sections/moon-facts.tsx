"use client";

import { useState } from "react";
import { getRandomCuriosity } from "@/lib/moon-data";

export function MoonFacts() {
  const [fact, setFact] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const generateFact = () => {
    setLoading(true);
    // Simulate a brief loading for better UX
    setTimeout(() => {
      setFact(getRandomCuriosity());
      setLoading(false);
    }, 500);
  };

  return (
    <section id="facts" className="py-32 px-6 relative bg-[#050505]">
      {/* Decorative Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 tracking-tight">
          Curiosita Stellari
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors">
            <div className="text-2xl mb-4">
              <svg
                className="w-8 h-8 mx-auto text-gray-400"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2">Il Lato Oscuro</h3>
            <p className="text-sm text-gray-400 font-light">
              Non esiste un vero &quot;lato oscuro&quot;. Entrambi i lati della
              Luna ricevono la stessa quantita di luce solare, ma noi ne vediamo
              solo uno.
            </p>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors">
            <div className="text-2xl mb-4">
              <svg
                className="w-8 h-8 mx-auto text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M2 12c0-3.5 3.5-6 5-6 1.5 0 2 1 3 1s1.5-1 3-1c1.5 0 5 2.5 5 6s-3.5 6-5 6c-1.5 0-2-1-3-1s-1.5 1-3 1c-1.5 0-5-2.5-5-6z" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2">Maree</h3>
            <p className="text-sm text-gray-400 font-light">
              La gravita lunare tira gli oceani della Terra verso di se, creando
              le maree. Senza la Luna, le nostre giornate durerebbero solo 6
              ore.
            </p>
          </div>

          <div className="p-6 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-white/[0.05] transition-colors">
            <div className="text-2xl mb-4">
              <svg
                className="w-8 h-8 mx-auto text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <h3 className="text-white font-medium mb-2">Polvere</h3>
            <p className="text-sm text-gray-400 font-light">
              La polvere lunare (regolite) profuma di polvere da sparo bruciata
              ed e estremamente abrasiva per le tute spaziali.
            </p>
          </div>
        </div>

        {/* AI Interaction Section - Now using static data instead of Gemini */}
        <div className="mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[#111] to-black border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px]" />

          <h3 className="text-2xl text-white font-light mb-4 relative z-10">
            L&apos;Oracolo Lunare
          </h3>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto font-light relative z-10">
            Vuoi scoprire qualcosa di nuovo? Scopri una curiosita inedita dalla
            nostra raccolta di oltre 50 fatti affascinanti sulla Luna.
          </p>

          <div className="min-h-[100px] flex items-center justify-center mb-8 relative z-10">
            {loading ? (
              <div className="flex flex-col items-center gap-3">
                <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                <span className="text-xs text-gray-500 tracking-widest uppercase">
                  Consultando le stelle...
                </span>
              </div>
            ) : fact ? (
              <p className="text-lg md:text-xl text-gray-200 font-serif italic leading-relaxed">
                &quot;{fact}&quot;
              </p>
            ) : (
              <p className="text-gray-600 text-sm italic">
                Premi il pulsante per una nuova scoperta.
              </p>
            )}
          </div>

          <button
            onClick={generateFact}
            disabled={loading}
            className="relative z-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Genera Curiosita
          </button>
        </div>
      </div>
    </section>
  );
}

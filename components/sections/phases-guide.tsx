"use client";

import { useState } from "react";

export function PhasesGuide() {
  const [selectedPhase, setSelectedPhase] = useState<"waxing" | "waning">(
    "waxing"
  );

  const getShadowTransform = () => {
    return selectedPhase === "waxing"
      ? "translateX(-40%) scale(1.1)"
      : "translateX(40%) scale(1.1)";
  };

  return (
    <section
      id="phases"
      className="py-20 md:py-32 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Fasi Lunari
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto text-sm md:text-base">
            Come riconoscere se la luna e crescente o calante? C&apos;e un
            antico detto popolare che non sbaglia mai.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Interactive Visual */}
          <div className="relative aspect-square max-w-xs md:max-w-md mx-auto w-full bg-[#0F0F0F] rounded-full border border-white/5 flex items-center justify-center p-8 group shadow-2xl shadow-black">
            {/* The Moon */}
            <div
              className="w-full h-full rounded-full bg-neutral-800 relative overflow-hidden shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8)] transition-all duration-1000"
              style={
                selectedPhase === "waning"
                  ? { boxShadow: "inset 20px -20px 50px rgba(0,0,0,0.8)" }
                  : {}
              }
            >
              {/* Crater textures */}
              <div className="absolute top-10 left-8 w-6 h-6 rounded-full bg-neutral-900/30" />
              <div className="absolute bottom-12 right-12 w-10 h-10 rounded-full bg-neutral-900/20" />
              <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full bg-neutral-900/10 -translate-x-1/2 -translate-y-1/2" />

              {/* Shadow Mask */}
              <div
                className="absolute inset-0 bg-black transition-all duration-700 ease-in-out"
                style={{ transform: getShadowTransform() }}
              />
            </div>

            {/* Glow behind */}
            <div className="absolute inset-0 rounded-full bg-white/5 blur-3xl -z-10 opacity-50" />
          </div>

          {/* Controls / Description */}
          <div className="space-y-6 md:space-y-10">
            {/* Phase 1: Waxing */}
            <div
              className={`cursor-pointer group p-4 md:p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 active:bg-white/5 ${
                selectedPhase === "waxing"
                  ? "bg-white/5 border-white/10"
                  : ""
              }`}
              onClick={() => setSelectedPhase("waxing")}
            >
              <h3 className="text-lg md:text-xl text-white mb-2 group-hover:text-blue-200 transition-colors">
                Luna Crescente
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-2 italic">
                &quot;Gobba a ponente (Ovest), Luna crescente.&quot;
              </p>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Quando la parte curva illuminata (la &quot;gobba&quot;) e
                rivolta verso Ovest (destra, per noi nell&apos;emisfero
                boreale), la luna sta crescendo verso il plenilunio. Ricorda la
                lettera &apos;D&apos; di &quot;Diventa&quot;.
              </p>
            </div>

            {/* Phase 2: Waning */}
            <div
              className={`cursor-pointer group p-4 md:p-6 rounded-2xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-all duration-300 active:bg-white/5 ${
                selectedPhase === "waning"
                  ? "bg-white/5 border-white/10"
                  : ""
              }`}
              onClick={() => setSelectedPhase("waning")}
            >
              <h3 className="text-lg md:text-xl text-white mb-2 group-hover:text-blue-200 transition-colors">
                Luna Calante
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-2 italic">
                &quot;Gobba a levante (Est), Luna calante.&quot;
              </p>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                Quando la gobba e rivolta verso Est (sinistra), la luna sta
                calando. Ricorda la lettera &apos;C&apos; di
                &quot;Calante&quot;? No, in realta forma una C quando decresce.
              </p>
            </div>

            <p className="text-xs text-gray-600 mt-4 pl-6 border-l border-gray-800">
              *Nota: Questa regola vale per l&apos;emisfero boreale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

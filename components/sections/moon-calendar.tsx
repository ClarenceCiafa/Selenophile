"use client";

import { useState, useMemo } from "react";
import { getPhasesForMonth, type MoonEvent } from "@/lib/moon-data";

const months = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];
const years = Array.from({ length: 11 }, (_, i) => 2024 + i - 2);

export function MoonCalendar() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const now = new Date();

  const sortedEvents = useMemo(() => {
    return getPhasesForMonth(selectedYear, selectedMonth);
  }, [selectedYear, selectedMonth]);

  const isPast = (date: Date): boolean => {
    return date.getTime() < now.getTime();
  };

  const isNextEvent = (date: Date): boolean => {
    const nextEvent = sortedEvents.find((e) => e.date.getTime() >= now.getTime());
    return nextEvent ? nextEvent.date.getTime() === date.getTime() : false;
  };

  const formatDay = (date: Date) =>
    date.toLocaleDateString("it-IT", { day: "2-digit" });
  const formatMonth = (date: Date) =>
    date.toLocaleDateString("it-IT", { month: "short" });
  const formatTime = (date: Date) =>
    date.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" });

  const renderPhaseIcon = (type: MoonEvent["type"]) => {
    switch (type) {
      case "new":
        return (
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-600 bg-black" />
        );
      case "first_quarter":
        return (
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-400 bg-gradient-to-r from-black via-black to-white" />
        );
      case "full":
        return (
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
        );
      case "last_quarter":
        return (
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-gray-400 bg-gradient-to-l from-black via-black to-white" />
        );
    }
  };

  return (
    <section className="min-h-screen bg-[#050505] pt-12 md:pt-24 pb-10 px-4 md:px-6 animate-in fade-in duration-500 border-l-0 md:border-l border-white/5 md:ml-4">
      {/* Header & Controls */}
      <div className="max-w-4xl mx-auto mb-10 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
        <div>
          <span className="text-xs font-mono text-gray-500 tracking-widest uppercase block mb-2">
            Analisi Temporale
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
            EVENTI LUNARI
          </h2>
        </div>

        {/* Controls */}
        <div className="flex gap-4 w-full md:w-auto">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(Number.parseInt(e.target.value))}
            className="flex-1 md:flex-none bg-transparent text-white border-b border-white/20 pb-2 px-2 focus:outline-none focus:border-white text-lg md:text-xl font-mono appearance-none cursor-pointer hover:border-white/50 transition-colors"
          >
            {months.map((m, index) => (
              <option key={m} value={index} className="bg-black text-gray-300">
                {m}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number.parseInt(e.target.value))}
            className="flex-1 md:flex-none bg-transparent text-white border-b border-white/20 pb-2 px-2 focus:outline-none focus:border-white text-lg md:text-xl font-mono appearance-none cursor-pointer hover:border-white/50 transition-colors"
          >
            {years.map((y) => (
              <option key={y} value={y} className="bg-black text-gray-300">
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="max-w-4xl mx-auto relative pl-2 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-[27px] md:left-24 top-0 bottom-0 w-px bg-white/10" />

        <div className="space-y-8 md:space-y-12">
          {sortedEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center gap-4 md:gap-16 group ${
                isPast(event.date) ? "opacity-40 grayscale" : ""
              }`}
            >
              {/* Date Column */}
              <div className="w-14 md:w-24 text-right flex-shrink-0 flex flex-col items-end">
                <span className="block text-xl md:text-2xl font-light text-white">
                  {formatDay(event.date)}
                </span>
                <span className="block text-[10px] md:text-xs uppercase tracking-widest text-gray-500">
                  {formatMonth(event.date)}
                </span>
                <span className="block text-[9px] md:text-[10px] font-mono text-gray-600 mt-1 hidden md:block">
                  {formatTime(event.date)}
                </span>
              </div>

              {/* Node on Line */}
              <div
                className={`relative z-10 w-3 h-3 md:w-4 md:h-4 rounded-full bg-[#050505] border-2 flex-shrink-0 transition-all duration-300 ${
                  isNextEvent(event.date)
                    ? "border-blue-500 bg-blue-900 scale-125"
                    : isPast(event.date)
                      ? "border-gray-700"
                      : "border-white"
                }`}
              >
                {isNextEvent(event.date) && (
                  <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                )}
              </div>

              {/* Content Card */}
              <div className="flex-1 bg-[#0A0A0A] border border-white/5 p-4 md:p-6 rounded-sm flex items-center justify-between group-hover:border-white/20 transition-all duration-300 relative overflow-hidden">
                {isNextEvent(event.date) && (
                  <div className="absolute top-0 right-0 px-2 py-1 bg-blue-900/50 text-[8px] md:text-[9px] text-blue-200 uppercase tracking-widest">
                    Next
                  </div>
                )}

                <div className="flex items-center gap-4 md:gap-6">
                  {/* Icon */}
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    {renderPhaseIcon(event.type)}
                  </div>

                  <div>
                    <h3 className="text-base md:text-xl text-white font-light">
                      {event.name}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-500 font-mono mt-1">
                      {event.type === "full" && "100% Illum."}
                      {event.type === "new" && "0% Illum."}
                      {(event.type === "first_quarter" ||
                        event.type === "last_quarter") &&
                        "50% Illum."}
                      <span className="md:hidden ml-1 opacity-60">
                        {formatTime(event.date)}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Status Label */}
                <div>
                  {isPast(event.date) ? (
                    <span className="text-[10px] text-gray-600 uppercase tracking-widest border border-gray-800 px-2 py-1 rounded-sm">
                      Concluso
                    </span>
                  ) : (
                    <span className="text-[10px] text-green-500/80 uppercase tracking-widest border border-green-900/30 px-2 py-1 rounded-sm">
                      In arrivo
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}

          {sortedEvents.length === 0 && (
            <div className="text-center py-20 text-gray-500 font-light">
              Nessun evento principale calcolato per questo periodo.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect, useCallback } from "react";
import { getMoonData } from "@/lib/moon-data";
import { RefreshCw } from "lucide-react";

interface MoonNewsItem {
  headline: string;
  summary: string;
  source: string;
  url: string;
  pubDate: string;
}

// Helper function to get relative date label in Italian
function getRelativeDateLabel(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const twoDaysAgo = new Date(today);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const oneWeekAgo = new Date(today);
  oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

  const articleDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());

  if (articleDate.getTime() === today.getTime()) {
    return "Oggi";
  } else if (articleDate.getTime() === yesterday.getTime()) {
    return "Ieri";
  } else if (articleDate.getTime() === twoDaysAgo.getTime()) {
    return "2 giorni fa";
  } else if (articleDate >= oneWeekAgo) {
    const daysAgo = Math.floor((today.getTime() - articleDate.getTime()) / (1000 * 60 * 60 * 24));
    return `${daysAgo} giorni fa`;
  } else {
    return date.toLocaleDateString("it-IT", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  }
}

export function MoonHub() {
  const [loading, setLoading] = useState(true);
  const [newsItems, setNewsItems] = useState<MoonNewsItem[]>([]);
  const [newsSource, setNewsSource] = useState<"live" | "fallback">("live");
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showRefreshConfirm, setShowRefreshConfirm] = useState(false);
  const [moonData, setMoonData] = useState({
    illumination: 0,
    moonAge: 0,
    distance: "0",
    phaseName: "",
  });

  const updateData = useCallback(() => {
    const data = getMoonData(new Date());
    setMoonData({
      illumination: data.illumination,
      moonAge: data.age,
      distance: data.distance.toLocaleString("it-IT"),
      phaseName: data.phaseName,
    });
  }, []);

  const loadNews = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/moon-news?t=" + Date.now(), {
        cache: "no-store",
      });
      const data = await response.json();
      // Sort by date (newest first)
      const sortedNews = (data.news || []).sort((a: MoonNewsItem, b: MoonNewsItem) => {
        return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
      });
      setNewsItems(sortedNews);
      setNewsSource(data.source || "fallback");
      setLastUpdated(data.lastUpdated || null);
    } catch (error) {
      console.error("Error fetching news:", error);
      setNewsSource("fallback");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    updateData();
    loadNews();

    const interval = setInterval(() => {
      setCurrentDate(new Date());
      if (new Date().getSeconds() % 10 === 0) {
        updateData();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [updateData, loadNews]);

  // Format time in Italian timezone (Europe/Rome)
  const formatTimeItaly = (date: Date) => {
    return date.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Europe/Rome",
    });
  };

  return (
    <section className="min-h-screen bg-[#050505] pt-20 pb-10 px-6 md:px-12 relative overflow-hidden">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-16 flex justify-between items-end border-b border-white/5 pb-6 relative z-10">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-[10px] font-mono text-blue-300 tracking-[0.2em] uppercase">
              System Online
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mix-blend-overlay">
            MOON HUB
          </h2>
        </div>
        <div className="hidden md:block text-right opacity-60">
          <p className="font-mono text-xs text-gray-400 tracking-widest">
            {formatTimeItaly(currentDate)} CET
          </p>
          <p className="font-mono text-[10px] text-gray-500 mt-1">
            DATA LINK: ACTIVE
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Column 1: Live Telemetry */}
        <div className="lg:col-span-1 space-y-4">
          <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-4 pl-1">
            Parametri Orbitali
          </h3>

          {/* Stat Card 1 */}
          <div className="bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/5 p-8 rounded-sm group hover:border-white/10 transition-all duration-500">
            <div className="flex justify-between items-start mb-4">
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">
                Fase Corrente
              </p>
              <svg
                className="text-gray-700 group-hover:text-blue-500/50 transition-colors"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              </svg>
            </div>
            <p className="text-4xl text-white font-light tracking-tight mb-1">
              {moonData.illumination}%
            </p>
            <p className="text-sm text-gray-400 font-serif italic">
              {moonData.phaseName}
            </p>

            <div className="w-full bg-white/5 h-[1px] mt-6 relative overflow-hidden">
              <div
                className="absolute inset-0 bg-blue-500/50 blur-[2px] transition-all duration-1000"
                style={{ width: `${moonData.illumination}%` }}
              />
              <div
                className="absolute inset-0 bg-white transition-all duration-1000"
                style={{ width: `${moonData.illumination}%` }}
              />
            </div>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-[#0a0a0a] border border-white/5 p-6 rounded-sm grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600 text-[9px] uppercase tracking-wider mb-1">
                Distanza Terra
              </p>
              <p className="text-xl text-white font-mono">{moonData.distance}</p>
              <p className="text-[9px] text-gray-600">km</p>
            </div>
            <div className="border-l border-white/5 pl-4">
              <p className="text-gray-600 text-[9px] uppercase tracking-wider mb-1">
                Eta Lunazione
              </p>
              <p className="text-xl text-white font-mono">{moonData.moonAge}</p>
              <p className="text-[9px] text-gray-600">giorni</p>
            </div>
          </div>

          {/* Mobile Time Display - Same style as desktop */}
          <div className="md:hidden bg-[#0a0a0a] border border-white/5 p-6 rounded-sm">
            <div className="text-center">
              <p className="font-mono text-xs text-gray-400 tracking-widest">
                {formatTimeItaly(currentDate)} CET
              </p>
              <p className="font-mono text-[10px] text-gray-500 mt-1">
                DATA LINK: ACTIVE
              </p>
            </div>
          </div>
        </div>

        {/* Column 2 & 3: News Feed - Live from RSS */}
        <div className="lg:col-span-2 pl-0 lg:pl-8 border-l-0 lg:border-l border-white/5 border-dashed">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-widest pl-1">
                Feed Notizie
              </h3>
              <span
                className={`text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                  newsSource === "live"
                    ? "bg-green-500/20 text-green-400 border border-green-500/30"
                    : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                }`}
              >
                {newsSource === "live" ? "Live" : "Cached"}
              </span>
            </div>
            <button
              onClick={() => !loading && setShowRefreshConfirm(true)}
              disabled={loading}
              className="group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <RefreshCw
                className={`w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors ${loading ? "animate-spin" : ""}`}
              />
              <span className="text-xs text-gray-400 group-hover:text-white uppercase tracking-wider font-medium transition-colors">
                Aggiorna
              </span>
            </button>
          </div>

          {lastUpdated && (
            <p className="text-[9px] text-gray-600 mb-4 pl-1">
              Ultimo aggiornamento:{" "}
              {new Date(lastUpdated).toLocaleString("it-IT", {
                timeZone: "Europe/Rome",
              })}
            </p>
          )}

          {loading ? (
            <div className="space-y-4 opacity-50">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-24 bg-white/5 animate-pulse rounded-sm"
                />
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {newsItems.map((item, index) => {
                const relativeLabel = item.pubDate
                  ? getRelativeDateLabel(item.pubDate)
                  : "";
                const isRecent =
                  relativeLabel === "Oggi" || relativeLabel === "Ieri";

                return (
                  <div
                    key={`${item.headline}-${index}`}
                    className="group relative pl-6 transition-all duration-300 hover:pl-8"
                  >
                    {/* Timeline Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 group-hover:bg-blue-500/50 transition-colors" />
                    <div
                      className={`absolute left-[-2px] top-2 w-[5px] h-[5px] rounded-full transition-colors ${
                        isRecent
                          ? "bg-blue-500 border-blue-500"
                          : "bg-gray-800 border-gray-600 group-hover:bg-blue-500 group-hover:border-blue-500"
                      } border`}
                    />

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="text-[9px] text-blue-300/80 uppercase tracking-widest border border-blue-900/30 px-1.5 py-0.5 rounded-[2px]">
                          {item.source}
                        </span>

                        {/* Relative date label */}
                        {relativeLabel && (
                          <span
                            className={`text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                              relativeLabel === "Oggi"
                                ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                : relativeLabel === "Ieri"
                                  ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                                  : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                            }`}
                          >
                            {relativeLabel}
                          </span>
                        )}

                        <span className="text-[10px] text-gray-600 font-mono">
                          {item.pubDate
                            ? new Date(item.pubDate).toLocaleDateString(
                                "it-IT",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                  timeZone: "Europe/Rome",
                                }
                              )
                            : ""}
                        </span>
                      </div>

                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <h4 className="text-xl text-white font-light group-hover:text-blue-200 transition-colors leading-tight">
                          {item.headline}
                        </h4>
                      </a>

                      <p className="text-gray-500 text-sm font-light leading-relaxed max-w-2xl">
                        {item.summary}
                      </p>
                    </div>
                  </div>
                );
              })}

              {newsItems.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-sm">
                    Nessuna notizia disponibile al momento.
                  </p>
                  <button
                    onClick={loadNews}
                    className="mt-4 text-blue-400 hover:text-blue-300 text-sm underline"
                  >
                    Riprova
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Refresh Confirmation Modal */}
      {showRefreshConfirm && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setShowRefreshConfirm(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="bg-[#111111] border border-white/10 rounded-xl p-8 shadow-2xl w-[90vw] max-w-md text-center animate-in slide-in-from-bottom-4 duration-250"
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <h3 className="text-2xl font-light text-white mb-2">
              Conferma Aggiornamento
            </h3>
            <p className="text-gray-400 mb-8">
              Vuoi davvero ricaricare le ultime notizie dalla NASA?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowRefreshConfirm(false)}
                className="px-6 py-2 text-sm text-gray-300 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
              >
                Annulla
              </button>
              <button
                onClick={() => {
                  setShowRefreshConfirm(false);
                  loadNews();
                }}
                className="px-6 py-2 text-sm text-black bg-white rounded-full hover:bg-gray-200 transition-colors"
              >
                Conferma
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

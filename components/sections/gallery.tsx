"use client";

import React from "react"
import { useState, useMemo } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  url: string;
  category: "moon" | "landscape";
  title: string;
  description?: string;
}

// Dati delle immagini forniti dall'utente
const landscapeTitles = [
  "Sussurri del crepuscolo", "L'orizzonte dorato", "Sentiero tra le ombre", "Riflessi di quiete", "La maestà della vetta",
  "Cielo di fuoco", "Il risveglio della valle", "Dove il mare incontra il cielo", "L'ultimo raggio di sole", "Sinfonia di colori",
  "La foresta silenziosa", "Specchio d'acqua", "Le porte del paradiso", "Un sentiero verso l'infinito", "Tramonto alpino",
  "La danza delle nuvole", "Il gigante addormentato", "Luce morente", "Il respiro della terra", "Oltre la nebbia",
  "Confini del mondo", "L'abbraccio del cielo", "Bagliori sulla costa", "Solitudine serena", "Il cuore della montagna",
  "Eco di luce", "Tramonto infuocato", "L'ora blu", "Sopra le nuvole"
];

const moonTitles = [
  "Regina della notte", "Sguardo d'argento", "Perla del cosmo", "Danza di fasi", "L'occhio celeste",
  "La custode dei sogni", "Cratere di luce", "Superluna maestosa", "Falce crescente", "Luce cinerea",
  "Plenilunio ipnotico", "Gigante gassoso e satellite", "Eclissi parziale", "Luna di sangue", "Il volto nascosto",
  "Luce tra i rami", "Compagna silenziosa", "Dominatrice del buio"
];

const landscapes: GalleryImage[] = Array.from({ length: 29 }, (_, i) => ({
  id: i + 1,
  category: "landscape",
  title: landscapeTitles[i] || `Paesaggio #${i + 1}`,
  url: `/assets/${i + 1}.webp`,
}));

const moons: GalleryImage[] = Array.from({ length: 18 }, (_, i) => ({
  id: 29 + i + 1,
  category: "moon",
  title: moonTitles[i] || `Luna #${i + 1}`,
  url: `/assets/${i + 1}L.webp`,
}));

const galleryImages: GalleryImage[] = [...moons, ...landscapes];


export function Gallery() {
  const [currentCategory, setCurrentCategory] = useState<
    "moon" | "landscape" | "all"
  >("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (currentCategory === "all") {
        // Mescola le immagini per una visualizzazione più varia
        return [...galleryImages].sort(() => Math.random() - 0.5);
    }
    return galleryImages.filter((img) => img.category === currentCategory);
  }, [currentCategory]);

  const openLightbox = (img: GalleryImage) => {
    setSelectedImage(img);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "";
  };
  
  const handleImageError = (
    event: React.SyntheticEvent<HTMLImageElement>,
    url: string
  ) => {
    const img = event.currentTarget;
    const fileName = url.split("/").pop() || "file sconosciuto";

    console.error(
      `--- ERRORE CARICAMENTO IMMAGINE ---\n` +
        `File non trovato o illeggibile: "${fileName}"`
    );

    if (!img.src.includes("placehold.co")) {
      img.src = `https://placehold.co/800x600/101010/FFF?text=ERRORE:+${fileName}`;
    }
  };

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] min-h-screen relative border-t border-white/5"
    >
      {/* Header Area */}
      <div className="max-w-[1600px] mx-auto mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
        <div className="space-y-4">
          <span className="text-blue-200/60 tracking-widest text-xs font-bold uppercase pl-1 block animate-pulse">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
            Galleria
          </h2>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 md:border-none md:pb-0 w-full md:w-auto overflow-x-auto scrollbar-hide">
          <button
            onClick={() => setCurrentCategory("moon")}
            className={`text-lg md:text-xl transition-colors duration-300 whitespace-nowrap px-4 py-2 rounded-md ${
              currentCategory === "moon"
                ? "text-white bg-white/5"
                : "text-gray-600 hover:text-white hover:bg-white/5"
            }`}
          >
            Ritratti della Luna
          </button>

          <button
            onClick={() => setCurrentCategory("landscape")}
            className={`text-lg md:text-xl transition-colors duration-300 whitespace-nowrap px-4 py-2 rounded-md ${
              currentCategory === "landscape"
                ? "text-white bg-white/5"
                : "text-gray-600 hover:text-white hover:bg-white/5"
            }`}
          >
            Paesaggi
          </button>

          <button
            onClick={() => setCurrentCategory("all")}
            className={`text-lg md:text-xl transition-colors duration-300 whitespace-nowrap px-4 py-2 rounded-md ${
              currentCategory === "all"
                ? "text-white bg-white/5"
                : "text-gray-600 hover:text-white hover:bg-white/5"
            }`}
          >
            Tutte
          </button>
        </div>
      </div>

      {/* Masonry Layout */}
      <div className="max-w-[1600px] mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {filteredImages.map((img, i) => (
          <div
            key={img.id}
            className="break-inside-avoid group relative rounded-sm overflow-hidden bg-neutral-900 cursor-zoom-in shadow-lg shadow-black/50 animate-fade-in-up"
            style={{ animationDelay: `${(i % 12) * 75}ms` }}
            onClick={() => openLightbox(img)}
            onKeyDown={(e) => e.key === "Enter" && openLightbox(img)}
            role="button"
            tabIndex={0}
          >
            <img
              src={img.url || "/placeholder.svg"}
              alt={img.title}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100 min-h-[200px] bg-neutral-800"
              onError={(e) => handleImageError(e, img.url)}
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 pointer-events-none">
              <span className="text-[10px] text-blue-300 uppercase tracking-widest mb-1 block">
                {img.category === "moon" ? "Ritratti della Luna" : "Paesaggi"}
              </span>
              <h3 className="text-white font-light tracking-wide text-lg">
                {img.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-white/5 rounded-full"
            onClick={closeLightbox}
            aria-label="Chiudi"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-full max-h-full flex flex-col items-center justify-center h-full w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url || "/placeholder.svg"}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(255,255,255,0.05)] rounded-sm"
              onError={(e) => handleImageError(e, selectedImage.url)}
            />
            <div className="mt-6 text-center absolute bottom-10 left-0 right-0 pointer-events-none p-4 bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-2xl text-white font-light tracking-wider drop-shadow-md">
                {selectedImage.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

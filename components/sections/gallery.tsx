"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface GalleryImage {
  id: number;
  url: string;
  category: "moon" | "landscape";
  title: string;
  description?: string;
  width?: number;
  height?: number;
}

// --- DATI DELLE IMMAGINI ---
// (Dati esistenti omessi per brevità, sono identici a prima)
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
  width: 800, // Dimensione di default
  height: 600, // Dimensione di default
}));

const moons: GalleryImage[] = Array.from({ length: 18 }, (_, i) => ({
  id: 29 + i + 1,
  category: "moon",
  title: moonTitles[i] || `Luna #${i + 1}`,
  url: `/assets/${i + 1}L.webp`,
  width: 800, // Dimensione di default
  height: 800, // Dimensione di default per le immagini lunari, spesso quadrate
}));

const galleryImages: GalleryImage[] = [...moons, ...landscapes];


// --- COMPONENTE SINGOLA IMMAGINE (NUOVO) ---
function GalleryCard({
  img,
  onOpenLightbox,
  index,
}: {
  img: GalleryImage;
  onOpenLightbox: (img: GalleryImage) => void;
  index: number;
}) {
  const { ref, inView } = useInView({
    triggerOnce: true, // L'animazione si attiva solo una volta
    threshold: 0.1, // Si attiva quando il 10% dell'immagine è visibile
  });

  return (
    <div
      ref={ref}
      className={`break-inside-avoid group relative rounded-sm overflow-hidden bg-neutral-900 cursor-zoom-in shadow-lg shadow-black/50 transition-all duration-700 ${
        inView ? "animate-fade-in-up opacity-100" : "opacity-0 translate-y-4"
      }`}
      style={{ animationDelay: `${(index % 12) * 75}ms` }}
      onClick={() => onOpenLightbox(img)}
      onKeyDown={(e) => e.key === "Enter" && onOpenLightbox(img)}
      role="button"
      tabIndex={0}
    >
      <Image
        src={img.url}
        alt={img.title}
        width={img.width || 800}
        height={img.height || 600}
        priority={index < 8} // Le prime immagini vengono caricate con priorità
        className="w-full h-auto object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-90 group-hover:opacity-100 min-h-[200px] bg-neutral-800"
      />

      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* La visibilità ora è controllata sia da inView (su mobile/scroll) che da group-hover (su desktop) */}
      <div
        className={`absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-all duration-500 pointer-events-none ${
          inView
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        } group-hover:opacity-100 group-hover:translate-y-0`}
      >
        <span className="text-[10px] text-blue-300 uppercase tracking-widest mb-1 block">
          {img.category === "moon" ? "Ritratti della Luna" : "Paesaggi"}
        </span>
        <h3 className="text-white font-light tracking-wide text-lg">
          {img.title}
        </h3>
      </div>
    </div>
  );
}


// --- COMPONENTE PRINCIPALE DELLA GALLERIA ---
export function Gallery() {
  const [currentCategory, setCurrentCategory] = useState<"moon" | "landscape" | "all">("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (currentCategory === "all") {
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

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 px-4 md:px-6 bg-[#050505] min-h-screen relative border-t border-white/5"
    >
      {/* Header Area (invariato) */}
      <div className="max-w-[1600px] mx-auto mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
        <div className="space-y-4">
          <span className="text-blue-200/60 tracking-widest text-xs font-bold uppercase pl-1 block animate-pulse">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
            Galleria
          </h2>
        </div>
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 md:border-none md:pb-0 w-full md:w-auto overflow-x-auto scrollbar-hide">
          <button onClick={() => setCurrentCategory("moon")} className={`text-lg md:text-xl transition-colors duration-300 whitespace-nowrap px-4 py-2 rounded-md ${currentCategory === "moon" ? "text-white bg-white/5" : "text-gray-600 hover:text-white hover:bg-white/5"}`}>
            Ritratti della Luna
          </button>
          <button onClick={() => setCurrentCategory("landscape")} className={`text-lg md:text-xl transition-colors duration-300 whitespace-nowrap px-4 py-2 rounded-md ${currentCategory === "landscape" ? "text-white bg-white/5" : "text-gray-600 hover:text-white hover:bg-white/5"}`}>
            Paesaggi
          </button>
          <button onClick={() => setCurrentCategory("all")} className={`text-lg md:text-xl transition-colors duration-300 whitespace-nowrap px-4 py-2 rounded-md ${currentCategory === "all" ? "text-white bg-white/5" : "text-gray-600 hover:text-white hover:bg-white/5"}`}>
            Tutte
          </button>
        </div>
      </div>

      {/* Masonry Layout con il nuovo componente Card */}
      <div className="max-w-[1600px] mx-auto columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6">
        {filteredImages.map((img, i) => (
          <GalleryCard
            key={img.id}
            img={img}
            onOpenLightbox={openLightbox}
            index={i}
          />
        ))}
      </div>

      {/* Lightbox Modal (invariato ma ora usa next/image) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] p-2 bg-white/5 rounded-full" onClick={closeLightbox} aria-label="Chiudi">
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-full max-h-full flex flex-col items-center justify-center h-full w-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.url}
              alt={selectedImage.title}
              width={selectedImage.width || 1200}
              height={selectedImage.height || 800}
              priority // L'immagine nel lightbox ha sempre la priorità
              className="max-w-full max-h-[85vh] object-contain shadow-[0_0_50px_rgba(255,255,255,0.05)] rounded-sm"
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

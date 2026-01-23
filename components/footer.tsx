"use client";

interface FooterProps {
  onNavigate: (id: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-white/5 py-16 px-6 text-center overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[2px] bg-blue-500/30 blur-lg pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 z-10 relative">
        {/* Logo & Title */}
        <button
          className="flex justify-center items-center gap-4 cursor-pointer"
          onClick={() => onNavigate("home")}
        >
          <div className="w-10 h-10 text-white">
            <svg
              viewBox="0 0 40 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="w-full h-full"
            >
              <path
                d="M20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35C28.2843 35 35 28.2843 35 20"
                strokeOpacity="0.2"
              />
              <path
                d="M20 5C15 5 11 11 11 20C11 29 15 35 20 35"
                className="text-white"
              />
              <circle cx="32" cy="8" r="3" fill="white" />
            </svg>
          </div>
          <h4 className="text-3xl text-white font-bold tracking-tighter">
            SELENOPHILE
          </h4>
        </button>

        {/* Social Link */}
        <a
          href="https://www.instagram.com/fraaaa_break_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group px-4 py-2 rounded-full border border-white/5 hover:bg-white/5"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span>Instagram</span>
        </a>

        {/* Legal Links */}
        <div className="flex items-center justify-center gap-4 md:gap-6 text-xs text-gray-500 font-light">
          <button
            onClick={() => onNavigate("terms")}
            className="hover:text-white transition-colors"
          >
            Termini e Condizioni
          </button>
          <span className="opacity-30">&bull;</span>
          <button
            onClick={() => onNavigate("privacy")}
            className="hover:text-white transition-colors"
          >
            Privacy
          </button>
          <span className="opacity-30">&bull;</span>
          <button
            onClick={() => onNavigate("cookies")}
            className="hover:text-white transition-colors"
          >
            Cookie
          </button>
        </div>

        {/* Disclaimer */}
        <p className="max-w-xl text-xs text-gray-600 font-light leading-relaxed border-t border-white/5 pt-8 mt-4">
          <strong className="text-gray-500 font-medium">Disclaimer:</strong>{" "}
          Questo sito è un progetto personale e artistico. Le informazioni sono
          fornite a scopo di intrattenimento e non devono essere considerate
          scientificamente accurate o attendibili.
        </p>

        {/* Copyright */}
        <div className="text-xs text-gray-700 font-mono tracking-wider pt-4">
          <p>SELENOPHILE &copy; 2026 BY FRANCESCA</p>
        </div>
      </div>
    </footer>
  );
}

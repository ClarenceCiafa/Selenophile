"use client";

import { useState, useRef } from "react";
import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/sections/hero";
import { PhasesGuide } from "@/components/sections/phases-guide";
import { MoonPhotography } from "@/components/sections/moon-photography";
import { MoonFacts } from "@/components/sections/moon-facts";
import { Gallery } from "@/components/sections/gallery";
import { Bio } from "@/components/sections/bio";
import { MoonHub } from "@/components/sections/moon-hub";
import { MoonCalendar } from "@/components/sections/moon-calendar";
import { TermsOfService } from "@/components/sections/terms-of-service";
import { PrivacyPolicy } from "@/components/sections/privacy-policy";
import { CookiePolicy } from "@/components/sections/cookie-policy";
import { Footer } from "@/components/footer";

type ViewType =
  | "home"
  | "phases"
  | "photography"
  | "facts"
  | "gallery"
  | "bio"
  | "hub"
  | "calendar"
  | "terms"
  | "privacy"
  | "cookies";

export default function Home() {
  const [currentView, setCurrentView] = useState<ViewType>("home");
  const phasesRef = useRef<HTMLDivElement>(null);

  const handleNavigation = (id: string) => {
    const legalViews: ViewType[] = ["privacy", "cookies", "terms"];
    const separateViews: ViewType[] = ["gallery", "bio", "hub", "calendar"];
    const homeViews = ["home", "phases", "photography", "facts"];

    if (legalViews.includes(id as ViewType)) {
      setCurrentView(id as ViewType);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (separateViews.includes(id as ViewType)) {
      setCurrentView(id as ViewType);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setCurrentView("home");

      if (homeViews.includes(id) && id !== "home") {
        setTimeout(() => {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const handleScrollTo = (id: string) => {
    if (id === 'phases' && phasesRef.current) {
      phasesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const isLegalPage = ["terms", "privacy", "cookies"].includes(currentView);

  return (
    <div className="bg-[#050505] min-h-screen text-white">
      {!isLegalPage && (
        <Sidebar currentView={currentView} onNavigate={handleNavigation} />
      )}

      <main
        className={
          isLegalPage ? "" : "pb-24 md:pb-0 md:pl-20 transition-all duration-300"
        }
      >
        {currentView === "home" && (
          <div className="animate-fade-in">
            <div id="home">
              <Hero onScrollTo={() => handleScrollTo('phases')} />
            </div>

            <div id="phases" ref={phasesRef}>
              <PhasesGuide />
            </div>

            <div id="photography">
              <MoonPhotography />
            </div>

            <div id="facts">
              <MoonFacts />
            </div>

            <Footer onNavigate={handleNavigation} />
          </div>
        )}

        {currentView === "gallery" && (
          <div className="animate-fade-in">
            <Gallery />
            <Footer onNavigate={handleNavigation} />
          </div>
        )}

        {currentView === "bio" && (
          <div className="animate-fade-in">
            <Bio />
            <Footer onNavigate={handleNavigation} />
          </div>
        )}

        {currentView === "hub" && (
          <div className="animate-fade-in">
            <MoonHub />
            <Footer onNavigate={handleNavigation} />
          </div>
        )}

        {currentView === "calendar" && (
          <div className="animate-fade-in">
            <MoonCalendar />
            <Footer onNavigate={handleNavigation} />
          </div>
        )}

        {currentView === "terms" && (
          <div className="animate-fade-in">
            <TermsOfService onNavigate={handleNavigation} />
          </div>
        )}

        {currentView === "privacy" && (
          <div className="animate-fade-in">
            <PrivacyPolicy onNavigate={handleNavigation} />
          </div>
        )}

        {currentView === "cookies" && (
          <div className="animate-fade-in">
            <CookiePolicy onNavigate={handleNavigation} />
          </div>
        )}
      </main>
    </div>
  );
}

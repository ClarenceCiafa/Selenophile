"use client";

import React, { useState } from "react";
import {
  Home,
  Moon,
  Camera,
  Calendar,
  Radio,
  Star,
  ImageIcon,
  User,
  LayoutGrid,
  X,
} from "lucide-react";

interface SidebarProps {
  currentView: string;
  onNavigate: (id: string) => void;
}

const menuItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "phases", label: "Fasi", icon: Moon },
  { id: "photography", label: "Foto", icon: Camera },
  { id: "calendar", label: "Eventi", icon: Calendar, desktopOnly: true },
  { id: "hub", label: "Hub", icon: Radio, desktopOnly: true },
  { id: "facts", label: "Curiosita", icon: Star },
  { id: "gallery", label: "Galleria", icon: ImageIcon },
  { id: "bio", label: "Bio", icon: User },
];

export function Sidebar({ currentView, onNavigate }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setPopoverOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          bottom-0 left-0 w-full h-16 border-t border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md flex flex-row items-center justify-between px-2 overflow-hidden
          md:top-0 md:h-full md:bg-[#0a0a0a] md:border-t-0 md:border-r md:border-white/5 md:flex-col md:justify-start md:px-0
          ${isExpanded ? "md:w-72" : "md:w-20"} md:hover:w-72`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo Area (Desktop only) */}
        <div
          className={`hidden md:flex h-24 items-center justify-center w-full cursor-pointer relative ${isExpanded ? "px-6" : ""}`}
          onClick={() => handleNavigate("home")}
        >
          <div
            className={`relative flex items-center justify-center transition-all duration-300 flex-shrink-0 ${isExpanded ? "mr-4" : "mr-0"}`}
          >
            <div className="w-10 h-10 text-white relative z-10">
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
          </div>

          <div
            className="transition-all duration-300 origin-left overflow-hidden whitespace-nowrap"
            style={{
              width: isExpanded ? "auto" : "0px",
              opacity: isExpanded ? 1 : 0,
            }}
          >
            <h1 className="text-xl font-bold text-white tracking-[0.2em] uppercase font-sans">
              Selenophile
            </h1>
            <p className="text-xs text-gray-400 font-light -mt-1 tracking-wider">
              by Francesca
            </p>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-row justify-evenly w-full items-center md:flex-col md:gap-2 md:py-8 md:px-3 md:overflow-visible md:justify-start">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            if (item.id === "calendar") {
              return (
                <React.Fragment key={item.id}>
                  {/* Desktop: Calendar Button */}
                  <button
                    onClick={() => handleNavigate("calendar")}
                    className={`hidden md:flex relative items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 focus:outline-none group
                      w-full h-14 text-left active:scale-100
                      ${isActive ? "bg-white/5" : "hover:bg-white/5"}
                      ${isExpanded ? "justify-start" : "justify-center"}`}
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 relative z-10">
                      <Calendar className={`w-6 h-6 transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`} />
                    </div>
                    <span
                      className={`whitespace-nowrap font-light tracking-wide transition-all duration-300 origin-left ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                      style={{
                        opacity: isExpanded ? 1 : 0,
                        transform: isExpanded ? "translateX(0)" : "translateX(10px)",
                        position: isExpanded ? "static" : "absolute",
                        visibility: isExpanded ? "visible" : "hidden",
                      }}
                    >
                      {item.label}
                    </span>
                    <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
                  </button>

                  {/* Mobile: "Data" Group Button */}
                  <button
                    onClick={() => setPopoverOpen(!popoverOpen)}
                    className={`flex md:hidden relative items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 focus:outline-none group w-12 h-12 active:scale-95 ${popoverOpen ? "bg-white/10" : "hover:bg-white/10"}`}
                  >
                    {popoverOpen ? (
                      <X className="w-5 h-5 text-white transition-colors" />
                    ) : (
                      <LayoutGrid className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    )}
                  </button>
                </React.Fragment>
              );
            }

            if (item.id === "hub") {
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigate("hub")}
                  className={`hidden md:flex relative items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 focus:outline-none group
                    w-full h-14 text-left active:scale-100
                    ${isActive ? "bg-white/5" : "hover:bg-white/5"}
                    ${isExpanded ? "justify-start" : "justify-center"}`}
                >
                  <div className="flex items-center justify-center flex-shrink-0 w-14 h-14 relative z-10">
                    <Radio className={`w-6 h-6 transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`} />
                  </div>
                  <span
                    className={`whitespace-nowrap font-light tracking-wide transition-all duration-300 origin-left ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                    style={{
                      opacity: isExpanded ? 1 : 0,
                      transform: isExpanded ? "translateX(0)" : "translateX(10px)",
                      position: isExpanded ? "static" : "absolute",
                      visibility: isExpanded ? "visible" : "hidden",
                    }}
                  >
                    {item.label}
                  </span>
                  <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`relative flex items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 focus:outline-none group
                  w-12 h-12 active:scale-95
                  md:w-full md:h-14 md:text-left md:active:scale-100
                  ${isActive ? "bg-white/10 md:bg-white/5" : "hover:bg-white/10 md:hover:bg-white/5"}
                  ${isExpanded ? "md:justify-start" : "md:justify-center"}`}
              >
                <div className="flex items-center justify-center flex-shrink-0 w-6 h-6 md:w-14 md:h-14 relative z-10">
                  <Icon className={`w-6 h-6 transition-colors ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`} />
                </div>

                <span
                  className={`hidden md:block whitespace-nowrap font-light tracking-wide transition-all duration-300 origin-left ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}
                  style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? "translateX(0)" : "translateX(10px)",
                    position: isExpanded ? "static" : "absolute",
                    visibility: isExpanded ? "visible" : "hidden",
                  }}
                >
                  {item.label}
                </span>

                {/* Active indicator desktop */}
                <div className={`hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />

                {/* Mobile active dot */}
                {isActive && (
                  <div className="md:hidden absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Popover Menu */}
      {popoverOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={() => setPopoverOpen(false)}
          />
          <div className="fixed bottom-20 left-4 right-4 z-50 bg-[#111111] border border-white/10 rounded-2xl p-3 shadow-2xl md:hidden animate-in slide-in-from-bottom-4 duration-200">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => handleNavigate("hub")}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Radio className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-light">Hub</span>
              </button>
              <button
                onClick={() => handleNavigate("calendar")}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl text-white bg-white/5 hover:bg-white/10 transition-colors"
              >
                <Calendar className="w-6 h-6 text-gray-400" />
                <span className="text-sm font-light">Eventi</span>
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

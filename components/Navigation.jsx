"use client"

import { useState } from "react"
import Image from "next/image"

export default function Navigation({ activeSection, scrollToSection }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-white/20 border-b-[1] py-3.5"
      style={{
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.95) 100%)",
      }}
    >
      {/* Cyberpunk Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <svg className="w-full h-full" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <defs>
              <pattern id="cyber-circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M10,10 L90,10 L90,20 L80,20 L80,30 L90,30 L90,40 L70,40 L70,50 L90,50 L90,60 L60,60 L60,70 L90,70 L90,80 L50,80 L50,90 L90,90" 
                      stroke="#00ff88" strokeWidth="1.5" fill="none" opacity="0.8">
                  <animate attributeName="stroke-dasharray" values="0,200;200,0;0,200" dur="6s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#00ff88;#ff0080;#00ff88" dur="2s" repeatCount="indefinite"/>
                </path>
                <circle cx="20" cy="20" r="2" fill="#00ff88" opacity="0.9">
                  <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#ff0080;#00ff88" dur="2s" repeatCount="indefinite"/>
                </circle>
                <circle cx="80" cy="80" r="2" fill="#ff0080" opacity="0.9">
                  <animate attributeName="opacity" values="0.1;0.9;0.1" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ff88;#ff0080" dur="2s" repeatCount="indefinite"/>
                </circle>
                <rect x="40" y="40" width="4" height="4" fill="#00ffff" opacity="0.7">
                  <animate attributeName="opacity" values="0.7;0.1;0.7" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#ff0080;#00ffff" dur="1.5s" repeatCount="indefinite"/>
                </rect>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cyber-circuit)"/>
          </svg>
        </div>
        {/* Glitch overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse"></div>
      </div>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between w-full">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 font-semibold leading-7 drop-shadow-sm text-xl lg:text-3xl hover:scale-105 transition-transform duration-300 flex-shrink-0"
            style={{ color: "#ffffff" }}
          >
            <Image src="/aa-logo.png" alt="" width={48} height={48} className="rounded-lg w-10 h-10 sm:w-12 sm:h-12" priority />
            <span>Anurag Aggarwal</span>
          </button>
          <div className="hidden md:flex items-center space-x-3 flex-shrink-0">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item.toLowerCase())}
                className={`font-medium transition-all duration-300 drop-shadow-sm text-base px-3 py-2 rounded-lg transform hover:scale-105 hover:shadow-lg relative overflow-hidden ${
                  activeSection === item.toLowerCase() ? "scale-105 shadow-xl" : ""
                }`}
                style={{
                  color: activeSection === item.toLowerCase() ? "#ffffff" : "#e2e8f0",
                  background:
                    activeSection === item.toLowerCase()
                      ? "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)"
                      : "rgba(30, 41, 59, 0.15)",
                  border: activeSection === item.toLowerCase() 
                    ? "1px solid rgba(6, 182, 212, 0.5)" 
                    : "1px solid rgba(148, 163, 184, 0.2)",
                  backdropFilter: "blur(10px)",
                }}
                onMouseEnter={(e) => {
                  if (activeSection !== item.toLowerCase()) {
                    e.target.style.background = "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)"
                    e.target.style.border = "1px solid rgba(6, 182, 212, 0.4)"
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.toLowerCase()) {
                    e.target.style.background = "rgba(30, 41, 59, 0.15)"
                    e.target.style.border = "1px solid rgba(148, 163, 184, 0.2)"
                  }
                }}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-2xl hover:scale-110 transition-transform duration-300 flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/20">
            <div className="flex flex-col space-y-3 pt-4">
              {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => handleNavClick(item.toLowerCase())}
                  className={`font-medium transition-all duration-300 text-lg px-4 py-3 rounded-lg text-left ${
                    activeSection === item.toLowerCase() ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                  style={{ color: "#ffffff" }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

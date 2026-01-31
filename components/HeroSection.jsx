"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection({ scrollToSection }) {
  return (
    <section
      className="section-container relative flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Cyberpunk Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="hero-cyber" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                <path d="M20,20 L180,20 L180,40 L160,40 L160,60 L180,60 L180,80 L140,80 L140,100 L180,100 L180,120 L120,120 L120,140 L180,140 L180,160 L100,160 L100,180 L180,180" 
                      stroke="#00ff88" strokeWidth="2.5" fill="none" opacity="0.7">
                  <animate attributeName="stroke-dasharray" values="0,400;400,0;0,400" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#00ff88;#ff0080;#00ffff;#00ff88" dur="3s" repeatCount="indefinite"/>
                </path>
                <circle cx="40" cy="40" r="4" fill="#00ff88" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#ff0080;#00ff88" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="160" cy="160" r="4" fill="#ff0080" opacity="0.8">
                  <animate attributeName="opacity" values="0.1;0.8;0.1" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ffff;#ff0080" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <rect x="80" y="80" width="10" height="10" fill="#00ffff" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#ff0080;#00ffff" dur="2s" repeatCount="indefinite"/>
                </rect>
                <polygon points="50,50 70,50 60,70" fill="#ff0080" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.9;0.5" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ff88;#ff0080" dur="1.5s" repeatCount="indefinite"/>
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-cyber)"/>
          </svg>
        </div>
        {/* Glitch effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
      </div>
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-text {
          background: linear-gradient(-45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #dda0dd, #98d8c8);
          background-size: 400% 400%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 4s ease infinite;
        }
      `}</style>

      <div className="container text-center relative z-10 flex-1 flex flex-col justify-center items-center">
        <div className="mb-10">
          <div className="relative mx-auto mb-6 w-[min(300px,80vw)] h-[min(300px,80vw)]">
            <Image
              src="/ProfilePic.jpg"
              alt="Anurag Aggarwal"
              fill
              className="rounded-full object-cover border-violet-400 border-4 shadow-lg"
            />
          </div>
          <h1 className="font-bold gradient-text mt-0 mb-0.5 responsive-text py-3" style={{fontSize: 'clamp(2.5rem, 8vw, 4.5rem)'}}>Anurag Aggarwal</h1>
          <p
            className="text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6 mt-2 responsive-text"
            style={{ color: "#f8fafc", fontSize: 'clamp(1.125rem, 3vw, 1.5rem)' }}
          >
            Mechatronics + AI engineer — building intelligent hardware and software that solve real-world problems. 
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Button
              size="lg"
              className="px-20 py-8 rounded-full text-2xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl border-0 backdrop-blur-md"
              style={{
                background: "rgba(14, 165, 233, 0.3)",
                border: "3px solid rgba(14, 165, 233, 0.5)",
                color: "#ffffff",
                backdropFilter: "blur(10px)",
                boxShadow: "0 12px 40px rgba(14, 165, 233, 0.4)",
                minHeight: "60px",
              }}
              onClick={() => scrollToSection("experience")}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-20 py-8 rounded-full text-2xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl backdrop-blur-md bg-transparent"
              style={{
                border: "3px solid rgba(255, 255, 255, 0.4)",
                color: "#ffffff",
                background: "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 12px 40px rgba(0, 0, 0, 0.3)",
                minHeight: "60px",
              }}
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center gap-8">
            <button
              onClick={() => window.open("https://github.com/Aaggar68", "_blank")}
              className="group p-5 rounded-full transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #374151 0%, #111827 100%)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <svg
                className="w-8 h-8 text-white group-hover:text-green-400 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </button>

            <button
              onClick={() => window.open("https://www.linkedin.com/in/aaggar68", "_blank")}
              className="group p-5 rounded-full transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <svg
                className="w-8 h-8 text-white group-hover:text-blue-200 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </button>

            <button
              onClick={() => window.open("mailto:aaggar68@uwo.ca", "_blank")}
              className="group p-5 rounded-full transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <svg
                className="w-8 h-8 text-white group-hover:text-red-200 transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <div className="flex justify-center pb-8">
        <button
          onClick={() => scrollToSection("about")}
          className="text-white hover:text-yellow-300 transition-all duration-300 animate-bounce hover:scale-110 p-3 rounded-full backdrop-blur-sm"
          style={{ 
            color: "#ffffff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
          aria-label="Scroll to about section"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}

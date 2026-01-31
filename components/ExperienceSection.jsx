"use client"

import { useState } from "react"

export default function ExperienceSection() {
  const [showTimeline, setShowTimeline] = useState(false)

  const experiences = [
    {
      title: "Embedded Systems and Mechatronics Developer",
      company: "Tethos Association",
      period: "Sept. 2025 – Present",
      description:
        "Collaborating on an interactive sensor glove: designing casing + circuit prototypes, integrating sensors on Arduino, and aligning hardware data with gameplay logic for responsive motion mapping.",
      timelineDescription: [
        "Collaborated on material selection, glove casing design, and circuit prototypes with mechanical and electrical teams.",
        "Programmed an Arduino Uno to integrate a gyroscope, flex sensors, and other inputs to improve input reliability for the interactive game.",
        "Provided hardware–software integration guidance to align sensor data with game logic, reducing iteration and rework.",
        "Helped enable accurate glove-to-hand motion mapping, improving responsiveness and realism of the control interface.",
      ]
    },
    {
      title: "Computer Vision & AI-Powered Automation Intern",
      company: "Kissan Engineers (Casting)",
      period: "May – Sept. 2025",
      description:
        "Built a CV-based defect inspection ML system and supporting data workflows to reduce manual operator checks and enable real-time defect flagging on the production line.",
      timelineDescription: [
        "Designed a CV-based defect-inspection ML model to identify improperly cast parts, reducing operator checks by 62%.",
        "Improved the model’s inference rate by 30% via image normalization, ROI cropping, and color-space optimization.",
        "Delivered Python-based ETL workflows generating CSV quality reports for structured analysis and model fine-tuning.",
        "Supported integration into Vision Autoflow for real-time defective-part flagging without disrupting other processes.",
      ]
    },
    {
      title: "CNC Machinist",
      company: "A-line Precision Tool Ltd.",
      period: "Mar. – Aug. 2023",
      description:
        "Led process improvements and operator guidance for intricate CNC components, focusing on GD&T, tooling optimization, and quality checks to reduce downtime and rework.",
      timelineDescription: [
        "Trained a team of 4 machinists on GD&T, machining nuances, and optimized tooling, reducing shop downtime by 35%.",
        "Documented process tweaks in procedures for intricate components to improve reproducibility and reduce rework/scrap.",
        "Oversaw shop-floor production of intricate components, reducing tool failures and unplanned downtime by 24%.",
        "Guided operators on pre-inspection quality checks, identifying surface-finish issues and improving shop efficiency by 44%.",
      ]
    },
  ]

  return (
    <section
      id="experience"
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
              <pattern id="experience-cyber" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
                <path d="M18,18 L162,18 L162,36 L144,36 L144,54 L162,54 L162,72 L126,72 L126,90 L162,90 L162,108 L108,108 L108,126 L162,126 L162,144 L90,144 L90,162 L162,162" 
                      stroke="#00ffff" strokeWidth="2" fill="none" opacity="0.5">
                  <animate attributeName="stroke-dasharray" values="0,360;360,0;0,360" dur="9s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#00ffff;#00ff88;#ff0080;#00ffff" dur="3s" repeatCount="indefinite"/>
                </path>
                <circle cx="36" cy="36" r="3" fill="#00ffff" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2.2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#00ff88;#00ffff" dur="2.8s" repeatCount="indefinite"/>
                </circle>
                <circle cx="144" cy="144" r="3" fill="#00ff88" opacity="0.6">
                  <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2.2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#ff0080;#00ff88" dur="2.8s" repeatCount="indefinite"/>
                </circle>
                <rect x="72" y="72" width="10" height="10" fill="#ff0080" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ffff;#ff0080" dur="2.2s" repeatCount="indefinite"/>
                </rect>
                <polygon points="54,54 72,54 63,72" fill="#00ff88" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#00ffff;#00ff88" dur="1.8s" repeatCount="indefinite"/>
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#experience-cyber)"/>
          </svg>
        </div>
        {/* Glitch effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/4 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
      </div>
      <div className="container flex-1 flex flex-col">
        <div className="my-auto">
          <h2 className="font-bold text-center mb-6 responsive-text" style={{ color: "#ffffff", fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}>
            Roles & Impact — What I built and why it mattered.
          </h2>
          <p className="text-center mb-12 responsive-text leading-relaxed max-w-4xl mx-auto" style={{ color: "#f1f5f9", fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            Real projects — from prototype to demo — that solved real problems, saved time, and taught me how to build smarter.
          </p>

          <div className="text-center mb-12">
            <button
              onClick={() => setShowTimeline(!showTimeline)}
              className="px-20 py-6 rounded-full font-bold text-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
              style={{
                background: showTimeline
                  ? "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 50%, #0891b2 100%)"
                  : "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 50%, #0891b2 100%)",
                color: "#ffffff",
                border: "3px solid rgba(6, 182, 212, 0.4)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              {showTimeline ? "Display Roles" : "Show Impact"}
            </button>
          </div>

          {showTimeline ? (
            // Timeline View
            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
                style={{ background: "linear-gradient(to bottom, #8b5cf6, #06b6d4, #10b981)" }}
              ></div>

              <div className="space-y-8">
                {experiences.map((job, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div
                      className="absolute left-6 w-6 h-6 rounded-full border-4 z-10 animate-pulse"
                      style={{
                        background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                        borderColor: "#ffffff",
                      }}
                    ></div>

                    {/* Timeline content */}
                    <div
                      className="ml-20 rounded-xl p-8 shadow-lg border transform transition-all duration-300"
                      style={{
                        background: "rgba(0, 0, 0, 0.6)",
                        backdropFilter: "blur(10px)",
                        borderColor: "rgba(255, 255, 255, 0.2)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-2px)"
                        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)"
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)"
                        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <h3 className="text-2xl font-bold" style={{ color: "#ffffff" }}>
                          {job.title}
                        </h3>
                        <span
                          className="font-bold px-5 py-3 rounded-full text-lg"
                          style={{
                            color: "#ffffff",
                            background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                            fontWeight: "700",
                          }}
                        >
                          {job.period}
                        </span>
                      </div>
                      <p className="font-semibold mb-4 text-lg" style={{ color: "#f0f9ff" }}>
                        {job.company}
                      </p>
                      <ul className="space-y-3">
                        {job.timelineDescription.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start">
                            <span className="flex-shrink-0 w-2 h-2 rounded-full mt-2 mr-3" style={{ background: "#06b6d4" }}></span>
                            <span className="leading-relaxed text-lg" style={{ color: "#ffffff" }}>
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // Card View (updated layout)
            <div className="grid lg:grid-cols-2 xl:grid-cols-2 gap-6 justify-items-center">
              {experiences.map((job, index) => (
                <div
                  key={index}
                  className="rounded-xl p-8 shadow-lg border transition-all duration-300 cursor-pointer w-full max-w-sm"
                  style={{
                    background: "rgba(0, 0, 0, 0.4)",
                    backdropFilter: "blur(10px)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)"
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)"
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                      {job.title}
                    </h3>
                    <p className="font-semibold mb-4 text-lg" style={{ color: "#f0f9ff" }}>
                      {job.company}
                    </p>
                    <span
                      className="inline-block font-bold rounded-full text-lg px-5 py-3"
                      style={{
                        color: "#ffffff",
                        background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                        fontWeight: "700",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>
                  <p className="leading-relaxed text-center text-lg" style={{ color: "#ffffff" }}>
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <button
          onClick={() => window.scrollTo({ top: document.getElementById("projects").offsetTop, behavior: "smooth" })}
          className="text-white hover:text-yellow-300 transition-all duration-300 animate-bounce p-3 rounded-full backdrop-blur-sm"
          style={{ 
            color: "#ffffff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
          aria-label="Scroll to projects section"
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

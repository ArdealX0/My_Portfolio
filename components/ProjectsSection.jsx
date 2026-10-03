"use client"

import Image from "next/image"
import { useState } from "react"
import { Brain, Bot, Database, Activity } from "lucide-react"
import { projects } from "@/lib/portfolio"

const projectIcons = { vision: Brain, robot: Bot, database: Database, data: Activity }

export default function ProjectsSection() {
  const [currentProjectSet, setCurrentProjectSet] = useState(0)
  
  // Chunk projects into sets (avoid empty pages)
  const chunkSize = 4
  const projectSets = []
  for (let i = 0; i < projects.length; i += chunkSize) {
    const chunk = projects.slice(i, i + chunkSize)
    if (chunk.length > 0) projectSets.push(chunk)
  }
  
  const currentProjects = projectSets[currentProjectSet] || projects.slice(0, 4)
  
  const handleNextProjects = () => {
    setCurrentProjectSet((prev) => (prev + 1) % projectSets.length)
  }

  return (
    <section
      id="projects"
      className="section-container relative flex flex-col"
      style={{
        background: "linear-gradient(135deg, #475569 0%, #334155 30%, #1e293b 70%, #0f172a 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Cyberpunk Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-8">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="projects-cyber" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
                <path d="M16,16 L144,16 L144,32 L128,32 L128,48 L144,48 L144,64 L112,64 L112,80 L144,80 L144,96 L96,96 L96,112 L144,112 L144,128 L80,128 L80,144 L144,144" 
                      stroke="#00ff88" strokeWidth="2" fill="none" opacity="0.4">
                  <animate attributeName="stroke-dasharray" values="0,320;320,0;0,320" dur="8s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#00ff88;#ff0080;#00ffff;#00ff88" dur="2.8s" repeatCount="indefinite"/>
                </path>
                <circle cx="32" cy="32" r="2.5" fill="#00ff88" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;0.1;0.6" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#ff0080;#00ff88" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="128" cy="128" r="2.5" fill="#ff0080" opacity="0.6">
                  <animate attributeName="opacity" values="0.1;0.6;0.1" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ffff;#ff0080" dur="2.5s" repeatCount="indefinite"/>
                </circle>
                <rect x="64" y="64" width="9" height="9" fill="#00ffff" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.3s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#00ff88;#00ffff" dur="2s" repeatCount="indefinite"/>
                </rect>
                <polygon points="48,48 64,48 56,64" fill="#ff0080" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.1s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ffff;#ff0080" dur="1.7s" repeatCount="indefinite"/>
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#projects-cyber)"/>
          </svg>
        </div>
        {/* Glitch effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/4 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
      </div>
      <div className="container flex-1 flex flex-col">
        <div className="my-auto">
          <h2 className="font-bold text-center mb-6 responsive-text" style={{ color: "#ffffff", fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}>
            Projects, prototypes & lessons learned.
          </h2>
          <p className="text-center mb-12 responsive-text leading-relaxed max-w-4xl mx-auto" style={{ color: "#f1f5f9", fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            Computer vision, embedded robotics, electronics, and data pipelines — built through coursework, teamwork, and plenty of testing.
          </p>
          <div className="flex flex-col items-center gap-8">
            {/* Projects Grid */}
            <div className={`grid gap-6 justify-items-center max-w-4xl mx-auto ${
              currentProjects.length === 1 
                ? "grid-cols-1 justify-center" 
                : "grid-cols-1 sm:grid-cols-2"
            }`}>
          {currentProjects.map((project) => {
            const ProjectIcon = projectIcons[project.icon] || Brain
            return (
            <div
              key={project.title}
              className="rounded-xl p-6 shadow-lg border transition-all duration-300 cursor-pointer hover:scale-105 w-full max-w-md relative"
              style={{
                background: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(10px)",
                borderColor: "rgba(255, 255, 255, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.5)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(0, 0, 0, 0.4)"
              }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-3" style={{ color: "#ffffff" }}>
                  {project.title}
                </h3>
                <span
                  className="inline-block font-bold rounded-full text-sm px-3 py-2"
                  style={{
                    color: "#ffffff",
                    background: "linear-gradient(135deg, #0ea5e9, #06b6d4)",
                    fontWeight: "700",
                  }}
                >
                  {project.timeSpan}
                </span>
              </div>
              
              <div className="mb-4 rounded-lg overflow-hidden relative h-48 bg-black/30">
                {project.thumbnail ? <Image
                  src={project.thumbnail}
                  alt={`${project.title}: ${project.thumbnailCaption || "preview"}`}
                  fill
                  sizes="(max-width: 639px) 90vw, 400px"
                  className={`${project.thumbnailFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 hover:scale-105`}
                /> : (
                  <div className="h-full flex flex-col items-center justify-center gap-4 bg-white/5 text-white/80 text-center px-4">
                    <ProjectIcon className="w-14 h-14" aria-hidden="true" />
                    <span className="text-sm font-medium">{project.category}</span>
                  </div>
                )}
              </div>
              {project.video && (
                <details className="mb-4 text-white">
                  <summary className="cursor-pointer text-sm text-center font-semibold rounded-lg border border-white/30 p-2 hover:bg-white/10">Watch prototype demo</summary>
                  <video controls playsInline preload="none" className="mt-3 w-full h-72 rounded-lg bg-black" aria-label={`${project.title} prototype demo`}>
                    <source src={project.video} type="video/mp4" />
                    Your browser cannot play this video. <a href={project.video}>Open the prototype demo</a>.
                  </video>
                </details>
              )}
              {project.mediaLinks && (
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {project.mediaLinks.map((media) => (
                    <a key={media.href} href={media.href} target="_blank" rel="noopener noreferrer" className="text-sm text-cyan-200 underline underline-offset-4 hover:text-white">{media.label}</a>
                  ))}
                </div>
              )}
              
              <p className="leading-relaxed text-center text-lg mb-4" style={{ color: "#ffffff" }}>
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-semibold border"
                    style={{
                      background: "rgba(0, 0, 0, 0.3)",
                      color: "#ffffff",
                      borderColor: "rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="text-center">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 font-semibold text-sm"
                    style={{
                      background: "rgba(255, 255, 255, 0.1)",
                      color: "#ffffff",
                      border: "2px solid rgba(255, 255, 255, 0.3)",
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
            )
          })}
          </div>
          
          {/* Bottom scroll button */}
          {projectSets.length > 1 && (
            <div className="flex justify-center">
              <button
                onClick={handleNextProjects}
                className="flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-300 hover:shadow-2xl"
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  color: "#ffffff",
                }}
              >
                <span className="text-lg font-semibold">
                  {currentProjectSet === 0 ? "View More Projects" : "View Previous Projects"}
                </span>
                <svg 
                  className={`w-6 h-6 transition-transform duration-300 ${currentProjectSet === 0 ? 'rotate-0' : 'rotate-180'}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <button
          onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="text-white hover:text-yellow-300 transition-all duration-300 animate-bounce hover:scale-110 p-3 rounded-full backdrop-blur-sm"
          style={{ 
            color: "#ffffff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
          aria-label="Scroll to skills section"
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

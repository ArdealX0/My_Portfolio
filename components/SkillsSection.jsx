"use client"

export default function SkillsSection() {
  const mainSkills = [
    { 
      name: "Python",
      colors: {
        background: "rgba(0, 123, 191, 0.1)",
        border: "rgba(0, 123, 191, 0.3)",
        dot: "#007bbf"
      }
    },
    { 
      name: "Java",
      colors: {
        background: "rgba(220, 38, 127, 0.1)",
        border: "rgba(220, 38, 127, 0.3)",
        dot: "#dc267f"
      }
    },
    { 
      name: "C/C++",
      colors: {
        background: "rgba(118, 185, 0, 0.1)",
        border: "rgba(118, 185, 0, 0.3)",
        dot: "#76b900"
      }
    },
    { 
      name: "Embedded C",
      colors: {
        background: "rgba(66, 133, 244, 0.1)",
        border: "rgba(66, 133, 244, 0.3)",
        dot: "#4285f4"
      }
    },
    { 
      name: "JavaScript",
      colors: {
        background: "rgba(255, 140, 0, 0.1)",
        border: "rgba(255, 140, 0, 0.3)",
        dot: "#ff8c00"
      }
    },
    { 
      name: "MySQL",
      colors: {
        background: "rgba(156, 39, 176, 0.1)",
        border: "rgba(156, 39, 176, 0.3)",
        dot: "#9c27b0"
      }
    },
    { 
      name: "MongoDB",
      colors: {
        background: "rgba(255, 193, 7, 0.1)",
        border: "rgba(255, 193, 7, 0.3)",
        dot: "#ffc107"
      }
    },
    { 
      name: "Git",
      colors: {
        background: "rgba(244, 67, 54, 0.1)",
        border: "rgba(244, 67, 54, 0.3)",
        dot: "#f44336"
      }
    },
    { 
      name: "Docker",
      colors: {
        background: "rgba(0, 150, 136, 0.1)",
        border: "rgba(0, 150, 136, 0.3)",
        dot: "#009688"
      }
    },
    { 
      name: "Linux",
      colors: {
        background: "rgba(76, 175, 80, 0.1)",
        border: "rgba(76, 175, 80, 0.3)",
        dot: "#4caf50"
      }
    },
    { 
      name: "PyTorch",
      colors: {
        background: "rgba(33, 150, 243, 0.1)",
        border: "rgba(33, 150, 243, 0.3)",
        dot: "#2196f3"
      }
    },
    { 
      name: "TensorFlow",
      colors: {
        background: "rgba(255, 140, 0, 0.1)",
        border: "rgba(255, 140, 0, 0.3)",
        dot: "#ff8c00"
      }
    },
    { 
      name: "TinyML",
      colors: {
        background: "rgba(156, 39, 176, 0.1)",
        border: "rgba(156, 39, 176, 0.3)",
        dot: "#9c27b0"
      }
    },
    { 
      name: "Scikit-learn",
      colors: {
        background: "rgba(0, 123, 191, 0.1)",
        border: "rgba(0, 123, 191, 0.3)",
        dot: "#007bbf"
      }
    },
    { 
      name: "NumPy",
      colors: {
        background: "rgba(220, 38, 127, 0.1)",
        border: "rgba(220, 38, 127, 0.3)",
        dot: "#dc267f"
      }
    },
    { 
      name: "OpenCV",
      colors: {
        background: "rgba(118, 185, 0, 0.1)",
        border: "rgba(118, 185, 0, 0.3)",
        dot: "#76b900"
      }
    },
    { 
      name: "Hugging Face",
      colors: {
        background: "rgba(66, 133, 244, 0.1)",
        border: "rgba(66, 133, 244, 0.3)",
        dot: "#4285f4"
      }
    },
    { 
      name: "Arduino",
      colors: {
        background: "rgba(255, 193, 7, 0.1)",
        border: "rgba(255, 193, 7, 0.3)",
        dot: "#ffc107"
      }
    },
    { 
      name: "Raspberry Pi",
      colors: {
        background: "rgba(76, 175, 80, 0.1)",
        border: "rgba(76, 175, 80, 0.3)",
        dot: "#4caf50"
      }
    },
    { 
      name: "ESP32",
      colors: {
        background: "rgba(244, 67, 54, 0.1)",
        border: "rgba(244, 67, 54, 0.3)",
        dot: "#f44336"
      }
    },
    { 
      name: "PCB Design",
      colors: {
        background: "rgba(0, 150, 136, 0.1)",
        border: "rgba(0, 150, 136, 0.3)",
        dot: "#009688"
      }
    },
    { 
      name: "Soldering",
      colors: {
        background: "rgba(33, 150, 243, 0.1)",
        border: "rgba(33, 150, 243, 0.3)",
        dot: "#2196f3"
      }
    },
    { 
      name: "TinkerCAD",
      colors: {
        background: "rgba(156, 39, 176, 0.1)",
        border: "rgba(156, 39, 176, 0.3)",
        dot: "#9c27b0"
      }
    },
    { 
      name: "MicroCap",
      colors: {
        background: "rgba(255, 140, 0, 0.1)",
        border: "rgba(255, 140, 0, 0.3)",
        dot: "#ff8c00"
      }
    },
    { 
      name: "SolidWorks",
      colors: {
        background: "rgba(0, 123, 191, 0.1)",
        border: "rgba(0, 123, 191, 0.3)",
        dot: "#007bbf"
      }
    },
    { 
      name: "AutoCAD",
      colors: {
        background: "rgba(220, 38, 127, 0.1)",
        border: "rgba(220, 38, 127, 0.3)",
        dot: "#dc267f"
      }
    },
    { 
      name: "3D Printing",
      colors: {
        background: "rgba(118, 185, 0, 0.1)",
        border: "rgba(118, 185, 0, 0.3)",
        dot: "#76b900"
      }
    },
    { 
      name: "Simulink",
      colors: {
        background: "rgba(66, 133, 244, 0.1)",
        border: "rgba(66, 133, 244, 0.3)",
        dot: "#4285f4"
      }
    },
    { 
      name: "GD&T",
      colors: {
        background: "rgba(255, 193, 7, 0.1)",
        border: "rgba(255, 193, 7, 0.3)",
        dot: "#ffc107"
      }
    },
    { 
      name: "Precision Machining",
      colors: {
        background: "rgba(76, 175, 80, 0.1)",
        border: "rgba(76, 175, 80, 0.3)",
        dot: "#4caf50"
      }
    },
    { 
      name: "FEA",
      colors: {
        background: "rgba(244, 67, 54, 0.1)",
        border: "rgba(244, 67, 54, 0.3)",
        dot: "#f44336"
      }
    },
    { 
      name: "Quality Inspection",
      colors: {
        background: "rgba(0, 150, 136, 0.1)",
        border: "rgba(0, 150, 136, 0.3)",
        dot: "#009688"
      }
    },
  ]

  // Supplemented with tools and skills verified on the current LinkedIn profile.
  const additionalSkills = ["SQL", "Google BigQuery", "Google Colab", "Keras", "Faker", "Onshape", "NLP", "PWM Motor Control", "Computer Vision", "Vector Databases", "Quality Assurance", "Regression Testing", "System Integration Testing", "Jira", "Salesforce Testing", "PLC Integration", "Mastercam"]
    .map((name, index) => ({ name, colors: mainSkills[index % mainSkills.length].colors }))
  const currentSkills = [...mainSkills, ...additionalSkills]

  const certifications = [
    { 
      name: "CSWA – Certified SolidWorks Associate", 
      thumbnail: "/FavIcon.svg", 
      date: "Oct. 2024",
      verificationLink: "https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-ZVKXSA543B",
      colors: {
        background: "rgba(0, 123, 191, 0.1)",
        border: "rgba(0, 123, 191, 0.4)",
        hover: "rgba(0, 123, 191, 0.8)"
      }
    },
  ]

  return (
    <section
      id="skills"
      className="section-container relative flex flex-col"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #334155 70%, #475569 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Cyberpunk Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-6">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="skills-cyber" x="0" y="0" width="140" height="140" patternUnits="userSpaceOnUse">
                <path d="M14,14 L126,14 L126,28 L112,28 L112,42 L126,42 L126,56 L98,56 L98,70 L126,70 L126,84 L84,84 L84,98 L126,98 L126,112 L70,112 L70,126 L126,126" 
                      stroke="#ff0080" strokeWidth="2" fill="none" opacity="0.3">
                  <animate attributeName="stroke-dasharray" values="0,280;280,0;0,280" dur="7s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#ff0080;#00ff88;#00ffff;#ff0080" dur="2.6s" repeatCount="indefinite"/>
                </path>
                <circle cx="28" cy="28" r="2.5" fill="#ff0080" opacity="0.5">
                  <animate attributeName="opacity" values="0.5;0.1;0.5" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ff88;#ff0080" dur="2.3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="112" cy="112" r="2.5" fill="#00ff88" opacity="0.5">
                  <animate attributeName="opacity" values="0.1;0.5;0.1" dur="1.8s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#00ffff;#00ff88" dur="2.3s" repeatCount="indefinite"/>
                </circle>
                <rect x="56" y="56" width="8" height="8" fill="#00ffff" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.2s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#ff0080;#00ffff" dur="1.9s" repeatCount="indefinite"/>
                </rect>
                <polygon points="42,42 56,42 49,56" fill="#00ff88" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#00ffff;#00ff88" dur="1.6s" repeatCount="indefinite"/>
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#skills-cyber)"/>
          </svg>
        </div>
        {/* Glitch effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/3 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
      </div>
      <div className="container flex-1 flex flex-col">
        <div className="my-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="font-bold mb-6 responsive-text" style={{ color: "#ffffff", fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}>
              Tools I build and test with.
            </h2>
            <p className="responsive-text leading-relaxed max-w-4xl mx-auto" style={{ color: "#f1f5f9", fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
              The tools behind my work in AI, embedded systems, manufacturing, data engineering, and software quality assurance.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8" style={{ color: "#ffffff" }}>
              Technical Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {currentSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg transition-all duration-300"
                  style={{
                    background: skill.colors.background,
                    backdropFilter: "blur(10px)",
                    border: `1px solid ${skill.colors.border}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)"
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.2)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: skill.colors.dot }} />
                    <span className="font-medium text-lg" style={{ color: "#ffffff" }}>
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-center mb-8" style={{ color: "#ffffff" }}>
              Certifications & Training
            </h3>
            <div className="flex flex-wrap justify-center gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="relative w-96 h-48 rounded-xl transition-all duration-300 overflow-hidden group cursor-pointer p-6 flex items-center justify-center"
                  style={{
                    background: cert.colors.background,
                    backdropFilter: "blur(10px)",
                    border: `2px solid ${cert.colors.border}`,
                    minWidth: "384px",
                    maxWidth: "384px",
                  }}
                  onClick={() => {
                    if (cert.verificationLink) {
                      window.open(cert.verificationLink, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)"
                    e.currentTarget.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.3)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  {/* Date label button */}
                  <div className="absolute top-3 right-3 z-10">
                    <span
                      className="px-2 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm"
                      style={{
                        background: cert.colors.background,
                        color: "#ffffff",
                        borderColor: cert.colors.border,
                      }}
                    >
                      {cert.date}
                    </span>
                  </div>

                  {/* Text content */}
                  <div className="text-center">
                    <span className="text-base font-semibold leading-relaxed text-center text-white">
                      {cert.name}
                    </span>
                    {cert.verificationLink && (
                      <div className="mt-2 flex items-center justify-center">
                        <span className="text-xs text-white/70 flex items-center gap-1">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                          </svg>
                          Click to verify
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Hover effect border */}
                  <div 
                    className="absolute inset-0 border-2 border-transparent group-hover:border-opacity-50 rounded-xl transition-all duration-300"
                    style={{
                      borderColor: cert.colors.hover
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-8">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
          className="text-white hover:text-blue-400 transition-all duration-300 animate-bounce p-3 rounded-full backdrop-blur-sm"
          style={{ 
            color: "#ffffff",
            background: "rgba(255, 255, 255, 0.1)",
            border: "2px solid rgba(255, 255, 255, 0.2)",
          }}
          aria-label="Scroll to contact section"
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

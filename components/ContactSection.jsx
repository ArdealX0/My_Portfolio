"use client"

import { Button } from "@/components/ui/button"
import { Mail, LinkedinIcon, MessageCircle, Coffee, Lightbulb, Handshake, Rocket } from "lucide-react"
import { profileLinks } from "@/lib/portfolio"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="section-container relative overflow-hidden flex flex-col"
      style={{
        background: "linear-gradient(135deg, #475569 0%, #334155 30%, #1e293b 70%, #0f172a 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Cyberpunk Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-4">
          <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
            <defs>
              <pattern id="contact-cyber" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                <path d="M12,12 L108,12 L108,24 L96,24 L96,36 L108,36 L108,48 L84,48 L84,60 L108,60 L108,72 L72,72 L72,84 L108,84 L108,96 L60,96 L60,108 L108,108" 
                      stroke="#00ffff" strokeWidth="2" fill="none" opacity="0.2">
                  <animate attributeName="stroke-dasharray" values="0,240;240,0;0,240" dur="6s" repeatCount="indefinite"/>
                  <animate attributeName="stroke" values="#00ffff;#00ff88;#ff0080;#00ffff" dur="2.4s" repeatCount="indefinite"/>
                </path>
                <circle cx="24" cy="24" r="2.5" fill="#00ffff" opacity="0.4">
                  <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.6s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ffff;#00ff88;#00ffff" dur="2.1s" repeatCount="indefinite"/>
                </circle>
                <circle cx="96" cy="96" r="2.5" fill="#00ff88" opacity="0.4">
                  <animate attributeName="opacity" values="0.1;0.4;0.1" dur="1.6s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#ff0080;#00ff88" dur="2.1s" repeatCount="indefinite"/>
                </circle>
                <rect x="48" y="48" width="7" height="7" fill="#ff0080" opacity="0.3">
                  <animate attributeName="opacity" values="0.3;0.6;0.3" dur="1.1s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#ff0080;#00ffff;#ff0080" dur="1.8s" repeatCount="indefinite"/>
                </rect>
                <polygon points="36,36 48,36 42,48" fill="#00ff88" opacity="0.2">
                  <animate attributeName="opacity" values="0.2;0.4;0.2" dur="0.9s" repeatCount="indefinite"/>
                  <animate attributeName="fill" values="#00ff88;#00ffff;#00ff88" dur="1.5s" repeatCount="indefinite"/>
                </polygon>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-cyber)"/>
          </svg>
        </div>
        {/* Glitch effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/2 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"></div>
      </div>

      <div className="container text-center relative z-10 flex-1 flex flex-col">
        <div className="my-auto">
          <div className="mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Rocket className="w-8 h-8 text-white animate-bounce" />
              <h2 className="responsive-text font-bold text-white text-balance" style={{ fontSize: 'clamp(2rem, 6vw, 3.75rem)' }}>Let's build something useful.</h2>
              <Lightbulb className="w-8 h-8 text-yellow-300 animate-pulse" />
            </div>
            <p className="responsive-text text-white/90 max-w-2xl mx-auto text-pretty" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
              Internships, project collaborations, and conversations about engineering.
            </p>
          </div>

          <p className="max-w-4xl mx-auto leading-relaxed mb-16 responsive-text text-white/95 text-pretty" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}>
            I'm looking for a summer 2027 internship where I can contribute to computer vision, robotics, automation,
            or software engineering. I also enjoy collaborating on hands-on projects — from embedded prototypes and
            data pipelines to testing the software that connects them.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 border border-white/20">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <LinkedinIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Internships & Opportunities</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect on LinkedIn to talk about summer 2027 internships, engineering teams, and the work I'm building toward.
            </p>
            <Button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white rounded-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open(profileLinks.linkedin, "_blank", "noopener,noreferrer")}
            >
              <LinkedinIcon className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </Button>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 border border-white/20">
            <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Project Collaborations</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Have a project in mind? Email me at <span className="font-semibold break-all">{profileLinks.email}</span> or call <span className="font-semibold">(647) 649-4667</span>. I'd love to hear what you're working on.
            </p>
            <Button
              className="w-full bg-red-500 hover:bg-red-600 text-white rounded-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() =>
                window.open(`mailto:${profileLinks.email}?subject=Project Collaboration`, "_blank")
              }
            >
              <Mail className="w-5 h-5 mr-2" />
              Email for Projects
            </Button>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300 border border-white/20 md:col-span-2 lg:col-span-1">
            <div className="bg-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Casual Coffee Chat</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Let's compare notes on robotics, AI, prototype mishaps, or whatever you're curious about. Coffee is always a good starting point.
            </p>
            <Button
              className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-full py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => window.open("https://www.instagram.com/anurag.aggarwal_/", "_blank")}
            >
              <Coffee className="w-5 h-5 mr-2" />
              Let's Grab Coffee
            </Button>
          </div>
        </div>

        <div className="bg-black/60 backdrop-blur-md rounded-3xl p-8 mb-12 border border-white/30 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Handshake className="w-8 h-8 text-white animate-pulse" />
            <span className="text-2xl font-bold text-white">Have an idea or an opportunity?</span>
          </div>
          <p className="text-lg text-white/95 mb-8 max-w-2xl mx-auto text-pretty">
            Tell me about the problem, the team, or the prototype. I'm happy to discuss where my experience fits
            and what we could build together.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="px-12 py-4 bg-white text-primary hover:bg-white/90 rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl"
              onClick={() => window.open(`mailto:${profileLinks.email}?subject=Let%27s%20connect`, "_blank")}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Let's Chat!
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-4 border-2 border-white text-white hover:bg-white hover:text-primary rounded-full text-xl font-bold transition-all duration-300 hover:scale-110 hover:shadow-2xl bg-black/20 backdrop-blur-sm"
              onClick={() => {
                const link = document.createElement("a")
                link.href = "/Anurag's_Resume.pdf"
                link.download = "Anurag's_Resume.pdf"
                link.click()
              }}
            >
              Download Resume
            </Button>
          </div>
        </div>

        <p className="text-lg text-white/80 font-medium">The best way to reach me is by email or LinkedIn.</p>
        </div>
      </div>
    </section>
  )
}

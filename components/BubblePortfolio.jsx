"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { Bot, Cpu, Cog, MessagesSquare, UserRound, ArrowUpRight, ArrowLeft, X, Github, Linkedin, Mail, FileText, Pause, Play, Check, Palette, Activity, Coffee } from "lucide-react"
import { projects, profileLinks } from "@/lib/portfolio"
import { experiences } from "@/lib/experience"
import { stepBubbles } from "@/lib/bubble-physics.mjs"
import "./bubble-portfolio.css"
import LiquidWater from "./LiquidWater"

const sections = [
  { id: "projects", label: "Projects", icon: Bot, colour: "blue", note: "Things I've built", x: .29, y: .22, size: 240 },
  { id: "about", label: "About Me", icon: UserRound, colour: "ice", note: "The person behind the work", x: .13, y: .52, size: 190 },
  { id: "skills", label: "Skills", icon: Cpu, colour: "violet", note: "My toolkit", x: .80, y: .25, size: 218 },
  { id: "experience", label: "Experience", icon: Cog, colour: "green", note: "Where I've made an impact", x: .82, y: .76, size: 224 },
  { id: "contact", label: "Let’s Talk", icon: MessagesSquare, colour: "peach", note: "Start a conversation", x: .32, y: .79, size: 200 },
]
const navigationSections = ["skills", "projects", "about", "experience", "contact"].map(id => sections.find(section => section.id === id))
const palettes = [
  { id: "midnight", name: "Ocean Glass", colours: ["#063945", "#71e5de", "#7bbcff", "#b7adff"] },
  { id: "warm", name: "Sunset Glass", colours: ["#54253d", "#ffa48e", "#ffd5a3", "#e8a6ec"] },
  { id: "earth", name: "Lagoon Glass", colours: ["#174a3a", "#b0e99b", "#78dec4", "#e8da9b"] },
  { id: "cool", name: "Aurora Glass", colours: ["#34366c", "#b4a7ff", "#8dccff", "#f4a5db"] },
]
const decorations = [
  { x: .16, y: .13, size: 55, colour: "blue" },
  { x: .21, y: .35, size: 35, colour: "blue" },
  { x: .68, y: .12, size: 42, colour: "violet" },
  { x: .92, y: .42, size: 48, colour: "violet" },
  { x: .93, y: .63, size: 38, colour: "green" },
  { x: .70, y: .88, size: 36, colour: "green" },
  { x: .20, y: .79, size: 42, colour: "peach" },
  { x: .44, y: .88, size: 34, colour: "peach" },
]
const skills = [
  { title: "Code & data", items: ["Python", "Java", "C/C++", "Embedded C", "JavaScript", "SQL", "MySQL", "MongoDB", "Google BigQuery", "Faker", "Git", "Docker", "Linux"] },
  { title: "AI & computer vision", items: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "NumPy", "OpenCV", "Computer Vision", "Hugging Face", "TinyML", "NLP", "Vector Databases", "Google Colab"] },
  { title: "Hardware & making", items: ["Arduino", "ESP32", "Raspberry Pi", "PCB Design", "Soldering", "PWM Motor Control", "PLC Integration", "TinkerCAD", "MicroCap", "3D Printing"] },
  { title: "Design & manufacturing", items: ["SolidWorks", "Onshape", "AutoCAD", "Mastercam", "Simulink", "GD&T", "Precision Machining", "FEA", "Quality Inspection"] },
  { title: "Software quality", items: ["Quality Assurance", "Regression Testing", "System Integration Testing", "Jira", "Salesforce Testing"] },
]
const photos = [
  ["/GroupSaintPat.jpg", "With friends on Saint Patrick’s Day"],
  ["/TreeHug.jpg", "A moment outdoors"],
  ["/CaskeSmash.jpg", "A birthday celebration"],
  ["/TobermoryLakeside.jpg", "At the lakeside in Tobermory"],
  ["/anufish.jpg", "A fishing trip"],
  ["/GroupBirthday.jpg", "A birthday with friends"],
]

function BubbleField({ onOpen, paused, suspended, reducedMotion }) {
  const field = useRef(null), hero = useRef(null), elements = useRef([])
  const simulation = useRef([]), held = useRef(-1), drag = useRef(null)
  const motionState = useRef({paused,suspended,reducedMotion})
  motionState.current = {paused,suspended,reducedMotion}
  const [dragging, setDragging] = useState(null)
  const all = [...sections, ...decorations]

  useEffect(() => {
    const root = field.current
    let frame, previous = 0, elapsed = 0, bounds, obstacle
    const draw = () => simulation.current.forEach((node, i) => {
      if (elements.current[i]) elements.current[i].style.transform = `translate3d(${node.x - node.r}px, ${node.y - node.r}px, 0)`
    })
    const layout = () => {
      const rect = root.getBoundingClientRect()
      bounds = { width: rect.width, height: rect.height }
      const mobile = rect.width < 700
      const compact = rect.width < 1000
      const mobilePositions = [[.28,.14],[.25,.39],[.74,.24],[.73,.63],[.28,.82]]
      simulation.current = all.map((item, i) => {
        const position = mobile && i < 5 ? mobilePositions[i] : [item.x,item.y]
        const size = i < 5 ? mobile ? (i === 0 ? 138 : 120) : compact ? item.size * .72 : item.size * Math.min(1, rect.width / 1350, rect.height / 720) : item.size * (mobile ? .55 : 1)
        const x = position[0] * rect.width, y = position[1] * rect.height
        if (elements.current[i]) {
          elements.current[i].style.width = `${size}px`
          elements.current[i].style.height = `${size}px`
        }
        const phase = i * 2.399 + .45
        const speed = (i < 5 ? .7 : 1.05) * (mobile ? .7 : 1)
        return { x,y,r:size/2,vx:Math.cos(phase)*speed,vy:Math.sin(phase)*speed,phase,speed,fixed:false }
      })
      const text = hero.current.getBoundingClientRect()
      obstacle = mobile ? null : {left:text.left-rect.left-6,right:text.right-rect.left+6,top:text.top-rect.top-8,bottom:text.bottom-rect.top+8}
      // On smaller screens the introduction sits above the field.
      draw()
    }
    layout()
    const observer = new ResizeObserver(layout)
    observer.observe(root)
    const animate = (now) => {
      const dt = previous ? Math.min((now-previous)/1000,.033) : 1/60
      previous = now
      const motion = motionState.current
      if (!document.hidden && !motion.paused && !motion.suspended && !motion.reducedMotion) {
        elapsed += dt
        stepBubbles(simulation.current,bounds,dt,elapsed,obstacle)
        draw()
      }
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => { cancelAnimationFrame(frame); observer.disconnect() }
  // Palette changes don't reset the scene.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const release = () => {
    if (drag.current) {
      const node = simulation.current[drag.current.index]
      if (node) node.fixed = false
    }
    held.current = -1
    setDragging(null)
  }
  return (
    <div className="bubble-field" ref={field}>
      <div className="bubble-intro" ref={hero}>
        <span className="eyebrow">MECHATRONICS + AI · WESTERN UNIVERSITY</span>
        <h1>Anurag Aggarwal<span className="intro-period">.</span></h1>
        <p>Building things that sense,<br className="mobile-break" /> think, and move.</p>
        <a className="resume-link" href="/Anurag's_Resume.pdf" target="_blank" rel="noopener noreferrer"><FileText size={16} /> Resume <ArrowUpRight size={15} /></a>
        <div className="explore-hint"><p>Pick a bubble to explore.</p><span>{paused||reducedMotion?"Take your time. Make yourself at home.":"A little curiosity goes a long way. Try a gentle drag."}</span></div>
      </div>
      {all.map((item,i) => {
        const isSection = i < 5
        const Icon = item.icon
        const style = {left:0,top:0,"--bubble-colour":`var(--bubble-${item.colour})`}
        if (!isSection) return <span key={`decoration-${i}`} ref={el=>elements.current[i]=el} className="bubble-orb bubble-decoration" style={style} aria-hidden="true" />
        return <button key={item.id} ref={el=>elements.current[i]=el} className={`bubble-orb bubble-button ${dragging===i ? "is-dragging" : ""}`} style={style}
          aria-label={`Explore ${item.label}`} aria-haspopup="dialog"
          onPointerEnter={()=>{ if (!drag.current && simulation.current[i]) simulation.current[i].fixed=true }}
          onPointerLeave={e=>{ if (!drag.current && simulation.current[i] && document.activeElement !== e.currentTarget) simulation.current[i].fixed=false }}
          onFocus={()=>{ if (simulation.current[i]) simulation.current[i].fixed=true }}
          onBlur={()=>{ if (simulation.current[i]) simulation.current[i].fixed=false }}
          onPointerDown={e=>{
            if (e.button !== 0) return
            const n=simulation.current[i]
            if (!n) return
            e.currentTarget.setPointerCapture(e.pointerId)
            drag.current={index:i,x:e.clientX,y:e.clientY,lastX:e.clientX,lastY:e.clientY,lastTime:e.timeStamp,initialX:n.x,initialY:n.y,moved:false}
            held.current=i; n.fixed=true
          }}
          onPointerMove={e=>{
            if (held.current!==i || !drag.current || paused || reducedMotion) return
            const d=drag.current,n=simulation.current[i],rect=field.current.getBoundingClientRect()
            const dx=e.clientX-d.x,dy=e.clientY-d.y
            if (Math.hypot(dx,dy)>6) {d.moved=true;setDragging(i)}
            if (!d.moved) return
            n.x=Math.max(n.r,Math.min(rect.width-n.r,d.initialX+dx))
            n.y=Math.max(n.r,Math.min(rect.height-n.r,d.initialY+dy))
            const frames=Math.max((e.timeStamp-d.lastTime)*.06,.5)
            const vx=(e.clientX-d.lastX)/frames,vy=(e.clientY-d.lastY)/frames
            const scale=Math.min(1,4/Math.max(Math.hypot(vx,vy),.001))
            n.vx=vx*scale;n.vy=vy*scale
            d.lastX=e.clientX;d.lastY=e.clientY;d.lastTime=e.timeStamp
            elements.current[i].style.transform=`translate3d(${n.x-n.r}px,${n.y-n.r}px,0)`
          }}
          onPointerUp={release} onPointerCancel={()=>{release();drag.current=null}}
          onClick={e=>{
            const wasDragged=e.detail!==0 && drag.current?.moved
            drag.current=null
            if (!wasDragged) onOpen(item.id,e.currentTarget)
          }}>
          <span className="bubble-button-content"><Icon strokeWidth={1.35} aria-hidden="true" /><strong>{item.label}</strong><span className="bubble-note">{item.note} <ArrowUpRight size={12}/></span></span>
        </button>
      })}
    </div>
  )
}

function AboutContent() {
  return <div className="about-layout">
    <div className="about-copy">
      <p className="lead">Hi, I’m Anurag. I like figuring out how things work, building something from that understanding, and learning from the parts that don’t quite work the first time.</p>
      <p>I’m studying Mechatronics and Artificial Intelligence Systems Engineering in Western University’s co-op honours program, with graduation planned for 2028. Before university, I completed a diploma in CNC operation and programming, working with FANUC machines, SolidWorks, and Mastercam.</p>
      <p>I’m currently a Software Quality Assurance Analyst Intern at Health | Santé. Previously, I contributed to an interactive sensor glove at Tethos. My project focus is SpatialMind: exploring how a vision system can remember objects and understand changes over time.</p>
      <p>I’ve coordinated beginner robotics workshops and helped classmates learn CAD. Sharing the debugging process is part of what I enjoy about building.</p>
      <div className="personal-note"><Coffee size={22}/><p>Outside the lab: coffee, a workout, and time with friends. Always up for trading prototype stories.</p></div>
    </div>
    <div className="photo-journal">
      <div className="portrait"><Image src="/ProfilePic.jpg" alt="Anurag Aggarwal" width={600} height={700} className="portrait-image" /></div>
      <p className="small-note">A little life outside the lab.</p>
      <div className="life-photos">{photos.map(([src,alt])=><a key={src} href={src} target="_blank" rel="noopener noreferrer" aria-label={`Open photo: ${alt}`}><Image src={src} alt={alt} width={300} height={300}/></a>)}</div>
    </div>
  </div>
}

function ProjectsContent() {
  const [filter,setFilter]=useState("All")
  const groups=["AI & vision","Hardware","Data"]
  const groupFor = i => ["AI & vision","AI & vision","Hardware","Data","Hardware","Data","Data"][i]
  const visible=projects.map((p,i)=>({...p,group:groupFor(i)})).filter(p=>filter==="All"||p.group===filter)
  return <>
    <div className="filter-row" role="group" aria-label="Filter projects">{["All",...groups].map(f=><button key={f} aria-pressed={filter===f} onClick={()=>setFilter(f)}>{f}{f==="All"&&<span>{projects.length}</span>}</button>)}</div>
    <div className="project-grid">{visible.map(project=><article className="project-card" key={project.title}>
      <div className={`project-image ${project.thumbnailFit==="contain"?"contain":""} ${project.thumbnailRotate?"rotated":""}`}>
        {project.thumbnail ? <Image src={project.thumbnail} alt={`${project.title}: ${project.thumbnailCaption||"preview"}`} width={700} height={460} style={{objectPosition:project.thumbnailPosition||"50% 50%"}} sizes="(max-width: 700px) 90vw, 500px" /> : <div className="project-placeholder"><Activity strokeWidth={1}/><span>Healthcare data & machine learning</span></div>}
      </div>
      <div className="project-body"><div className="project-meta"><span>{project.group}</span><span>{project.timeSpan}</span></div><h3>{project.title}</h3><p>{project.description}</p>
        <div className="skill-tags">{project.tech.map(tech=><span key={tech}>{tech}</span>)}</div>
        {project.video&&<details className="demo-disclosure"><summary><Play size={15}/> Watch prototype demo</summary><video controls playsInline preload="none" aria-label={`${project.title} prototype demo`}><source src={project.video} type="video/mp4"/>Your browser cannot play this video. <a href={project.video}>Open demo</a>.</video></details>}
        <div className="project-links">{project.github&&<a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={16}/> GitHub <ArrowUpRight size={14}/></a>}{project.mediaLinks?.map(link=><a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<ArrowUpRight size={14}/></a>)}</div>
      </div>
    </article>)}</div>
  </>
}

function ExperienceContent() {
  return <div className="experience-list">{experiences.map(job=><article key={`${job.company}-${job.title}`} className="experience-item"><div className="experience-date"><span className="timeline-dot"/><span>{job.period}</span>{job.current&&<span className="current-tag">CURRENT</span>}</div><div className="experience-body"><span className="company-name">{job.company} · {job.employmentType}</span><h3>{job.title}</h3><p className="experience-location">{job.location}</p><p>{job.description}</p><details className="impact-disclosure"><summary>Explore the impact <ArrowUpRight size={15}/></summary><ul>{job.timelineDescription.map(point=><li key={point}>{point}</li>)}</ul></details></div></article>)}</div>
}

function SkillsContent() {
  return <><div className="toolkit-grid">{skills.map(group=><article key={group.title} className="toolkit-card"><h3>{group.title}</h3><div className="skill-tags">{group.items.map(skill=><span key={skill}>{skill}</span>)}</div></article>)}</div><div className="certification"><div><span className="eyebrow">CERTIFICATION · OCTOBER 2024</span><h3>Certified SolidWorks Associate</h3><p>CSWA · Mechanical Design</p></div><a href="https://cv.virtualtester.com/qr/?b=SLDWRKS&i=C-ZVKXSA543B" target="_blank" rel="noopener noreferrer">Verify certificate <ArrowUpRight size={16}/></a></div></>
}

function ContactContent() {
  return <div className="contact-layout"><div><p className="lead">An interesting problem, a new collaboration, or just a good conversation.</p><p>I’m looking for a summer 2027 internship in computer vision, robotics, automation, or software engineering. I also enjoy collaborating on embedded prototypes, data pipelines, and the software that connects them.</p><a className="contact-email" href={`mailto:${profileLinks.email}`}>{profileLinks.email}<ArrowUpRight size={24}/></a><a className="phone-link" href="tel:+16476494667">(647) 649-4667</a></div><div className="contact-options"><a href={profileLinks.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin/><div><strong>Connect on LinkedIn</strong><span>Internships & opportunities</span></div><ArrowUpRight/></a><a href={profileLinks.github} target="_blank" rel="noopener noreferrer"><Github/><div><strong>Explore my GitHub</strong><span>Code, experiments & projects</span></div><ArrowUpRight/></a><a href="https://www.instagram.com/anurag.aggarwal_/" target="_blank" rel="noopener noreferrer"><Coffee/><div><strong>Grab a coffee</strong><span>Say hello outside the lab</span></div><ArrowUpRight/></a><a href="/Anurag's_Resume.pdf" download><FileText/><div><strong>Download résumé</strong><span>A closer look at my background</span></div><ArrowUpRight/></a></div></div>
}

const content = {about:AboutContent,projects:ProjectsContent,experience:ExperienceContent,skills:SkillsContent,contact:ContactContent}
const headlines = {about:"Maker, mentor, always learning.",projects:"Ideas made real.",experience:"Learning by doing.",skills:"Tools I build and test with.",contact:"Let’s build something useful."}
const descriptions = {about:"A little about the person behind the prototypes.",projects:"Computer vision, embedded robotics, electronics, and data — with plenty of testing along the way.",experience:"The teams, challenges, and experiences that shaped how I work.",skills:"From the first sketch to the final quality check.",contact:"Open to summer 2027 internships, collaborations, and a good coffee chat."}

export default function BubblePortfolio() {
  const [theme,setTheme]=useState("midnight"), [active,setActive]=useState(null), [paused,setPaused]=useState(false), [reducedMotion,setReducedMotion]=useState(false), [paletteOpen,setPaletteOpen]=useState(false)
  const opener=useRef(null)
  useEffect(()=>{
    const motion=window.matchMedia("(prefers-reduced-motion: reduce)")
    const update=()=>setReducedMotion(motion.matches)
    update();motion.addEventListener("change",update)
    try { const saved=localStorage.getItem("anurag-palette");if(palettes.some(p=>p.id===saved))setTheme(saved) } catch {}
    const sync=()=>{const id=window.location.hash.slice(1);setActive(sections.some(s=>s.id===id)?id:null)}
    sync();window.addEventListener("popstate",sync);window.addEventListener("hashchange",sync)
    return ()=>{motion.removeEventListener("change",update);window.removeEventListener("popstate",sync);window.removeEventListener("hashchange",sync)}
  },[])
  const selectTheme=id=>{setTheme(id);try{localStorage.setItem("anurag-palette",id)}catch{}}
  const open=(id,element)=>{if(element)opener.current=element;setActive(id);setPaletteOpen(false);window.history.pushState(null,"",`#${id}`)}
  const close=()=>{setActive(null);window.history.replaceState(null,"",window.location.pathname+window.location.search)}
  const ActiveContent=content[active]
  return <div className="bubble-site" data-theme={theme}>
    <LiquidWater theme={theme} paused={paused} reducedMotion={reducedMotion}/>
    <a className="skip-link" href="#quick-navigation">Skip to navigation</a>
    <header className="bubble-header"><a className="brand" href="#" aria-label="Anurag Aggarwal home" onClick={e=>{e.preventDefault();close()}}><Image src="/aa-logo.png" alt="" width={46} height={46}/><span>ANURAG<span>AGGARWAL</span></span></a><div className="header-tools"><span className="availability"><i/> OPEN FOR SUMMER 2027</span><button className="icon-control" aria-label="Choose colour scheme" aria-expanded={paletteOpen} onClick={()=>setPaletteOpen(!paletteOpen)}><Palette size={19}/></button><button className="icon-control" aria-label={paused||reducedMotion?"Resume motion":"Pause motion"} aria-pressed={paused||reducedMotion} disabled={reducedMotion} title={reducedMotion?"Motion reduced to match your device preference":undefined} onClick={()=>setPaused(!paused)}>{paused||reducedMotion?<Play size={17}/>:<Pause size={17}/>}</button></div></header>
    {paletteOpen&&<div className="palette-picker"><div className="palette-picker-title"><span>Make yourself at home.</span><button aria-label="Close colour choices" onClick={()=>setPaletteOpen(false)}><X size={16}/></button></div>{palettes.map(p=><button key={p.id} aria-pressed={theme===p.id} onClick={()=>selectTheme(p.id)}><span className="palette-swatches">{p.colours.map(c=><i key={c} style={{background:c}}/>)}</span><span>{p.name}</span>{theme===p.id&&<Check size={16}/>}</button>)}</div>}
    <main className="bubble-home"><BubbleField onOpen={open} paused={paused} suspended={!!active} reducedMotion={reducedMotion}/></main>
    <footer className="bubble-footer"><span>© {new Date().getFullYear()} Anurag Aggarwal</span><nav id="quick-navigation" aria-label="Quick portfolio navigation">{navigationSections.map(section=><button key={section.id} onClick={e=>open(section.id,e.currentTarget)}>{section.label}</button>)}</nav><a href={`mailto:${profileLinks.email}`} aria-label="Email Anurag"><Mail size={17}/></a></footer>
    <Dialog.Root open={!!active} onOpenChange={value=>{if(!value)close()}}><Dialog.Portal><div className="bubble-site bubble-dialog-theme" data-theme={theme}><Dialog.Overlay className="portfolio-overlay"/><Dialog.Content className="portfolio-panel" onCloseAutoFocus={e=>{e.preventDefault();opener.current?.focus()}} aria-modal="true"><div className="panel-topbar"><Dialog.Close className="back-button"><ArrowLeft size={16}/> Back to bubbles</Dialog.Close><nav aria-label="Portfolio sections">{navigationSections.map(s=><button key={s.id} aria-current={s.id===active?"page":undefined} onClick={()=>open(s.id)}>{s.label}</button>)}</nav><Dialog.Close className="icon-control" aria-label="Close section"><X size={20}/></Dialog.Close></div><div className="panel-scroll" key={active}><div className="panel-heading"><span className="eyebrow">{sections.find(s=>s.id===active)?.label}</span><Dialog.Title>{headlines[active]}</Dialog.Title><Dialog.Description>{descriptions[active]}</Dialog.Description></div>{ActiveContent&&<ActiveContent/>}<div className="panel-bottom"><span>Keep exploring.</span>{navigationSections.filter(s=>s.id!==active).map(s=><button key={s.id} onClick={()=>open(s.id)}>{s.label}<ArrowUpRight size={14}/></button>)}</div></div></Dialog.Content></div></Dialog.Portal></Dialog.Root>
  </div>
}

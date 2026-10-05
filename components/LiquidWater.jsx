"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const waterColours = {
  midnight: [[.015,.105,.16],[.02,.48,.49],[.72,.98,.96]],
  warm: [[.15,.045,.17],[.52,.20,.31],[1,.77,.61]],
  earth: [[.025,.12,.10],[.10,.39,.29],[.72,.96,.68]],
  cool: [[.065,.045,.20],[.25,.24,.55],[.77,.84,1]],
}

const vertex = `
attribute vec2 position;
void main() { gl_Position = vec4(position, 0., 1.); }
`

// Interfering waves produce the shifting light patterns seen on water.
// This is rendered directly, rather than sliding a photograph across the page.
const fragment = `
precision highp float;
uniform vec2 resolution;
uniform float time;
uniform vec3 deepColour, shallowColour, lightColour;
uniform vec4 ripples[8];
float caustics(vec2 uv, float t) {
  vec2 p=mod(uv*6.283185,6.283185)-250.;
  vec2 flow=p;
  float light=1.;
  for(int n=0;n<5;n++) {
    float phase=t*(1.-3.5/(float(n)+1.));
    flow=p+vec2(cos(phase-flow.x)+sin(phase+flow.y),sin(phase-flow.y)+cos(phase+flow.x));
    vec2 ray=vec2(p.x/(sin(flow.x+phase)/.005),p.y/(cos(flow.y+phase)/.005));
    light+=1./max(length(ray),.001);
  }
  light=1.17-pow(light/5.,1.4);
  return clamp(pow(abs(light),8.),0.,1.);
}
void main() {
  vec2 uv=gl_FragCoord.xy/resolution;
  vec2 p=(gl_FragCoord.xy-.5*resolution)/min(resolution.x,resolution.y);
  float t=time;
  float rippleLight=0.;
  for(int n=0;n<8;n++) {
    float age=t-ripples[n].z;
    if(age>=0. && age<3.) {
      vec2 delta=(uv-ripples[n].xy)*resolution/min(resolution.x,resolution.y);
      float distance=length(delta);
      float envelope=exp(-abs(distance-age*.22)*34.)*exp(-age*1.3)*ripples[n].w;
      float wave=sin(distance*100.-age*22.)*envelope;
      p+=delta/max(distance,.001)*wave*.025;
      rippleLight+=max(wave,0.)*.55;
    }
  }
  p += .08*vec2(sin(p.y*4.+t*.22),cos(p.x*3.-t*.18));
  float primary=caustics(p*1.1+vec2(t*.035,t*.018),t);
  float depth=.57+.19*sin(p.x*2.+p.y*1.5+t*.12);
  vec3 colour=mix(deepColour,shallowColour,depth);
  colour+=lightColour*(primary*.58+pow(primary,5.)*.18+rippleLight);
  float shade=1.-.20*length(uv-.5);
  colour*=shade;
  gl_FragColor=vec4(colour,1.);
}
`

export default function LiquidWater({ theme, paused, suspended, reducedMotion }) {
  const canvas = useRef(null)
  const cursor = useRef(null)
  const [mounted,setMounted] = useState(false)
  const wake = useRef(null)
  const state = useRef({theme,paused,suspended,reducedMotion})
  state.current = {theme,paused,suspended,reducedMotion}
  useEffect(()=>{setMounted(true)},[])

  useEffect(() => {
    const surface = canvas.current
    const gl = surface.getContext("webgl",{alpha:false,antialias:false,depth:false,powerPreference:"low-power"})
    if (!gl) return // The styled layer underneath remains a usable backdrop.
    const shaders = []
    const compile = (type,source) => {
      const shader=gl.createShader(type)
      gl.shaderSource(shader,source);gl.compileShader(shader)
      shaders.push(shader)
      return gl.getShaderParameter(shader,gl.COMPILE_STATUS) ? shader : null
    }
    const vs=compile(gl.VERTEX_SHADER,vertex), fs=compile(gl.FRAGMENT_SHADER,fragment)
    if (!vs || !fs) { shaders.forEach(s=>gl.deleteShader(s));return }
    const program=gl.createProgram()
    gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program)
    if (!gl.getProgramParameter(program,gl.LINK_STATUS)) {
      shaders.forEach(s=>gl.deleteShader(s));gl.deleteProgram(program);return
    }
    gl.useProgram(program)
    const buffer=gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER,buffer)
    gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW)
    const position=gl.getAttribLocation(program,"position")
    gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0)
    const uniforms=Object.fromEntries(["resolution","time","deepColour","shallowColour","lightColour","ripples[0]"].map(name=>[name,gl.getUniformLocation(program,name)]))
    let frame=0, previous=0, elapsed=12, lastDraw=0, lastTheme, dirty=true
    const rippleData=new Float32Array(32)
    for(let i=0;i<8;i++) rippleData[i*4+2]=-100
    let rippleIndex=0, lastRippleAt=0, lastPointer=null
    const finePointer=window.matchMedia("(any-pointer: fine)")
    const hideCursor=()=>{
      document.documentElement.classList.remove("liquid-cursor-enabled")
      if(cursor.current) {cursor.current.dataset.visible="false";cursor.current.dataset.pressed="false"}
      lastPointer=null
    }
    const addRipple=(event,strength)=>{
      if(state.current.paused||state.current.suspended||state.current.reducedMotion||document.hidden) return
      const rect=surface.getBoundingClientRect(), offset=rippleIndex*4
      rippleData[offset]=(event.clientX-rect.left)/rect.width
      rippleData[offset+1]=1-(event.clientY-rect.top)/rect.height
      rippleData[offset+2]=elapsed;rippleData[offset+3]=strength
      rippleIndex=(rippleIndex+1)%8
    }
    const pointerMove=event=>{
      if(event.pointerType==="touch"||!finePointer.matches) {hideCursor();return}
      if(cursor.current) {
        document.documentElement.classList.add("liquid-cursor-enabled")
        cursor.current.dataset.visible="true"
        cursor.current.dataset.interactive=event.target instanceof Element && !!event.target.closest("a,button,summary,input,textarea,select") ? "true" : "false"
        cursor.current.style.transform=`translate3d(${event.clientX}px,${event.clientY}px,0)`
      }
      const travelled=lastPointer?Math.hypot(event.clientX-lastPointer.x,event.clientY-lastPointer.y):Infinity
      if(event.timeStamp-lastRippleAt>65 && travelled>18) {
        addRipple(event,.65);lastRippleAt=event.timeStamp
        lastPointer={x:event.clientX,y:event.clientY}
      }
    }
    const pointerDown=event=>{
      if(event.pointerType==="touch"||!finePointer.matches) return
      addRipple(event,1.)
      if(cursor.current) cursor.current.dataset.pressed="true"
    }
    const pointerUp=()=>{if(cursor.current)cursor.current.dataset.pressed="false"}
    const keyDown=event=>{if(event.key==="Tab")hideCursor()}
    window.addEventListener("pointermove",pointerMove,{passive:true})
    window.addEventListener("pointerdown",pointerDown,{passive:true})
    window.addEventListener("pointerup",pointerUp,{passive:true})
    window.addEventListener("blur",hideCursor)
    window.addEventListener("keydown",keyDown)
    document.documentElement.addEventListener("pointerleave",hideCursor)
    const resize=()=>{
      // Cap resolution to keep the moving background light on phones and GPUs.
      const limit=window.matchMedia("(max-width: 699px)").matches ? 640 : 900
      const ratio=Math.min(1,limit/Math.max(surface.clientWidth,surface.clientHeight))
      surface.width=Math.max(1,Math.round(surface.clientWidth*ratio))
      surface.height=Math.max(1,Math.round(surface.clientHeight*ratio))
      gl.viewport(0,0,surface.width,surface.height)
      gl.uniform2f(uniforms.resolution,surface.width,surface.height)
      dirty=true
      wake.current?.()
    }
    resize()
    const observer=new ResizeObserver(resize);observer.observe(surface)
    const draw=now=>{
      frame=0
      const motion=state.current
      const moving=!motion.paused&&!motion.suspended&&!motion.reducedMotion&&!document.hidden
      if (moving && previous) elapsed+=Math.min((now-previous)/1000,.05)
      previous=now
      if (motion.theme!==lastTheme) {
        const colours=waterColours[motion.theme] || waterColours.midnight
        gl.uniform3fv(uniforms.deepColour,colours[0]);gl.uniform3fv(uniforms.shallowColour,colours[1]);gl.uniform3fv(uniforms.lightColour,colours[2])
        lastTheme=motion.theme;dirty=true
      }
      if (dirty || (moving && now-lastDraw>=32)) {
        gl.uniform1f(uniforms.time,elapsed);gl.uniform4fv(uniforms["ripples[0]"],rippleData);gl.drawArrays(gl.TRIANGLES,0,6)
        dirty=false;lastDraw=now
      }
      if(moving) frame=requestAnimationFrame(draw)
    }
    wake.current=()=>{
      // Redraw changed colours or dimensions once, without keeping idle loops alive.
      previous=0
      if(!frame) frame=requestAnimationFrame(draw)
    }
    const visibility=()=>{
      cancelAnimationFrame(frame);frame=0;previous=0
      if(!document.hidden) wake.current?.()
    }
    document.addEventListener("visibilitychange",visibility)
    wake.current()
    return ()=>{
      cancelAnimationFrame(frame);observer.disconnect()
      document.removeEventListener("visibilitychange",visibility)
      wake.current=null
      window.removeEventListener("pointermove",pointerMove)
      window.removeEventListener("pointerdown",pointerDown)
      window.removeEventListener("pointerup",pointerUp)
      window.removeEventListener("blur",hideCursor)
      window.removeEventListener("keydown",keyDown)
      document.documentElement.removeEventListener("pointerleave",hideCursor)
      hideCursor()
      gl.deleteBuffer(buffer);gl.deleteProgram(program);shaders.forEach(s=>gl.deleteShader(s))
    }
  },[])
  useEffect(()=>{wake.current?.()},[theme,paused,suspended,reducedMotion])

  return <><div className="liquid-water" aria-hidden="true"><canvas ref={canvas}/><div className="water-shade"/></div>{mounted&&createPortal(<div className="liquid-cursor" ref={cursor} aria-hidden="true" data-visible="false"><span/></div>,document.body)}</>
}

import test from "node:test"
import assert from "node:assert/strict"
import { stepBubbles } from "./bubble-physics.mjs"

const bounds = { width: 400, height: 300 }
const node = (x, vx = 0) => ({ x, y:100, r:20, vx, vy:0, phase:0, speed:.65, fixed:false })

test("colliding bubbles separate and bounce", () => {
  const a = node(100,1), b = node(125,-1)
  stepBubbles([a,b],bounds,1/60,0)
  assert.ok(Math.hypot(a.x-b.x,a.y-b.y)>=43.99)
  assert.ok(a.vx<0 && b.vx>0)
})
test("a held bubble moves its neighbour without being displaced", () => {
  const a = {...node(100),fixed:true}, b = node(110)
  stepBubbles([a,b],bounds,1/60,0)
  assert.equal(a.x,100)
  assert.ok(b.x>=143.99)
})
test("bubbles stay inside the field and outside the introduction", () => {
  const edge = node(-50), centre = node(200)
  const obstacle = {left:170,right:230,top:80,bottom:120}
  stepBubbles([edge,centre],bounds,1/60,0,obstacle)
  assert.ok(edge.x>=26)
  assert.ok(centre.y<=50 || centre.y>=150 || centre.x<=140 || centre.x>=260)
})
test("simulation remains finite and contained after a minute of motion", () => {
  const nodes = [node(100,5),node(125,-5),node(250,3)]
  for(let i=0;i<3600;i++) stepBubbles(nodes,bounds,1/60,i/60)
  for(const n of nodes) {
    assert.ok(Number.isFinite(n.x) && Number.isFinite(n.y))
    assert.ok(n.x>=26 && n.x<=374 && n.y>=26 && n.y<=274)
  }
})

test("a bubble travels freely instead of returning to its starting position", () => {
  const traveller = node(100,.65)
  for (let i=0;i<180;i++) stepBubbles([traveller],bounds,1/60,i/60)
  assert.ok(traveller.x>210)
  assert.ok(Math.hypot(traveller.vx,traveller.vy)>.6)
})

test("the introduction reflects an incoming bubble", () => {
  const incoming = node(139.5,1)
  stepBubbles([incoming],bounds,1/60,0,{left:170,right:230,top:80,bottom:120})
  assert.ok(incoming.x<=140)
  assert.ok(incoming.vx<0)
})

test("wall contact keeps an outgoing bubble moving into the field", () => {
  const outgoing = node(375,1)
  stepBubbles([outgoing],bounds,1/60,0)
  assert.ok(outgoing.vx<0)
  for(let i=0;i<60;i++) stepBubbles([outgoing],bounds,1/60,i/60)
  assert.ok(outgoing.x<330)
})

test("motion is consistent at 30 and 60 frames per second", () => {
  const fast=node(100,.65), slow=node(100,.65)
  for(let i=0;i<120;i++) stepBubbles([fast],bounds,1/60,i/60)
  for(let i=0;i<60;i++) stepBubbles([slow],bounds,1/30,i/30)
  assert.ok(Math.abs(fast.x-slow.x)<.01)
})

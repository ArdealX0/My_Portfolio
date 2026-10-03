// Free-moving circles: velocities use pixels per nominal 60 Hz frame.
export function stepBubbles(nodes, bounds, dt, time, obstacle) {
  const totalFrames = Math.min(Math.max(dt * 60, 0), 3)
  const steps = Math.max(1, Math.ceil(totalFrames))
  const frames = totalFrames / steps
  for (let step = 0; step < steps; step++) {
    for (const node of nodes) {
      if (node.fixed) continue
      // Recover a gentle cruising speed after collisions; a thrown bubble eases
      // back down instead of either accelerating forever or coming to a stop.
      const speed = Math.hypot(node.vx, node.vy)
      const cruise = node.speed ?? .65
      const nextSpeed = Math.min(4, speed + (cruise - speed) * (1 - Math.exp(-.012 * frames)))
      const heading = speed > .001 ? Math.atan2(node.vy, node.vx) : node.phase ?? 0
      node.vx = Math.cos(heading) * nextSpeed
      node.vy = Math.sin(heading) * nextSpeed
      node.x += node.vx * frames
      node.y += node.vy * frames
    }
    // Repeat constraints to resolve clusters as well as isolated collisions.
    for (let pass = 0; pass < 3; pass++) {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j]
          let dx = b.x - a.x, dy = b.y - a.y
          let distance = Math.hypot(dx, dy)
          const separation = a.r + b.r + 4
          if (distance >= separation || (a.fixed && b.fixed)) continue
          if (distance < .001) { dx = 1; dy = 0; distance = 1 }
          const nx = dx / distance, ny = dy / distance
          const shareA = a.fixed ? 0 : b.fixed ? 1 : .5
          const shareB = b.fixed ? 0 : a.fixed ? 1 : .5
          a.x -= nx * (separation - distance) * shareA
          a.y -= ny * (separation - distance) * shareA
          b.x += nx * (separation - distance) * shareB
          b.y += ny * (separation - distance) * shareB
          const closing = ((b.fixed ? 0 : b.vx) - (a.fixed ? 0 : a.vx)) * nx + ((b.fixed ? 0 : b.vy) - (a.fixed ? 0 : a.vy)) * ny
          if (closing < 0) {
            const impulse = -closing * 1.9
            a.vx -= impulse * nx * shareA; a.vy -= impulse * ny * shareA
            b.vx += impulse * nx * shareB; b.vy += impulse * ny * shareB
          }
        }
      }
      for (const node of nodes) {
        if (node.fixed) continue
        if (obstacle) {
          const cx = Math.max(obstacle.left, Math.min(node.x, obstacle.right))
          const cy = Math.max(obstacle.top, Math.min(node.y, obstacle.bottom))
          let dx = node.x - cx, dy = node.y - cy
          const distance = Math.hypot(dx, dy)
          if (distance < node.r + 10) {
            if (distance < .001) {
              const side = [
              { d: node.x - obstacle.left, x: -1, y: 0 },
              { d: obstacle.right - node.x, x: 1, y: 0 },
              { d: node.y - obstacle.top, x: 0, y: -1 },
              { d: obstacle.bottom - node.y, x: 0, y: 1 },
              ].sort((a, b) => a.d - b.d)[0]
              dx = side.x; dy = side.y
              node.x += dx * (side.d + node.r + 10)
              node.y += dy * (side.d + node.r + 10)
            } else {
              node.x += dx / distance * (node.r + 10 - distance)
              node.y += dy / distance * (node.r + 10 - distance)
            }
            const normalLength = Math.hypot(dx, dy)
            const nx = dx / normalLength, ny = dy / normalLength
            const incoming = node.vx * nx + node.vy * ny
            if (incoming < 0) {
              node.vx -= 1.9 * incoming * nx
              node.vy -= 1.9 * incoming * ny
            }
          }
        }
        const minX = node.r + 6, maxX = bounds.width - node.r - 6
        const minY = node.r + 6, maxY = bounds.height - node.r - 6
        if (node.x < minX) node.vx = Math.abs(node.vx)
        if (node.x > maxX) node.vx = -Math.abs(node.vx)
        if (node.y < minY) node.vy = Math.abs(node.vy)
        if (node.y > maxY) node.vy = -Math.abs(node.vy)
        node.x = Math.max(minX, Math.min(maxX, node.x))
        node.y = Math.max(minY, Math.min(maxY, node.y))
      }
    }
  }
  return nodes
}

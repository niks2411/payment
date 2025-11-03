import React, { useEffect, useRef } from 'react'

// Lightweight Canvas globe: draws a simple shaded sphere and animated arcs/points
// Props: width, height, arcs (optional), points (optional)
export default function FastGlobe({ width = 500, height = 500, arcs = [], points = [] }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const tRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
    canvas.width = Math.floor(width * dpr)
    canvas.height = Math.floor(height * dpr)
    canvas.style.width = width + 'px'
    canvas.style.height = height + 'px'

    const ctx = canvas.getContext('2d')
    ctx.scale(dpr, dpr)

    const cx = width / 2
    const cy = height / 2
    const radius = Math.min(width, height) * 0.42

    // Precompute points projected to 2D for speed
    // Expect points as [{lat, lng, color}] (lat/lng in degrees)
    const toRad = (deg) => (deg * Math.PI) / 180
    const project = (lat, lng, r = radius) => {
      const phi = toRad(90 - lat)
      const theta = toRad(lng + 180)
      const x = r * Math.sin(phi) * Math.cos(theta)
      const y = r * Math.cos(phi)
      const z = r * Math.sin(phi) * Math.sin(theta)
      return { x, y, z }
    }

    const projPoints = points.map((p) => ({ ...p, ...project(p.lat, p.lng) }))

    const gradient = ctx.createRadialGradient(cx - radius * 0.4, cy - radius * 0.4, radius * 0.2, cx, cy, radius)
    gradient.addColorStop(0, '#0b3b86')
    gradient.addColorStop(1, '#062056')

    const drawSphere = () => {
      ctx.beginPath()
      ctx.arc(cx, cy, radius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      // subtle gloss
      ctx.beginPath()
      ctx.ellipse(cx - radius * 0.3, cy - radius * 0.35, radius * 0.45, radius * 0.25, -0.35, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(255,255,255,0.06)'
      ctx.fill()

      // atmosphere glow
      const glow = ctx.createRadialGradient(cx, cy, radius * 0.9, cx, cy, radius * 1.1)
      glow.addColorStop(0, 'rgba(56,189,248,0.15)')
      glow.addColorStop(1, 'rgba(56,189,248,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, radius * 1.08, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()
    }

    // arcs: [{startLat,startLng,endLat,endLng,color}]
    // draw simple bezier arc on front side only
    const drawArcs = (time) => {
      ctx.lineWidth = 1.2
      arcs.slice(0, 20).forEach((a, idx) => {
        const s = project(a.startLat, a.startLng)
        const e = project(a.endLat, a.endLng)
        // Only draw front-side (z>0) endpoints
        if (s.z < 0 && e.z < 0) return
        const mx = (s.x + e.x) / 2
        const my = (s.y + e.y) / 2
        const lift = radius * 0.15 + ((idx % 3) * radius) / 60
        const nx = mx
        const ny = my - lift

        ctx.beginPath()
        ctx.moveTo(cx + s.x, cy + s.y)
        ctx.quadraticCurveTo(cx + nx, cy + ny, cx + e.x, cy + e.y)
        const baseColor = a.color || '#2f5bff'
        ctx.strokeStyle = baseColor
        ctx.globalAlpha = 0.65 + 0.25 * Math.sin(time * 0.002 + idx)
        ctx.stroke()
        ctx.globalAlpha = 1
      })
    }

    const drawPoints = () => {
      ctx.fillStyle = '#7dd3fc'
      projPoints.forEach((p) => {
        if (p.z < 0) return // back side hidden
        ctx.beginPath()
        ctx.arc(cx + p.x, cy + p.y, 2, 0, Math.PI * 2)
        ctx.fillStyle = p.color || '#7dd3fc'
        ctx.fill()
      })
    }

    const render = (time) => {
      tRef.current = time || 0
      ctx.clearRect(0, 0, width, height)
      drawSphere()
      drawArcs(tRef.current)
      drawPoints()
      rafRef.current = requestAnimationFrame(render)
    }

    rafRef.current = requestAnimationFrame(render)
    return () => cancelAnimationFrame(rafRef.current)
  }, [width, height, arcs, points])

  return (
    <canvas ref={canvasRef} width={width} height={height} style={{ display: 'block', width, height }} />
  )
}

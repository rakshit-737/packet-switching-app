import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * ZdogNetworkIcon
 * Renders a pseudo-3D network topology illustration using Zdog.
 * The scene auto-rotates and is drag-rotatable by the user.
 *
 * Props:
 *   size    – canvas pixel size (default 120)
 *   color   – primary node colour (default '#22d3ee')
 *   bgColor – canvas background (default 'transparent')
 *   spin    – auto-rotation speed (default 0.012)
 */
export default function ZdogNetworkIcon({
  size = 120,
  color = '#22d3ee',
  bgColor = 'transparent',
  spin = 0.012,
  className = '',
  style = {},
}) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)
  const illoRef = useRef(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced) return
    if (!canvasRef.current) return

    let Zdog
    let cancelled = false

    import('zdog').then((mod) => {
      if (cancelled) return
      Zdog = mod.default ?? mod

      const TAU = Zdog.TAU
      const warm = '#f59e0b'
      const violet = '#a78bfa'

      // ─── Illustration ─────────────────────────────────────
      const illo = new Zdog.Illustration({
        element: canvasRef.current,
        zoom: size < 100 ? 2.4 : 3,
        dragRotate: true,
        rotate: { x: -TAU / 16, y: TAU / 8 },
      })
      illoRef.current = illo

      // Hub node (centre)
      new Zdog.Ellipse({
        addTo: illo,
        diameter: 14,
        stroke: 4,
        color,
        fill: true,
        translate: { x: 0, y: 0, z: 0 },
      })

      // Spoke nodes
      const nodes = [
        { x: -28, y: -20, z: 10, c: color },
        { x:  28, y: -20, z: 10, c: warm },
        { x: -28, y:  20, z: -10, c: violet },
        { x:  28, y:  20, z: -10, c: color },
      ]

      nodes.forEach(({ x, y, z, c }) => {
        // Node circle
        new Zdog.Ellipse({
          addTo: illo,
          diameter: 10,
          stroke: 3,
          color: c,
          fill: true,
          translate: { x, y, z },
        })

        // Edge line from hub to node
        new Zdog.Shape({
          addTo: illo,
          stroke: 1.5,
          color: c,
          path: [
            { x: 0, y: 0, z: 0 },
            { x, y, z },
          ],
        })
      })

      // Cross-link between two nodes
      new Zdog.Shape({
        addTo: illo,
        stroke: 1,
        color: warm,
        path: [
          { x: nodes[0].x, y: nodes[0].y, z: nodes[0].z },
          { x: nodes[1].x, y: nodes[1].y, z: nodes[1].z },
        ],
      })
      new Zdog.Shape({
        addTo: illo,
        stroke: 1,
        color: violet,
        path: [
          { x: nodes[2].x, y: nodes[2].y, z: nodes[2].z },
          { x: nodes[3].x, y: nodes[3].y, z: nodes[3].z },
        ],
      })

      // ─── Animation loop ────────────────────────────────────
      function animate() {
        illo.rotate.y += spin
        illo.updateRenderGraph()
        rafRef.current = requestAnimationFrame(animate)
      }
      animate()
    }).catch(() => {
      // Progressive enhancement — silently fail
    })

    return () => {
      cancelled = true
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [prefersReduced, color, spin, size]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      style={{
        background: bgColor,
        display: 'block',
        ...style,
      }}
      className={className}
      aria-hidden="true"
    />
  )
}

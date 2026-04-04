import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { netPreset, isLowEndDevice, prefersReducedMotion as checkReducedMotion } from '../utils/vantaConfig'

/**
 * VantaNetBackground
 * Renders an animated WebGL network-mesh background using Vanta.js.
 * Skips rendering on low-end devices or when the user prefers reduced motion.
 *
 * Usage:
 *   <div style={{ position: 'relative' }}>
 *     <VantaNetBackground />
 *     <YourContent />
 *   </div>
 */
export default function VantaNetBackground({ overrides = {}, style = {} }) {
  const ref = useRef(null)
  const effectRef = useRef(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    // Guard: skip on reduced-motion or low-end devices
    if (prefersReduced || checkReducedMotion() || isLowEndDevice()) return
    if (!ref.current) return

    let cancelled = false

    // Dynamically import both Three.js and Vanta so heavy 3D code is never in
    // the critical-path bundle — it loads only when this component mounts.
    Promise.all([
      import('three'),
      import('vanta/dist/vanta.net.min'),
    ]).then(([THREE, vantaMod]) => {
      if (cancelled || !ref.current) return
      const VANTA = vantaMod.default ?? vantaMod

      effectRef.current = VANTA({
        el: ref.current,
        THREE,
        ...netPreset(overrides),
      })
    }).catch(() => {
      // Silently fail — background is a progressive enhancement
    })

    return () => {
      cancelled = true
      effectRef.current?.destroy()
      effectRef.current = null
    }
  }, [prefersReduced]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        borderRadius: 'inherit',
        ...style,
      }}
    />
  )
}

import { useEffect, useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}

/**
 * EnhancedConceptCard
 * Wraps a concept card with:
 *   - Vanilla-Tilt 3D parallax tilt (mouse-reactive)
 *   - Framer Motion fade-up reveal on scroll
 *
 * Props: same shape as a networkConcept object, plus optional `className`.
 */
export default function EnhancedConceptCard({ concept, className = '', children }) {
  const cardRef = useRef(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !cardRef.current) return

    let vanillaTilt = null
    let cancelled = false

    import('vanilla-tilt').then((mod) => {
      if (cancelled || !cardRef.current) return
      vanillaTilt = mod.default ?? mod

      vanillaTilt.init(cardRef.current, {
        max: 6,
        speed: 500,
        scale: 1.02,
        glare: true,
        'max-glare': 0.08,
        perspective: 900,
        gyroscope: false,
      })
    }).catch(() => {
      // Progressive enhancement — silently fail
    })

    return () => {
      cancelled = true
      cardRef.current?.vanillaTilt?.destroy()
    }
  }, [prefersReduced])

  return (
    <motion.article
      ref={cardRef}
      className={`concept-card card enhanced-concept-card ${className}`}
      {...(prefersReduced
        ? {}
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once: true, margin: '-40px' },
            variants: fadeUp,
          })}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.article>
  )
}

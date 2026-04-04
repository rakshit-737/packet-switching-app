import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap, ScrollTrigger } from '../utils/animationConfig'

/**
 * ParallaxSection
 * Wraps children in a section whose background translates on scroll,
 * creating a subtle parallax depth effect via GSAP ScrollTrigger.
 *
 * Props:
 *   children   – section content
 *   speed      – parallax strength (0–1, default 0.3)
 *   className  – extra class names
 *   style      – additional inline styles for the outer wrapper
 *   as         – HTML tag to render as (default 'section')
 */
export default function ParallaxSection({
  children,
  speed = 0.3,
  className = '',
  style = {},
  as: Tag = 'section',
}) {
  const wrapperRef = useRef(null)
  const bgRef = useRef(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !wrapperRef.current || !bgRef.current) return

    const tween = gsap.to(bgRef.current, {
      yPercent: speed * -40,
      ease: 'none',
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    return () => {
      tween.scrollTrigger?.kill()
      tween.kill()
      ScrollTrigger.refresh()
    }
  }, [prefersReduced, speed])

  return (
    <Tag
      ref={wrapperRef}
      className={`parallax-section ${className}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      {/* The layer that shifts on scroll */}
      <div
        ref={bgRef}
        className="parallax-bg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: '-20% 0',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      {/* Content sits above the parallax layer */}
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </Tag>
  )
}

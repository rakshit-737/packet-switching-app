import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'
import { gsap, ScrollTrigger } from '../utils/animationConfig'

/**
 * ScrollMetricsCounter
 * Renders a row of animated stat counters that count up when scrolled into view.
 * Falls back to static display when the user prefers reduced motion.
 *
 * Props:
 *   stats – Array<{ value: string|number, label: string, prefix?: string, suffix?: string }>
 *   className – extra class for the wrapper
 */
export default function ScrollMetricsCounter({ stats = [], className = '' }) {
  const wrapperRef = useRef(null)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (prefersReduced || !wrapperRef.current) return

    const els = wrapperRef.current.querySelectorAll('[data-count-to]')
    const tweens = []

    els.forEach((el) => {
      const end = parseFloat(el.dataset.countTo)
      if (isNaN(end)) return

      const prefix = el.dataset.prefix ?? ''
      const suffix = el.dataset.suffix ?? ''
      const obj = { n: 0 }

      const tween = gsap.to(obj, {
        n: end,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate() {
          el.textContent = prefix + Math.round(obj.n).toLocaleString() + suffix
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      })

      tweens.push(tween)
    })

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill()
        t.kill()
      })
      ScrollTrigger.refresh()
    }
  }, [prefersReduced, stats])

  return (
    <div ref={wrapperRef} className={`scroll-metrics-row ${className}`}>
      {stats.map(({ value, label, prefix = '', suffix = '' }) => {
        const numeric = parseFloat(String(value).replace(/[^0-9.]/g, ''))
        const isAnimatable = !isNaN(numeric)

        return (
          <div key={label} className="scroll-metric-item">
            <strong
              className="scroll-metric-value"
              data-count-to={isAnimatable && !prefersReduced ? numeric : undefined}
              data-prefix={prefix || undefined}
              data-suffix={suffix || undefined}
            >
              {prefix}{value}{suffix}
            </strong>
            <span className="scroll-metric-label">{label}</span>
          </div>
        )
      })}
    </div>
  )
}

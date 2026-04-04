/**
 * Centralised GSAP / ScrollTrigger configuration
 * Import from here rather than calling gsap.registerPlugin() in individual components.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Default ease used throughout the app
export const EASE_SMOOTH = 'power3.out'
export const EASE_ELASTIC = 'elastic.out(1, 0.5)'
export const EASE_BOUNCE = 'bounce.out'

/**
 * Returns a standard "fade up" tween that is linked to a ScrollTrigger.
 * @param {Element|string} target  – element or CSS selector
 * @param {object}         options – optional overrides
 */
export function fadeUpOnScroll(target, options = {}) {
  return gsap.fromTo(
    target,
    { opacity: 0, y: 32 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: EASE_SMOOTH,
      scrollTrigger: {
        trigger: target,
        start: 'top 85%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
      ...options,
    }
  )
}

/**
 * Stagger a collection of child elements into view.
 * @param {Element|string} parent   – wrapper element / selector
 * @param {string}         children – child selector (default '.gsap-child')
 * @param {object}         options  – optional overrides
 */
export function staggerReveal(parent, children = '.gsap-child', options = {}) {
  return gsap.fromTo(
    `${typeof parent === 'string' ? parent : ''} ${children}`,
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: EASE_SMOOTH,
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        toggleActions: 'play none none none',
        ...options.scrollTrigger,
      },
      ...options,
    }
  )
}

/**
 * Animate a numeric counter from 0 to its target value.
 * Targets elements that have a data-count attribute.
 * @param {Element|string} target  – element or selector
 * @param {number}         end     – final numeric value
 * @param {object}         options – optional overrides
 */
export function animateCounter(target, end, options = {}) {
  const obj = { value: 0 }
  return gsap.to(obj, {
    value: end,
    duration: 1.8,
    ease: 'power2.out',
    onUpdate() {
      const el = typeof target === 'string' ? document.querySelector(target) : target
      if (el) el.textContent = Math.round(obj.value).toLocaleString()
    },
    scrollTrigger: {
      trigger: typeof target === 'string' ? target : target,
      start: 'top 88%',
      toggleActions: 'play none none none',
      ...options.scrollTrigger,
    },
    ...options,
  })
}

export { gsap, ScrollTrigger }

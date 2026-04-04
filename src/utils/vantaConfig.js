/**
 * Vanta.js preset configurations.
 * Centralises theme colours and mobile-detection logic.
 */

/** Detect whether the user prefers reduced motion */
export function prefersReducedMotion() {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Detect low-end / small-screen devices where heavy WebGL may hurt UX.
 * We disable Vanta on screens narrower than 600 px or on devices with
 * limited hardware concurrency.
 */
export function isLowEndDevice() {
  if (typeof window === 'undefined') return false
  const tooSmall = window.innerWidth < 600
  const weakCPU = navigator.hardwareConcurrency !== undefined && navigator.hardwareConcurrency < 4
  return tooSmall || weakCPU
}

/** Shared colour palette drawn from the app's CSS custom-property tokens */
export const BRAND = {
  cyan: 0x22d3ee,
  cyanDim: 0x0891b2,
  purple: 0xa78bfa,
  bg: 0x000000,
  bgSurface: 0x080e1c,
}

/**
 * NET effect preset – animated network mesh for hero sections.
 * Particle counts are halved on medium-size screens automatically.
 */
export function netPreset(overrides = {}) {
  const mobile = typeof window !== 'undefined' && window.innerWidth < 900
  return {
    color: BRAND.cyan,
    backgroundColor: BRAND.bg,
    points: mobile ? 7 : 12,
    maxDistance: mobile ? 18 : 25,
    spacing: mobile ? 20 : 16,
    showDots: true,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 1,
    speed: 0.8,
    ...overrides,
  }
}

/**
 * WAVES effect preset – softer background for supporting sections.
 */
export function wavesPreset(overrides = {}) {
  return {
    color: BRAND.purple,
    backgroundColor: BRAND.bgSurface,
    waveHeight: 15,
    waveSpeed: 0.6,
    zoom: 0.75,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200,
    minWidth: 200,
    scale: 1,
    scaleMobile: 0.75,
    ...overrides,
  }
}

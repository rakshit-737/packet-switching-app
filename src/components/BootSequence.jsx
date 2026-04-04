import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Cpu } from 'lucide-react'

const BOOT_LINES = [
  'Initializing packet router…',
  'Calibrating switching engine…',
  'Loading network topology…',
  'Mapping switching paths…',
  'Compiling route tables…',
  'NetSwitch lab ready.',
]

// Total time before the boot overlay begins fading out
const BOOT_DURATION_MS = 2200
const LINE_INTERVAL_MS = 340

// Line stagger animation for individual log lines
const lineVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94], delay: i * 0.06 },
  }),
  exit: { opacity: 0, x: 8, transition: { duration: 0.18 } },
}

export default function BootSequence({ onDone }) {
  const prefersReduced = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [glitch, setGlitch] = useState(false)
  const calledRef = useRef(false)

  useEffect(() => {
    // Skip entirely for reduced-motion users
    if (prefersReduced) {
      if (!calledRef.current) {
        calledRef.current = true
        onDone()
      }
      return
    }

    const lineTimer = setInterval(() => {
      setLineIndex((i) => Math.min(i + 1, BOOT_LINES.length - 1))
    }, LINE_INTERVAL_MS)

    // Brief glitch flash near the end
    const glitchTimer = setTimeout(() => {
      setGlitch(true)
      setTimeout(() => setGlitch(false), 220)
    }, BOOT_DURATION_MS - 600)

    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, BOOT_DURATION_MS)

    return () => {
      clearInterval(lineTimer)
      clearTimeout(glitchTimer)
      clearTimeout(hideTimer)
    }
  }, [prefersReduced, onDone])

  if (prefersReduced) return null

  return (
    <AnimatePresence
      onExitComplete={() => {
        if (!calledRef.current) {
          calledRef.current = true
          onDone()
        }
      }}
    >
      {visible && (
        <motion.div
          className="boot-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.015 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          {/* Scan-line effect */}
          <div className="boot-scan-line" aria-hidden="true" />

          <div className="boot-shell">
            <motion.div
              className={`boot-brand${glitch ? ' boot-brand--glitch' : ''}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="boot-icon">
                <Cpu size={26} />
              </span>
              <span className="boot-title">NetSwitch</span>
            </motion.div>

            {/* Staggered log lines */}
            <div className="boot-log" role="status" aria-live="polite">
              <AnimatePresence mode="popLayout">
                {BOOT_LINES.slice(0, lineIndex + 1).map((line, i) => (
                  <motion.p
                    key={line}
                    className="boot-line mono"
                    custom={i}
                    variants={lineVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <span className="boot-prompt" aria-hidden="true">›</span>
                    {line}
                  </motion.p>
                ))}
              </AnimatePresence>
            </div>

            <div className="boot-meter-wrap">
              <motion.div
                className="boot-meter-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: (BOOT_DURATION_MS - 200) / 1000, ease: 'linear' }}
              />
            </div>

            <motion.p
              className="boot-status mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: lineIndex === BOOT_LINES.length - 1 ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              System ready
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

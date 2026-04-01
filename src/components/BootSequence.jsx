import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Cpu } from 'lucide-react'

const BOOT_LINES = [
  'Initializing packet router…',
  'Calibrating switching engine…',
  'Loading network topology…',
  'Mapping switching paths…',
  'NetSwitch lab ready.',
]

// Total time before the boot overlay begins fading out
const BOOT_DURATION_MS = 1800
const LINE_INTERVAL_MS = 300

export default function BootSequence({ onDone }) {
  const prefersReduced = useReducedMotion()
  const [lineIndex, setLineIndex] = useState(0)
  const [visible, setVisible] = useState(true)
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

    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, BOOT_DURATION_MS)

    return () => {
      clearInterval(lineTimer)
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
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          <div className="boot-shell">
            <div className="boot-brand">
              <span className="boot-icon">
                <Cpu size={26} />
              </span>
              <span className="boot-title">NetSwitch</span>
            </div>

            <div className="boot-meter-wrap">
              <motion.div
                className="boot-meter-bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: (BOOT_DURATION_MS - 200) / 1000, ease: 'linear' }}
              />
            </div>

            <p className="boot-line mono">{BOOT_LINES[lineIndex]}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

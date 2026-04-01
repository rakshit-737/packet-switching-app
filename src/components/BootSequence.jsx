import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu } from 'lucide-react'

const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

const messages = [
  'Warming up the switching lab…',
  'Plotting nodes and links…',
  'Preparing circuit lanes…',
  'Shaping packets for dispatch…',
  'Syncing latency metrics…',
]

export default function BootSequence({ minimumMs = 650 }) {
  const [ready, setReady] = useState(false)
  const [done, setDone] = useState(false)

  const reduced = useMemo(prefersReducedMotion, [])

  useEffect(() => {
    let alive = true
    const start = performance.now()

    // Wait a beat so the first paint feels intentional.
    const tick = () => {
      const elapsed = performance.now() - start
      const minSatisfied = elapsed >= minimumMs

      if (minSatisfied) {
        if (alive) setReady(true)
        // give exit animation time
        setTimeout(() => {
          if (alive) setDone(true)
        }, reduced ? 0 : 520)
        return
      }

      requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)

    return () => {
      alive = false
    }
  }, [minimumMs, reduced])

  const message = useMemo(() => {
    const index = Math.floor(Math.random() * messages.length)
    return messages[index]
  }, [])

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="boot"
          aria-label="Loading"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
        >
          <motion.div
            className="boot-shell"
            initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            animate={
              reduced
                ? { opacity: 1, y: 0 }
                : { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
            }
          >
            <div className="boot-mark" aria-hidden="true">
              <Cpu size={18} />
            </div>

            <div className="boot-copy">
              <span className="boot-kicker">NetSwitch · Boot</span>
              <strong className="boot-title">Initializing simulator</strong>
              <span className="boot-message">{message}</span>
            </div>

            <div className="boot-meter" aria-hidden="true">
              <div className={`boot-bar ${ready ? 'ready' : ''}`} />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
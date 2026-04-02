import { useMemo, useState } from 'react'
import { Activity, Network, Pause, Play, Radio, RotateCcw, Zap } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import PacketCanvas from '../components/PacketCanvas'
import CircuitCanvas from '../components/CircuitCanvas'
import '../styles/pages/Visualizer.css'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const viewOnce = { once: true, margin: '-50px' }

const MODE_CONTENT = {
  packet: {
    title: 'Packet Switching',
    badge: 'Shared network',
    description: 'Packets are sliced, queued, and forwarded hop by hop through a mesh of routers.',
    heroDescription:
      'Multiple packets can share the same links, and each one may take a different route to the destination.',
    observations: [
      'Each colored block is an independent packet with its own route and timing.',
      'Packets can share links, so utilization stays high even when traffic is bursty.',
      'Delivery order is not guaranteed, which is why reassembly matters at the destination.',
    ],
    notes: [
      'Store-and-forward at every hop',
      'Adaptive routing across shared links',
      'Best for data-heavy, bursty traffic',
    ],
  },
  circuit: {
    title: 'Circuit Switching',
    badge: 'Dedicated path',
    description: 'A dedicated lane is reserved before data starts moving, so the path stays fixed end to end.',
    heroDescription:
      'This is ideal when consistent timing matters more than squeezing every bit of utilization from the network.',
    observations: [
      'Each lane is reserved for one call, so there is no route competition after setup.',
      'Traffic moves predictably once the circuit exists, which reduces jitter.',
      'Idle periods still consume reserved capacity, so efficiency drops for bursty transfers.',
    ],
    notes: [
      'Setup required before transfer',
      'Reserved bandwidth for every call',
      'Best for steady real-time sessions',
    ],
  },
}

export default function Visualizer() {
  const [mode, setMode] = useState('packet')
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(1.25)
  const [packetSize, setPacketSize] = useState(128)
  const [dataSize, setDataSize] = useState(1024)
  const [numCalls, setNumCalls] = useState(3)
  const [resetToken, setResetToken] = useState(0)

  const packetCount = Math.max(1, Math.ceil(dataSize / packetSize))
  const packetEfficiency = ((dataSize / (packetCount * packetSize)) * 100).toFixed(1)
  const currentMode = MODE_CONTENT[mode]

  const stats = useMemo(() => {
    if (mode === 'packet') {
      return [
        { label: 'Packets', value: String(packetCount), accent: 'blue' },
        { label: 'Payload Use', value: `${packetEfficiency}%`, accent: 'cyan' },
        { label: 'Route Strategy', value: 'Dynamic Mesh', accent: 'blue' },
        { label: 'Traffic Fit', value: 'Burst / Data', accent: 'cyan' },
      ]
    }

    return [
      { label: 'Active Calls', value: String(numCalls), accent: 'green' },
      { label: 'Reserved Capacity', value: `${numCalls * 128} kbps`, accent: 'amber' },
      { label: 'Route Strategy', value: 'Fixed Lane', accent: 'green' },
      { label: 'Traffic Fit', value: 'Voice / Real-time', accent: 'amber' },
    ]
  }, [mode, numCalls, packetCount, packetEfficiency])

  const switchMode = (nextMode) => {
    if (nextMode === mode) return

    setMode(nextMode)
    setIsRunning(false)
    setResetToken((value) => value + 1)
  }

  const togglePlayback = () => setIsRunning((value) => !value)

  const resetSimulation = () => {
    setIsRunning(false)
    setResetToken((value) => value + 1)
  }

  const handleDataSizeChange = (rawValue) => {
    const nextDataSize = clampToStep(rawValue, dataSize, 64, 4096, 64)
    setDataSize(nextDataSize)
    setPacketSize((currentValue) =>
      clampToStep(Math.min(currentValue, nextDataSize), currentValue, 16, Math.max(16, nextDataSize), 16),
    )
  }

  const handlePacketSizeChange = (rawValue) => {
    setPacketSize((currentValue) =>
      clampToStep(rawValue, currentValue, 16, Math.max(16, dataSize), 16),
    )
  }

  const handleCallsChange = (rawValue) => {
    setNumCalls(clampToStep(rawValue, numCalls, 1, 6))
  }

  const prefersReducedMotion = useReducedMotion()
  const mv = (variants) =>
    prefersReducedMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: viewOnce, variants }

  return (
    <div className="visualizer-page">
      <motion.section
        className="visualizer-hero"
        {...(prefersReducedMotion ? {} : { initial: 'hidden', animate: 'visible', variants: stagger })}
      >
        <motion.div className="hero-copy" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <span className="hero-kicker">Interactive Lab</span>
          <h1>See switching behavior instead of just memorizing it.</h1>
          <p>
            Compare how packet switching and circuit switching behave under live traffic, then tune the load to
            understand the tradeoffs that show up in exams and real networks.
          </p>
        </motion.div>

        <motion.div className="mode-switcher" {...(prefersReducedMotion ? {} : { variants: stagger })}>
          <motion.button
            type="button"
            className={`mode-card ${mode === 'packet' ? 'active' : ''}`}
            onClick={() => switchMode('packet')}
            {...(prefersReducedMotion ? {} : { variants: fadeUp, whileHover: { y: -3 }, whileTap: { scale: 0.97 } })}
          >
            <div className="mode-card-header">
              <span className="mode-icon packet">
                <Network size={18} />
              </span>
              <span className="mode-badge">Shared</span>
            </div>
            <h2>Packet Switching</h2>
            <p>{MODE_CONTENT.packet.heroDescription}</p>
          </motion.button>

          <motion.button
            type="button"
            className={`mode-card ${mode === 'circuit' ? 'active' : ''}`}
            onClick={() => switchMode('circuit')}
            {...(prefersReducedMotion ? {} : { variants: fadeUp, whileHover: { y: -3 }, whileTap: { scale: 0.97 } })}
          >
            <div className="mode-card-header">
              <span className="mode-icon circuit">
                <Radio size={18} />
              </span>
              <span className="mode-badge">Dedicated</span>
            </div>
            <h2>Circuit Switching</h2>
            <p>{MODE_CONTENT.circuit.heroDescription}</p>
          </motion.button>
        </motion.div>
      </motion.section>

      <motion.div className="visualizer-layout" {...mv(stagger)}>
        <motion.section className="stage-card card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <div className="stage-header">
            <div>
              <span className="stage-kicker">{currentMode.badge}</span>
              <h2>{currentMode.title}</h2>
              <p>{currentMode.description}</p>
            </div>

            <div className={`stage-status ${isRunning ? 'running' : 'paused'}`}>
              <Activity size={16} />
              {isRunning ? 'Simulation running' : 'Simulation paused'}
            </div>
          </div>

          <div className="canvas-shell">
            {mode === 'packet' ? (
              <PacketCanvas
                isRunning={isRunning}
                speed={speed}
                packetSize={packetSize}
                dataSize={dataSize}
                resetToken={resetToken}
                onComplete={() => setIsRunning(false)}
              />
            ) : (
              <CircuitCanvas
                isRunning={isRunning}
                speed={speed}
                numCalls={numCalls}
                resetToken={resetToken}
              />
            )}
          </div>

          <div className="stage-notes">
            {currentMode.notes.map((note) => (
              <div key={note} className="note-chip">
                <Zap size={14} />
                <span>{note}</span>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.aside className="control-card card" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          <div className="control-block">
            <label htmlFor="speed-slider">Playback Speed</label>
            <div className="slider-row">
              <input
                id="speed-slider"
                type="range"
                min="0.5"
                max="2.5"
                step="0.25"
                value={speed}
                onChange={(event) => setSpeed(Number(event.target.value))}
              />
              <span className="value-chip">{speed.toFixed(2)}x</span>
            </div>
          </div>

          {mode === 'packet' ? (
            <>
              <div className="control-block">
                <label htmlFor="data-size-input">Total Data Size (bytes)</label>
                <input
                  id="data-size-input"
                  type="number"
                  min="64"
                  max="4096"
                  step="64"
                  value={dataSize}
                  disabled={isRunning}
                  onChange={(event) => handleDataSizeChange(event.target.value)}
                />
                <small>Adjust before starting the simulation. Disabled while running.</small>
              </div>

              <div className="control-block">
                <label htmlFor="packet-size-input">Packet Size (bytes)</label>
                <input
                  id="packet-size-input"
                  type="number"
                  min="16"
                  max={Math.max(16, dataSize)}
                  step="16"
                  value={packetSize}
                  disabled={isRunning}
                  onChange={(event) => handlePacketSizeChange(event.target.value)}
                />
                <small>{packetCount} packets are generated from the current payload.</small>
              </div>
            </>
          ) : (
            <div className="control-block">
              <label htmlFor="calls-input">Concurrent Calls</label>
              <input
                id="calls-input"
                type="number"
                min="1"
                max="6"
                step="1"
                value={numCalls}
                disabled={isRunning}
                onChange={(event) => handleCallsChange(event.target.value)}
              />
              <small>{numCalls * 128} kbps of dedicated capacity is illustrated across the reserved lanes.</small>
            </div>
          )}

          <div className="action-row">
            <button type="button" className="btn btn-primary action-button" onClick={togglePlayback}>
              {isRunning ? <Pause size={18} /> : <Play size={18} />}
              {isRunning ? 'Pause' : 'Start'}
            </button>

            <button type="button" className="btn btn-secondary action-button" onClick={resetSimulation}>
              <RotateCcw size={18} />
              Reset
            </button>
          </div>

          <div className="insight-panel">
            <h3>What To Notice</h3>
            <div className="insight-list">
              {currentMode.observations.map((observation) => (
                <div key={observation} className="insight-item">
                  <span className="insight-dot" />
                  <p>{observation}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </motion.div>

      <motion.section className="visualizer-stats" {...mv(stagger)}>
        {stats.map((stat) => (
          <StatCard key={stat.label} prefersReducedMotion={prefersReducedMotion} {...stat} />
        ))}
      </motion.section>
    </div>
  )
}

function StatCard({ label, value, accent, prefersReducedMotion }) {
  return (
    <motion.div
      className={`stat-card ${accent}`}
      {...(prefersReducedMotion ? {} : { variants: fadeUp })}
    >
      <span className="stat-label">{label}</span>
      <span className="stat-value">{value}</span>
    </motion.div>
  )
}

function clampToStep(value, fallback, min, max, step = 1) {
  const numericValue = Number(value)

  if (!Number.isFinite(numericValue)) {
    return fallback
  }

  const steppedValue = step > 1 ? Math.round(numericValue / step) * step : Math.round(numericValue)
  return Math.min(max, Math.max(min, steppedValue))
}

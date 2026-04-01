import { useState } from 'react'
import { Activity, Clock3, Signal } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import DelayCalculator from '../components/DelayCalculator'
import SNRCalculator from '../components/SNRCalculator'
import ThroughputCalculator from '../components/ThroughputCalculator'
import '../styles/pages/Numericals.css'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
}
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const viewOnce = { once: true, margin: '-50px' }

const tabs = [
  {
    id: 'delay',
    label: 'Delay',
    caption: 'Transmission + propagation',
    description: 'Break total delay into the parts most often used in networking numericals.',
    icon: Clock3,
  },
  {
    id: 'snr',
    label: 'SNR',
    caption: 'Signal + Shannon',
    description: 'Move between linear SNR, decibels, and the resulting Shannon capacity.',
    icon: Signal,
  },
  {
    id: 'throughput',
    label: 'Throughput',
    caption: 'Loss-aware delivery',
    description: 'Estimate effective throughput after accounting for packet loss and successful delivery.',
    icon: Activity,
  },
]

const references = [
  { title: 'Delay formula', value: 'Td = (L / R) + (d / s)' },
  { title: 'SNR in dB', value: '10 × log10(Ps / Pn)' },
  { title: 'Throughput', value: 'Bandwidth × (1 - Loss Rate)' },
  { title: 'Shannon capacity', value: 'C = B × log2(1 + SNR)' },
]

export default function Numericals() {
  const [activeTab, setActiveTab] = useState('delay')
  const activeSolver = tabs.find((tab) => tab.id === activeTab) ?? tabs[0]
  const prefersReducedMotion = useReducedMotion()
  const mv = (variants) =>
    prefersReducedMotion ? {} : { initial: 'hidden', whileInView: 'visible', viewport: viewOnce, variants }

  return (
    <div className="numericals-page">
      <motion.section
        className="page-hero numericals-hero"
        {...(prefersReducedMotion ? {} : { initial: 'hidden', animate: 'visible', variants: stagger })}
      >
        <motion.span className="section-eyebrow" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>Problem solving lab</motion.span>
        <motion.h1 {...(prefersReducedMotion ? {} : { variants: fadeUp })}>Practice the formulas without losing the intuition behind them.</motion.h1>
        <motion.p {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
          Pick a solver, enter the values, and get a cleaner read on the result so you can spend time understanding the
          output instead of wrestling the interface.
        </motion.p>

        <motion.div className="numericals-pill-row" {...(prefersReducedMotion ? {} : { variants: stagger })}>
          <motion.div className="data-pill" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
            <strong>3</strong>
            <span>active solvers</span>
          </motion.div>
          <motion.div className="data-pill" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
            <strong>Live</strong>
            <span>instant recompute flow</span>
          </motion.div>
          <motion.div className="data-pill" {...(prefersReducedMotion ? {} : { variants: fadeUp })}>
            <strong>Exam</strong>
            <span>focused formulas</span>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section className="numericals-shell" {...mv(fadeUp)}>
        <div className="tabs-container" role="tablist" aria-label="Numerical solvers">
          {tabs.map(({ id, label, caption, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              className={`tab-button ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
            >
              <span className="tab-icon">
                <Icon size={18} />
              </span>
              <span className="tab-copy">
                <strong>{label}</strong>
                <small>{caption}</small>
              </span>
            </button>
          ))}
        </div>

        <div className="numericals-layout">
          <section className="calculator-stage card">
            <div className="section-heading">
              <span className="section-eyebrow">Active solver</span>
              <h2>{activeSolver.label} calculator</h2>
              <p>{activeSolver.description}</p>
            </div>

            <div className="calculators-section">
              {activeTab === 'delay' && <DelayCalculator />}
              {activeTab === 'snr' && <SNRCalculator />}
              {activeTab === 'throughput' && <ThroughputCalculator />}
            </div>
          </section>

          <aside className="reference-card card">
            <div className="section-heading">
              <span className="section-eyebrow">Quick reference</span>
              <h2>Keep the equations in view while you solve.</h2>
              <p>Use this side panel as a memory scaffold before you commit the formula to paper.</p>
            </div>

            <div className="reference-grid">
              {references.map((reference) => (
                <article key={reference.title} className="reference-item">
                  <strong>{reference.title}</strong>
                  <code>{reference.value}</code>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </motion.section>
    </div>
  )
}

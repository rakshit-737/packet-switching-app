import { useState } from 'react'
import { Activity, Clock3, Signal } from 'lucide-react'
import DelayCalculator from '../components/DelayCalculator'
import SNRCalculator from '../components/SNRCalculator'
import ThroughputCalculator from '../components/ThroughputCalculator'
import '../styles/pages/Numericals.css'

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

  return (
    <div className="numericals-page">
      <section className="page-hero numericals-hero">
        <span className="section-eyebrow">Problem solving lab</span>
        <h1>Practice the formulas without losing the intuition behind them.</h1>
        <p>
          Pick a solver, enter the values, and get a cleaner read on the result so you can spend time understanding the
          output instead of wrestling the interface.
        </p>

        <div className="numericals-pill-row">
          <div className="data-pill">
            <strong>3</strong>
            <span>active solvers</span>
          </div>
          <div className="data-pill">
            <strong>Live</strong>
            <span>instant recompute flow</span>
          </div>
          <div className="data-pill">
            <strong>Exam</strong>
            <span>focused formulas</span>
          </div>
        </div>
      </section>

      <section className="numericals-shell">
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
      </section>
    </div>
  )
}

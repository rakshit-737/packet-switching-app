import { useState } from 'react'
import DelayCalculator from '../components/DelayCalculator'
import SNRCalculator from '../components/SNRCalculator'
import ThroughputCalculator from '../components/ThroughputCalculator'
import '../styles/pages/Numericals.css'

export default function Numericals() {
  const [activeTab, setActiveTab] = useState('delay')

  const tabs = [
    { id: 'delay', label: 'Delay Calculation' },
    { id: 'snr', label: 'SNR Calculation' },
    { id: 'throughput', label: 'Throughput Calculation' },
  ]

  return (
    <div className="numericals-page">
      <div className="page-header">
        <h1>Numerical Problem Solvers</h1>
        <p>Calculate network parameters with step-by-step solutions</p>
      </div>

      <div className="tabs-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="calculators-section">
        {activeTab === 'delay' && <DelayCalculator />}
        {activeTab === 'snr' && <SNRCalculator />}
        {activeTab === 'throughput' && <ThroughputCalculator />}
      </div>

      <div className="reference-card card">
        <h3>Quick Reference</h3>
        <div className="reference-grid">
          <div className="reference-item">
            <strong>Delay Formula:</strong>
            <code>T_d = (L/R) + (d/s)</code>
          </div>
          <div className="reference-item">
            <strong>SNR Formula:</strong>
            <code>SNR_dB = 10 × log₁₀(P_s/P_n)</code>
          </div>
          <div className="reference-item">
            <strong>Throughput:</strong>
            <code>T = B × (1 - Loss%)</code>
          </div>
          <div className="reference-item">
            <strong>Shannon Capacity:</strong>
            <code>C = B × log₂(1 + SNR)</code>
          </div>
        </div>
      </div>
    </div>
  )
}

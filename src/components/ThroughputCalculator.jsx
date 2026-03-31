import { useState } from 'react'
import { Activity, AlertTriangle } from 'lucide-react'
import '../styles/ThroughputCalculator.css'

export default function ThroughputCalculator() {
  const [inputs, setInputs] = useState({
    bandwidth: 10,
    packetsSent: 1000,
    packetsLost: 5,
  })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs((previous) => ({ ...previous, [name]: Number(value) }))
    setError('')
  }

  const calculateThroughput = () => {
    const { bandwidth, packetsSent, packetsLost } = inputs

    const invalidInput =
      [bandwidth, packetsSent, packetsLost].some((value) => !Number.isFinite(value) || value < 0) ||
      bandwidth <= 0 ||
      packetsSent <= 0 ||
      packetsLost > packetsSent

    if (invalidInput) {
      setResult(null)
      setError('Use non-negative values, keep bandwidth and packets sent above zero, and ensure packets lost does not exceed packets sent.')
      return
    }

    const packetLossRate = (packetsLost / packetsSent) * 100
    const effectiveThroughput = bandwidth * (1 - packetsLost / packetsSent)
    const successfulPackets = packetsSent - packetsLost

    setError('')
    setResult({
      packetLossRate: packetLossRate.toFixed(2),
      effectiveThroughput: effectiveThroughput.toFixed(2),
      successfulPackets,
    })
  }

  return (
    <div className="calculator calculator--throughput">
      <div className="calculator-header">
        <div>
          <span className="section-eyebrow">Delivery efficiency</span>
          <h3>Throughput Calculator</h3>
          <p>Estimate how much of the raw bandwidth remains useful after packet loss is taken into account.</p>
        </div>
        <div className="calculator-badge">Mbps</div>
      </div>

      <div className="formula-box">
        <p>
          <strong>Effective Throughput = Bandwidth × (1 - Loss Rate)</strong>
        </p>
        <p>Loss Rate = Packets Lost / Total Packets Sent</p>
      </div>

      <div className="field-grid">
        <div className="input-group">
          <label htmlFor="throughput-bandwidth">Bandwidth (Mbps)</label>
          <input
            id="throughput-bandwidth"
            type="number"
            name="bandwidth"
            min="0.1"
            step="0.5"
            value={inputs.bandwidth}
            onChange={handleInputChange}
            placeholder="e.g. 10"
          />
          <small>This is the raw link capacity before losses are applied.</small>
        </div>

        <div className="input-group">
          <label htmlFor="throughput-sent">Packets Sent</label>
          <input
            id="throughput-sent"
            type="number"
            name="packetsSent"
            min="1"
            value={inputs.packetsSent}
            onChange={handleInputChange}
            placeholder="e.g. 1000"
          />
          <small>Use the total packets launched over the observation interval.</small>
        </div>

        <div className="input-group">
          <label htmlFor="throughput-lost">Packets Lost</label>
          <input
            id="throughput-lost"
            type="number"
            name="packetsLost"
            min="0"
            value={inputs.packetsLost}
            onChange={handleInputChange}
            placeholder="e.g. 5"
          />
          <small>Lost packets cannot exceed the number originally sent.</small>
        </div>
      </div>

      {error ? (
        <div className="calculator-alert" role="alert">
          <AlertTriangle size={18} />
          <span>{error}</span>
        </div>
      ) : null}

      <button type="button" className="btn btn-primary calculator-button" onClick={calculateThroughput}>
        <Activity size={18} />
        Calculate Throughput
      </button>

      {result ? (
        <div className="result-box" aria-live="polite">
          <div className="result-header">
            <span className="section-eyebrow">Result</span>
            <h4>Effective throughput summary</h4>
          </div>

          <div className="result-grid">
            <article className="result-card">
              <span>Packet Loss Rate</span>
              <strong>{result.packetLossRate}%</strong>
              <small>The portion of the sent packets that never contributed to delivery.</small>
            </article>

            <article className="result-card">
              <span>Successful Packets</span>
              <strong>{result.successfulPackets}</strong>
              <small>The packets that actually made it through to the destination.</small>
            </article>

            <article className="result-card featured">
              <span>Effective Throughput</span>
              <strong>{result.effectiveThroughput} Mbps</strong>
              <small>The usable data rate after the loss penalty is applied.</small>
            </article>
          </div>
        </div>
      ) : null}
    </div>
  )
}

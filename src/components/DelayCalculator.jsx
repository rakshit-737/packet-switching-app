import { useState } from 'react'
import { AlertTriangle, Clock3 } from 'lucide-react'
import '../styles/DelayCalculator.css'

export default function DelayCalculator() {
  const [inputs, setInputs] = useState({
    packetSize: 1000,
    bandwidth: 1,
    propagationSpeed: 200000,
    distance: 1000,
  })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs((previous) => ({ ...previous, [name]: Number(value) }))
    setError('')
  }

  const calculateDelay = () => {
    const { packetSize, bandwidth, propagationSpeed, distance } = inputs

    if ([packetSize, bandwidth, propagationSpeed, distance].some((value) => !Number.isFinite(value) || value <= 0)) {
      setResult(null)
      setError('Enter positive values for every field before calculating the delay.')
      return
    }

    const transmissionDelay = (packetSize * 8) / (bandwidth * 1e6)
    const propagationDelay = distance / propagationSpeed
    const totalDelay = transmissionDelay + propagationDelay

    setError('')
    setResult({
      transmissionDelay: transmissionDelay.toFixed(6),
      propagationDelay: propagationDelay.toFixed(6),
      totalDelay: totalDelay.toFixed(6),
    })
  }

  return (
    <div className="calculator calculator--delay">
      <div className="calculator-header">
        <div>
          <span className="section-eyebrow">Transmission + propagation</span>
          <h3>Delay Calculator</h3>
          <p>Split end-to-end delay into the two pieces most frequently used in networking numericals.</p>
        </div>
        <div className="calculator-badge">Td</div>
      </div>

      <div className="formula-box">
        <p>
          <strong>Total Delay = Transmission Delay + Propagation Delay</strong>
        </p>
        <p>Td = (L / R) + (d / s)</p>
      </div>

      <div className="field-grid">
        <div className="input-group">
          <label htmlFor="delay-packet-size">Packet Size (bytes)</label>
          <input
            id="delay-packet-size"
            type="number"
            name="packetSize"
            min="1"
            value={inputs.packetSize}
            onChange={handleInputChange}
            placeholder="e.g. 1000"
          />
          <small>Use the payload length before serialization.</small>
        </div>

        <div className="input-group">
          <label htmlFor="delay-bandwidth">Bandwidth (Mbps)</label>
          <input
            id="delay-bandwidth"
            type="number"
            name="bandwidth"
            min="0.1"
            step="0.1"
            value={inputs.bandwidth}
            onChange={handleInputChange}
            placeholder="e.g. 1"
          />
          <small>Higher bandwidth reduces transmission delay.</small>
        </div>

        <div className="input-group">
          <label htmlFor="delay-propagation-speed">Propagation Speed (km/s)</label>
          <input
            id="delay-propagation-speed"
            type="number"
            name="propagationSpeed"
            min="1"
            value={inputs.propagationSpeed}
            onChange={handleInputChange}
            placeholder="e.g. 200000"
          />
          <small>Fiber links are commonly approximated near 200,000 km/s.</small>
        </div>

        <div className="input-group">
          <label htmlFor="delay-distance">Distance (km)</label>
          <input
            id="delay-distance"
            type="number"
            name="distance"
            min="0.1"
            step="0.1"
            value={inputs.distance}
            onChange={handleInputChange}
            placeholder="e.g. 1000"
          />
          <small>Use the end-to-end path length, not just one segment.</small>
        </div>
      </div>

      {error ? (
        <div className="calculator-alert" role="alert">
          <AlertTriangle size={18} />
          <span>{error}</span>
        </div>
      ) : null}

      <button type="button" className="btn btn-primary calculator-button" onClick={calculateDelay}>
        <Clock3 size={18} />
        Calculate Delay
      </button>

      {result ? (
        <div className="result-box" aria-live="polite">
          <div className="result-header">
            <span className="section-eyebrow">Result</span>
            <h4>Total end-to-end delay</h4>
          </div>

          <div className="result-grid">
            <article className="result-card">
              <span>Transmission Delay</span>
              <strong>{result.transmissionDelay}s</strong>
              <small>Time required to push the packet onto the link.</small>
            </article>

            <article className="result-card">
              <span>Propagation Delay</span>
              <strong>{result.propagationDelay}s</strong>
              <small>Time required for the signal to traverse the medium.</small>
            </article>

            <article className="result-card featured">
              <span>Total Delay</span>
              <strong>{result.totalDelay}s</strong>
              <small>The full source-to-destination delay for this simplified path.</small>
            </article>
          </div>
        </div>
      ) : null}
    </div>
  )
}

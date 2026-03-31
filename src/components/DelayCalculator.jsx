import { useState } from 'react'
import '../styles/DelayCalculator.css'

export default function DelayCalculator() {
  const [inputs, setInputs] = useState({
    packetSize: 1000,
    bandwidth: 1,
    propagationSpeed: 200000,
    distance: 1000,
  })
  const [result, setResult] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: parseFloat(value) }))
  }

  const calculateDelay = () => {
    const { packetSize, bandwidth, propagationSpeed, distance } = inputs
    
    if (!packetSize || !bandwidth || !propagationSpeed || !distance) {
      alert('Please fill all fields')
      return
    }

    // Transmission delay = (Packet Size in bits) / Bandwidth
    const transmissionDelay = (packetSize * 8) / (bandwidth * 1e6)
    
    // Propagation delay = Distance / Propagation Speed
    const propagationDelay = distance / propagationSpeed
    
    // Total delay
    const totalDelay = transmissionDelay + propagationDelay

    setResult({
      transmissionDelay: transmissionDelay.toFixed(6),
      propagationDelay: propagationDelay.toFixed(6),
      totalDelay: totalDelay.toFixed(6),
    })
  }

  return (
    <div className="calculator delay-calculator">
      <h3>Delay Calculator</h3>
      
      <div className="formula-box">
        <p><strong>Total Delay = Transmission Delay + Propagation Delay</strong></p>
        <p>T<sub>d</sub> = (L / R) + (d / s)</p>
      </div>

      <div className="input-group">
        <label>Packet Size (bytes)</label>
        <input
          type="number"
          name="packetSize"
          value={inputs.packetSize}
          onChange={handleInputChange}
          placeholder="e.g., 1000"
        />
      </div>

      <div className="input-group">
        <label>Bandwidth (Mbps)</label>
        <input
          type="number"
          name="bandwidth"
          value={inputs.bandwidth}
          onChange={handleInputChange}
          placeholder="e.g., 1"
          step="0.1"
        />
      </div>

      <div className="input-group">
        <label>Propagation Speed (km/s)</label>
        <input
          type="number"
          name="propagationSpeed"
          value={inputs.propagationSpeed}
          onChange={handleInputChange}
          placeholder="e.g., 200000"
        />
      </div>

      <div className="input-group">
        <label>Distance (km)</label>
        <input
          type="number"
          name="distance"
          value={inputs.distance}
          onChange={handleInputChange}
          placeholder="e.g., 1000"
          step="0.1"
        />
      </div>

      <button className="btn btn-calculate" onClick={calculateDelay}>
        Calculate Delay
      </button>

      {result && (
        <div className="result-box">
          <div className="result-item">
            <span>Transmission Delay:</span>
            <strong>{result.transmissionDelay} seconds</strong>
          </div>
          <div className="result-item">
            <span>Propagation Delay:</span>
            <strong>{result.propagationDelay} seconds</strong>
          </div>
          <div className="result-item highlight">
            <span>Total Delay:</span>
            <strong>{result.totalDelay} seconds</strong>
          </div>
        </div>
      )}
    </div>
  )
}

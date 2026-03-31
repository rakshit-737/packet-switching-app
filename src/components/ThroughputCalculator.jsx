import { useState } from 'react'
import '../styles/ThroughputCalculator.css'

export default function ThroughputCalculator() {
  const [inputs, setInputs] = useState({
    bandwidth: 10,
    packetsSent: 1000,
    packetsLost: 5,
  })
  const [result, setResult] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: parseFloat(value) }))
  }

  const calculateThroughput = () => {
    const { bandwidth, packetsSent, packetsLost } = inputs
    
    if (!bandwidth || !packetsSent) {
      alert('Please fill all fields')
      return
    }

    // Packet loss rate
    const packetLossRate = (packetsLost / packetsSent) * 100
    
    // Effective throughput = Bandwidth × (1 - Loss Rate)
    const effectiveThroughput = bandwidth * (1 - packetsLost / packetsSent)
    
    // Successful packets
    const successfulPackets = packetsSent - packetsLost

    setResult({
      packetLossRate: packetLossRate.toFixed(2),
      effectiveThroughput: effectiveThroughput.toFixed(2),
      successfulPackets: successfulPackets,
    })
  }

  return (
    <div className="calculator throughput-calculator">
      <h3>Throughput Calculator</h3>
      
      <div className="formula-box">
        <p><strong>Effective Throughput = Bandwidth × (1 - Loss Rate)</strong></p>
        <p>Loss Rate = Packets Lost / Total Packets Sent</p>
      </div>

      <div className="input-group">
        <label>Bandwidth (Mbps)</label>
        <input
          type="number"
          name="bandwidth"
          value={inputs.bandwidth}
          onChange={handleInputChange}
          placeholder="e.g., 10"
          step="0.5"
        />
      </div>

      <div className="input-group">
        <label>Packets Sent</label>
        <input
          type="number"
          name="packetsSent"
          value={inputs.packetsSent}
          onChange={handleInputChange}
          placeholder="e.g., 1000"
        />
      </div>

      <div className="input-group">
        <label>Packets Lost</label>
        <input
          type="number"
          name="packetsLost"
          value={inputs.packetsLost}
          onChange={handleInputChange}
          placeholder="e.g., 5"
        />
      </div>

      <button className="btn btn-calculate" onClick={calculateThroughput}>
        Calculate Throughput
      </button>

      {result && (
        <div className="result-box">
          <div className="result-item">
            <span>Packet Loss Rate:</span>
            <strong>{result.packetLossRate}%</strong>
          </div>
          <div className="result-item">
            <span>Successful Packets:</span>
            <strong>{result.successfulPackets}</strong>
          </div>
          <div className="result-item highlight">
            <span>Effective Throughput:</span>
            <strong>{result.effectiveThroughput} Mbps</strong>
          </div>
        </div>
      )}
    </div>
  )
}

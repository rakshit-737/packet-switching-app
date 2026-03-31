import { useState } from 'react'
import '../styles/SNRCalculator.css'

export default function SNRCalculator() {
  const [inputs, setInputs] = useState({
    signalPower: 1,
    noisePower: 0.1,
  })
  const [result, setResult] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: parseFloat(value) }))
  }

  const calculateSNR = () => {
    const { signalPower, noisePower } = inputs
    
    if (!signalPower || !noisePower) {
      alert('Please fill all fields')
      return
    }

    // SNR (linear) = Signal Power / Noise Power
    const snrLinear = signalPower / noisePower
    
    // SNR (dB) = 10 * log10(SNR linear)
    const snrDb = 10 * Math.log10(snrLinear)
    
    // Shannon Capacity = B * log2(1 + SNR)
    const shannonCapacity = Math.log2(1 + snrLinear)

    setResult({
      snrLinear: snrLinear.toFixed(4),
      snrDb: snrDb.toFixed(2),
      shannonCapacity: shannonCapacity.toFixed(4),
    })
  }

  return (
    <div className="calculator snr-calculator">
      <h3>SNR Calculator</h3>
      
      <div className="formula-box">
        <p><strong>SNR (dB) = 10 × log₁₀(Signal Power / Noise Power)</strong></p>
        <p>Shannon Capacity = log₂(1 + SNR)</p>
      </div>

      <div className="input-group">
        <label>Signal Power (Watts)</label>
        <input
          type="number"
          name="signalPower"
          value={inputs.signalPower}
          onChange={handleInputChange}
          placeholder="e.g., 1"
          step="0.01"
        />
      </div>

      <div className="input-group">
        <label>Noise Power (Watts)</label>
        <input
          type="number"
          name="noisePower"
          value={inputs.noisePower}
          onChange={handleInputChange}
          placeholder="e.g., 0.1"
          step="0.01"
        />
      </div>

      <button className="btn btn-calculate" onClick={calculateSNR}>
        Calculate SNR
      </button>

      {result && (
        <div className="result-box">
          <div className="result-item">
            <span>SNR (Linear):</span>
            <strong>{result.snrLinear}</strong>
          </div>
          <div className="result-item">
            <span>SNR (dB):</span>
            <strong>{result.snrDb} dB</strong>
          </div>
          <div className="result-item highlight">
            <span>Shannon Capacity:</span>
            <strong>{result.shannonCapacity} bits/hz</strong>
          </div>
        </div>
      )}
    </div>
  )
}

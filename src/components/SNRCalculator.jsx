import { useState } from 'react'
import { AlertTriangle, Signal } from 'lucide-react'
import '../styles/SNRCalculator.css'

export default function SNRCalculator() {
  const [inputs, setInputs] = useState({
    signalPower: 1,
    noisePower: 0.1,
  })
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setInputs((previous) => ({ ...previous, [name]: Number(value) }))
    setError('')
  }

  const calculateSNR = () => {
    const { signalPower, noisePower } = inputs

    if ([signalPower, noisePower].some((value) => !Number.isFinite(value) || value <= 0)) {
      setResult(null)
      setError('Enter positive signal and noise power values before calculating SNR.')
      return
    }

    const snrLinear = signalPower / noisePower
    const snrDb = 10 * Math.log10(snrLinear)
    const shannonCapacity = Math.log2(1 + snrLinear)

    setError('')
    setResult({
      snrLinear: snrLinear.toFixed(4),
      snrDb: snrDb.toFixed(2),
      shannonCapacity: shannonCapacity.toFixed(4),
    })
  }

  return (
    <div className="calculator calculator--snr">
      <div className="calculator-header">
        <div>
          <span className="section-eyebrow">Signal quality</span>
          <h3>SNR Calculator</h3>
          <p>Translate raw power levels into linear SNR, decibels, and the corresponding Shannon capacity.</p>
        </div>
        <div className="calculator-badge">SNR</div>
      </div>

      <div className="formula-box">
        <p>
          <strong>SNR(dB) = 10 × log10(Signal Power / Noise Power)</strong>
        </p>
        <p>Shannon Capacity = log2(1 + SNRlinear)</p>
      </div>

      <div className="field-grid">
        <div className="input-group">
          <label htmlFor="snr-signal-power">Signal Power (watts)</label>
          <input
            id="snr-signal-power"
            type="number"
            name="signalPower"
            min="0.01"
            step="0.01"
            value={inputs.signalPower}
            onChange={handleInputChange}
            placeholder="e.g. 1"
          />
          <small>Use the received signal power, not the transmitted one, when the problem provides it.</small>
        </div>

        <div className="input-group">
          <label htmlFor="snr-noise-power">Noise Power (watts)</label>
          <input
            id="snr-noise-power"
            type="number"
            name="noisePower"
            min="0.01"
            step="0.01"
            value={inputs.noisePower}
            onChange={handleInputChange}
            placeholder="e.g. 0.1"
          />
          <small>Noise power must stay above zero for the logarithm to be valid.</small>
        </div>
      </div>

      {error ? (
        <div className="calculator-alert" role="alert">
          <AlertTriangle size={18} />
          <span>{error}</span>
        </div>
      ) : null}

      <button type="button" className="btn btn-primary calculator-button" onClick={calculateSNR}>
        <Signal size={18} />
        Calculate SNR
      </button>

      {result ? (
        <div className="result-box" aria-live="polite">
          <div className="result-header">
            <span className="section-eyebrow">Result</span>
            <h4>Signal quality summary</h4>
          </div>

          <div className="result-grid">
            <article className="result-card">
              <span>SNR (Linear)</span>
              <strong>{result.snrLinear}</strong>
              <small>Useful when plugging the value into Shannon capacity directly.</small>
            </article>

            <article className="result-card">
              <span>SNR (dB)</span>
              <strong>{result.snrDb} dB</strong>
              <small>The logarithmic representation typically requested in exam problems.</small>
            </article>

            <article className="result-card featured">
              <span>Shannon Capacity</span>
              <strong>{result.shannonCapacity} bits/Hz</strong>
              <small>The theoretical information rate supported by this signal quality.</small>
            </article>
          </div>
        </div>
      ) : null}
    </div>
  )
}

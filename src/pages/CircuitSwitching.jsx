import { useState } from 'react'
import { Play, Pause, RotateCcw } from 'lucide-react'
import CircuitCanvas from '../components/CircuitCanvas'
import '../styles/CircuitSwitching.css'

export default function CircuitSwitching() {
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [calls, setCalls] = useState(2)
  const [resetToken, setResetToken] = useState(0)

  const reset = () => {
    setIsRunning(false)
    setResetToken((value) => value + 1)
  }

  return (
    <div className="circuit-switching-page">
      <div className="page-header">
        <h1>Circuit Switching Simulator</h1>
        <p>Experience dedicated communication channels with circuit switching.</p>
      </div>

      <div className="simulator-container">
        <div className="canvas-wrapper">
          <CircuitCanvas isRunning={isRunning} speed={speed} numCalls={calls} resetToken={resetToken} />
        </div>

        <div className="control-panel card">
          <h3>Controls</h3>
          
          <div className="control-group">
            <label>Simulation Speed</label>
            <div className="slider-container">
              <input
                type="range"
                min="0.5"
                max="3"
                step="0.5"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                disabled={isRunning}
              />
              <span className="speed-value">{speed}x</span>
            </div>
          </div>

          <div className="control-group">
            <label>Number of Calls</label>
            <input
              type="number"
              min="1"
              max="5"
              value={calls}
              onChange={(e) => setCalls(Math.max(1, Math.min(5, parseInt(e.target.value))))}
              disabled={isRunning}
            />
          </div>

          <div className="button-group">
            <button
              className="btn btn-primary"
              onClick={() => setIsRunning(!isRunning)}
            >
              {isRunning ? (
                <>
                  <Pause size={18} /> Pause
                </>
              ) : (
                <>
                  <Play size={18} /> Start
                </>
              )}
            </button>
            <button className="btn btn-secondary" onClick={reset}>
              <RotateCcw size={18} /> Reset
            </button>
          </div>

          <div className="info-box">
            <h4>How Circuit Switching Works:</h4>
            <ul>
              <li>A dedicated physical path is established before data transmission</li>
              <li>Resources are reserved exclusively for that connection</li>
              <li>Guaranteed bandwidth and low latency</li>
              <li>Used in traditional telephone networks</li>
              <li>Less efficient for bursty data traffic</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="metrics card">
        <h3>Key Metrics</h3>
        <div className="metrics-grid">
          <MetricBox label="Connection Establishment" value="Required" />
          <MetricBox label="Resource Utilization" value="Dedicated" />
          <MetricBox label="Bandwidth" value="Guaranteed" />
          <MetricBox label="Latency" value="Predictable" />
        </div>
      </div>
    </div>
  )
}

function MetricBox({ label, value }) {
  return (
    <div className="metric-box">
      <span className="metric-label">{label}</span>
      <span className="metric-value">{value}</span>
    </div>
  )
}

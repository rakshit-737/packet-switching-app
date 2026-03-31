import { useState } from 'react'
import { Pause, Play, RotateCcw } from 'lucide-react'
import PacketCanvas from '../components/PacketCanvas'
import '../styles/PacketSwitching.css'

export default function PacketSwitching() {
  const [isRunning, setIsRunning] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [packetSize, setPacketSize] = useState(64)
  const [dataSize, setDataSize] = useState(256)
  const [resetToken, setResetToken] = useState(0)

  const reset = () => {
    setIsRunning(false)
    setResetToken((value) => value + 1)
  }

  return (
    <div className="packet-switching-page">
      <div className="page-header">
        <span className="section-eyebrow">Packet lab</span>
        <h1>Packet Switching Simulator</h1>
        <p>Watch data packets move across a shared network and see how dynamic routing improves overall efficiency.</p>
      </div>

      <div className="simulator-container">
        <div className="canvas-wrapper">
          <PacketCanvas
            isRunning={isRunning}
            speed={speed}
            packetSize={packetSize}
            dataSize={dataSize}
            resetToken={resetToken}
          />
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
                onChange={(event) => setSpeed(parseFloat(event.target.value))}
                disabled={isRunning}
              />
              <span className="speed-value">{speed}x</span>
            </div>
          </div>

          <div className="control-group">
            <label>Total Data Size (bytes)</label>
            <input
              type="number"
              min="64"
              max="1024"
              step="64"
              value={dataSize}
              onChange={(event) => setDataSize(Math.max(64, parseInt(event.target.value, 10) || 64))}
              disabled={isRunning}
            />
          </div>

          <div className="control-group">
            <label>Packet Size (bytes)</label>
            <input
              type="number"
              min="16"
              max="256"
              step="16"
              value={packetSize}
              onChange={(event) =>
                setPacketSize(Math.max(16, Math.min(dataSize, parseInt(event.target.value, 10) || 16)))
              }
              disabled={isRunning}
            />
            <small>{Math.ceil(dataSize / packetSize)} packets total</small>
          </div>

          <div className="button-group">
            <button type="button" className="btn btn-primary" onClick={() => setIsRunning(!isRunning)}>
              {isRunning ? (
                <>
                  <Pause size={18} />
                  Pause
                </>
              ) : (
                <>
                  <Play size={18} />
                  Start
                </>
              )}
            </button>
            <button type="button" className="btn btn-secondary" onClick={reset}>
              <RotateCcw size={18} />
              Reset
            </button>
          </div>

          <div className="info-box">
            <h4>How Packet Switching Works</h4>
            <ul>
              <li>Data is divided into smaller packets with their own headers.</li>
              <li>Each packet can travel independently through the network.</li>
              <li>Packets may arrive out of order and must be reassembled at the destination.</li>
              <li>Links are shared, so utilization stays high for bursty traffic.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="metrics card">
        <h3>Key Metrics</h3>
        <div className="metrics-grid">
          <MetricBox label="Connection" value="Connectionless" />
          <MetricBox label="Resource Usage" value="Shared" />
          <MetricBox label="Efficiency" value="High" />
          <MetricBox label="Latency" value="Variable" />
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

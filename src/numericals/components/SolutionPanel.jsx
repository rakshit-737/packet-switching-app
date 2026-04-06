import React, { useState } from 'react'
import { downloadSolutionTxt } from './downloadSolution'
import { formatNumber } from '../engine/unitConverter'

export default function SolutionPanel({ result }) {
  const [expanded, setExpanded] = useState(true)

  if (!result) {
    return (
      <div className="solver-solution card">
        <div className="section-heading">
          <span className="section-eyebrow">Solution</span>
          <h2>Steps will appear here</h2>
          <p>Choose a problem, enter values, and press Solve.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="solver-solution card">
      <div className="section-heading">
        <span className="section-eyebrow">Solution</span>
        <h2>Final answer</h2>
        <p className="solver-final">
          {formatNumber(result.final.value, { maxSig: 8 })} {result.final.unit}
        </p>
      </div>

      <div className="solver-actions solver-actions-split">
        <button type="button" className="btn" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Hide steps' : 'Show steps'}
        </button>
        <button type="button" className="btn btn-primary" onClick={() => downloadSolutionTxt(result)}>
          Download full solution (.txt)
        </button>
      </div>

      {expanded ? (
        <div className="solver-steps">
          {result.steps.map((s, idx) => (
            <section key={idx} className="solver-step">
              <h3>{s.title}</h3>
              <ul>
                {s.lines.map((l, i) => (
                  <li key={i}>
                    <code>{l}</code>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      ) : null}
    </div>
  )
}

import React, { useState } from 'react'
import { downloadSolutionTxt, downloadSolutionPdf } from './downloadSolution'
import { formatNumber } from '../engine/unitConverter'
import { PROBLEMS } from '../definitions/problemRegistry'

export default function SolutionPanel({ result, tips, relatedProblems, onSelectProblem }) {
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

      {result.interpretation && (
        <div className="solver-interpretation">
          {result.interpretation}
        </div>
      )}

      <div className="solver-actions solver-actions-split">
        <button type="button" className="btn" onClick={() => setExpanded((v) => !v)}>
          {expanded ? 'Hide steps' : 'Show steps'}
        </button>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <button type="button" className="btn" onClick={() => downloadSolutionTxt(result)}>
            Download (.txt)
          </button>
          <button type="button" className="btn btn-primary" onClick={() => downloadSolutionPdf(result)}>
            Export PDF
          </button>
        </div>
      </div>

      {expanded && (
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
      )}

      {tips && tips.length > 0 && (
        <div className="solver-tips">
          <h4>💡 Tips</h4>
          <ul>
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>
      )}

      {relatedProblems && relatedProblems.length > 0 && (
        <div>
          <p style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Related problems
          </p>
          <div className="solver-related">
            {relatedProblems.map((id) => {
              const p = PROBLEMS.find((x) => x.id === id)
              if (!p) return null
              return (
                <button
                  key={id}
                  type="button"
                  className="solver-related-btn"
                  onClick={() => onSelectProblem && onSelectProblem(id)}
                >
                  {p.title}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

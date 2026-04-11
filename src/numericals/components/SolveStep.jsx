import React, { useState } from 'react'
import { formatNumber } from '../engine/unitConverter'
import { downloadSolutionTxt, downloadSolutionPdf, downloadMultiSolutionPdf } from './downloadSolution'

export default function SolveStep({ solutions, onNewSession }) {
  const [expanded, setExpanded] = useState(() => {
    const init = {}
    Object.keys(solutions).forEach((id) => {
      init[id] = true
    })
    return init
  })

  const entries = Object.entries(solutions)
  const successEntries = entries.filter(([, s]) => s.result)
  const errorEntries = entries.filter(([, s]) => s.error)
  const successResults = successEntries.map(([, s]) => s.result)

  return (
    <div className="intake-solve">
      <div className="intake-header">
        <div className="intake-header-copy">
          <span className="section-eyebrow">Solutions</span>
          <h2 className="intake-title">
            {successEntries.length} problem{successEntries.length !== 1 ? 's' : ''} solved
            {errorEntries.length > 0 && ` · ${errorEntries.length} failed`}
          </h2>
        </div>
        <div className="intake-header-actions">
          {successResults.length > 1 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => downloadMultiSolutionPdf(successResults)}
            >
              Export All PDF
            </button>
          )}
          <button type="button" className="btn btn-sm" onClick={onNewSession}>
            ← New Session
          </button>
        </div>
      </div>

      <div className="solve-results">
        {entries.map(([id, { result, error }]) => (
          <div key={id} className={`solve-result-card card${error ? ' solve-error-card' : ''}`}>
            {result ? (
              <>
                <div className="solve-result-header">
                  <div className="solve-result-title">
                    <strong>{result.problem.title}</strong>
                    {result.problem.difficulty && (
                      <span className={`difficulty-badge ${result.problem.difficulty}`}>
                        {result.problem.difficulty}
                      </span>
                    )}
                  </div>
                  <div className="solve-result-answer">
                    <span className="solver-final">
                      {formatNumber(result.final.value, { maxSig: 8 })} {result.final.unit}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={() => setExpanded((p) => ({ ...p, [id]: !p[id] }))}
                  >
                    {expanded[id] ? 'Hide steps' : 'Show steps'}
                  </button>
                </div>

                {result.interpretation && (
                  <div className="solver-interpretation">{result.interpretation}</div>
                )}

                {expanded[id] && (
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

                {result.tips && result.tips.length > 0 && (
                  <div className="solver-tips">
                    <h4>💡 Tips</h4>
                    <ul>
                      {result.tips.map((t, i) => (
                        <li key={i}>{t}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="solve-result-actions">
                  <button type="button" className="btn btn-sm" onClick={() => downloadSolutionTxt(result)}>
                    Download (.txt)
                  </button>
                  <button type="button" className="btn btn-sm" onClick={() => downloadSolutionPdf(result)}>
                    Export PDF
                  </button>
                </div>
              </>
            ) : (
              <div className="solve-error-content">
                <strong className="solve-error-id">{id}</strong>
                <div className="solver-error">{error}</div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

import React from 'react'
import { getUnits } from '../engine/unitConverter'

export default function ClassifyStep({
  classification,
  formData,
  onUpdateFormData,
  onReanalyze,
  selectedToSolve,
  onToggleSolve,
  onSolveSelected,
  onBack,
}) {
  const { solvable, needsMore, unsupported } = classification

  const handleInput = (problemId, inputKey, patch) => {
    onUpdateFormData(problemId, inputKey, patch)
  }

  const totalSelected = selectedToSolve.size

  return (
    <div className="intake-classify">
      <div className="intake-header">
        <div className="intake-header-copy">
          <span className="section-eyebrow">Step 2 of 2 — Review &amp; solve</span>
          <h2 className="intake-title">Problem analysis results</h2>
          <p className="intake-subtitle">
            See what's ready, fill in any missing values, select which problems to solve, then click&nbsp;
            <strong>Solve Selected</strong>.
          </p>
        </div>
        <button type="button" className="btn btn-sm" onClick={onBack}>
          ← Edit Inputs
        </button>
      </div>

      {/* ── SOLVABLE ─────────────────────────────────────────────────────── */}
      <div className="classify-bucket classify-bucket--solvable">
        <div className="classify-bucket-header">
          <span className="classify-bucket-icon">✅</span>
          <h3>
            Ready to solve{' '}
            <span className="classify-bucket-count">{solvable.length}</span>
          </h3>
        </div>

        {solvable.length === 0 ? (
          <p className="classify-empty">No problems have all inputs filled yet.</p>
        ) : (
          <div className="classify-problem-list">
            {solvable.map(({ id, problem }) => (
              <label key={id} className="classify-problem-row">
                <input
                  type="checkbox"
                  className="intake-checkbox"
                  checked={selectedToSolve.has(id)}
                  onChange={() => onToggleSolve(id)}
                />
                <span className="classify-problem-info">
                  <strong>{problem.title}</strong>
                  {problem.difficulty && (
                    <span className={`difficulty-badge ${problem.difficulty}`}>{problem.difficulty}</span>
                  )}
                </span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* ── NEEDS MORE INPUTS ───────────────────────────────────────────── */}
      {needsMore.length > 0 && (
        <div className="classify-bucket classify-bucket--needs-more">
          <div className="classify-bucket-header">
            <span className="classify-bucket-icon">⚠️</span>
            <h3>
              Missing inputs{' '}
              <span className="classify-bucket-count">{needsMore.length}</span>
            </h3>
          </div>

          <div className="classify-needs-more-list">
            {needsMore.map(({ id, problem, missing }) => {
              const pForm = formData[id] || {}
              return (
                <div key={id} className="classify-needs-more-item">
                  <div className="classify-needs-more-title">
                    <strong>{problem.title}</strong>
                    {problem.difficulty && (
                      <span className={`difficulty-badge ${problem.difficulty}`}>{problem.difficulty}</span>
                    )}
                  </div>

                  <div className="classify-missing-checklist">
                    <p className="classify-missing-label">
                      Missing {missing.length} required input{missing.length !== 1 ? 's' : ''}:
                    </p>
                    {missing.map((m) => {
                      const units = getUnits(m.quantity)
                      const state = pForm[m.key] || { value: m.defaultValue ?? '', unit: m.defaultUnit }
                      return (
                        <div key={m.key} className="classify-missing-field">
                          <span className="classify-missing-field-name">⬜ {m.label}</span>
                          <span className="solver-control classify-missing-input">
                            <input
                              className="solver-input"
                              inputMode="decimal"
                              placeholder="Enter value…"
                              value={state.value}
                              onChange={(e) => handleInput(id, m.key, { value: e.target.value })}
                            />
                            <select
                              className="solver-unit"
                              value={state.unit}
                              onChange={(e) => handleInput(id, m.key, { unit: e.target.value })}
                            >
                              {units.map((u) => (
                                <option key={u} value={u}>
                                  {u}
                                </option>
                              ))}
                            </select>
                          </span>
                        </div>
                      )
                    })}
                  </div>

                  <button type="button" className="btn btn-sm classify-recheck-btn" onClick={onReanalyze}>
                    Re-check ↺
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* ── UNSUPPORTED ─────────────────────────────────────────────────── */}
      {unsupported.length > 0 && (
        <div className="classify-bucket classify-bucket--unsupported">
          <div className="classify-bucket-header">
            <span className="classify-bucket-icon">❌</span>
            <h3>
              Cannot solve{' '}
              <span className="classify-bucket-count">{unsupported.length}</span>
            </h3>
          </div>
          <div className="classify-problem-list">
            {unsupported.map(({ id, reason }) => (
              <div key={id} className="classify-problem-row classify-unsupported-row">
                <strong>{id}</strong>
                <span className="classify-unsupported-reason">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <div className="intake-footer intake-footer--classify">
        <div className="classify-select-actions">
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => solvable.forEach(({ id }) => onToggleSolve(id, true))}
          >
            Select all solvable
          </button>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => solvable.forEach(({ id }) => onToggleSolve(id, false))}
          >
            Deselect all
          </button>
          <span className="intake-selection-summary">
            {totalSelected === 0
              ? 'Nothing selected'
              : `${totalSelected} problem${totalSelected !== 1 ? 's' : ''} to solve`}
          </span>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          disabled={totalSelected === 0}
          onClick={onSolveSelected}
        >
          Solve Selected ({totalSelected}) →
        </button>
      </div>
    </div>
  )
}

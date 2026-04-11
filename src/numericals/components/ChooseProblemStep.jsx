import React from 'react'
import { getUnits } from '../engine/unitConverter'

/**
 * Stage B — choose_problem
 * Shown after the user clicks "Done" in InputsCollectionStep.
 * Displays which problems are solvable with the current inputs and lets the
 * user select one or more to solve.  If nothing is solvable it shows a
 * friendly message and a way to return to input collection.
 */
export default function ChooseProblemStep({
  classification,
  universalInputs,
  onUpdateInput,
  onReanalyze,
  selectedToSolve,
  onToggleSolve,
  onSolveSelected,
  onBack,
}) {
  const { solvable, needsMore, unsupported } = classification
  const totalSelected = selectedToSolve.size
  const nothingSolvable = solvable.length === 0

  const handleMissingInput = (key, patch, param) => {
    onUpdateInput(key, { ...(universalInputs[key] || { value: '', unit: param.defaultUnit }), ...patch })
  }

  return (
    <div className="intake-classify">
      <div className="intake-header">
        <div className="intake-header-copy">
          <span className="section-eyebrow">Step 2 — Choose a problem to solve</span>
          <h2 className="intake-title">What can I solve for you?</h2>
          <p className="intake-subtitle">
            Based on the values you entered, here are the problems that can be solved.
            Select the ones you want, then click&nbsp;<strong>Solve Selected</strong>.
          </p>
        </div>
        <button type="button" className="btn btn-sm" onClick={onBack}>
          ← Edit Inputs
        </button>
      </div>

      {nothingSolvable && (
        <div className="choose-problem-empty card">
          <span className="choose-problem-empty-icon">🤔</span>
          <div>
            <strong>Not enough inputs yet</strong>
            <p className="intake-subtitle">
              None of the available problems have all required inputs filled in.
              Go back and add more values, or check the &quot;Need more inputs&quot; section below
              to see exactly what each problem needs.
            </p>
          </div>
          <button type="button" className="btn btn-primary" onClick={onBack}>
            ← Add more inputs
          </button>
        </div>
      )}

      {/* ── SOLVABLE ─────────────────────────────────────────────────────── */}
      {solvable.length > 0 && (
        <div className="classify-bucket classify-bucket--solvable">
          <div className="classify-bucket-header">
            <span className="classify-bucket-icon">✅</span>
            <h3>
              Ready to solve&nbsp;
              <span className="classify-bucket-count">{solvable.length}</span>
            </h3>
          </div>
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
                  {problem.formula?.quick && (
                    <code className="classify-formula-hint">{problem.formula.quick}</code>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* ── NEEDS MORE INPUTS ───────────────────────────────────────────── */}
      {needsMore.length > 0 && (
        <div className="classify-bucket classify-bucket--needs-more">
          <div className="classify-bucket-header">
            <span className="classify-bucket-icon">⚠️</span>
            <h3>
              Need more inputs&nbsp;
              <span className="classify-bucket-count">{needsMore.length}</span>
            </h3>
          </div>

          <div className="classify-needs-more-list">
            {needsMore.map(({ id, problem, missing }) => (
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
                    const state = universalInputs[m.key] || { value: m.defaultValue ?? '', unit: m.defaultUnit }
                    return (
                      <div key={m.key} className="classify-missing-field">
                        <span className="classify-missing-field-name">⬜ {m.label}</span>
                        <span className="solver-control classify-missing-input">
                          <input
                            className="solver-input"
                            inputMode="decimal"
                            placeholder="Enter value…"
                            value={state.value}
                            onChange={(e) =>
                              handleMissingInput(m.key, { value: e.target.value }, m)
                            }
                          />
                          <select
                            className="solver-unit"
                            value={state.unit}
                            onChange={(e) =>
                              handleMissingInput(m.key, { unit: e.target.value }, m)
                            }
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

                <button
                  type="button"
                  className="btn btn-sm classify-recheck-btn"
                  onClick={onReanalyze}
                >
                  Re-check ↺
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── UNSUPPORTED ─────────────────────────────────────────────────── */}
      {unsupported.length > 0 && (
        <div className="classify-bucket classify-bucket--unsupported">
          <div className="classify-bucket-header">
            <span className="classify-bucket-icon">❌</span>
            <h3>
              Cannot solve&nbsp;
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
          {solvable.length > 0 && (
            <>
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => solvable.forEach(({ id }) => onToggleSolve(id, true))}
              >
                Select all
              </button>
              <button
                type="button"
                className="btn btn-sm"
                onClick={() => solvable.forEach(({ id }) => onToggleSolve(id, false))}
              >
                Deselect all
              </button>
            </>
          )}
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

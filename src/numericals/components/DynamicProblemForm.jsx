import React, { useEffect } from 'react'
import { getUnits } from '../engine/unitConverter'

function initForm(problem) {
  const obj = {}
  for (const input of problem.inputs) obj[input.key] = { value: input.defaultValue ?? '', unit: input.defaultUnit }
  return obj
}

export default function DynamicProblemForm({ problem, form, setForm, onSolve, error }) {
  useEffect(() => {
    setForm(initForm(problem))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [problem?.id])

  const update = (key, patch) => setForm((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }))

  return (
    <div className="solver-form card">
      <div className="section-heading">
        <span className="section-eyebrow">Inputs</span>
        <h2>{problem.title}</h2>
        <p>{problem.description}</p>
      </div>

      <div className="solver-input-grid">
        {problem.inputs.map((inp) => {
          const unitOptions = getUnits(inp.quantity)
          const state = form[inp.key] || { value: '', unit: inp.defaultUnit }
          return (
            <label key={inp.key} className="solver-field">
              <span className="solver-label">{inp.label}</span>
              <span className="solver-control">
                <input
                  className="solver-input"
                  inputMode="decimal"
                  value={state.value}
                  onChange={(e) => update(inp.key, { value: e.target.value })}
                />
                <select className="solver-unit" value={state.unit} onChange={(e) => update(inp.key, { unit: e.target.value })}>
                  {unitOptions.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </span>
            </label>
          )
        })}
      </div>

      {error ? <div className="solver-error">Error: {error}</div> : null}

      <div className="solver-actions">
        <button type="button" className="btn btn-primary" onClick={onSolve}>
          Solve
        </button>
      </div>
    </div>
  )
}

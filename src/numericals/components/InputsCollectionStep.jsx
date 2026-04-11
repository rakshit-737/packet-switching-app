import React, { useState } from 'react'
import { UNIVERSAL_INPUTS, INPUT_GROUPS } from '../definitions/problemRegistry'
import { getUnits } from '../engine/unitConverter'

// Build a lookup map from key → param definition for O(1) access
const PARAM_BY_KEY = new Map(UNIVERSAL_INPUTS.map((p) => [p.key, p]))

export default function InputsCollectionStep({ inputs, onUpdateInput, onDone, onClearAll }) {
  const [expandedGroups, setExpandedGroups] = useState(() => new Set(INPUT_GROUPS.map((g) => g.id)))

  const toggleGroup = (groupId) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev)
      next.has(groupId) ? next.delete(groupId) : next.add(groupId)
      return next
    })
  }

  // Count how many parameters the user has filled in
  const filledCount = Object.values(inputs).filter((f) => String(f?.value ?? '').trim() !== '').length

  return (
    <div className="intake-collect">
      <div className="intake-header">
        <div className="intake-header-copy">
          <span className="section-eyebrow">Step 1 — Enter your known values</span>
          <h2 className="intake-title">What values do you have?</h2>
          <p className="intake-subtitle">
            Fill in any parameters you already know. When you&apos;re done, click&nbsp;
            <strong>Done — Show what I can solve</strong> and the system will figure out which
            problems can be calculated with your inputs.
          </p>
        </div>
        <div className="intake-header-actions">
          <button type="button" className="btn btn-sm" onClick={onClearAll}>
            Clear all
          </button>
        </div>
      </div>

      <div className="intake-universal-groups">
        {INPUT_GROUPS.map((group) => {
          const params = group.keys.map((k) => PARAM_BY_KEY.get(k)).filter(Boolean)
          if (params.length === 0) return null
          const isExpanded = expandedGroups.has(group.id)
          const filledInGroup = params.filter((p) => String(inputs[p.key]?.value ?? '').trim() !== '').length

          return (
            <div key={group.id} className="intake-topic-group">
              <button
                type="button"
                className="intake-topic-header"
                onClick={() => toggleGroup(group.id)}
                aria-expanded={isExpanded}
              >
                <span className="intake-topic-toggle">{isExpanded ? '▼' : '▶'}</span>
                <span className="intake-topic-title">{group.title}</span>
                <span className="intake-topic-meta">
                  <span className="intake-topic-count">{params.length}</span>
                  {filledInGroup > 0 && (
                    <span className="intake-topic-selected">{filledInGroup} filled</span>
                  )}
                </span>
              </button>

              {isExpanded && (
                <div className="intake-universal-inputs">
                  {params.map((param) => {
                    const units = getUnits(param.quantity)
                    const state = inputs[param.key] || { value: '', unit: param.defaultUnit }
                    const isFilled = String(state.value).trim() !== ''
                    return (
                      <label key={param.key} className={`solver-field intake-field${isFilled ? ' intake-field--filled' : ''}`}>
                        <span className="solver-label">{param.label}</span>
                        <span className="solver-control">
                          <input
                            className="solver-input"
                            inputMode="decimal"
                            placeholder="Leave blank if unknown"
                            value={state.value}
                            onChange={(e) => onUpdateInput(param.key, { value: e.target.value, unit: state.unit })}
                          />
                          {units.length > 1 ? (
                            <select
                              className="solver-unit"
                              value={state.unit}
                              onChange={(e) => onUpdateInput(param.key, { value: state.value, unit: e.target.value })}
                            >
                              {units.map((u) => (
                                <option key={u} value={u}>
                                  {u}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <span className="solver-unit-static">{state.unit}</span>
                          )}
                        </span>
                      </label>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="intake-footer">
        <span className="intake-selection-summary">
          {filledCount === 0
            ? 'No values entered yet'
            : `${filledCount} value${filledCount !== 1 ? 's' : ''} entered`}
        </span>
        <button
          type="button"
          className="btn btn-primary"
          disabled={filledCount === 0}
          onClick={onDone}
        >
          Done — Show what I can solve →
        </button>
      </div>
    </div>
  )
}

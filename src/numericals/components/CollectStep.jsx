import React, { useState } from 'react'
import { TOPICS, PROBLEMS, problemsByTopic } from '../definitions/problemRegistry'
import { getUnits } from '../engine/unitConverter'

function initProblemForm(problem) {
  const obj = {}
  for (const inp of problem.inputs) {
    obj[inp.key] = { value: inp.defaultValue ?? '', unit: inp.defaultUnit }
  }
  return obj
}

export default function CollectStep({ selectedIds, formData, onToggleProblem, onUpdateFormData, onAnalyze }) {
  const [expandedTopics, setExpandedTopics] = useState(() => new Set(TOPICS.map((t) => t.id)))
  const byTopic = problemsByTopic()

  const toggleTopic = (topicId) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev)
      next.has(topicId) ? next.delete(topicId) : next.add(topicId)
      return next
    })
  }

  const handleToggleProblem = (problem) => {
    if (selectedIds.has(problem.id)) {
      onToggleProblem(problem.id, false)
    } else {
      onToggleProblem(problem.id, true, initProblemForm(problem))
    }
  }

  const handleInput = (problemId, inputKey, patch) => {
    onUpdateFormData(problemId, inputKey, patch)
  }

  const selectedCount = selectedIds.size

  return (
    <div className="intake-collect">
      <div className="intake-header">
        <div className="intake-header-copy">
          <span className="section-eyebrow">Step 1 of 2 — Input collection</span>
          <h2 className="intake-title">Select problems &amp; enter values</h2>
          <p className="intake-subtitle">
            Check the problems you want to work with, fill in as many values as you have, then click&nbsp;
            <strong>Analyze</strong>.
          </p>
        </div>
        <div className="intake-header-actions">
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => {
              PROBLEMS.forEach((p) => {
                if (!selectedIds.has(p.id)) onToggleProblem(p.id, true, initProblemForm(p))
              })
            }}
          >
            Select all
          </button>
          <button
            type="button"
            className="btn btn-sm"
            onClick={() => {
              PROBLEMS.forEach((p) => onToggleProblem(p.id, false))
            }}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="intake-problem-groups">
        {TOPICS.map((topic) => {
          const problems = byTopic.get(topic.id) || []
          if (problems.length === 0) return null
          const isExpanded = expandedTopics.has(topic.id)
          const selectedInTopic = problems.filter((p) => selectedIds.has(p.id)).length

          return (
            <div key={topic.id} className="intake-topic-group">
              <button
                type="button"
                className="intake-topic-header"
                onClick={() => toggleTopic(topic.id)}
                aria-expanded={isExpanded}
              >
                <span className="intake-topic-toggle">{isExpanded ? '▼' : '▶'}</span>
                <span className="intake-topic-title">{topic.title}</span>
                <span className="intake-topic-meta">
                  <span className="intake-topic-count">{problems.length}</span>
                  {selectedInTopic > 0 && (
                    <span className="intake-topic-selected">{selectedInTopic} selected</span>
                  )}
                </span>
              </button>

              {isExpanded && (
                <div className="intake-topic-problems">
                  {problems.map((problem) => {
                    const isChecked = selectedIds.has(problem.id)
                    const pForm = formData[problem.id] || {}

                    return (
                      <div key={problem.id} className={`intake-problem-item${isChecked ? ' selected' : ''}`}>
                        <div className="intake-problem-header">
                          <label className="intake-problem-checkbox-label">
                            <input
                              type="checkbox"
                              className="intake-checkbox"
                              checked={isChecked}
                              onChange={() => handleToggleProblem(problem)}
                            />
                            <span className="intake-problem-title">
                              <strong>{problem.title}</strong>
                              {problem.difficulty && (
                                <span className={`difficulty-badge ${problem.difficulty}`}>{problem.difficulty}</span>
                              )}
                            </span>
                          </label>
                          <small className="intake-problem-desc">{problem.description}</small>
                        </div>

                        {isChecked && (
                          <div className="intake-problem-inputs">
                            {problem.inputs.map((inp) => {
                              const units = getUnits(inp.quantity)
                              const state = pForm[inp.key] || { value: inp.defaultValue ?? '', unit: inp.defaultUnit }
                              return (
                                <label key={inp.key} className="solver-field intake-field">
                                  <span className="solver-label">{inp.label}</span>
                                  <span className="solver-control">
                                    <input
                                      className="solver-input"
                                      inputMode="decimal"
                                      placeholder="Enter value…"
                                      value={state.value}
                                      onChange={(e) => handleInput(problem.id, inp.key, { value: e.target.value })}
                                    />
                                    <select
                                      className="solver-unit"
                                      value={state.unit}
                                      onChange={(e) => handleInput(problem.id, inp.key, { unit: e.target.value })}
                                    >
                                      {units.map((u) => (
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
                        )}
                      </div>
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
          {selectedCount === 0
            ? 'No problems selected'
            : `${selectedCount} problem${selectedCount !== 1 ? 's' : ''} selected`}
        </span>
        <button
          type="button"
          className="btn btn-primary"
          disabled={selectedCount === 0}
          onClick={onAnalyze}
        >
          Analyze →
        </button>
      </div>
    </div>
  )
}

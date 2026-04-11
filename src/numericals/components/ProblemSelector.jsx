import React from 'react'

const DIFF_OPTIONS = [
  { value: 'all', label: 'All' },
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'exam', label: 'Exam' },
]

export default function ProblemSelector({ topics, problemsByTopic, activeTopic, setActiveTopic, activeProblemId, setActiveProblemId, diffFilter, setDiffFilter }) {
  const rawList = problemsByTopic.get(activeTopic) || []
  const filteredList = diffFilter === 'all' ? rawList : rawList.filter((p) => p.difficulty === diffFilter)

  return (
    <div className="solver-selector card">
      <div className="section-heading">
        <span className="section-eyebrow">What do you want to calculate?</span>
        <h2>Choose a problem</h2>
        <p>Select a topic, then pick a solver.</p>
      </div>

      <div className="solver-topic-tabs" role="tablist" aria-label="Solver topics">
        {topics.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={activeTopic === t.id}
            className={`solver-topic-pill ${activeTopic === t.id ? 'active' : ''}`}
            onClick={() => setActiveTopic(t.id)}
          >
            {t.title}
          </button>
        ))}
      </div>

      <div className="diff-filter-row" role="group" aria-label="Filter by difficulty">
        {DIFF_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            type="button"
            className={`diff-pill ${opt.value} ${diffFilter === opt.value ? 'active' : ''}`}
            onClick={() => setDiffFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="solver-problem-list" role="list">
        {filteredList.length === 0 ? (
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', padding: '0.5rem 0' }}>
            No problems match this filter for the selected topic.
          </p>
        ) : (
          filteredList.map((p) => (
            <button
              key={p.id}
              type="button"
              className={`solver-problem-btn ${activeProblemId === p.id ? 'active' : ''}`}
              onClick={() => setActiveProblemId(p.id)}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                <strong>{p.title}</strong>
                {p.difficulty && (
                  <span className={`difficulty-badge ${p.difficulty}`}>{p.difficulty}</span>
                )}
              </span>
              <small>{p.description}</small>
            </button>
          ))
        )}
      </div>
    </div>
  )
}

import React from 'react'

export default function ProblemSelector({ topics, problemsByTopic, activeTopic, setActiveTopic, activeProblemId, setActiveProblemId }) {
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

      <div className="solver-problem-list" role="list">
        {(problemsByTopic.get(activeTopic) || []).map((p) => (
          <button
            key={p.id}
            type="button"
            className={`solver-problem-btn ${activeProblemId === p.id ? 'active' : ''}`}
            onClick={() => setActiveProblemId(p.id)}
          >
            <strong>{p.title}</strong>
            <small>{p.description}</small>
          </button>
        ))}
      </div>
    </div>
  )
}

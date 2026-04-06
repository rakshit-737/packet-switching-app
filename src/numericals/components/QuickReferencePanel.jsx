import React from 'react'

export default function QuickReferencePanel({ quickReference, formula }) {
  return (
    <aside className="solver-reference card">
      <div className="section-heading">
        <span className="section-eyebrow">Quick reference</span>
        <h2>Formula</h2>
      </div>

      <div className="reference-grid">
        {formula?.quick ? (
          <article className="reference-item">
            <strong>Formula</strong>
            <code>{formula.quick}</code>
          </article>
        ) : null}

        {(quickReference || []).map((r) => (
          <article key={r.title} className="reference-item">
            <strong>{r.title}</strong>
            <code>{r.value}</code>
          </article>
        ))}
      </div>
    </aside>
  )
}

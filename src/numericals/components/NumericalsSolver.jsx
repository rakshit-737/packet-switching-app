import React, { useState } from 'react'
import IntakeFlow from './IntakeFlow'
import ClassicSolver from './ClassicSolver'

export default function NumericalsSolver() {
  const [mode, setMode] = useState('intake')

  return (
    <div className="solver-shell">
      <div className="solver-mode-tabs" role="tablist" aria-label="Solver mode">
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'intake'}
          className={`solver-mode-tab${mode === 'intake' ? ' active' : ''}`}
          onClick={() => setMode('intake')}
        >
          🔬 Smart Intake
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={mode === 'classic'}
          className={`solver-mode-tab${mode === 'classic' ? ' active' : ''}`}
          onClick={() => setMode('classic')}
        >
          Classic Solver
        </button>
      </div>

      {mode === 'intake' ? <IntakeFlow /> : <ClassicSolver />}
    </div>
  )
}

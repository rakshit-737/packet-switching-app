import React, { useState, useCallback } from 'react'
import { solve } from '../engine/solverEngine'
import { classifyProblems } from '../engine/classifyProblems'
import CollectStep from './CollectStep'
import ClassifyStep from './ClassifyStep'
import SolveStep from './SolveStep'

export default function IntakeFlow() {
  // 'collect' → 'review' → 'solved'
  const [step, setStep] = useState('collect')

  // Which problem IDs the user has selected
  const [selectedIds, setSelectedIds] = useState(new Set())

  // Form data: { [problemId]: { [inputKey]: { value: string, unit: string } } }
  const [formData, setFormData] = useState({})

  // Classification result from classifyProblems()
  const [classification, setClassification] = useState(null)

  // Which solvable problems the user wants to solve
  const [selectedToSolve, setSelectedToSolve] = useState(new Set())

  // Solve results: { [problemId]: { result } | { error } }
  const [solutions, setSolutions] = useState({})

  // ── Step 1 handlers ──────────────────────────────────────────────────────

  const handleToggleProblem = useCallback((problemId, add, initForm) => {
    setSelectedIds((prev) => {
      const next = new Set(prev)
      add ? next.add(problemId) : next.delete(problemId)
      return next
    })
    if (add) {
      // Preserve existing form data; only initialise if not present
      setFormData((prev) => {
        if (prev[problemId]) return prev
        return { ...prev, [problemId]: initForm || {} }
      })
    }
  }, [])

  const handleUpdateFormData = useCallback((problemId, inputKey, patch) => {
    setFormData((prev) => ({
      ...prev,
      [problemId]: {
        ...(prev[problemId] || {}),
        [inputKey]: { ...(prev[problemId]?.[inputKey] || {}), ...patch },
      },
    }))
  }, [])

  const handleAnalyze = () => {
    const result = classifyProblems([...selectedIds], formData)
    setClassification(result)
    // Auto-select all solvable problems for solving
    setSelectedToSolve(new Set(result.solvable.map((s) => s.id)))
    setStep('review')
  }

  // ── Step 2 handlers ──────────────────────────────────────────────────────

  /** Re-run classification using current (possibly updated) formData */
  const handleReanalyze = () => {
    const result = classifyProblems([...selectedIds], formData)
    setClassification(result)
    setSelectedToSolve((prev) => {
      const next = new Set(prev)
      // Add newly-solvable problems
      result.solvable.forEach(({ id }) => next.add(id))
      // Remove problems that are no longer solvable
      result.needsMore.forEach(({ id }) => next.delete(id))
      result.unsupported.forEach(({ id }) => next.delete(id))
      return next
    })
  }

  const handleToggleSolve = useCallback((id, force) => {
    setSelectedToSolve((prev) => {
      const next = new Set(prev)
      if (force === true) next.add(id)
      else if (force === false) next.delete(id)
      else next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }, [])

  const handleSolveSelected = () => {
    const newSolutions = {}
    for (const id of selectedToSolve) {
      try {
        newSolutions[id] = { result: solve(id, formData[id] || {}) }
      } catch (e) {
        newSolutions[id] = { error: e?.message || 'Solve failed' }
      }
    }
    setSolutions(newSolutions)
    setStep('solved')
  }

  // ── Step 3 handlers ──────────────────────────────────────────────────────

  const handleNewSession = () => {
    setStep('collect')
    setSelectedIds(new Set())
    setFormData({})
    setClassification(null)
    setSelectedToSolve(new Set())
    setSolutions({})
  }

  // ── Render ───────────────────────────────────────────────────────────────

  if (step === 'collect') {
    return (
      <CollectStep
        selectedIds={selectedIds}
        formData={formData}
        onToggleProblem={handleToggleProblem}
        onUpdateFormData={handleUpdateFormData}
        onAnalyze={handleAnalyze}
      />
    )
  }

  if (step === 'review') {
    return (
      <ClassifyStep
        classification={classification}
        formData={formData}
        onUpdateFormData={handleUpdateFormData}
        onReanalyze={handleReanalyze}
        selectedToSolve={selectedToSolve}
        onToggleSolve={handleToggleSolve}
        onSolveSelected={handleSolveSelected}
        onBack={() => setStep('collect')}
      />
    )
  }

  return <SolveStep solutions={solutions} onNewSession={handleNewSession} />
}

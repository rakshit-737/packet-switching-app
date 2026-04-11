import React, { useState, useCallback } from 'react'
import { solve } from '../engine/solverEngine'
import { classifyProblems } from '../engine/classifyProblems'
import { PROBLEMS } from '../definitions/problemRegistry'
import InputsCollectionStep from './InputsCollectionStep'
import ChooseProblemStep from './ChooseProblemStep'
import SolveStep from './SolveStep'

/**
 * Three-stage state machine:
 *   collecting_inputs  →  choose_problem  →  solving
 *
 * Stage A (collecting_inputs): user enters raw values without seeing problem
 *   options. No classification is run at this point.
 * Stage B (choose_problem): after the user clicks "Done", classifyProblems is
 *   run over ALL registered problems using the flat inputs. Solvable problems
 *   are shown as selectable options.
 * Stage C (solving): the selected problems are solved and results displayed.
 */
export default function IntakeFlow() {
  // Stage A | B | C
  const [stage, setStage] = useState('collecting_inputs')

  // Flat map of all known values: { [inputKey]: { value: string, unit: string } }
  const [universalInputs, setUniversalInputs] = useState({})

  // Classification result (populated when entering stage B)
  const [classification, setClassification] = useState(null)

  // Which solvable problem IDs the user has selected to solve
  const [selectedToSolve, setSelectedToSolve] = useState(new Set())

  // Solve results: { [problemId]: { result } | { error } }
  const [solutions, setSolutions] = useState({})

  // ── Stage A helpers ───────────────────────────────────────────────────────

  const handleUpdateInput = useCallback((key, patch) => {
    setUniversalInputs((prev) => ({
      ...prev,
      [key]: { ...(prev[key] || {}), ...patch },
    }))
  }, [])

  const handleClearAll = useCallback(() => {
    setUniversalInputs({})
  }, [])

  /**
   * Classify ALL registered problems using the flat universal inputs.
   * Each problem receives the same flat inputs as its form data.
   */
  const runClassification = (inputs) => {
    const allIds = PROBLEMS.map((p) => p.id)
    // Build per-problem form data by spreading the flat inputs into every problem slot
    const formData = Object.fromEntries(allIds.map((id) => [id, inputs]))
    return classifyProblems(allIds, formData)
  }

  /** User clicks "Done — Show what I can solve" */
  const handleDone = () => {
    const result = runClassification(universalInputs)
    setClassification(result)
    setSelectedToSolve(new Set(result.solvable.map((s) => s.id)))
    setStage('choose_problem')
  }

  // ── Stage B helpers ───────────────────────────────────────────────────────

  /** Re-run classification after user fills in a missing value in Stage B */
  const handleReanalyze = () => {
    const result = runClassification(universalInputs)
    setClassification(result)
    setSelectedToSolve((prev) => {
      const next = new Set(prev)
      result.solvable.forEach(({ id }) => next.add(id))
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
        newSolutions[id] = { result: solve(id, universalInputs) }
      } catch (e) {
        newSolutions[id] = { error: e?.message || 'Solve failed' }
      }
    }
    setSolutions(newSolutions)
    setStage('solving')
  }

  // ── Stage C helpers ───────────────────────────────────────────────────────

  const handleNewSession = () => {
    setStage('collecting_inputs')
    setUniversalInputs({})
    setClassification(null)
    setSelectedToSolve(new Set())
    setSolutions({})
  }

  // ── Render ────────────────────────────────────────────────────────────────

  if (stage === 'collecting_inputs') {
    return (
      <InputsCollectionStep
        inputs={universalInputs}
        onUpdateInput={handleUpdateInput}
        onClearAll={handleClearAll}
        onDone={handleDone}
      />
    )
  }

  if (stage === 'choose_problem') {
    return (
      <ChooseProblemStep
        classification={classification}
        universalInputs={universalInputs}
        onUpdateInput={handleUpdateInput}
        onReanalyze={handleReanalyze}
        selectedToSolve={selectedToSolve}
        onToggleSolve={handleToggleSolve}
        onSolveSelected={handleSolveSelected}
        onBack={() => setStage('collecting_inputs')}
      />
    )
  }

  return <SolveStep solutions={solutions} onNewSession={handleNewSession} />
}

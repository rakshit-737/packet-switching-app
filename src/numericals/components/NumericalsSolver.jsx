import React, { useMemo, useState } from 'react'
import { TOPICS, PROBLEMS, problemsByTopic } from '../definitions/problemRegistry'
import { solve } from '../engine/solverEngine'
import ProblemSelector from './ProblemSelector'
import DynamicProblemForm from './DynamicProblemForm'
import SolutionPanel from './SolutionPanel'
import QuickReferencePanel from './QuickReferencePanel'

export default function NumericalsSolver() {
  const byTopic = useMemo(() => problemsByTopic(), [])
  const [activeTopic, setActiveTopic] = useState(TOPICS[0]?.id || 'delay')
  const firstProblem = (byTopic.get(activeTopic) || [])[0] || PROBLEMS[0]
  const [activeProblemId, setActiveProblemId] = useState(firstProblem?.id)
  const [diffFilter, setDiffFilter] = useState('all')

  const activeProblem = useMemo(() => PROBLEMS.find((p) => p.id === activeProblemId) || firstProblem, [activeProblemId, firstProblem])

  const [form, setForm] = useState({})
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  React.useEffect(() => {
    const list = byTopic.get(activeTopic) || []
    if (!list.some((p) => p.id === activeProblemId)) {
      setActiveProblemId(list[0]?.id || PROBLEMS[0]?.id)
      setResult(null)
      setError('')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTopic])

  const onSolve = () => {
    try {
      setError('')
      setResult(solve(activeProblem.id, form))
    } catch (e) {
      setResult(null)
      setError(e?.message || 'Failed to solve')
    }
  }

  const handleSelectRelated = (id) => {
    const p = PROBLEMS.find((x) => x.id === id)
    if (!p) return
    setActiveTopic(p.topic)
    setActiveProblemId(id)
    setResult(null)
    setError('')
  }

  return (
    <div className="solver-grid">
      <ProblemSelector
        topics={TOPICS}
        problemsByTopic={byTopic}
        activeTopic={activeTopic}
        setActiveTopic={setActiveTopic}
        activeProblemId={activeProblemId}
        setActiveProblemId={(id) => {
          setActiveProblemId(id)
          setResult(null)
          setError('')
        }}
        diffFilter={diffFilter}
        setDiffFilter={setDiffFilter}
      />

      <DynamicProblemForm problem={activeProblem} form={form} setForm={setForm} onSolve={onSolve} error={error} />

      <SolutionPanel
        result={result}
        tips={result?.tips}
        relatedProblems={result?.relatedProblems}
        onSelectProblem={handleSelectRelated}
      />

      <QuickReferencePanel quickReference={result?.quickReference} formula={activeProblem?.formula} />
    </div>
  )
}

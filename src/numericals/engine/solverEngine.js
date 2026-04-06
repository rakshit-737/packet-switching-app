import { fromBase, formatNumber, parseNumber, toBase } from './unitConverter'
import { PROBLEMS } from '../definitions/problemRegistry'

function requireFinite(name, v) {
  if (!Number.isFinite(v)) throw new Error(`Invalid value for ${name}`)
  return v
}

export function solve(problemId, rawInputs) {
  const problem = PROBLEMS.find((p) => p.id === problemId)
  if (!problem) throw new Error('Unknown problem')

  const given = {}
  const steps = []

  for (const input of problem.inputs) {
    const raw = rawInputs[input.key]
    const { ok, value } = parseNumber(raw?.value)
    if (!ok) throw new Error(`Enter a valid number for "${input.label}"`)
    const unit = raw?.unit || input.defaultUnit
    const base = toBase(input.quantity, value, unit)
    given[input.key] = { value, unit, base, quantity: input.quantity }
  }

  steps.push({
    title: 'Given values & unit normalization',
    lines: Object.entries(given).map(([k, g]) => `${k}: ${formatNumber(g.value)} ${g.unit} → ${formatNumber(g.base)} (base)`),
  })

  let baseResult = NaN
  const lines = []

  const pick = (k) => requireFinite(k, given[k]?.base)

  if (problemId === 'transmission_delay') {
    const L = pick('L')
    const R = pick('R')
    lines.push('Formula: Td = L / R')
    lines.push(`Substitute: Td = ${formatNumber(L)} / ${formatNumber(R)}`)
    baseResult = L / R
  } else if (problemId === 'propagation_delay') {
    const d = pick('d')
    const s = pick('s')
    lines.push('Formula: Tp = d / s')
    lines.push(`Substitute: Tp = ${formatNumber(d)} / ${formatNumber(s)}`)
    baseResult = d / s
  } else if (problemId === 'total_delay') {
    const L = pick('L')
    const R = pick('R')
    const d = pick('d')
    const s = pick('s')
    const Td = L / R
    const Tp = d / s
    lines.push('Formula: T = (L/R) + (d/s)')
    lines.push(`Td = ${formatNumber(Td)} s`)
    lines.push(`Tp = ${formatNumber(Tp)} s`)
    baseResult = Td + Tp
  } else if (problemId === 'effective_throughput_with_loss') {
    const R = pick('R')
    const loss = pick('loss')
    lines.push('Formula: Reff = R × (1 - loss)')
    baseResult = R * (1 - loss)
  } else if (problemId === 'goodput') {
    const R = pick('R')
    const payload = pick('payload')
    lines.push('Formula: Goodput = R × payloadFraction')
    baseResult = R * payload
  } else if (problemId === 'shannon_capacity') {
    const B = pick('B')
    const snr = pick('snr')
    lines.push('Formula: C = B log2(1 + SNR)')
    baseResult = B * Math.log2(1 + snr)
  } else {
    throw new Error('Solver not implemented yet')
  }

  steps.push({ title: 'Solve', lines })

  const outQ = problem.result.quantity
  const outUnit = problem.result.unit
  const displayValue = fromBase(outQ, baseResult, outUnit)

  const final = { value: displayValue, unit: outUnit, baseValue: baseResult }

  steps.push({ title: 'Final answer', lines: [`Answer: ${formatNumber(final.value)} ${final.unit}`] })

  return {
    problem,
    given,
    steps,
    final,
    quickReference: [{ title: 'Formula', value: problem.formula?.quick || '' }].filter((x) => x.value),
  }
}

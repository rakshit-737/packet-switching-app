import { PROBLEMS } from '../definitions/problemRegistry'
import { parseNumber } from './unitConverter'

/**
 * Classify selected problems based on current form data.
 *
 * @param {string[]} selectedIds - Array of problem IDs to classify
 * @param {Record<string, Record<string, {value: string, unit: string}>>} formData
 *   Nested map: problemId → inputKey → { value, unit }
 * @returns {{
 *   solvable:    Array<{ id: string, problem: object }>,
 *   needsMore:   Array<{ id: string, problem: object, missing: Array<{ key, label, quantity, defaultUnit, defaultValue }> }>,
 *   unsupported: Array<{ id: string, reason: string }>
 * }}
 */
export function classifyProblems(selectedIds, formData) {
  const solvable = []
  const needsMore = []
  const unsupported = []

  for (const id of selectedIds) {
    const problem = PROBLEMS.find((p) => p.id === id)

    if (!problem) {
      unsupported.push({
        id,
        reason: `No registered solver found for "${id}". This problem type is not supported.`,
      })
      continue
    }

    const problemForm = formData[id] || {}
    const missing = []

    for (const inp of problem.inputs) {
      if (!inp.required) continue
      const raw = problemForm[inp.key]
      const { ok } = parseNumber(raw?.value)
      if (!ok) {
        missing.push({
          key: inp.key,
          label: inp.label,
          quantity: inp.quantity,
          defaultUnit: inp.defaultUnit,
          defaultValue: String(inp.defaultValue ?? ''),
        })
      }
    }

    if (missing.length === 0) {
      solvable.push({ id, problem })
    } else {
      needsMore.push({ id, problem, missing })
    }
  }

  return { solvable, needsMore, unsupported }
}

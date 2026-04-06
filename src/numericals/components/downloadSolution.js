import { formatNumber } from '../engine/unitConverter'

export function downloadSolutionTxt(result) {
  const { problem, steps, final, given } = result
  const lines = []
  lines.push(`NetSwitch Numericals — Full Solution`)
  lines.push(`Problem: ${problem.title}`)
  lines.push(`Date: ${new Date().toISOString()}`)
  lines.push('')
  lines.push('Inputs:')
  for (const [k, g] of Object.entries(given)) lines.push(`- ${k}: ${formatNumber(g.value)} ${g.unit}`)
  lines.push('')
  lines.push('Steps:')
  for (const step of steps) {
    lines.push(`\n=== ${step.title} ===`)
    for (const l of step.lines) lines.push(l)
  }
  lines.push('')
  lines.push(`Final: ${formatNumber(final.value)} ${final.unit}`)

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `numericals-${problem.id}-solution.txt`
  document.body.appendChild(a)
  a.click()
  a.remove()
  URL.revokeObjectURL(url)
}

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
  if (result.interpretation) {
    lines.push('')
    lines.push(`Interpretation: ${result.interpretation}`)
  }

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

export function downloadSolutionPdf(result) {
  const { problem, steps, final, given } = result
  const html = `<!DOCTYPE html><html><head><title>Solution — ${problem.title}</title><style>
    *, *::before, *::after { box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 2rem; max-width: 800px; margin: 0 auto; color: #1a1a2e; }
    h1 { font-size: 1.5rem; margin-bottom: 0.25rem; }
    h2 { font-size: 1.1rem; border-bottom: 1px solid #ccc; padding-bottom: 0.3rem; margin-top: 1.5rem; }
    pre { background: #f5f5f5; padding: 1rem; border-radius: 6px; white-space: pre-wrap; font-size: 0.9rem; }
    ul { padding-left: 1.4rem; }
    li { margin-bottom: 0.2rem; }
    .meta { color: #666; font-size: 0.9rem; margin-bottom: 1rem; }
    .final { font-size: 1.5rem; font-weight: 700; color: #1a5f7a; }
    .interpretation { font-style: italic; color: #444; border-left: 3px solid #1a5f7a; padding-left: 0.75rem; margin-top: 0.5rem; }
    @media print { body { padding: 1rem; } }
  </style><script>window.addEventListener('load', function(){ window.print(); });<\/script></head><body>
    <h1>NetSwitch Numericals — ${problem.title}</h1>
    <p class="meta">Date: ${new Date().toLocaleDateString()} &nbsp;|&nbsp; Difficulty: ${problem.difficulty || 'N/A'}</p>
    <h2>Given Inputs</h2>
    <ul>${Object.entries(given).map(([k, g]) => `<li><strong>${k}</strong>: ${formatNumber(g.value)} ${g.unit}</li>`).join('')}</ul>
    ${steps.map((s) => `<h2>${s.title}</h2><pre>${s.lines.join('\n')}</pre>`).join('')}
    <h2>Result</h2>
    <p class="final">${formatNumber(final.value)} ${final.unit}</p>
    ${result.interpretation ? `<p class="interpretation">${result.interpretation}</p>` : ''}
    ${result.tips && result.tips.length ? `<h2>Tips</h2><ul>${result.tips.map((t) => `<li>${t}</li>`).join('')}</ul>` : ''}
  </body></html>`

  const blob = new Blob([html], { type: 'text/html;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const w = window.open(url, '_blank')
  if (!w) {
    const a = document.createElement('a')
    a.href = url
    a.target = '_blank'
    document.body.appendChild(a)
    a.click()
    a.remove()
  }
  const PDF_CLEANUP_DELAY_MS = 60000 // 60 s — enough time for the print dialog to open
  setTimeout(() => URL.revokeObjectURL(url), PDF_CLEANUP_DELAY_MS)
}

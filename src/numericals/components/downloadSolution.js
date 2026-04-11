import { formatNumber } from '../engine/unitConverter'

const BASE_PDF_STYLES = `
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
`

function openHtmlWindow(html) {
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
  const PDF_CLEANUP_DELAY_MS = 60000
  setTimeout(() => URL.revokeObjectURL(url), PDF_CLEANUP_DELAY_MS)
}

function buildProblemSection(result) {
  const { problem, steps, final, given } = result
  return `
    <h1>${problem.title}</h1>
    <p class="meta">Date: ${new Date().toLocaleDateString()} &nbsp;|&nbsp; Difficulty: ${problem.difficulty || 'N/A'}</p>
    <h2>Given Inputs</h2>
    <ul>${Object.entries(given).map(([k, g]) => `<li><strong>${k}</strong>: ${formatNumber(g.value)} ${g.unit}</li>`).join('')}</ul>
    ${steps.map((s) => `<h2>${s.title}</h2><pre>${s.lines.join('\n')}</pre>`).join('')}
    <h2>Result</h2>
    <p class="final">${formatNumber(final.value)} ${final.unit}</p>
    ${result.interpretation ? `<p class="interpretation">${result.interpretation}</p>` : ''}
    ${result.tips && result.tips.length ? `<h2>Tips</h2><ul>${result.tips.map((t) => `<li>${t}</li>`).join('')}</ul>` : ''}
  `
}

/**
 * Export multiple solutions as a single printable PDF document.
 * @param {Array} results - Array of solve() result objects
 */
export function downloadMultiSolutionPdf(results) {
  if (!results || results.length === 0) return

  const sections = results
    .map((r) => `<div class="problem-section">${buildProblemSection(r)}</div>`)
    .join('<hr class="problem-divider">')

  const html = `<!DOCTYPE html><html><head>
    <title>NetSwitch Numericals — Solution Set</title>
    <style>
      ${BASE_PDF_STYLES}
      .problem-section { margin-bottom: 2rem; }
      .problem-divider { border: none; border-top: 2px dashed #ccc; margin: 2rem 0; }
      @media print { .problem-divider { page-break-after: always; border: none; margin: 0; } }
    </style>
    <script>window.addEventListener('load', function(){ window.print(); });<\/script>
  </head><body>
    <div style="text-align:center;margin-bottom:2rem">
      <h2 style="border:none;font-size:1.6rem;color:#1a5f7a">NetSwitch Numericals — Solution Set</h2>
      <p style="color:#666">${results.length} problem${results.length !== 1 ? 's' : ''} &nbsp;·&nbsp; ${new Date().toLocaleDateString()}</p>
    </div>
    ${sections}
  </body></html>`

  openHtmlWindow(html)
}

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
  const html = `<!DOCTYPE html><html><head>
    <title>Solution — ${result.problem.title}</title>
    <style>${BASE_PDF_STYLES}</style>
    <script>window.addEventListener('load', function(){ window.print(); });<\/script>
  </head><body>
    <h1>NetSwitch Numericals — ${result.problem.title}</h1>
    ${buildProblemSection(result)}
  </body></html>`

  openHtmlWindow(html)
}

const CALL_COLORS = ['#1f5e69', '#24546f', '#34d399', '#f59e0b', '#fb7185', '#a78bfa']

export function drawCircuitSwitching(ctx, width, height, calls, time, options = {}) {
  if (!ctx) return

  ctx.clearRect(0, 0, width, height)

  drawBackdrop(ctx, width, height, time)
  drawGrid(ctx, width, height, time)

  const layout = createCircuitLayout(width, height, calls.length)

  drawSwitchCore(ctx, layout.core)
  drawRouters(ctx, layout)
  drawCallLanes(ctx, layout, calls, time)
  drawHud(ctx, width, height, calls, time, options)
}

function createCircuitLayout(width, height, callCount) {
  const source = { x: width * 0.12, y: height * 0.5, label: 'Source' }
  const destination = { x: width * 0.88, y: height * 0.5, label: 'Destination' }
  const core = {
    x: width * 0.5 - width * 0.12,
    y: height * 0.22,
    width: width * 0.24,
    height: height * 0.56,
  }
  const lanes = Array.from({ length: callCount }, (_, index) => {
    const y = height * 0.24 + ((height * 0.52) / Math.max(callCount - 1, 1)) * index
    return {
      y: callCount === 1 ? height * 0.5 : y,
      label: `Call ${index + 1}`,
    }
  })

  return { source, destination, core, lanes }
}

function drawBackdrop(ctx, width, height, time) {
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#071521')
  gradient.addColorStop(0.55, '#092433')
  gradient.addColorStop(1, '#071019')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  const glow = ctx.createRadialGradient(
    width * 0.52,
    height * 0.5,
    20,
    width * 0.52,
    height * 0.5,
    width * 0.5,
  )
  glow.addColorStop(0, 'rgba(52, 211, 153, 0.16)')
  glow.addColorStop(0.45, 'rgba(31, 96, 112, 0.08)')
  glow.addColorStop(1, 'rgba(0, 0, 0, 0)')

  ctx.fillStyle = glow
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = 'rgba(31, 96, 112, 0.05)'
  ctx.beginPath()
  ctx.arc(width * 0.82, height * (0.3 + Math.sin(time * 0.25) * 0.05), width * 0.17, 0, Math.PI * 2)
  ctx.fill()
}

function drawGrid(ctx, width, height, time) {
  ctx.save()
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.06)'
  ctx.lineWidth = 1

  const step = Math.max(44, width / 15)
  const offset = (time * 16) % step

  for (let x = 0; x <= width; x += step) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x + offset * 0.08, height)
    ctx.stroke()
  }

  for (let y = -step + offset; y <= height + step; y += step) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }

  ctx.restore()
}

function drawSwitchCore(ctx, core) {
  ctx.save()
  roundedRectPath(ctx, core.x, core.y, core.width, core.height, 28)
  ctx.fillStyle = 'rgba(8, 28, 38, 0.82)'
  ctx.fill()
  ctx.strokeStyle = 'rgba(45, 212, 191, 0.25)'
  ctx.lineWidth = 1.5
  ctx.stroke()

  const slotCount = 6
  const slotGap = core.height / (slotCount + 1)

  for (let index = 1; index <= slotCount; index += 1) {
    const slotY = core.y + slotGap * index
    ctx.strokeStyle = 'rgba(125, 211, 252, 0.09)'
    ctx.lineWidth = 1
    ctx.beginPath()
    ctx.moveTo(core.x + 16, slotY)
    ctx.lineTo(core.x + core.width - 16, slotY)
    ctx.stroke()
  }

  ctx.fillStyle = '#ccfbf1'
  ctx.font = '700 14px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText('Circuit Core', core.x + core.width / 2, core.y - 18)
  ctx.restore()
}

function drawRouters(ctx, layout) {
  drawRouter(ctx, layout.source.x, layout.source.y, layout.source.label, '#1f5e69')
  drawRouter(ctx, layout.destination.x, layout.destination.y, layout.destination.label, '#f59e0b')
}

function drawRouter(ctx, x, y, label, accent) {
  ctx.save()
  ctx.fillStyle = hexToRgba(accent, 0.14)
  ctx.beginPath()
  ctx.arc(x, y, 34, 0, Math.PI * 2)
  ctx.fill()

  ctx.strokeStyle = hexToRgba(accent, 0.8)
  ctx.lineWidth = 2.5
  ctx.beginPath()
  ctx.arc(x, y, 28, 0, Math.PI * 2)
  ctx.stroke()

  ctx.fillStyle = accent
  ctx.beginPath()
  ctx.arc(x, y, 12, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = '#f8fafc'
  ctx.font = '700 12px Inter, sans-serif'
  ctx.textAlign = 'center'
  ctx.fillText(label, x, y + 52)
  ctx.restore()
}

function drawCallLanes(ctx, layout, calls, time) {
  calls.forEach((call, index) => {
    const lane = layout.lanes[index]
    const color = call.color || CALL_COLORS[index % CALL_COLORS.length]
    const path = createLanePath(layout, lane.y)
    const progress = normalizeProgress(call.progress)
    const primaryPulse = getPointAlongPath(path, progress)
    const echoPulse = getPointAlongPath(path, normalizeProgress(progress - 0.18))

    if (!primaryPulse || !echoPulse) return

    drawLane(ctx, path, lane.label, color, time, progress)
    drawPulse(ctx, primaryPulse, color, 10)
    drawPulse(ctx, echoPulse, color, 6, 0.35)
  })
}

function createLanePath(layout, laneY) {
  return [
    { x: layout.source.x + 28, y: layout.source.y },
    { x: layout.source.x + 54, y: laneY },
    { x: layout.core.x, y: laneY },
    { x: layout.core.x + layout.core.width, y: laneY },
    { x: layout.destination.x - 54, y: laneY },
    { x: layout.destination.x - 28, y: layout.destination.y },
  ]
}

function drawLane(ctx, path, label, color, time, progress) {
  const labelAnchor = path[1]

  ctx.save()
  ctx.strokeStyle = 'rgba(71, 85, 105, 0.4)'
  ctx.lineWidth = 9
  ctx.lineCap = 'round'
  drawPolyline(ctx, path)
  ctx.stroke()

  ctx.strokeStyle = hexToRgba(color, 0.75)
  ctx.shadowColor = hexToRgba(color, 0.4)
  ctx.shadowBlur = 10
  ctx.lineWidth = 4
  ctx.setLineDash([26, 14])
  ctx.lineDashOffset = -time * 24
  drawPolyline(ctx, path)
  ctx.stroke()
  ctx.setLineDash([])

  ctx.strokeStyle = hexToRgba(color, 0.18 + progress * 0.16)
  ctx.lineWidth = 14
  drawPolyline(ctx, path)
  ctx.stroke()

  drawTag(ctx, labelAnchor.x + 16, labelAnchor.y - 18, label, color)
  ctx.restore()
}

function drawPulse(ctx, position, color, radius, alpha = 0.55) {
  ctx.save()
  ctx.fillStyle = hexToRgba(color, alpha)
  ctx.shadowColor = hexToRgba(color, 0.85)
  ctx.shadowBlur = 18
  ctx.beginPath()
  ctx.arc(position.x, position.y, radius, 0, Math.PI * 2)
  ctx.fill()

  ctx.shadowBlur = 0
  ctx.fillStyle = '#f8fafc'
  ctx.beginPath()
  ctx.arc(position.x, position.y, Math.max(2, radius * 0.28), 0, Math.PI * 2)
  ctx.fill()
  ctx.restore()
}

function drawHud(ctx, width, height, calls, time, options) {
  const reservedBandwidth = calls.reduce((total, call) => total + (call.bandwidth || 64), 0)

  drawPill(ctx, 24, 22, 'Circuit Switching', {
    background: 'rgba(8, 22, 29, 0.88)',
    border: 'rgba(45, 212, 191, 0.35)',
    color: '#ccfbf1',
  })

  drawPill(ctx, 196, 22, `${calls.length} reserved lanes`, {
    background: 'rgba(8, 27, 41, 0.72)',
    border: 'rgba(31, 78, 104, 0.3)',
    color: '#a9bfd2',
  })

  drawPill(ctx, width - 24, 22, 'Setup first, then steady transfer', {
    align: 'right',
    background: 'rgba(15, 23, 42, 0.72)',
    border: 'rgba(148, 163, 184, 0.22)',
    color: '#e2e8f0',
  })

  ctx.save()
  ctx.fillStyle = 'rgba(226, 232, 240, 0.88)'
  ctx.font = '500 12px JetBrains Mono, monospace'
  ctx.textAlign = 'left'
  ctx.fillText(
    `t=${time.toFixed(1)}s  |  ${calls.length} active circuits  |  reserved bandwidth ${reservedBandwidth} kbps  |  ${options.label || 'dedicated path'}`,
    24,
    height - 26,
  )
  ctx.restore()
}

function drawPill(ctx, x, y, text, options = {}) {
  ctx.save()
  ctx.font = options.font || '600 12px Inter, sans-serif'

  const textWidth = ctx.measureText(text).width
  const paddingX = 12
  const paddingY = 8
  const width = textWidth + paddingX * 2
  const height = 30
  const startX = options.align === 'right' ? x - width : x

  roundedRectPath(ctx, startX, y, width, height, 999)
  ctx.fillStyle = options.background || 'rgba(15, 23, 42, 0.75)'
  ctx.fill()
  ctx.strokeStyle = options.border || 'rgba(71, 85, 105, 0.55)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.fillStyle = options.color || '#e2e8f0'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, startX + width / 2, y + height / 2 + 0.5)
  ctx.restore()
}

function drawTag(ctx, x, y, text, accent) {
  ctx.save()
  ctx.font = '600 10px Inter, sans-serif'
  const textWidth = ctx.measureText(text).width
  const width = textWidth + 16
  const height = 22

  roundedRectPath(ctx, x - width / 2, y - height / 2, width, height, 999)
  ctx.fillStyle = hexToRgba(accent, 0.16)
  ctx.fill()
  ctx.strokeStyle = hexToRgba(accent, 0.32)
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.fillStyle = '#f8fafc'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, x, y + 0.5)
  ctx.restore()
}

function getPointAlongPath(path, progress) {
  const normalized = normalizeProgress(progress)
  const targetDistance = getPathLength(path) * normalized

  let travelled = 0

  for (let index = 0; index < path.length - 1; index += 1) {
    const start = path[index]
    const end = path[index + 1]
    const segmentLength = distanceBetween(start, end)

    if (travelled + segmentLength >= targetDistance) {
      const ratio = segmentLength === 0 ? 0 : (targetDistance - travelled) / segmentLength
      return {
        x: start.x + (end.x - start.x) * ratio,
        y: start.y + (end.y - start.y) * ratio,
      }
    }

    travelled += segmentLength
  }

  return path[path.length - 1]
}

function getPathLength(path) {
  return path.reduce((total, point, index) => {
    if (index === path.length - 1) return total
    return total + distanceBetween(point, path[index + 1])
  }, 0)
}

function distanceBetween(start, end) {
  return Math.hypot(end.x - start.x, end.y - start.y)
}

function normalizeProgress(progress) {
  if (!Number.isFinite(progress)) return 0
  return ((progress % 1) + 1) % 1
}

function drawPolyline(ctx, path) {
  ctx.beginPath()
  ctx.moveTo(path[0].x, path[0].y)
  path.slice(1).forEach((point) => ctx.lineTo(point.x, point.y))
}

function roundedRectPath(ctx, x, y, width, height, radius) {
  const safeRadius = Math.min(radius, width / 2, height / 2)

  ctx.beginPath()
  ctx.moveTo(x + safeRadius, y)
  ctx.lineTo(x + width - safeRadius, y)
  ctx.quadraticCurveTo(x + width, y, x + width, y + safeRadius)
  ctx.lineTo(x + width, y + height - safeRadius)
  ctx.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height)
  ctx.lineTo(x + safeRadius, y + height)
  ctx.quadraticCurveTo(x, y + height, x, y + height - safeRadius)
  ctx.lineTo(x, y + safeRadius)
  ctx.quadraticCurveTo(x, y, x + safeRadius, y)
  ctx.closePath()
}

function hexToRgba(hex, alpha) {
  const normalized = hex.replace('#', '')
  const value = normalized.length === 3
    ? normalized
        .split('')
        .map((part) => `${part}${part}`)
        .join('')
    : normalized

  const red = Number.parseInt(value.slice(0, 2), 16)
  const green = Number.parseInt(value.slice(2, 4), 16)
  const blue = Number.parseInt(value.slice(4, 6), 16)

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

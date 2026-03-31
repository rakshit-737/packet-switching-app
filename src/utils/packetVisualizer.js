const EDGE_INDEXES = [
  [0, 1],
  [1, 2],
  [2, 3],
  [4, 5],
  [5, 6],
  [6, 7],
  [0, 4],
  [1, 5],
  [2, 6],
  [3, 7],
]

const ROUTE_INDEXES = [
  [0, 1, 2, 3, 7],
  [0, 4, 5, 6, 7],
  [0, 1, 5, 6, 7],
  [0, 4, 5, 1, 2, 6, 7],
]

export function drawPacketSwitching(ctx, width, height, packets, time, options = {}) {
  if (!ctx) return

  ctx.clearRect(0, 0, width, height)

  drawBackdrop(ctx, width, height, time)
  drawGrid(ctx, width, height, time)

  const nodes = createMeshNodes(width, height)
  const routes = ROUTE_INDEXES.map((route) => route.map((index) => nodes[index]))
  const edgeUsage = getEdgeUsage(packets)

  drawConnections(ctx, nodes, edgeUsage, time)
  drawPackets(ctx, packets, routes, width)
  drawNodes(ctx, nodes)
  drawHud(ctx, width, height, packets, time, options)
}

function createMeshNodes(width, height) {
  const left = width * 0.12
  const right = width * 0.88
  const top = height * 0.28
  const bottom = height * 0.7
  const xGap = (right - left) / 3

  return [
    { x: left, y: top, label: 'A', role: 'source' },
    { x: left + xGap, y: top, label: 'B' },
    { x: left + xGap * 2, y: top, label: 'C' },
    { x: right, y: top, label: 'D' },
    { x: left, y: bottom, label: 'E' },
    { x: left + xGap, y: bottom, label: 'F' },
    { x: left + xGap * 2, y: bottom, label: 'G' },
    { x: right, y: bottom, label: 'H', role: 'destination' },
  ]
}

function getEdgeUsage(packets) {
  const usage = new Map()

  packets.forEach((packet) => {
    const route = ROUTE_INDEXES[packet.routeIndex % ROUTE_INDEXES.length]

    for (let index = 0; index < route.length - 1; index += 1) {
      const key = edgeKey(route[index], route[index + 1])
      usage.set(key, (usage.get(key) || 0) + 1)
    }
  })

  return usage
}

function drawBackdrop(ctx, width, height, time) {
  const baseGradient = ctx.createLinearGradient(0, 0, width, height)
  baseGradient.addColorStop(0, '#06101d')
  baseGradient.addColorStop(0.55, '#091629')
  baseGradient.addColorStop(1, '#050b16')

  ctx.fillStyle = baseGradient
  ctx.fillRect(0, 0, width, height)

  const glow = ctx.createRadialGradient(
    width * 0.52,
    height * 0.38,
    20,
    width * 0.52,
    height * 0.38,
    width * 0.7,
  )
  glow.addColorStop(0, 'rgba(56, 189, 248, 0.18)')
  glow.addColorStop(0.45, 'rgba(37, 99, 235, 0.1)')
  glow.addColorStop(1, 'rgba(0, 0, 0, 0)')

  ctx.fillStyle = glow
  ctx.fillRect(0, 0, width, height)

  ctx.fillStyle = 'rgba(125, 211, 252, 0.06)'
  const haloX = width * (0.22 + ((Math.sin(time * 0.35) + 1) * 0.08))
  const haloY = height * (0.18 + ((Math.cos(time * 0.3) + 1) * 0.04))
  ctx.beginPath()
  ctx.arc(haloX, haloY, width * 0.18, 0, Math.PI * 2)
  ctx.fill()
}

function drawGrid(ctx, width, height, time) {
  ctx.save()
  ctx.strokeStyle = 'rgba(148, 163, 184, 0.07)'
  ctx.lineWidth = 1

  const step = Math.max(42, width / 16)
  const offset = (time * 18) % step

  for (let x = -step + offset; x <= width + step; x += step) {
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()
  }

  for (let y = 0; y <= height + step; y += step) {
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
  }

  ctx.restore()
}

function drawConnections(ctx, nodes, edgeUsage, time) {
  EDGE_INDEXES.forEach(([startIndex, endIndex], index) => {
    const start = nodes[startIndex]
    const end = nodes[endIndex]
    const activeLoad = edgeUsage.get(edgeKey(startIndex, endIndex)) || 0

    ctx.save()
    ctx.strokeStyle = 'rgba(71, 85, 105, 0.48)'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()

    ctx.strokeStyle = `rgba(96, 165, 250, ${0.18 + Math.min(activeLoad, 5) * 0.08})`
    ctx.lineWidth = 1.8 + Math.min(activeLoad, 4) * 0.45
    ctx.setLineDash([18, 18])
    ctx.lineDashOffset = -time * 22 - index * 7
    ctx.shadowColor = 'rgba(56, 189, 248, 0.35)'
    ctx.shadowBlur = activeLoad > 0 ? 14 : 0
    ctx.beginPath()
    ctx.moveTo(start.x, start.y)
    ctx.lineTo(end.x, end.y)
    ctx.stroke()
    ctx.restore()
  })
}

function drawNodes(ctx, nodes) {
  nodes.forEach((node) => {
    const outerColor = node.role === 'destination' ? '#f59e0b' : node.role === 'source' ? '#22d3ee' : '#60a5fa'
    const innerColor = node.role === 'destination' ? '#fde68a' : node.role === 'source' ? '#cffafe' : '#dbeafe'

    ctx.save()
    ctx.fillStyle = hexToRgba(outerColor, 0.14)
    ctx.beginPath()
    ctx.arc(node.x, node.y, 26, 0, Math.PI * 2)
    ctx.fill()

    ctx.strokeStyle = hexToRgba(outerColor, 0.85)
    ctx.lineWidth = 2.5
    ctx.beginPath()
    ctx.arc(node.x, node.y, 22, 0, Math.PI * 2)
    ctx.stroke()

    ctx.fillStyle = outerColor
    ctx.beginPath()
    ctx.arc(node.x, node.y, 9, 0, Math.PI * 2)
    ctx.fill()

    ctx.fillStyle = innerColor
    ctx.font = '700 13px Inter, sans-serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText(node.label, node.x, node.y)

    if (node.role) {
      drawTag(ctx, node.x, node.y + 34, node.role === 'source' ? 'Source' : 'Destination', outerColor)
    }

    ctx.restore()
  })
}

function drawPackets(ctx, packets, routes, width) {
  packets.forEach((packet) => {
    const route = routes[packet.routeIndex % routes.length]
    const position = getPointAlongPath(route, packet.progress)
    const trailPoint = getPointAlongPath(route, normalizeProgress(packet.progress - 0.04))

    if (!position || !trailPoint) return

    ctx.save()
    ctx.strokeStyle = hexToRgba(packet.color, 0.4)
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(trailPoint.x, trailPoint.y)
    ctx.lineTo(position.x, position.y)
    ctx.stroke()

    const size = Math.max(10, Math.min(16, 10 + packet.size / 128))

    ctx.shadowColor = hexToRgba(packet.color, 0.7)
    ctx.shadowBlur = 16
    ctx.fillStyle = hexToRgba(packet.color, 0.95)
    ctx.fillRect(position.x - size / 2, position.y - size / 2, size, size)

    ctx.shadowBlur = 0
    ctx.fillStyle = 'rgba(239, 246, 255, 0.9)'
    ctx.fillRect(position.x - 2, position.y - 2, 4, 4)

    if (packets.length <= 10 && width > 720) {
      drawTag(ctx, position.x, position.y - 18, `P${packet.id + 1}`, packet.color, {
        backgroundAlpha: 0.2,
        font: '600 10px JetBrains Mono, monospace',
      })
    }

    ctx.restore()
  })
}

function drawHud(ctx, width, height, packets, time, options) {
  const totalPackets = packets.length
  const efficiency =
    totalPackets > 0 && options.packetSize
      ? ((options.dataSize / (totalPackets * options.packetSize)) * 100).toFixed(1)
      : '100.0'

  drawPill(ctx, 24, 22, 'Packet Switching', {
    background: 'rgba(8, 15, 30, 0.88)',
    border: 'rgba(56, 189, 248, 0.4)',
    color: '#e0f2fe',
  })

  drawPill(ctx, 190, 22, `${totalPackets} packets in flight`, {
    background: 'rgba(7, 23, 46, 0.72)',
    border: 'rgba(59, 130, 246, 0.35)',
    color: '#bfdbfe',
  })

  drawPill(ctx, width - 24, 22, 'Shared links / adaptive routes', {
    align: 'right',
    background: 'rgba(15, 23, 42, 0.72)',
    border: 'rgba(148, 163, 184, 0.25)',
    color: '#e2e8f0',
  })

  ctx.save()
  ctx.fillStyle = 'rgba(226, 232, 240, 0.88)'
  ctx.font = '500 12px JetBrains Mono, monospace'
  ctx.textAlign = 'left'
  ctx.fillText(
    `t=${time.toFixed(1)}s  |  ${options.dataSize ?? 0} bytes split into ${totalPackets} packets  |  payload efficiency ${efficiency}%`,
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
  const pillWidth = textWidth + paddingX * 2
  const pillHeight = 30
  const startX = options.align === 'right' ? x - pillWidth : x

  roundedRectPath(ctx, startX, y, pillWidth, pillHeight, 999)
  ctx.fillStyle = options.background || 'rgba(15, 23, 42, 0.75)'
  ctx.fill()
  ctx.strokeStyle = options.border || 'rgba(71, 85, 105, 0.55)'
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.fillStyle = options.color || '#e2e8f0'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, startX + pillWidth / 2, y + pillHeight / 2 + 0.5)
  ctx.restore()
}

function drawTag(ctx, x, y, text, accent, options = {}) {
  ctx.save()
  ctx.font = options.font || '600 10px Inter, sans-serif'
  const textWidth = ctx.measureText(text).width
  const paddingX = 8
  const paddingY = 5
  const width = textWidth + paddingX * 2
  const height = 22

  roundedRectPath(ctx, x - width / 2, y - height / 2, width, height, 999)
  ctx.fillStyle = hexToRgba(accent, options.backgroundAlpha ?? 0.16)
  ctx.fill()
  ctx.strokeStyle = hexToRgba(accent, 0.35)
  ctx.lineWidth = 1
  ctx.stroke()

  ctx.fillStyle = '#f8fafc'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, x, y + 0.5)
  ctx.restore()
}

function getPointAlongPath(path, progress) {
  if (!path.length) return null

  const normalizedProgress = normalizeProgress(progress)
  const pathLength = getPathLength(path)
  const targetDistance = pathLength * normalizedProgress

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

function edgeKey(start, end) {
  return [start, end].sort((first, second) => first - second).join('-')
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

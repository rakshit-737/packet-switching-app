import { useEffect, useRef } from 'react'
import { drawPacketSwitching } from '../utils/packetVisualizer'

const PACKET_COLORS = ['#38bdf8', '#60a5fa', '#22d3ee', '#34d399', '#f59e0b', '#fb7185']
const CANVAS_ASPECT_RATIO = 16 / 10
const MAX_CANVAS_WIDTH = 960

export default function PacketCanvas({
  isRunning,
  speed,
  packetSize,
  dataSize,
  resetToken = 0,
}) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const stateRef = useRef(createPacketSimulation(packetSize, dataSize))

  useEffect(() => {
    stateRef.current = createPacketSimulation(packetSize, dataSize)
  }, [packetSize, dataSize, resetToken])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    if (!context) return undefined

    let previousTimestamp = 0

    const animate = (timestamp) => {
      const delta = previousTimestamp === 0 ? 0 : Math.min((timestamp - previousTimestamp) / 1000, 0.05)
      previousTimestamp = timestamp

      const dimensions = syncCanvasSize(canvas, context)
      const simulation = stateRef.current

      if (isRunning) {
        simulation.time += delta * speed
        simulation.packets = simulation.packets.map((packet) => ({
          ...packet,
          progress: normalizeProgress(packet.progress + delta * speed * packet.velocity),
        }))
      }

      drawPacketSwitching(
        context,
        dimensions.width,
        dimensions.height,
        simulation.packets,
        simulation.time,
        {
          packetSize,
          dataSize,
        },
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning, speed, packetSize, dataSize, resetToken])

  return <canvas ref={canvasRef} className="visualizer-canvas" aria-label="Packet switching visualizer" />
}

function createPacketSimulation(packetSize, dataSize) {
  const safeDataSize = clampNumber(dataSize, 256, 64, 4096, 64)
  const safePacketSize = clampNumber(packetSize, 64, 16, Math.max(16, safeDataSize), 16)
  const packetCount = Math.max(1, Math.ceil(safeDataSize / safePacketSize))

  return {
    time: 0,
    packets: Array.from({ length: packetCount }, (_, index) => ({
      id: index,
      size:
        index === packetCount - 1
          ? safeDataSize - safePacketSize * (packetCount - 1) || safePacketSize
          : safePacketSize,
      routeIndex: index % 4,
      progress: ((index / packetCount) * 0.9 + (index % 3) * 0.06) % 1,
      velocity: 0.09 + (index % 4) * 0.02,
      color: PACKET_COLORS[index % PACKET_COLORS.length],
    })),
  }
}

function syncCanvasSize(canvas, context) {
  const parentWidth = canvas.parentElement?.clientWidth || MAX_CANVAS_WIDTH
  const width = Math.max(320, Math.min(MAX_CANVAS_WIDTH, Math.floor(parentWidth)))
  const height = Math.max(300, Math.floor(width / CANVAS_ASPECT_RATIO))
  const pixelRatio = window.devicePixelRatio || 1

  if (canvas.width !== Math.floor(width * pixelRatio) || canvas.height !== Math.floor(height * pixelRatio)) {
    canvas.width = Math.floor(width * pixelRatio)
    canvas.height = Math.floor(height * pixelRatio)
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
  }

  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)

  return { width, height }
}

function clampNumber(value, fallback, min, max, step = 1) {
  const numericValue = Number(value)

  if (!Number.isFinite(numericValue)) {
    return fallback
  }

  const clamped = Math.min(max, Math.max(min, numericValue))
  const stepped = step > 1 ? Math.round(clamped / step) * step : clamped
  return Math.min(max, Math.max(min, stepped))
}

function normalizeProgress(progress) {
  return ((progress % 1) + 1) % 1
}

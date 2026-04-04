import { useEffect, useRef } from 'react'
import { drawPacketSwitching, getHoverTarget } from '../utils/packetVisualizer'

const PACKET_COLORS = ['#22d3ee', '#a78bfa', '#34d399', '#fb7185', '#f59e0b', '#60a5fa']
const CANVAS_ASPECT_RATIO = 16 / 10
const MAX_CANVAS_WIDTH = 960

export default function PacketCanvas({
  isRunning,
  speed,
  packetSize,
  dataSize,
  resetToken = 0,
  onComplete,
  onHover,
}) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const stateRef = useRef(createPacketSimulation(packetSize, dataSize))
  const simulationDoneRef = useRef(false)
  const onCompleteRef = useRef(onComplete)
  const onHoverRef = useRef(onHover)

  useEffect(() => {
    onCompleteRef.current = onComplete
  }, [onComplete])

  useEffect(() => {
    onHoverRef.current = onHover
  }, [onHover])

  useEffect(() => {
    stateRef.current = createPacketSimulation(packetSize, dataSize)
    simulationDoneRef.current = false
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

      if (isRunning && !simulationDoneRef.current) {
        simulation.time += delta * speed
        simulation.packets = simulation.packets.map((packet) => ({
          ...packet,
          progress: Math.min(1, packet.progress + delta * speed * packet.velocity),
        }))

        const allDone = simulation.packets.every((packet) => packet.progress >= 1)
        if (allDone) {
          simulationDoneRef.current = true
          onCompleteRef.current?.()
        }
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

  // mouse-hover detection for 3D cursor effect
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      const localX = event.clientX - rect.left
      const localY = event.clientY - rect.top
      const dimensions = { width: rect.width, height: rect.height }
      const hit = getHoverTarget(localX, localY, stateRef.current, dimensions)

      if (hit) {
        onHoverRef.current?.({
          x: event.clientX,
          y: event.clientY,
          type: hit.type,
        })
      } else {
        onHoverRef.current?.(null)
      }
    }

    const handleMouseLeave = () => {
      onHoverRef.current?.(null)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

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

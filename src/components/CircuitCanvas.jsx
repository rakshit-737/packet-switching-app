import { useEffect, useRef } from 'react'
import { drawCircuitSwitching } from '../utils/circuitVisualizer'

const CALL_COLORS = ['#1f5e69', '#24546f', '#34d399', '#f59e0b', '#fb7185', '#a78bfa']
const CALL_BANDWIDTHS = [64, 128, 128, 256, 256, 512]
const CANVAS_ASPECT_RATIO = 16 / 10
const MAX_CANVAS_WIDTH = 960

export default function CircuitCanvas({ isRunning, speed, numCalls, resetToken = 0 }) {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const contextRef = useRef(null)
  const stateRef = useRef(createCircuitSimulation(numCalls))

  useEffect(() => {
    stateRef.current = createCircuitSimulation(numCalls)
  }, [numCalls, resetToken])

  const dimensionsRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const context = canvas.getContext('2d')
    if (!context) return undefined

    contextRef.current = context

    const syncSize = () => {
      const parentWidth = canvas.parentElement?.clientWidth || MAX_CANVAS_WIDTH
      const width = Math.max(320, Math.min(MAX_CANVAS_WIDTH, Math.floor(parentWidth)))
      const height = Math.max(300, Math.floor(width / CANVAS_ASPECT_RATIO))
      const pixelRatio = window.devicePixelRatio || 1

      if (
        canvas.width !== Math.floor(width * pixelRatio) ||
        canvas.height !== Math.floor(height * pixelRatio)
      ) {
        canvas.width = Math.floor(width * pixelRatio)
        canvas.height = Math.floor(height * pixelRatio)
        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`
        context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      }

      dimensionsRef.current = { width, height }
    }

    syncSize()

    const observer = new ResizeObserver(syncSize)
    if (canvas.parentElement) observer.observe(canvas.parentElement)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const context = contextRef.current
    if (!context) return undefined

    let previousTimestamp = 0

    const animate = (timestamp) => {
      const delta = previousTimestamp === 0 ? 0 : Math.min((timestamp - previousTimestamp) / 1000, 0.05)
      previousTimestamp = timestamp

      const { width, height } = dimensionsRef.current
      const simulation = stateRef.current

      if (isRunning) {
        simulation.time += delta * speed
        simulation.calls = simulation.calls.map((call) => ({
          ...call,
          progress: normalizeProgress(call.progress + delta * speed * call.velocity),
        }))
      }

      if (width > 0 && height > 0) {
        drawCircuitSwitching(
          context,
          width,
          height,
          simulation.calls,
          simulation.time,
          {
            label: 'bandwidth remains reserved even while traffic is bursty',
          },
        )
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isRunning, speed, numCalls, resetToken])

  return <canvas ref={canvasRef} className="visualizer-canvas" aria-label="Circuit switching visualizer" />
}

function createCircuitSimulation(numCalls) {
  const safeCalls = clampNumber(numCalls, 3, 1, 6)

  return {
    time: 0,
    calls: Array.from({ length: safeCalls }, (_, index) => ({
      id: index,
      progress: (index * 0.19) % 1,
      velocity: 0.12 + (index % 3) * 0.03,
      bandwidth: CALL_BANDWIDTHS[index % CALL_BANDWIDTHS.length],
      color: CALL_COLORS[index % CALL_COLORS.length],
    })),
  }
}

function clampNumber(value, fallback, min, max) {
  const numericValue = Number(value)

  if (!Number.isFinite(numericValue)) {
    return fallback
  }

  return Math.min(max, Math.max(min, Math.round(numericValue)))
}

function normalizeProgress(progress) {
  return ((progress % 1) + 1) % 1
}

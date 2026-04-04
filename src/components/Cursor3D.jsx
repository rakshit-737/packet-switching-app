import { useEffect, useRef } from 'react'
import { createThreeCursorScene } from '../utils/threeCursor'

/**
 * Cursor3D renders a full-viewport Three.js WebGL canvas overlay that shows
 * animated 3D graphics at the cursor position when hovering over interactive
 * elements (nodes, packets, buttons).
 *
 * Props:
 *   hoverTarget – { x, y, type } | null
 *     x, y  – screen coordinates (pixels from top-left of viewport)
 *     type  – 'node' | 'packet' | 'button'
 */
export default function Cursor3D({ hoverTarget }) {
  const canvasRef = useRef(null)
  const sceneRef = useRef(null)

  // initialise scene once
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return undefined

    const scene = createThreeCursorScene(canvas)
    sceneRef.current = scene
    scene.start()

    const handleResize = () => scene.resize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      scene.dispose()
      sceneRef.current = null
    }
  }, [])

  // respond to hover changes
  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    if (hoverTarget) {
      scene.setPosition(hoverTarget.x, hoverTarget.y)
      scene.setVisible(true, hoverTarget.type)
    } else {
      scene.setVisible(false)
    }
  }, [hoverTarget])

  return (
    <canvas
      ref={canvasRef}
      className="cursor3d-overlay"
      aria-hidden="true"
    />
  )
}

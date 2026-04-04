import * as THREE from 'three'

/**
 * Creates and manages a Three.js scene used for the 3D cursor effect overlay.
 * Returns an object with methods to update position, set effect type, animate, and dispose.
 */
export function createThreeCursorScene(canvas) {
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setClearColor(0x000000, 0)

  const scene = new THREE.Scene()
  const camera = new THREE.OrthographicCamera(
    -window.innerWidth / 2,
    window.innerWidth / 2,
    window.innerHeight / 2,
    -window.innerHeight / 2,
    0.1,
    1000,
  )
  camera.position.z = 100

  // ─── glow sphere ─────────────────────────────────────────────────────────────
  const sphereGeo = new THREE.SphereGeometry(22, 32, 32)
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee,
    transparent: true,
    opacity: 0,
    wireframe: false,
  })
  const sphere = new THREE.Mesh(sphereGeo, sphereMat)
  scene.add(sphere)

  // outer glow ring (large, soft)
  const glowGeo = new THREE.RingGeometry(26, 32, 48)
  const glowMat = new THREE.MeshBasicMaterial({
    color: 0x22d3ee,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  })
  const glowRing = new THREE.Mesh(glowGeo, glowMat)
  scene.add(glowRing)

  // ─── wireframe cube ───────────────────────────────────────────────────────────
  const cubeGeo = new THREE.BoxGeometry(30, 30, 30)
  const cubeMat = new THREE.MeshBasicMaterial({
    color: 0xa78bfa,
    transparent: true,
    opacity: 0,
    wireframe: true,
  })
  const cube = new THREE.Mesh(cubeGeo, cubeMat)
  scene.add(cube)

  // ─── pulsing energy rings ─────────────────────────────────────────────────────
  const ring1Geo = new THREE.RingGeometry(34, 36, 48)
  const ring1Mat = new THREE.MeshBasicMaterial({
    color: 0x34d399,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  })
  const ring1 = new THREE.Mesh(ring1Geo, ring1Mat)
  scene.add(ring1)

  const ring2Geo = new THREE.RingGeometry(46, 48, 48)
  const ring2Mat = new THREE.MeshBasicMaterial({
    color: 0xa78bfa,
    transparent: true,
    opacity: 0,
    side: THREE.DoubleSide,
  })
  const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
  scene.add(ring2)

  // ─── state ─────────────────────────────────────────────────────────────────
  let targetX = 0
  let targetY = 0
  let currentX = 0
  let currentY = 0
  let visible = false
  let effectType = 'node' // 'node' | 'packet' | 'button'
  let animationId = null
  let elapsed = 0
  let lastTimestamp = 0

  function setPosition(x, y) {
    targetX = x - window.innerWidth / 2
    targetY = -(y - window.innerHeight / 2)
  }

  function setVisible(isVisible, type = 'node') {
    visible = isVisible
    effectType = type
  }

  function resize() {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.left = -window.innerWidth / 2
    camera.right = window.innerWidth / 2
    camera.top = window.innerHeight / 2
    camera.bottom = -window.innerHeight / 2
    camera.updateProjectionMatrix()
  }

  function tick(timestamp) {
    const delta = lastTimestamp === 0 ? 0 : Math.min((timestamp - lastTimestamp) / 1000, 0.05)
    lastTimestamp = timestamp
    elapsed += delta

    // smooth follow
    const lerpFactor = 1 - Math.pow(0.08, delta * 60)
    currentX += (targetX - currentX) * lerpFactor
    currentY += (targetY - currentY) * lerpFactor

    const t = elapsed
    const targetOpacity = visible ? 1 : 0
    const fadeSpeed = visible ? 8 : 6

    if (effectType === 'node') {
      // pulsing glow sphere
      const pulse = 0.55 + Math.sin(t * 4.5) * 0.18
      sphereMat.opacity += (targetOpacity * pulse - sphereMat.opacity) * delta * fadeSpeed
      sphereMat.color.setHex(0x22d3ee)
      sphere.scale.setScalar(1 + Math.sin(t * 3) * 0.12)
      sphere.position.set(currentX, currentY, 0)

      glowMat.opacity += (targetOpacity * (pulse * 0.45) - glowMat.opacity) * delta * fadeSpeed
      glowMat.color.setHex(0x22d3ee)
      glowRing.scale.setScalar(1 + Math.sin(t * 2.5 + 0.5) * 0.15)
      glowRing.position.set(currentX, currentY, 0)

      cubeMat.opacity += (0 - cubeMat.opacity) * delta * fadeSpeed
      ring1Mat.opacity += (targetOpacity * 0.55 - ring1Mat.opacity) * delta * fadeSpeed
      ring1.scale.setScalar(1 + Math.sin(t * 2) * 0.2)
      ring1.position.set(currentX, currentY, 0)

      ring2Mat.opacity += (targetOpacity * 0.3 - ring2Mat.opacity) * delta * fadeSpeed
      ring2.scale.setScalar(1 + Math.sin(t * 1.5 + 1) * 0.25)
      ring2.position.set(currentX, currentY, 0)
    } else if (effectType === 'packet') {
      // rotating wireframe cube
      cubeMat.opacity += (targetOpacity * 0.85 - cubeMat.opacity) * delta * fadeSpeed
      cubeMat.color.setHex(0xa78bfa)
      cube.rotation.x = t * 1.8
      cube.rotation.y = t * 2.4
      cube.rotation.z = t * 0.6
      cube.position.set(currentX, currentY, 0)

      sphereMat.opacity += (targetOpacity * 0.25 - sphereMat.opacity) * delta * fadeSpeed
      sphereMat.color.setHex(0xa78bfa)
      sphere.scale.setScalar(0.7)
      sphere.position.set(currentX, currentY, 0)

      glowMat.opacity += (0 - glowMat.opacity) * delta * fadeSpeed
      ring1Mat.opacity += (targetOpacity * 0.4 - ring1Mat.opacity) * delta * fadeSpeed
      ring1Mat.color.setHex(0xa78bfa)
      ring1.scale.setScalar(1 + Math.sin(t * 3.5) * 0.18)
      ring1.position.set(currentX, currentY, 0)
      ring2Mat.opacity += (0 - ring2Mat.opacity) * delta * fadeSpeed
    } else {
      // button: simple glow + ring
      const pulse = 0.5 + Math.sin(t * 5) * 0.2
      sphereMat.opacity += (targetOpacity * pulse * 0.6 - sphereMat.opacity) * delta * fadeSpeed
      sphereMat.color.setHex(0xf59e0b)
      sphere.scale.setScalar(0.8)
      sphere.position.set(currentX, currentY, 0)

      glowMat.opacity += (targetOpacity * pulse * 0.3 - glowMat.opacity) * delta * fadeSpeed
      glowMat.color.setHex(0xf59e0b)
      glowRing.scale.setScalar(1.2 + Math.sin(t * 4) * 0.1)
      glowRing.position.set(currentX, currentY, 0)

      cubeMat.opacity += (0 - cubeMat.opacity) * delta * fadeSpeed
      ring1Mat.opacity += (0 - ring1Mat.opacity) * delta * fadeSpeed
      ring2Mat.opacity += (0 - ring2Mat.opacity) * delta * fadeSpeed
    }

    renderer.render(scene, camera)
    animationId = requestAnimationFrame(tick)
  }

  function start() {
    lastTimestamp = 0
    animationId = requestAnimationFrame(tick)
  }

  function dispose() {
    if (animationId !== null) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
    sphereGeo.dispose()
    sphereMat.dispose()
    glowGeo.dispose()
    glowMat.dispose()
    cubeGeo.dispose()
    cubeMat.dispose()
    ring1Geo.dispose()
    ring1Mat.dispose()
    ring2Geo.dispose()
    ring2Mat.dispose()
    renderer.dispose()
  }

  return { setPosition, setVisible, resize, start, dispose }
}

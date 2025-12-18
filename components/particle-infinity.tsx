"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useMemo, useRef } from "react"
import * as THREE from "three"

function InfinityParticles() {
  const pointsRef = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const particles: number[] = []
    const numRings = 300
    const pointsPerRing = 50
    const tubeRadius = 0.3
    const scale = 1.44

    for (let ring = 0; ring < numRings; ring++) {
      const t = (ring / numRings) * Math.PI * 2
      const sinT = Math.sin(t)
      const cosT = Math.cos(t)
      const denom = 1 + sinT * sinT

      const centerX = (scale * cosT) / denom
      const centerZ = (scale * sinT * cosT) / denom
      const centerY = 0

      const dt = 0.01
      const tNext = t + dt
      const sinTNext = Math.sin(tNext)
      const cosTNext = Math.cos(tNext)
      const denomNext = 1 + sinTNext * sinTNext

      const nextX = (scale * cosTNext) / denomNext
      const nextZ = (scale * sinTNext * cosTNext) / denomNext

      const tangent = new THREE.Vector3(nextX - centerX, 0, nextZ - centerZ).normalize()
      const up = new THREE.Vector3(0, 1, 0)
      const normal = new THREE.Vector3().crossVectors(tangent, up).normalize()
      const binormal = new THREE.Vector3().crossVectors(normal, tangent).normalize()

      for (let p = 0; p < pointsPerRing; p++) {
        const angle = (p / pointsPerRing) * Math.PI * 2
        const offsetX = Math.cos(angle) * tubeRadius * normal.x + Math.sin(angle) * tubeRadius * binormal.x
        const offsetY = Math.cos(angle) * tubeRadius * normal.y + Math.sin(angle) * tubeRadius * binormal.y
        const offsetZ = Math.cos(angle) * tubeRadius * normal.z + Math.sin(angle) * tubeRadius * binormal.z

        const noise = 0.008
        particles.push(
          centerX + offsetX + (Math.random() - 0.5) * noise,
          centerY + offsetY + (Math.random() - 0.5) * noise,
          centerZ + offsetZ + (Math.random() - 0.5) * noise,
        )
      }
    }
    return new Float32Array(particles)
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x = state.clock.elapsedTime * 0.12
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#ffffff" transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  )
}

export function ParticleInfinity() {
  return (
    <div className="absolute top-20 left-0 right-0 h-[500px] flex items-start justify-center pointer-events-none">
      <div className="w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 55 }}
          gl={{ alpha: true, antialias: true }}
          style={{ background: "transparent" }}
        >
          <ambientLight intensity={0.5} />
          <InfinityParticles />
        </Canvas>
      </div>
    </div>
  )
}

import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Sphere, Cylinder } from '@react-three/drei'
import * as THREE from 'three'
import './DNA3D.css'

// Componente de cilindro que conecta dos puntos
function ConnectionCylinder({ start, end, radius, color, emissive, opacity }) {
  const ref = useRef()
  
  // Calcular la posición central
  const midpoint = [
    (start.x + end.x) / 2,
    (start.y + end.y) / 2,
    (start.z + end.z) / 2
  ]
  
  // Calcular la longitud
  const dx = end.x - start.x
  const dy = end.y - start.y
  const dz = end.z - start.z
  const length = Math.sqrt(dx * dx + dy * dy + dz * dz)
  
  useEffect(() => {
    if (ref.current) {
      // Vector de dirección normalizado
      const direction = new THREE.Vector3(dx, dy, dz).normalize()
      // Vector por defecto del cilindro (eje Y)
      const defaultDir = new THREE.Vector3(0, 1, 0)
      // Calcular el quaternion de rotación
      const quaternion = new THREE.Quaternion().setFromUnitVectors(defaultDir, direction)
      // Aplicar rotación
      ref.current.setRotationFromQuaternion(quaternion)
    }
  }, [dx, dy, dz])
  
  return (
    <mesh ref={ref} position={midpoint}>
      <cylinderGeometry args={[radius, radius, length, 8]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={0.3}
        transparent
        opacity={opacity}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  )
}

// Componente individual de la hélice del DNA
function DNAHelix({ scrollProgress, isDesktop }) {
  const groupRef = useRef()
  const baseCount = 120 // Muchas más bases para una hebra más larga y densa
  const helixRadius = 1.0 // Radio reducido para hebra más fina
  const helixLength = 45 // Longitud de la hélice
  const turnsPerHelix = 10 // Más vueltas para mantener efecto helicoidal

  useFrame(() => {
    if (groupRef.current) {
      // Aplicar escala más pequeña en desktop
      if (isDesktop) {
        groupRef.current.scale.set(0.3, 0.3, 0.3)
      } else {
        groupRef.current.scale.set(1.3, 1.3, 1.3) // Escala aumentada en móvil/tablet
      }
      
      if (isDesktop) {
        // En desktop, rotación en el eje Y (vertical)
        groupRef.current.rotation.y = scrollProgress * Math.PI * 4
      } else {
        // En móvil/tablet, rotación en el eje X (horizontal)
        groupRef.current.rotation.x = scrollProgress * Math.PI * 4
      }
    }
  })

  const bases = []
  
  for (let i = 0; i < baseCount; i++) {
    const t = i / baseCount
    const angle = t * Math.PI * 2 * turnsPerHelix
    
    if (isDesktop) {
      // Desktop: ADN vertical (eje Y) - Radio más pequeño para barra estrecha
      const y = t * helixLength - helixLength / 2 // Posición vertical
      const helixRadiusDesktop = 0.6 // Radio más pequeño para caber en barra de 120px
      const x1 = Math.cos(angle) * helixRadiusDesktop
      const z1 = Math.sin(angle) * helixRadiusDesktop
      const x2 = Math.cos(angle + Math.PI) * helixRadiusDesktop
      const z2 = Math.sin(angle + Math.PI) * helixRadiusDesktop

      bases.push({
        id: i,
        strand1: { x: x1, y, z: z1 },
        strand2: { x: x2, y, z: z2 },
        angle
      })
    } else {
      // Móvil/Tablet: ADN horizontal (eje X)
      const x = t * helixLength - helixLength / 2 // Posición horizontal
      const y1 = Math.cos(angle) * helixRadius
      const z1 = Math.sin(angle) * helixRadius
      const y2 = Math.cos(angle + Math.PI) * helixRadius
      const z2 = Math.sin(angle + Math.PI) * helixRadius

      bases.push({
        id: i,
        strand1: { x, y: y1, z: z1 },
        strand2: { x, y: y2, z: z2 },
        angle
      })
    }
  }

  return (
    <group ref={groupRef}>
      {bases.map((base, i) => (
        <group key={base.id}>
          {/* Esfera Hebra 1 - Cyan - Más pequeña */}
          <Sphere position={[base.strand1.x, base.strand1.y, base.strand1.z]} args={[0.15, 12, 12]}>
            <meshStandardMaterial 
              color="#00ffff" 
              emissive="#00ffff" 
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>

          {/* Esfera Hebra 2 - Magenta - Más pequeña */}
          <Sphere position={[base.strand2.x, base.strand2.y, base.strand2.z]} args={[0.15, 12, 12]}>
            <meshStandardMaterial 
              color="#ff00ff" 
              emissive="#ff00ff" 
              emissiveIntensity={0.5}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>

          {/* Conexión entre bases - Conectar todos los círculos */}
          <ConnectionCylinder
            start={base.strand1}
            end={base.strand2}
            radius={0.05}
            color="#00ff88"
            emissive="#00ff88"
            opacity={0.6}
          />

          {/* Conexión con la siguiente base en la hebra 1 */}
          {i < baseCount - 1 && (
            <>
              <Cylinder
                position={[
                  (base.strand1.x + bases[i + 1].strand1.x) / 2,
                  (base.strand1.y + bases[i + 1].strand1.y) / 2,
                  (base.strand1.z + bases[i + 1].strand1.z) / 2
                ]}
                args={[
                  0.07, 
                  0.07, 
                  Math.hypot(
                    bases[i + 1].strand1.x - base.strand1.x,
                    bases[i + 1].strand1.y - base.strand1.y,
                    bases[i + 1].strand1.z - base.strand1.z
                  ),
                  8
                ]}
                rotation={[
                  0,
                  Math.atan2(
                    bases[i + 1].strand1.z - base.strand1.z,
                    bases[i + 1].strand1.x - base.strand1.x
                  ),
                  Math.atan2(
                    bases[i + 1].strand1.y - base.strand1.y,
                    bases[i + 1].strand1.x - base.strand1.x
                  )
                ]}
              >
                <meshStandardMaterial 
                  color="#0088ff" 
                  emissive="#0088ff" 
                  emissiveIntensity={0.4}
                  metalness={0.6}
                  roughness={0.3}
                />
              </Cylinder>

              {/* Conexión hebra 2 */}
              <Cylinder
                position={[
                  (base.strand2.x + bases[i + 1].strand2.x) / 2,
                  (base.strand2.y + bases[i + 1].strand2.y) / 2,
                  (base.strand2.z + bases[i + 1].strand2.z) / 2
                ]}
                args={[
                  0.07, 
                  0.07, 
                  Math.hypot(
                    bases[i + 1].strand2.x - base.strand2.x,
                    bases[i + 1].strand2.y - base.strand2.y,
                    bases[i + 1].strand2.z - base.strand2.z
                  ),
                  8
                ]}
                rotation={[
                  0,
                  Math.atan2(
                    bases[i + 1].strand2.z - base.strand2.z,
                    bases[i + 1].strand2.x - base.strand2.x
                  ),
                  Math.atan2(
                    bases[i + 1].strand2.y - base.strand2.y,
                    bases[i + 1].strand2.x - base.strand2.x
                  )
                ]}
              >
                <meshStandardMaterial 
                  color="#ff0088" 
                  emissive="#ff0088" 
                  emissiveIntensity={0.4}
                  metalness={0.6}
                  roughness={0.3}
                />
              </Cylinder>
            </>
          )}
        </group>
      ))}
    </group>
  )
}

// Componente principal
function DNA3D() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024)

  useEffect(() => {
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight = document.documentElement.scrollHeight - window.innerHeight
          const progress = window.scrollY / totalHeight
          setScrollProgress(progress)
          ticking = false
        })
        ticking = true
      }
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
      setIsDesktop(window.innerWidth > 1024)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="dna3d-container">
      <Canvas
        camera={{ 
          position: isDesktop ? [0, 0, 8] : [0, 0, 15], // Cámara más cerca en desktop para barra estrecha
          fov: isMobile ? 35 : (isDesktop ? 35 : 28) // FOV ajustado para la barra estrecha
        }}
        gl={{ 
          antialias: !isMobile, // Desactivar antialiasing en móvil para mejor rendimiento
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Limitar DPR en móvil
      >
        {/* Iluminación optimizada */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
        {!isMobile && (
          <spotLight 
            position={[0, 20, 0]} 
            angle={0.3} 
            penumbra={1} 
            intensity={2}
            color="#ffffff"
          />
        )}

        {/* DNA Helix */}
        <DNAHelix scrollProgress={scrollProgress} isDesktop={isDesktop} />

        {/* Controles opcionales (comentar en producción) */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  )
}

export default DNA3D

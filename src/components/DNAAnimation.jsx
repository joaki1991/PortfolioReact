import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './DNAAnimation.css'

const DNAAnimation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Debounce del resize para mejor rendimiento
    let timeoutId
    const debouncedResize = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(handleResize, 150)
    }
    
    window.addEventListener('resize', debouncedResize)
    return () => {
      window.removeEventListener('resize', debouncedResize)
      clearTimeout(timeoutId)
    }
  }, [])

  // Configuración de la hélice - Reducido para mejor rendimiento
  const segments = isMobile ? 15 : 20 // Mucho menos en móvil
  const radius = 40
  const helixLength = isMobile ? 100 : 80
  
  return (
    <div className="dna-container">
      <div className={`dna-helix ${isMobile ? 'horizontal' : 'vertical'}`}>
        {[...Array(segments)].map((_, i) => {
          const progress = i / segments
          const angle = progress * Math.PI * 8 // 8 vueltas completas
          
          // Calcular posiciones para la doble hélice
          const strand1 = {
            x: Math.sin(angle) * radius,
            y: isMobile ? progress * helixLength : progress * helixLength,
            z: Math.cos(angle) * radius
          }
          
          const strand2 = {
            x: Math.sin(angle + Math.PI) * radius,
            y: isMobile ? progress * helixLength : progress * helixLength,
            z: Math.cos(angle + Math.PI) * radius
          }
          
          // Determinar si la base debe estar visible (conexión horizontal)
          const showConnection = Math.abs(Math.sin(angle)) < 0.3
          
          return (
            <div key={i} className="dna-segment" style={{
              [isMobile ? 'left' : 'top']: `${progress * helixLength}%`
            }}>
              {/* Hebra 1 - Cyan */}
              <motion.div
                className="dna-base strand1"
                style={{
                  transform: isMobile 
                    ? `translateY(${strand1.x}px) translateZ(${strand1.z}px)`
                    : `translateX(${strand1.x}px) translateZ(${strand1.z}px)`
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3, // Más lento = menos cálculos
                  repeat: Infinity,
                  delay: i * 0.08, // Menos frecuente
                  ease: "linear" // Linear es más eficiente que easeInOut
                }}
              />
              
              {/* Hebra 2 - Magenta */}
              <motion.div
                className="dna-base strand2"
                style={{
                  transform: isMobile
                    ? `translateY(${strand2.x}px) translateZ(${strand2.z}px)`
                    : `translateX(${strand2.x}px) translateZ(${strand2.z}px)`
                }}
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: "linear"
                }}
              />
              
              {/* Conexión horizontal entre hebras */}
              {showConnection && (
                <motion.div
                  className="dna-connection"
                  style={{
                    width: isMobile ? '2px' : `${radius * 2}px`,
                    height: isMobile ? `${radius * 2}px` : '2px',
                    [isMobile ? 'left' : 'top']: '50%',
                    transform: isMobile 
                      ? `translateX(-50%) translateY(${strand1.x}px) rotateZ(90deg)`
                      : `translateY(-50%) translateX(${strand1.x}px)`
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.08,
                    ease: "linear"
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
      
      {/* Animación de rotación de la hélice completa - Desactivada para rendimiento */}
      {/* La rotación 3D consume muchos recursos */}
    </div>
  )
}

export default DNAAnimation

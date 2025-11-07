import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './DNAAnimation.css'

const DNAAnimation = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Configuración de la hélice
  const segments = isMobile ? 40 : 30 // Más segmentos en móvil para cubrir más ancho
  const radius = 40 // Radio de la hélice
  const helixLength = isMobile ? 100 : 80 // Longitud en porcentaje
  
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
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
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
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.05,
                  ease: "easeInOut"
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
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.05,
                    ease: "easeInOut"
                  }}
                />
              )}
            </div>
          )
        })}
      </div>
      
      {/* Animación de rotación de la hélice completa */}
      <motion.div 
        className="dna-rotation-effect"
        animate={{
          rotateY: isMobile ? [0, 0] : [0, 360],
          rotateX: isMobile ? [0, 360] : [0, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}

export default DNAAnimation

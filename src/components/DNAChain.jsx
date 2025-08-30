import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './DNAChain.css'

const DNAChain = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detectar si es móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const updateScrollProgress = () => {
      const scrolled = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Calcular el scroll real basado en lo que realmente se puede scrollear
      const maxScroll = documentHeight - windowHeight
      
      // Usar directamente el progreso del scroll sin limitarlo artificialmente
      const progress = maxScroll > 0 ? scrolled / maxScroll : 0
      
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', updateScrollProgress)
    updateScrollProgress()

    return () => {
      window.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  return (
    <div className="dna-chain">
      <div className="dna-helix-container">
        
        <div className="helix-strand">
          {/* Hélice adaptada para móvil y desktop */}
          {[...Array(isMobile ? 70 : 80)].map((_, i) => {
            const totalPoints = isMobile ? 70 : 80
            
            // Cambiar la lógica: cada punto aparece cuando el scroll llega a su "zona"
            const pointProgress = i / (totalPoints - 1) // -1 para que el último punto aparezca al 100%
            const shouldShow = scrollProgress >= pointProgress
            
            const angle = (i * 30) // 30 grados por segmento
            
            // Distribuir puntos en la altura de la ventana
            const windowHeight = window.innerHeight
            const yPos = isMobile ? 
              (i / totalPoints) * (windowHeight * 0.85) + 80 : // Móvil: más puntos, llega más abajo
              (i / totalPoints) * (windowHeight) // Desktop: altura completa
            
            const radius = isMobile ? 12 : 25
            const xPos = (isMobile ? 40 : 75) + Math.cos((angle * Math.PI) / 180) * radius
            
            return (
              <motion.div
                key={`point-${i}`}
                className="helix-point"
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: xPos,
                  y: yPos
                }}
                animate={{
                  opacity: shouldShow ? 1 : 0,
                  scale: shouldShow ? 1 : 0,
                  x: xPos,
                  y: yPos
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.02
                }}
                style={{
                  background: `hsl(${120 + i * 4}, 80%, 60%)`,
                  color: `hsl(${120 + i * 4}, 80%, 60%)`,
                  position: 'absolute',
                  left: '0px',
                  top: '0px'
                }}
              />
            )
          })}
          
          {/* Segunda hebra desfasada 180° */}
          {[...Array(isMobile ? 70 : 80)].map((_, i) => {
            const totalPoints = isMobile ? 70 : 80
            
            // Misma lógica para la segunda hebra
            const pointProgress = i / (totalPoints - 1)
            const shouldShow = scrollProgress >= pointProgress
            
            const angle = (i * 30) + 180 // Desfasada 180°
            
            // Distribuir igual que la primera hebra
            const windowHeight = window.innerHeight
            const yPos = isMobile ? 
              (i / totalPoints) * (windowHeight * 0.85) + 80 : // Móvil: más puntos, llega más abajo
              (i / totalPoints) * (windowHeight) // Desktop: altura completa
            
            const radius = isMobile ? 12 : 25
            const xPos = (isMobile ? 40 : 75) + Math.cos((angle * Math.PI) / 180) * radius
            
            return (
              <motion.div
                key={`point2-${i}`}
                className="helix-point"
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: xPos,
                  y: yPos
                }}
                animate={{
                  opacity: shouldShow ? 1 : 0,
                  scale: shouldShow ? 1 : 0,
                  x: xPos,
                  y: yPos
                }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.02 + 0.05
                }}
                style={{
                  background: `hsl(${200 + i * 4}, 80%, 60%)`,
                  color: `hsl(${200 + i * 4}, 80%, 60%)`,
                  position: 'absolute',
                  left: '0px',
                  top: '0px'
                }}
              />
            )
          })}
        </div>
        
        {/* Conexiones entre hebras cada ciertos puntos */}
        <div className="helix-connections">
          {[...Array(isMobile ? 17 : 20)].map((_, i) => {
            const segmentIndex = i * 4 // Una conexión cada 4 puntos
            const totalPoints = isMobile ? 70 : 80
            
            // Lógica de conexiones basada en el progreso real
            const connectionProgress = (segmentIndex) / (totalPoints - 1)
            const shouldShow = scrollProgress >= connectionProgress
            
            // Distribuir conexiones igual que los puntos
            const windowHeight = window.innerHeight
            const yPos = isMobile ? 
              (segmentIndex / totalPoints) * (windowHeight * 0.85) + 80 : // Móvil: más conexiones, llega más abajo
              (segmentIndex / totalPoints) * (windowHeight) // Desktop: altura completa
            
            const xPos = isMobile ? 40 : 75
            
            return (
              <motion.div
                key={`connection-${i}`}
                className="helix-connection"
                initial={{ 
                  opacity: 0, 
                  scaleX: 0,
                  x: xPos,
                  y: yPos
                }}
                animate={{
                  opacity: shouldShow ? 0.6 : 0,
                  scaleX: shouldShow ? 1 : 0,
                  x: xPos,
                  y: yPos
                }}
                transition={{
                  duration: 0.4,
                  delay: segmentIndex * 0.02 + 0.3
                }}
                style={{
                  width: isMobile ? '20px' : '50px',
                  position: 'absolute',
                  left: '0px',
                  top: '0px'
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Indicador de progreso */}
      <div className="progress-indicator">
        <div 
          className="progress-fill"
          style={{ height: `${scrollProgress * 100}%` }}
        />
        <div className="progress-text">
          {Math.round(scrollProgress * 100)}%
        </div>
      </div>
    </div>
  )
}

export default DNAChain

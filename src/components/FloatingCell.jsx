import React, { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './FloatingCell.css'

const FloatingCell = () => {
  const { scrollYProgress } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Movimiento horizontal basado en scroll
  const xPosition = useTransform(scrollYProgress, [0, 1], ['-10%', '110%'])
  const rotation = useTransform(scrollYProgress, [0, 1], [0, 720])
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1.2, 1, 0.8])

  if (isMobile) return null // Ocultar en móvil para mejor rendimiento

  return (
    <motion.div
      className="floating-cell"
      style={{
        x: xPosition,
        rotate: rotation,
        scale: scale,
      }}
    >
      <svg width="80" height="80" viewBox="0 0 80 80">
        {/* Núcleo central */}
        <motion.circle
          cx="40"
          cy="40"
          r="15"
          fill="none"
          stroke="var(--neon-green)"
          strokeWidth="2"
          animate={{
            r: [15, 18, 15],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="40"
          cy="40"
          r="10"
          fill="var(--neon-green)"
          opacity="0.3"
          animate={{
            r: [10, 12, 10],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Membrana externa */}
        <motion.circle
          cx="40"
          cy="40"
          r="35"
          fill="none"
          stroke="var(--neon-cyan)"
          strokeWidth="2"
          strokeDasharray="5,5"
          animate={{
            rotate: 360,
            strokeDashoffset: [0, -20],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            },
            strokeDashoffset: {
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }
          }}
        />
        
        {/* Organelos flotantes - posiciones fijas para evitar errores */}
        <motion.circle
          cx="60"
          cy="40"
          r="4"
          fill="var(--neon-magenta)"
          animate={{
            opacity: [0.6, 1, 0.6],
            r: [4, 5, 4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.circle
          cx="20"
          cy="40"
          r="4"
          fill="var(--neon-magenta)"
          animate={{
            opacity: [0.6, 1, 0.6],
            r: [4, 5, 4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.circle
          cx="40"
          cy="25"
          r="4"
          fill="var(--neon-magenta)"
          animate={{
            opacity: [0.6, 1, 0.6],
            r: [4, 5, 4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </svg>
    </motion.div>
  )
}

export default FloatingCell

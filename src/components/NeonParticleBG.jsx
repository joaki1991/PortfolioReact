import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './NeonParticleBG.css'

const NeonParticleBG = ({ count = 30 }) => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      color: ['var(--neon-green)', 'var(--neon-cyan)', 'var(--neon-magenta)'][Math.floor(Math.random() * 3)]
    }))
    setParticles(newParticles)
  }, [count])

  return (
    <div className="neon-particle-bg">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="neon-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 3}px ${particle.color}, 0 0 ${particle.size * 5}px ${particle.color}`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0.8, 1, 0],
            scale: [0.5, 1, 1.2, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Líneas de conexión entre partículas */}
      <svg className="particle-connections" width="100%" height="100%">
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--neon-cyan)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--neon-cyan)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--neon-cyan)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {particles.slice(0, 10).map((particle, i) => {
          const nextParticle = particles[(i + 1) % 10]
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${nextParticle.x}%`}
              y2={`${nextParticle.y}%`}
              stroke="url(#line-gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export default NeonParticleBG

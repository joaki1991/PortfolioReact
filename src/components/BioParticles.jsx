import React from 'react'
import { motion } from 'framer-motion'
import './BioParticles.css'

const BioParticles = ({ count = 30 }) => {
  const colors = ['#00ff41', '#00d9ff', '#ff00ff', '#00ffff']
  
  return (
    <div className="bio-particles">
      {[...Array(count)].map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        const randomSize = 2 + Math.random() * 4
        const randomDuration = 10 + Math.random() * 20
        const randomDelay = Math.random() * 5
        const randomX = Math.random() * 100
        const randomY = Math.random() * 100
        const randomEndX = Math.random() * 100
        const randomEndY = Math.random() * 100
        
        return (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${randomX}%`,
              top: `${randomY}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              background: randomColor,
              boxShadow: `0 0 ${randomSize * 3}px ${randomColor}`
            }}
            animate={{
              x: [`0%`, `${(randomEndX - randomX) * 10}px`, `0%`],
              y: [`0%`, `${(randomEndY - randomY) * 10}px`, `0%`],
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              delay: randomDelay,
              ease: "easeInOut"
            }}
          />
        )
      })}
    </div>
  )
}

export default BioParticles

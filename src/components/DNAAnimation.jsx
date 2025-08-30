import React from 'react'
import { motion } from 'framer-motion'
import './DNAAnimation.css'

const DNAAnimation = () => {
  return (
    <div className="dna-container">
      <motion.div 
        className="dna-helix"
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {/* Doble hélice de ADN */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="dna-pair"
            style={{ 
              transform: `translateY(${i * 30}px) rotateZ(${i * 30}deg)` 
            }}
            animate={{ 
              rotateZ: [i * 30, i * 30 + 360],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          >
            <div className="dna-base dna-base-left"></div>
            <div className="dna-connection"></div>
            <div className="dna-base dna-base-right"></div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Partículas flotantes */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="floating-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default DNAAnimation

import React from 'react'
import { motion } from 'framer-motion'
import './Molecule.css'

const Molecule = ({ size = 60, color = 'var(--neon-cyan)', delay = 0, top = '20%', left = '10%' }) => {
  return (
    <motion.div
      className="molecule"
      style={{ top, left, width: size, height: size }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      whileInView={{ 
        opacity: [0, 1, 1, 0],
        scale: [0, 1, 1, 0],
        rotate: [0, 360]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: delay,
        ease: "linear"
      }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <svg width={size} height={size} viewBox="0 0 60 60">
        {/* Átomo central */}
        <motion.circle
          cx="30"
          cy="30"
          r="8"
          fill={color}
          animate={{
            r: [8, 10, 8],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Órbitas */}
        <ellipse
          cx="30"
          cy="30"
          rx="22"
          ry="10"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 30 30"
            to="360 30 30"
            dur="4s"
            repeatCount="indefinite"
          />
        </ellipse>
        
        <ellipse
          cx="30"
          cy="30"
          rx="22"
          ry="10"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.6"
          transform="rotate(60 30 30)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="60 30 30"
            to="420 30 30"
            dur="4s"
            repeatCount="indefinite"
          />
        </ellipse>
        
        <ellipse
          cx="30"
          cy="30"
          rx="22"
          ry="10"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.6"
          transform="rotate(120 30 30)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="120 30 30"
            to="480 30 30"
            dur="4s"
            repeatCount="indefinite"
          />
        </ellipse>
        
        {/* Electrones simplificados */}
        <circle cx="52" cy="30" r="3" fill={color} opacity="0.8" />
        <circle cx="8" cy="30" r="3" fill={color} opacity="0.8" />
        <circle cx="30" cy="20" r="3" fill={color} opacity="0.8" />
      </svg>
    </motion.div>
  )
}

export default Molecule

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './TestTube.css'

const TestTube = ({ color = 'var(--neon-green)', fillLevel = 70, label = '' }) => {
  const { scrollYProgress } = useScroll()
  const bubbleSpeed = useTransform(scrollYProgress, [0, 1], [1, 3])

  return (
    <div className="test-tube-container">
      <svg width="60" height="120" viewBox="0 0 60 120" className="test-tube">
        {/* Tubo */}
        <defs>
          <linearGradient id={`gradient-${label}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.8" />
          </linearGradient>
          
          <filter id={`glow-${label}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Cuerpo del tubo */}
        <rect
          x="15"
          y="20"
          width="30"
          height="90"
          rx="3"
          fill="none"
          stroke={color}
          strokeWidth="2"
          opacity="0.6"
        />
        
        {/* Tapa */}
        <rect
          x="12"
          y="15"
          width="36"
          height="8"
          rx="2"
          fill={color}
          opacity="0.8"
        />
        
        {/* Líquido */}
        <motion.rect
          x="17"
          y={20 + (90 - (90 * fillLevel / 100))}
          width="26"
          height={90 * fillLevel / 100 - 2}
          rx="2"
          fill={`url(#gradient-${label})`}
          initial={{ height: 0 }}
          whileInView={{ 
            height: 90 * fillLevel / 100 - 2,
            y: 20 + (90 - (90 * fillLevel / 100))
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        />
        
        {/* Burbujas */}
        {[...Array(5)].map((_, i) => (
          <motion.circle
            key={i}
            cx={20 + Math.random() * 20}
            cy={110}
            r="2"
            fill={color}
            opacity="0.6"
            filter={`url(#glow-${label})`}
            animate={{
              cy: [110, 20 + (90 - (90 * fillLevel / 100))],
              opacity: [0, 0.8, 0],
              r: [2, 3, 1],
            }}
            transition={{
              duration: 3 / (i * 0.3 + 1),
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      {label && <div className="test-tube-label" style={{ color }}>{label}</div>}
    </div>
  )
}

export default TestTube

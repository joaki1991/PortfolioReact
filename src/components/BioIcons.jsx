import React from 'react'
import { motion } from 'framer-motion'

// 🧪 Tubo de ensayo con burbujas animadas
export const TestTube = ({ size = 80, color = "#00ff41" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Tubo principal */}
      <motion.rect
        x="35"
        y="20"
        width="30"
        height="60"
        rx="5"
        stroke={color}
        strokeWidth="2"
        fill="rgba(0, 255, 65, 0.1)"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Líquido */}
      <motion.rect
        x="37"
        y="45"
        width="26"
        height="33"
        rx="3"
        fill={color}
        opacity="0.3"
        animate={{ y: [45, 42, 45] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Burbujas animadas */}
      {[...Array(5)].map((_, i) => (
        <motion.circle
          key={i}
          cx={42 + (i % 3) * 8}
          cy={70}
          r={2 + Math.random() * 2}
          fill={color}
          initial={{ cy: 70, opacity: 0.8 }}
          animate={{
            cy: [70, 48],
            opacity: [0.8, 0],
            scale: [1, 0.5]
          }}
          transition={{
            duration: 2 + Math.random(),
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeOut"
          }}
        />
      ))}
      
      {/* Tapa del tubo */}
      <motion.rect
        x="32"
        y="18"
        width="36"
        height="6"
        rx="3"
        fill={color}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  )
}

// 🧫 Placa de Petri con colonias
export const PetriDish = ({ size = 80, color = "#00d9ff" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Placa exterior */}
      <motion.circle
        cx="50"
        cy="50"
        r="35"
        stroke={color}
        strokeWidth="2"
        fill="rgba(0, 217, 255, 0.05)"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      {/* Reflejo de la placa */}
      <motion.ellipse
        cx="50"
        cy="35"
        rx="20"
        ry="8"
        fill={color}
        opacity="0.2"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Colonias bacterianas */}
      {[
        { cx: 45, cy: 45, r: 4 },
        { cx: 55, cy: 50, r: 5 },
        { cx: 50, cy: 58, r: 3.5 },
        { cx: 42, cy: 55, r: 4.5 },
        { cx: 58, cy: 42, r: 3 },
        { cx: 48, cy: 48, r: 2.5 }
      ].map((colony, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={colony.cx}
            cy={colony.cy}
            r={colony.r}
            fill={color}
            opacity="0.6"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.6, 0.8, 0.6]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
          {/* Glow effect */}
          <motion.circle
            cx={colony.cx}
            cy={colony.cy}
            r={colony.r + 2}
            fill={color}
            opacity="0.2"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0, 0.2]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        </motion.g>
      ))}
    </svg>
  )
}

// ⚛️ Molécula/átomo con rotación 3D
export const Molecule = ({ size = 80, color = "#ff00ff" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Núcleo central */}
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill={color}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.8, 1]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Órbitas electrónicas */}
      {[0, 60, 120].map((rotation, idx) => (
        <motion.g key={idx}>
          <motion.ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="15"
            stroke={color}
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
            initial={{ rotate: rotation }}
            animate={{ 
              rotate: rotation + 360,
              opacity: [0.4, 0.7, 0.4]
            }}
            style={{ originX: '50px', originY: '50px' }}
            transition={{ 
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              opacity: { duration: 2, repeat: Infinity }
            }}
          />
          
          {/* Electrones */}
          <motion.circle
            r="4"
            fill={color}
            initial={{ rotate: rotation }}
            animate={{ rotate: rotation + 360 }}
            style={{ originX: '50px', originY: '50px' }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          >
            <animateMotion
              dur="4s"
              repeatCount="indefinite"
              path={`M 50,50 m -30,0 a 30,15 0 1,0 60,0 a 30,15 0 1,0 -60,0`}
            />
          </motion.circle>
        </motion.g>
      ))}
      
      {/* Glow del núcleo */}
      <motion.circle
        cx="50"
        cy="50"
        r="12"
        fill={color}
        opacity="0.3"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.3, 0, 0.3]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </svg>
  )
}

// 🧬 Célula con núcleo pulsante
export const Cell = ({ size = 80, color = "#00ff41" }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      {/* Membrana celular */}
      <motion.circle
        cx="50"
        cy="50"
        r="35"
        stroke={color}
        strokeWidth="2"
        fill="rgba(0, 255, 65, 0.05)"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      
      {/* Citoplasma - partículas flotantes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 360) / 8
        const radius = 15 + Math.random() * 10
        return (
          <motion.circle
            key={i}
            cx={50 + Math.cos((angle * Math.PI) / 180) * radius}
            cy={50 + Math.sin((angle * Math.PI) / 180) * radius}
            r="2"
            fill={color}
            opacity="0.4"
            animate={{
              x: [0, Math.random() * 4 - 2, 0],
              y: [0, Math.random() * 4 - 2, 0],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        )
      })}
      
      {/* Núcleo pulsante */}
      <motion.circle
        cx="50"
        cy="50"
        r="12"
        fill={color}
        opacity="0.4"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Núcleo interno */}
      <motion.circle
        cx="50"
        cy="50"
        r="8"
        fill={color}
        opacity="0.8"
        animate={{
          scale: [1, 1.15, 1]
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
      />
      
      {/* Glow del núcleo */}
      <motion.circle
        cx="50"
        cy="50"
        r="16"
        fill={color}
        opacity="0.2"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0, 0.2]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      {/* Mitocondrias */}
      {[
        { cx: 35, cy: 40, rotation: 30 },
        { cx: 65, cy: 60, rotation: -45 }
      ].map((mito, i) => (
        <motion.ellipse
          key={i}
          cx={mito.cx}
          cy={mito.cy}
          rx="8"
          ry="4"
          fill={color}
          opacity="0.5"
          initial={{ rotate: mito.rotation }}
          animate={{
            opacity: [0.5, 0.7, 0.5],
            rotate: mito.rotation
          }}
          style={{ originX: `${mito.cx}px`, originY: `${mito.cy}px` }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </svg>
  )
}

// Componente contenedor para usar los iconos con animación de entrada
export const BioIcon = ({ icon, color, size, className = "" }) => {
  const icons = {
    testTube: TestTube,
    petriDish: PetriDish,
    molecule: Molecule,
    cell: Cell
  }
  
  const IconComponent = icons[icon]
  
  if (!IconComponent) return null
  
  return (
    <motion.div
      className={`bio-icon ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <IconComponent size={size} color={color} />
    </motion.div>
  )
}

export default BioIcon

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

/**
 * Componente de animación de scroll tipo GitHub
 * Anima elementos con opacity, y, scale al entrar en vista
 */
const ScrollReveal = ({ 
  children, 
  direction = 'up', // 'up', 'down', 'left', 'right'
  delay = 0,
  duration = 0.6,
  scale = true,
  className = '',
  threshold = 0.2,
  once = true
}) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: once
  })

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  }

  const offset = directions[direction] || directions.up

  const variants = {
    hidden: {
      opacity: 0,
      y: offset.y,
      x: offset.x,
      scale: scale ? 0.95 : 1
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94] // easeOutCubic
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/**
 * Componente para animar listas con efecto stagger
 */
export const ScrollRevealList = ({ 
  children, 
  staggerDelay = 0.1,
  direction = 'up',
  className = '',
  threshold = 0.2,
  once = true
}) => {
  const [ref, inView] = useInView({
    threshold: threshold,
    triggerOnce: once
  })

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 }
  }

  const offset = directions[direction] || directions.up

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: offset.y,
      x: offset.x,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

/**
 * Componente para efectos de parallax suaves
 */
export const ScrollParallax = ({ 
  children, 
  speed = 0.5, // velocidad del parallax (0.5 = mitad de velocidad)
  className = ''
}) => {
  return (
    <motion.div
      className={className}
      style={{
        y: typeof window !== 'undefined' ? window.scrollY * speed : 0
      }}
      transition={{ ease: "linear", duration: 0 }}
    >
      {children}
    </motion.div>
  )
}

export default ScrollReveal

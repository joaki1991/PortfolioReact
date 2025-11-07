import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="hero" className="hero nucleotide-section adenine">
      <div className="hero-background">
        <div className="bio-cells">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="cell"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-intro" variants={itemVariants}>
          <span className="greeting">¡Hola! Soy</span>
        </motion.div>

        <motion.h1 className="hero-title" variants={itemVariants}>
          <span className="gradient-text">Joaquín</span>
          <br />
          Desarrollador Full Stack
        </motion.h1>

        <motion.p className="hero-description" variants={itemVariants}>
          Especializado en <strong>React, Node.js, Java, Spring Boot, PostgreSQL y MongoDB</strong>. 
          Actualmente en NGPRO, desarrollando soluciones de tracking GPS con <strong>Traccar</strong>, 
          optimizando el posicionamiento de vehículos, conductores y aperos mediante tecnologías open-source.
        </motion.p>

        <motion.div className="hero-cta" variants={itemVariants}>
          <motion.a 
            href="#projects" 
            className="cta-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver mis proyectos
          </motion.a>
          <motion.a 
            href="#contact" 
            className="cta-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar
          </motion.a>
        </motion.div>

        <motion.div className="hero-social" variants={itemVariants}>
          <motion.a 
            href="https://github.com/joaki1991" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "var(--accent-green)" }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a 
            href="https://www.linkedin.com/in/joaquin-piqueras-delicado-97146b9a/" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "var(--accent-blue)" }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a 
            href="mailto:joakanpde@gmail.com"
            whileHover={{ scale: 1.2, color: "var(--accent-green)" }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  )
}

export default Hero

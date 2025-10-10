import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TestTube from './TestTube'
import Molecule from './Molecule'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const skills = [
    { name: 'React', level: 90, color: 'var(--neon-cyan)' },
    { name: 'Node.js', level: 85, color: 'var(--neon-green)' },
    { name: 'MongoDB', level: 80, color: 'var(--neon-magenta)' },
    { name: 'JavaScript', level: 95, color: 'var(--neon-cyan)' },
    { name: 'CSS/SASS', level: 88, color: 'var(--neon-green)' },
    { name: 'Express', level: 82, color: 'var(--neon-magenta)' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="skills" className="skills bio-pattern nucleotide-section guanine">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-content"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">Habilidades</h2>
            <p className="section-subtitle">
              Tecnologías y herramientas que domino representadas en tubos de ensayo
            </p>
          </motion.div>

          <motion.div className="skills-grid" variants={itemVariants}>
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                <TestTube 
                  color={skill.color}
                  fillLevel={skill.level}
                  label={skill.name}
                />
                <div className="skill-percentage" style={{ color: skill.color }}>
                  {skill.level}%
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Moléculas decorativas flotantes */}
          <Molecule size={50} color="var(--neon-cyan)" delay={0} top="10%" left="5%" />
          <Molecule size={40} color="var(--neon-magenta)" delay={1} top="60%" left="90%" />
          <Molecule size={45} color="var(--neon-green)" delay={2} top="80%" left="10%" />
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

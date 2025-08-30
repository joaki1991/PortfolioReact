import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Server, Microscope } from 'lucide-react'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const skills = [
    {
      icon: <Code2 size={32} />,
      title: "Frontend Development",
      description: "React, JavaScript ES6+, HTML5, CSS3, Responsive Design",
      color: "var(--accent-green)"
    },
    {
      icon: <Server size={32} />,
      title: "Backend Development", 
      description: "Node.js, Express.js, RESTful APIs, Authentication",
      color: "var(--accent-blue)"
    },
    {
      icon: <Database size={32} />,
      title: "Database Management",
      description: "MongoDB, Mongoose, Data Modeling, Query Optimization",
      color: "var(--secondary-green)"
    },
    {
      icon: <Microscope size={32} />,
      title: "Problem Solving",
      description: "Algoritmos, Estructuras de datos, Debugging, Testing",
      color: "var(--primary-blue)"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section id="about" className="about bio-pattern nucleotide-section thymine">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="about-content"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">Sobre mí</h2>
            <p className="section-subtitle">
              Desarrollador apasionado por la tecnología y la innovación
            </p>
          </motion.div>

          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <p>
                Soy un desarrollador full stack con experiencia en tecnologías modernas 
                como <strong>React, Node.js y MongoDB</strong>. Mi pasión por la programación 
                comenzó con la curiosidad de entender cómo funcionan las aplicaciones web, 
                y desde entonces he estado en constante aprendizaje.
              </p>
              <p>
                Mi proyecto más reciente, <strong>Pulse</strong>, me ha permitido profundizar 
                en el ecosistema MERN (MongoDB, Express, React, Node.js), desarrollando 
                desde la arquitectura del backend hasta interfaces de usuario intuitivas.
              </p>
              <p>
                Me caracterizo por mi atención al detalle, la capacidad de resolver problemas 
                complejos y la pasión por escribir código limpio y mantenible. Siempre busco 
                las mejores prácticas y estoy abierto a aprender nuevas tecnologías.
              </p>
            </motion.div>

            <motion.div className="skills-grid" variants={itemVariants}>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  className="skill-card bio-hover"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <h3 className="skill-title">{skill.title}</h3>
                  <p className="skill-description">{skill.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

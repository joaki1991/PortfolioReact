import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Server, Microscope } from 'lucide-react'
import profilePhoto from '../assets/profile_photo.png'
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
      description: "React, JavaScript ES6+, TypeScript, HTML5, CSS3, Responsive Design, Material-UI",
      color: "var(--accent-green)"
    },
    {
      icon: <Server size={32} />,
      title: "Backend Development", 
      description: "Node.js, Java, Spring Boot, Express.js, RESTful APIs, Microservicios",
      color: "var(--accent-blue)"
    },
    {
      icon: <Database size={32} />,
      title: "Database & Cloud",
      description: "PostgreSQL, MongoDB, MySQL, Redis, AWS, Docker, Data Modeling",
      color: "var(--secondary-green)"
    },
    {
      icon: <Microscope size={32} />,
      title: "Sistemas GPS & IoT",
      description: "Traccar, Geolocalización, WebSockets, Telemetría, Optimización de tracking",
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
            <motion.div className="about-profile" variants={itemVariants}>
              <motion.div 
                className="profile-photo-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="neon-ring-wave"></div>
                <div className="neon-ring-wave-2"></div>
                <img 
                  src={profilePhoto} 
                  alt="Joaquín - Desarrollador Full Stack" 
                  className="profile-photo"
                />
              </motion.div>
            </motion.div>

            <motion.div className="about-text" variants={itemVariants}>
              <p>
                Soy <strong>Joaquín Piqueras Delicado</strong>, desarrollador full stack con sólida experiencia 
                en tecnologías modernas como <strong>React, Node.js, Java, Spring Boot, PostgreSQL y MongoDB</strong>. 
                Mi trayectoria profesional me ha permitido trabajar en proyectos diversos, desde aplicaciones 
                web empresariales hasta soluciones IoT especializadas.
              </p>
              <p>
                Actualmente trabajo en <strong>NGPRO</strong>, donde lidero el desarrollo y optimización de 
                sistemas de tracking GPS basados en <strong>Traccar (open-source)</strong>. Mi trabajo se centra 
                en la adaptación y mejora del sistema para el posicionamiento en tiempo real de vehículos, 
                conductores y aperos agrícolas, implementando soluciones escalables con Spring Boot, 
                PostgreSQL y tecnologías de geolocalización avanzadas.
              </p>
              <p>
                Me apasiona la arquitectura de software limpia, las buenas prácticas de desarrollo y 
                la optimización de rendimiento. Disfruto resolviendo problemas complejos y creando 
                soluciones tecnológicas que generan valor real para los usuarios.
              </p>
            </motion.div>

            <motion.div className="skills-grid" variants={itemVariants}>
              {skills.map((skill) => (
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

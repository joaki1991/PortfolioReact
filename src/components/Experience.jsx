import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, ExternalLink, Cpu, Database, Globe } from 'lucide-react'
import './Experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const experiences = [
    {
      title: "Desarrollador Full Stack - Sistema GPS Tracking",
      company: "NGPRO",
      period: "2024 - Presente",
      location: "España",
      type: "trabajo",
      description: "Desarrollo y optimización de sistemas de tracking GPS basados en Traccar (open-source) para posicionamiento en tiempo real de vehículos, conductores y aperos agrícolas.",
      technologies: ["Java", "Spring Boot", "Traccar", "PostgreSQL", "React", "WebSockets", "GPS", "REST APIs", "Docker"],
      achievements: [
        "Adaptación y mejora del sistema Traccar open-source para necesidades específicas del sector agrícola",
        "Implementación de funcionalidades de tracking en tiempo real con WebSockets",
        "Desarrollo de algoritmos de optimización para posicionamiento GPS de múltiples dispositivos",
        "Diseño de arquitectura escalable con Spring Boot y PostgreSQL",
        "Integración de telemetría de vehículos y gestión de conductores",
        "Mejoras en la interfaz web con React para visualización de datos geoespaciales"
      ],
      icon: <MapPin size={24} />,
      color: "var(--neon-cyan)"
    },
    {
      title: "Proyecto Pulse - Full Stack Developer",
      company: "Proyecto Personal",
      period: "2024",
      location: "Remoto",
      type: "proyecto",
      description: "Desarrollo completo de una aplicación web full stack utilizando el stack MERN para gestión de proyectos y colaboración en equipo.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Mongoose", "REST APIs"],
      achievements: [
        "Implementación de sistema de autenticación completo con JWT y refresh tokens",
        "Diseño y desarrollo de API RESTful escalable con Express.js",
        "Gestión de estado global con Context API y optimización de re-renders",
        "Optimización de queries a MongoDB con índices y agregaciones",
        "Implementación de responsive design mobile-first",
        "Testing unitario y de integración con Jest"
      ],
      icon: <Cpu size={24} />,
      color: "var(--accent-green)"
    },
    {
      title: "Técnico Superior en Desarrollo de Aplicaciones Web",
      company: "Formación Profesional",
      period: "2023 - 2025",
      location: "España",
      type: "educacion",
      description: "Ciclo Formativo de Grado Superior especializado en desarrollo de aplicaciones web, bases de datos y arquitectura de sistemas.",
      technologies: ["Java", "JavaScript", "HTML5", "CSS3", "SQL", "PHP", "MySQL", "Git", "Linux"],
      achievements: [
        "Desarrollo de aplicaciones web con Java y frameworks MVC",
        "Diseño y gestión de bases de datos relacionales (MySQL, PostgreSQL)",
        "Programación orientada a objetos y patrones de diseño",
        "Desarrollo de interfaces web responsivas y accesibles",
        "Implementación de servicios web y APIs REST",
        "Proyecto final: Sistema de gestión empresarial con Java EE"
      ],
      icon: <Database size={24} />,
      color: "var(--secondary-green)"
    }
  ]

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  return (
    <section id="experience" className="experience nucleotide-section guanine">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-content"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">Experiencia</h2>
            <p className="section-subtitle">
              Mi trayectoria en el desarrollo web y proyectos destacados
            </p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <div className="timeline-icon" style={{ color: exp.color }}>
                    {exp.icon}
                  </div>
                </div>

                <div className="timeline-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-meta">
                      <span className="company">{exp.company}</span>
                      <div className="experience-details">
                        <span className="period">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="location">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="achievements">
                    <h4>Logros principales:</h4>
                    <ul>
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

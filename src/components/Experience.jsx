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
      title: "Proyecto Pulse - Full Stack Developer",
      company: "Proyecto Personal",
      period: "2024 - Presente",
      location: "Remoto",
      type: "proyecto",
      description: "Desarrollo completo de una aplicación web utilizando el stack MERN.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Mongoose"],
      achievements: [
        "Implementación de sistema de autenticación completo con JWT",
        "Diseño y desarrollo de API RESTful escalable",
        "Gestión de estado global con Context API",
        "Optimización de queries a MongoDB para mejor rendimiento",
        "Implementación de responsive design y UX moderna"
      ],
      icon: <Cpu size={24} />,
      color: "var(--accent-green)"
    },
    {
      title: "Desarrollador Frontend",
      company: "Proyectos Freelance",
      period: "2023 - 2024",
      location: "Remoto",
      type: "trabajo",
      description: "Desarrollo de interfaces web modernas y responsivas para diversos clientes.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Git"],
      achievements: [
        "Desarrollo de 5+ landing pages con alto rendimiento",
        "Implementación de animaciones CSS y JavaScript",
        "Optimización SEO y mejores prácticas de accesibilidad",
        "Colaboración con diseñadores UX/UI",
        "Integración con APIs de terceros"
      ],
      icon: <Globe size={24} />,
      color: "var(--accent-blue)"
    },
    {
      title: "Estudiante Autodidacta - Full Stack",
      company: "Formación Continua",
      period: "2022 - Presente",
      location: "Online",
      type: "educacion",
      description: "Aprendizaje continuo de tecnologías web modernas y mejores prácticas de desarrollo.",
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Git", "REST APIs"],
      achievements: [
        "Completado múltiples cursos especializados en React y Node.js",
        "Participación en comunidades de desarrolladores",
        "Contribución a proyectos open source",
        "Práctica constante con proyectos personales",
        "Mantenimiento al día con últimas tecnologías del ecosistema JavaScript"
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

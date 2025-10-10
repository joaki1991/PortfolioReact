import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Zap, Heart, Brain, Lightbulb } from 'lucide-react'
import BioIcon from './BioIcons'
import Molecule from './Molecule'
import './Projects.css'
import './BioIcons.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const projects = [
    {
      title: "Pulse - Social Health Platform",
      description: "Plataforma completa de salud social desarrollada con MERN stack. Incluye sistema de autenticación, gestión de perfiles, seguimiento de actividades y comunicación en tiempo real.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Socket.io", "JWT", "Mongoose"],
      features: [
        "Autenticación segura con JWT",
        "Dashboard interactivo de salud",
        "Chat en tiempo real",
        "Sistema de seguimiento de progreso",
        "API RESTful escalable"
      ],
      github: "https://github.com/joaquin/pulse",
      demo: "https://pulse-demo.com",
      status: "En desarrollo",
      icon: <Heart size={24} />,
      bioIcon: "cell",
      color: "var(--accent-green)"
    },
    {
      title: "Portfolio Biológico",
      description: "Portfolio personal con temática de biología, desarrollado en React con animaciones fluidas y diseño responsivo. Incluye efectos de scroll y visualizaciones orgánicas.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Framer Motion", "CSS3", "Vite", "Lucide Icons"],
      features: [
        "Animaciones de scroll suaves",
        "Tema biológico inmersivo",
        "Diseño completamente responsivo",
        "Optimización de rendimiento",
        "Efectos visuales orgánicos"
      ],
      github: "https://github.com/joaquin/portfolio-react",
      demo: "https://joaquin-portfolio.com",
      status: "Completado",
      icon: <Brain size={24} />,
      bioIcon: "molecule",
      color: "var(--accent-blue)"
    },
    {
      title: "Landing Page Moderna",
      description: "Serie de landing pages modernas y optimizadas para clientes freelance. Enfoque en conversión, SEO y experiencia de usuario excepcional.",
      image: "/api/placeholder/600/400",
      technologies: ["JavaScript", "CSS3", "HTML5", "SASS", "Webpack"],
      features: [
        "Optimización SEO completa",
        "Diseño mobile-first",
        "Formularios de contacto funcionales",
        "Integración con analytics",
        "Carga rápida optimizada"
      ],
      github: "https://github.com/joaquin/landing-pages",
      demo: "https://modern-landing.com",
      status: "Completado",
      icon: <Lightbulb size={24} />,
      bioIcon: "testTube",
      color: "var(--secondary-green)"
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
    <section id="projects" className="projects bio-pattern nucleotide-section cytosine">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-content"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <h2 className="section-title gradient-text">Proyectos</h2>
            <p className="section-subtitle">
              Algunos de mis trabajos más destacados y proyectos personales
            </p>
          </motion.div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="project-card bio-hover"
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <div className="project-image">
                  <div className="project-placeholder">
                    <div className="project-icon" style={{ color: project.color }}>
                      {project.icon}
                    </div>
                    <div className="project-bio-icon">
                      <BioIcon icon={project.bioIcon} color={project.color} size={80} />
                    </div>
                  </div>
                  <div className="project-status">
                    <span className={`status ${project.status === 'Completado' ? 'completed' : 'development'}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-features">
                    <h4>Características principales:</h4>
                    <ul>
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-links">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={20} />
                      Código
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link demo"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Moléculas decorativas flotantes */}
          <Molecule size={60} color="var(--neon-green)" delay={0.5} top="15%" left="8%" />
          <Molecule size={50} color="var(--neon-cyan)" delay={1.5} top="50%" left="85%" />
          <Molecule size={55} color="var(--neon-magenta)" delay={2.5} top="85%" left="5%" />
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

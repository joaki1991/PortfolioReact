import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink, Zap, Heart, Brain, Lightbulb } from 'lucide-react'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const projects = [
    {
      title: "Pulse - Sistema de Encuestas",
      description: "Aplicación completa de encuestas con soporte para usuarios registrados y anónimos (por IP). Permite crear encuestas públicas o privadas, votar y ver resultados en tiempo real.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JWT", "Cloudinary", "bcryptjs", "Vite"],
      features: [
        "Autenticación JWT y sistema de usuarios anónimos",
        "CRUD completo de encuestas públicas y privadas",
        "Votación en tiempo real con control de IP",
        "Subida de imágenes con Cloudinary",
        "Resultados dinámicos y visualización de datos",
        "Interfaz moderna y completamente responsiva"
      ],
      github: "https://github.com/joaki1991/Pulse",
      demo: "https://pulsesurveys.netlify.app/",
      status: "Completado",
      icon: <Heart size={24} />,
      color: "var(--accent-green)"
    },
    {
      title: "Portfolio React 3D",
      description: "Portfolio personal interactivo con temática de biología y animaciones 3D. Incluye renderizado 3D de ADN con Three.js, animaciones con Framer Motion y diseño responsivo con colores neón.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Three.js", "Framer Motion", "Vite", "CSS3", "@react-three/fiber", "@react-three/drei"],
      features: [
        "Renderizado 3D de ADN con Three.js en tiempo real",
        "Animaciones fluidas con scroll sincronizado",
        "Diseño adaptativo: sidebar vertical (desktop) / horizontal (móvil)",
        "Optimización de rendimiento con requestAnimationFrame",
        "Tema neón con efectos visuales inmersivos",
        "Rotación 3D interactiva basada en scroll"
      ],
      github: "https://github.com/joaki1991/PortfolioReact",
      demo: "#",
      status: "Completado",
      icon: <Brain size={24} />,
      color: "var(--neon-cyan)"
    },
    {
      title: "Sistema GPS Tracking - Traccar",
      description: "Mejoras y adaptaciones al sistema open-source Traccar para tracking en tiempo real de vehículos agrícolas. Sistema desarrollado profesionalmente con optimizaciones de rendimiento y funcionalidades personalizadas. Incluye web de demo desarrollada por mí para visualizar las capacidades del sistema.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "React", "WebSockets", "Traccar", "Docker", "GPS"],
      features: [
        "Tracking en tiempo real de múltiples dispositivos GPS",
        "Gestión de flotas de vehículos y conductores",
        "Telemetría y reportes de posicionamiento",
        "Arquitectura escalable con Spring Boot",
        "Integración con hardware GPS y sensores IoT",
        "Dashboard web con visualización geoespacial"
      ],
      github: null,
      demo: "https://trackermanual.netlify.app/",
      status: "En desarrollo",
      icon: <Zap size={24} />,
      color: "var(--neon-magenta)"
    },
    {
      title: "EducaCenter",
      description: "Sistema completo de gestión educativa con panel de administración. Incluye gestión de usuarios, roles y permisos, diseñado con Material-UI y arquitectura moderna de componentes React. Backend desarrollado en PHP. Nota: La base de datos ha sido restablecida recientemente y no hay usuarios de prueba disponibles.",
      image: "/api/placeholder/600/400",
      technologies: ["React 19", "Material-UI", "Vite", "Axios", "React Router", "Framer Motion", "PHP", "MySQL"],
      features: [
        "Panel de administración completo con login seguro",
        "Gestión de usuarios con roles y permisos",
        "Interfaz moderna con Material-UI (MUI)",
        "Backend completo desarrollado en PHP",
        "Rutas protegidas con React Router",
        "Sistema de autenticación robusto con MySQL"
      ],
      github: "https://github.com/joaki1991/EducaCenter",
      demo: "https://educacenter.netlify.app/login",
      status: "Completado",
      icon: <Lightbulb size={24} />,
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
                    {project.github && (
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
                    )}
                    {project.demo && project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                        {project.github === null ? 'Ver Demo' : 'Demo'}
                      </motion.a>
                    )}
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

export default Projects

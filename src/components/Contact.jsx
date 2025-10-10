import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'
import BioIcon from './BioIcons'
import './Contact.css'
import './BioIcons.css'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí integrarías con tu servicio de email preferido
    console.log('Form submitted:', formData)
    alert('¡Mensaje enviado! Te contactaré pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "joaquin@email.com",
      link: "mailto:joaquin@email.com",
      bioIcon: "testTube",
      color: "var(--accent-green)"
    },
    {
      icon: <Phone size={24} />,
      title: "Teléfono",
      content: "+34 XXX XXX XXX",
      link: "tel:+34XXXXXXXXX",
      bioIcon: "petriDish",
      color: "var(--accent-blue)"
    },
    {
      icon: <MapPin size={24} />,
      title: "Ubicación",
      content: "España",
      link: null,
      bioIcon: "molecule",
      color: "var(--secondary-green)"
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/joaquin",
      color: "var(--text-primary)"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/joaquin",
      color: "#0077B5"
    },
    {
      icon: <MessageCircle size={24} />,
      name: "WhatsApp",
      url: "https://wa.me/34XXXXXXXXX",
      color: "#25D366"
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
    <section id="contact" className="contact nucleotide-section adenine">
      <div className="contact-background">
        <div className="neural-network">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="neuron"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.div className="section-header" variants={itemVariants}>
            <div className="header-with-bio">
              <h2 className="section-title gradient-text">Contacto</h2>
              <div className="header-bio-icons">
                <BioIcon icon="cell" color="var(--neon-green)" size={50} />
              </div>
            </div>
            <p className="section-subtitle">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
          </motion.div>

          <div className="contact-grid">
            <motion.div className="contact-info" variants={itemVariants}>
              <h3>Información de contacto</h3>
              <p className="contact-intro">
                Estoy disponible para nuevos proyectos y oportunidades de colaboración. 
                No dudes en contactarme para discutir cómo puedo ayudarte.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="contact-method"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    {info.link ? (
                      <a href={info.link} className="contact-link">
                        <div className="contact-method-bio-icon">
                          <BioIcon icon={info.bioIcon} color={info.color} size={35} />
                        </div>
                        <div className="contact-icon" style={{ color: info.color }}>
                          {info.icon}
                        </div>
                        <div className="contact-details">
                          <span className="contact-title">{info.title}</span>
                          <span className="contact-content">{info.content}</span>
                        </div>
                      </a>
                    ) : (
                      <div className="contact-link">
                        <div className="contact-method-bio-icon">
                          <BioIcon icon={info.bioIcon} color={info.color} size={35} />
                        </div>
                        <div className="contact-icon" style={{ color: info.color }}>
                          {info.icon}
                        </div>
                        <div className="contact-details">
                          <span className="contact-title">{info.title}</span>
                          <span className="contact-content">{info.content}</span>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                <h4>Sígueme en:</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      whileHover={{ scale: 1.1, y: -2 }}
                      style={{ '--hover-color': social.color }}
                    >
                      {social.icon}
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div className="contact-form-container" variants={itemVariants}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Envíame un mensaje</h3>
                
                <div className="form-group">
                  <label htmlFor="name">Nombre *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows="5"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Enviar mensaje
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

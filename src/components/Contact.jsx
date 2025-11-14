import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react'
import './Contact.css'

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Verificar que el access key esté configurado
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      
      if (!accessKey) {
        console.error('VITE_WEB3FORMS_ACCESS_KEY no está configurado')
        setSubmitStatus('error')
        setIsSubmitting(false)
        setTimeout(() => setSubmitStatus(null), 5000)
        return
      }

      // Web3Forms - Access Key desde variable de entorno
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Nuevo mensaje de ${formData.name} - Portfolio`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message
        })
      })

      const result = await response.json()

      if (result.success) {
        setFormData({ name: '', email: '', message: '' })
        setSubmitStatus('success')
      } else {
        console.error('Error de Web3Forms:', result)
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
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
      content: "joakanpde@gmail.com",
      link: "mailto:joakanpde@gmail.com",
      color: "var(--accent-green)"
    },
    {
      icon: <Phone size={24} />,
      title: "Teléfono",
      content: "+34 627 812 107",
      link: "tel:+34627812107",
      color: "var(--accent-blue)"
    },
    {
      icon: <MapPin size={24} />,
      title: "Ubicación",
      content: "Almansa, Albacete, España",
      link: null,
      color: "var(--secondary-green)"
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/joaki1991",
      color: "var(--text-primary)"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joaquin-piqueras-delicado-97146b9a/",
      color: "#0077B5"
    },
    {
      icon: <MessageCircle size={24} />,
      name: "WhatsApp",
      url: "https://wa.me/34627812107",
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
          {[...Array(isMobile ? 6 : 10)].map((_, i) => (
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
                duration: isMobile ? 4 + Math.random() * 2 : 3 + Math.random() * 2, // Más lento en móvil
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear" // Linear es más eficiente
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
            <h2 className="section-title gradient-text">Contacto</h2>
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
                      <div 
                        className="contact-link"
                        onClick={() => {
                          if (info.link.startsWith('mailto:')) {
                            window.location.href = info.link;
                            // Fallback: copiar email al portapapeles
                            setTimeout(() => {
                              navigator.clipboard.writeText(info.content).then(() => {
                                console.log("Email copiado al portapapeles como respaldo");
                              });
                            }, 500);
                          } else {
                            window.open(info.link, '_blank');
                          }
                        }}
                        style={{ cursor: 'pointer' }}
                      >
                        <div className="contact-icon" style={{ color: info.color }}>
                          {info.icon}
                        </div>
                        <div className="contact-details">
                          <span className="contact-title">{info.title}</span>
                          <span className="contact-content">{info.content}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="contact-link">
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
                  disabled={isSubmitting}
                >
                  <Send size={20} />
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div 
                    className="submit-message success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ ¡Mensaje enviado con éxito! Te contactaré pronto.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    className="submit-message error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✗ Hubo un error al enviar el mensaje. Por favor, contáctame directamente a joakanpde@gmail.com
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import QuoteForm from '../components/QuoteForm'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="contact-page">
      {/* Simple Centered Title */}
      <div style={{ 
        paddingTop: '150px', 
        paddingBottom: '50px',
        textAlign: 'center' 
      }}>
        <motion.h1 
          style={{
            color: 'var(--gold)',
            fontSize: '3rem',
            fontWeight: '700',
            margin: 0
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Contact Us
        </motion.h1>
      </div>

      {/* Contact Information */}
      <section className="features" ref={ref} style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="contact-info"
              variants={itemVariants}
              style={{
                background: 'var(--white)',
                borderRadius: '15px',
                marginBottom: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--light-gray)',
                padding: '2.5rem',
                maxWidth: '800px',
                margin: '0 auto 2.5rem',
                textAlign: 'center'
              }}
            >
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '2rem'
              }}>
                Get in Touch
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    background: 'var(--gold)',
                    color: 'var(--white)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem'
                  }}>
                    📞
                  </div>
                  <h4 style={{ 
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    Phone
                  </h4>
                  <motion.a 
                    href="tel:0420522182"
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--blue)',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    0420 522 182
                  </motion.a>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    background: 'var(--gold)',
                    color: 'var(--white)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    fontSize: '1.5rem'
                  }}>
                    ✉️
                  </div>
                  <h4 style={{ 
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: 'var(--text-dark)',
                    marginBottom: '0.5rem'
                  }}>
                    Email
                  </h4>
                  <motion.a 
                    href="mailto:dragonfloors.info@gmail.com"
                    style={{
                      fontSize: '1.1rem',
                      color: 'var(--blue)',
                      textDecoration: 'none',
                      fontWeight: '500'
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    dragonfloors.info@gmail.com
                  </motion.a>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <motion.a
                  href="https://www.instagram.com/dragon_floor_works?igsh=MXI4dDVveXk5amtieA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{
                    background: 'linear-gradient(45deg, #E4405F, #F56040)',
                    border: 'none',
                    color: 'var(--white)',
                    fontWeight: '600',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: '0 10px 25px rgba(228, 64, 95, 0.3)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  📷 Follow Us on Instagram
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="quote-form-wrapper"
              variants={itemVariants}
              style={{
                background: 'var(--white)',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--light-gray)',
                padding: '3rem',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <QuoteForm formTitle="Contact Us" />
            </motion.div>

            {/* Additional Contact CTA */}
            <motion.div 
              style={{
                textAlign: 'center',
                marginTop: '4rem',
                padding: '3rem 2rem',
                background: 'var(--gold)',
                borderRadius: '20px',
                color: 'var(--white)',
                maxWidth: '800px',
                margin: '4rem auto 0'
              }}
              variants={itemVariants}
            >
              <h3 style={{ 
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Ready to Transform Your Space?
              </h3>
              <p style={{ 
                fontSize: '1.1rem',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                We're here to help bring your flooring vision to life. Contact us today!
              </p>
              <motion.a 
                href="tel:0420522182" 
                className="btn"
                style={{
                  background: 'var(--white)',
                  color: 'var(--gold)',
                  border: '2px solid var(--white)',
                  fontWeight: '600'
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Call Us: 0420 522 182
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
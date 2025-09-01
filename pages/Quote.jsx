import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import QuoteForm from '../components/QuoteForm'

const Quote = () => {
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
    <div className="quote-page">
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
          Get Your Free Quote
        </motion.h1>
      </div>

      {/* Quote Form Content */}
      <section className="features" ref={ref} style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="quote-intro"
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
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--gray)',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Ready to transform your space? Fill out the form below and we'll provide you with a detailed, no-obligation quote for your flooring project. Our team will get back to you within 24 hours.
              </p>
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
              <QuoteForm formTitle="Get Your Free Quote" />
            </motion.div>

            {/* Contact CTA */}
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
                Prefer to Talk Directly?
              </h3>
              <p style={{ 
                fontSize: '1.1rem',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Give us a call and speak with one of our flooring experts today.
              </p>
              <motion.a 
                href="/contact" 
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
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Quote
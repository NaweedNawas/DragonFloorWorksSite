import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Warranty = () => {
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

  const coveredItems = [
    "Peeling, Flaking, or Bubbling",
    "Premature Wear & Tear (under normal use)",
    "Delamination or Lifting",
    "Cracks Caused by Coating Failure"
  ]

  const notCoveredItems = [
    "Structural movement or cracks in the underlying concrete",
    "Damage from misuse, accidents, or heavy mechanical impact",
    "Improper cleaning or maintenance",
    "Changes in colour due to UV exposure (for non-UV-resistant finishes)"
  ]

  return (
    <div className="warranty-page">
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
          Our Warranty Promise
        </motion.h1>
      </div>

      {/* Warranty Content */}
      <section className="features" ref={ref} style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="warranty-section"
              variants={itemVariants}
              style={{
                background: 'var(--white)',
                borderRadius: '15px',
                marginBottom: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--light-gray)',
                padding: '2.5rem',
                maxWidth: '900px',
                margin: '0 auto 2.5rem'
              }}
            >
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                10-Year Warranty on All Epoxy Floor Coating Systems
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--gray)',
                textAlign: 'center',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                At Dragon Floor Works, we stand by the quality of our work and materials. That's why we proudly offer a 10-Year Warranty on all our epoxy floor coating systems.
              </p>
            </motion.div>

            <motion.div 
              className="warranty-section"
              variants={itemVariants}
              style={{
                background: 'var(--white)',
                borderRadius: '15px',
                marginBottom: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--light-gray)',
                padding: '2.5rem',
                maxWidth: '900px',
                margin: '0 auto 2.5rem'
              }}
            >
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem'
              }}>
                What's Covered
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {coveredItems.map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    fontSize: '1.05rem',
                    color: 'var(--text-dark)'
                  }}>
                    <span style={{
                      marginRight: '1rem',
                      color: 'var(--blue)',
                      fontSize: '1.5rem',
                      lineHeight: '1',
                      fontWeight: 'bold'
                    }}>✔</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.6',
                color: 'var(--gray)',
                marginTop: '1.5rem',
                fontStyle: 'italic'
              }}>
                This warranty covers the surface coating applied by our team and ensures your floor maintains its performance and appearance as promised.
              </p>
            </motion.div>

            <motion.div 
              className="warranty-section"
              variants={itemVariants}
              style={{
                background: 'var(--white)',
                borderRadius: '15px',
                marginBottom: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--light-gray)',
                padding: '2.5rem',
                maxWidth: '900px',
                margin: '0 auto 2.5rem'
              }}
            >
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem'
              }}>
                What's Not Covered
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {notCoveredItems.map((item, index) => (
                  <li key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    fontSize: '1.05rem',
                    color: 'var(--text-dark)'
                  }}>
                    <span style={{
                      marginRight: '1rem',
                      color: '#dc2626',
                      fontSize: '1.5rem',
                      lineHeight: '1',
                      fontWeight: 'bold'
                    }}>✘</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              className="warranty-section"
              variants={itemVariants}
              style={{
                background: 'var(--white)',
                borderRadius: '15px',
                marginBottom: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--light-gray)',
                padding: '2.5rem',
                maxWidth: '900px',
                margin: '0 auto 2.5rem'
              }}
            >
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                color: 'var(--text-dark)',
                marginBottom: '1.5rem'
              }}>
                How to Make a Warranty Claim
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--gray)'
              }}>
                If you notice any issues covered under warranty, simply contact us with your job details and photos of the problem area. Our team will arrange an inspection and, if covered, organise a prompt repair or recoating — hassle-free.
              </p>
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
                maxWidth: '900px',
                margin: '4rem auto 0'
              }}
              variants={itemVariants}
            >
              <h3 style={{ 
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Still Have Questions?
              </h3>
              <p style={{ 
                fontSize: '1.1rem',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Our team is here to help! Contact us for personalized answers and a free consultation.
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

export default Warranty
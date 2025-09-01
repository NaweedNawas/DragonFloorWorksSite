import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

const MetallicEpoxy = () => {
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
    <div className="service-page">
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
          Metallic Epoxy
        </motion.h1>
      </div>

      <section className="features" ref={ref} style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              className="service-intro"
              variants={itemVariants}
              style={{
                background: 'var(--white)',
                borderRadius: '15px',
                marginBottom: '2.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid var(--light-gray)',
                padding: '2.5rem',
                maxWidth: '900px',
                margin: '0 auto 2.5rem',
                textAlign: 'center'
              }}
            >
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: 'var(--gray)',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                Our premium metallic epoxy finishes create stunning marble-like effects, transforming any space into a work of art. These high-end floors are not only visually striking but also incredibly durable and long-lasting.
              </p>
            </motion.div>

            <motion.div
              className="service-details"
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
                The Allure of Metallic Epoxy
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>Unique Aesthetic:</strong> Each metallic epoxy floor is a one-of-a-kind masterpiece with swirling, pearlescent effects.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>High Durability:</strong> Offers excellent resistance to stains, chemicals, and heavy foot traffic.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>Versatile Application:</strong> Ideal for retail spaces, showrooms, residential living areas, and more.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>Easy to Clean:</strong> The smooth, non-porous surface prevents dirt and grime from accumulating.
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="service-images"
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
                marginBottom: '1.5rem',
                textAlign: 'center'
              }}>
                
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
              }}>
                <img 
                  src="https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Metallic Epoxy Floor Example 1"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                />
                <img 
                  src="https://images.pexels.com/photos/2219025/pexels-photo-2219025.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Metallic Epoxy Floor Example 2"
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </div>
            </motion.div>

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
                Elevate Your Space with Metallic Epoxy
              </h3>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Discover the endless design possibilities. Contact us for a personalized consultation and quote.
              </p>
              <MotionLink
                to="/contact"
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
              </MotionLink>
              <MotionLink
                to="/quote"
                className="btn"
                style={{
                  background: 'transparent',
                  color: 'var(--white)',
                  border: '2px solid var(--white)',
                  fontWeight: '600',
                  marginLeft: '1rem'
                }}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                  background: 'var(--white)',
                  color: 'var(--gold)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Get a Quote
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MetallicEpoxy
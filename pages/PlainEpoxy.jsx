import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const MotionLink = motion(Link)

const PlainEpoxy = () => {
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
          Plain Epoxy / Ultra Flakes
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
                Our Plain Epoxy and Ultra Flake systems offer durable epoxy coatings with decorative flakes for enhanced slip resistance and style. Perfect for garages, workshops, and commercial spaces, these floors combine functionality with aesthetic appeal.
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
                Why Choose Plain Epoxy or Ultra Flakes?
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>Exceptional Durability:</strong> Resistant to chemicals, abrasions, and heavy traffic.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>Customizable Aesthetics:</strong> Choose from a wide range of colors and flake sizes to match your style.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>Enhanced Safety:</strong> Ultra flakes provide added texture for improved slip resistance.
                </li>
                <li style={{ marginBottom: '1rem', fontSize: '1.05rem', color: 'var(--text-dark)' }}>
                  <span style={{ marginRight: '1rem', color: 'var(--blue)', fontSize: '1.5rem', lineHeight: '1', fontWeight: 'bold' }}>✔</span>
                  <strong>Easy Maintenance:</strong> Seamless, non-porous surface makes cleaning simple and quick.
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
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem'
              }}>
                {[
                  { src: "https://i.postimg.cc/NMd2rYc0/IMG-20250901-WA0005.jpg", alt: "Plain Epoxy Work Example 1" },
                  { src: "https://i.postimg.cc/wBdmC029/IMG-20250901-WA0006.jpg", alt: "Plain Epoxy Work Example 2" },
                  { src: "https://i.postimg.cc/63WG3qFS/IMG-20250901-WA0007.jpg", alt: "Plain Epoxy Work Example 3" },
                  { src: "https://i.postimg.cc/rpCrMxZx/IMG-20250901-WA0008.jpg", alt: "Plain Epoxy Work Example 4" },
                  { src: "https://i.postimg.cc/j2CwH9x4/IMG-20250901-WA0009.jpg", alt: "Plain Epoxy Work Example 5" },
                  { src: "https://i.postimg.cc/QCPB0bVG/IMG-20250901-WA0010.jpg", alt: "Plain Epoxy Work Example 6" },
                  { src: "https://i.postimg.cc/RV6JqjbM/IMG-20250901-WA0011.jpg", alt: "Plain Epoxy Work Example 7" },
                  { src: "https://i.postimg.cc/m2vz9807/IMG-20250901-WA0013.jpg", alt: "Plain Epoxy Work Example 8" },
                  { src: "https://i.postimg.cc/rw5dN5k3/IMG-20250901-WA0014.jpg", alt: "Plain Epoxy Work Example 9" }
                ].map((image, index) => (
                  <img 
                    key={index}
                    src={image.src} 
                    alt={image.alt}
                    style={{
                      width: '100%',
                      height: '220px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                ))}
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
                Ready for a Durable and Stylish Floor?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Contact us today for a free consultation and quote on your Plain Epoxy or Ultra Flake flooring project.
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

export default PlainEpoxy
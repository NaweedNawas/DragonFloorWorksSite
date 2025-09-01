import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const features = [
    "10+ Years of Industry Experience",
    "Custom Colour & Flake Options", 
    "Fast, Clean Installations",
    "Premium, Industrial-Grade Coatings",
    "Competitive, Transparent Pricing",
    "Friendly, Professional Service"
  ]

  return (
    <section id="about" className="features" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="section-title"
            variants={itemVariants}
          >
            Let Your Floor Make a Statement!
          </motion.h2>
          
          <motion.div 
            className="hero-text"
            style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}
            variants={itemVariants}
          >
            <h3 style={{ 
              fontSize: '1.8rem', 
              color: 'var(--gold)', 
              marginBottom: '2rem',
              fontWeight: '600'
            }}>
              Premium Epoxy & Flake Floors in Just 2 Days!
            </h3>
            
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'var(--gray)',
              marginBottom: '2rem'
            }}>
              At Dragon Floor Works, we're passionate about transforming ordinary floors into durable, striking surfaces that stand the test of time. With over 10 years of hands-on experience, we've built a reputation for delivering top-quality epoxy floor coatings for homes, garages, commercial spaces, and industrial properties.
            </p>
            
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: 'var(--gray)',
              marginBottom: '2rem'
            }}>
              Our expert team uses the latest techniques and premium materials to ensure every project is completed to the highest standard — on time and on budget. Whether you're after a stylish showroom finish or a heavy-duty floor for your workshop, we've got the perfect solution.
            </p>
            
            <h3 style={{ 
              fontSize: '1.6rem', 
              color: 'var(--blue)', 
              marginBottom: '2rem',
              fontWeight: '600'
            }}>
              Australia's #1 Epoxy Flooring Service
            </h3>
          </motion.div>

          <motion.h3 
            style={{ 
              fontSize: '2rem', 
              color: 'var(--text-dark)', 
              textAlign: 'center',
              marginBottom: '2rem',
              fontWeight: '600'
            }}
            variants={itemVariants}
          >
            Why Choose Us?
          </motion.h3>

          <motion.div 
            className="features-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}
            variants={containerVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                style={{ padding: '1.5rem' }}
              >
                <div className="feature-icon" style={{ fontSize: '2rem' }}>
                  ✔
                </div>
                <h4 style={{ 
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: 'var(--text-dark)',
                  margin: '1rem 0'
                }}>
                  {feature}
                </h4>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            style={{ 
              textAlign: 'center', 
              marginTop: '3rem',
              padding: '2rem',
              background: 'var(--light-gray)',
              borderRadius: '15px'
            }}
            variants={itemVariants}
          >
            <p style={{ 
              fontSize: '1.2rem', 
              fontWeight: '600',
              color: 'var(--text-dark)',
              fontStyle: 'italic'
            }}>
              We believe great floors should be as tough as they are good-looking — and that's exactly what we deliver.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutUs
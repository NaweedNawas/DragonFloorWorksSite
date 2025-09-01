import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Features = () => {
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
    {
      icon: "💎",
      title: "Premium Materials",
      description: "We source only the highest quality materials from trusted suppliers to ensure lasting beauty and durability."
    },
    {
      icon: "⚡",
      title: "Timely Completion",
      description: "Professional project management ensures your flooring project is completed on time and within budget."
    },
    {
      icon: "🛡️",
      title: "Comprehensive Warranty",
      description: "All our work comes with industry-leading warranties for your complete peace of mind."
    }
  ]

  return (
    <section className="features" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Dragon Floor Works?
        </motion.h2>
        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.08,
                transition: { duration: 0.3 }
              }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
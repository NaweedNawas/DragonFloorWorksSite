import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import QuoteForm from './QuoteForm'

const MotionLink = motion(Link)

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "-40%"])
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section id="home" className="hero" ref={ref}>
      <motion.div className="hero-background" style={{ y }}>
        <img 
          src="/Concrete-Flooring-in-Aesthetic-Design-for-Hotels-and-Resorts.webp" 
          alt="Concrete flooring background" 
          className="hero-bg-image"
        />
      </motion.div>
      <div className="hero-overlay"></div>
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.h1 className="hero-title" variants={itemVariants}>
            Premium Flooring Solutions
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Transform your space with our expert flooring installation and restoration services. Quality craftsmanship guaranteed.
          </motion.p>
          <motion.div className="hero-buttons" variants={itemVariants}>
            <MotionLink
              to="/quote" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get Free Quote
            </MotionLink>
          </motion.div>
        </div>
        <QuoteForm />
      </motion.div>
    </section>
  )
}

export default Hero
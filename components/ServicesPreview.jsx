import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const ServicesPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

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
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      image: "https://i.postimg.cc/Gtgg73zy/plain-epoxy.jpg",
      title: "Plain Epoxy / Ultra Flakes",
      description: "Durable epoxy coatings with decorative flakes for enhanced slip resistance and style.",
      path: "/services/plain-epoxy"
    },
    {
      image: "https://i.postimg.cc/Pfv6TH62/metallix-epoxy.jpg",
      title: "Metallic Epoxy",
      description: "Premium metallic epoxy finishes that create stunning marble-like effects.",
      path: "/services/metallic-epoxy"
    },
    {
      image: "https://i.postimg.cc/SKKr5b2L/grind-and-seal-main.jpg",
      title: "Grind and Seal",
      description: "Cost-effective concrete grinding and sealing for a smooth, protected surface.",
      path: "/services/grind-seal"
    },
    {
      image: "https://i.postimg.cc/TwzJpykQ/cncrete-polish-main.jpg",
      title: "Concrete Polish",
      description: "High-gloss polished concrete floors that are durable and low-maintenance.",
      path: "/services/concrete-polish"
    },
    {
      image: "https://i.postimg.cc/Hk60bvZr/driveway-coating-main.jpg",
      title: "Driveway Coating and Wash",
      description: "Professional driveway coatings and cleaning services for enhanced curb appeal.",
      path: "/services/driveway-coating"
    }
  ]

  return (
    <section className="services-preview" ref={ref}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.path}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <motion.div 
                className="service-card"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.img 
                  src={service.image} 
                  alt={service.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="service-content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
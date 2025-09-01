import React, { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import colorPaletteData from '../data/colorPaletteData'

const MotionLink = motion(Link)

const ColorPalette = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [filter, setFilter] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredImages = colorPaletteData.filter(image => {
    if (filter === 'all') {
      return true
    }
    return image.category === filter
  })

  const openModal = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal()
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const filterVariants = {
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
    <div className="color-palette-page">
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
          Our Color Palette
        </motion.h1>
        <motion.p
          style={{
            fontSize: '1.2rem',
            color: 'var(--gray)',
            marginTop: '1rem',
            maxWidth: '600px',
            margin: '1rem auto 0'
          }}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our extensive range of colors and finishes to find the perfect look for your space.
        </motion.p>
      </div>

      <section className="features" ref={ref} style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="filter-buttons"
              variants={filterVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <motion.button
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                View All ({colorPaletteData.length})
              </motion.button>
              <motion.button
                className={`filter-button ${filter === 'highlights' ? 'active' : ''}`}
                onClick={() => setFilter('highlights')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Highlights Range ({colorPaletteData.filter(img => img.category === 'highlights').length})
              </motion.button>
              <motion.button
                className={`filter-button ${filter === 'plain-highlights' ? 'active' : ''}`}
                onClick={() => setFilter('plain-highlights')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Plain Highlights Range ({colorPaletteData.filter(img => img.category === 'plain-highlights').length})
              </motion.button>
              <motion.button
                className={`filter-button ${filter === 'standard' ? 'active' : ''}`}
                onClick={() => setFilter('standard')}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Standard Range ({colorPaletteData.filter(img => img.category === 'standard').length})
              </motion.button>
            </motion.div>

            <motion.div
              className="image-grid"
              layout
            >
              <AnimatePresence mode="wait">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={`${image.category}-${index}`}
                    className="image-card"
                    variants={itemVariants}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                    onClick={() => openModal(image)}
                    style={{ cursor: 'pointer' }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.name}
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <p className="image-name">{image.name}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredImages.length === 0 && (
              <motion.div
                style={{
                  textAlign: 'center',
                  padding: '3rem',
                  color: 'var(--gray)'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p style={{ fontSize: '1.2rem' }}>No images found for the selected category.</p>
              </motion.div>
            )}

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
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                Love What You See?
              </h3>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                opacity: 0.9
              }}>
                Contact us to discuss your color preferences and get a personalized quote for your project.
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

      {/* Image Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="image-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleOverlayClick}
          >
            <motion.div
              className="image-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="image-modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                ✕
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.name}
                className="image-modal-img"
              />
              <p className="image-modal-name">{selectedImage.name}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ColorPalette
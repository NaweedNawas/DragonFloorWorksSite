import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const FAQs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

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

  const faqs = [
    {
      question: "How long does an epoxy or polished concrete floor last?",
      answer: "With proper installation and care, epoxy floors can last 10–20 years, while polished concrete can last even longer with minimal maintenance."
    },
    {
      question: "What's the difference between plain epoxy, ultra flakes, and metallic epoxy?",
      answer: [
        "Plain Epoxy: A smooth, clean finish that's durable and affordable.",
        "Ultra Flakes: Adds decorative flakes for a stylish look and slip resistance.",
        "Metallic Epoxy: Creates a high-end, marble-like effect for a modern finish."
      ]
    },
    {
      question: "Is epoxy flooring slippery?",
      answer: "Standard epoxy can be slippery when wet, but we offer anti-slip options (flakes, grit, or textured finishes) to improve safety."
    },
    {
      question: "How do I maintain my epoxy or polished concrete floor?",
      answer: "Just regular sweeping and mopping with mild cleaners. Avoid harsh chemicals and abrasive tools."
    },
    {
      question: "How long does installation take?",
      answer: "Depending on the size of the area and the system chosen, most projects take 2–5 days, including preparation and curing."
    },
    {
      question: "Can epoxy or concrete coatings be used outdoors, like on driveways?",
      answer: "Yes! We provide driveway coatings and washes designed to withstand UV, weather, and heavy traffic."
    },
    {
      question: "Do you need to remove my old floor before installing epoxy or polish?",
      answer: "Not always — we usually grind and prep the existing concrete surface before applying the new system."
    },
    {
      question: "Is polished concrete different from grind and seal?",
      answer: "Yes. Polished concrete is mechanically polished for a glossy, durable finish. Grind and seal involves grinding the surface and applying a clear sealer for a more budget-friendly option."
    },
    {
      question: "How much does epoxy or concrete flooring cost?",
      answer: "Pricing depends on the area size, surface condition, and finish chosen. We provide free quotes after an inspection."
    },
    {
      question: "Will epoxy or polished concrete crack?",
      answer: "Epoxy is flexible and resistant to most cracks, but if your underlying concrete shifts, cracks can appear. We repair and prep surfaces beforehand to minimize this risk."
    }
  ]

  return (
    <div className="faqs-page">
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
          Frequently Asked Questions
        </motion.h1>
      </div>

      {/* FAQs Content */}
      <section className="features" ref={ref} style={{ paddingTop: '50px', paddingBottom: '80px' }}>
        <div className="container">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="faqs-container"
              style={{ maxWidth: '900px', margin: '0 auto' }}
            >
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  className="faq-item"
                  variants={itemVariants}
                  style={{
                    background: 'var(--white)',
                    borderRadius: '15px',
                    marginBottom: '1.5rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    border: '1px solid var(--light-gray)',
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <div style={{
                    padding: '2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}>
                    <h3 style={{
                      color: 'var(--black)',
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      lineHeight: '1.4',
                      margin: 0,
                      flex: 1
                    }}>
                      Q{index + 1}: {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: activeIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        fontSize: '1.5rem',
                        color: 'var(--black)',
                        marginLeft: '1rem'
                      }}
                    >
                      ▼
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '0 2rem 2rem 2rem' }}>
                          {Array.isArray(faq.answer) ? (
                            <div style={{ color: 'var(--text-dark)', lineHeight: '1.7' }}>
                              <strong style={{ color: 'var(--blue)', marginBottom: '0.5rem', display: 'block' }}></strong>
                              {faq.answer.map((item, itemIndex) => (
                                <p key={itemIndex} style={{ 
                                  marginBottom: '0.8rem',
                                  paddingLeft: '1rem',
                                  fontSize: '1.05rem'
                                }}>
                                  <strong style={{ color: 'var(--blue)' }}>
                                    {item.split(':')[0]}:
                                  </strong>
                                  {item.split(':')[1]}
                                </p>
                              ))}
                            </div>
                          ) : (
                            <p style={{ 
                              color: 'var(--text-dark)', 
                              lineHeight: '1.7',
                              fontSize: '1.05rem',
                              margin: 0
                            }}>
                              <strong style={{ color: 'var(--blue)' }}></strong> {faq.answer}
                            </p>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* Contact CTA */}
            <motion.div 
              style={{
                textAlign: 'center',
                marginTop: '4rem',
                padding: '3rem 2rem',
                background: 'var(--gold)',
                borderRadius: '20px',
                color: 'var(--white)'
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

export default FAQs
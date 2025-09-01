import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import Hero from '../components/Hero'
import Features from '../components/Features'
import ServicesPreview from '../components/ServicesPreview'
import CTA from '../components/CTA'

function Home() {
  const { scrollY } = useScroll()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <motion.div 
      className={`home-page ${isLoaded ? 'loaded' : ''}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Features />
      <ServicesPreview />
      <CTA />
    </motion.div>
  )
}

export default Home
import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {
  const location = useLocation()

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

  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <img src="/dragon floor works logo.png" alt="Dragon Floor Works" className="footer-logo" />
            <p>Your trusted partner for premium flooring solutions. Quality craftsmanship, exceptional service.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>Services</a></li>
              <li><a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-item">
              <span className="contact-icon"></span>
              <a href="mailto:dragonfloors.info@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                dragonfloors.info@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"></span>
              <a href="tel:0420522182" style={{ color: 'inherit', textDecoration: 'none' }}>
                0420 522 182
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"></span>
              <a 
                href="https://www.instagram.com/dragon_floor_works?igsh=MXI4dDVveXk5amtieA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'inherit', textDecoration: 'none' }}
              >
                @dragon_floor_works
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          
          <p>&copy; {currentYear} Dragon Floor Works. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
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
    closeMenu()
  }

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
        >
          <img src="/dragon floor works logo.png" alt="Dragon Floor Works" className="logo-image" />
        </motion.div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">
              Why Us <span className="dropdown-arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link to="/faqs" onClick={closeMenu}>FAQs</Link></li>
              <li><Link to="/warranty" onClick={closeMenu}>Warranty</Link></li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle">
              Our Services <span className="dropdown-arrow">▼</span>
            </a>
            <ul className="dropdown-menu">
              <li><Link to="/services/plain-epoxy" onClick={closeMenu}>Plain Epoxy / Ultra Flakes</Link></li>
              <li><Link to="/services/metallic-epoxy" onClick={closeMenu}>Metallic Epoxy</Link></li>
              <li><Link to="/services/grind-seal" onClick={closeMenu}>Grind and Seal</Link></li>
              <li><Link to="/services/concrete-polish" onClick={closeMenu}>Concrete Polish</Link></li>
              <li><Link to="/services/driveway-coating" onClick={closeMenu}>Driveway Coating and Wash</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/color-palette" className={`nav-link ${location.pathname === '/color-palette' ? 'active' : ''}`} onClick={closeMenu}>
              Color Palette
            </Link>
          </li>
        </ul>

        <motion.div 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navigation
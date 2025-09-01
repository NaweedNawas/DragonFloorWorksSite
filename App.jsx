import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import FAQs from './pages/FAQs'
import Warranty from './pages/Warranty'
import PlainEpoxy from './pages/PlainEpoxy'
import MetallicEpoxy from './pages/MetallicEpoxy'
import GrindSeal from './pages/GrindSeal'
import ConcretePolish from './pages/ConcretePolish'
import DrivewayCoating from './pages/DrivewayCoating'
import ColorPalette from './pages/ColorPalette'
import Contact from './pages/Contact'
import Quote from './pages/Quote'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <motion.div 
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/services/plain-epoxy" element={<PlainEpoxy />} />
            <Route path="/services/metallic-epoxy" element={<MetallicEpoxy />} />
            <Route path="/services/grind-seal" element={<GrindSeal />} />
            <Route path="/services/concrete-polish" element={<ConcretePolish />} />
            <Route path="/services/driveway-coating" element={<DrivewayCoating />} />
            <Route path="/color-palette" element={<ColorPalette />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </Router>
  )
}

export default App
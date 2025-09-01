import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

const QuoteForm = ({ formTitle = "Get a Free Quote" }) => {
  const form = useRef()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    size: '',
    service: '',
    comments: ''
  })
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    "Plain Epoxy / Ultra Flakes",
    "Metallic Epoxy",
    "Grind and Seal",
    "Concrete Polish",
    "Driveway Coating and Wash"
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Your EmailJS credentials
    const serviceID = 'service_eqbfw5h'
    const templateID = 'template_fqnxdem'
    const publicKey = 'vAOFKBH89WYGSgYqk'

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log(result.text)
        setMessage('Your quote request has been sent successfully! We\'ll get back to you soon.')
        setMessageType('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          size: '',
          service: '',
          comments: ''
        })
      }, (error) => {
        console.log(error.text)
        setMessage('Failed to send quote request. Please try again later.')
        setMessageType('error')
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <motion.div 
      className="quote-form-container"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <h3 className="form-title">{formTitle}</h3>
      <form ref={form} onSubmit={handleSubmit} className="quote-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">Size (sqm)</label>
            <input
              type="number"
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
              min="1"
              placeholder="e.g. 50"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="service">Select Service</label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a Service --</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments (Optional)</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            rows="3"
            placeholder="Tell us more about your project..."
          ></textarea>
        </div>
        <motion.button 
          type="submit" 
          className="btn btn-primary form-submit-btn"
          disabled={isSubmitting}
          whileHover={!isSubmitting ? { scale: 1.02, y: -1 } : {}}
          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {isSubmitting ? 'Sending...' : 'Submit Quote Request'}
        </motion.button>
        {message && (
          <motion.p 
            className={`form-message ${messageType}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {message}
          </motion.p>
        )}
      </form>
    </motion.div>
  )
}

export default QuoteForm
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi'
import RippleButton from './RippleButton.jsx'
import '../styles/contact.css'

const info = [
  { icon: <FiMail />, label: 'Email', value: 'dinaaz23khan@gmail.com', href: 'mailto:dinaaz@example.com' },
  { icon: <FiLinkedin />, label: 'LinkedIn', value: 'linkedin.com/in/dinaaz-khan-39aa3a268', href: 'https://www.linkedin.com/in/dinaaz-khan-39aa3a268/' },
  { icon: <FiGithub />, label: 'GitHub', value: 'github.com/dinaaz-khan', href: 'https://github.com/dinaaz-khan' },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sent')
    setTimeout(() => setStatus('idle'), 3500)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow mono">~/contact --new</span>
          <h2 className="section-title">Let's talk</h2>
          <p className="section-sub">
            Have an internship, role or project in mind? My inbox is open —
            I usually reply within a day or two.
          </p>

          <ul className="contact-info-list">
            {info.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  <span className="contact-icon">{item.icon}</span>
                  <span>
                    <strong>{item.label}</strong>
                    <span className="contact-value">{item.value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          className="contact-form card"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me a bit about the opportunity..." required />
          </div>

          <RippleButton type="submit" className="btn btn-primary form-submit">
            <FiSend /> {status === 'sent' ? 'Message sent' : 'Send message'}
          </RippleButton>
        </motion.form>
      </div>
    </section>
  )
}

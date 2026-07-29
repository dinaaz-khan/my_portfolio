import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiDownload } from 'react-icons/fi'
import NetworkBackground from './NetworkBackground.jsx'
import RippleButton from './RippleButton.jsx'
import '../styles/hero.css'

const roles = ['Frontend Developer', 'Cybersecurity Enthusiast', 'Computer Engineering Student', 'Linux & Networking Learner']

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    const speed = deleting ? 40 : 80
    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), 1200)
      } else {
        const next = current.slice(0, text.length - 1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setRoleIndex((i) => (i + 1) % roles.length)
        }
      }
    }, speed)
    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" className="hero">
      <NetworkBackground />

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow mono">whoami</span>
          <h1 className="hero-name">
            Hi, I'm <span className="grad-text">Dinaaz Khan</span>
          </h1>
          <div className="hero-role mono">
            <span>&gt; </span>{text}<span className="cursor-blink">_</span>
          </div>
          <p className="hero-intro">
            I build  accessible web interfaces and enjoy pulling apart networks
            to understand how they really work. Currently sharpening my skills in
            React, Linux and network security.
          </p>

          <div className="hero-actions">
            <RippleButton as="a" href="#contact" className="btn btn-primary">
              <FiMail /> Get in touch
            </RippleButton>
            <RippleButton as="a" href="/resume.pdf" download className="btn btn-outline">
              <FiDownload /> Resume
            </RippleButton>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/dinaaz-khan" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/dinaaz-khan-39aa3a268/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="hero-photo-ring">
            <div className="hero-photo">
              <img src="/profile.jpg" alt="Dinaaz Khan" className="hero-photo-img" />
            </div>
          </div>
          <div className="hero-badge mono">status: open_to_contribute

          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <FiArrowDown />
      </motion.a>
    </section>
  )
}

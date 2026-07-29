import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/navbar.css'

const links = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Certifications', '#certifications'],
  ['Achievements', '#achievements'],
  ['GitHub', '#github'],
  ['Contact', '#contact'],
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
      const scrollPosition = window.scrollY + window.innerHeight / 3
      const currentSection = links.reduce((active, [, href]) => {
        const section = document.querySelector(href)
        if (!section) return active
        const offsetTop = section.offsetTop
        return scrollPosition >= offsetTop ? href : active
      }, activeLink)
      setActiveLink(currentSection)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [activeLink])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="brand mono">
          <span className="brand-prompt">~/</span>dinaaz<span className="grad-text">.dev</span>
        </a>

        <nav className="nav-links">
          {links.map(([label, href]) => (
            <a key={href} href={href} className={activeLink === href ? 'active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{ display: 'flex' }}
              >
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </motion.span>
            </AnimatePresence>
          </button>

          <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
            <FiMenu />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
              <FiX />
            </button>
            <nav>
              {links.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  className={activeLink === href ? 'active' : ''}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

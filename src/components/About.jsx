import { motion } from 'framer-motion'
import { FiCode, FiShield, FiWifi, FiTerminal, FiGlobe, FiTrendingUp } from 'react-icons/fi'
import '../styles/about.css'

const highlights = [
  { icon: <FiCode />, title: 'Computer Engineering Student', text: 'Building a strong foundation in data structures, systems and software engineering.' },
  { icon: <FiGlobe />, title: 'Frontend Developer', text: 'Crafting responsive, accessible interfaces with React, JavaScript and modern CSS.' },
  { icon: <FiShield />, title: 'Cybersecurity Enthusiast', text: 'Exploring how systems break so I can help build ones that don\u2019t.' },
  { icon: <FiWifi />, title: 'Networking & Linux', text: 'Comfortable in the terminal, simulating topologies in GNS3 and tuning Linux boxes.' },
  { icon: <FiTerminal />, title: 'Continuous Learner', text: 'Always shipping something new — a project, a CTF, or a concept I hadn\u2019t tried before.' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <span className="eyebrow mono">~/about</span>
        <h2 className="section-title">A bit about how I work</h2>
        <p className="section-sub">
          I'm a Computer Engineering student who splits time between building
          interfaces on the frontend and pulling apart networks on the backend
          of that curiosity.
        </p>

        <div className="about-grid">
          {highlights.map((h, i) => (
            <motion.div
              className="about-card card"
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="about-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

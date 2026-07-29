import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import '../styles/certifications.css'

const certs = [
  { name: 'Networking Basics', issuer: 'Cisco Networking Academy', year: '2024' },
  { name: 'Python for Everybody', issuer: 'Coursera', year: '2024' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', year: '2023' },
  { name: 'React — The Complete Guide', issuer: 'Udemy', year: '2024' },
  { name: 'Git & GitHub Essentials', issuer: 'Online Course', year: '2023' },
  { name: 'SQL for Data Analysis', issuer: 'Online Course', year: '2024' },
]

export default function Certifications() {
  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <span className="eyebrow mono">~/certifications --verified</span>
        <h2 className="section-title">Certifications</h2>
        <p className="section-sub">Courses and credentials I've completed along the way.</p>

        <div className="cert-grid">
          {certs.map((c, i) => (
            <motion.div
              className="cert-card"
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ rotateX: -4, rotateY: 4 }}
            >
              <div className="cert-icon"><FiAward /></div>
              <h3>{c.name}</h3>
              <p className="cert-issuer">{c.issuer}</p>
              <span className="mono cert-year">{c.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import '../styles/photo-section.css'

export default function PhotoSection() {
  return (
    <section id="photo" className="section photo-section">
      <div className="container">
        <span className="eyebrow mono">~/gallery --show</span>
        <h2 className="section-title">Moments</h2>
        <p className="section-sub">
          A simple photo section to showcase a personal or creative snapshot.
        </p>

        <motion.div
          className="photo-card card"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80"
            alt="Portfolio featured photo"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}

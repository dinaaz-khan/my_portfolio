import { motion } from 'framer-motion'
import { FiAward, FiLayers, FiStar } from 'react-icons/fi'
import AnimatedCounter from './AnimatedCounter.jsx'
import '../styles/achievements.css'

const stats = [
  {
    value: 5,
    suffix: '+',
    label: 'Projects Completed',
    desc: 'Real-world apps shipped with polished UI and responsive behavior.',
    icon: <FiAward />,
  },
  {
    value: 12,
    suffix: '+',
    label: 'Technologies Learned',
    desc: 'Tools, frameworks and platforms I’ve added to my toolkit.',
    icon: <FiLayers />,
  },
  {
    value: 20,
    suffix: '+',
    label: 'GitHub Contributions',
    desc: 'Public commits, issues and PRs across personal and open source work.',
    icon: <FiStar />,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <span className="eyebrow mono">~/achievements --summary</span>
        <h2 className="section-title">By the numbers</h2>
        <p className="section-sub">A quick snapshot of what I've been building and learning.</p>

        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              className="stat-card card"
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-number">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <p className="stat-label">{s.label}</p>
              <p className="stat-desc">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

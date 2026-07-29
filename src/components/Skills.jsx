import { motion } from 'framer-motion'
import { FiCode, FiTerminal, FiShield, FiGitBranch, FiPenTool } from 'react-icons/fi'
import '../styles/skills.css'

const categories = [
  {
    title: 'Frontend',
    icon: <FiCode />,
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 82 },
      { name: 'React', level: 78 },
    ],
  },
  {
    title: 'Programming',
    icon: <FiTerminal />,
    skills: [
      { name: 'C', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'Python', level: 72 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    title: 'Networking & Cybersecurity',
    icon: <FiShield />,
    skills: [
      { name: 'Linux', level: 78 },
      { name: 'GNS3', level: 68 },
      { name: 'Networking Fundamentals', level: 74 },
    ],
  },
  {
    title: 'Version Control',
    icon: <FiGitBranch />,
    skills: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 84 },
    ],
  },
  {
    title: 'Design Tools',
    icon: <FiPenTool />,
    skills: [
      { name: 'Figma', level: 76 },
      { name: 'Canva', level: 85 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <span className="eyebrow mono">~/skills --list</span>
        <h2 className="section-title">What I work with</h2>
        <p className="section-sub">
          A toolkit spanning frontend development, systems programming and
          networking — grouped the way I actually reach for them.
        </p>

        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.title}
              className="skill-category card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: ci * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="skill-cat-head">
                <span className="skill-cat-icon">{cat.icon}</span>
                <h3>{cat.title}</h3>
              </div>

              {cat.skills.map((s) => (
                <div className="skill-row" key={s.name}>
                  <div className="skill-row-label">
                    <span>{s.name}</span>
                    <span className="mono skill-level">{s.level}%</span>
                  </div>
                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

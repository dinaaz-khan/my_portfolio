import { motion } from 'framer-motion'
import { FiBriefcase, FiUsers, FiHeart } from 'react-icons/fi'
import '../styles/experience.css'

const items = [
  {
    icon: <FiBriefcase />,
    tag: 'Internship',
    title: 'Intern – SpaceProbe',
    org: 'Research support for projects',
    date: '2026',
    desc: 'Assisting in research related to projects and contributing to development support tasks.',
  },
  {
    icon: <FiHeart />,
    tag: 'Internship',
    title: 'Intern – Arvanta Governance',
    org: 'UI/UX and coordination',
    date: '2026',
    desc: 'Working on UI/UX and coordination tasks while supporting team workflows.',
  },
  {
    icon: <FiHeart />,
    tag: 'Internship',
    title: 'Intern – CoreGen',
    org: 'UI/UX and coordination',
    date: '2026',
    desc: 'Working on UI/UX and coordination tasks while supporting team workflows.'
    
  },
{
      icon: <FiHeart />,
    tag: 'Internship',
    title: 'Part-Time – CoreGen',
    org: 'Digital Marketing & Design',
    date: '2026',
    desc: 'Working on digital marketing and design tasks .',
  },
  {
    icon: <FiUsers />,
    tag: 'Community',
    title: 'Hacktoberfest 2025 Contributor',
    org: 'Open source contributions',
    date: '2025',
    desc: 'Successfully merged 8 pull requests and contributed to multiple collaborative projects.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <span className="eyebrow mono">~/experience --log</span>
        <h2 className="section-title">Experience</h2>
        <p className="section-sub">
          A snapshot of the internships and contributions that have shaped my growth.
        </p>

        <div className="timeline">
          {items.map((item, i) => (
            <motion.div
              className="timeline-item"
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="timeline-dot">{item.icon}</div>
              <div className="timeline-content card">
                <span className="timeline-tag mono">{item.tag} · {item.date}</span>
                <h3>{item.title}</h3>
                <p className="timeline-org">{item.org}</p>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

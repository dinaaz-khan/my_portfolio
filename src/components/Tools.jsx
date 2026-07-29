import { motion } from 'framer-motion'
import { FiBarChart2, FiPenTool, FiLayers, FiGlobe, FiMonitor } from 'react-icons/fi'
import '../styles/tools.css'

const tools = [
  {
    name: 'React & Vite',
    desc: 'Building polished interfaces with component-driven development and fast iteration.',
    icon: <FiMonitor />,
  },
  {
    name: 'Figma & UI Design',
    desc: 'Turning ideas into clear layouts, wireframes, and visual direction.',
    icon: <FiPenTool />,
  },
  {
    name: 'Google Ads',
    desc: 'Creating and managing ad campaigns with a strong focus on outreach and performance.',
    icon: <FiBarChart2 />,
  },
  {
    name: 'Web Strategy',
    desc: 'Blending product thinking, content structure, and user experience into cohesive launches.',
    icon: <FiLayers />,
  },
  {
    name: 'Analytics & Insights',
    desc: 'Tracking user behavior and campaign performance to improve decisions and outcomes.',
    icon: <FiGlobe />,
  },
]

export default function Tools() {
  return (
    <section id="tools" className="section tools">
      <div className="container">
        <span className="eyebrow mono">~/tools --list</span>
        <h2 className="section-title">Tools I work with</h2>
        <p className="section-sub">
          A practical mix of development, design, and marketing tools that support my work.
        </p>

        <div className="tools-grid">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="tool-card card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="tool-icon">{tool.icon}</div>
              <h3>{tool.name}</h3>
              <p>{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

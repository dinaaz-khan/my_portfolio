import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import '../styles/projects.css'

const projects = [
  {
      name: 'Porsche Website',
      desc: 'A stylish automotive-inspired web experience with immersive visuals and polished responsive layouts.',
      features: ['Immersive landing experience', 'Responsive storytelling layout', 'High-end visual polish'],
      tech: ['React', 'CSS3', 'JavaScript'],
      liveUrl: 'https://porsche-app.vercel.app/',
    },

  {
    name: 'Jewellery Website',
    desc: 'An elegant e-commerce style storefront concept for a jewellery brand with product catalog and cart flow.',
    features: ['Product catalog & filters', 'Cart & checkout flow', 'Responsive product gallery'],
    tech: ['React', 'CSS3', 'JavaScript'],
    liveUrl: 'https://jewellery-app-phmg.vercel.app/',
  },
  {
    name: 'College Analytics Dashboard',
    desc: 'A dashboard visualizing academic and attendance data for faculty with interactive charts.',
    features: ['Interactive charts', 'Role-based views', 'Exportable reports'],
    tech: ['React', 'JavaScript', 'SQL', 'Chart.js'],
    liveUrl: 'https://class-analytics-app.vercel.app/',
  },
  {
    name: 'Link & Loop',
    desc: 'A social-utility web app concept for connecting students in the same courses and study groups.',
    features: ['Group creation & discovery', 'Real-time messaging UI', 'Profile matching'],
    tech: ['React', 'JavaScript', 'CSS3'],
    liveUrl: '#',
  },
  {
    name: 'E-Police Management System',
    desc: 'A digital record-management system concept for handling FIRs, case tracking and officer records.',
    features: ['Case & FIR tracking', 'Role-based access', 'Searchable records database'],
    tech: ['Python', 'SQL', 'HTML', 'CSS3'],
    liveUrl: '#',
  },
   {
    name: 'Weather App',
    desc: 'A responsive weather application with live forecasts, geolocation and a clean, data-first UI.',
    features: ['Real-time weather data', 'Geolocation support', '5-day forecast view'],
    tech: ['React', 'JavaScript', 'REST API', 'CSS3'],
    liveUrl: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <span className="eyebrow mono">~/projects --all</span>
        <h2 className="section-title">Things I've built</h2>
        <p className="section-sub">
          A mix of frontend-heavy builds and full-stack concepts — each one
          taught me something I didn't know going in.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              className="project-card card"
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="project-thumb">
                <span className="mono">{p.name.split(' ').map((w) => w[0]).join('').slice(0, 3)}</span>
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="project-desc">{p.desc}</p>

                <ul className="project-features">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>

                <div className="project-tech">
                  {p.tech.map((t) => <span key={t} className="mono">{t}</span>)}
                </div>

                <div className="project-links">
                  <a
                    href={p.liveUrl}
                    className="btn btn-primary btn-sm"
                    target={p.liveUrl !== '#' ? '_blank' : undefined}
                    rel={p.liveUrl !== '#' ? 'noreferrer' : undefined}
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

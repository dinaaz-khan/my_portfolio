import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext.jsx'
import '../styles/github.css'

const USERNAME = 'dinaaz-khan'

export default function GithubStats() {
  const { theme } = useTheme()
  const cardTheme = theme === 'dark' ? 'radical' : 'default'

  return (
    <section id="github" className="section github">
      <div className="container">
        <span className="eyebrow mono">~/github --stats</span>
        <h2 className="section-title">
          <FiGithub style={{ marginRight: 10, verticalAlign: -3 }} />
          GitHub activity
        </h2>
        <p className="section-sub">
          Live stats pulled straight from my GitHub profile.
        </p>

        <div className="github-grid">
          <motion.img
            className="github-img wide card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            src={`https://github-readme-stats.vercel.app/api?username=${USERNAME}&show_icons=true&theme=${cardTheme}&hide_border=true&bg_color=00000000`}
            alt="GitHub stats"
            loading="lazy"
          />
          <motion.img
            className="github-img card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${USERNAME}&layout=compact&theme=${cardTheme}&hide_border=true&bg_color=00000000`}
            alt="Top languages"
            loading="lazy"
          />
          <motion.img
            className="github-img wide card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            src={`https://github-readme-streak-stats.herokuapp.com/?user=${USERNAME}&theme=${cardTheme === 'radical' ? 'radical' : 'default'}&hide_border=true&background=00000000`}
            alt="GitHub streak stats"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

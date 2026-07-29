import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import '../styles/footer.css'

const links = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="mono">~/</span>dinaaz<span className="grad-text">.dev</span>
          <p>Frontend developer &amp; cybersecurity enthusiast, building things that work.</p>
        </div>

        <div className="footer-links">
          <h4>Quick links</h4>
          <ul>
            {links.map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-social">
          <h4>Elsewhere</h4>
          <div className="footer-icons">
            <a href="https://github.com/dinaaz-khan" target="_blank" rel="noreferrer" aria-label="GitHub"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/dinaaz-khan-39aa3a268/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="mailto:dinaaz23khan@gmail.com" aria-label="Email"><FiMail /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dinaaz Khan. All rights reserved.</p>
      </div>
    </footer>
  )
}

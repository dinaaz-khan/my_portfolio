import { motion } from 'framer-motion'
import '../styles/education.css'

const education = [
  {
    degree: 'B.E. in Computer Engineering',
    school: 'Your College Name',
    duration: '2022 — 2026',
    cgpa: 'CGPA: 8.5 / 10',
    courses: ['Data Structures & Algorithms', 'Computer Networks', 'Operating Systems', 'Database Management Systems', 'Web Technologies'],
  },
  {
    degree: 'Higher Secondary (Science)',
    school: 'Your Junior College Name',
    duration: '2020 — 2022',
    cgpa: 'Percentage: 89%',
    courses: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
  },
]

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <span className="eyebrow mono">~/education --history</span>
        <h2 className="section-title">Academic background</h2>
        <p className="section-sub">The formal path that got me here.</p>

        <div className="edu-list">
          {education.map((e, i) => (
            <motion.div
              className="edu-item card"
              key={e.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="edu-head">
                <h3>{e.degree}</h3>
                <span className="mono edu-duration">{e.duration}</span>
              </div>
              <p className="edu-school">{e.school}</p>
              <p className="edu-cgpa mono">{e.cgpa}</p>
              <div className="edu-courses">
                {e.courses.map((c) => <span key={c}>{c}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const lines = [
  'establishing connection...',
  'authenticating user: dinaaz',
  'loading modules: react, framer-motion',
  'rendering interface'
]

export default function Loader() {
  const [line, setLine] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setLine((l) => (l < lines.length - 1 ? l + 1 : l))
    }, 350)
    return () => clearInterval(id)
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        className="loader-screen"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="loader-text mono">$ {lines[line]}</div>
        <div className="loader-bar">
          <motion.div
            className="loader-bar-fill"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

import { useEffect, useRef } from 'react'

export default function NetworkBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let width, height, nodes, packets, raf

    const rootStyles = getComputedStyle(document.documentElement)

    const getColor = (name) => {
      const el = document.documentElement
      return getComputedStyle(el).getPropertyValue(name).trim()
    }

    const resize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio
      height = canvas.height = canvas.offsetHeight * devicePixelRatio
    }

    const initNodes = () => {
      const count = window.innerWidth < 700 ? 16 : 30
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.25 * devicePixelRatio,
        r: (Math.random() * 1.5 + 1.2) * devicePixelRatio,
      }))
      packets = Array.from({ length: 10 }, () => ({
        progress: Math.random(),
        speed: (Math.random() * 0.002 + 0.0015),
        a: Math.floor(Math.random() * nodes.length),
        b: Math.floor(Math.random() * nodes.length),
      }))
    }

    const step = () => {
      ctx.clearRect(0, 0, width, height)
      const wire = getColor('--wire')
      const node = getColor('--node')

      nodes.forEach((n) => {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      })

      const maxDist = 160 * devicePixelRatio
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < maxDist) {
            ctx.strokeStyle = wire
            ctx.globalAlpha = 1 - dist / maxDist
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }
      ctx.globalAlpha = 1

      nodes.forEach((n) => {
        ctx.fillStyle = node
        ctx.beginPath()
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx.fill()
      })

      packets.forEach((p) => {
        p.progress += p.speed
        if (p.progress >= 1) {
          p.progress = 0
          p.a = Math.floor(Math.random() * nodes.length)
          p.b = Math.floor(Math.random() * nodes.length)
        }
        const na = nodes[p.a]
        const nb = nodes[p.b]
        if (!na || !nb) return
        const x = na.x + (nb.x - na.x) * p.progress
        const y = na.y + (nb.y - na.y) * p.progress
        ctx.fillStyle = node
        ctx.beginPath()
        ctx.arc(x, y, 2 * devicePixelRatio, 0, Math.PI * 2)
        ctx.fill()
      })

      raf = requestAnimationFrame(step)
    }

    resize()
    initNodes()
    step()

    const onResize = () => { resize(); initNodes() }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />
}

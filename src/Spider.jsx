import { useEffect, useRef } from 'react'

export default function Spider() {
  const ref = useRef()

  useEffect(() => {
    const c = ref.current
    const ctx = c.getContext('2d')
    let W, H, nodes = [], raf
    const mouse = { x: -999, y: -999 }

    const resize = () => {
      W = c.width = c.offsetWidth
      H = c.height = c.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const mk = () => {
      nodes = []
      for (let i = 0; i < 80; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        })
      }
    }
    mk()

    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      nodes.forEach(n => {
        n.x += n.vx; n.y += n.vy
        if (n.x < 0 || n.x > W) n.vx *= -1
        if (n.y < 0 || n.y > H) n.vy *= -1
        const dx = mouse.x - n.x, dy = mouse.y - n.y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 120) { n.x += dx * 0.018; n.y += dy * 0.018 }
      })
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 130) {
            const a = (1 - d / 130) * 0.55
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0,229,160,${a})`
            ctx.shadowBlur = 2
            ctx.shadowColor = 'rgba(0,229,160,0.4)'
            ctx.lineWidth = 0.6
            ctx.stroke()
          }
        }
      }
      nodes.forEach(n => {
        ctx.beginPath()
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,229,160,0.55)'
        ctx.fill()
      })
      raf = requestAnimationFrame(draw)
    }
    draw()

    const mm = e => {
      const r = c.getBoundingClientRect()
      mouse.x = e.clientX - r.left
      mouse.y = e.clientY - r.top
    }
    window.addEventListener('mousemove', mm)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', mm)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%', opacity: 0.4,
      }}
    />
  )
}

import { useEffect, useRef } from 'react'

// Soft accent glow + ring + dot that follow the mouse (hidden on touch devices)
export default function Cursor() {
  const glow = useRef(null)
  const ring = useRef(null)
  const dot = useRef(null)

  useEffect(() => {
    if (matchMedia('(pointer:coarse)').matches) return
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, raf
    const move = (e) => {
      x = e.clientX; y = e.clientY
      document.body.classList.add('m')
      if (dot.current) dot.current.style.transform = `translate(${x}px,${y}px)`
      const t = e.target.closest && e.target.closest('a,button')
      if (ring.current) ring.current.classList.toggle('link', !!t)
      if (glow.current) glow.current.classList.toggle('hot', !!t)
    }
    const tick = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px)`
      if (glow.current) glow.current.style.transform = `translate(${rx}px,${ry}px)`
      raf = requestAnimationFrame(tick)
    }
    const leave = () => document.body.classList.remove('m')
    addEventListener('mousemove', move)
    document.addEventListener('mouseleave', leave)
    raf = requestAnimationFrame(tick)
    return () => {
      removeEventListener('mousemove', move)
      document.removeEventListener('mouseleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div className="glow" ref={glow}><i /></div>
      <div className="ring" ref={ring} />
      <div className="dot" ref={dot} />
    </>
  )
}

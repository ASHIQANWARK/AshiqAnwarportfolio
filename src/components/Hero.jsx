
import { useEffect, useState } from 'react'
import { PROFILE, WORDS, STATS } from '../data/content.js'

export default function Hero() {
  const [wi, setWi] = useState(0)
  const [photoFailed, setPhotoFailed] = useState(false)
  const [imageVisible, setImageVisible] = useState(false)

  useEffect(() => {
    const t = setInterval(() => {
      setWi((i) => (i + 1) % WORDS.length)
    }, 2600)

    const reveal = requestAnimationFrame(() => {
      setImageVisible(true)
    })

    return () => {
      clearInterval(t)
      cancelAnimationFrame(reveal)
    }
  }, [])

  const onMove = (e) => {
    const el = e.currentTarget
    const r = el.getBoundingClientRect()

    el.style.setProperty(
      '--mx',
      ((e.clientX - r.left) / r.width - 0.5).toFixed(3)
    )
    el.style.setProperty(
      '--my',
      ((e.clientY - r.top) / r.height - 0.5).toFixed(3)
    )
  }

  return (
    <header
      className={`hero ${imageVisible ? 'hero-loaded' : ''}`}
      id="top"
      aria-label="Introduction"
      onMouseMove={onMove}
    >
      <div className="w hg">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <div className="chip">
            <i /> Immediate joiner · Open to roles
          </div>

          <div className="hi">
            Hello, I'm {PROFILE.first}
          </div>

          <h1 className="hero-title">
            <span>I build</span>

            <span className="rot" aria-live="polite">
              <span key={wi}>{WORDS[wi]}</span>
            </span>

            <span className="o">&amp; more.</span>
          </h1>

          <div className="who">
            {PROFILE.role} · React · Next.js · MERN · Django · Angular
          </div>

          <p className="sub">
            2+ years shipping <b>10+ production websites</b> and web apps —
            responsive, fast and SEO-ready, from first commit to deployment
            on Vercel. Based in Bengaluru.
          </p>

          <div className="bt">
            <a className="btn p" href="#work">
              See my work <span aria-hidden="true">↗</span>
            </a>

            <a className="btn g" href={PROFILE.resume} download>
              Resume <span aria-hidden="true">↓</span>
            </a>
          </div>

          <div className="stats">
            {STATS.map(([b, s]) => (
              <div key={s}>
                <b>{b}</b>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="pt">
          <div className="image-glow" />

          <div className="fr">
            <div className="image-frame">
              {!photoFailed ? (
                <img
                  src={PROFILE.photo}
                  alt={`Portrait of ${PROFILE.name}`}
                  onError={() => setPhotoFailed(true)}
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="mono" aria-hidden="true">
                  {PROFILE.initials}
                </div>
              )}
            </div>

            <div className="loc">
              <i /> Bengaluru · Available now
            </div>
          </div>

          <svg
            className="badge"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <defs>
              <path
                id="cp"
                d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0"
              />
            </defs>
            <text>
              <textPath href="#cp">
                Frontend · Backend · Deploy · SEO ·
              </textPath>
            </text>
          </svg>

          <span className="stk">
            Full Stack ✦ 2+ yrs
          </span>
        </div>

      </div>
    </header>
  )
}

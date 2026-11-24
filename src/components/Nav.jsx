import { useEffect, useState } from 'react'
import { PROFILE } from '../data/content.js'

const THEMES = [
  ['cobalt', 'Tech Slate & Cobalt', '#5B8CFF'],
  ['mustard', 'Editorial Dark & Mustard', '#E8B94B'],
]

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'cobalt'
}

export default function Nav() {
  const [theme, setTheme] = useState(currentTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try { localStorage.setItem('theme', theme) } catch (e) { /* storage unavailable */ }
  }, [theme])

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('prog')
    const on = () => {
      const h = document.documentElement.scrollHeight - innerHeight
      if (bar) bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`
    }
    on()
    addEventListener('scroll', on, { passive: true })
    return () => removeEventListener('scroll', on)
  }, [])

  return (
    <>
      <div className="prog" id="prog" />
      <nav className="nav">
        <div className="w">
          <a className="logo" href="#top">{PROFILE.initials}<b>.</b></a>
          <div className="nl">
            <a href="#about">About</a>
            <a href="#stack">Stack</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <div className="sw" role="group" aria-label="Colour theme">
              {THEMES.map(([id, label, color]) => (
                <button
                  key={id}
                  className={theme === id ? 'on' : ''}
                  style={{ '--c': color }}
                  onClick={() => setTheme(id)}
                  aria-label={label}
                  aria-pressed={theme === id}
                  title={label}
                />
              ))}
            </div>
            <a className="pill" href="#contact">Let's talk</a>
          </div>
        </div>
      </nav>
    </>
  )
}

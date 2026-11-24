import { PROFILE } from '../data/content.js'

export default function Contact() {
  const mail = `mailto:${PROFILE.email}?subject=Hello%20Ashiq`
  return (
    <section id="contact">
      <div className="w">
        <a className="say" href={mail} aria-label={`Email ${PROFILE.first}`}>
          <small>Have a role or project in mind?</small>
          <h2>Say <span>hello</span> →</h2>
        </a>
        <div className="cl">
          <a href={mail}>{PROFILE.email}</a>
          <a href={PROFILE.phoneHref}>{PROFILE.phone}</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={PROFILE.resume} download>Download résumé</a>
          <span>{PROFILE.location}</span>
        </div>
        <p className="note">© {new Date().getFullYear()} {PROFILE.name} · Built with React + Vite</p>
      </div>
    </section>
  )
}

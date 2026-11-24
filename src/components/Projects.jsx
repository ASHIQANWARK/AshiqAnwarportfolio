import { FEATURED, PROJECTS, PROJECT_TECH } from '../data/content.js'

function Browser({ name }) {
  return (
    <div className="bw" aria-hidden="true">
      <div className="bar2"><i /><i /><i /><em>{name}</em></div>
      <div className="bd"><s /><s /><s /><u /></div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="sec" id="work">
      <div className="w">
        <div className="sh rv">
          <div>
            <small>03 — Selected work</small>
            <h2>Live <em>projects</em></h2>
          </div>
          <p>One product I own end to end, plus {PROJECTS.length} websites built and deployed for the IncubeNation group.</p>
        </div>

        <div className="bento rv">
          <div className="pj feat">
            <div className="fr">
              <span className="star">Featured</span>
              <div className="fi">
                <small>{FEATURED.tag}</small>
                <h3>{FEATURED.t}</h3>
                <p>{FEATURED.d}</p>
                <div className="chips">{FEATURED.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
            </div>
          </div>

          {PROJECTS.map((p, i) => (
            <a className="pj" key={p.t} href={p.url} target="_blank" rel="noopener noreferrer">
              <div className="fr"><Browser name={p.t} /></div>
              <div className="ct">
                <b>{String(i + 2).padStart(2, '0')}</b>
                <div><strong>{p.t}</strong><small>{p.d}</small></div>
                <i aria-hidden="true">→</i>
              </div>
            </a>
          ))}
        </div>

        <div className="tech rv">
          <p className="lb2">Built with</p>
          <div className="chips">{PROJECT_TECH.map((t) => <span key={t}>{t}</span>)}</div>
        </div>
      </div>
    </section>
  )
}

import { SUMMARY, EDUCATION, CERTS, LANGUAGES, PROCESS } from '../data/content.js'

export default function About() {
  return (
    <section className="sec" id="about">
      <div className="w">
        <div className="sh rv">
          <div>
            <small>01 — About</small>
            <h2>Code, <em>shipped</em></h2>
          </div>
          <p>{SUMMARY}</p>
        </div>

        <div className="ab rv">
          <div>
            <h2>Education</h2>
            {EDUCATION.map((e) => (
              <div className="ed" key={e.t}>
                <div><b>{e.t}</b><small>{e.s}</small></div>
                <span>{e.y}</span>
              </div>
            ))}
            <p className="lb2" style={{ marginTop: 22 }}>Languages</p>
            <div className="chips">
              {LANGUAGES.map(([l, lv]) => <span key={l}>{l} · {lv}</span>)}
            </div>
          </div>

          <div>
            <h2>How I work</h2>
            {PROCESS.map(([n, h, p]) => (
              <div className="st" key={n}>
                <b>{n}</b>
                <i>{n === '01' ? '✎' : n === '02' ? '</>' : n === '03' ? '↗' : '⚡'}</i>
                <div><h4>{h}</h4><p>{p}</p></div>
              </div>
            ))}
          </div>

          <div className="rc">
            <div className="qt">
              <div>
                <span className="q">“</span>
                <span className="kk">Certifications</span>
                <ul className="cl2">
                  {CERTS.map((c) => <li key={c}>{c}</li>)}
                </ul>
              </div>
              <div className="by">
                <span className="sg">Ashiq</span>
                <small>Full Stack Developer<br />Bengaluru</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

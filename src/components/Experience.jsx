import { EXPERIENCE } from '../data/content.js'

export default function Experience() {
  return (
    <section className="sec" id="experience">
      <div className="w">
        <div className="sh rv">
          <div>
            <small>04 — Experience</small>
            <h2>Where I've <em>worked</em></h2>
          </div>
        </div>
        <div className="rv">
          {EXPERIENCE.map((x) => (
            <div className="xr" key={x.role}>
              <div className="xd">{x.date}</div>
              <div>
                <h3>{x.role}</h3>
                <p className="xo">{x.org}</p>
                <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

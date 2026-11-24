import { STACK } from '../data/content.js'

export default function Stack() {
  return (
    <section className="sec dw" id="stack">
      <div className="w">
        <div className="sh rv">
          <div>
            <small>02 — Toolbox</small>
            <h2>The <em>stack</em></h2>
          </div>
          <p>What I reach for to take a product from idea to a deployed, fast, searchable site.</p>
        </div>

        <div className="rv">
          {STACK.map((s) => (
            <div className="dr" key={s.n}>
              <b>{s.n}</b>
              <h3>{s.t}</h3>
              <div>
                <p>{s.d}</p>
                <div className="chips">{s.chips.map((c) => <span key={c}>{c}</span>)}</div>
              </div>
              <i aria-hidden="true">↗</i>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

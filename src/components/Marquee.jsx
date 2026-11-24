export default function Marquee({ items, repeat, outline }) {
  const spans = []
  for (let r = 0; r < repeat; r++) {
    items.forEach((t, i) => {
      spans.push(<span key={`${r}-${i}-t`}>{t}</span>)
      spans.push(<span key={`${r}-${i}-s`}>✦</span>)
    })
  }
  return (
    <div className={`mq${outline ? ' r' : ''}`} aria-hidden="true"><div>{spans}</div></div>
  )
}

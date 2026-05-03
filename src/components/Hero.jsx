import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">

        {/* Top line */}
        <div className="hero__eyebrow">
          <span className="section-label">Based in Tamil Nadu, India</span>
        </div>

        {/* Main display text — Bazil-style layered typography */}
        <div className="hero__type-block">
          <h1 className="hero__name">Selwyn<br />Jesudas</h1>
          <p className="hero__ghost-title" aria-hidden="true">Developer</p>
        </div>

        {/* Bottom row: subtitle + buttons */}
        <div className="hero__bottom">
          <p className="hero__subtitle">
            AI & Data Science Student<br />
            <span className="hero__subtitle--secondary">Web Developer · SKCET</span>
          </p>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('work')}>
              View Work
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </div>
        </div>

        {/* Horizontal rule */}
        <div className="hero__rule" />

        {/* Marquee strip */}
        <div className="hero__tape">
          <div className="hero__tape-inner">
            {['Python', 'React', 'JavaScript', 'Machine Learning', 'Data Science', 'HTML & CSS', 'Git', 'C', 'BLE / IoT', 'Python', 'React', 'JavaScript', 'Machine Learning', 'Data Science', 'HTML & CSS', 'Git', 'C', 'BLE / IoT'].map((item, i) => (
              <span key={i} className="hero__tape-item">
                {item} <span className="hero__tape-dot">·</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

import './Hero.css'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">

        {/* Eyebrow */}
        <div className="hero__eyebrow">
          <span className="section-label">Based in Tamil Nadu, India</span>
        </div>

        {/* Layered depth hero */}
        <div className="hero__stage">

          {/* Row 1 — "Selwyn" — z-index above photo */}
          <div className="hero__row hero__row--back">
            <h1 className="hero__name hero__name--line1">Selwyn</h1>
          </div>

          {/* Photo layer — sits between the two name rows */}
          <div className="hero__photo-layer">
            <img
              src="/Selwyn.webp"
              alt="Selwyn Jesudas"
              className="hero__photo"
              fetchpriority="high"
            />
            {/* Fade strip at the bottom to blend into page */}
            <div className="hero__photo-fade" />
          </div>

          {/* Row 2 — "Jesudas" — z-index below photo */}
          <div className="hero__row hero__row--front">
            <h1 className="hero__name hero__name--line2">Jesudas</h1>
            <p className="hero__ghost-title" aria-hidden="true">Developer</p>
          </div>
          
        </div>

        {/* Bottom row — subtitle + buttons */}
        <div className="hero__bottom">
          <div>
            <p className="hero__subtitle">AI & Data Science Student</p>
            <span className="hero__subtitle--secondary">Web Developer · SKCET</span>
          </div>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('work')}>
              View Work
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              Contact
            </button>
          </div>
        </div>

        {/* Rule */}
        <div className="hero__rule" />

        {/* Marquee */}
        <div className="hero__tape">
          <div className="hero__tape-inner">
            {['Python', 'React', 'JavaScript', 'Machine Learning', 'Data Science', 'HTML & CSS', 'Git', 'C', 'BLE / IoT',
              'Python', 'React', 'JavaScript', 'Machine Learning', 'Data Science', 'HTML & CSS', 'Git', 'C', 'BLE / IoT'].map((item, i) => (
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

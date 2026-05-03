import './Projects.css'

const projects = [
  {
    number: '01',
    title: 'InsightEd',
    description:
      "A Bluetooth Low Energy attendance system that automates classroom roll-call using ESP32 microcontrollers and students' smartphones — no app install required.",
    stack: ['BLE', 'ESP32', 'Kotlin', 'Firebase'],
    link: '/insighted',
    internal: true,
    status: 'Live',
  },
  {
    number: '02',
    title: 'This Portfolio',
    description:
      'Designed and built from scratch in React + Vite. Focused on minimal aesthetics, editorial typography, and fast load times — no unnecessary dependencies.',
    stack: ['React', 'Vite', 'CSS'],
    link: 'https://github.com/ItzSelwyn/Selwyn-Portfolio',
    internal: false,
    status: 'Live',
  },
]

export default function Projects() {
  const handleClick = (p, e) => {
    if (p.internal) {
      e.preventDefault()
      window.__navigate?.(p.link)
    }
  }

  return (
    <section id="work" className="projects">
      <div className="container projects__inner">

        <div className="projects__header">
          <span className="section-label">Selected Work</span>
          <h2 className="projects__heading">Projects</h2>
        </div>

        <div className="projects__list">
          {projects.map((p) => (
            <a
              key={p.number}
              href={p.link}
              target={p.internal ? undefined : '_blank'}
              rel={p.internal ? undefined : 'noopener noreferrer'}
              className="project-card"
              onClick={(e) => handleClick(p, e)}
            >
              <div className="project-card__num">{p.number}</div>

              <div className="project-card__body">
                <div className="project-card__top">
                  <h3 className="project-card__title">{p.title}</h3>
                  <span className={`project-card__status project-card__status--${p.status.toLowerCase()}`}>
                    {p.status}
                  </span>
                </div>
                <p className="project-card__desc">{p.description}</p>
                <div className="project-card__stack">
                  {p.stack.map((s) => (
                    <span key={s} className="project-card__tag">{s}</span>
                  ))}
                </div>
              </div>

              <div className="project-card__arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        <div className="projects__footer">
          <a
            href="https://github.com/ItzSelwyn"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__more"
          >
            More on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

import './Navbar.css'

export default function Navbar({ onNavigate }) {
  const isInsightEd = window.location.pathname.includes('insighted')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const goHome = () => {
    if (onNavigate) onNavigate()
  }

  // Links for InsightEd case study page
  const insightEdLinks = [
    { label: 'Overview', id: 'ie-overview' },
    { label: 'How It Works', id: 'ie-how' },
    { label: 'Team', id: 'ie-team' },
  ]

  // Links for home page
  const homeLinks = ['about', 'work', 'contact']

  return (
    <header className="navbar">
      <div className="container navbar__inner">

        {/* Logo — always goes home */}
        <div className="navbar__logo" onClick={goHome} style={{ cursor: 'pointer' }}>
          SJ<span className="navbar__dot">.</span>
        </div>

        <nav className="navbar__links">
          {isInsightEd ? (
            insightEdLinks.map(({ label, id }) => (
              <button
                key={id}
                className="navbar__link"
                onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                {label}
              </button>
            ))
          ) : (
            homeLinks.map((id) => (
              <button
                key={id}
                className="navbar__link"
                onClick={() => scrollTo(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))
          )}
        </nav>

        <a href="mailto:selwynjesudasj@gmail.com" className="navbar__cta">
          selwynjesudasj@gmail.com
        </a>

      </div>
    </header>
  )
}

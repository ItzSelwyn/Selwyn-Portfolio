import './Navbar.css'

export default function Navbar({ onNavigate }) {
  const path = window.location.pathname
  const isInsightEd = path.includes('insighted')
  const isRapid100 = path.includes('rapid-100')
  const isProjectPage = isInsightEd || isRapid100

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

  // Links for RAPID-100 case study page
  const rapid100Links = [
    { label: 'Overview', id: 'r1-overview' },
    { label: 'How It Works', id: 'r1-how' },
    { label: 'My Role', id: 'r1-team' },
  ]

  // Links for home page
  const homeLinks = ['about', 'work', 'contact']

  const projectLinks = isInsightEd ? insightEdLinks : rapid100Links

  return (
    <header className="navbar">
      <div className="container navbar__inner">

        {/* Logo — always goes home */}
        <div className="navbar__logo" onClick={goHome} style={{ cursor: 'pointer' }}>
          SJ<span className="navbar__dot">.</span>
        </div>

        <nav className="navbar__links">
          {isProjectPage ? (
            projectLinks.map(({ label, id }) => (
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

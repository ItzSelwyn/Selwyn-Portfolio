import './MetroMind.css'

const stack = [
  { label: 'Frontend', items: ['React', 'Leaflet.js', 'JavaScript', 'CSS'] },
  { label: 'Backend', items: ['Python', 'FastAPI', 'WebSocket'] },
  { label: 'AI / Data', items: ['OSMnx', 'NetworkX', 'Dijkstra', 'OpenStreetMap'] },
  { label: 'Infra', items: ['Docker', 'REST API', 'GeoJSON'] },
]

const flow = [
  { step: '01', title: 'Load City Map', desc: 'The dashboard fetches real road network data from OpenStreetMap using OSMnx and renders it as an interactive Leaflet map.' },
  { step: '02', title: 'Block Road Segments', desc: 'Users click on any road segment to mark it as blocked — simulating accidents, construction, or closures on real city roads.' },
  { step: '03', title: 'Run Simulation', desc: 'Vehicles are spawned at random nodes and attempt to navigate the network. The backend runs pathfinding in real time.' },
  { step: '04', title: 'Rerouting & Congestion', desc: 'When a vehicle hits a blocked segment, the AI reroutes it using Dijkstra\'s algorithm — finding the next shortest path dynamically.' },
  { step: '05', title: 'Live Visualisation', desc: 'Vehicle movement, rerouting events, and congestion hotspots are streamed to the frontend and animated on the map in real time.' },
]

const highlights = [
  { value: 'Real OSM', label: 'Actual city road network data' },
  { value: 'Live', label: 'Real-time vehicle simulation' },
  { value: 'AI', label: 'Dynamic rerouting with Dijkstra' },
  { value: 'Docker', label: 'Fully containerised stack' },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

export default function MetroMind() {
  return (
    <div className="mm-page">

      {/* Back */}
      <div className="mm-back">
        <div className="container">
          <a href="/" onClick={(e) => { e.preventDefault(); window.__navigate?.('/') }} className="mm-back__link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            Back to portfolio
          </a>
        </div>
      </div>

      {/* Hero */}
      <section id="mm-overview" className="mm-hero">
        <div className="container mm-hero__inner">
          <div className="mm-hero__eyebrow">
            <span className="section-label">Case Study — 2025</span>
            <span className="mm-badge">Smart City · Simulation</span>
          </div>

          <h1 className="mm-hero__title">
            Metro<span className="mm-hero__accent">Mind</span>
            <span className="mm-hero__dot">.</span>
          </h1>
          <p className="mm-hero__ghost" aria-hidden="true">City</p>

          <p className="mm-hero__lead">
            A full-stack smart-city dashboard that combines live map
            visualisation with real-time traffic simulation. Block road
            segments, spawn vehicles, and watch AI rerouting respond
            to congestion — on actual city road networks.
          </p>

          <div className="mm-hero__actions">
            <a
              href="https://github.com/ItzSelwyn/MetroMind"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              View Source <ArrowIcon />
            </a>
            <a
              href="https://youtu.be/4BQbXdDGhWo?si=Y--RQ01QJm7nRZEY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Watch Demo <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="mm-highlights">
        <div className="container mm-highlights__grid">
          {highlights.map(({ value, label }) => (
            <div key={value} className="mm-highlight">
              <span className="mm-highlight__value">{value}</span>
              <span className="mm-highlight__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Overview */}
      <section className="mm-section">
        <div className="container mm-two-col">
          <div className="mm-two-col__left">
            <span className="section-label">Overview</span>
          </div>
          <div className="mm-two-col__right">
            <h2 className="mm-section__heading">
              Traffic simulation on <em>real roads.</em>
            </h2>
            <p className="mm-body">
              Most traffic simulations use synthetic grids. MetroMind uses
              real OpenStreetMap road data — meaning you're simulating
              on actual streets, intersections, and road hierarchies of any
              city you choose.
            </p>
            <p className="mm-body">
              The system lets you interactively block road segments to model
              real-world scenarios — accidents, roadworks, closures — and
              observe in real time how vehicles respond, reroute, and where
              congestion builds up.
            </p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="mm-section mm-section--ruled">
        <div className="container mm-two-col">
          <div className="mm-two-col__left">
            <span className="section-label">Stack</span>
          </div>
          <div className="mm-two-col__right">
            <div className="mm-stack">
              {stack.map(({ label, items }) => (
                <div key={label} className="mm-stack__row">
                  <span className="mm-stack__label">{label}</span>
                  <div className="mm-stack__tags">
                    {items.map((item) => (
                      <span key={item} className="about__tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="mm-how" className="mm-section mm-section--ruled">
        <div className="container">
          <div className="mm-section__header">
            <span className="section-label">How It Works</span>
            <h2 className="mm-section__heading mm-section__heading--sm">
              From map data to moving vehicles
            </h2>
          </div>
          <div className="mm-steps">
            {flow.map(({ step, title, desc }) => (
              <div key={step} className="mm-step">
                <span className="mm-step__num">{step}</span>
                <div className="mm-step__body">
                  <h3 className="mm-step__title">{title}</h3>
                  <p className="mm-body mm-body--sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video demo */}
      <section className="mm-section mm-section--ruled">
        <div className="container mm-two-col">
          <div className="mm-two-col__left">
            <span className="section-label">Demo</span>
          </div>
          <div className="mm-two-col__right">
            <h2 className="mm-section__heading">
              See it <em>in action.</em>
            </h2>
            <p className="mm-body">
              Watch vehicles navigate, reroute around blocked segments,
              and congestion form on a live city map.
            </p>
            <div className="mm-video">
              <iframe
                src="https://www.youtube.com/embed/4BQbXdDGhWo"
                title="MetroMind Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* My role */}
      <section id="mm-role" className="mm-section mm-section--ruled">
        <div className="container mm-two-col">
          <div className="mm-two-col__left">
            <span className="section-label">My Role</span>
          </div>
          <div className="mm-two-col__right">
            <h2 className="mm-section__heading">
              Full-stack, <em>end-to-end.</em>
            </h2>
            <ul className="mm-role-list">
              {[
                'Built the FastAPI backend with WebSocket support for real-time vehicle state streaming',
                'Integrated OSMnx to fetch and process real OpenStreetMap road network graphs',
                'Implemented Dijkstra\'s algorithm for shortest-path routing and dynamic rerouting',
                'Designed the React + Leaflet frontend for interactive map and simulation controls',
                'Built the road-blocking UI — click any segment to toggle closed/open',
                'Containerised the full stack with Docker for reproducible local and cloud deployment',
                'Created GeoJSON data pipeline to convert OSM graph edges to renderable map layers',
              ].map((item) => (
                <li key={item} className="mm-role-list__item">
                  <span className="mm-role-list__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mm-cta">
        <div className="container mm-cta__inner">
          <p className="section-label">Open source</p>
          <h2 className="mm-cta__heading">
            Explore the code<span className="mm-hero__dot">.</span>
          </h2>
          <div className="mm-cta__actions">
            <a
              href="https://github.com/ItzSelwyn/MetroMind"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              GitHub Repository <ArrowIcon />
            </a>
            <a
              href="https://youtu.be/4BQbXdDGhWo?si=Y--RQ01QJm7nRZEY"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Watch Demo <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

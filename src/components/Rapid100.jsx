import './Rapid100.css'

const stack = [
  { label: 'AI / ML', items: ['Google Gemini API', 'NLP', 'Speech-to-Text'] },
  { label: 'Backend', items: ['Python', 'FastAPI', 'WebSocket'] },
  { label: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] },
  { label: 'Infra', items: ['Twilio', 'REST API', 'Real-time Processing'] },
]

const flow = [
  { step: '01', title: 'Emergency Call Received', desc: 'A distress call comes in to the RAPID-100 helpline. The system immediately begins real-time audio capture and transcription.' },
  { step: '02', title: 'Live Transcription', desc: 'Speech-to-text converts the caller\'s voice to text in real time, displayed on the dispatcher dashboard as the call progresses.' },
  { step: '03', title: 'AI Triage Analysis', desc: 'Gemini AI analyses the transcript continuously — identifying incident type, severity level, location cues, and key details.' },
  { step: '04', title: 'Incident Classification', desc: 'The system classifies the emergency into a type (medical, fire, accident, etc.) and assigns a severity score from low to critical.' },
  { step: '05', title: 'Summary Generated', desc: 'A structured incident summary is generated and displayed instantly — giving dispatchers everything they need to act without re-listening.' },
]

const highlights = [
  { value: 'Real-time', label: 'Live transcription during active call' },
  { value: 'AI', label: 'Gemini-powered incident classification' },
  { value: '<3s', label: 'Summary generation latency' },
  { value: '4', label: 'Severity levels — low to critical' },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

export default function Rapid100() {
  return (
    <div className="r1-page">

      {/* Back */}
      <div className="container r1-back">
        <a href="/" onClick={(e) => { e.preventDefault(); window.__navigate?.('/') }} className="r1-back__link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Back to portfolio
        </a>
      </div>

      {/* Hero */}
      <section id="r1-overview" className="r1-hero">
        <div className="container r1-hero__inner">
          <div className="r1-hero__eyebrow">
            <span className="section-label">Case Study — 2025</span>
            <span className="r1-badge">AI · Emergency Tech</span>
          </div>

          <h1 className="r1-hero__title">
            RAPID<span className="r1-hero__accent">-100</span>
            <span className="r1-hero__dot">.</span>
          </h1>
          <p className="r1-hero__ghost" aria-hidden="true">SOS</p>

          <p className="r1-hero__lead">
            An AI-powered emergency call triage system that transcribes calls
            in real time, classifies incidents by type and severity, and
            generates structured summaries — helping dispatchers respond
            faster when every second counts.
          </p>

          <div className="r1-hero__actions">
            <a
              href="https://github.com/ItzSelwyn/Rapid-100"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              View Source <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="r1-highlights">
        <div className="container r1-highlights__grid">
          {highlights.map(({ value, label }) => (
            <div key={value} className="r1-highlight">
              <span className="r1-highlight__value">{value}</span>
              <span className="r1-highlight__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="r1-section">
        <div className="container r1-two-col">
          <div className="r1-two-col__left">
            <span className="section-label">The Problem</span>
          </div>
          <div className="r1-two-col__right">
            <h2 className="r1-section__heading">
              Seconds lost cost <em>lives.</em>
            </h2>
            <p className="r1-body">
              Emergency dispatchers handle high volumes of distress calls under
              extreme pressure. Critical details — location, incident type,
              number of people involved — are often buried in panicked,
              fragmented speech. Dispatchers must listen, process, and act
              simultaneously, with no AI assistance.
            </p>
            <p className="r1-body">
              RAPID-100 removes that bottleneck. It listens alongside the
              dispatcher, transcribes in real time, and surfaces structured
              intelligence the moment it's needed.
            </p>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="r1-section r1-section--ruled">
        <div className="container r1-two-col">
          <div className="r1-two-col__left">
            <span className="section-label">Stack</span>
          </div>
          <div className="r1-two-col__right">
            <div className="r1-stack">
              {stack.map(({ label, items }) => (
                <div key={label} className="r1-stack__row">
                  <span className="r1-stack__label">{label}</span>
                  <div className="r1-stack__tags">
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
      <section id="r1-how" className="r1-section r1-section--ruled">
        <div className="container">
          <div className="r1-section__header">
            <span className="section-label">How It Works</span>
            <h2 className="r1-section__heading r1-section__heading--sm">
              From call to classified incident
            </h2>
          </div>
          <div className="r1-steps">
            {flow.map(({ step, title, desc }) => (
              <div key={step} className="r1-step">
                <span className="r1-step__num">{step}</span>
                <div className="r1-step__body">
                  <h3 className="r1-step__title">{title}</h3>
                  <p className="r1-body r1-body--sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="r1-section r1-section--ruled">
        <div className="container r1-two-col">
          <div className="r1-two-col__left">
            <span className="section-label">Dashboard</span>
          </div>
          <div className="r1-two-col__right">
            <h2 className="r1-section__heading">
              Built for <em>dispatchers.</em>
            </h2>
            <p className="r1-body">
              The dispatcher interface shows four things at a glance — call
              status, live transcription, incident type, and severity. No
              clutter, no delay. The AI summary panel updates as the call
              progresses, so by the time it ends, the dispatcher already has
              a complete picture.
            </p>
            {/* Dashboard mockup */}
            <div className="r1-dashboard">
              <div className="r1-dashboard__header">
                <div>
                  <div className="r1-dashboard__title">RAPID-100</div>
                  <div className="r1-dashboard__sub">emergency helpline</div>
                </div>
                <div className="r1-dashboard__status r1-dashboard__status--live">
                  <span className="r1-pulse" /> Live
                </div>
              </div>
              <div className="r1-dashboard__body">
                <div className="r1-dashboard__panel">
                  <div className="r1-dashboard__panel-label">Transcription</div>
                  <p className="r1-dashboard__panel-text">
                    "There's been an accident on the main road near the college... two cars... someone is not moving..."
                  </p>
                </div>
                <div className="r1-dashboard__panel">
                  <div className="r1-dashboard__panel-label">AI Summary</div>
                  <p className="r1-dashboard__panel-text">
                    Road accident. Possible injury. Location: near college main road. Minimum 2 vehicles. Casualties unknown.
                  </p>
                </div>
              </div>
              <div className="r1-dashboard__footer">
                <div className="r1-dashboard__meta">
                  <span className="r1-dashboard__meta-label">Type</span>
                  <span className="r1-dashboard__chip r1-dashboard__chip--accident">ACCIDENT</span>
                </div>
                <div className="r1-dashboard__meta">
                  <span className="r1-dashboard__meta-label">Severity</span>
                  <span className="r1-dashboard__chip r1-dashboard__chip--high">HIGH</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My role */}
      <section id="r1-team" className="r1-section r1-section--ruled">
        <div className="container r1-two-col">
          <div className="r1-two-col__left">
            <span className="section-label">My Role</span>
          </div>
          <div className="r1-two-col__right">
            <h2 className="r1-section__heading">
              Built by <em>three.</em>
            </h2>
            <ul className="r1-role-list">
              {[
                'Designed and built the real-time transcription pipeline using Speech-to-Text',
                'Integrated Google Gemini API for incident classification and summary generation',
                'Built the FastAPI backend with WebSocket support for live data streaming',
                'Designed the dispatcher dashboard UI — focused on clarity under pressure',
                'Implemented severity scoring logic (low / medium / high / critical)',
                'Connected Twilio for call handling and audio capture',
              ].map((item) => (
                <li key={item} className="r1-role-list__item">
                  <span className="r1-role-list__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="r1-cta">
        <div className="container r1-cta__inner">
          <p className="section-label">Open source</p>
          <h2 className="r1-cta__heading">
            View the code<span className="r1-hero__dot">.</span>
          </h2>
          <a
            href="https://github.com/ItzSelwyn/Rapid-100"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary"
          >
            GitHub Repository <ArrowIcon />
          </a>
        </div>
      </section>

    </div>
  )
}

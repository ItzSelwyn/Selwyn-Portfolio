import './InsightEd.css'

const stack = [
  { label: 'Mobile', items: ['Android', 'Kotlin', 'Jetpack Compose'] },
  { label: 'Hardware', items: ['ESP32', 'Arduino / C++', 'BLE Protocol'] },
  { label: 'Backend', items: ['Firebase Realtime DB', 'Firebase Auth', 'Firebase Analytics'] },
]

const methodology = [
  { step: '01', title: 'Student Enters', desc: 'The Android app runs in the background and begins broadcasting a unique BLE UUID assigned to the student.' },
  { step: '02', title: 'ESP32 Scans', desc: 'An ESP32 unit mounted in the classroom continuously scans for BLE advertisements and validates each UUID.' },
  { step: '03', title: 'Timestamp Logged', desc: 'First seen and last seen timestamps are recorded, with duplicate detection via rolling time windows.' },
  { step: '04', title: 'Firebase Sync', desc: 'Validated records are pushed instantly to Firebase Realtime Database. Attendance status updates from pending → present.' },
  { step: '05', title: 'Dashboard Updates', desc: 'The teacher panel refreshes in real time, displaying present/absent students, timestamps, and history.' },
]

const challenges = [
  { problem: 'Unstable BLE Signal', solution: 'Averaged RSSI readings and applied stability thresholds to filter noise.' },
  { problem: 'Duplicate UUID Detection', solution: 'Added rolling time windows to prevent the same UUID from registering twice.' },
  { problem: 'Battery Drain on Phones', solution: 'Switched the Android app to low-energy BLE advertising mode.' },
  { problem: 'Cloud Sync Latency', solution: 'Optimised Firebase write batching and reduced unnecessary listener calls.' },
]

const outcomes = [
  { value: '95%+', label: 'Detection accuracy in live classroom tests' },
  { value: '₹300', label: 'Average hardware cost per classroom' },
  { value: '0', label: 'Personal data stored — only UUIDs' },
  { value: '6', label: 'Team members across Android, firmware & cloud' },
]

const team = [
  { name: 'Selwyn Jesudas', role: 'BLE App · ESP32 · Firebase', url: 'https://www.linkedin.com/in/selwyn-jesudas/' },
  { name: 'Nigesh Satheesh', role: 'Contributor', url: 'https://www.linkedin.com/in/nigesh-satheesh-20339a377/' },
  { name: 'Divyadharshini Balakrishnan', role: 'Contributor', url: 'https://www.linkedin.com/in/divyadharshini-balakrishnan-54848b380/' },
  { name: 'Kavinaya Sekar', role: 'Contributor', url: 'https://www.linkedin.com/in/kavinaya-sekar-40368b37b/' },
  { name: 'Pallavi M', role: 'Contributor', url: 'https://www.linkedin.com/in/pallavi-m-bb376838a/' },
  { name: 'Kavin Nizvan', role: 'Contributor', url: 'https://www.linkedin.com/in/kavin-nizvan-966356380/' },
]

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
)

export default function InsightEd() {
  return (
    <div className="ie-page">

      {/* ── Back nav ── */}
      <div className="container ie-back">
        <a href="/" className="ie-back__link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Back to portfolio
        </a>
      </div>

      {/* ── Hero ── */}
      <section className="ie-hero">
        <div className="container ie-hero__inner">
          <div className="ie-hero__eyebrow">
            <span className="section-label">SIH — 2025</span>
            <span className="ie-status ie-status--live">Live</span>
          </div>

          <h1 className="ie-hero__title">
            InsightEd<span className="ie-hero__dot">.</span>
          </h1>
          <p className="ie-hero__ghost" aria-hidden="true">BLE</p>

          <p className="ie-hero__lead">
            A Bluetooth Low Energy attendance system that turns every student's
            smartphone into a secure digital identity — no check-ins, no queues,
            no errors. An ESP32 unit in the classroom does all the work.
          </p>

          <div className="ie-hero__actions">
            <a
              href="https://github.com/ItzSelwyn/InsightEd"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              View Source
              <ArrowIcon />
            </a>
            <a
              href="https://www.linkedin.com/posts/selwyn-jesudas_sih2025-kotlin-ble-ugcPost-7385383988929970176-aSAR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAF0ppGUBXGNHhigb5VyXrkGErwy6LD8PFLE"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              Demo
            </a>
          </div>
        </div>
      </section>

      {/* ── Outcomes strip ── */}
      <section className="ie-outcomes">
        <div className="container ie-outcomes__grid">
          {outcomes.map(({ value, label }) => (
            <div key={value} className="ie-outcome">
              <span className="ie-outcome__value">{value}</span>
              <span className="ie-outcome__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Overview ── */}
      <section id="ie-overview" className="ie-section">
        <div className="container ie-two-col">
          <div className="ie-two-col__left">
            <span className="section-label">Overview</span>
          </div>
          <div className="ie-two-col__right">
            <h2 className="ie-section__heading">
              Attendance that happens<br /><em>automatically.</em>
            </h2>
            <p className="ie-body">
              Taking attendance in large classrooms consumes valuable time every
              session. Proxy attendance is rampant, and faculty rarely get
              real-time visibility into who's actually present.
            </p>
            <p className="ie-body">
              InsightEd solves this by having each student's phone silently
              broadcast a unique BLE UUID. A low-cost ESP32 device mounted in
              the room detects these packets, validates them, and pushes confirmed
              records to Firebase — giving teachers a live dashboard with zero
              manual input.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="ie-section ie-section--ruled">
        <div className="container ie-two-col">
          <div className="ie-two-col__left">
            <span className="section-label">Stack</span>
          </div>
          <div className="ie-two-col__right">
            <div className="ie-stack">
              {stack.map(({ label, items }) => (
                <div key={label} className="ie-stack__row">
                  <span className="ie-stack__label">{label}</span>
                  <div className="ie-stack__tags">
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

      {/* ── How it works ── */}
      <section id="ie-how" className="ie-section ie-section--ruled">
        <div className="container">
          <div className="ie-section__header">
            <span className="section-label">How It Works</span>
            <h2 className="ie-section__heading ie-section__heading--sm">System flow</h2>
          </div>
          <div className="ie-steps">
            {methodology.map(({ step, title, desc }) => (
              <div key={step} className="ie-step">
                <span className="ie-step__num">{step}</span>
                <div className="ie-step__body">
                  <h3 className="ie-step__title">{title}</h3>
                  <p className="ie-body ie-body--sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenges ── */}
      <section className="ie-section ie-section--ruled">
        <div className="container ie-two-col">
          <div className="ie-two-col__left">
            <span className="section-label">Challenges & Solutions</span>
          </div>
          <div className="ie-two-col__right">
            <div className="ie-challenges">
              {challenges.map(({ problem, solution }) => (
                <div key={problem} className="ie-challenge">
                  <h3 className="ie-challenge__problem">{problem}</h3>
                  <p className="ie-body ie-body--sm">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── My role ── */}
      <section className="ie-section ie-section--ruled">
        <div className="container ie-two-col">
          <div className="ie-two-col__left">
            <span className="section-label">My Role</span>
          </div>
          <div className="ie-two-col__right">
            <h2 className="ie-section__heading">
              Full-stack from&nbsp;<em>firmware to cloud.</em>
            </h2>
            <ul className="ie-role-list">
              {[
                'Implemented BLE advertising logic in the Android app (Kotlin)',
                'Built ESP32-side BLE scanning, UUID filtering, and validation firmware',
                'Designed and integrated the Firebase Realtime Database structure',
                'Implemented first_seen / last_seen tracking and attendance status derivation',
                'Created demo dashboards and wrote project documentation',
              ].map((item) => (
                <li key={item} className="ie-role-list__item">
                  <span className="ie-role-list__dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section id="ie-team" className="ie-section ie-section--ruled">
        <div className="container">
          <div className="ie-section__header">
            <span className="section-label">Team</span>
            <h2 className="ie-section__heading ie-section__heading--sm">Six people. One classroom problem.</h2>
          </div>
          <div className="ie-team">
            {team.map(({ name, role, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="ie-member"
              >
                <div className="ie-member__info">
                  <span className="ie-member__name">{name}</span>
                  <span className="ie-member__role">{role}</span>
                </div>
                <div className="ie-member__arrow"><ArrowIcon /></div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ie-cta">
        <div className="container ie-cta__inner">
          <p className="ie-cta__label section-label">Explore the code</p>
          <h2 className="ie-cta__heading">
            Everything is<br />open source<span className="ie-hero__dot">.</span>
          </h2>
          <a
            href="https://github.com/ItzSelwyn/InsightEd"
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

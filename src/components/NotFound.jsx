import './NotFound.css'

export default function NotFound() {
  const goHome = () => {
    window.history.pushState({}, '', '/')
    window.__navigate?.('/')
  }

  return (
    <div className="nf">
      <p className="nf__ghost" aria-hidden="true">Lost.</p>

      <div className="container nf__inner">
        <span className="section-label">Error</span>

        <h1 className="nf__title">404</h1>

        <p className="nf__message">
          This page doesn't exist — or it moved somewhere else.
          Either way, there's nothing to see here.
        </p>

        <button className="btn btn--primary" onClick={goHome}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          Go home
        </button>
      </div>
    </div>
  )
}

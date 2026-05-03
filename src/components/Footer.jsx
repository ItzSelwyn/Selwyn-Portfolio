import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__name">Selwyn Jesudas<span className="footer__dot">.</span></span>
        <span className="footer__copy">
          © {new Date().getFullYear()} — Designed &amp; built with care.
        </span>
      </div>
    </footer>
  )
}

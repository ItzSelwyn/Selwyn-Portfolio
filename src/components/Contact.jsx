import './Contact.css'

const links = [
  {
    label: 'Email',
    value: 'selwynjesudasj@gmail.com',
    href: 'mailto:selwynjesudasj@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/selwyn-jesudas',
    href: 'https://www.linkedin.com/in/selwyn-jesudas/',
  },
  {
    label: 'GitHub',
    value: 'github.com/ItzSelwyn',
    href: 'https://github.com/ItzSelwyn',
  },
  {
    label: 'Instagram',
    value: 'itz_selwyn',
    href: 'https://www.instagram.com/itz_selwyn/',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">

        <div className="contact__left">
          <span className="section-label">Get in touch</span>
          <h2 className="contact__heading">
            Let's build<br />something<br /><em>together.</em>
          </h2>
          <p className="contact__subtext">
            Open to collaborations, freelance work, and interesting
            conversations about tech, AI, or design.
          </p>
        </div>

        <div className="contact__right">
          {links.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="contact__link"
            >
              <span className="contact__link-label">{label}</span>
              <span className="contact__link-value">{value}</span>
              <svg className="contact__link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

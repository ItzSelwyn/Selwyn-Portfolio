# Selwyn Jesudas — Portfolio

Personal portfolio website built with React + Vite. Designed with a clean editorial aesthetic inspired by high-end creative portfolios — large bold typography, minimal layout, and strong visual hierarchy.

**Live:** [selwynjesudas.com](https://selwynjesudas.com)

---

## Stack

- **React 18** + **Vite 5**
- **Plain CSS** — no Tailwind, no CSS-in-JS
- **Syne** (display) + **DM Mono** (monospace) via Google Fonts
- Zero unnecessary dependencies

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — Hero, About, Projects, Contact |
| `/insighted` | InsightEd  — BLE attendance system |

---

## Project Structure

```
portfolio
├── .gitignore
├── 404.html
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   └── og-image.jpg
├── robots.txt
├── sitemap.xml
├── src
│   ├── App.jsx
│   ├── components
│   │   ├── About.css
│   │   ├── About.jsx
│   │   ├── Contact.css
│   │   ├── Contact.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── InsightEd.css
│   │   ├── InsightEd.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── Projects.css
│   │   └── Projects.jsx
│   ├── main.jsx
│   └── styles
│       └── global.css
└── vite.config.js
```

## SEO

- Meta tags, Open Graph, and Twitter Card in `index.html`
- Schema.org structured data (Person + WebSite)
- `sitemap.xml` and `robots.txt` in `/public/`
- Custom `404.html` in `/public/`

---

## Design Decisions

- **No animations** except subtle hover effects and the skill marquee
- **No cursor tracking or parallax** — keeps it fast and accessible
- **CSS custom properties** for all design tokens — easy to retheme
- **Responsive** — tested on mobile, tablet, and desktop
- **~51KB gzipped** JS bundle

---

## License

MIT — feel free to use as inspiration. If you do, a credit or star would be appreciated.

---

*Designed & built by Selwyn Jesudas*

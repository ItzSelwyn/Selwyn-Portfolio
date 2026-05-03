import { useState, useEffect } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InsightEd from './components/InsightEd'

function getPage() {
  const path = window.location.pathname
  if (path.includes('insighted')) return 'insighted'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const handler = () => setPage(getPage())
    window.addEventListener('popstate', handler)
    return () => window.removeEventListener('popstate', handler)
  }, [])

  useEffect(() => {
    window.__navigate = (path) => {
      window.history.pushState({}, '', path)
      setPage(getPage())
      window.scrollTo(0, 0)
    }
  }, [])

  return (
    <>
      <Navbar onNavigate={() => { window.history.pushState({}, '', '/'); setPage('home'); window.scrollTo(0,0) }} />
      <main>
        {page === 'insighted' ? (
          <InsightEd />
        ) : (
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        )}
      </main>
      <Footer />
    </>
  )
}

import { useState, useEffect } from 'react'
import './styles/global.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import InsightEd from './components/InsightEd'
import Rapid100 from './components/Rapid100'
import NotFound from './components/NotFound'

function getPage() {
  const path = window.location.pathname
  if (path === '/' || path === '') return 'home'
  if (path.includes('insighted')) return 'insighted'
  if (path.includes('rapid-100')) return 'rapid100'
  return '404'
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

  const goHome = () => {
    window.history.pushState({}, '', '/')
    setPage('home')
    window.scrollTo(0, 0)
  }

  const show404 = page === '404'

  return (
    <>
      {!show404 && <Navbar onNavigate={goHome} />}
      <main>
        {page === 'home' && (
          <>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </>
        )}
        {page === 'insighted' && <InsightEd />}
        {page === 'rapid100' && <Rapid100 />}
        {page === '404' && <NotFound />}
      </main>
      {!show404 && <Footer />}
    </>
  )
}

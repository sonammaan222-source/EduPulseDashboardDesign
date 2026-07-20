import { Outlet, useLocation } from 'react-router'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Ticker from './components/Ticker'

export default function Root() {
  const location = useLocation()

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 font-sans">
      <Navbar />
      <Ticker />
      <main
        key={location.pathname}
        style={{ animation: 'slide-in 0.3s ease-out' }}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

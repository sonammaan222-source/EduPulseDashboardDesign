import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Latest News', path: '/news' },
  { label: 'Exam Updates', path: '/exams/neet' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'Career Hub', path: '/resources' },
  { label: 'Education Reform', path: '/education-reform' },
  { label: 'Resources', path: '/resources' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery('')
      setMenuOpen(false)
    }
  }

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/60" style={{ backdropFilter: 'blur(20px)' }}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #2563EB, #14B8A6)' }}>E</div>
          <span className="font-bold text-lg gradient-text" style={{ fontFamily: "'Poppins', sans-serif" }}>EduPulse</span>
        </NavLink>

        <div className="hidden lg:flex items-center gap-0.5">
          {navItems.map(item => (
            <NavLink
              key={item.path + item.label}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  isActive ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <form onSubmit={handleSearch} className="hidden sm:flex items-center bg-slate-100 rounded-xl px-3 py-1.5 gap-2 w-36">
            <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="bg-transparent text-xs text-slate-600 outline-none w-full placeholder:text-slate-400"
            />
          </form>

          <button className="relative w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition-colors">
            <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white" />
          </button>

          <NavLink to="/about" className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white text-xs font-bold cursor-pointer">A</NavLink>

          <button
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center bg-slate-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-slate-100 px-4 py-3 flex flex-col gap-1">
          <form onSubmit={handleSearch} className="flex items-center bg-slate-100 rounded-xl px-3 py-2 gap-2 mb-2">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search exams, news..."
              className="bg-transparent text-sm text-slate-600 outline-none w-full placeholder:text-slate-400"
            />
          </form>
          {navItems.map(item => (
            <NavLink
              key={item.path + item.label}
              to={item.path}
              end={item.path === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm font-medium text-left transition-all ${isActive ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}

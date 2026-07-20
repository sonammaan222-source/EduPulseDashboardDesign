import { Link } from 'react-router'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold" style={{ background: 'linear-gradient(135deg, #2563EB, #14B8A6)' }}>E</div>
              <span className="font-bold text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>EduPulse</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">India's premier platform for verified education news, exam transparency, and student resources.</p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', to: '/' },
                { label: 'Latest News', to: '/news' },
                { label: 'Exam Updates', to: '/exams/neet' },
                { label: 'Dashboard', to: '/dashboard' },
                { label: 'Career Hub', to: '/resources' },
                { label: 'About Us', to: '/about' },
              ].map(l => (
                <li key={l.label}><Link to={l.to} className="text-slate-400 text-sm hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Resources</h4>
            <ul className="space-y-2">
              {[
                { label: 'Official Websites', to: '/resources' },
                { label: 'Scholarship Finder', to: '/resources' },
                { label: 'Career Roadmaps', to: '/resources' },
                { label: 'Free Certifications', to: '/resources' },
                { label: 'Mental Wellness', to: '/resources' },
                { label: 'Study Materials', to: '/resources' },
                { label: 'Mock Tests', to: '/resources' },
                { label: 'Grievance Portals', to: '/resources' },
              ].map(l => (
                <li key={l.label}><Link to={l.to} className="text-slate-400 text-sm hover:text-white transition-colors">{l.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-slate-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Newsletter</h4>
            <p className="text-slate-400 text-sm mb-3">Get daily verified exam updates in your inbox.</p>
            <div className="flex gap-2">
              <input placeholder="your@email.com" className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 transition-colors" />
              <button className="btn-primary text-white text-sm px-4 py-2 rounded-xl font-medium">→</button>
            </div>
            <div className="flex gap-3 mt-5">
              {['𝕏', 'in', 'f', '▶'].map(icon => (
                <button key={icon} className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all text-sm font-bold">
                  {icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">© 2026 EduPulse. All rights reserved. Not affiliated with NTA or any government body.</p>
          <div className="flex gap-4 text-xs text-slate-500">
            <Link to="/about" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Help Center</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

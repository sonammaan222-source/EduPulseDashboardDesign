import { useNavigate } from 'react-router'

export default function NotFound() {
  const navigate = useNavigate()
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">📰</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>404</h1>
        <h2 className="text-xl font-semibold text-slate-700 mb-3">Page Not Found</h2>
        <p className="text-slate-500 text-sm mb-8 max-w-sm mx-auto">
          This page doesn't exist or may have moved. Try navigating to one of our main sections.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={() => navigate('/')} className="btn-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold">
            Back to Home
          </button>
          <button onClick={() => navigate('/news')} className="border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl text-sm font-semibold hover:border-blue-300 hover:text-blue-600 transition-all">
            Latest News
          </button>
          <button onClick={() => navigate('/dashboard')} className="border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl text-sm font-semibold hover:border-blue-300 hover:text-blue-600 transition-all">
            Dashboard
          </button>
        </div>
      </div>
    </div>
  )
}

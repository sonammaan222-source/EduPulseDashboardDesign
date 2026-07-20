import { useParams, useNavigate } from 'react-router'
import { newsArticles } from '../data'
import NewsCard from '../components/NewsCard'
import LiveBadge from '../components/LiveBadge'
import { getTimestamp } from '../utils/time'

export default function ArticleDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const article = newsArticles.find(a => a.id === Number(id))
  const ts = article ? getTimestamp(article.id) : null

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="text-5xl mb-4">📰</div>
        <h2 className="text-2xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Article Not Found</h2>
        <p className="text-slate-500 mb-6">This article may have been removed or the link is incorrect.</p>
        <button onClick={() => navigate('/news')} className="btn-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold">
          Back to News
        </button>
      </div>
    )
  }

  const related = newsArticles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3)
  const fallbackRelated = newsArticles.filter(a => a.id !== article.id).slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Article */}
        <div className="lg:col-span-2">
          <button
            onClick={() => navigate('/news')}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-6"
          >
            ← Back to News
          </button>

          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <span className="text-xs font-bold text-white px-3 py-1 rounded-full" style={{ background: article.color }}>{article.category}</span>
            {article.badge && <LiveBadge label={article.badge} color={article.badgeColor} pulse={article.badge === 'Live' || article.badge === 'Breaking'} />}
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0114 0z" />
              </svg>
              {article.readTime}
            </span>
            {ts && <span className="text-xs text-slate-400">· Updated {ts.label}</span>}
            <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">✓ {article.source}</span>
          </div>

          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900 leading-snug mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {article.title}
          </h1>

          <p className="text-sm text-slate-500 mb-6 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">{article.author[0]}</span>
            By <strong className="text-slate-700">{article.author}</strong>
          </p>

          <div className="relative h-72 rounded-2xl overflow-hidden mb-8 bg-slate-100">
            <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
          </div>

          <div className="prose prose-slate max-w-none">
            {article.body.split('\n\n').map((para, i) => (
              <p key={i} className="text-slate-700 leading-relaxed mb-4 text-sm">{para}</p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-100">
            {article.tags.map(tag => (
              <span key={tag} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full font-medium">#{tag}</span>
            ))}
          </div>

          <div className="mt-8 p-5 glass card-shadow rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg flex-shrink-0">{article.author[0]}</div>
            <div>
              <div className="font-semibold text-slate-800 text-sm">{article.author}</div>
              <div className="text-xs text-slate-400">EduPulse Correspondent — Education & Examinations</div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Related Articles</div>
          <div className="space-y-4">
            {(related.length ? related : fallbackRelated).map(item => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-8 glass card-shadow rounded-2xl p-5">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Quick Links</div>
            {[
              { label: 'View Dashboard', path: '/dashboard' },
              { label: 'Exam Updates', path: '/exams/neet' },
              { label: 'Education Reform', path: '/education-reform' },
              { label: 'Student Resources', path: '/resources' },
            ].map(l => (
              <button key={l.label} onClick={() => navigate(l.path)}
                className="w-full text-left text-sm text-slate-600 hover:text-blue-600 py-2 border-b border-slate-50 last:border-0 transition-colors flex items-center justify-between">
                {l.label} <span className="text-slate-300">→</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

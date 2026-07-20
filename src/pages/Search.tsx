import { useSearchParams, useNavigate } from 'react-router'
import { newsArticles, exams } from '../data'
import NewsCard from '../components/NewsCard'

const searchKeywords: Record<string, { type: string; path: string; description: string }> = {
  neet: { type: 'exam', path: '/exams/neet', description: 'National Eligibility cum Entrance Test — Medical entrance for MBBS/BDS' },
  jee: { type: 'exam', path: '/exams/jee', description: 'Joint Entrance Examination — Engineering entrance for IITs/NITs' },
  cuet: { type: 'exam', path: '/exams/cuet', description: 'Common University Entrance Test — Central university admissions' },
  upsc: { type: 'exam', path: '/exams/upsc', description: 'Civil Services Examination — IAS/IPS/IFS recruitment' },
  scholarships: { type: 'resource', path: '/resources', description: 'Scholarships, fellowships & financial aid for Indian students' },
  scholarship: { type: 'resource', path: '/resources', description: 'Scholarships, fellowships & financial aid for Indian students' },
  'sonam wangchuk': { type: 'reform', path: '/education-reform', description: 'Education Reform profile — Sonam Wangchuk, SECMOL founder' },
  wangchuk: { type: 'reform', path: '/education-reform', description: 'Education Reform profile — Sonam Wangchuk, SECMOL founder' },
  'education reform': { type: 'reform', path: '/education-reform', description: 'Education Reform & Innovation coverage' },
  nep: { type: 'news', path: '/news', description: 'National Education Policy 2020 — Implementation coverage' },
  dashboard: { type: 'tool', path: '/dashboard', description: 'Exam Analytics Dashboard — Live statistics & charts' },
  analytics: { type: 'tool', path: '/dashboard', description: 'Exam Analytics Dashboard — Live statistics & charts' },
  resources: { type: 'resource', path: '/resources', description: 'Student Resources Hub — Websites, wellness, career guides' },
  career: { type: 'resource', path: '/resources', description: 'Career roadmaps, certifications & guidance' },
  mental: { type: 'resource', path: '/resources', description: 'Mental Wellness resources — helplines & counselling' },
  gate: { type: 'news', path: '/news', description: 'Graduate Aptitude Test in Engineering — Latest updates' },
}

const typeColors: Record<string, string> = {
  exam: '#2563EB',
  resource: '#14B8A6',
  reform: '#8B5CF6',
  news: '#EF4444',
  tool: '#F59E0B',
}
const typeLabels: Record<string, string> = {
  exam: 'Exam Page',
  resource: 'Resource',
  reform: 'Reform',
  news: 'News',
  tool: 'Tool',
}

export default function Search() {
  const [params] = useSearchParams()
  const navigate = useNavigate()
  const query = params.get('q') || ''

  const q = query.toLowerCase().trim()

  const matchedKeywords = Object.entries(searchKeywords).filter(([key]) => q.includes(key) || key.includes(q))

  const matchedArticles = newsArticles.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  )

  const matchedExams = exams.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.fullName.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q)
  )

  const totalResults = matchedKeywords.length + matchedArticles.length + matchedExams.length

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Search Results for "<span className="gradient-text">{query}</span>"
        </h1>
        <p className="text-slate-500 text-sm">{totalResults} result{totalResults !== 1 ? 's' : ''} found</p>
      </div>

      {totalResults === 0 && (
        <div className="text-center py-20">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>No results found</h2>
          <p className="text-slate-500 text-sm mb-6">Try searching for: NEET, JEE, CUET, UPSC, Scholarships, Education Reform, or Sonam Wangchuk</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['NEET', 'JEE', 'CUET', 'UPSC', 'Scholarships', 'Education Reform'].map(s => (
              <button key={s} onClick={() => navigate(`/search?q=${s}`)}
                className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold hover:bg-blue-100 transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Matched Keywords / Pages */}
      {matchedKeywords.length > 0 && (
        <div className="mb-10">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Best Match</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {matchedKeywords.map(([key, result]) => (
              <button key={key} onClick={() => navigate(result.path)}
                className="glass card-shadow rounded-2xl p-5 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5 text-left group flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold flex-shrink-0" style={{ background: typeColors[result.type] }}>
                  {typeLabels[result.type][0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800 text-sm capitalize" style={{ fontFamily: "'Poppins', sans-serif" }}>{key}</span>
                    <span className="text-[10px] font-bold text-white px-1.5 py-0.5 rounded-full" style={{ background: typeColors[result.type] }}>{typeLabels[result.type]}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">{result.description}</p>
                </div>
                <svg className="w-4 h-4 text-slate-300 group-hover:text-blue-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Matched Exams */}
      {matchedExams.length > 0 && (
        <div className="mb-10">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Exam Pages</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {matchedExams.map(exam => (
              <button key={exam.key} onClick={() => navigate(`/exams/${exam.key}`)}
                className="glass card-shadow rounded-2xl p-5 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-left group">
                <div className="text-3xl mb-2">{exam.icon}</div>
                <div className="font-bold text-lg mb-0.5" style={{ fontFamily: "'Poppins', sans-serif", color: exam.color }}>{exam.name}</div>
                <div className="text-xs text-slate-500 mb-2">{exam.fullName}</div>
                <div className="text-xs text-slate-400 leading-relaxed line-clamp-2">{exam.description}</div>
                <div className="mt-3 text-xs font-semibold flex items-center gap-1 transition-colors" style={{ color: exam.color }}>
                  View Page <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Matched Articles */}
      {matchedArticles.length > 0 && (
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">News Articles ({matchedArticles.length})</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {matchedArticles.map(item => <NewsCard key={item.id} item={item} />)}
          </div>
        </div>
      )}
    </div>
  )
}

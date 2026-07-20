import { useNavigate } from 'react-router'
import type { NewsArticle } from '../data'
import { getTimestamp } from '../utils/time'
import LiveBadge from './LiveBadge'

export default function NewsCard({ item, featured = false }: { item: NewsArticle; featured?: boolean }) {
  const navigate = useNavigate()
  const ts = getTimestamp(item.id)

  return (
    <div
      onClick={() => navigate(`/news/${item.id}`)}
      className={`glass card-shadow rounded-2xl overflow-hidden hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? 'h-64' : 'h-44'}`}>
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

        {/* Category + badge row */}
        <div className="absolute top-3 left-3 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ background: item.color }}>
            {item.category}
          </span>
          {item.badge && (
            <LiveBadge label={item.badge} color={item.badgeColor} pulse={item.badge === 'Live' || item.badge === 'Breaking'} />
          )}
        </div>

        {/* Source chip */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[10px] font-semibold text-white/90 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
            {item.source}
          </span>
        </div>
      </div>

      <div className="p-4">
        {/* Timestamp row */}
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ts.freshness === 'live' ? '#EF4444' : ts.freshness === 'recent' ? '#22C55E' : '#94A3B8' }} />
          <p className="text-xs text-slate-400">Updated {ts.label}</p>
          <span className="text-slate-200">·</span>
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0114 0z" />
            </svg>
            {item.readTime}
          </p>
        </div>

        <h3
          className={`font-semibold text-slate-900 leading-snug mb-2 line-clamp-2 group-hover:text-blue-700 transition-colors ${featured ? 'text-base' : 'text-sm'}`}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          {item.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">{item.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
            Read More <span>→</span>
          </div>
          <span className="text-[10px] text-slate-400">{item.author}</span>
        </div>
      </div>
    </div>
  )
}

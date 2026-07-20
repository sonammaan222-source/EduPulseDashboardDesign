import { useNavigate } from 'react-router'
import type { NewsArticle } from '../data'

export default function NewsCard({ item, featured = false }: { item: NewsArticle; featured?: boolean }) {
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/news/${item.id}`)}
      className={`glass card-shadow rounded-2xl overflow-hidden hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden bg-slate-100 ${featured ? 'h-72' : 'h-44'}`}>
        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ background: item.color }}>
          {item.category}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <p className="text-xs text-slate-400">{item.date}</p>
          <span className="text-slate-200">·</span>
          <p className="text-xs text-slate-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0114 0z" />
            </svg>
            {item.readTime}
          </p>
        </div>
        <h3 className={`font-semibold text-slate-900 leading-snug mb-2 line-clamp-2 ${featured ? 'text-base' : 'text-sm'}`} style={{ fontFamily: "'Poppins', sans-serif" }}>
          {item.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-3 line-clamp-2">{item.excerpt}</p>
        <div className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors">
          Read More <span>→</span>
        </div>
      </div>
    </div>
  )
}

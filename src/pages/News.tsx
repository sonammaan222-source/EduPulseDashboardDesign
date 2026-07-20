import { useState } from 'react'
import { newsArticles } from '../data'
import NewsCard from '../components/NewsCard'

const categories = ['All', 'Competitive Exams', 'Higher Education', 'Education Policies', 'Student Issues', 'Government Announcements', 'Technology in Education', 'Scholarships', 'International Education']

const ITEMS_PER_PAGE = 6

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = activeCategory === 'All' ? newsArticles : newsArticles.filter(n => n.category === activeCategory)
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE)
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const handleCategory = (cat: string) => {
    setActiveCategory(cat)
    setPage(1)
  }

  const featured = newsArticles[0]
  const trending = newsArticles.slice(1, 4)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Page Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse-dot" />
          <span className="text-xs font-bold text-red-600 tracking-widest uppercase">🔴 Live Updates</span>
        </div>
        <h1 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Education News & Updates</h1>
        <p className="text-slate-500 mt-1">Verified coverage from NTA, UPSC, UGC, and 500+ official sources</p>
      </div>

      {/* Featured + Trending */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Featured */}
        <div className="lg:col-span-2">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Featured Article</div>
          <NewsCard item={featured} featured />
        </div>

        {/* Trending */}
        <div>
          <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Trending Now</div>
          <div className="space-y-3">
            {trending.map((item, i) => (
              <NewsCard key={item.id} item={{ ...item, image: item.image.replace('h=440', 'h=160') }} />
            ))}
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Browse by Category</div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-all ${activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Latest Headlines */}
      <div className="mb-4">
        <div className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Latest Headlines</div>
        {paginated.length === 0 ? (
          <div className="text-center py-16 text-slate-400">No articles in this category yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {paginated.map(item => <NewsCard key={item.id} item={item} />)}
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            ← Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-9 h-9 rounded-xl text-sm font-semibold transition-all ${page === p ? 'bg-blue-600 text-white' : 'border border-slate-200 text-slate-600 hover:border-blue-300'}`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            Next →
          </button>
        </div>
      )}
    </div>
  )
}

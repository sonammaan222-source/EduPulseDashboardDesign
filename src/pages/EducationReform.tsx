import { useNavigate } from 'react-router'
import { newsArticles } from '../data'
import NewsCard from '../components/NewsCard'

const reformStories = [
  {
    id: 'r1',
    headline: "NEP 2020: India's Most Ambitious Education Policy in 34 Years",
    category: 'Education Policies',
    date: 'Jul 15, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=440&fit=crop&auto=format',
    summary: 'The National Education Policy 2020 mandates multidisciplinary education, skill development, and mother-tongue instruction — reshaping how 26 crore students learn.',
    color: '#14B8A6',
  },
  {
    id: 'r2',
    headline: 'PM SHRI Schools: 14,500 Upgraded Institutions Leading NEP Implementation',
    category: 'Government Reform',
    date: 'Jul 12, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=440&fit=crop&auto=format',
    summary: '14,500 PM Schools for Rising India (PM SHRI) selected for full NEP 2020 implementation, featuring labs, sports facilities, and counselling infrastructure.',
    color: '#2563EB',
  },
  {
    id: 'r3',
    headline: 'Digital India Education: 3 Crore Students on DIKSHA Platform',
    category: 'Technology in Education',
    date: 'Jul 8, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=440&fit=crop&auto=format',
    summary: 'DIKSHA (Digital Infrastructure for Knowledge Sharing) now serves 3 crore students with QR-coded textbooks, video lectures, and assessment tools.',
    color: '#6366F1',
  },
  {
    id: 'r4',
    headline: 'Dropout Reduction: India Achieves 78% Gross Enrolment Ratio at Secondary Level',
    category: 'Student Issues',
    date: 'Jul 5, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=440&fit=crop&auto=format',
    summary: 'UDISE+ data shows significant improvements in secondary enrolment, attributed to mid-day meal expansion, free uniforms, and scholarship programmes.',
    color: '#22C55E',
  },
]

export default function EducationReform() {
  const navigate = useNavigate()

  const policyArticles = newsArticles.filter(a =>
    ['Education Policies', 'Government Announcements', 'Student Issues'].includes(a.category)
  )

  return (
    <div>
      {/* Header */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-block text-xs font-bold tracking-widest text-teal-200 uppercase mb-3 px-3 py-1 bg-white/10 rounded-full">Special Coverage</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Education Reform & Innovation
          </h1>
          <p className="text-teal-100 max-w-2xl leading-relaxed">
            In-depth coverage of India's education transformation — from NEP 2020 implementation to grassroots innovation, government policies, and the voices championing systemic change.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Sonam Wangchuk Feature */}
        <div className="glass card-shadow rounded-3xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <span className="inline-block text-xs font-bold tracking-widest text-teal-200 uppercase mb-5 px-3 py-1 bg-white/10 rounded-full">Education Reformer Profile</span>
                <div className="w-20 h-20 rounded-full border-4 border-white/40 overflow-hidden mb-5 bg-teal-700 flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Sonam Wangchuk</h2>
                <p className="text-teal-200 text-sm mb-4">Engineer · Educator · Climate Activist · Ladakh, India</p>
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  Founder of the Students' Educational and Cultural Movement of Ladakh (SECMOL), Sonam Wangchuk transformed a failing exam system into an experiential learning model. His solar-powered campus, run entirely by students, has become a global model for sustainable education.
                </p>
                <p className="text-white/70 text-xs leading-relaxed">
                  His "Operation New Hope" reformed government school curriculum across Ladakh; the "Ice Stupa" invention addressed glacial melt and water scarcity; and his advocacy for Ladakh's ecological rights brought national attention to environmental education.
                </p>
              </div>
              <div className="relative mt-6 flex gap-3">
                <button className="bg-white text-teal-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-teal-50 transition-colors">
                  Learn More →
                </button>
                <a href="https://secmol.org" target="_blank" rel="noopener noreferrer" className="border border-white/30 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-white/10 transition-colors">
                  SECMOL.org ↗
                </a>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <h3 className="font-bold text-slate-900 mb-6 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>Key Initiatives & Timeline</h3>
              <div className="space-y-5">
                {[
                  { year: '1988', event: 'Founded Operation New Hope — reformed govt school curriculum in Ladakh, improving pass rates from 5% to 75%', color: '#2563EB' },
                  { year: '1994', event: 'Established SECMOL campus — solar-powered, student-run alternative school in Phyang', color: '#0EA5E9' },
                  { year: '2013', event: 'Invented the "Ice Stupa" — artificial glaciers to address Himalayan water scarcity, winner of Rolex Award', color: '#14B8A6' },
                  { year: '2018', event: 'Launched RAM (Real Alternatives Mission) for sustainable living, self-reliance & alternative education', color: '#22C55E' },
                  { year: '2023', event: '21-day fast for statehood and environmental protection of Ladakh, drawing national attention', color: '#F59E0B' },
                  { year: '2024', event: "Continued advocacy for education reform, constitutional protections, and Ladakh's ecological rights", color: '#8B5CF6' },
                ].map(item => (
                  <div key={item.year} className="flex gap-4">
                    <span className="inline-block w-12 text-center text-xs font-bold py-1 rounded-lg text-white flex-shrink-0 h-fit" style={{ background: item.color, fontFamily: "'Space Grotesk', monospace" }}>{item.year}</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-slate-400 leading-relaxed italic">
                Note: Coverage of Sonam Wangchuk is presented as part of broader education reform coverage. EduPulse does not endorse political positions. All information is sourced from verified public records.
              </p>
            </div>
          </div>
        </div>

        {/* Reform Stories Grid */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Reform Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {reformStories.map(story => (
              <div key={story.id} className="glass card-shadow rounded-2xl overflow-hidden hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                onClick={() => navigate('/news')}>
                <div className="relative overflow-hidden h-48 bg-slate-100">
                  <img src={story.image} alt={story.headline} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 left-3 text-xs font-bold text-white px-2.5 py-1 rounded-full" style={{ background: story.color }}>
                    {story.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-slate-400">{story.date}</span>
                    <span className="text-slate-200">·</span>
                    <span className="text-xs text-slate-400">{story.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 text-base leading-snug mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>{story.headline}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{story.summary}</p>
                  <div className="mt-3 text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1">Read Full Story →</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Policy Articles */}
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Education Policy & Government Announcements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {policyArticles.map(item => <NewsCard key={item.id} item={item} />)}
          </div>
        </div>

      </div>
    </div>
  )
}

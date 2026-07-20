import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router'
import { exams, newsArticles } from '../data'
import NewsCard from '../components/NewsCard'
const examSections = {
  neet: [
    {
      title: 'Latest Notifications',
      icon: '🔔',
      color: '#EF4444',
      items: [
        { label: 'NEET UG Results Declared — Current Session', time: 'Just now', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'NEET UG Final Answer Key Released', time: 'Earlier today', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'NEET UG Counselling Schedule Released', time: 'Recently', badge: 'New', badgeColor: '#22C55E' },
        { label: 'NEET Next Session Notification — Expected Soon', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Registration',
      icon: '📝',
      color: '#2563EB',
      items: [
        { label: 'NEET UG Next Session Registration Dates (Check Official Site)', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'How to Register for NEET UG — Step by Step Guide', time: 'Recently updated', badge: '', badgeColor: '' },
        { label: 'NEET UG Current Session Application Statistics', time: 'Updated today', badge: 'Verified', badgeColor: '#22C55E' },
      ],
    },
    {
      title: 'Admit Card',
      icon: '🪪',
      color: '#0EA5E9',
      items: [
        { label: 'NEET UG Admit Card — Download from NTA Portal', time: 'Available now', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'How to Download NEET Admit Card', time: 'Recently updated', badge: '', badgeColor: '' },
        { label: 'NEET Admit Card Correction Window Status', time: 'Check portal', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Results',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'NEET UG Results — Check Merit List (Current Session)', time: 'Just now', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'NEET UG Topper List & Cutoff Marks — Current Session', time: 'Updated today', badge: 'New', badgeColor: '#22C55E' },
        { label: 'NEET UG Previous Session Result Archive', time: 'Archive', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Counselling',
      icon: '🎓',
      color: '#14B8A6',
      items: [
        { label: 'MCC NEET UG Counselling Schedule — Current Session', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'NEET UG State Counselling Dates — Check State Portal', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'How to Register for MCC Counselling', time: 'Recently updated', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers',
      icon: '📄',
      color: '#8B5CF6',
      items: [
        { label: 'NEET Latest Session Question Paper with Solutions (PDF)', time: 'Available', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'NEET Previous Session Question Papers (PDF)', time: 'Archive', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'NEET Previous 10 Sessions Papers Bundle', time: 'Archive', badge: 'Download', badgeColor: '#2563EB' },
      ],
    },
  ],
  jee: [
    {
      title: 'Latest Notifications',
      icon: '🔔',
      color: '#2563EB',
      items: [
        { label: 'JEE Advanced Results — Current Session', time: 'Recently', badge: 'New', badgeColor: '#22C55E' },
        { label: 'JEE Main Session 2 Results Declared', time: 'Updated today', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'JEE Main Next Session Notification — Check NTA Portal', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'JEE Main',
      icon: '📝',
      color: '#0EA5E9',
      items: [
        { label: 'JEE Main Current Session Results & Cutoff', time: 'Live', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'JEE Main Answer Key (Final) — Current Session', time: 'Recently', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'JEE Main Registration Process Guide', time: 'Recently updated', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'JEE Advanced',
      icon: '⚙️',
      color: '#2563EB',
      items: [
        { label: 'JEE Advanced Results — AIR List (Current Session)', time: 'Just now', badge: 'New', badgeColor: '#22C55E' },
        { label: 'JEE Advanced Cutoff (IIT-wise) — Current Session', time: 'Updated today', badge: 'New', badgeColor: '#22C55E' },
        { label: 'JoSAA Counselling Schedule — Current Session', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Results & Cutoff',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'JEE Advanced Category-wise Cutoff — Current Session', time: 'Live', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'JEE Main Percentile vs Rank Predictor', time: 'Recently updated', badge: '', badgeColor: '' },
        { label: 'Previous Sessions JEE Cutoff Comparison', time: 'Archive', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers',
      icon: '📄',
      color: '#8B5CF6',
      items: [
        { label: 'JEE Advanced Latest Session Paper 1 & 2 (PDF)', time: 'Available', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'JEE Main All Shifts Question Papers — Current Session', time: 'Available', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'JEE 10-Session Paper Collection', time: 'Archive', badge: 'Download', badgeColor: '#2563EB' },
      ],
    },
    {
      title: 'FAQs',
      icon: '❓',
      color: '#F59E0B',
      items: [
        { label: 'JEE Main vs JEE Advanced — Key Differences', time: 'Recently updated', badge: '', badgeColor: '' },
        { label: 'How Many Attempts Are Allowed in JEE?', time: 'Recently updated', badge: '', badgeColor: '' },
        { label: 'JEE Eligibility Criteria — Current Academic Year', time: 'Check NTA portal', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
  ],
  cuet: [
    {
      title: 'Latest Notifications',
      icon: '🔔',
      color: '#0EA5E9',
      items: [
        { label: 'CUET PG Revised Timetable Released', time: 'Recently', badge: 'New', badgeColor: '#22C55E' },
        { label: 'CUET UG Admit Card Released', time: 'Available now', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'CUET Next Session Exam Dates — Check NTA Portal', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'CUET UG',
      icon: '🎓',
      color: '#2563EB',
      items: [
        { label: 'CUET UG Results & University Cutoffs — Current Session', time: 'Recently', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'CUET UG Registration Summary — Current Session', time: 'Updated today', badge: '', badgeColor: '' },
        { label: 'Universities Accepting CUET Score — Full List', time: 'Recently updated', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'CUET PG',
      icon: '📚',
      color: '#0EA5E9',
      items: [
        { label: 'CUET PG New Schedule (Revised) — Download', time: 'Just now', badge: 'New', badgeColor: '#22C55E' },
        { label: 'CUET PG Admit Card — Check Download Status', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'CUET PG Result — Check Official Date', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Admit Card',
      icon: '🪪',
      color: '#14B8A6',
      items: [
        { label: 'CUET PG Admit Card — Download from NTA Portal', time: 'Check portal', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'CUET UG Admit Card — Current Session', time: 'Available now', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'Hall Ticket Instructions & Guidelines', time: 'Recently updated', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Results',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'CUET PG Result — Check Official Site for Date', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'CUET UG Scorecard Download — Current Session', time: 'Recently', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'CUET Previous Session Result Archive', time: 'Archive', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers',
      icon: '📄',
      color: '#8B5CF6',
      items: [
        { label: 'CUET UG Question Papers — Latest Session (All Subjects)', time: 'Available', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'CUET PG Previous Session Question Papers', time: 'Archive', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'CUET Preparation Books & Resources', time: 'Recently updated', badge: '', badgeColor: '' },
      ],
    },
  ],
  upsc: [
    {
      title: 'Latest Notifications',
      icon: '🔔',
      color: '#8B5CF6',
      items: [
        { label: 'UPSC CSE Prelims Result Declared — Current Cycle', time: 'Recently', badge: 'New', badgeColor: '#22C55E' },
        { label: 'UPSC CSE Current Cycle Notification — Released', time: 'Updated today', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'UPSC CSE Next Cycle Notification — Check upsc.gov.in', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Prelims',
      icon: '✍️',
      color: '#2563EB',
      items: [
        { label: 'UPSC CSE Prelims GS & CSAT Analysis — Current Session', time: 'Recently', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'UPSC Prelims Answer Key (Unofficial) — Current Session', time: 'Updated today', badge: '', badgeColor: '' },
        { label: 'UPSC Prelims Cutoff — Current Session (Check Official)', time: 'Live', badge: 'Live', badgeColor: '#EF4444' },
      ],
    },
    {
      title: 'Mains',
      icon: '📜',
      color: '#8B5CF6',
      items: [
        { label: 'UPSC CSE Mains Schedule — Current Cycle', time: 'Upcoming', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'UPSC Mains Syllabus — GS I to IV (Current)', time: 'Recently updated', badge: '', badgeColor: '' },
        { label: 'UPSC Mains Answer Writing Strategy Guide', time: 'Recently updated', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Interview',
      icon: '🎤',
      color: '#14B8A6',
      items: [
        { label: 'UPSC Personality Test Result — Latest Cycle', time: 'Recently', badge: 'Verified', badgeColor: '#22C55E' },
        { label: 'UPSC Interview — Common Questions & Tips', time: 'Recently updated', badge: '', badgeColor: '' },
        { label: 'Final Merit List — Latest UPSC CSE Cycle', time: 'Recently', badge: 'Verified', badgeColor: '#22C55E' },
      ],
    },
    {
      title: 'Results',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'UPSC CSE Prelims Qualified List — Current Cycle', time: 'Just now', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'UPSC CSE Final Result — Previous Cycle Archive', time: 'Archive', badge: '', badgeColor: '' },
        { label: 'UPSC State-wise Toppers — Previous Cycle', time: 'Archive', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers & Resources',
      icon: '📄',
      color: '#F59E0B',
      items: [
        { label: 'UPSC CSE Prelims GS Paper 1 — Latest Session (PDF)', time: 'Available', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'UPSC Mains Previous 5 Sessions Papers', time: 'Archive', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'UPSC Topper Notes & Strategy Books', time: 'Recently updated', badge: '', badgeColor: '' },
      ],
    },
  ],
}

export default function ExamPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const exam = exams.find(e => e.key === slug)
  const sections = examSections[slug as keyof typeof examSections] || []
  const [activeSection, setActiveSection] = useState(sections[0]?.title || '')
  const [expandedItem, setExpandedItem] = useState<string | null>(null)

  const relatedNews = newsArticles.filter(a =>
    a.tags.some(t => t.toLowerCase() === slug?.toLowerCase())
  ).slice(0, 3)

  const examNav = [
    { name: 'NEET', path: '/exams/neet', color: '#EF4444' },
    { name: 'JEE', path: '/exams/jee', color: '#2563EB' },
    { name: 'CUET', path: '/exams/cuet', color: '#0EA5E9' },
    { name: 'UPSC', path: '/exams/upsc', color: '#8B5CF6' },
  ]

  if (!exam) return (
    <div className="max-w-4xl mx-auto px-4 py-24 text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">Exam not found</h2>
      <button onClick={() => navigate('/')} className="btn-primary text-white px-6 py-3 rounded-2xl text-sm font-semibold">Go Home</button>
    </div>
  )

  const currentSection = sections.find(s => s.title === activeSection)

  return (
    <div>
      {/* Exam Header */}
      <div className="relative overflow-hidden py-16 px-4" style={{ background: `linear-gradient(135deg, ${exam.color}15, ${exam.color}05)` }}>
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative">
          {/* Exam switcher */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {examNav.map(e => (
              <Link
                key={e.name}
                to={e.path}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${slug === e.name.toLowerCase() ? 'text-white border-transparent' : 'text-slate-600 border-slate-200 bg-white hover:border-slate-300'}`}
                style={slug === e.name.toLowerCase() ? { background: e.color, borderColor: e.color } : {}}
              >
                {e.name}
              </Link>
            ))}
          </div>

          <div className="flex items-start gap-5">
            <div className="text-5xl">{exam.icon}</div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                {exam.name} <span className="text-slate-400 font-normal text-xl">— {exam.fullName}</span>
              </h1>
              <p className="text-slate-500 mb-4 max-w-2xl">{exam.description}</p>
              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'Conducted By', value: exam.conductedBy },
                  { label: 'Frequency', value: exam.frequency },
                  { label: 'Total Seats', value: exam.seats },
                ].map(d => (
                  <div key={d.label} className="glass card-shadow rounded-xl px-4 py-2.5">
                    <div className="text-xs text-slate-400">{d.label}</div>
                    <div className="text-xs font-semibold text-slate-800">{d.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar nav */}
        <div className="lg:col-span-1">
          <div className="glass card-shadow rounded-2xl p-3 sticky top-20">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest px-3 py-2">Sections</div>
            {sections.map(s => (
              <button
                key={s.title}
                onClick={() => setActiveSection(s.title)}
                className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${activeSection === s.title ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}
              >
                <span>{s.icon}</span> {s.title}
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          {currentSection && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{currentSection.icon}</span>
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>{currentSection.title}</h2>
              </div>
              <div className="space-y-3">
                {currentSection.items.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setExpandedItem(expandedItem === `${activeSection}-${i}` ? null : `${activeSection}-${i}`)}
                    className="glass card-shadow rounded-2xl p-4 cursor-pointer hover:card-shadow-hover transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `${currentSection.color}15` }}>
                          <div className="w-2 h-2 rounded-full" style={{ background: currentSection.color }} />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-slate-800">{item.label}</div>
                          <div className="text-xs text-slate-400 mt-0.5">{item.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {item.badge && (
                          <span className="text-[10px] font-bold text-white px-2 py-0.5 rounded-full" style={{ background: item.badgeColor }}>
                            {item.badge}
                          </span>
                        )}
                        <svg className={`w-4 h-4 text-slate-400 transition-transform ${expandedItem === `${activeSection}-${i}` ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    {expandedItem === `${activeSection}-${i}` && (
                      <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
                        Official information about "{item.label}". Visit the official website for the most up-to-date details and to download official documents.
                        <div className="flex gap-2 mt-3">
                          <button className="btn-primary text-white px-4 py-1.5 rounded-lg text-xs font-medium">Official Website →</button>
                          <button className="border border-slate-200 text-slate-600 px-4 py-1.5 rounded-lg text-xs font-medium hover:border-blue-300 transition-colors">Download PDF</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related News */}
          {relatedNews.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-bold text-slate-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Related News</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {relatedNews.map(item => <NewsCard key={item.id} item={item} />)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


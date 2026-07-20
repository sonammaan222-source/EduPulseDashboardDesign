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
        { label: 'NEET UG 2024 Results Declared', date: 'Jul 18, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'NEET UG 2024 Final Answer Key Released', date: 'Jul 10, 2026', badge: '', badgeColor: '' },
        { label: 'NEET UG 2024 Counselling Schedule Released', date: 'Jul 5, 2026', badge: '', badgeColor: '' },
        { label: 'NEET UG 2025 Notification Expected in December 2026', date: 'Jun 30, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Registration',
      icon: '📝',
      color: '#2563EB',
      items: [
        { label: 'NEET UG 2025 Registration Dates (Expected)', date: 'Dec 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'How to Register for NEET UG — Step by Step Guide', date: 'Jun 12, 2026', badge: '', badgeColor: '' },
        { label: 'NEET UG 2024 Application Statistics', date: 'Mar 30, 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Admit Card',
      icon: '🪪',
      color: '#0EA5E9',
      items: [
        { label: 'NEET UG 2024 Admit Card — Download Link', date: 'Apr 28, 2026', badge: '', badgeColor: '' },
        { label: 'How to Download NEET Admit Card', date: 'Apr 26, 2026', badge: '', badgeColor: '' },
        { label: 'NEET Admit Card Correction Window Closed', date: 'Apr 20, 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Results',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'NEET UG 2024 Results — Check Merit List', date: 'Jul 18, 2026', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'NEET UG 2024 Topper List & Cutoff Marks', date: 'Jul 18, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'NEET UG 2023 Result Archive', date: 'Jun 13, 2023', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Counselling',
      icon: '🎓',
      color: '#14B8A6',
      items: [
        { label: 'MCC NEET UG Counselling 2024 Schedule', date: 'Jul 25, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'NEET UG 2024 State Counselling Dates', date: 'Jul 20, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'How to Register for MCC Counselling', date: 'Jul 15, 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers',
      icon: '📄',
      color: '#8B5CF6',
      items: [
        { label: 'NEET 2024 Question Paper with Solutions (PDF)', date: 'May 5, 2026', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'NEET 2023 Question Paper with Solutions (PDF)', date: 'May 7, 2023', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'NEET Previous 10 Years Papers Bundle', date: 'Jan 1, 2026', badge: 'Download', badgeColor: '#2563EB' },
      ],
    },
  ],
  jee: [
    {
      title: 'Latest Notifications',
      icon: '🔔',
      color: '#2563EB',
      items: [
        { label: 'JEE Advanced 2024 Results Released', date: 'Jun 9, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'JEE Main 2024 Session 2 Results Declared', date: 'May 1, 2026', badge: '', badgeColor: '' },
        { label: 'JEE Main 2025 Notification Released', date: 'Nov 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'JEE Main',
      icon: '📝',
      color: '#0EA5E9',
      items: [
        { label: 'JEE Main 2024 Session 2 Results & Cutoff', date: 'May 1, 2026', badge: '', badgeColor: '' },
        { label: 'JEE Main 2024 Answer Key (Final)', date: 'Apr 20, 2026', badge: '', badgeColor: '' },
        { label: 'JEE Main Registration Process Guide', date: 'Jan 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'JEE Advanced',
      icon: '⚙️',
      color: '#2563EB',
      items: [
        { label: 'JEE Advanced 2024 Results — AIR List', date: 'Jun 9, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'JEE Advanced 2024 Cutoff (IIT-wise)', date: 'Jun 9, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'JoSAA Counselling 2024 Schedule', date: 'Jun 15, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Results & Cutoff',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'JEE Advanced 2024 Category-wise Cutoff', date: 'Jun 9, 2026', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'JEE Main 2024 Percentile vs Rank Predictor', date: 'May 2026', badge: '', badgeColor: '' },
        { label: 'Previous Year JEE Cutoff Comparison', date: 'Jan 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers',
      icon: '📄',
      color: '#8B5CF6',
      items: [
        { label: 'JEE Advanced 2024 Paper 1 & 2 (PDF)', date: 'May 26, 2026', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'JEE Main 2024 All Shifts Question Papers', date: 'Feb 2026', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'JEE 10-Year Paper Collection', date: 'Jan 2026', badge: 'Download', badgeColor: '#2563EB' },
      ],
    },
    {
      title: 'FAQs',
      icon: '❓',
      color: '#F59E0B',
      items: [
        { label: 'JEE Main vs JEE Advanced — Key Differences', date: 'Jan 2026', badge: '', badgeColor: '' },
        { label: 'How Many Attempts Are Allowed in JEE?', date: 'Jan 2026', badge: '', badgeColor: '' },
        { label: 'JEE Eligibility Criteria 2025', date: 'Nov 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
  ],
  cuet: [
    {
      title: 'Latest Notifications',
      icon: '🔔',
      color: '#0EA5E9',
      items: [
        { label: 'CUET PG 2024 Revised Timetable Released', date: 'Jul 14, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'CUET UG 2024 Admit Card Released', date: 'May 12, 2026', badge: '', badgeColor: '' },
        { label: 'CUET 2025 Exam Dates (Expected)', date: 'Mar 2027', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'CUET UG',
      icon: '🎓',
      color: '#2563EB',
      items: [
        { label: 'CUET UG 2024 Results & University Cutoffs', date: 'Jun 2026', badge: '', badgeColor: '' },
        { label: 'CUET UG 2024 Registration Summary', date: 'Feb 2026', badge: '', badgeColor: '' },
        { label: 'Universities Accepting CUET Score 2024', date: 'Jan 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'CUET PG',
      icon: '📚',
      color: '#0EA5E9',
      items: [
        { label: 'CUET PG 2024 New Schedule (Revised)', date: 'Jul 14, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'CUET PG 2024 Admit Card — Download', date: 'Aug 5, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'CUET PG 2024 Result Date', date: 'Sep 15, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Admit Card',
      icon: '🪪',
      color: '#14B8A6',
      items: [
        { label: 'CUET PG 2024 Admit Card (Available Aug 5)', date: 'Aug 5, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'CUET UG 2024 Admit Card — Download', date: 'May 12, 2026', badge: '', badgeColor: '' },
        { label: 'Hall Ticket Instructions & Guidelines', date: 'May 10, 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Results',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'CUET PG 2024 Result (Sep 15)', date: 'Sep 15, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'CUET UG 2024 Scorecard Download', date: 'Jun 2026', badge: '', badgeColor: '' },
        { label: 'CUET 2023 Result Archive', date: 'Jul 2023', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers',
      icon: '📄',
      color: '#8B5CF6',
      items: [
        { label: 'CUET UG 2024 Question Papers (All Subjects)', date: 'May 2026', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'CUET PG 2023 Question Papers', date: 'Jun 2023', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'CUET Preparation Books & Resources', date: 'Jan 2026', badge: '', badgeColor: '' },
      ],
    },
  ],
  upsc: [
    {
      title: 'Latest Notifications',
      icon: '🔔',
      color: '#8B5CF6',
      items: [
        { label: 'UPSC CSE 2024 Prelims Result Declared', date: 'Jun 20, 2026', badge: 'New', badgeColor: '#22C55E' },
        { label: 'UPSC CSE 2024 Notification Released', date: 'Feb 14, 2026', badge: '', badgeColor: '' },
        { label: 'UPSC CSE 2025 Notification (Expected Feb 2027)', date: 'Feb 2027', badge: 'Upcoming', badgeColor: '#F59E0B' },
      ],
    },
    {
      title: 'Prelims',
      icon: '✍️',
      color: '#2563EB',
      items: [
        { label: 'UPSC CSE Prelims 2024 GS & CSAT Analysis', date: 'May 27, 2026', badge: '', badgeColor: '' },
        { label: 'UPSC Prelims 2024 Answer Key (Unofficial)', date: 'May 26, 2026', badge: '', badgeColor: '' },
        { label: 'UPSC Prelims Cutoff 2024 (Expected)', date: 'Jun 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Mains',
      icon: '📜',
      color: '#8B5CF6',
      items: [
        { label: 'UPSC CSE Mains 2024 Schedule (Sep 20)', date: 'Sep 20, 2026', badge: 'Upcoming', badgeColor: '#F59E0B' },
        { label: 'UPSC Mains Syllabus 2024 — GS I to IV', date: 'Feb 2026', badge: '', badgeColor: '' },
        { label: 'UPSC Mains Answer Writing Strategy', date: 'Mar 2026', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Interview',
      icon: '🎤',
      color: '#14B8A6',
      items: [
        { label: 'UPSC Personality Test 2023 Result', date: 'Apr 2024', badge: '', badgeColor: '' },
        { label: 'UPSC Interview — Common Questions & Tips', date: 'Mar 2026', badge: '', badgeColor: '' },
        { label: 'Final Merit List UPSC CSE 2023', date: 'Apr 2024', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Results',
      icon: '📊',
      color: '#22C55E',
      items: [
        { label: 'UPSC CSE 2024 Prelims Qualified List', date: 'Jun 20, 2026', badge: 'Live', badgeColor: '#EF4444' },
        { label: 'UPSC CSE 2023 Final Result', date: 'Apr 16, 2024', badge: '', badgeColor: '' },
        { label: 'UPSC State-wise Toppers 2023', date: 'Apr 2024', badge: '', badgeColor: '' },
      ],
    },
    {
      title: 'Previous Papers & Resources',
      icon: '📄',
      color: '#F59E0B',
      items: [
        { label: 'UPSC CSE 2024 Prelims GS Paper 1 (PDF)', date: 'May 26, 2026', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'UPSC Mains Previous 5 Years Papers', date: 'Jan 2026', badge: 'Download', badgeColor: '#2563EB' },
        { label: 'UPSC Topper Notes & Strategy Books', date: 'Jan 2026', badge: '', badgeColor: '' },
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
                          <div className="text-xs text-slate-400 mt-0.5">{item.date}</div>
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


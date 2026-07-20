import { useNavigate } from 'react-router'
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts'
import { newsArticles, examTrend, stateData, passData } from '../data'
import NewsCard from '../components/NewsCard'

const timelineSteps = [
  { label: 'Registration', icon: '📝', done: true },
  { label: 'Admit Card', icon: '🪪', done: true },
  { label: 'Exam', icon: '✍️', done: true },
  { label: 'Answer Key', icon: '🔑', done: false, active: true },
  { label: 'Result', icon: '📊', done: false },
  { label: 'Counselling', icon: '🎓', done: false },
]

const helpCards = [
  { icon: '🌐', title: 'Official Websites', desc: 'NTA, UGC, CBSE & all board portals', color: '#2563EB', to: '/resources' },
  { icon: '📮', title: 'Complaint Portal', desc: 'File grievances & track status', color: '#EF4444', to: '/resources' },
  { icon: '🤝', title: 'Counselling', desc: 'State & central counselling links', color: '#22C55E', to: '/resources' },
  { icon: '❓', title: 'FAQs', desc: 'Answers to 500+ student queries', color: '#0EA5E9', to: '/resources' },
  { icon: '🏆', title: 'Scholarships', desc: 'Central & state scholarship finder', color: '#F59E0B', to: '/resources' },
  { icon: '🧘', title: 'Mental Wellness', desc: 'iCall, Vandrevala & support lines', color: '#8B5CF6', to: '/resources' },
  { icon: '🚀', title: 'Career Guidance', desc: 'Aptitude tests & mentorship programs', color: '#14B8A6', to: '/resources' },
  { icon: '📞', title: 'Contact Support', desc: '24/7 helpline & live chat', color: '#6B7280', to: '/contact' },
]

function StatCard({ label, value, change, icon, color }: { label: string; value: string; change: string; icon: string; color: string }) {
  const isUp = change.startsWith('+')
  return (
    <div className="glass card-shadow rounded-2xl p-5 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5">
      <div className="flex items-start justify-between mb-3">
        <div className="text-2xl">{icon}</div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${isUp ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-500'}`}>
          {change}
        </span>
      </div>
      <div className="font-mono text-2xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Space Grotesk', monospace" }}>{value}</div>
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-3 h-1 rounded-full bg-slate-100">
        <div className="h-1 rounded-full" style={{ width: '68%', background: color }} />
      </div>
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative hero-gradient overflow-hidden min-h-[88vh] flex items-center">
        <div className="absolute inset-0 grid-pattern" />

        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <span className="absolute top-16 left-12 text-5xl animate-float opacity-20">📚</span>
          <span className="absolute top-32 right-20 text-4xl animate-float-delay opacity-15">🎓</span>
          <span className="absolute top-48 left-1/4 text-3xl animate-float opacity-10">📊</span>
          <span className="absolute bottom-32 left-16 text-4xl animate-float-delay opacity-15">📰</span>
          <span className="absolute top-20 left-1/2 text-2xl animate-float opacity-10">🤖</span>
          <span className="absolute bottom-48 right-32 text-5xl animate-float opacity-15">📜</span>
          <span className="absolute top-64 right-8 text-3xl animate-float-delay opacity-10">📋</span>
          <span className="absolute bottom-20 left-1/3 text-3xl animate-float opacity-10">🏆</span>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="animate-slide-in">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse-dot" />
              <span className="text-xs font-semibold text-blue-700">India's #1 Education Transparency Platform</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Stay Updated with<br />
              <span className="gradient-text">India's Education</span><br />
              Ecosystem
            </h1>
            <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg">
              Verified News &bull; Official Notifications &bull; Exam Analytics &bull; Career Resources
            </p>
            <div className="flex flex-wrap gap-3">
              <button onClick={() => navigate('/dashboard')} className="btn-primary text-white font-semibold px-6 py-3.5 rounded-2xl text-sm flex items-center gap-2">
                <span>🚀</span> Explore Dashboard
              </button>
              <button onClick={() => navigate('/news')} className="border border-slate-300 bg-white/80 text-slate-700 font-semibold px-6 py-3.5 rounded-2xl text-sm hover:bg-white hover:border-blue-300 transition-all flex items-center gap-2">
                <span>📰</span> Latest News
              </button>
              <button onClick={() => navigate('/exams/neet')} className="border border-teal-300 bg-teal-50 text-teal-700 font-semibold px-6 py-3.5 rounded-2xl text-sm hover:bg-teal-100 transition-all flex items-center gap-2">
                <span>📚</span> Explore Exams
              </button>
            </div>
            <div className="flex items-center gap-6 mt-10">
              {[['2.3M+', 'Students Tracked'], ['98%', 'Accuracy Rate'], ['500+', 'Verified Sources']].map(([v, l]) => (
                <div key={l}>
                  <div className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', monospace" }}>{v}</div>
                  <div className="text-xs text-slate-500">{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[520px]">
              <div className="glass card-shadow rounded-3xl p-5 absolute top-0 right-0 w-80">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-slate-700" style={{ fontFamily: "'Poppins', sans-serif" }}>Exam Analytics</span>
                  <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full font-semibold">● Live</span>
                </div>
                <ResponsiveContainer width="100%" height={100}>
                  <AreaChart data={examTrend.slice(-3)} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
                    <defs>
                      <linearGradient id="neetGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563EB" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="neet" stroke="#2563EB" strokeWidth={2} fill="url(#neetGrad)" dot={false} />
                    <XAxis dataKey="year" tick={{ fontSize: 10 }} />
                  </AreaChart>
                </ResponsiveContainer>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {[['2.32M', 'Applicants', '#2563EB'], ['48.6%', 'Pass Rate', '#22C55E']].map(([v, l, c]) => (
                    <div key={l} className="bg-slate-50 rounded-xl p-3">
                      <div className="font-bold text-base" style={{ fontFamily: "'Space Grotesk', monospace", color: c }}>{v}</div>
                      <div className="text-xs text-slate-500">{l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass card-shadow rounded-2xl p-4 absolute top-52 left-0 w-60">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse-dot" />
                  <span className="text-xs font-bold text-red-600">BREAKING</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-snug">NEET UG 2024 Results Declared: Record 2.32 Lakh Students Qualify</p>
                <p className="text-[10px] text-slate-400 mt-1">2 hours ago · NTA Official</p>
              </div>

              <div className="glass card-shadow rounded-2xl p-4 absolute bottom-0 right-8 w-52">
                <div className="text-xs font-bold text-slate-600 mb-2 flex items-center gap-1">📅 Upcoming</div>
                {[
                  { date: 'Jul 22', event: 'JEE Objection Deadline' },
                  { date: 'Jul 31', event: 'YASASVI Last Date' },
                  { date: 'Aug 5', event: 'CUET PG Result' },
                ].map(e => (
                  <div key={e.date} className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-blue-600 w-10" style={{ fontFamily: "'Space Grotesk', monospace" }}>{e.date}</span>
                    <span className="text-[10px] text-slate-600">{e.event}</span>
                  </div>
                ))}
              </div>

              <div className="glass card-shadow rounded-2xl p-3 absolute bottom-28 left-4 w-40">
                <div className="text-[10px] font-bold text-slate-500 mb-1">Pass Ratio</div>
                <ResponsiveContainer width="100%" height={60}>
                  <PieChart>
                    <Pie data={passData} cx="50%" cy="50%" innerRadius={18} outerRadius={28} dataKey="value" startAngle={90} endAngle={-270}>
                      {passData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center text-xs font-bold text-green-600" style={{ fontFamily: "'Space Grotesk', monospace" }}>48.6% Pass</div>
              </div>

              <div className="glass card-shadow rounded-xl px-3 py-2 absolute top-16 left-12 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot" />
                <span className="text-[10px] font-semibold text-slate-600">All Systems Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Breaking News ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse-dot" />
              <span className="text-xs font-bold text-red-600 tracking-widest uppercase">🔴 Breaking Education Updates</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Latest News</h2>
          </div>
          <button onClick={() => navigate('/news')} className="border border-slate-200 bg-white text-slate-700 font-semibold px-6 py-2.5 rounded-xl text-sm hover:border-blue-300 hover:text-blue-600 transition-all">
            View All News →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {newsArticles.slice(0, 6).map(item => <NewsCard key={item.id} item={item} />)}
        </div>
      </section>

      {/* ── Exam Quick Access ─────────────────────────────────────────────── */}
      <section className="py-12 px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Major Examinations</h2>
            <p className="text-slate-500 text-sm mt-1">Latest updates from all competitive exams</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'NEET', icon: '🩺', color: '#EF4444', path: '/exams/neet', desc: 'Medical entrance for MBBS/BDS' },
              { name: 'JEE', icon: '⚙️', color: '#2563EB', path: '/exams/jee', desc: 'Engineering entrance for IITs' },
              { name: 'CUET', icon: '🎓', color: '#0EA5E9', path: '/exams/cuet', desc: 'Central university admissions' },
              { name: 'UPSC', icon: '🏛️', color: '#8B5CF6', path: '/exams/upsc', desc: 'Civil services IAS/IPS/IFS' },
            ].map(exam => (
              <button
                key={exam.name}
                onClick={() => navigate(exam.path)}
                className="glass card-shadow rounded-2xl p-6 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 text-left group"
              >
                <div className="text-3xl mb-3">{exam.icon}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: exam.color }}>{exam.name}</h3>
                <p className="text-xs text-slate-500">{exam.desc}</p>
                <div className="mt-3 text-xs font-semibold flex items-center gap-1 transition-colors" style={{ color: exam.color }}>
                  View Details <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Analytics Dashboard ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-3 px-3 py-1 bg-blue-50 rounded-full">Live Data</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Exam Analytics Dashboard</h2>
            <p className="text-slate-500">Real-time statistics from India's major competitive examinations</p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-10">
            {[
              { label: 'Total Applicants', value: '2.32M', change: '+12.3%', icon: '👥', color: '#2563EB' },
              { label: 'Qualified Students', value: '1.13M', change: '+8.1%', icon: '✅', color: '#22C55E' },
              { label: 'Pass Percentage', value: '48.6%', change: '+2.4%', icon: '📈', color: '#14B8A6' },
              { label: 'Seats Available', value: '108K', change: '+5.2%', icon: '🏛️', color: '#0EA5E9' },
              { label: 'States Covered', value: '36', change: '+0', icon: '🗺️', color: '#8B5CF6' },
              { label: 'vs Last Year', value: '+18%', change: '+18%', icon: '📊', color: '#F59E0B' },
            ].map(s => <StatCard key={s.label} {...s} />)}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 glass card-shadow rounded-3xl p-6 cursor-pointer hover:card-shadow-hover transition-all" onClick={() => navigate('/dashboard')}>
              <h3 className="font-semibold text-slate-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Applicant Trend (5 Years)</h3>
              <p className="text-xs text-slate-400 mb-5">NEET · JEE · CUET applicants over time — <span className="text-blue-500">click for full analysis</span></p>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={examTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tickFormatter={v => `${(v/1e6).toFixed(1)}M`} tick={{ fontSize: 11 }} width={45} />
                  <Tooltip formatter={(v: number) => [`${(v/1e6).toFixed(2)}M`, '']} />
                  <Legend />
                  <Line type="monotone" dataKey="neet" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 3 }} name="NEET" />
                  <Line type="monotone" dataKey="jee" stroke="#0EA5E9" strokeWidth={2.5} dot={{ r: 3 }} name="JEE" />
                  <Line type="monotone" dataKey="cuet" stroke="#14B8A6" strokeWidth={2.5} dot={{ r: 3 }} name="CUET" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="glass card-shadow rounded-3xl p-6 flex flex-col cursor-pointer hover:card-shadow-hover transition-all" onClick={() => navigate('/dashboard')}>
              <h3 className="font-semibold text-slate-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>NEET 2024 Pass Ratio</h3>
              <p className="text-xs text-slate-400 mb-4">Qualified vs Not Qualified</p>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={passData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" startAngle={90} endAngle={-270}>
                    {passData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-2 mt-2">
                {passData.map(d => (
                  <div key={d.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                      <span className="text-xs text-slate-600">{d.name}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-800" style={{ fontFamily: "'Space Grotesk', monospace" }}>{(d.value/1000).toFixed(0)}K</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass card-shadow rounded-3xl p-6 cursor-pointer hover:card-shadow-hover transition-all" onClick={() => navigate('/dashboard')}>
              <h3 className="font-semibold text-slate-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>State-wise Participation</h3>
              <p className="text-xs text-slate-400 mb-4">Top 6 states by student count</p>
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={stateData} barSize={22}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                  <XAxis dataKey="state" tick={{ fontSize: 11 }} />
                  <YAxis tickFormatter={v => `${v/1000}K`} tick={{ fontSize: 11 }} width={40} />
                  <Tooltip formatter={(v: number) => [`${(v/1000).toFixed(0)}K students`, '']} />
                  <Bar dataKey="students" fill="#2563EB" radius={[6, 6, 0, 0]}>
                    {stateData.map((_, i) => <Cell key={i} fill={`hsl(${217 - i * 12}, ${85 - i * 5}%, ${55 + i * 3}%)`} />)}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="lg:col-span-2 glass card-shadow rounded-3xl p-6 cursor-pointer hover:card-shadow-hover transition-all" onClick={() => navigate('/dashboard')}>
              <h3 className="font-semibold text-slate-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Growth Trajectory</h3>
              <p className="text-xs text-slate-400 mb-4">Year-over-year growth — <span className="text-blue-500">click for detailed view</span></p>
              <ResponsiveContainer width="100%" height={180}>
                <AreaChart data={examTrend}>
                  <defs>
                    <linearGradient id="neatBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563EB" stopOpacity={0.25} />
                      <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="skyBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                  <YAxis tickFormatter={v => `${(v/1e6).toFixed(1)}M`} tick={{ fontSize: 11 }} width={45} />
                  <Tooltip formatter={(v: number) => [`${(v/1e6).toFixed(2)}M`, '']} />
                  <Area type="monotone" dataKey="neet" stroke="#2563EB" strokeWidth={2} fill="url(#neatBlue)" name="NEET" />
                  <Area type="monotone" dataKey="jee" stroke="#0EA5E9" strokeWidth={2} fill="url(#skyBlue)" name="JEE" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="text-center mt-8">
            <button onClick={() => navigate('/dashboard')} className="btn-primary text-white font-semibold px-8 py-3.5 rounded-2xl text-sm">
              Open Full Dashboard →
            </button>
          </div>
        </div>
      </section>

      {/* ── Exam Timeline ─────────────────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Exam Timeline 2024</h2>
            <p className="text-blue-200 text-sm">Track every stage of your examination journey</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-0">
            {timelineSteps.map((step, i) => (
              <div key={step.label} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-2 transition-all duration-300 ${step.done ? 'bg-white/20 border-2 border-white/50' : step.active ? 'bg-white shadow-lg shadow-white/30 scale-110' : 'bg-white/10 border-2 border-white/20'}`}>
                    {step.icon}
                  </div>
                  <span className={`text-xs font-semibold text-center ${step.active ? 'text-white' : step.done ? 'text-blue-200' : 'text-blue-300'}`}>{step.label}</span>
                  {step.done && <span className="text-[10px] text-green-300 font-medium mt-0.5">✓ Done</span>}
                  {step.active && <span className="text-[10px] text-yellow-300 font-medium mt-0.5 animate-pulse">● Live</span>}
                </div>
                {i < timelineSteps.length - 1 && (
                  <div className={`w-8 sm:w-16 h-0.5 mx-1 sm:mx-2 mb-6 ${step.done ? 'bg-white/60' : 'bg-white/20'}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Student Help Center ───────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-widest text-sky-600 uppercase mb-3 px-3 py-1 bg-sky-50 rounded-full">Support</span>
            <h2 className="text-3xl font-bold text-slate-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Student Help Center</h2>
            <p className="text-slate-500">Everything you need — in one place</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {helpCards.map(card => (
              <button key={card.title} onClick={() => navigate(card.to)}
                className="glass card-shadow rounded-2xl p-6 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group text-left">
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-semibold text-slate-800 mb-1 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{card.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                <div className="mt-3 w-6 h-0.5 rounded-full group-hover:w-12 transition-all duration-300" style={{ background: card.color }} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reform Spotlight ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-teal-600 uppercase mb-3 px-3 py-1 bg-teal-50 rounded-full">Featured Story</span>
          <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Education Reform & Innovation</h2>
          <p className="text-slate-500 mt-2 max-w-xl mx-auto text-sm">Highlighting innovative teaching methods, sustainable education initiatives, and influential reformers.</p>
        </div>
        <div className="glass card-shadow rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 p-10 relative overflow-hidden flex flex-col justify-between">
              <div className="absolute inset-0 grid-pattern opacity-20" />
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-white/40 overflow-hidden mb-5 bg-teal-700 flex items-center justify-center">
                  <span className="text-4xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Sonam Wangchuk</h3>
                <p className="text-teal-200 text-sm mb-4">Engineer · Educator · Innovator · Ladakh, India</p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Founder of SECMOL, Sonam Wangchuk has pioneered alternative education models that blend traditional wisdom with sustainable innovation — inspiring learners in remote Himalayan communities.
                </p>
              </div>
              <div className="relative mt-6">
                <button onClick={() => navigate('/education-reform')} className="bg-white text-teal-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-teal-50 transition-colors">
                  Read Full Story →
                </button>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <h4 className="font-bold text-slate-900 mb-6 text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>Timeline of Initiatives</h4>
              <div className="space-y-5">
                {[
                  { year: '1988', event: 'Founded Operation New Hope — reformed govt school curriculum in Ladakh', color: '#2563EB' },
                  { year: '1994', event: 'Established SECMOL campus — solar-powered, student-run alternative school', color: '#0EA5E9' },
                  { year: '2013', event: 'Invented the "Ice Stupa" — artificial glaciers to address water scarcity', color: '#14B8A6' },
                  { year: '2018', event: 'RAM — Real Alternatives Mission for sustainable living & education', color: '#22C55E' },
                  { year: '2024', event: "Continued advocacy for education reform & Ladakh's ecological rights", color: '#F59E0B' },
                ].map(item => (
                  <div key={item.year} className="flex gap-4">
                    <span className="inline-block w-12 text-center text-xs font-bold py-1 rounded-lg text-white flex-shrink-0" style={{ background: item.color, fontFamily: "'Space Grotesk', monospace" }}>{item.year}</span>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.event}</p>
                  </div>
                ))}
              </div>
              <button onClick={() => navigate('/education-reform')} className="mt-6 text-teal-600 font-semibold text-sm hover:text-teal-700 flex items-center gap-1 transition-colors">
                View Education Reform Page →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

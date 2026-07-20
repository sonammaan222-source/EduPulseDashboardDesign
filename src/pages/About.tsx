import { useNavigate } from 'react-router'

const values = [
  { icon: '✅', title: 'Verified First', desc: 'Every piece of news is cross-checked against official sources — NTA, UPSC, UGC, and government portals — before publication.' },
  { icon: '🔍', title: 'Transparent', desc: 'We clearly disclose our sources, note corrections visibly, and provide direct links to official government notifications.' },
  { icon: '🎓', title: 'Student-First', desc: 'We design every feature for students — from exam notifications to mental wellness resources — prioritising accessibility.' },
  { icon: '⚡', title: 'Real-Time', desc: 'Our systems monitor 500+ official sources 24/7 to surface critical exam updates within minutes of release.' },
]

const team = [
  { name: 'Arjun Mehta', role: 'Founder & Editor-in-Chief', emoji: '👨‍💼', bio: 'Former IAS aspirant & education journalist with 8 years of experience covering competitive exams.' },
  { name: 'Priya Sharma', role: 'Lead Data Analyst', emoji: '👩‍💻', bio: 'M.Stat from ISI Kolkata. Builds the analytics engine that powers our exam dashboards.' },
  { name: 'Rajesh Kumar', role: 'Senior Correspondent', emoji: '📰', bio: 'Covers UPSC and government policy. Former contributor to The Hindu Education Plus.' },
  { name: 'Dr. Ananya Bose', role: 'Education Policy Expert', emoji: '🎓', bio: 'PhD in Education Policy from JNU. Advisor on NEP 2020 implementation coverage.' },
]

const roadmap = [
  { quarter: 'Q3 2026', milestone: 'AI-powered fake news verification engine (Beta)', done: true },
  { quarter: 'Q4 2026', milestone: 'Personalised exam alert system via SMS & WhatsApp', done: false },
  { quarter: 'Q1 2027', milestone: 'State-specific exam calendars for all 36 states', done: false },
  { quarter: 'Q2 2027', milestone: 'EduPulse mobile app — iOS & Android launch', done: false },
  { quarter: 'Q3 2027', milestone: 'Multilingual support in 12 Indian languages', done: false },
]

export default function About() {
  const navigate = useNavigate()
  return (
    <div>
      {/* Header */}
      <div className="relative bg-gradient-to-br from-blue-700 to-slate-900 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #2563EB, #14B8A6)' }}>E</div>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>About EduPulse</h1>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            Delivering verified education news, improving transparency, simplifying access to official information, and empowering students with reliable resources — since 2022.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Mission */}
        <div className="glass card-shadow rounded-3xl p-10 mb-16 text-center">
          <span className="inline-block text-xs font-bold tracking-widest text-blue-600 uppercase mb-4 px-3 py-1 bg-blue-50 rounded-full">Our Mission</span>
          <h2 className="text-2xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Making Education Transparent for Every Indian Student
          </h2>
          <p className="text-slate-500 leading-relaxed max-w-3xl mx-auto">
            India's education system affects 26 crore students, yet critical information — exam dates, results, policy changes — is often scattered across 500+ official websites. EduPulse aggregates, verifies, and presents this information in one accessible, ad-light platform that treats students as intelligent citizens, not engagement metrics.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[['2.3M+', 'Monthly Readers'], ['500+', 'Verified Sources'], ['98%', 'Accuracy Rate'], ['2022', 'Founded']].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-bold text-blue-600" style={{ fontFamily: "'Space Grotesk', monospace" }}>{v}</div>
                <div className="text-xs text-slate-500 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.title} className="glass card-shadow rounded-2xl p-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{v.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center" style={{ fontFamily: "'Poppins', sans-serif" }}>Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map(m => (
              <div key={m.name} className="glass card-shadow rounded-2xl p-6 text-center hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center text-3xl mx-auto mb-4">{m.emoji}</div>
                <h3 className="font-bold text-slate-900 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{m.name}</h3>
                <p className="text-xs text-blue-600 font-medium mb-2">{m.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="glass card-shadow rounded-3xl p-8 mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>Product Roadmap</h2>
          <div className="space-y-4">
            {roadmap.map((item, i) => (
              <div key={i} className={`flex gap-5 items-start p-4 rounded-2xl transition-all ${item.done ? 'bg-green-50' : 'bg-slate-50'}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.done ? 'bg-green-500' : 'border-2 border-slate-200 bg-white'}`}>
                  {item.done ? <span className="text-white text-xs">✓</span> : <div className="w-2 h-2 rounded-full bg-slate-300" />}
                </div>
                <div>
                  <span className="text-xs font-bold" style={{ fontFamily: "'Space Grotesk', monospace", color: item.done ? '#22C55E' : '#94A3B8' }}>{item.quarter}</span>
                  <p className="text-sm text-slate-700 mt-0.5">{item.milestone}</p>
                </div>
                {item.done && <span className="ml-auto text-xs bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Launched</span>}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button onClick={() => navigate('/contact')} className="btn-primary text-white px-8 py-3.5 rounded-2xl font-semibold text-sm mr-3">
            Get in Touch
          </button>
          <button onClick={() => navigate('/news')} className="border border-slate-200 text-slate-700 px-8 py-3.5 rounded-2xl font-semibold text-sm hover:border-blue-300 hover:text-blue-600 transition-all">
            Read Our Coverage
          </button>
        </div>
      </div>
    </div>
  )
}

import { useNavigate } from 'react-router'

const resourceSections = [
  {
    title: 'Official Websites',
    icon: '🌐',
    color: '#2563EB',
    items: [
      { name: 'NTA Official', desc: 'National Testing Agency — NEET, JEE, CUET', url: 'https://nta.ac.in' },
      { name: 'UGC', desc: 'University Grants Commission', url: 'https://ugc.ac.in' },
      { name: 'UPSC', desc: 'Union Public Service Commission', url: 'https://upsc.gov.in' },
      { name: 'CBSE', desc: 'Central Board of Secondary Education', url: 'https://cbse.gov.in' },
      { name: 'MCC Counselling', desc: 'Medical Counselling Committee — NEET', url: 'https://mcc.nic.in' },
      { name: 'JoSAA', desc: 'Joint Seat Allocation Authority — JEE', url: 'https://josaa.nic.in' },
    ],
  },
  {
    title: 'Scholarship Finder',
    icon: '🏆',
    color: '#F59E0B',
    items: [
      { name: 'National Scholarship Portal', desc: 'Central & state scholarships in one place', url: 'https://scholarships.gov.in' },
      { name: 'PM YASASVI', desc: 'OBC/EBC/DNT students — up to ₹1.25 lakh/year', url: 'https://yet.nta.ac.in' },
      { name: 'KVPY Fellowship', desc: 'Science research fellowship for Class 11–1st year UG', url: 'https://kvpy.iisc.ac.in' },
      { name: 'Chevening Scholarship', desc: 'UK fully funded PG scholarship for Indians', url: 'https://chevening.org' },
      { name: 'INSPIRE Scholarship', desc: 'DST scholarship for science excellence', url: 'https://online-inspire.gov.in' },
    ],
  },
  {
    title: 'Career Roadmaps',
    icon: '🚀',
    color: '#14B8A6',
    items: [
      { name: 'Medical Career Path', desc: 'NEET → MBBS → PG → Specialisation guide', url: '#' },
      { name: 'Engineering Career Path', desc: 'JEE → B.Tech → M.Tech / MBA / Startup', url: '#' },
      { name: 'Civil Services Path', desc: 'UPSC Prelims → Mains → Interview complete guide', url: '#' },
      { name: 'Law Career Path', desc: 'CLAT → LLB → LLM → Judiciary / Corporate', url: '#' },
      { name: 'Research Career Path', desc: 'GATE → M.Tech → PhD → Academia / R&D', url: '#' },
    ],
  },
  {
    title: 'Free Certifications',
    icon: '📜',
    color: '#6366F1',
    items: [
      { name: 'SWAYAM NPTEL', desc: '1900+ free online courses from IITs & IIMs', url: 'https://swayam.gov.in' },
      { name: 'Google Digital Garage', desc: 'Free digital marketing & career certificates', url: 'https://grow.google' },
      { name: 'Coursera Free Audit', desc: 'Audit courses from top global universities', url: 'https://coursera.org' },
      { name: 'edX Free Courses', desc: 'MIT, Harvard & more — free with certificate option', url: 'https://edx.org' },
      { name: 'Khan Academy', desc: 'Free K–12, SAT, and competitive exam prep', url: 'https://khanacademy.org' },
    ],
  },
  {
    title: 'Mental Wellness',
    icon: '🧘',
    color: '#8B5CF6',
    items: [
      { name: 'iCall — TISS', desc: 'Free psychological counselling helpline: 9152987821', url: 'https://icallhelpline.org' },
      { name: 'Vandrevala Foundation', desc: '24/7 free mental health helpline: 1860-2662-345', url: 'https://vandrevalafoundation.com' },
      { name: 'NIMHANS Online Services', desc: 'National mental health portal & resources', url: 'https://nimhans.ac.in' },
      { name: 'iMHans', desc: 'Student mental health self-assessment tool', url: '#' },
      { name: 'Exam Stress Guide', desc: 'EduPulse guide to managing exam anxiety', url: '#' },
    ],
  },
  {
    title: 'Study Materials',
    icon: '📚',
    color: '#0EA5E9',
    items: [
      { name: 'NCERT Books (All)', desc: 'Free official NCERT books PDF — Class 1–12', url: 'https://ncert.nic.in' },
      { name: 'NEET Previous Papers', desc: '10-year NEET question banks with solutions', url: '#' },
      { name: 'JEE Advanced Archives', desc: 'Complete JEE Advanced paper archive', url: '#' },
      { name: 'UPSC Study Material', desc: 'IAS prelims & mains topic-wise notes', url: '#' },
      { name: 'Mock Test Platform', desc: 'EduPulse free mock tests for NEET/JEE/CUET', url: '#' },
    ],
  },
  {
    title: 'Grievance Portals',
    icon: '📮',
    color: '#EF4444',
    items: [
      { name: 'CPGRAMS', desc: 'Centralised Public Grievance Redress System', url: 'https://pgportal.gov.in' },
      { name: 'NTA Grievance Cell', desc: 'Exam-related complaints — NTA official portal', url: 'https://nta.ac.in' },
      { name: 'UDISE+ Feedback', desc: 'School education data & grievance submission', url: 'https://udiseplus.gov.in' },
      { name: 'National Commission for Women', desc: 'Helpline for women students: 7827170170', url: 'https://ncw.nic.in' },
    ],
  },
  {
    title: 'Contact & Support',
    icon: '📞',
    color: '#6B7280',
    items: [
      { name: 'NTA Helpline', desc: '011-40759000 · student.nta@gmail.com', url: '#' },
      { name: 'UPSC Enquiry', desc: '011-23385271 · crpd@upsc.gov.in', url: '#' },
      { name: 'MCC Helpdesk', desc: '011-45595390 for NEET counselling queries', url: '#' },
      { name: 'EduPulse Support', desc: 'support@edupulse.in · 24/7 chat available', url: '/contact' },
    ],
  },
]

export default function StudentResources() {
  const navigate = useNavigate()

  return (
    <div>
      {/* Header */}
      <div className="relative bg-gradient-to-br from-sky-600 to-blue-800 py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto relative">
          <span className="inline-block text-xs font-bold tracking-widest text-sky-200 uppercase mb-3 px-3 py-1 bg-white/10 rounded-full">Student Support Hub</span>
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Student Resources</h1>
          <p className="text-sky-100 max-w-2xl">Official websites, scholarships, free courses, career roadmaps, mental wellness helplines, and grievance portals — everything a student needs in one place.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {resourceSections.slice(0, 8).map(s => (
            <a
              key={s.title}
              href={`#${s.title.replace(/\s+/g, '-').toLowerCase()}`}
              className="glass card-shadow rounded-2xl p-5 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <h3 className="font-semibold text-slate-800 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{s.title}</h3>
              <div className="mt-2 w-5 h-0.5 rounded-full group-hover:w-10 transition-all duration-300" style={{ background: s.color }} />
            </a>
          ))}
        </div>

        {/* Full Sections */}
        <div className="space-y-10">
          {resourceSections.map(section => (
            <div key={section.title} id={section.title.replace(/\s+/g, '-').toLowerCase()}>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{section.icon}</span>
                <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>{section.title}</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.items.map(item => (
                  <a
                    key={item.name}
                    href={item.url.startsWith('http') ? item.url : undefined}
                    onClick={!item.url.startsWith('http') ? (e) => { e.preventDefault(); navigate(item.url === '#' ? '/resources' : item.url) } : undefined}
                    target={item.url.startsWith('http') ? '_blank' : undefined}
                    rel={item.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="glass card-shadow rounded-2xl p-5 hover:card-shadow-hover transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group block"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-slate-800 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.name}</h3>
                      <span className="text-slate-300 group-hover:text-slate-500 transition-colors text-xs">↗</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                    <div className="mt-3 h-0.5 rounded-full w-6 group-hover:w-full transition-all duration-500" style={{ background: section.color }} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

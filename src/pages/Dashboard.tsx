import { useState } from 'react'
import LiveBadge from '../components/LiveBadge'
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, RadarChart, Radar, PolarGrid, PolarAngleAxis
} from 'recharts'
import { examTrend, stateData, passData, cutoffData } from '../data'

const upcomingExams = [
  { name: 'NEET UG Counselling — Current Session', date: 'Imminent', daysLeft: 5, color: '#EF4444' },
  { name: 'CUET PG Exam — Current Session', date: 'Upcoming', daysLeft: 23, color: '#0EA5E9' },
  { name: 'UPSC CSE Mains — Current Session', date: 'Scheduled', daysLeft: 62, color: '#8B5CF6' },
  { name: 'JEE Main — Next Session', date: 'Upcoming', daysLeft: 179, color: '#2563EB' },
  { name: 'GATE — Next Session', date: 'Upcoming', daysLeft: 196, color: '#14B8A6' },
]

const notifications = [
  { text: 'NEET UG Merit List Published on nta.ac.in — Current Session', time: 'Just now', dot: '#EF4444' },
  { text: 'JEE Advanced JoSAA Round 1 Allotment Released', time: 'Recently', dot: '#2563EB' },
  { text: 'CUET PG Revised Timetable — Download City Intimation', time: 'Today', dot: '#0EA5E9' },
  { text: 'UPSC Prelims Qualified Candidates List Available', time: 'Earlier today', dot: '#8B5CF6' },
  { text: 'PM YASASVI Scholarship Portal Open — Check deadline on portal', time: 'This week', dot: '#F59E0B' },
]

const radarData = [
  { subject: 'Physics', NEET: 68, JEE: 82, fullMark: 100 },
  { subject: 'Chemistry', NEET: 74, JEE: 71, fullMark: 100 },
  { subject: 'Biology', NEET: 85, JEE: 0, fullMark: 100 },
  { subject: 'Maths', NEET: 0, JEE: 78, fullMark: 100 },
  { subject: 'English', NEET: 62, JEE: 58, fullMark: 100 },
  { subject: 'Reasoning', NEET: 70, JEE: 75, fullMark: 100 },
]

const tabs = ['Overview', 'Trends', 'Cutoff Analysis', 'State-wise', 'Upcoming', 'Notifications']

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('Overview')

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900" style={{ fontFamily: "'Poppins', sans-serif" }}>Analytics Dashboard</h1>
          <p className="text-slate-500 text-sm mt-0.5">Live exam statistics, registration trends & cutoff analysis · Current session</p>
        </div>
        <div className="flex items-center gap-2">
          <LiveBadge label="Live" pulse size="md" />
          <span className="text-xs text-slate-400">Statistics update automatically · Current session data</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeTab === t ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
            {t}
          </button>
        ))}
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        {[
          { label: 'Total Applicants', value: '2.32M', change: '+12.3%', icon: '👥', color: '#2563EB' },
          { label: 'Qualified', value: '1.13M', change: '+8.1%', icon: '✅', color: '#22C55E' },
          { label: 'Pass Rate', value: '48.6%', change: '+2.4%', icon: '📈', color: '#14B8A6' },
          { label: 'Seats', value: '108K', change: '+5.2%', icon: '🏛️', color: '#0EA5E9' },
          { label: 'States', value: '36', change: '0', icon: '🗺️', color: '#8B5CF6' },
          { label: 'YoY Growth', value: '+18%', change: '+18%', icon: '📊', color: '#F59E0B' },
        ].map(s => (
          <div key={s.label} className="glass card-shadow rounded-2xl p-4 hover:card-shadow-hover transition-all duration-300">
            <div className="flex items-start justify-between mb-2">
              <span className="text-xl">{s.icon}</span>
              <span className={`text-xs font-semibold px-1.5 py-0.5 rounded-full ${s.change.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-slate-50 text-slate-500'}`}>{s.change}</span>
            </div>
            <div className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', monospace" }}>{s.value}</div>
            <div className="text-xs text-slate-500">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Tab content */}
      {activeTab === 'Overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 glass card-shadow rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-semibold text-slate-800" style={{ fontFamily: "'Poppins', sans-serif" }}>Registration Trend (Last 5 Sessions)</h3>
              <LiveBadge label="Live" pulse />
            </div>
            <p className="text-xs text-slate-400 mb-5">NEET · JEE · CUET — indicative data, refreshed each session</p>
            <ResponsiveContainer width="100%" height={240}>
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
          <div className="glass card-shadow rounded-3xl p-6 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>NEET Pass Ratio — Current Session</h3>
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

          <div className="glass card-shadow rounded-3xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Subject Difficulty Index</h3>
            <ResponsiveContainer width="100%" height={200}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis dataKey="subject" tick={{ fontSize: 10 }} />
                <Radar name="NEET" dataKey="NEET" stroke="#EF4444" fill="#EF4444" fillOpacity={0.15} />
                <Radar name="JEE" dataKey="JEE" stroke="#2563EB" fill="#2563EB" fillOpacity={0.15} />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="lg:col-span-2 glass card-shadow rounded-3xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>State-wise Participation — Current Session</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={stateData} barSize={24}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="state" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={v => `${v/1000}K`} tick={{ fontSize: 11 }} width={40} />
                <Tooltip formatter={(v: number) => [`${(v/1000).toFixed(0)}K students`, '']} />
                <Bar dataKey="students" radius={[6, 6, 0, 0]}>
                  {stateData.map((_, i) => <Cell key={i} fill={`hsl(${217 - i * 12}, ${85 - i * 5}%, ${55 + i * 3}%)`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'Trends' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass card-shadow rounded-3xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Registration Growth</h3>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={examTrend}>
                <defs>
                  <linearGradient id="neetArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="jeeArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0EA5E9" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#0EA5E9" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="cuetArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#14B8A6" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#14B8A6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="year" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={v => `${(v/1e6).toFixed(1)}M`} tick={{ fontSize: 11 }} width={45} />
                <Tooltip formatter={(v: number) => [`${(v/1e6).toFixed(2)}M`, '']} />
                <Legend />
                <Area type="monotone" dataKey="neet" stroke="#2563EB" fill="url(#neetArea)" name="NEET" />
                <Area type="monotone" dataKey="jee" stroke="#0EA5E9" fill="url(#jeeArea)" name="JEE" />
                <Area type="monotone" dataKey="cuet" stroke="#14B8A6" fill="url(#cuetArea)" name="CUET" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="glass card-shadow rounded-3xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>State Participation Breakdown</h3>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={stateData} layout="vertical" barSize={16}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" horizontal={false} />
                <XAxis type="number" tickFormatter={v => `${v/1000}K`} tick={{ fontSize: 10 }} />
                <YAxis dataKey="state" type="category" tick={{ fontSize: 11 }} width={30} />
                <Tooltip formatter={(v: number) => [`${(v/1000).toFixed(0)}K`, 'Students']} />
                <Bar dataKey="students" radius={[0, 6, 6, 0]}>
                  {stateData.map((_, i) => <Cell key={i} fill={`hsl(${217 - i * 12}, 80%, ${55 + i * 3}%)`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {activeTab === 'Cutoff Analysis' && (
        <div className="glass card-shadow rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-slate-800" style={{ fontFamily: "'Poppins', sans-serif" }}>NEET Cutoff Trends (Last 5 Sessions)</h3>
            <LiveBadge label="Verified" color="#22C55E" />
          </div>
          <p className="text-xs text-slate-400 mb-6">Category-wise qualifying cutoff — indicative data, updated after each session result</p>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={cutoffData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
              <XAxis dataKey="year" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="gen" stroke="#2563EB" strokeWidth={2.5} dot={{ r: 4 }} name="General" />
              <Line type="monotone" dataKey="obc" stroke="#0EA5E9" strokeWidth={2.5} dot={{ r: 4 }} name="OBC" />
              <Line type="monotone" dataKey="sc" stroke="#14B8A6" strokeWidth={2.5} dot={{ r: 4 }} name="SC" />
              <Line type="monotone" dataKey="st" stroke="#F59E0B" strokeWidth={2.5} dot={{ r: 4 }} name="ST" />
            </LineChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {[
              { cat: 'General Cutoff', score: '164/720', percent: 'Current session', color: '#2563EB' },
              { cat: 'OBC Cutoff', score: '129/720', percent: 'Current session', color: '#0EA5E9' },
              { cat: 'SC Cutoff', score: '129/720', percent: 'Current session', color: '#14B8A6' },
              { cat: 'ST Cutoff', score: '129/720', percent: 'Current session', color: '#F59E0B' },
            ].map(c => (
              <div key={c.cat} className="bg-slate-50 rounded-2xl p-4">
                <div className="text-xs text-slate-500 mb-1">{c.cat} Cutoff — Current Session</div>
                <div className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', monospace", color: c.color }}>{c.score}</div>
                <div className="text-xs text-slate-400 mt-1">{c.percent}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'State-wise' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass card-shadow rounded-3xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>Top States by Applicants</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={stateData} barSize={28}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
                <XAxis dataKey="state" tick={{ fontSize: 11 }} />
                <YAxis tickFormatter={v => `${v/1000}K`} tick={{ fontSize: 11 }} width={40} />
                <Tooltip formatter={(v: number) => [`${(v/1000).toFixed(0)}K students`, 'Applicants']} />
                <Bar dataKey="students" radius={[6, 6, 0, 0]}>
                  {stateData.map((_, i) => <Cell key={i} fill={`hsl(${217 - i * 12}, ${85 - i * 5}%, ${55 + i * 3}%)`} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="glass card-shadow rounded-3xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>State-wise Seat Matrix</h3>
            <div className="space-y-3">
              {[
                { state: 'Maharashtra', seats: 24520, quota: 'State' },
                { state: 'Uttar Pradesh', seats: 21340, quota: 'State' },
                { state: 'Rajasthan', seats: 15200, quota: 'State' },
                { state: 'Andhra Pradesh', seats: 14800, quota: 'State' },
                { state: 'Tamil Nadu', seats: 13620, quota: 'State' },
                { state: 'All India', seats: '15%' as unknown as number, quota: 'AIQ' },
              ].map((row) => (
                <div key={row.state} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div>
                    <div className="text-sm font-medium text-slate-800">{row.state}</div>
                    <div className="text-xs text-slate-400">{row.quota} Quota</div>
                  </div>
                  <div className="text-sm font-bold text-blue-600" style={{ fontFamily: "'Space Grotesk', monospace" }}>{typeof row.seats === 'number' ? row.seats.toLocaleString() : row.seats} {typeof row.seats === 'string' ? 'seats' : ''}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Upcoming' && (
        <div className="space-y-4">
          <div className="glass card-shadow rounded-3xl p-6">
            <h3 className="font-semibold text-slate-800 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Upcoming Exam Dates & Deadlines</h3>
            <div className="space-y-4">
              {upcomingExams.map(exam => (
                <div key={exam.name} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <div className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-white flex-shrink-0" style={{ background: exam.color }}>
                    <div className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', monospace", lineHeight: 1 }}>{exam.daysLeft}</div>
                    <div className="text-[9px] font-medium opacity-80">days</div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 text-sm">{exam.name}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{exam.date}</div>
                  </div>
                  <button className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-all">
                    Set Reminder
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'Notifications' && (
        <div className="glass card-shadow rounded-3xl p-6">
          <h3 className="font-semibold text-slate-800 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Recent Notifications</h3>
          <div className="space-y-4">
            {notifications.map((n, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                <div className="w-2.5 h-2.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: n.dot }} />
                <div className="flex-1">
                  <p className="text-sm text-slate-700">{n.text}</p>
                  <p className="text-xs text-slate-400 mt-1">{n.time}</p>
                </div>
                <button className="text-xs text-blue-500 hover:text-blue-700 font-medium">View →</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

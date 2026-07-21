import { useState } from 'react'

const faqs = [
  { q: 'How quickly are exam updates published on EduPulse?', a: 'We monitor 500+ official sources every 5 minutes. Most updates are live within 15 minutes of official release.' },
  { q: 'Are the news articles on EduPulse verified?', a: 'Yes. Every article is cross-referenced with at least two official government sources before publication. We clearly label unverified reports.' },
  { q: 'Can I report a fake exam notification I received?', a: 'Yes. Use our Fake News Verification tool on the home page, or email us directly at fakealert@edupulse.in with the notification details.' },
  { q: 'How can I get exam alerts on WhatsApp?', a: 'WhatsApp alerts are launching in Q4 2026. Subscribe to our newsletter for now to get daily email updates.' },
  { q: 'Is EduPulse affiliated with NTA or any government body?', a: 'No. EduPulse is an independent journalism platform. We are not affiliated with NTA, UPSC, UGC, or any government agency.' },
]

const WEBHOOK_URL = 'https://sonammaan.app.n8n.cloud/webhook/f1f35f3e-c04b-4997-a1a4-c94929a2e98a'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [webhookResponse, setWebhookResponse] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSending(true)
    setError(null)
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, subject: form.subject, message: form.message }),
      })
      const contentType = res.headers.get('content-type') || ''
      let responseText = ''
      if (contentType.includes('application/json')) {
        const json = await res.json()
        responseText = typeof json === 'string' ? json : JSON.stringify(json, null, 2)
      } else {
        responseText = await res.text()
      }
      setWebhookResponse(responseText || null)
      setSubmitted(true)
    } catch {
      setError('Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const handleReset = () => {
    setSubmitted(false)
    setWebhookResponse(null)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div>
      {/* Header */}
      <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Contact EduPulse</h1>
          <p className="text-slate-400">Have a question, tip, or feedback? We respond within 24 hours.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Send a Message</h2>

          {submitted ? (
            <div className="glass card-shadow rounded-3xl p-10 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>Message Received!</h3>
              <p className="text-slate-500 text-sm mb-6">Thank you, {form.name}. We'll respond to {form.email} within 24 hours.</p>
              <button
                onClick={handleReset}
                className="btn-primary text-white px-6 py-2.5 rounded-xl text-sm font-semibold"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass card-shadow rounded-3xl p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Full Name *</label>
                  <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Arjun Mehta"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Email Address *</label>
                  <input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="arjun@example.com"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Subject</label>
                <select value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition">
                  <option value="">Select a topic</option>
                  <option>Exam News Correction</option>
                  <option>Fake Notification Report</option>
                  <option>Scholarship Query</option>
                  <option>Partnership / Press</option>
                  <option>Technical Issue</option>
                  <option>General Feedback</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 mb-1.5 block">Message *</label>
                <textarea required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={5} placeholder="Describe your query in detail..."
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition resize-none" />
              </div>
              {error && (
                <p className="text-sm text-red-500 bg-red-50 px-4 py-3 rounded-xl">{error}</p>
              )}
              <button type="submit" disabled={sending} className="w-full btn-primary text-white font-semibold py-3.5 rounded-2xl text-sm disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {sending ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Sending…
                  </>
                ) : 'Send Message →'}
              </button>
            </form>
          )}

          {/* FAQs */}
          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-900 mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} className="glass card-shadow rounded-2xl overflow-hidden">
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-slate-800">{faq.q}</span>
                    <svg className={`w-4 h-4 text-slate-400 transition-transform flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="glass card-shadow rounded-2xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Direct Contact</h3>
            {[
              { icon: '📧', label: 'General', value: 'hello@edupulse.in' },
              { icon: '🚨', label: 'Fake News Tip', value: 'fakealert@edupulse.in' },
              { icon: '📰', label: 'Press / Media', value: 'press@edupulse.in' },
              { icon: '📞', label: 'Phone', value: '+91 11 4567 8900' },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-3 py-2 border-b border-slate-50 last:border-0">
                <span className="text-lg">{c.icon}</span>
                <div>
                  <div className="text-xs text-slate-400">{c.label}</div>
                  <div className="text-sm text-slate-700 font-medium">{c.value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass card-shadow rounded-2xl p-6">
            <h3 className="font-semibold text-slate-800 mb-4 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Follow Us</h3>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: '𝕏', label: 'Twitter', color: '#0F172A' },
                { icon: 'in', label: 'LinkedIn', color: '#0A66C2' },
                { icon: 'f', label: 'Facebook', color: '#1877F2' },
                { icon: '▶', label: 'YouTube', color: '#FF0000' },
              ].map(s => (
                <button key={s.label} className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: s.color }}>{s.icon}</span>
                  <span className="text-xs text-slate-600 font-medium">{s.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="glass card-shadow rounded-2xl p-6">
            <h3 className="font-semibold text-slate-800 mb-2 text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>Newsletter</h3>
            <p className="text-xs text-slate-500 mb-3">Daily exam updates in your inbox — free.</p>
            <input placeholder="your@email.com" className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-2 transition" />
            <button className="w-full btn-primary text-white py-2.5 rounded-xl text-xs font-semibold">Subscribe Free</button>
          </div>
        </div>
      </div>
    </div>
  )
}

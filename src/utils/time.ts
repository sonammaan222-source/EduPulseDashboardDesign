// Simulates relative timestamps for dynamic content placeholders.
// In a real app these would derive from API response timestamps.

export type Freshness = 'live' | 'recent' | 'today' | 'this-week'

export interface DynamicTimestamp {
  label: string       // "5 minutes ago"
  badge?: string      // "Live" | "Verified" | "Trending" | "Recently Updated"
  badgeColor?: string
  freshness: Freshness
}

const TIMESTAMPS: DynamicTimestamp[] = [
  { label: 'Just now',           badge: 'Live',             badgeColor: '#EF4444', freshness: 'live' },
  { label: '2 minutes ago',      badge: 'Live',             badgeColor: '#EF4444', freshness: 'live' },
  { label: '5 minutes ago',      badge: 'Live',             badgeColor: '#EF4444', freshness: 'live' },
  { label: '12 minutes ago',     badge: 'Verified',         badgeColor: '#22C55E', freshness: 'recent' },
  { label: '28 minutes ago',     badge: 'Trending',         badgeColor: '#F59E0B', freshness: 'recent' },
  { label: '45 minutes ago',     badge: 'Verified',         badgeColor: '#22C55E', freshness: 'recent' },
  { label: '1 hour ago',         badge: 'Recently Updated', badgeColor: '#0EA5E9', freshness: 'recent' },
  { label: '2 hours ago',        badge: 'Exam Alert',       badgeColor: '#8B5CF6', freshness: 'recent' },
  { label: '3 hours ago',        badge: 'Trending',         badgeColor: '#F59E0B', freshness: 'today' },
  { label: 'Earlier today',      badge: 'Verified',         badgeColor: '#22C55E', freshness: 'today' },
  { label: 'Updated today',      badge: 'Recently Updated', badgeColor: '#0EA5E9', freshness: 'today' },
  { label: 'This morning',       badge: 'Verified',         badgeColor: '#22C55E', freshness: 'today' },
  { label: 'Yesterday',          badge: 'Verified',         badgeColor: '#22C55E', freshness: 'this-week' },
  { label: 'Earlier this week',  badge: 'Verified',         badgeColor: '#22C55E', freshness: 'this-week' },
  { label: 'This week',          badge: 'Exam Updates',     badgeColor: '#14B8A6', freshness: 'this-week' },
]

// Deterministically pick a timestamp for an article so it doesn't flicker on re-render.
export function getTimestamp(seed: number): DynamicTimestamp {
  return TIMESTAMPS[seed % TIMESTAMPS.length]
}

// Ticker items — no hardcoded years, all present-tense
export const liveTickerItems = [
  '🔴 NEET UG Results Declared — Merit List Available on nta.ac.in',
  '📢 JEE Advanced Answer Key Released — Objection Window Now Open',
  '⚠️ CUET PG Admit Card Download Link Now Live',
  '🟢 UPSC CSE Prelims Cutoff Published — Check Official Site',
  '📰 NEP Implementation Update: Multidisciplinary Approach in 45+ Universities',
  '🏆 PM YASASVI Scholarship Portal Open — Apply Before Deadline',
  '🎓 UGC Draft Regulations on Credit Framework Released for Feedback',
  '📋 NTA Releases Revised Exam Dates — Check Official Schedule',
  '🌐 GATE Registration Now Open — Apply at goaps.iitr.ac.in',
  '🔔 Government Announces New Scholarship Seats for Minority Students',
  '⚡ Live: Counselling registrations underway — check eligibility now',
  '📊 Board Results Live — Check State Board Official Portals',
]

export const examStatusLabels = {
  registration: { label: 'Registration Open', color: '#22C55E' },
  registrationClosed: { label: 'Registration Closed', color: '#6B7280' },
  admitCard: { label: 'Admit Card Available', color: '#0EA5E9' },
  examLive: { label: 'Exam Ongoing', color: '#EF4444' },
  answerKey: { label: 'Answer Key Released', color: '#F59E0B' },
  result: { label: 'Result Declared', color: '#22C55E' },
  counselling: { label: 'Counselling Active', color: '#14B8A6' },
  upcoming: { label: 'Upcoming', color: '#8B5CF6' },
} as const

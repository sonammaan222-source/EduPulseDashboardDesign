// ─── Types ───────────────────────────────────────────────────────────────────

export interface NewsArticle {
  id: number
  category: string
  color: string
  title: string
  source: string        // e.g. "NTA Official", "PIB India"
  readTime: string
  image: string
  excerpt: string
  body: string
  author: string
  tags: string[]
  badge?: 'Live' | 'Verified' | 'Trending' | 'Exam Alert' | 'Recently Updated' | 'Breaking'
  badgeColor?: string
  featured?: boolean
}

export interface ExamInfo {
  key: string
  name: string
  fullName: string
  color: string
  icon: string
  description: string
  conductedBy: string
  frequency: string
  seats: string
  currentStatus: string
  statusColor: string
}

// ─── News Articles — no hardcoded years, dynamic source attribution ───────────

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    category: 'Competitive Exams',
    color: '#EF4444',
    badge: 'Breaking',
    badgeColor: '#EF4444',
    featured: true,
    title: 'NEET UG Results Declared: Record 2.32 Lakh Students Qualify Across All Categories',
    source: 'NTA Official',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=440&fit=crop&auto=format',
    excerpt: 'NTA announces NEET UG results with record participation across 14 cities. Topper scores 720/720 in a landmark examination.',
    author: 'EduPulse Desk',
    tags: ['NEET', 'NTA', 'Results', 'Medical'],
    body: `The National Testing Agency (NTA) has officially declared the NEET UG results for the current session, with a record 2.32 lakh students qualifying for admission to MBBS, BDS, and AYUSH courses across India.\n\nThis session's examination saw unprecedented participation, with over 24 lakh students appearing at 4,750 examination centres across 554 cities. The top scorer achieved a perfect 720 out of 720.\n\nKey Highlights:\n• Total Applicants: 24,06,079\n• Total Qualified: 2,32,115\n• Pass Percentage: 48.6%\n• Perfect Scorers (720/720): 3 students\n• Female Qualifiers: 56.2%\n\nThe merit list has been published on the official NTA website — neet.nta.nic.in. Qualified candidates can proceed to counselling rounds conducted by the Medical Counselling Committee (MCC) and respective state counselling authorities.\n\nCandidates are advised to keep all original documents ready, including Class 10 and 12 mark sheets, category certificates (if applicable), and valid ID proof for the counselling process.\n\nThe Supreme Court of India has directed NTA to ensure complete transparency in the counselling process following concerns raised by student groups about the examination process this session.`,
  },
  {
    id: 2,
    category: 'Competitive Exams',
    color: '#2563EB',
    badge: 'Verified',
    badgeColor: '#22C55E',
    title: 'JEE Advanced: IIT Sets New Difficulty Benchmark for Current Session',
    source: 'IIT Official',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Over 1.2 lakh students appeared for JEE Advanced at 225 centres nationwide in the current examination cycle.',
    author: 'Priya Sharma',
    tags: ['JEE', 'IIT', 'Engineering'],
    body: `IIT conducted JEE Advanced for the current session, with over 1.2 lakh students appearing across 225 examination centres in 30 cities. The examination featured a revised pattern with an increased emphasis on conceptual understanding over rote memorisation, aligning with the NEP vision for higher education.\n\nKey Statistics:\n• Registered Candidates: 1,89,744\n• Appeared: 1,21,346\n• Qualified: 48,248\n• Top AIR 1 Score: 346/360\n• Female Top Ranker AIR: 8\n\nThe JoSAA counselling process will begin shortly after results, offering seats in 23 IITs, 31 NITs, 26 IIITs, and 33 Other Government Funded Institutes.`,
  },
  {
    id: 3,
    category: 'Higher Education',
    color: '#0EA5E9',
    badge: 'Live',
    badgeColor: '#EF4444',
    title: 'CUET PG Revised Timetable Released — New Exam City Options Added',
    source: 'NTA Official',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=440&fit=crop&auto=format',
    excerpt: 'National Testing Agency releases revised schedule with new exam city options for postgraduate aspirants.',
    author: 'EduPulse Desk',
    tags: ['CUET', 'PG', 'NTA', 'University'],
    body: `The National Testing Agency has released the revised timetable for CUET PG in the current cycle, providing relief to postgraduate aspirants who flagged scheduling conflicts with other examinations.\n\nThe revised schedule accommodates requests from over 50,000 candidates. New exam city options have also been added in Tier-2 and Tier-3 cities to improve accessibility.\n\nKey Updates:\n• Revised Exam Schedule: Check official NTA portal\n• Admit Card: Available for download\n• Result: To be declared as per official schedule\n\nCandidates can download their revised admit cards from the official CUET website. The examination will be conducted in Computer Based Test (CBT) mode across 500+ cities.`,
  },
  {
    id: 4,
    category: 'Government Announcements',
    color: '#8B5CF6',
    badge: 'Verified',
    badgeColor: '#22C55E',
    title: 'UPSC Civil Services Prelims: Vacancies Notified for Current Recruitment Cycle',
    source: 'UPSC Official',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=440&fit=crop&auto=format',
    excerpt: 'UPSC releases notification for Civil Services Examination with increased vacancies across IAS, IPS, IFS and Group A & B services.',
    author: 'Rajesh Kumar',
    tags: ['UPSC', 'IAS', 'Civil Services', 'Government'],
    body: `The Union Public Service Commission has officially released the notification for the Civil Services Examination current cycle, announcing 1,056 vacancies across the Indian Administrative Service, Indian Police Service, Indian Foreign Service, and 21 other Group A and B Central Services.\n\nThis represents a 12% increase in total vacancies compared to the previous cycle.\n\nEligibility: Candidates must be Indian citizens between 21–32 years of age (with relaxation for SC/ST/OBC and PwD candidates) and hold a degree from a recognised university.\n\nVisit upsc.gov.in for complete details, application links, and official syllabus.`,
  },
  {
    id: 5,
    category: 'Education Policies',
    color: '#14B8A6',
    badge: 'Trending',
    badgeColor: '#F59E0B',
    title: 'NEP Implementation: Multidisciplinary Approach Now Active in 45 Central Universities',
    source: 'Ministry of Education',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Ministry of Education reviews NEP progress across central universities — over 1.2 crore students enrolled under the new framework.',
    author: 'Dr. Ananya Bose',
    tags: ['NEP', 'Education Policy', 'Universities', 'Reform'],
    body: `The Ministry of Education has released its latest review of the National Education Policy implementation, revealing significant progress across 45 central universities that have adopted the multidisciplinary curriculum framework.\n\nProgress Report Highlights:\n• 45 central universities fully compliant with NEP\n• 312 state universities partially implementing new framework\n• 1.2 crore students enrolled under the new programme\n• 89 lakh credits stored in Academic Bank of Credits\n• 2,400+ skill-based courses introduced\n\nChallenges remain in rural and semi-urban institutions where infrastructure limitations and faculty shortages continue to hinder full implementation.`,
  },
  {
    id: 6,
    category: 'Scholarships',
    color: '#F59E0B',
    badge: 'Recently Updated',
    badgeColor: '#0EA5E9',
    title: 'PM YASASVI Scholarship Portal Open — Applications Invited for OBC Students',
    source: 'Ministry of Social Justice',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Central Sector Scholarship scheme opens for Other Backward Classes students — up to ₹1.25 lakh per year.',
    author: 'EduPulse Desk',
    tags: ['Scholarship', 'OBC', 'PM YASASVI', 'Government'],
    body: `The Ministry of Social Justice and Empowerment has opened applications for the PM YASASVI scholarship targeting students from Other Backward Classes, Economically Backward Classes, and Denotified Tribes.\n\nThe scholarship offers financial assistance ranging from ₹75,000 to ₹1,25,000 per year for students studying in Classes 9–12 and at the undergraduate level in government schools and colleges.\n\nEligibility:\n• Family income: Below ₹2.5 lakh per annum\n• Must belong to OBC/EBC/DNT categories\n• Must be enrolled in a government-recognised institution\n• Minimum 60% marks in previous class\n\nApply through the National Scholarship Portal: scholarships.gov.in`,
  },
  {
    id: 7,
    category: 'Technology in Education',
    color: '#6366F1',
    badge: 'Trending',
    badgeColor: '#F59E0B',
    title: 'IITs Launch AI-Powered Personalised Learning Platform for 10 Lakh Students',
    source: 'IIT Consortium',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Seven IITs collaborate to release an adaptive learning system trained on multiple years of GATE examination data.',
    author: 'Tech Desk',
    tags: ['AI', 'EdTech', 'IIT', 'GATE'],
    body: `In a landmark collaboration, seven Indian Institutes of Technology have jointly launched an AI-powered personalised learning platform serving over 10 lakh students across India.\n\nThe platform uses machine learning algorithms trained on GATE examination data to create personalised learning paths for each student.\n\nKey Features:\n• Personalised study plans updated daily\n• 50,000+ practice questions with difficulty calibration\n• Video lectures by IIT faculty\n• Peer-to-peer doubt resolution\n• Performance analytics and weak area identification\n• Mock tests replicating actual exam conditions\n\nInitial beta testing with 50,000 students showed a 34% improvement in mock test scores over six months.`,
  },
  {
    id: 8,
    category: 'International Education',
    color: '#EC4899',
    badge: 'Verified',
    badgeColor: '#22C55E',
    title: 'UK Announces Chevening Scholarships for Indian Students — Applications Open',
    source: 'British Council India',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=440&fit=crop&auto=format',
    excerpt: 'British Council opens applications for fully funded Chevening Scholarships for the upcoming academic session.',
    author: 'International Desk',
    tags: ['Scholarship', 'UK', 'Chevening', 'Study Abroad'],
    body: `The British Council has announced fully-funded Chevening Scholarships for Indian students for the upcoming academic session. The scholarship covers full tuition fees at any UK university, return airfare, living expenses, and a thesis grant.\n\nEligibility:\n• Indian citizenship\n• Minimum 2 years of work experience\n• Bachelor's degree with at least 55% marks\n• English language proficiency (IELTS 6.5 or equivalent)\n• Commitment to return to India after studies\n\nVisit chevening.org for application details and deadlines.`,
  },
  {
    id: 9,
    category: 'Student Issues',
    color: '#F97316',
    badge: 'Live',
    badgeColor: '#EF4444',
    title: 'NTA Paper Leak Probe: SC Orders Independent Inquiry Panel — Hearing Ongoing',
    source: 'Supreme Court of India',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Supreme Court constitutes a 7-member expert committee to investigate alleged question paper irregularities. Case ongoing.',
    author: 'Legal Correspondent',
    tags: ['NEET', 'Paper Leak', 'Supreme Court', 'NTA'],
    body: `The Supreme Court of India has constituted a seven-member independent expert committee to investigate allegations of question paper irregularities in a recent NEET UG examination. The committee has been given 30 days to submit its report.\n\nCommittee Composition:\n• Former High Court Chief Justice (Chairman)\n• Two retired IPS officers\n• NAAC expert\n• Cybersecurity specialist\n• Education policy expert\n• Representative from student organisations\n\nThe court has also directed the CBI to continue its parallel criminal investigation and has asked NTA to submit all examination-related data within two weeks.\n\nThis story is developing. Check back for live updates.`,
  },
]

// ─── Exam Info — statuses are dynamic, no hardcoded years ────────────────────

export const exams: ExamInfo[] = [
  {
    key: 'neet',
    name: 'NEET',
    fullName: 'National Eligibility cum Entrance Test',
    color: '#EF4444',
    icon: '🩺',
    description: "The gateway to medical education in India — MBBS, BDS, and AYUSH admissions across all government and private colleges.",
    conductedBy: 'National Testing Agency (NTA)',
    frequency: 'Once a year (Current session active)',
    seats: '1,08,940+ MBBS seats',
    currentStatus: 'Counselling Active',
    statusColor: '#14B8A6',
  },
  {
    key: 'jee',
    name: 'JEE',
    fullName: 'Joint Entrance Examination',
    color: '#2563EB',
    icon: '⚙️',
    description: "India's premier engineering entrance exam, opening doors to IITs, NITs, IIITs and other premier technical institutions.",
    conductedBy: 'National Testing Agency (NTA)',
    frequency: 'JEE Main: Twice a year · JEE Advanced: Once',
    seats: '48,000+ IIT seats · 1,31,000+ NIT/IIIT seats',
    currentStatus: 'Result Declared',
    statusColor: '#22C55E',
  },
  {
    key: 'cuet',
    name: 'CUET',
    fullName: 'Common University Entrance Test',
    color: '#0EA5E9',
    icon: '🎓',
    description: 'Unified entrance exam for admission to central universities, covering UG and PG programmes across India.',
    conductedBy: 'National Testing Agency (NTA)',
    frequency: 'Once a year · PG and UG separate exams',
    seats: '2,00,000+ seats across 250+ universities',
    currentStatus: 'Admit Card Live',
    statusColor: '#0EA5E9',
  },
  {
    key: 'upsc',
    name: 'UPSC',
    fullName: 'Civil Services Examination',
    color: '#8B5CF6',
    icon: '🏛️',
    description: 'The most prestigious examination in India for recruitment to IAS, IPS, IFS, and other Group A & B central services.',
    conductedBy: 'Union Public Service Commission',
    frequency: 'Once a year · Prelims → Mains → Interview',
    seats: '1,000+ vacancies (current cycle)',
    currentStatus: 'Mains Upcoming',
    statusColor: '#F59E0B',
  },
]

// ─── Chart / Analytics data — labelled as sample/indicative ──────────────────

export const examTrend = [
  { year: 'T-4', neet: 1497000, jee: 1189000, cuet: 0 },
  { year: 'T-3', neet: 1614000, jee: 1204000, cuet: 0 },
  { year: 'T-2', neet: 1872000, jee: 1234000, cuet: 1445000 },
  { year: 'T-1', neet: 2038596, jee: 1145000, cuet: 1800000 },
  { year: 'Current', neet: 2320000, jee: 1200000, cuet: 1900000 },
]

export const stateData = [
  { state: 'MH', students: 312000 },
  { state: 'UP', students: 289000 },
  { state: 'RJ', students: 198000 },
  { state: 'AP', students: 187000 },
  { state: 'MP', students: 145000 },
  { state: 'KA', students: 132000 },
]

export const passData = [
  { name: 'Qualified', value: 1127890, color: '#22C55E' },
  { name: 'Not Qualified', value: 1192110, color: '#F1F5F9' },
]

export const cutoffData = [
  { year: 'T-4', gen: 147, obc: 113, sc: 113, st: 113 },
  { year: 'T-3', gen: 138, obc: 108, sc: 108, st: 108 },
  { year: 'T-2', gen: 117, obc: 93, sc: 93, st: 93 },
  { year: 'T-1', gen: 137, obc: 107, sc: 107, st: 107 },
  { year: 'Current', gen: 164, obc: 129, sc: 129, st: 129 },
]

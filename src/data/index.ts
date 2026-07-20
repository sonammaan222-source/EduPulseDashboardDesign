// ─── Types ───────────────────────────────────────────────────────────────────

export interface NewsArticle {
  id: number
  category: string
  color: string
  title: string
  date: string
  readTime: string
  image: string
  excerpt: string
  body: string
  author: string
  tags: string[]
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
}

// ─── News Articles ────────────────────────────────────────────────────────────

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    category: 'Competitive Exams',
    color: '#EF4444',
    title: 'NEET UG 2024 Results Declared: 2.32 Lakh Students Qualify',
    date: 'July 18, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=440&fit=crop&auto=format',
    excerpt: 'NTA announces NEET UG results with record participation across 14 cities. Topper scores 720/720.',
    author: 'EduPulse Desk',
    tags: ['NEET', 'NTA', 'Results', 'Medical'],
    body: `The National Testing Agency (NTA) has officially declared the NEET UG 2024 results, with a record 2.32 lakh students qualifying for admission to MBBS, BDS, and AYUSH courses across India.\n\nThis year's examination saw unprecedented participation, with over 24 lakh students appearing at 4,750 examination centres across 554 cities. The top scorer achieved a perfect 720 out of 720, matching last year's benchmark.\n\nKey Highlights:\n• Total Applicants: 24,06,079\n• Total Qualified: 2,32,115\n• Pass Percentage: 48.6%\n• Perfect Scorers (720/720): 3 students\n• Female Qualifiers: 56.2%\n\nThe merit list has been published on the official NTA website — neet.nta.nic.in. Qualified candidates can proceed to counselling rounds conducted by the Medical Counselling Committee (MCC) and respective state counselling authorities.\n\nCandidates are advised to keep all original documents ready, including Class 10 and 12 mark sheets, category certificates (if applicable), and valid ID proof for the counselling process.\n\nThe Supreme Court of India has directed NTA to ensure complete transparency in the counselling process following concerns raised by student groups about the examination process this year.`,
  },
  {
    id: 2,
    category: 'Competitive Exams',
    color: '#2563EB',
    title: 'JEE Advanced 2024: IIT Madras Sets New Difficulty Benchmark',
    date: 'July 16, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Over 1.2 lakh students appeared for JEE Advanced at 225 centres nationwide.',
    author: 'Priya Sharma',
    tags: ['JEE', 'IIT', 'Engineering'],
    body: `IIT Madras conducted JEE Advanced 2024 on May 26, with over 1.2 lakh students appearing across 225 examination centres in 30 cities. The examination was notably more challenging than previous years, with Paper 2 particularly testing advanced problem-solving in Physics and Mathematics.\n\nThis year's JEE Advanced featured a revised pattern with an increased emphasis on conceptual understanding over rote memorisation, aligning with the NEP 2020 vision for higher education.\n\nKey Statistics:\n• Registered Candidates: 1,89,744\n• Appeared: 1,21,346\n• Qualified: 48,248\n• Top AIR 1 Score: 346/360\n• Female Top Ranker AIR: 8\n\nThe results are expected to be declared by June 9, and the JoSAA counselling process will begin shortly after, offering seats in 23 IITs, 31 NITs, 26 IIITs, and 33 Other Government Funded Institutes.`,
  },
  {
    id: 3,
    category: 'Higher Education',
    color: '#0EA5E9',
    title: 'CUET PG 2024 Revised Timetable Released by NTA',
    date: 'July 14, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&h=440&fit=crop&auto=format',
    excerpt: 'National Testing Agency releases revised schedule with new exam city options.',
    author: 'EduPulse Desk',
    tags: ['CUET', 'PG', 'NTA', 'University'],
    body: `The National Testing Agency has released the revised timetable for CUET PG 2024, providing relief to postgraduate aspirants who were concerned about scheduling conflicts with other examinations.\n\nThe revised schedule accommodates requests from over 50,000 candidates who had flagged clashes between their CUET PG subjects and other competitive examinations. New exam city options have also been added in Tier-2 and Tier-3 cities to improve accessibility.\n\nImportant Dates:\n• CUET PG 2024 Exam: August 12–22, 2026\n• Admit Card Release: August 5, 2026\n• Result Declaration: September 15, 2026\n\nCandidates can download their revised admit cards from the official CUET website. The examination will be conducted in Computer Based Test (CBT) mode across 500+ cities.`,
  },
  {
    id: 4,
    category: 'Government Announcements',
    color: '#8B5CF6',
    title: 'UPSC Civil Services Prelims 2024: 1.3 Lakh Vacancies Notified',
    date: 'July 12, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=440&fit=crop&auto=format',
    excerpt: 'UPSC releases notification for Civil Services Examination 2024 with increased vacancies.',
    author: 'Rajesh Kumar',
    tags: ['UPSC', 'IAS', 'Civil Services', 'Government'],
    body: `The Union Public Service Commission has officially released the notification for the Civil Services Examination 2024, announcing 1,056 vacancies across the Indian Administrative Service, Indian Police Service, Indian Foreign Service, and 21 other Group A and B Central Services.\n\nThis represents a 12% increase in total vacancies compared to CSE 2023, offering greater opportunities for aspirants across the country.\n\nKey Dates:\n• Notification Date: February 14, 2026\n• Online Application Start: February 14, 2026\n• Last Date to Apply: March 5, 2026\n• Prelims Examination: May 26, 2026\n• Mains Examination: September 20, 2026\n\nThe UPSC has introduced minor modifications to the examination pattern this year, with greater emphasis on current affairs related to governance, technology, and international relations.\n\nEligibility: Candidates must be Indian citizens between 21–32 years of age (with relaxation for SC/ST/OBC and PwD candidates) and hold a degree from a recognised university.`,
  },
  {
    id: 5,
    category: 'Education Policies',
    color: '#14B8A6',
    title: 'NEP 2020 Implementation: Multidisciplinary Approach in 45 Universities',
    date: 'July 10, 2026',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Ministry of Education reviews NEP 2020 progress across central universities.',
    author: 'Dr. Ananya Bose',
    tags: ['NEP', 'Education Policy', 'Universities', 'Reform'],
    body: `The Ministry of Education has released its fourth annual review of the National Education Policy 2020 implementation, revealing significant progress across 45 central universities that have adopted the multidisciplinary curriculum framework.\n\nKey achievements include the successful rollout of the 4-Year Undergraduate Programme (FYUP) with multiple entry/exit options, the Academic Bank of Credits (ABC), and the National Credit Framework (NCrF).\n\nProgress Report Highlights:\n• 45 central universities fully compliant with NEP 2020\n• 312 state universities partially implementing new framework\n• 1.2 crore students enrolled under FYUP\n• 89 lakh credits stored in Academic Bank of Credits\n• 2,400+ skill-based courses introduced\n\nHowever, challenges remain in rural and semi-urban institutions, where infrastructure limitations and faculty shortages continue to hinder full implementation. The Ministry has allocated ₹8,500 crore for capacity building in these institutions over the next three years.`,
  },
  {
    id: 6,
    category: 'Scholarships',
    color: '#F59E0B',
    title: 'PM YASASVI Scholarship 2024: Applications Open for OBC Students',
    date: 'July 8, 2026',
    readTime: '3 min read',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Central Sector Scholarship scheme opens for Other Backward Classes students.',
    author: 'EduPulse Desk',
    tags: ['Scholarship', 'OBC', 'PM YASASVI', 'Government'],
    body: `The Ministry of Social Justice and Empowerment has opened applications for the PM Young Achievers Scholarship Award Scheme for Vibrant India (YASASVI) 2024, targeting students from Other Backward Classes, Economically Backward Classes, and Denotified Tribes.\n\nThe scholarship offers financial assistance ranging from ₹75,000 to ₹1,25,000 per year for students studying in Classes 9–12 and at the undergraduate level in government schools and colleges.\n\nEligibility Criteria:\n• Family income: Below ₹2.5 lakh per annum\n• Must belong to OBC/EBC/DNT categories\n• Must be enrolled in a government-recognised institution\n• Minimum 60% marks in previous class\n\nApplication Process:\nStudents can apply through the National Scholarship Portal (scholarships.gov.in). The last date for application is July 31, 2026. Document verification will be conducted at the district level from August 15 onwards.\n\nAward Components:\n• Tuition Fee: Up to ₹75,000/year\n• Living Expenses: ₹30,000/year\n• Book Allowance: ₹20,000/year`,
  },
  {
    id: 7,
    category: 'Technology in Education',
    color: '#6366F1',
    title: 'IITs Launch AI-Powered Personalised Learning Platform for 10 Lakh Students',
    date: 'July 6, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Seven IITs collaborate to release an adaptive learning system trained on 5 years of GATE data.',
    author: 'Tech Desk',
    tags: ['AI', 'EdTech', 'IIT', 'GATE'],
    body: `In a landmark collaboration, seven Indian Institutes of Technology have jointly launched an AI-powered personalised learning platform that promises to revolutionise competitive examination preparation for over 10 lakh students across India.\n\nThe platform, developed over three years, uses machine learning algorithms trained on five years of GATE examination data to create personalised learning paths for each student. The system adapts in real-time based on student performance, identifying knowledge gaps and adjusting difficulty levels accordingly.\n\nKey Features:\n• Personalised study plans updated daily\n• 50,000+ practice questions with difficulty calibration\n• Video lectures by IIT faculty\n• Peer-to-peer doubt resolution\n• Performance analytics and weak area identification\n• Mock tests replicating actual exam conditions\n\nThe platform will be available free of charge to students from economically weaker sections, with a nominal fee for premium features for other students. Initial beta testing with 50,000 students showed a 34% improvement in mock test scores over six months.`,
  },
  {
    id: 8,
    category: 'International Education',
    color: '#EC4899',
    title: 'Study Abroad: UK Announces 500 Chevening Scholarships for Indian Students',
    date: 'July 4, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&h=440&fit=crop&auto=format',
    excerpt: 'British Council opens applications for fully funded Chevening Scholarships 2025–26.',
    author: 'International Desk',
    tags: ['Scholarship', 'UK', 'Chevening', 'Study Abroad'],
    body: `The British Council has announced 500 fully-funded Chevening Scholarships for Indian students for the academic year 2025–26, representing the largest allocation for India in the scheme's 40-year history.\n\nThe Chevening Scholarship covers full tuition fees at any UK university, return airfare, living expenses, and a thesis grant. Recipients also gain access to the global Chevening alumni network of over 50,000 professionals.\n\nEligibility:\n• Indian citizenship\n• Minimum 2 years of work experience\n• Bachelor's degree with at least 55% marks\n• English language proficiency (IELTS 6.5 or equivalent)\n• Commitment to return to India after studies\n\nApplication Timeline:\n• Applications Open: August 1, 2026\n• Deadline: November 5, 2026\n• Interviews: January–February 2027\n• Award Notifications: April 2027\n\nPrevious Chevening scholars from India include senior diplomats, CEOs, social entrepreneurs, and senior government officials who have made significant contributions to their fields.`,
  },
  {
    id: 9,
    category: 'Student Issues',
    color: '#F97316',
    title: 'NTA Paper Leak Probe: SC Orders Independent Inquiry Panel for NEET',
    date: 'July 2, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=440&fit=crop&auto=format',
    excerpt: 'Supreme Court constitutes a 7-member expert committee to investigate alleged question paper irregularities.',
    author: 'Legal Correspondent',
    tags: ['NEET', 'Paper Leak', 'Supreme Court', 'NTA'],
    body: `The Supreme Court of India has constituted a seven-member independent expert committee to investigate allegations of question paper irregularities in NEET UG 2024. The committee, chaired by a former Chief Justice of a High Court, has been given 30 days to submit its report.\n\nThe court took suo motu cognisance of the matter after petitions were filed by student groups and state governments alleging that question papers were leaked in multiple states before the examination date.\n\nCommittee Composition:\n• Former High Court Chief Justice (Chairman)\n• Two retired IPS officers\n• National Assessment and Accreditation Council (NAAC) expert\n• Cybersecurity specialist\n• Education policy expert\n• Representative from student organisations\n\nThe court has also directed the CBI to continue its parallel criminal investigation and has asked NTA to submit all examination-related data, including centre CCTV footage, biometric records, and answer sheets, within two weeks.\n\nMeanwhile, the Ministry of Education has announced a high-level review of NTA's examination management system and has suspended two senior officials pending the investigation.`,
  },
]

// ─── Exam Info ────────────────────────────────────────────────────────────────

export const exams: ExamInfo[] = [
  {
    key: 'neet',
    name: 'NEET',
    fullName: 'National Eligibility cum Entrance Test',
    color: '#EF4444',
    icon: '🩺',
    description: 'The gateway to medical education in India — MBBS, BDS, AYUSH admissions across all government and private colleges.',
    conductedBy: 'National Testing Agency (NTA)',
    frequency: 'Once a year',
    seats: '1,08,940 MBBS seats',
  },
  {
    key: 'jee',
    name: 'JEE',
    fullName: 'Joint Entrance Examination',
    color: '#2563EB',
    icon: '⚙️',
    description: "India's premier engineering entrance exam, opening doors to IITs, NITs, IIITs and other premier technical institutions.",
    conductedBy: 'National Testing Agency (NTA)',
    frequency: 'JEE Main: Twice / JEE Advanced: Once',
    seats: '48,000+ IIT seats',
  },
  {
    key: 'cuet',
    name: 'CUET',
    fullName: 'Common University Entrance Test',
    color: '#0EA5E9',
    icon: '🎓',
    description: 'Unified entrance exam for admission to central universities, covering UG and PG programmes across India.',
    conductedBy: 'National Testing Agency (NTA)',
    frequency: 'Once a year',
    seats: '2,00,000+ seats across 250+ universities',
  },
  {
    key: 'upsc',
    name: 'UPSC',
    fullName: 'Civil Services Examination',
    color: '#8B5CF6',
    icon: '🏛️',
    description: 'The most prestigious examination in India, conducted for recruitment to IAS, IPS, IFS, and other Group A & B central services.',
    conductedBy: 'Union Public Service Commission',
    frequency: 'Once a year',
    seats: '1,056 vacancies (CSE 2024)',
  },
]

// ─── Ticker ───────────────────────────────────────────────────────────────────

export const tickerItems = [
  '🔴 NEET UG 2024 Results Declared — Merit List Available on nta.ac.in',
  '📢 JEE Advanced Answer Key Released — Objection Window Open Till July 22',
  '⚠️ CUET PG 2024 Admit Card Download Link Now Live',
  '🟢 UPSC CSE Prelims Cutoff: GEN 98.0 | OBC 94.0 | SC 87.5 | ST 82.0',
  '📰 NEP 2020: 4-Year UG Programme Mandatory from 2025 Batch',
  '🏆 PM YASASVI Scholarship Applications Close July 31, 2026',
  '🎓 UGC Draft Regulations on Credit Framework Released for Public Feedback',
  '📋 NTA Releases SSC CGL 2024 Tier-I Revised Exam Dates',
  '🌐 GATE 2025 Registration Opens August 24 — Apply on goaps.iitr.ac.in',
  '🔔 Government Announces 50,000 New Scholarship Seats for Minority Students',
]

// ─── Exam Stats ───────────────────────────────────────────────────────────────

export const examTrend = [
  { year: '2020', neet: 1497000, jee: 1189000, cuet: 0 },
  { year: '2021', neet: 1614000, jee: 1204000, cuet: 0 },
  { year: '2022', neet: 1872000, jee: 1234000, cuet: 1445000 },
  { year: '2023', neet: 2038596, jee: 1145000, cuet: 1800000 },
  { year: '2024', neet: 2320000, jee: 1200000, cuet: 1900000 },
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
  { year: '2020', gen: 147, obc: 113, sc: 113, st: 113 },
  { year: '2021', gen: 138, obc: 108, sc: 108, st: 108 },
  { year: '2022', gen: 117, obc: 93, sc: 93, st: 93 },
  { year: '2023', gen: 137, obc: 107, sc: 107, st: 107 },
  { year: '2024', gen: 164, obc: 129, sc: 129, st: 129 },
]

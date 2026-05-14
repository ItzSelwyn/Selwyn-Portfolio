// Generate schema.org JSON-LD structured data for different page types

const BASE_URL = 'https://selwynjesudas.com'

export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: BASE_URL,
  name: 'Selwyn Jesudas Portfolio',
  description: 'Personal portfolio of Selwyn Jesudas showcasing full-stack projects in AI, Data Science, and Web Development.',
  publisher: {
    '@type': 'Person',
    name: 'Selwyn Jesudas',
  },
})

export const generatePersonSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Selwyn Jesudas',
  url: BASE_URL,
  image: `${BASE_URL}/images/selwyn.jpg`,
  description: 'AI & Data Science student at SKCET, Full-stack Developer',
  sameAs: [
    'https://www.linkedin.com/in/selwyn-jesudas/',
    'https://github.com/ItzSelwyn',
    'https://www.instagram.com/itz_selwyn/',
    'https://www.facebook.com/profile.php?id=61576403366342',
  ],
  jobTitle: 'Student / Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Sri Krishna College of Engineering and Technology',
  },
})

export const generateProjectSchema = (project) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: project.name,
  description: project.description,
  url: `${BASE_URL}${project.path}`,
  creator: {
    '@type': 'Person',
    name: 'Selwyn Jesudas',
  },
  applicationCategory: 'Utility',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  image: `${BASE_URL}${project.image}`,
  datePublished: project.datePublished,
  keywords: project.keywords,
  featureList: project.features,
})

export const generateInsightEdSchema = () =>
  generateProjectSchema({
    name: 'InsightEd - BLE Attendance System',
    description:
      'A Bluetooth Low Energy attendance system that automates classroom roll-call using ESP32 microcontrollers and students smartphones.',
    path: '/insighted',
    image: '/og-image-insighted.jpg',
    datePublished: '2025-01-15',
    keywords: 'BLE, ESP32, Kotlin, Firebase, Attendance, IoT',
    features: [
      'Bluetooth Low Energy scanning',
      'Real-time database synchronization',
      'Mobile app with Jetpack Compose',
      'ESP32 firmware',
      '95%+ detection accuracy',
    ],
  })

export const generateRapid100Schema = () =>
  generateProjectSchema({
    name: 'RAPID-100 - Emergency Call Triage System',
    description:
      'An AI-powered emergency call triage system that transcribes calls in real time, classifies incidents by type and severity, and generates structured summaries.',
    path: '/rapid-100',
    image: '/og-image-rapid100.jpg',
    datePublished: '2025-02-10',
    keywords: 'Emergency Services, AI, Gemini API, FastAPI, Speech-to-Text',
    features: [
      'Real-time speech-to-text transcription',
      'AI-powered incident classification',
      'Severity scoring',
      'Live dispatcher dashboard',
      '<3s summary generation',
    ],
  })

export const generateMetroMindSchema = () =>
  generateProjectSchema({
    name: 'MetroMind - Smart City Traffic Simulation',
    description:
      'A full-stack smart-city dashboard combining live map visualization with real-time traffic simulation on actual OpenStreetMap road networks.',
    path: '/metromind',
    image: '/og-image-metromind.jpg',
    datePublished: '2025-03-05',
    keywords: 'Smart City, Traffic Simulation, Dijkstra, OpenStreetMap, Docker',
    features: [
      'Real OpenStreetMap road data',
      'Interactive live map visualization',
      'AI-powered rerouting with Dijkstra algorithm',
      'Vehicle spawning and simulation',
      'Fully containerized with Docker',
    ],
  })

export const getProjectSchema = (pageType) => {
  switch (pageType) {
    case 'insighted':
      return generateInsightEdSchema()
    case 'rapid100':
      return generateRapid100Schema()
    case 'metromind':
      return generateMetroMindSchema()
    default:
      return null
  }
}

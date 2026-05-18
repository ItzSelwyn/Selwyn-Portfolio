// Metadata configuration for all pages
// Used by useDocumentHead hook to dynamically update head tags

const BASE_URL = 'https://selwynjesudas.com'
const TWITTER_HANDLE = '@ItzSelwyn'

export const METADATA = {
  home: {
    title: 'Selwyn Jesudas | AI & Full Stack Developer',
    description: 'AI & Data Science student at SKCET, Tamil Nadu. Building intelligent web applications, ML systems, and IoT solutions. View my projects: InsightEd, RAPID-100, MetroMind.',
    keywords: 'Selwyn Jesudas, Portfolio, Developer, Student, AI, Data Science, React, Python, SKCET, Tamil Nadu, Web Development',
    canonical: `${BASE_URL}`,
    ogUrl: `${BASE_URL}`,
    ogTitle: 'Selwyn Jesudas — AI & Full Stack Developer',
    ogDescription: 'AI & Data Science student at SKCET building intelligent web applications and ML systems.',
    ogImage: `${BASE_URL}/og-image.jpg`,
    twitterTitle: 'Selwyn Jesudas — AI & Full Stack Developer',
    twitterDescription: 'AI & Data Science student at SKCET building intelligent web applications and ML systems.',
  },

  insighted: {
    title: 'InsightEd | Selwyn Jesudas',
    description: 'InsightEd: A Bluetooth Low Energy attendance system that automates classroom roll-call using ESP32 microcontrollers. Built with Kotlin, Arduino C++, and Firebase. SIH 2025 project.',
    keywords: 'InsightEd, BLE, Bluetooth Low Energy, ESP32, Kotlin, Firebase, Attendance System, IoT, SKCET',
    canonical: `${BASE_URL}/insighted`,
    ogUrl: `${BASE_URL}/insighted`,
    ogTitle: 'InsightEd — BLE Attendance System',
    ogDescription: 'Automated classroom attendance using Bluetooth Low Energy, ESP32, and student smartphones. 95%+ accuracy, no app install required.',
    ogImage: `${BASE_URL}/og-image.jpg`,
    twitterTitle: 'InsightEd — Smart Classroom Attendance',
    twitterDescription: 'BLE-powered attendance system with ESP32 & Firebase. SIH 2025 project.',
  },

  rapid100: {
    title: 'RAPID-100 | Selwyn Jesudas',
    description: 'RAPID-100: An AI-powered emergency call triage system using Google Gemini API. Real-time transcription, incident classification, and dispatcher dashboards. Built with Python, FastAPI, and Twilio.',
    keywords: 'RAPID-100, Emergency Services, AI Triage, Gemini API, FastAPI, Speech-to-Text, Emergency Response, NLP',
    canonical: `${BASE_URL}/rapid-100`,
    ogUrl: `${BASE_URL}/rapid-100`,
    ogTitle: 'RAPID-100 — AI Emergency Call Triage',
    ogDescription: 'Real-time emergency call transcription and AI classification for dispatchers. Live summaries in <3s. Powered by Gemini API.',
    ogImage: `${BASE_URL}/og-image.jpg`,
    twitterTitle: 'RAPID-100 — AI Emergency Triage',
    twitterDescription: 'Real-time call transcription & AI-powered incident classification for emergency dispatchers.',
  },

  metromind: {
    title: 'MetroMind | Selwyn Jesudas',
    description: 'MetroMind: A full-stack smart-city dashboard with live traffic simulation on real OpenStreetMap road networks. Built with React, FastAPI, Dijkstra routing, and Docker. Watch vehicles navigate and reroute in real-time.',
    keywords: 'MetroMind, Smart City, Traffic Simulation, OpenStreetMap, Dijkstra, Docker, FastAPI, React, Leaflet, OSMnx',
    canonical: `${BASE_URL}/metromind`,
    ogUrl: `${BASE_URL}/metromind`,
    ogTitle: 'MetroMind — Smart City Traffic Simulation',
    ogDescription: 'Interactive traffic simulation on real city road networks. Block roads, spawn vehicles, watch AI rerouting respond to congestion.',
    ogImage: `${BASE_URL}/og-image.jpg`,
    twitterTitle: 'MetroMind — Live Traffic Simulation',
    twitterDescription: 'Smart city dashboard with real OSM data & AI-powered traffic routing.',
  },

  notfound: {
    title: '404 | Selwyn Jesudas',
    description: "This page doesn't exist. Return to Selwyn Jesudas's portfolio to view projects and get in touch.",
    keywords: 'Page Not Found',
    canonical: `${BASE_URL}/404`,
    ogUrl: `${BASE_URL}/404`,
    ogTitle: '404 — Page Not Found',
    ogDescription: "This page doesn't exist. Return to the portfolio.",
    ogImage: `${BASE_URL}/og-image.jpg`,
    twitterTitle: '404 — Page Not Found',
    twitterDescription: "This page doesn't exist.",
  },
}

// Get metadata by page type
export const getMetadata = (pageType) => {
  return METADATA[pageType] || METADATA.home
}

export const BASE_URL_EXPORT = BASE_URL
export const TWITTER_HANDLE_EXPORT = TWITTER_HANDLE

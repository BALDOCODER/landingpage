const newsData = [
  {
    id: 1,
    title: "Meta Unveils Next Generation Ray-Ban Smart Glasses",
    description: "Meta launches new smart glasses with Ray-Ban featuring improved AI capabilities, live streaming, and enhanced photo and video capture capabilities, marking a significant step in wearable tech.",
    category: "Wearable Tech",
    date: "2024-10-31",
    image: "https://placeholder.com/meta-glasses",
    source: "The Verge",
    sourceUrl: "https://www.theverge.com/tech",
    relatedLinks: [
      { text: "Meta AI Features Overview", url: "https://meta.com/smart-glasses" },
      { text: "Ray-Ban Collection Details", url: "https://ray-ban.com/meta" }
    ],
    likes: 456,
    comments: [
      { id: 1, text: "Finally, smart glasses that look stylish!", timestamp: "2024-10-31T09:30:00" },
      { id: 2, text: "The AI integration looks promising", timestamp: "2024-10-31T10:15:00" }
    ]
  },
  {
    id: 2,
    title: "Tech Support Services for Seniors See Major Growth",
    description: "New specialized tech support services focusing on seniors' digital needs emerge as tech adoption among older adults continues to rise post-pandemic, with emphasis on personalized assistance and cybersecurity.",
    category: "Tech Support",
    date: "2024-10-31",
    image: "https://placeholder.com/senior-tech",
    source: "WIRED",
    sourceUrl: "https://www.wired.com/tag/technology",
    relatedLinks: [
      { text: "Senior Tech Support Guide", url: "https://wired.com/senior-tech" },
      { text: "Digital Literacy Programs", url: "https://digital-literacy.org" }
    ],
    likes: 623,
    comments: [
      { id: 3, text: "Essential service for our aging population", timestamp: "2024-10-31T11:45:00" }
    ]
  },
  {
    id: 3,
    title: "California's Tech Industry Continues Innovation Despite Economic Challenges",
    description: "Silicon Valley and California's tech ecosystem shows resilience with continued innovation in AI, clean tech, and digital infrastructure, maintaining global leadership despite economic headwinds.",
    category: "Tech Industry",
    date: "2024-10-31",
    image: "https://placeholder.com/california-tech",
    source: "WIRED",
    sourceUrl: "https://www.wired.com/tech-industry",
    relatedLinks: [
      { text: "Silicon Valley Innovation Report", url: "https://wired.com/sv-report" },
      { text: "California Tech Economic Impact", url: "https://ca.gov/tech-impact" }
    ],
    likes: 785,
    comments: [
      { id: 4, text: "California's tech ecosystem remains unmatched", timestamp: "2024-10-31T14:20:00" }
    ]
  },
  {
    id: 4,
    title: "Tech Companies Intensify Environmental Initiatives",
    description: "Major tech firms announce new environmental commitments focusing on AI-powered solutions for climate change, enhanced recycling programs, and carbon-neutral operations by 2025.",
    category: "Environmental Tech",
    date: "2024-10-31",
    image: "https://placeholder.com/green-tech",
    source: "The Verge",
    sourceUrl: "https://www.theverge.com/tech/environment",
    relatedLinks: [
      { text: "Tech Sustainability Report", url: "https://verge.com/tech-environment" },
      { text: "Green AI Initiatives", url: "https://green-ai.org" }
    ],
    likes: 892,
    comments: [
      { id: 5, text: "Great to see tech taking environmental responsibility seriously", timestamp: "2024-10-31T16:30:00" }
    ]
  },
  {
    id: 5,
    title: "AI Integration in Software Development Reaches New Milestone",
    description: "Leading tech companies report 40% increase in development efficiency with new AI-powered coding tools, as machine learning transforms software development practices.",
    category: "Software Development",
    date: "2024-10-31",
    image: "https://placeholder.com/ai-coding",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/enterprise",
    relatedLinks: [
      { text: "AI Development Tools Report", url: "https://techcrunch.com/ai-dev-tools" },
      { text: "Future of Coding Study", url: "https://github.com/future-coding" }
    ],
    likes: 923,
    comments: [
      { id: 6, text: "AI is revolutionizing how we write code", timestamp: "2024-10-31T15:15:00" }
    ]
  },
  {
    id: 6,
    title: "Major Breakthrough in Quantum Computing Error Correction",
    description: "Researchers achieve significant advancement in quantum error correction, bringing practical quantum computing closer to reality with new algorithm reducing decoherence issues.",
    category: "Quantum Computing",
    date: "2024-10-31",
    image: "https://placeholder.com/quantum-computing",
    source: "Nature",
    sourceUrl: "https://nature.com/quantum",
    relatedLinks: [
      { text: "Quantum Research Paper", url: "https://nature.com/quantum-correction" },
      { text: "Quantum Computing Roadmap", url: "https://quantum-alliance.org" }
    ],
    likes: 845,
    comments: [
      { id: 7, text: "Huge step forward for quantum computing!", timestamp: "2024-10-31T13:45:00" }
    ]
  },
  {
    id: 7,
    title: "AI Chips Market Sees Major Disruption with New Players",
    description: "New startups challenge established chip manufacturers with innovative AI-specific processor designs, promising significant performance improvements and energy efficiency.",
    category: "Hardware",
    date: "2024-10-31",
    image: "https://placeholder.com/ai-chips",
    source: "TechCrunch",
    sourceUrl: "https://techcrunch.com/hardware",
    relatedLinks: [
      { text: "AI Chip Market Analysis", url: "https://techcrunch.com/ai-chips" },
      { text: "Semiconductor Industry Report", url: "https://semi.org/trends" }
    ],
    likes: 756,
    comments: [
      { id: 8, text: "Competition in AI chips is heating up!", timestamp: "2024-10-31T12:30:00" }
    ]
  },
  {
    id: 8,
    title: "New AI Safety Guidelines Released by Tech Giants",
    description: "Major tech companies jointly release comprehensive AI safety and ethics guidelines, focusing on responsible development, transparency, and preventing misuse of artificial intelligence.",
    category: "AI Ethics",
    date: "2024-10-31",
    image: "https://placeholder.com/ai-ethics",
    source: "The Verge",
    sourceUrl: "https://www.theverge.com/ai",
    relatedLinks: [
      { text: "AI Safety Guidelines", url: "https://ai-safety.org/guidelines" },
      { text: "Industry Ethics Framework", url: "https://tech-ethics.org" }
    ],
    likes: 1092,
    comments: [
      { id: 9, text: "Critical step for responsible AI development", timestamp: "2024-10-31T17:15:00" }
    ]
  }
];

export default newsData;
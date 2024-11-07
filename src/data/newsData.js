const newsData = [
  {
    id: 1,
    title: "OpenAI Announces GPT-5 Development Progress",
    description: "OpenAI reveals groundbreaking advances in their latest language model, promising improved reasoning capabilities and better context understanding.",
    category: "AI & Machine Learning",
    date: "2024-10-30",
    image: "https://placeholder.com/ai-future",
    source: "OpenAI Blog",
    sourceUrl: "https://openai.com/blog",
    relatedLinks: [
      { text: "OpenAI Research Papers", url: "https://openai.com/research" },
      { text: "Official Documentation", url: "https://platform.openai.com/docs" }
    ],
    likes: 245,
    comments: [
      { id: 1, text: "This could be a game-changer for the industry!", timestamp: "2024-10-30T10:30:00" },
      { id: 2, text: "Interested to see how it compares to previous versions", timestamp: "2024-10-30T11:15:00" }
    ]
  },
  {
    id: 2,
    title: "Apple Unveils Revolutionary AR Glasses",
    description: "Apple's latest wearable technology promises to blend digital and physical worlds with unprecedented precision and comfort.",
    category: "Hardware",
    date: "2024-10-29",
    image: "https://placeholder.com/apple-ar",
    source: "Apple Newsroom",
    sourceUrl: "https://www.apple.com/newsroom",
    relatedLinks: [
      { text: "Apple AR Development Portal", url: "https://developer.apple.com/augmented-reality" },
      { text: "Product Specifications", url: "https://www.apple.com/hardware-specs" }
    ],
    likes: 189,
    comments: [
      { id: 3, text: "Finally, a comfortable AR solution!", timestamp: "2024-10-29T15:20:00" }
    ]
  },
  {
    id: 3,
    title: "Tesla's New Battery Technology Doubles Range",
    description: "Revolutionary battery technology breakthrough promises to double the range of electric vehicles while reducing charging time by 60%.",
    category: "Engineering",
    date: "2024-10-28",
    image: "https://placeholder.com/tesla-battery",
    source: "Tesla Press Room",
    sourceUrl: "https://www.tesla.com/blog",
    relatedLinks: [
      { text: "Battery Technology Deep Dive", url: "https://www.tesla.com/battery" },
      { text: "Impact on Electric Vehicle Industry", url: "https://www.tesla.com/impact" }
    ],
    likes: 312,
    comments: []
  },
  {
    id: 4,
    title: "Google's Quantum Computer Achieves New Milestone",
    description: "Google's latest quantum computing breakthrough solves complex problems in minutes that would take classical computers millennia.",
    category: "Computing",
    date: "2024-10-27",
    image: "https://placeholder.com/quantum",
    source: "Google Research Blog",
    sourceUrl: "https://research.google/",
    relatedLinks: [
      { text: "Quantum Computing Research Paper", url: "https://research.google/pubs/quantum" },
      { text: "Google Quantum AI Lab", url: "https://quantumai.google/" }
    ],
    likes: 156,
    comments: [
      { id: 4, text: "The implications for cryptography are huge", timestamp: "2024-10-27T09:45:00" }
    ]
  },
  {
    id: 5,
    title: "New Framework Revolutionizes Web Development",
    description: "A new web development framework combines the best of React, Vue, and Svelte, promising unprecedented developer experience.",
    category: "Web Development",
    date: "2024-10-26",
    image: "https://placeholder.com/webdev",
    source: "Web Framework Documentation",
    sourceUrl: "https://framework.dev/docs",
    relatedLinks: [
      { text: "Framework GitHub Repository", url: "https://github.com/newframework/core" },
      { text: "Developer Getting Started Guide", url: "https://framework.dev/guide" }
    ],
    likes: 178,
    comments: []
  },
  {
    id: 6,
    title: "SpaceX Successfully Tests Starship for Mars Mission",
    description: "SpaceX completes crucial test of Starship spacecraft, marking a significant step toward human Mars colonization.",
    category: "Space Technology",
    date: "2024-10-25",
    image: "https://placeholder.com/spacex",
    source: "SpaceX News",
    sourceUrl: "https://www.spacex.com/updates",
    relatedLinks: [
      { text: "Starship Development Program", url: "https://www.spacex.com/vehicles/starship" },
      { text: "Mars Mission Overview", url: "https://www.spacex.com/mars" }
    ],
    likes: 423,
    comments: [
      { id: 5, text: "One step closer to becoming multiplanetary!", timestamp: "2024-10-25T14:30:00" }
    ]
  },
  {
    id: 7,
    title: "Breakthrough in Sustainable Energy Storage",
    description: "Scientists develop new organic battery technology that could make renewable energy storage more efficient and environmentally friendly.",
    category: "Green Technology",
    date: "2024-10-24",
    image: "https://placeholder.com/green-tech",
    source: "Nature Energy Journal",
    sourceUrl: "https://www.nature.com/nenergy",
    relatedLinks: [
      { text: "Research Paper Abstract", url: "https://www.nature.com/articles/energy-2024" },
      { text: "Sustainable Energy Initiative", url: "https://www.energy.gov/sustainable-storage" }
    ],
    likes: 267,
    comments: []
  },
  {
    id: 8,
    title: "Revolutionary Design System Launched",
    description: "A new design system promises to bridge the gap between designers and developers with AI-powered components.",
    category: "Design",
    date: "2024-10-23",
    image: "https://placeholder.com/design",
    source: "Design System Blog",
    sourceUrl: "https://design-system.io/blog",
    relatedLinks: [
      { text: "Design System Documentation", url: "https://design-system.io/docs" },
      { text: "Component Library", url: "https://design-system.io/components" }
    ],
    likes: 145,
    comments: [
      { id: 6, text: "This could really streamline our workflow", timestamp: "2024-10-23T16:20:00" }
    ]
  }
];

export default newsData;
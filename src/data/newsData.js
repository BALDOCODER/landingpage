const newsData = [
  {
    id: 1,
    title: "Microsoft Unveils Quantum-Resistant Cloud Infrastructure",
    description: "Microsoft Azure becomes the first major cloud provider to implement full quantum-resistant encryption across its entire infrastructure, preparing for the post-quantum computing era.",
    category: "Cloud Computing",
    date: "2024-11-07",
    image: "https://placeholder.com/quantum-cloud",
    source: "Microsoft Azure Blog",
    sourceUrl: "https://azure.microsoft.com/blog",
    relatedLinks: [
      { text: "Quantum-Safe Security Documentation", url: "https://azure.microsoft.com/quantum-safe" },
      { text: "Post-Quantum Cryptography Guide", url: "https://microsoft.com/security/quantum" }
    ],
    likes: 342,
    comments: [
      { id: 1, text: "Critical infrastructure upgrade for the quantum age", timestamp: "2024-11-07T09:30:00" },
      { id: 2, text: "Impressive forward-thinking approach to security", timestamp: "2024-11-07T10:15:00" }
    ]
  },
  {
    id: 2,
    title: "Neural Interface Breakthrough Enables Direct Brain-to-Text Communication",
    description: "Researchers achieve first successful high-bandwidth neural interface allowing direct thought-to-text communication with 98% accuracy, marking a milestone in brain-computer interface technology.",
    category: "Neurotechnology",
    date: "2024-11-07",
    image: "https://placeholder.com/neural-interface",
    source: "Nature Neuroscience",
    sourceUrl: "https://www.nature.com/neuro",
    relatedLinks: [
      { text: "Research Paper Abstract", url: "https://nature.com/articles/neuro-2024-11" },
      { text: "Brain-Computer Interface Initiative", url: "https://neurotechlab.org/bci" }
    ],
    likes: 567,
    comments: [
      { id: 3, text: "Revolutionary advancement for assistive technologies!", timestamp: "2024-11-07T08:45:00" }
    ]
  },
  {
    id: 3,
    title: "Solar Panel Efficiency Record Shattered with New Metamaterial Coating",
    description: "Scientists develop revolutionary metamaterial coating that pushes solar panel efficiency beyond 50%, potentially transforming renewable energy economics.",
    category: "Clean Energy",
    date: "2024-11-07",
    image: "https://placeholder.com/solar-meta",
    source: "Science Magazine",
    sourceUrl: "https://www.science.org/news",
    relatedLinks: [
      { text: "Research Publication", url: "https://science.org/doi/solar-meta-2024" },
      { text: "Clean Energy Impact Analysis", url: "https://energy.gov/solar-breakthrough" }
    ],
    likes: 428,
    comments: [
      { id: 4, text: "Game changer for renewable energy adoption!", timestamp: "2024-11-07T11:20:00" }
    ]
  },
  {
    id: 4,
    title: "AI Medical Diagnostics System Achieves Human-Level Accuracy",
    description: "International medical consortium validates AI diagnostic system that matches or exceeds human doctors' accuracy across 50 common conditions, paving way for widespread clinical adoption.",
    category: "Healthcare AI",
    date: "2024-11-07",
    image: "https://placeholder.com/ai-health",
    source: "The Lancet Digital Health",
    sourceUrl: "https://www.thelancet.com/digital-health",
    relatedLinks: [
      { text: "Clinical Trial Results", url: "https://www.thelancet.com/trials/ai-diagnostics" },
      { text: "AI in Healthcare Report", url: "https://who.int/ai-health-2024" }
    ],
    likes: 892,
    comments: [
      { id: 5, text: "This will revolutionize healthcare accessibility", timestamp: "2024-11-07T10:30:00" }
    ]
  },
  {
    id: 5,
    title: "Autonomous Vehicle Network Launches in Major European City",
    description: "Amsterdam becomes the first city to deploy a fully autonomous public transportation network, with self-driving buses and taxis operating across the entire metropolitan area.",
    category: "Transportation",
    date: "2024-11-07",
    image: "https://placeholder.com/auto-transport",
    source: "City of Amsterdam",
    sourceUrl: "https://www.amsterdam.nl/mobility",
    relatedLinks: [
      { text: "Autonomous Network Map", url: "https://amsterdam.nl/auto-network" },
      { text: "Safety & Performance Data", url: "https://mobility.amsterdam.nl/stats" }
    ],
    likes: 756,
    comments: [
      { id: 6, text: "The future of urban mobility is here!", timestamp: "2024-11-07T09:15:00" }
    ]
  },
  {
    id: 6,
    title: "Breakthrough in Quantum Internet Security Protocol",
    description: "International team of researchers demonstrates first practical quantum internet protocol that enables unconditionally secure communication across standard fiber optic networks.",
    category: "Cybersecurity",
    date: "2024-11-07",
    image: "https://placeholder.com/quantum-security",
    source: "Physical Review Letters",
    sourceUrl: "https://journals.aps.org/prl",
    relatedLinks: [
      { text: "Technical Paper", url: "https://journals.aps.org/quantum-protocol" },
      { text: "Quantum Internet Alliance", url: "https://quantum-internet.org" }
    ],
    likes: 634,
    comments: [
      { id: 7, text: "Finally, truly unbreakable encryption!", timestamp: "2024-11-07T11:45:00" }
    ]
  },
  {
    id: 7,
    title: "Fusion Power Plant Achieves Net Energy Production",
    description: "First commercial fusion reactor demonstrates sustained net energy production over 24 hours, marking a historic milestone in clean energy generation.",
    category: "Energy",
    date: "2024-11-07",
    image: "https://placeholder.com/fusion-plant",
    source: "International Atomic Energy Agency",
    sourceUrl: "https://www.iaea.org/fusion",
    relatedLinks: [
      { text: "Technical Achievement Report", url: "https://iaea.org/fusion-milestone" },
      { text: "Future of Fusion Energy", url: "https://energy.gov/fusion-future" }
    ],
    likes: 1243,
    comments: [
      { id: 8, text: "Historic moment for humanity!", timestamp: "2024-11-07T07:30:00" }
    ]
  },
  {
    id: 8,
    title: "Artificial General Intelligence Framework Announced",
    description: "Leading AI research consortium unveils new framework for achieving artificial general intelligence, with breakthrough in multi-domain learning and reasoning.",
    category: "Artificial Intelligence",
    date: "2024-11-07",
    image: "https://placeholder.com/agi-announce",
    source: "AI Research Consortium",
    sourceUrl: "https://ai-consortium.org",
    relatedLinks: [
      { text: "AGI Framework Documentation", url: "https://ai-consortium.org/agi-framework" },
      { text: "Ethics & Safety Guidelines", url: "https://ai-consortium.org/ethics" }
    ],
    likes: 978,
    comments: [
      { id: 9, text: "A new chapter in AI development begins", timestamp: "2024-11-07T08:15:00" }
    ]
  }
];

export default newsData;
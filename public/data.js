// ╔══════════════════════════════════════════════════════════════╗
// ║           YASHASVI KA PORTFOLIO — SIRF YEH FILE EDIT KARO  ║
// ║   Design kabhi mat chhuona — sirf is file mein sab badlo   ║
// ╚══════════════════════════════════════════════════════════════╝

const PORTFOLIO = {

  // ── PERSONAL INFO ──────────────────────────────────────────────
  name: "Yashasvi Dhule",
  title: "CS Graduate & Social Media Strategist",
  tagline: "I build tech products and grow brands online — bridging code and content.",
  email: "yashasvi@email.com",
  location: "Pune, India",
  available: true, // true = "Open to Work" badge dikhega

  // ── SOCIAL LINKS ───────────────────────────────────────────────
  social: {
    linkedin: "https://linkedin.com/in/yashasvidhule",
    instagram: "https://instagram.com/yashasvidhule",
    github: "https://github.com/yashasvi466",
    twitter: "",           // empty chhodo agar nahi hai
  },

  // ── ABOUT ME (2-3 lines) ───────────────────────────────────────
  about: [
    "I'm a Computer Science graduate who blends technical expertise with social media strategy — a rare combo that helps both MNC teams and solo entrepreneurs.",
    "I build AI-powered web tools and design content systems that actually drive growth. My projects go from concept to deployed product, fast.",
    "Whether you need a developer, a content strategist, or someone who can do both — I've got you covered."
  ],

  // ── SKILLS ─────────────────────────────────────────────────────
  skills: {
    "Computer Science": [
      "HTML / CSS / JavaScript",
      "Python",
      "REST APIs",
      "Vercel Deployment",
      "Git & GitHub",
      "AI Tool Integration"
    ],
    "Social Media Marketing": [
      "Content Strategy",
      "Instagram & TikTok Growth",
      "Caption & Script Writing",
      "Hashtag Research",
      "Content Calendars",
      "Brand Voice Development"
    ],
    "Tools & Platforms": [
      "Canva",
      "Groq AI / LLMs",
      "Supabase",
      "Figma (basic)",
      "Meta Business Suite",
      "ChatGPT / Claude"
    ]
  },

  // ── EDUCATION ──────────────────────────────────────────────────
  education: [
    {
      degree: "Bachelor of Computer Science",
      institution: "Your College Name",
      year: "2024",
      description: "Specialized in web development, data structures, and software engineering."
    }
  ],

  // ── PROJECTS ───────────────────────────────────────────────────
  projects: [
    {
      name: "SoloCreator.AI",
      tag: "AI SaaS Product",
      tagColor: "purple",
      description: "An AI-powered content generation platform for solo creators. Generates platform-specific captions, video scripts, hashtag strategies, content calendars & more — using Groq LLM on the backend.",
      tech: ["JavaScript", "Groq API", "Vercel", "Node.js"],
      liveUrl: "https://solocreator-ai.vercel.app",
      githubUrl: "https://github.com/yashasvi466/solocreator-ai",
      featured: true,   // featured = bada card dikhega
      image: ""         // image URL (optional)
    },
    {
      name: "Project 2 Name",
      tag: "Web App",
      tagColor: "cyan",
      description: "Describe your second project here. What problem does it solve? What tech did you use?",
      tech: ["HTML", "CSS", "JavaScript"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      image: ""
    },
    {
      name: "Project 3 Name",
      tag: "Marketing",
      tagColor: "pink",
      description: "A social media campaign or content strategy project. Add metrics if you have them — e.g. grew account from 0 to 5K in 3 months.",
      tech: ["Content Strategy", "Instagram", "Canva"],
      liveUrl: "",
      githubUrl: "",
      featured: false,
      image: ""
    }
  ],

  // ── TESTIMONIALS ───────────────────────────────────────────────
  testimonials: [
    {
      name: "Client Name",
      role: "Founder, Brand Name",
      text: "Yashasvi built exactly what I needed. The attention to detail and speed of delivery was impressive. Would highly recommend for any AI or web project.",
      avatar: "C"   // ek letter (initial) ya image URL
    },
    {
      name: "Another Client",
      role: "Social Media Manager",
      text: "The content strategy Yashasvi designed for us tripled our engagement in the first month. She understands both the technical and creative side.",
      avatar: "A"
    },
    {
      name: "Mentor / Professor",
      role: "Professor, CS Department",
      text: "One of the most driven students I've worked with — she consistently delivers projects that go beyond classroom requirements.",
      avatar: "M"
    }
  ],

  // ── STATS (jo clients ko impress kare) ─────────────────────────
  stats: [
    { number: "3+", label: "Projects Shipped" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2", label: "Tech Stacks" },
    { number: "∞", label: "Ideas in Queue" }
  ],

  // ── SERVICES (kya kya offer karti ho) ─────────────────────────
  services: [
    {
      icon: "bi-code-slash",
      title: "Web Development",
      desc: "Full-stack web apps and AI-powered tools, deployed and production-ready."
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Social Media Strategy",
      desc: "Content calendars, growth strategies, and brand voice development for creators and businesses."
    },
    {
      icon: "bi-stars",
      title: "AI Tool Integration",
      desc: "Build or integrate AI features into your existing product or workflow."
    },
    {
      icon: "bi-pen",
      title: "Content Writing",
      desc: "Captions, scripts, hooks, and copy that converts — for any platform."
    }
  ]

};

// src/data/portfolio.ts

export const personalInfo = {
  name: "Ayush Sinha",
  title: "Full-Stack Developer",
  tagline: "Crafting digital experiences that matter",
  location: "Pune, Maharashtra, India",
  email: "sinhaayush20010310@gmail.com",
  phone: "+91 XXXXXXXXXX",
  github: "https://github.com/Ayu781",
  linkedin: "https://linkedin.com/in/ayushsinha",
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.jpg",
  bio: "I'm a passionate full-stack developer who loves building scalable, beautiful web applications. With expertise in React, Node.js, and modern JavaScript, I transform complex ideas into elegant digital solutions.",
  bio2: "Currently freelancing in AI code evaluation at Outlier while actively seeking full-time opportunities where I can contribute to impactful products.",
  availableForWork: true,
};

export const stats = [
  { label: "Projects Built", value: 10, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "GitHub Commits", value: 500, suffix: "+" },
  { label: "Coffee Cups", value: 999, suffix: "+" },
];

export const skills = {
  Frontend: [
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Next.js", level: 80, icon: "▲" },
    { name: "TypeScript", level: 75, icon: "🔷" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "HTML/CSS", level: 95, icon: "🌐" },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Express.js", level: 85, icon: "🚀" },
    { name: "Spring Boot", level: 70, icon: "🍃" },
    { name: "Java", level: 75, icon: "☕" },
    { name: "REST APIs", level: 90, icon: "🔌" },
  ],
  Database: [
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "MySQL", level: 75, icon: "🐬" },
    { name: "PostgreSQL", level: 65, icon: "🐘" },
  ],
  DevOps: [
    { name: "Git/GitHub", level: 90, icon: "🐙" },
    { name: "Docker", level: 65, icon: "🐳" },
    { name: "Vercel", level: 85, icon: "▲" },
    { name: "Linux", level: 70, icon: "🐧" },
  ],
  Cloud: [
    { name: "AWS (basics)", level: 55, icon: "☁️" },
    { name: "Cloudinary", level: 80, icon: "🖼️" },
    { name: "Firebase", level: 70, icon: "🔥" },
  ],
  Tools: [
    { name: "VS Code", level: 95, icon: "💙" },
    { name: "Postman", level: 90, icon: "📬" },
    { name: "Figma", level: 65, icon: "🎯" },
    { name: "Jira", level: 70, icon: "📋" },
  ],
};

export const experiences = [
  {
    id: 1,
    company: "Outlier",
    role: "Freelance AI Code Evaluator",
    period: "2024 – Present",
    location: "Remote",
    type: "Freelance",
    description: "Evaluating and rating AI-generated code for quality, correctness, and efficiency. Providing detailed feedback to improve LLM code generation capabilities.",
    achievements: [
      "Reviewed 200+ AI-generated code submissions across multiple languages",
      "Identified edge cases and logic errors in AI-produced solutions",
      "Contributed to improving code generation accuracy by 15%",
    ],
    tech: ["Python", "JavaScript", "Java", "Code Review"],
    color: "#6366f1",
  },
  {
    id: 2,
    company: "Tech Mahindra",
    role: "Support Associate",
    period: "2023 – Feb 2025",
    location: "Pune, India",
    type: "Full-time",
    description: "Provided technical support and handled customer escalations. Worked with cross-functional teams to resolve complex technical issues.",
    achievements: [
      "Resolved 95%+ of tickets within SLA timelines",
      "Trained 5 new associates on support procedures",
      "Improved customer satisfaction score by 12%",
    ],
    tech: ["CRM Tools", "ITIL", "SQL", "Excel"],
    color: "#22d3ee",
  },
  {
    id: 3,
    company: "JSpiders Training Centre",
    role: "Software Development Trainee",
    period: "2023 – 2024",
    location: "Noida, India",
    type: "Training",
    description: "Intensive full-stack development training covering Java, Spring Boot, React, and modern web development practices.",
    achievements: [
      "Completed 1200+ hours of hands-on coding",
      "Built 5+ full-stack projects during training",
      "Achieved top 10% performance in batch assessments",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    color: "#a78bfa",
  },
];

export const projects = [
  {
    id: 1,
    title: "Pritam Medical",
    subtitle: "Pharmacy E-Commerce Platform",
    description: "A full-featured pharmacy e-commerce platform built with Next.js and Tailwind CSS. Features product catalog, cart management, and order tracking.",
    longDescription: "Pritam Medical is a production pharmacy platform serving real customers. Built with Next.js 14 for SEO-optimized server-side rendering, it features a complete e-commerce flow from product discovery to checkout.",
    image: "/projects/pritam-medical.png",
    images: ["/projects/pritam-1.png", "/projects/pritam-2.png"],
    liveUrl: "https://pritampharmacy.vercel.app",
    githubUrl: "https://github.com/Ayu781",
    featured: true,
    category: "E-Commerce",
    tech: ["Next.js", "Tailwind CSS", "React", "Vercel", "MongoDB"],
    stats: { users: "500+", products: "200+", orders: "1000+" },
    features: [
      "Product catalog with search and filters",
      "Shopping cart and order management",
      "Responsive design for all devices",
      "SEO optimized with Next.js",
      "Real-time inventory management",
    ],
    color: "#6366f1",
    year: 2024,
  },
  {
    id: 2,
    title: "IoT Monitoring Dashboard",
    subtitle: "Real-time Sensor Data Visualization",
    description: "Interactive dashboard for monitoring IoT sensor data with real-time WebSocket updates, charts, and alerts.",
    longDescription: "A comprehensive IoT monitoring solution with live data streaming, historical analysis, and configurable alerting for multiple sensor types.",
    image: "/projects/iot-dashboard.png",
    images: ["/projects/iot-1.png"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ayu781",
    featured: true,
    category: "Dashboard",
    tech: ["React", "Node.js", "Socket.io", "Chart.js", "MongoDB"],
    stats: { sensors: "50+", uptime: "99.9%", alerts: "Real-time" },
    features: [
      "Live WebSocket data streaming",
      "Interactive chart visualizations",
      "Configurable alert thresholds",
      "Historical data analysis",
      "Multi-sensor support",
    ],
    color: "#22d3ee",
    year: 2024,
  },
  {
    id: 3,
    title: "WeatherNow App",
    subtitle: "Modern Weather Application",
    description: "A beautiful weather app with location-based forecasts, animated weather conditions, and 7-day predictions.",
    longDescription: "WeatherNow delivers accurate weather data with stunning glass-morphism UI, animated weather icons, and detailed hourly/weekly forecasts.",
    image: "/projects/weather-app.png",
    images: ["/projects/weather-1.png"],
    liveUrl: "#",
    githubUrl: "https://github.com/Ayu781",
    featured: false,
    category: "Web App",
    tech: ["React", "OpenWeather API", "Tailwind CSS", "Framer Motion"],
    stats: { cities: "10,000+", accuracy: "95%", forecasts: "7-day" },
    features: [
      "Real-time weather data",
      "Location-based detection",
      "Animated weather conditions",
      "7-day forecast",
      "Glass UI design",
    ],
    color: "#a78bfa",
    year: 2023,
  },
];

export const certificates = [
  {
    title: "Full-Stack Java Developer",
    issuer: "JSpiders Training Centre",
    date: "2024",
    credentialId: "JS-2024-FSJ-001",
    verifyUrl: "#",
    image: "/certs/jspiders.png",
    skills: ["Java", "Spring Boot", "React", "MySQL"],
  },
  {
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-JS-2023",
    verifyUrl: "https://freecodecamp.org",
    image: "/certs/fcc.png",
    skills: ["JavaScript", "Algorithms", "Data Structures"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Tech Lead",
    company: "Startup India",
    avatar: "/testimonials/rahul.jpg",
    text: "Ayush delivered exceptional work on our e-commerce platform. His attention to detail and clean code architecture was impressive.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Product Manager",
    company: "TechCorp",
    avatar: "/testimonials/priya.jpg",
    text: "Working with Ayush was a pleasure. He understood our requirements quickly and delivered beyond expectations.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Verma",
    role: "CTO",
    company: "DevStudio",
    avatar: "/testimonials/arjun.jpg",
    text: "Ayush has a great eye for UI/UX and solid backend skills. A rare full-stack developer who excels at both.",
    rating: 5,
  },
];

export const socialLinks = {
  github: "https://github.com/Ayu781",
  linkedin: "https://www.linkedin.com/in/ayush-sinha781/",
  twitter: "#",
  email: "sinhaayush20010310@gmail.com",
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

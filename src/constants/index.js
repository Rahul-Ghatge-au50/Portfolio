import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import blog from "../assets/projects/BlogProject.png";

export const HERO_CONTENT = `Backend Engineer with 2 years of experience designing and developing scalable REST APIs, microservices, and backend systems using Node.js, NestJS, Express.js, PostgreSQL, and MongoDB. Experienced in authentication, payment integrations, webhook automation, database optimization, and cloud-based application development. Skilled in building secure, high-performance applications serving web and mobile platforms.`;

export const ABOUT_TEXT = `I am a dedicated Backend Engineer and Full Stack Developer with 2 years of professional experience building high-concurrency, resilient, and scalable applications. My core expertise lies in developing robust backend architectures with Node.js and NestJS, optimizing complex relational and NoSQL databases (PostgreSQL, MongoDB, TypeORM), and building real-time event-driven systems with Webhooks, WebSockets, and Redis.

At Algoocean Technology and Aliter Business Solutions, I have built production-grade backend infrastructures for diverse platforms — including dating applications with automated in-app subscription billing and AI-driven chat systems, international online consultation platforms for doctors and lawyers, and comprehensive enterprise CRM systems with third-party ERP integrations.

I am passionate about clean architecture, query performance optimization, secure authentication (JWT / RBAC), and delivering mission-critical features with high reliability.`;

export const EXPERIENCES = [
  {
    year: "July 2025 – Present",
    role: "Associate Web Developer",
    company: "Algoocean Technology Pvt Ltd",
    location: "Mumbai, Maharashtra",
    summary: "A technology solutions company delivering scalable web and mobile platforms across industries, specializing in SaaS products, AI-driven systems, and custom digital solutions.",
    bulletPoints: [
      "Contributed to multiple large-scale production projects including Oodle, Info-Calling, Vantage Market Research, Fyndsign, Long story short, and Infocontract developing scalable backend services and payment workflows.",
      "Implemented complex business logic, high-performance RESTful APIs, and real-time features using modern web technologies.",
      "Built AI-powered systems including subscription billing automation, real-time chat platforms with memory management, profile quality analysis, and engagement optimization tools.",
      "Collaborated with cross-functional teams to deliver high-performance, secure, and production-ready applications across diverse domains."
    ],
    technologies: ["Node.js", "NestJS", "PostgreSQL", "MongoDB", "TypeORM", "Redis", "AWS S3", "CloudFront", "Docker", "Webhooks", "Cron Jobs", "REST APIs"],
  },
  {
    year: "February 2024 – April 2025",
    role: "Full Stack Developer",
    company: "Aliter Business Solutions Pvt Ltd",
    location: "Mumbai, Maharashtra",
    summary: "A technology company specializing in CRM, ERP, IoT, and QAD solutions, enhancing business efficiency and process automation.",
    bulletPoints: [
      "Designed and developed backend services and REST APIs for CRM modules including Employee Management, Task Management, Project Management, and R&D workflows, improving business process automation.",
      "Designed and maintained REST APIs for ticket lifecycle management, user authentication, status tracking, and mobile application integration.",
      "Built time-reporting dashboards to visualize daily project efforts and integrated CRM with Zoho to fetch estimate PDFs for streamlined workflows.",
      "Optimized API response latency and ensured data integrity across high-volume relational modules."
    ],
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "REST APIs", "Zoho Integration", "Git", "Bootstrap"],
  },
];

export const PROJECTS = [
  {
    title: "Oodle (Dating App & AI Chat Platform)",
    company: "Algoocean Technology",
    image: project1,
    tagline: "High-scale dating platform with automated subscription billing and AI-driven matchmaking.",
    description:
      "Developed subscription billing workflows using App Store and Google Play integrations with webhook-driven automation. Built AI-powered chat systems with context memory management and real-time messaging capabilities. Implemented profile quality scoring using image analysis and bio evaluation algorithms, along with automated image quality validation using Laplacian Variance blur detection. Designed engagement automation systems to improve user onboarding and retention metrics.",
    technologies: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "Webhooks",
      "AI Chat",
      "Laplacian Variance",
      "App Store / Play In-App Billing",
      "Docker"
    ],
    highlights: [
      "Webhook-driven in-app subscription billing",
      "AI chat system with memory management",
      "Laplacian Variance blur detection for image quality",
      "Automated user retention & engagement workflows"
    ]
  },
  {
    title: "INFO-CALLING (Online Consultation Platform)",
    company: "Algoocean Technology",
    image: project2,
    tagline: "Teleconsultation booking engine connecting users with doctors and lawyers globally.",
    description:
      "InfoCalling is an online consultation and appointment booking platform that connects users with doctors and lawyers for in-person and remote consultations across local regions and international locations. Developed backend APIs for appointment scheduling, booking management, professional availability, and consultation workflows. Implemented role-based access control (RBAC) and secure authentication. Optimized PostgreSQL queries and business logic for high-volume booking operations. Integrated notification pipelines and real-time communication features.",
    technologies: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "REST APIs",
      "RBAC",
      "JWT Auth",
      "WebSockets",
      "Notification Services"
    ],
    highlights: [
      "Multi-timezone appointment booking & scheduling engine",
      "Role-Based Access Control (RBAC) & secure auth",
      "Optimized PostgreSQL queries for high concurrency",
      "Real-time consultation status tracking & alerts"
    ]
  },
  {
    title: "Company Resource Management (CRM)",
    company: "Aliter Business Solutions",
    image: project3,
    tagline: "Enterprise CRM & ticket lifecycle automation system with Zoho integration.",
    description:
      "Developed a comprehensive ticketing tool to manage internal and client issues with full lifecycle tracking. Built a time-reporting dashboard to visualize daily project efforts. Integrated CRM with Zoho to fetch estimate PDFs for streamlined workflows, and created robust RESTful APIs for a mobile ticketing module to ensure seamless cross-platform data synchronization and performance.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Zoho Integration",
      "Mobile Backend API",
      "Git"
    ],
    highlights: [
      "End-to-end ticket lifecycle management system",
      "Zoho CRM PDF estimate integration",
      "Daily time-reporting analytics dashboard",
      "Mobile-ready REST APIs for field agents"
    ]
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Backend & Microservices",
    skills: [
      { name: "Node.js", level: "Expert" },
      { name: "NestJS", level: "Advanced" },
      { name: "Express.js", level: "Expert" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "Microservices", level: "Advanced" },
      { name: "JWT Auth & RBAC", level: "Expert" },
      { name: "Webhooks", level: "Advanced" },
      { name: "Cron Jobs", level: "Advanced" }
    ]
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Expert" },
      { name: "MySQL", level: "Advanced" },
      { name: "TypeORM", level: "Advanced" },
      { name: "Redis", level: "Intermediate" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS S3", level: "Advanced" },
      { name: "CloudFront", level: "Intermediate" },
      { name: "Docker", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" }
    ]
  },
  {
    title: "Languages & Frontend",
    skills: [
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "SQL", level: "Advanced" },
      { name: "React.js", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Expert" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" }
    ]
  },
  {
    title: "Tools & Testing",
    skills: [
      { name: "Postman", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Antigravity", level: "Advanced" },
      { name: "npm / yarn", level: "Advanced" }
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Bachelor of Engineering (B.E.) in Mechanical Engineering",
    institution: "Smt. Indira Gandhi College of Engineering",
    period: "June 2023",
    location: "Navi Mumbai, Maharashtra",
    grade: "Completed"
  },
  {
    degree: "Diploma in Mechanical Engineering",
    institution: "Sant Gajanan College of Engineering",
    period: "May 2019",
    location: "Gadhinglaj, Maharashtra",
    grade: "Completed"
  },
  {
    degree: "Secondary School Certificate (S.S.C.)",
    institution: "Maharashtra State Board",
    period: "May 2015",
    location: "Maharashtra, India",
    grade: "First Class with Distinction"
  }
];

export const CERTIFICATIONS = [
  {
    title: "Full Stack Web Development (FSWD - MERN Stack)",
    issuer: "Leetu Educational",
    description: "Comprehensive training in MongoDB, Express.js, React.js, Node.js, REST API design, state management, and modern full-stack web architectures."
  }
];

export const CONTACT = {
  name: "Rahul Anant Ghatge",
  title: "Backend Engineer | Full Stack Developer",
  location: "Mumbai, Maharashtra, India",
  address: "Hajimalang Road, Nandivali, Kalyan(E), Thane - 421306, Mumbai, Maharashtra",
  phoneNo: "+91 7447863411",
  email: "rahulghatge166@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahul-ghatge-b10814214/",
  github: "https://github.com/Rahul-Ghatge-au50",
  portfolio: "https://rahul-ghatge-au50.github.io/Portfolio/"
};

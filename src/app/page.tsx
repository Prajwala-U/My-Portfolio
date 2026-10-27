import Navigation from "@/components/Navigation";
import AnimateOnScroll from "@/components/AnimateOnScroll";

/* ============================================
   SVG Icons (No emojis anywhere, clean scalable vectors)
   ============================================ */

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function IconDownload() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function IconServer() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
    </svg>
  );
}

function IconTool() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  );
}

function IconCloud() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function IconDatabase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function IconBriefcase() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

function IconGraduationCap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function IconAward() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconTrophy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function IconBrain() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function IconFileText() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" x2="8" y1="13" y2="13" />
      <line x1="16" x2="8" y1="17" y2="17" />
      <line x1="10" x2="8" y1="9" y2="9" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

/* ============================================
   Resume Data (100% Exact from PDF Content)
   ============================================ */

const experience = [
  {
    company: "Aptean India Pvt Ltd",
    role: "Associate Engineer AI Intern",
    date: "Oct'25 - Oct'26",
    points: [
      "Building an AI-powered test automation system with intent mapping and self-healing locator strategies using Playwright and LLM integration.",
    ],
  },
  {
    company: "EvolveTech",
    role: "Intern | Machine Learning",
    date: "Jun'25 - Sep'25",
    points: [
      "Developed an AI-powered English learning assistant with TTS/STT using custom-trained models, applying OOP principles in Python for a clean and scalable backend.",
    ],
  },
  {
    company: "Skillicon Technologies",
    role: "Intern | Machine Learning",
    date: "Nov'24 - Jun'25",
    points: [
      "Worked on a Prognostic of Automobiles project with a focus on Driver Behavior Analysis. Applied ML models to predict maintenance needs and assess driver habits for enhanced safety and efficiency.",
    ],
  },
  {
    company: "Suvidha Foundation",
    role: "Intern | Machine Learning",
    date: "Oct'23 - Nov'23",
    points: [
      "Completed a Machine Learning internship, applying algorithms and demonstrating strong problem-solving skills in a productive learning environment.",
    ],
  },
  {
    company: "Knowledge is Power Tutorials, Bnglr",
    role: "Tutor & Founder",
    date: "May'22 - Present",
    points: [
      "Launched KIP Tutorials at 17, providing tailored educational resources and ensuring academic improvement for diverse student needs.",
    ],
  },
  {
    company: "Cloud Education Center, Bangalore",
    role: "Educator & Tutor",
    date: "Apr'24 - Aug'24",
    points: [
      "Trained ICSE and 2nd PU students in technical and non-technical subjects, simplifying complex topics to enhance understanding and performance.",
    ],
  },
];

const achievements = [
  {
    title: "Winner - Aptean AI Hackathon",
    date: "Sept 2025",
    subtitle: "Built an innovative AI automation solution and secured top honors.",
  },
  {
    title: "Master of Ceremonies (MC) for VTU Fest with 5000+ audience",
    date: "Mar 2024",
    subtitle: "Introduced Kannada film celebrities on stage.",
  },
  {
    title: "Winner - Enigma Hackathon (Among 100 Teams)",
    date: "Dec 2024",
    subtitle: "Finished 1st place out of 100 competing teams.",
  },
  {
    title: "Finalist - IEEE Webathon",
    date: "July 2024",
    subtitle: "Selected as top finalist for high-impact engineering design.",
  },
  {
    title: "Participant - Python Full Stack Hackathon",
    date: "Jan 2024",
    subtitle: "Built end-to-end full-stack Python application under timed hackathon conditions.",
  },
];

const skillCategories = [
  {
    title: "Automation Using Playwright & Testing",
    icon: "tool",
    skills: [
      "Playwright (Python, TypeScript)",
      "Page Object Model (POM)",
      "UI Automation",
      "Advanced Locator Strategies (XPath, CSS, automationId)",
      "Self-healing & Fallback Locators",
    ],
  },
  {
    title: "Programming & Development",
    icon: "code",
    skills: [
      "Python",
      "JavaScript",
      "Java",
      "C",
      "ReactJS",
      "Flask",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    title: "AI / ML & Data Science",
    icon: "brain",
    skills: [
      "LangFlow",
      "AI Agents",
      "Intent Mapping",
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LSTM",
      "CNN",
      "Logistic Regression",
      "Clustering",
      "PCA",
      "LDA",
      "Feature Engineering",
      "Data Preprocessing",
    ],
  },
  {
    title: "AI + Automation Systems",
    icon: "cloud",
    skills: [
      "LLM Integration (Azure OpenAI)",
      "Prompt Engineering",
      "Intent Mapping Systems",
      "AI-driven Test Automation",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: "server",
    skills: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Streamlit",
    ],
  },
  {
    title: "Development Practices & Databases",
    icon: "database",
    skills: [
      "SDLC",
      "Agile",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "briefcase",
    skills: [
      "Salesforce",
      "Flowable (IAM)",
      "Azure DevOps",
      "VS Code",
      "PyCharm",
      "Android Studio",
      "Git",
      "Linux (Ubuntu)",
    ],
  },
];

const projects = [
  {
    title: "Aptean HR Assistant - AI-powered Hiring Solution",
    description:
      "Built a recruitment platform with bulk resume parsing, JD matching, candidate scoring, diversity analysis, dashboard insights, and automated email notifications via SMTP.",
    tech: ["Python", "Azure OpenAI", "Resume Parsing", "SMTP", "Candidate Scoring", "Dashboard"],
  },
  {
    title: "MedAlert - Smart Medication Management System",
    description:
      "Developed a Python & Flask web app with SQL backend and Android platform to detect harmful drug interactions, identify and count pills via computer vision with 3D visualization, and provide native language conversational AI reminders.",
    tech: ["Python", "Flask", "SQL", "Android", "Computer Vision", "3D Visualization", "Conversational AI"],
  },
  {
    title: "Shrikaa AI",
    description: "Developed an AI-powered educational chatbot providing structured learning assistance and interactive knowledge tutoring.",
    tech: ["Python", "AI Agents", "NLP", "Chatbot Architecture"],
  },
  {
    title: "Prognostic of Automobiles",
    description:
      "Integrated RaspberryPi, CAN Module, AWS, and ML models to predict component failures and conduct Driver Behavior Analysis for enhanced vehicle safety and preventative maintenance.",
    tech: ["RaspberryPi", "CAN Module", "AWS", "Machine Learning", "Driver Behavior Analysis"],
  },
  {
    title: "Stock Market Price Prediction",
    description:
      "Implemented financial prediction algorithms using LSTM, LDA, Logistic Regression, and major ML algorithms for time series price forecasting.",
    tech: ["Python", "LSTM", "LDA", "Logistic Regression", "Time Series ML"],
  },
  {
    title: "AgriScan - Smart Crop Disease Detection App",
    description:
      "Developed an intelligent agricultural mobile and web application leveraging deep learning and computer vision to identify crop diseases from plant leaf imagery.",
    tech: ["Computer Vision", "Deep Learning", "CNN", "Crop Disease Detection"],
  },
  {
    title: "Database Management System Mini Project",
    description:
      "Developed a full-featured E-Commerce website featuring database modeling, relational schemas, user sessions, inventory management, and query optimization.",
    tech: ["DBMS", "SQL", "MySQL", "Web Development", "E-Commerce"],
  },
  {
    title: "Data Visualization Project",
    description:
      "Designed an interactive Tableau dashboard delivering deep business analytics, multidimensional data exploration, and KPI metrics tracking.",
    tech: ["Tableau", "Data Visualization", "Business Analytics", "Dashboards"],
  },
  {
    title: "Machine Learning Projects",
    description:
      "Implemented various machine learning techniques in Python including supervised & unsupervised algorithms, feature engineering pipelines, dimensionality reduction, and evaluation metrics.",
    tech: ["Python", "scikit-learn", "Classification", "Clustering", "Feature Engineering"],
  },
];

const publications = [
  {
    num: "1",
    title: "MedAlert",
    description: "IEEE paper on an AI-powered medical alert system.",
    type: "IEEE Paper",
  },
  {
    num: "2",
    title: "Driver Behaviour Analysis",
    description: "IEEE paper on AI-based driver behavior monitoring.",
    type: "IEEE Paper",
  },
  {
    num: "3",
    title: "AI in the Detection of Medicinal Plants",
    description: "Research paper on AI-powered medicinal plant identification.",
    type: "Research Paper",
  },
];

const certifications = [
  {
    provider: "SWAYAM-NPTEL",
    courses: "Python, Java, DBMS, Data Analytics, Ethical Hacking, Cloud Computing",
  },
  {
    provider: "Infosys Springboard",
    courses: "AWS, Git, Python",
  },
  {
    provider: "Great Learning",
    courses: "DevOps, Algorithms in C",
  },
];

const education = [
  {
    degree: "BE in Artificial Intelligence & Machine Learning",
    school: "Global Academy of Technology, Bangalore",
    date: "2022 - 2026",
    score: "CGPA: 9.13",
  },
  {
    degree: "2nd PU | PCMB",
    school: "RNS Comp PU College, Bangalore",
    date: "2022",
    score: "92.83%",
  },
  {
    degree: "SSLC",
    school: "Govt. High School | Moodugiliyaru, Kota, Udupi",
    date: "2020",
    score: "93.76%",
  },
];

const hobbies = [
  "Anchoring",
  "Acting",
  "Traveling",
  "Dancing",
  "Mentoring Students",
  "Continuous Learning",
  "Music",
  "Cooking",
];

function getSkillIcon(icon: string) {
  switch (icon) {
    case "code":
      return <IconCode />;
    case "server":
      return <IconServer />;
    case "tool":
      return <IconTool />;
    case "cloud":
      return <IconCloud />;
    case "database":
      return <IconDatabase />;
    case "briefcase":
      return <IconBriefcase />;
    case "brain":
      return <IconBrain />;
    default:
      return <IconCode />;
  }
}

/* ============================================
   Page Component (SSR)
   ============================================ */

export default function Home() {
  return (
    <>
      {/* Background ambient lighting */}
      <div className="bg-grid" aria-hidden="true" />
      <div className="bg-gradient-orb bg-gradient-orb--1" aria-hidden="true" />
      <div className="bg-gradient-orb bg-gradient-orb--2" aria-hidden="true" />
      <div className="bg-gradient-orb bg-gradient-orb--3" aria-hidden="true" />

      <div className="page-wrapper">
        <Navigation />

        {/* ==================== HERO ==================== */}
        <section className="hero" id="about">
          <div className="container">
            <div className="hero__content">
              <p className="hero__greeting">Hello, I am</p>
              <h1 className="hero__name">
                Prajwala <span className="hero__name-gradient">U</span>
              </h1>
              <p className="hero__title">
                AI &amp; Software Engineer
              </p>
              <p className="hero__description">
                AI &amp; Software Engineer with hands-on experience in Generative AI, QA Automation, and Enterprise SaaS applications. Experienced in building AI-driven solutions, developing Playwright automation frameworks, implementing LLM-powered test automation, validating enterprise workflows across AppCentral, Salesforce, Flowable, and M2M, and performing end-to-end product testing. Skilled in Python, TypeScript, Playwright, Machine Learning, and enterprise product validation with a strong foundation in software engineering and automation.
              </p>

              <div className="hero__contact-row">
                <span className="hero__contact-item" title="Phone">
                  <IconPhone />
                  +91 9353317258
                </span>
                <a
                  href="mailto:prajwalashetty120120@gmail.com"
                  className="hero__contact-item"
                  title="Email"
                >
                  <IconMail />
                  prajwalashetty120120@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/prajwala-uday-shetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__contact-item"
                  title="LinkedIn Profile"
                >
                  <IconLinkedIn />
                  linkedin.com/in/prajwala-uday-shetty
                </a>
                <a
                  href="https://github.com/Prajwala-U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hero__contact-item"
                  title="GitHub Profile"
                >
                  <IconGitHub />
                  github.com/Prajwala-U
                </a>
                <span className="hero__contact-item" title="Date of Birth">
                  <IconCalendar />
                  12/01/2005
                </span>
                <span className="hero__contact-item" title="Location">
                  <IconMapPin />
                  Bangalore, India
                </span>
              </div>

              <div className="hero__actions">
                <a
                  href="mailto:prajwalashetty120120@gmail.com"
                  className="btn btn--primary"
                  id="hero-cta-contact"
                >
                  <IconMail />
                  Get In Touch
                </a>
                <a
                  href="/Prajwala_Shetty_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Prajwala_Shetty_Resume.pdf"
                  className="btn btn--secondary"
                  id="hero-cta-resume"
                >
                  <IconDownload />
                  Download Resume PDF
                </a>
                <a
                  href="https://linkedin.com/in/prajwala-uday-shetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  id="hero-cta-linkedin"
                >
                  <IconLinkedIn />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Prajwala-U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  id="hero-cta-github"
                >
                  <IconGitHub />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== EXPERIENCE ==================== */}
        <section className="section" id="experience">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Professional Background</p>
                <h2 className="section__title">Work Experience</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <div className="timeline">
              {experience.map((exp, i) => (
                <AnimateOnScroll key={i}>
                  <div className="timeline__item">
                    <div className="timeline__dot" />
                    <div className="timeline__header">
                      <div>
                        <h3 className="timeline__company">{exp.company}</h3>
                        <p className="timeline__role">{exp.role}</p>
                      </div>
                      <span className="timeline__date">{exp.date}</span>
                    </div>
                    <ul className="timeline__points">
                      {exp.points.map((point, j) => (
                        <li key={j} className="timeline__point">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== ACHIEVEMENTS ==================== */}
        <section className="section" id="achievements">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Honors &amp; Recognition</p>
                <h2 className="section__title">Key Achievements</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <div className="achievements-list">
              {achievements.map((item, i) => (
                <AnimateOnScroll key={i}>
                  <div className="card achievement-card">
                    <div className="achievement-card__icon">
                      <IconTrophy />
                    </div>
                    <div className="achievement-card__content">
                      <h3 className="achievement-card__title">{item.title}</h3>
                      {item.subtitle && (
                        <p className="achievement-card__subtitle">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="achievement-card__date">{item.date}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== SKILLS ==================== */}
        <section className="section" id="skills">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Technical Capabilities</p>
                <h2 className="section__title">Skills &amp; Competencies</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <div className="skills-grid stagger-children">
              {skillCategories.map((cat, i) => (
                <AnimateOnScroll key={i}>
                  <div className="card">
                    <h3 className="skill-category__title">
                      {getSkillIcon(cat.icon)}
                      {cat.title}
                    </h3>
                    <div className="skill-tags">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="skill-tag">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PROJECTS ==================== */}
        <section className="section" id="projects">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Technical Portfolio</p>
                <h2 className="section__title">Featured Projects</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <div className="projects-grid">
              {projects.map((project, i) => (
                <AnimateOnScroll key={i}>
                  <div className="card project-card">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__description">
                      {project.description}
                    </p>
                    <div className="project-card__tech">
                      {project.tech.map((t) => (
                        <span key={t} className="project-card__tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== PUBLICATIONS ==================== */}
        <section className="section" id="publications">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Scholarly Contributions</p>
                <h2 className="section__title">Research Papers &amp; Publications</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <div className="publications-list">
              {publications.map((pub, i) => (
                <AnimateOnScroll key={i}>
                  <div className="card pub-card">
                    <div className="pub-card__header">
                      <div className="pub-card__badge-wrapper">
                        <span className="pub-card__num">[{pub.num}]</span>
                        <span className="pub-card__type">{pub.type}</span>
                      </div>
                      <div className="pub-card__icon">
                        <IconFileText />
                      </div>
                    </div>
                    <h3 className="pub-card__title">{pub.title}</h3>
                    <p className="pub-card__desc">{pub.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== EDUCATION ==================== */}
        <section className="section" id="education">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Academic Foundation</p>
                <h2 className="section__title">Education</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <div className="education-grid">
              {education.map((edu, i) => (
                <AnimateOnScroll key={i}>
                  <div className="card">
                    <div className="education-card">
                      <div className="education-card__icon">
                        <IconGraduationCap />
                      </div>
                      <div className="education-card__info">
                        <h3 className="education-card__degree">{edu.degree}</h3>
                        <p className="education-card__school">{edu.school}</p>
                        <div className="education-card__meta">
                          <span className="education-card__date">{edu.date}</span>
                          <span className="education-card__gpa">{edu.score}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== CERTIFICATIONS ==================== */}
        <section className="section" id="certifications">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Continuous Learning</p>
                <h2 className="section__title">Certifications</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <AnimateOnScroll key={i}>
                  <div className="card cert-item">
                    <div className="cert-item__icon">
                      <IconAward />
                    </div>
                    <div className="cert-item__content">
                      <h3 className="cert-item__provider">{cert.provider}</h3>
                      <p className="cert-item__courses">{cert.courses}</p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== HOBBIES ==================== */}
        <section className="section" id="hobbies">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Personal Passions</p>
                <h2 className="section__title">Hobbies &amp; Interests</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="hobbies-grid">
                {hobbies.map((hobby) => (
                  <span key={hobby} className="hobby-tag">
                    {hobby}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ==================== CONTACT ==================== */}
        <section className="section" id="contact">
          <div className="container">
            <AnimateOnScroll>
              <div className="section__header">
                <p className="section__label">Connect</p>
                <h2 className="section__title">Get In Touch</h2>
                <div className="section__divider" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll>
              <div className="card contact-card">
                <p className="contact-card__intro">
                  Currently pursuing BE in Artificial Intelligence &amp; Machine Learning at Global Academy of Technology, Bangalore. Experienced in building AI-powered test automation, LLM integration, and enterprise SaaS solutions. Open for AI &amp; Software Engineering roles, collaborative research, and engineering innovations.
                </p>

                <div className="contact-card__grid">
                  <a
                    href="mailto:prajwalashetty120120@gmail.com"
                    className="contact-card__item"
                  >
                    <div className="contact-card__item-icon">
                      <IconMail />
                    </div>
                    <div className="contact-card__item-details">
                      <span className="contact-card__item-label">Email</span>
                      <span className="contact-card__item-value">prajwalashetty120120@gmail.com</span>
                    </div>
                    <IconExternal />
                  </a>

                  <a
                    href="tel:+919353317258"
                    className="contact-card__item"
                  >
                    <div className="contact-card__item-icon">
                      <IconPhone />
                    </div>
                    <div className="contact-card__item-details">
                      <span className="contact-card__item-label">Phone</span>
                      <span className="contact-card__item-value">+91 9353317258</span>
                    </div>
                    <IconExternal />
                  </a>

                  <a
                    href="https://linkedin.com/in/prajwala-uday-shetty"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card__item"
                  >
                    <div className="contact-card__item-icon">
                      <IconLinkedIn />
                    </div>
                    <div className="contact-card__item-details">
                      <span className="contact-card__item-label">LinkedIn</span>
                      <span className="contact-card__item-value">linkedin.com/in/prajwala-uday-shetty</span>
                    </div>
                    <IconExternal />
                  </a>

                  <a
                    href="https://github.com/Prajwala-U"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-card__item"
                  >
                    <div className="contact-card__item-icon">
                      <IconGitHub />
                    </div>
                    <div className="contact-card__item-details">
                      <span className="contact-card__item-label">GitHub</span>
                      <span className="contact-card__item-value">github.com/Prajwala-U</span>
                    </div>
                    <IconExternal />
                  </a>
                </div>

                <div className="contact-card__actions">
                  <a
                    href="mailto:prajwalashetty120120@gmail.com"
                    className="btn btn--primary"
                    id="contact-btn-email"
                  >
                    <IconMail />
                    Send an Email
                  </a>
                  <a
                    href="/Prajwala_Shetty_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Prajwala_Shetty_Resume.pdf"
                    className="btn btn--secondary"
                    id="contact-btn-resume"
                  >
                    <IconDownload />
                    Download Resume PDF
                  </a>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ==================== FOOTER ==================== */}
        <footer className="footer">
          <div className="container">
            <div className="footer__inner">
              <div className="footer__branding">
                <span className="footer__name">Prajwala U</span>
                <span className="footer__desc">AI &amp; Software Engineer</span>
              </div>
              <p className="footer__text">
                Designed &amp; built with Next.js SSR for Netlify.
              </p>
              <div className="footer__links">
                <a
                  href="https://linkedin.com/in/prajwala-uday-shetty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Prajwala-U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  GitHub
                </a>
                <a
                  href="mailto:prajwalashetty120120@gmail.com"
                  className="footer__link"
                >
                  Email
                </a>
                <a
                  href="/Prajwala_Shetty_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Prajwala_Shetty_Resume.pdf"
                  className="footer__link"
                >
                  PDF Resume
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

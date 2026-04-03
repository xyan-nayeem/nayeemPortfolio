// ============================================================
//  PORTFOLIO DATA — Omur Faruk Nayeem
//  Edit this file to update all content across the portfolio.
// ============================================================

export const personalInfo = {
  name:        "Omur Faruk Nayeem",
  role:        "Frontend Developer",
  tagline:     "I build beautiful, fast & accessible web experiences.",
  bio:         "A passionate Frontend Developer from Bangladesh with 1+ year of hands-on experience crafting responsive websites and web applications. I love turning creative design ideas into clean, functional code using modern technologies like React.js and Tailwind CSS.",
  email:       "omurfaruknayeem@gmail.com",
  location:    "Dhaka, Bangladesh 🇧🇩",
  availability:"Open to Work",
  github:      "https://github.com/omurfaruknayeem",
  linkedin:    "https://linkedin.com/in/omurfaruknayeem",
  facebook:    "https://facebook.com/omurfaruknayeem",
  twitter:     "https://twitter.com/omurfaruknayeem",
  stats: [
    { value: "10+", label: "Projects Completed" },
    { value: "12+", label: "Months of Learning"  },
    { value: "8+",  label: "Technologies Used"   },
  ],
};

export const typedWords = [
  "Frontend Developer",
  "React.js Enthusiast",
  "UI / UX Lover",
  "Creative Coder",
];

export const aboutPoints = [
  "Passionate about creating pixel-perfect, responsive interfaces.",
  "Dedicated self-learner who completed a full Frontend course in 1 year.",
  "Focused on writing clean, maintainable, and well-structured code.",
  "Always exploring new tools and best practices in the web ecosystem.",
];

export const experiences = [
  {
    title:   "Frontend Development Course",
    company: "Online Learning Platform",
    date:    "Jan 2024 – Present",
    type:    "Education",
    color:   "#7c6fff",
    points: [
      "Completed in-depth training in HTML5, CSS3, JavaScript (ES6+), and React.js.",
      "Built 10+ hands-on projects covering landing pages, apps, and UI components.",
      "Practiced responsive design, accessibility, and performance optimization.",
    ],
  },
  {
    title:   "Personal Projects & Self Practice",
    company: "Self-Initiated",
    date:    "Mar 2024 – Present",
    type:    "Project",
    color:   "#ff6b9d",
    points: [
      "Designed and developed multiple real-world websites independently.",
      "Maintained version control using Git & GitHub for all personal projects.",
      "Experimented with UI/UX design using Figma before writing code.",
    ],
  },
  {
    title:   "Open Source Contributions",
    company: "GitHub Community",
    date:    "Jun 2024 – Present",
    type:    "Community",
    color:   "#00d4ff",
    points: [
      "Contributed fixes and improvements to beginner-friendly repositories.",
      "Participated in code reviews and issue discussions.",
      "Regularly sharing projects publicly to receive community feedback.",
    ],
  },
];

export const skillCategories = [
  {
    category: "Core Languages",
    icon: "🌐",
    skills: [
      { name: "HTML5",           level: 92 },
      { name: "CSS3",            level: 88 },
      { name: "JavaScript ES6+", level: 80 },
    ],
  },
  {
    category: "Frameworks & Libraries",
    icon: "⚛️",
    skills: [
      { name: "React.js",       level: 78 },
      { name: "Tailwind CSS",   level: 82 },
      { name: "Bootstrap 5",    level: 85 },
    ],
  },
  {
    category: "Tools & Workflow",
    icon: "🛠️",
    skills: [
      { name: "Git & GitHub",   level: 75 },
      { name: "Figma (Basic)",  level: 60 },
      { name: "VS Code",        level: 95 },
    ],
  },
];

export const techStack = [
  { logo: "⚛️", name: "React.js",     category: "UI Library",        color: "#61DAFB" },
  { logo: "🌐", name: "HTML5",        category: "Markup Language",   color: "#E34F26" },
  { logo: "🎨", name: "CSS3",         category: "Styling",           color: "#264DE4" },
  { logo: "💛", name: "JavaScript",   category: "ES6+ Language",     color: "#F7DF1E" },
  { logo: "🌊", name: "Tailwind CSS", category: "Utility Framework", color: "#38BDF8" },
  { logo: "🅱️", name: "Bootstrap 5", category: "CSS Framework",     color: "#7952B3" },
  { logo: "🐙", name: "Git & GitHub", category: "Version Control",   color: "#F05032" },
  { logo: "🎭", name: "Figma",        category: "Design Tool",       color: "#F24E1E" },
];

export const projects = [
  {
    title:       "E-Commerce Landing Page",
    description: "A modern, fully responsive e-commerce product landing page with smooth animations, product showcase section, and a clean checkout UI built with React and Tailwind CSS.",
    tags:        ["React", "Tailwind", "JavaScript"],
    gradient:    "from-violet-500 to-purple-700",
    emoji:       "🛍️",
    liveUrl:     "https://react-orebi-e-commerce-seven.vercel.app/",
    githubUrl:   "https://github.com/xyan-nayeem?tab=repositories",
    featured:    true,
  },
  {
    title:       "Figma Portfolio Template",
    description: "A visually stunning portfolio template designed for creative professionals. Features a modern layout, smooth animations, and seamless integration with Figma's design system.",
    tags:        ["Figma", "UI/UX", "Design"],
    gradient:    "from-pink-500 to-rose-600",
    emoji:       "�",
    liveUrl:     "https://xyan-nayeem.github.io/Telwind-Project-05-Full",
    githubUrl:   "https://github.com/xyan-nayeem?tab=repositories",
    featured:    true,
  },
  {
    title:       "Developer Portfolio Template",
    description: "A clean, minimal portfolio template designed for developers. Built with React, featuring dark mode, scroll-triggered animations, and a working contact form.",
    tags:        ["React", "CSS3", "Responsive"],
    gradient:    "from-sky-400 to-cyan-500",
    emoji:       "💼",
    liveUrl:     "https://nayeem-portfolio-xi.vercel.app/",
    githubUrl:   "https://github.com/xyan-nayeem?tab=repositories",
    featured:    false,
  },
  {
    title:       "Figma Task project Template",
    description: "A fully functional task management application using React Hooks and localStorage for data persistence. Supports adding, completing, filtering and deleting tasks.",
    tags:        ["React", "Hooks", "localStorage"],
    gradient:    "from-emerald-400 to-teal-500",
    emoji:       "✅",
    liveUrl:     "https://xyan-nayeem.github.io/Project-4",
    githubUrl:   "https://github.com/xyan-nayeem?tab=repositories",
    featured:    false,
  },
  {
    title:       "Figma Complete ",
    description: "A real-time weather dashboard that fetches data from a public API and displays temperature, humidity, wind speed, and a 5-day forecast with a clean card layout.",
    tags:        ["React", "API", "Tailwind"],
    gradient:    "from-orange-400 to-amber-500",
    emoji:       "🌤️",
    liveUrl:     "https://xyan-nayeem.github.io/Project-03",
    githubUrl:   "https://github.com/xyan-nayeem?tab=repositories",
    featured:    false,
  },
  {
    title:       "Quiz Application",
    description: "An interactive quiz app built with React featuring multiple categories, a countdown timer, score tracking, and an animated results summary screen at the end.",
    tags:        ["React", "JavaScript", "UI/UX"],
    gradient:    "from-fuchsia-500 to-pink-400",
    emoji:       "🧠",
    liveUrl:     "https://xyan-nayeem.github.io/JS-Class-07-Number-Guess-Game-",
    githubUrl:   "https://github.com/xyan-nayeem?tab=repositories",
    featured:    false,
  },
];

export const FILTERS = ["All", "React", "JavaScript", "HTML5", "CSS3", "Tailwind", "API"];

export const profile = {
  name: "Arjun Singh",
  jobTitle: "product @innoverse",
  heroDescription:
    "i build things that actually work (mostly), i have experience developing frontend and backend developing for web, RAG integration and SaaS. i've been fooling around my laptop enough to figure out any given problem <3",
  email: "arjunrhetoric@gmail.com",
  linkedin: "https://www.linkedin.com/in/arjun-singh-9b85623a4/",
  github: "https://github.com/arjunrhetoric/",
  twitter: "https://x.com/arjunrhetoric",
  leetcode: "https://leetcode.com/u/arjunrhetoric/",
  location: "Mumbai, India",
  phone: "+91-8779024878",
  resumeUrl: "/resume.pdf",
};

export type Experience = {
  _id: string;
  company: string;
  role: string;
  date: string;
  location?: string;
  description: string[];
  logo?: string;
  link?: string;
};

export const experiences: Experience[] = [
  {
    _id: "spanwiz-intern",
    company: "Spanwiz LLP",
    role: "Web Developer & Digital Marketing Intern",
    date: "June 2024 - July 2024",
    location: "Mumbai, India",
    description: [
      "Developed and optimized responsive websites using WordPress and Elementor.",
      "Built frontend mini-projects using HTML, CSS, and JavaScript.",
      "Gained hands-on experience in SEO, SEM, Google Ads, and digital content creation using Canva and Ubersuggest.",
    ],
    link: "https://spanwiz.com",
    logo: "/spanwiz-logo.webp",
  },
  {
    _id: "google-ambassador",
    company: "Google Gemini",
    role: "Student Ambassador",
    date: "Nov 2023 - March 2024",
    location: "Mumbai, India",
    logo: "/gemini-logo.webp",
    description: [
      "Selected as a Google Student Ambassador to engage with the student community and promote awareness of Google's AI ecosystem.",
      "Created engaging digital content around Gemini, AI prompting, and student-focused initiatives.",
      "Explored applications of Google Gemini in learning, productivity, and problem-solving.",
    ],
  },
];

export type Education = {
  _id: string;
  institution: string;
  degree: string;
  date: string;
  cgpa?: string;
  logo?: string;
  link?: string;
};

export const education: Education[] = [
  {
    _id: "tcet-be",
    institution: "Thakur College of Engineering and Technology",
    degree: "Bachelors of Engineering in Computer Engineering",
    date: "Aug 2025 - Present",
    cgpa: "9.41 / 10",
    logo: "/tcet-logo.webp",
  },
];

export type SkillCategory = {
  _id: string;
  category: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    _id: "languages",
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Java", "HTML5", "CSS3", "SQL", "C", "C++"],
  },
  {
    _id: "frameworks",
    category: "Libraries & Frameworks",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "EJS",
      "Java Servlets",
      "REST APIs",
      "WordPress",
      "Shadcn",
    ],
  },
  {
    _id: "tools",
    category: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Nginx", "AWS EC2", "Postman", "VS Code"],
  },
  {
    _id: "databases",
    category: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    _id: "ai",
    category: "AI",
    skills: ["Gemini API", "RAG", "prompt engineering", "AI-assisted development"],
  },
  {
    _id: "cs",
    category: "CS Fundamentals",
    skills: ["DSA", "OOP", "DBMS", "Operating Systems", "Computer Networks", "SDLC"],
  },
];

export type DevProject = {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
};

export const devProjects: DevProject[] = [
  {
    id: "innoverse",
    title: "innoverse",
    description:
      "Full-stack collaboration platform connecting startups and students through real-world problem statements, proposal submissions, and project tracking. Role-based auth, GitHub integration, and real-time notifications.",
    link: "https://buildwithinnoverse.vercel.app/",
    imageUrl: "/innoverse.png",
  },
  {
    id: "formflow",
    title: "formflow",
    description:
      "No-code form builder with drag-and-drop components, live previews, real-time collaborative editing, conditional logic, version history, and response management with data export.",
    link: "https://formflow-build.vercel.app/",
    imageUrl: "/formflow.png",
  },
  {
    id: "infrachat",
    title: "infrachat",
    description:
      "Realtime team messaging platform with authority baked in — every privileged action runs as a slash command (/kick, /mute, /ban), permission-checked server-side and sealed into an append-only audit trail. Next.js monorepo with Pusher realtime, Postgres + Prisma, and Auth.js.",
    link: "https://infra-chat-build.vercel.app/",
    imageUrl: "/infrachat.png",
  },
  {
    id: "thesubconscious",
    title: "thesubconscious",
    description:
      "AI-powered personal knowledge management platform with hierarchical notes, offline editing, and background sync. Gemini + vector search for semantic retrieval and context-aware AI responses.",
    link: "https://thesubconscious.vercel.app/",
    imageUrl: "/thesubconscious.png",
  },
];

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  link: string;
  imageUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "startup-insights",
    title: "Insights Into Building a Successful Startup",
    description: "Read on Medium",
    link: "https://medium.com/@arjunrhetoric/insights-into-building-a-successful-startup-e4a42ffd923d",
    imageUrl: "/blog-startup-insights.webp",
  },
  {
    id: "startup-student",
    title: "Navigating the Startup World as a Student",
    description: "Read on Medium",
    link: "https://medium.com/@arjunrhetoric/navigating-the-startup-world-as-a-student-dc6f999c910b",
    imageUrl: "/blog-startup-student.webp",
  },
  {
    id: "no-code-revolution",
    title: "The No-Code Revolution: Building Apps Without Writing a Single Line",
    description: "Read on Medium",
    link: "https://medium.com/@arjunrhetoric/the-no-code-revolution-building-apps-without-writing-a-single-line-a8f0f3324a8e",
    imageUrl: "/blog-no-code.webp",
  },
];

export type Highlight = {
  _id: string;
  title: string;
  mediaType: "image" | "video";
  image?: string;
  link?: string;
};

export const highlights: Highlight[] = [
  {
    _id: "innoverse",
    title: "innoverse",
    mediaType: "image",
    image: "/innoverse.png",
    link: "https://buildwithinnoverse.vercel.app/",
  },
  {
    _id: "formflow",
    title: "formflow",
    mediaType: "image",
    image: "/formflow.png",
    link: "https://formflow-build.vercel.app/",
  },
  {
    _id: "infrachat",
    title: "infrachat",
    mediaType: "image",
    image: "/infrachat.png",
    link: "https://infra-chat-build.vercel.app/",
  },
  {
    _id: "thesubconscious",
    title: "thesubconscious",
    mediaType: "image",
    image: "/thesubconscious.png",
    link: "https://thesubconscious.vercel.app/",
  },
];

export const aboutParagraphs: string[] = [
  "hey, i'm arjun. i build things for the web and then act genuinely surprised when they don't immediately catch fire. my laptop and i have a long-term arrangement: i write the code, it finds the bugs, and we both pretend this was the plan all along. it's a healthy relationship. mostly.",
  "by day, i'm a computer engineering student with a 9.41 gpa that i will casually drop into conversation the same way some people mention their gym pr. by night, i'm still a computer engineering student, because the bugs don't fix themselves and stack overflow can only carry so much emotional weight.",
  "i've interned, won hackathons, and somehow become a google student ambassador — which is a very official way of saying i get paid (in swag and dopamine) to yap about ai. my projects have ambitious dreams and even more ambitious node_modules folders. some of them even work in production. occasionally.",
  "when the code finally compiles (or more often, when it doesn't), you'll find me on a football pitch trying to outrun my own decision-making. i'm a proud jack of all trades — coding, writing, running, arguing about politics, and occasionally pretending i have a sleep schedule. my political compass points firmly right of center, which makes family whatsapp groups, college group chats, and linkedin comment sections significantly more entertaining than they have any right to be. i also write on medium about startups with the quiet confidence of someone who has definitely not figured it out yet. stick around. it only gets sillier (and more opinionated) from here.",
  "Still recommended by 4 out of 5 people who recommend humorous creatures. The fifth one is probably just a progressive."
];

export const siteMetadata = {
  siteTitle: "Arjun Singh | Product @ Innoverse",
  siteDescription:
    "Arjun Singh — full-stack developer building web apps, RAG integrations, and SaaS. Computer Engineering @ TCET, Mumbai.",
  siteUrl: "https://github.com/arjunrhetoric",
  keywords: ["Arjun Singh", "full-stack developer", "Next.js", "RAG", "SaaS", "portfolio"],
  twitterHandle: "arjunrhetoric",
};

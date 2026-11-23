export const profile = {
  name: "Tejas Nikam",
  role: "AI/ML Engineer",
  taglineWords: [
    "AI/ML Engineer",
    "RAG & LLM Builder",
    "Deep Learning Developer",
    "IEEE Published Author",
  ],
  location: "Navi Mumbai, Maharashtra, India",
  phone: "+91 87795 54926",
  email: "tejasnikam486@gmail.com",
  github: "https://github.com/Tejasnikam-45",
  linkedin: "https://www.linkedin.com/in/tejas-nikam45",
  resumeUrl: "/Tejas_Nikam_Resume.pdf",
  objective:
    "B.E. Information Technology graduate with hands-on experience building LLM/RAG applications and deep learning models in Python — including a RAG pipeline with automated evaluation, an IEEE-published AI coding assistant, and CNN-based image classifiers. Seeking an AI/ML Engineer role to build and ship well-evaluated AI systems.",
};

export const stats = [
  { label: "Deepfake Detection Accuracy", value: 92, suffix: "%" },
  { label: "LLM-as-Judge Factual Accuracy", value: 4.2, decimals: 1, suffix: "/5" },
  { label: "Hackathon Finish (200+ teams)", value: 40, prefix: "Top " },
  { display: "IEEE", label: "Published Research — I3CET 2026" },
];

export const skillGroups = [
  {
    title: "Languages & Web",
    skills: ["Python", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    title: "ML / Deep Learning",
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "Transfer Learning"],
  },
  {
    title: "GenAI / LLMs",
    skills: ["RAG", "ChromaDB", "Embeddings", "LLM Evaluation", "Ollama", "Prompt Engineering"],
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "SQL Server"],
  },
  {
    title: "Data / Analytics",
    skills: ["NumPy", "Pandas", "Power BI"],
  },
  {
    title: "Backend / DevOps",
    skills: ["FastAPI", "Node.js / Express", "REST APIs", "React.js", "Git / GitHub", "Docker"],
  },
];

export const projects = [
  {
    title: "Multi-Source RAG System",
    period: "Jun 2026 – Present",
    description:
      "End-to-end RAG pipeline over arXiv PDFs, Wikipedia articles and SQuAD CSVs using BAAI/bge-small-en-v1.5 embeddings, ChromaDB and SentenceSplitter chunking (512 tokens, 50 overlap, top-k=5). Llama/Qwen answers via Groq carry source citations (file, page, URL) to reduce hallucinations.",
    highlights: [
      "Built an LLM-as-a-Judge evaluation framework on SQuAD — 4.2/5 avg factual accuracy",
      "~0.8–1.2s end-to-end latency across test queries",
      "Async FastAPI endpoints + React/Vite UI for live querying with inline citations",
    ],
    tags: ["Python", "FastAPI", "LlamaIndex", "ChromaDB", "Groq API", "React.js"],
    github: "https://github.com/Tejasnikam-45/MultiSourceRag",
    demo: "https://multi-source-rag-one.vercel.app",
    image: "/images/projects/multisourcerag-live.png",
    featured: true,
    category: "GenAI / RAG",
  },
  {
    title: "CLICKK — AI Coding Assistant",
    period: "Aug 2025 – May 2026",
    description:
      "AI-powered coding assistant for code generation, debugging and multi-file project analysis using LLaMA, with project-level code analysis for context-aware refactoring and debugging suggestions.",
    highlights: [
      "Published on IEEE Xplore at conference I3CET 2026",
      "REST APIs integrating the LLM into application workflows",
      "Codebase-context ingestion for multi-file analysis",
    ],
    tags: ["React.js", "Node.js", "Express.js", "Ollama", "LLaMA"],
    github: "https://github.com/YASHSALI2005/CLICKK",
    image: "/images/projects/clickk-hero.png",
    badge: "IEEE Published",
    featured: true,
    category: "GenAI / LLMs",
  },
  {
    title: "Deepfake Detection Model",
    period: "Jan 2025 – May 2025",
    description:
      "End-to-end AI/ML classification pipeline using EfficientNet transfer learning to detect AI-generated deepfake media, with augmentation and class balancing to generalize across compression artefacts.",
    highlights: [
      "92% accuracy detecting AI-generated deepfake media",
      "Data augmentation & class balancing for generalization",
      "Optimized across diverse media and compression artefacts",
    ],
    tags: ["Python", "EfficientNet", "Transfer Learning", "OpenCV"],
    github: "https://github.com/Tejasnikam-45/Deep-Fake-Detection-Model",
    image: "/images/projects/deepfake-hero.png",
    featured: true,
    category: "Computer Vision",
  },
  {
    title: "Chest X-Ray Multi-Label Disease Classification",
    period: "2025",
    description:
      "Deep learning pipeline for multi-label classification of chest X-ray images to flag multiple co-occurring thoracic diseases from a single scan.",
    highlights: [
      "Multi-label CNN classification on medical imaging data",
      "Preprocessing & augmentation tuned for radiographic images",
    ],
    tags: ["Python", "Deep Learning", "CNN", "Medical Imaging"],
    github:
      "https://github.com/Tejasnikam-45/Chest-X-Ray-Multi-Label-Disease-Classification-using-Deep-Learning",
    image: "/images/projects/chestxray-hero.png",
    category: "Computer Vision",
  },
  {
    title: "NeuralWatch — Fraud Detection",
    period: "2026",
    description:
      "AI-based financial fraud detection solution built during Hack The Core 2026, shortlisted among the Top 40 teams out of 200+ entries.",
    highlights: ["Top 40 / 200+ teams at Hack The Core 2026", "Real-time transaction anomaly flagging"],
    tags: ["Python", "Machine Learning", "Fraud Detection"],
    github: "https://github.com/Tejasnikam-45/NeuralWatch",
    image: "/images/projects/neuralwatch-hero.png",
    badge: "Hackathon",
    category: "Applied ML",
  },
];

export const experience = [
  {
    role: "ML Engineer Intern",
    org: "End Point IT Services Pvt Ltd (Enpointe), Mumbai",
    period: "Nov 2026 – Present",
    points: [
      "Assist in designing, training and evaluating ML/deep learning models — from data preprocessing and feature engineering to deployment via REST APIs (Flask/FastAPI).",
      "Work across supervised/unsupervised learning, neural networks (ANN/CNN/RNN) and Generative AI/LLM-based solutions as part of an Agile team.",
      "Collaborate with data scientists and engineers on code reviews, documentation and end-to-end ML pipelines.",
    ],
  },
  {
    role: "Intern — Data Science",
    org: "Qspiders, Vashi, Navi Mumbai",
    period: "Feb 2026 – Oct 2026",
    points: [
      "Worked with Python, SQL, data analysis and machine learning through hands-on projects and technical case studies.",
      "Applied Python/SQL for data extraction, manipulation and analysis, strengthening analytical and problem-solving skills.",
    ],
  },
  {
    role: "IBM SkillsBuild Summer Internship — Data Analytics",
    org: "IBM (6 weeks)",
    period: "Jun 2024 – Aug 2024",
    points: ["Worked on data cleaning, visualization and exploratory data analysis using Python and Power BI."],
  },
];

export const education = [
  {
    degree: "B.E. in Information Technology",
    school: "A.C. Patil College of Engineering, Mumbai University",
    period: "2022 – 2026",
    detail: "CGPA: 8.08",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Ket's V. G. Vaze College of Arts, Science & Commerce, Mulund",
    period: "2021 – 2022",
    detail: "70.50%",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Shreeram Vidyalaya, Airoli, Navi Mumbai",
    period: "2019 – 2020",
    detail: "90.60%",
  },
];

export const certifications = [
  { name: "Joy of Computing Using Python", issuer: "NPTEL" },
  { name: "Python for Data Science", issuer: "NPTEL" },
  { name: "Power BI", issuer: "Qspiders" },
  { name: "Cloud Computing Fundamentals", issuer: "Simplilearn" },
  { name: "Advanced Databases and SQL Querying", issuer: "Udemy" },
];

export const achievements = [
  {
    title: "IEEE Research Publication",
    detail:
      "Presented and published CLICKK – AI Coding Assistant research on IEEE Xplore at the I3CET 2026 conference, independently handling presentation and publication.",
  },
  {
    title: "CSI IT Council — Secretary",
    detail: "Contributed to technical activities and student coordination.",
  },
  {
    title: "Hack The Core 2026 — Top 40 / 200+",
    detail: "Shortlisted among the Top 40 teams out of 200+ with NeuralWatch, an AI-based financial fraud detection solution.",
  },
];

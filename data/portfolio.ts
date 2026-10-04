// ============================================================================
// PORTFOLIO CONTENT — edit this file to update the site.
// Everything shown on the site (profile, experience, projects, tools, contact)
// comes from here. Save, commit, and push to `main` to redeploy.
// ============================================================================

// Prefixes /public asset paths with the GitHub Pages base path
const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;

export const profile = {
  name: "Ananya Kura",
  role: "Data Scientist & AI Engineer",
  // Rotating taglines shown under your name in the sidebar
  taglines: ["Data Scientist", "AI Engineer", "ML Engineer"],
  avatar: asset("/Hexagon.png"),
  location: "Houston, TX",
  email: "akura403@gmail.com",
  // Put a PDF in /public (e.g. /public/resume.pdf) and set this to "/resume.pdf"
  resumeUrl: "",
  summary:
    "Data Scientist leveraging real-world data and AI to help teams work faster and make efficient decisions. I clean and organize data from multiple sources and build pipelines and models end to end.",
  about: [
    "I'm a Data Scientist with an M.S. in Data Science from the University of Houston (GPA 3.87). I enjoy taking messy, real-world data and turning it into pipelines, models, and dashboards that people actually use.",
    "Lately I've been building agentic and GenAI systems — LangGraph state machines, MCP tool servers, RAG and GraphRAG — with a strong focus on validated, auditable output. Before that I built Graph-RAG retrieval over medical literature at Myraa Technologies and deployed a multimodal oral-cancer screening model at MIT GrandHack.",
    "I like collaborating cross-functionally and explaining findings in simple language. I'm seeking full-time roles and open to relocation.",
  ],
  interests: ["Agentic AI", "GenAI", "Machine Learning", "Data Engineering", "Healthcare AI"],
  techStack: ["Python", "SQL", "PyTorch", "LangGraph", "LangChain", "FastAPI", "Docker", "GCP", "AWS", "Neo4j", "Next.js"],
};

export const socials = [
  { label: "GitHub", href: "https://github.com/ananyamk1", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ananya-kura", icon: "linkedin" },
  { label: "Email", href: "mailto:akura403@gmail.com", icon: "mail" },
] as const;

// ---------------------------------------------------------------------------
// EXPERIENCE — newest first. `color` is one of: blue, purple, green, amber, rose, emerald
// ---------------------------------------------------------------------------
export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  color: "blue" | "purple" | "green" | "amber" | "rose" | "emerald";
  bullets: string[];
  tech: string[];
};

export const experience: Experience[] = [
  {
    role: "Data Analyst",
    company: "Main Street Ministries",
    period: "08/2026 – Present",
    location: "Houston, TX",
    color: "blue",
    bullets: [
      "Maintain quarterly reports for a nonprofit serving individuals rebuilding stability after homelessness, consolidating financials, volunteer hours, and outcome metrics into validated reporting dashboards.",
      "Design the charts, tables, and program summaries used in the public annual impact report and board presentations, reconciling finances with program leads before distribution.",
    ],
    tech: ["Excel", "Tableau", "Power BI", "SQL"],
  },
  {
    role: "ML Engineer (KonPop Detection)",
    company: "MIT GrandHack '25",
    period: "04/2025 – 10/2025",
    location: "Boston, MA",
    color: "purple",
    bullets: [
      "Deployed a multimodal vision-text model on Google Vertex AI (HAI-DEF foundation models) that flags early oral-cancer indicators from mobile images, validated against clinical judgment with 10+ physicians.",
      "Shipped the serving layer as a FastAPI service on Google Cloud Run with Docker, Git-based CI/CD, and role-based Firebase auth — 99.8% uptime and 35% lower inference latency.",
    ],
    tech: ["Vertex AI", "PyTorch", "TensorFlow", "FastAPI", "Docker", "Cloud Run", "Firebase"],
  },
  {
    role: "AI/Data Scientist",
    company: "Myraa Technologies",
    period: "05/2023 – 05/2024",
    location: "Mumbai, India",
    color: "green",
    bullets: [
      "Engineered a Graph-RAG retrieval system over ~500 nephrology papers with TF-IDF and K-Means clustering into 12 disease domains, improving retrieval efficiency by ~70%.",
      "Modeled the corpus into a Neo4j knowledge graph (2,050 nodes / 7,193 relationships) and fine-tuned GPT-3 on Cypher templates for natural-language querying.",
      "Exposed ingestion, clustering, and query orchestration as Flask REST APIs and co-authored the Nephroblocks whitepaper.",
    ],
    tech: ["Python", "Neo4j", "GPT-3", "Flask", "scikit-learn", "BeautifulSoup"],
  },
];

export const education = [
  {
    school: "University of Houston",
    degree: "M.S. Data Science",
    period: "May 2026",
    detail: "GPA 3.87/4.0 · Machine Learning, Deep Learning, NLP, AI Engineering, Cloud Computing",
  },
];

export const achievements = [
  { title: "MIT GrandHack '25", value: "Google Challenge", sub: "Award winner" },
  { title: "Certifications", value: "3", sub: "AWS Cloud Practitioner · DataCamp AI Engineer · CodePath AI Eng (Honors)" },
];

// ---------------------------------------------------------------------------
// PROJECTS — `slug` becomes the URL: /projects/<slug>
// `image` is optional: drop a screenshot in /public and set e.g. "/energy-radar.png"
// ---------------------------------------------------------------------------
export type Project = {
  slug: string;
  title: string;
  description: string;
  details: string[];
  tags: string[];
  image?: string;
  status: "active" | "archived";
  liveUrl?: string;
  githubUrl?: string;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "energy-radar",
    title: "Energy Radar",
    description: "ERCOT interconnection intelligence — an LLM pipeline that scores 1,800+ large-generation projects and serves them to a live dashboard.",
    details: [
      "Ingests the latest ERCOT Generator Interconnection Status report, parses 1,800+ project rows from Excel, geocodes them, and calls GPT-4o to derive development stage, opportunity score, and momentum.",
      "Enforces reliable model output with Zod schema validation plus an automatic error-feedback retry loop back to GPT-4o.",
      "Serves validated records through Supabase to a React/TypeScript dashboard on Vercel.",
    ],
    tags: ["TypeScript", "Next.js", "GPT-4o", "Zod", "Supabase"],
    status: "active",
    githubUrl: "https://github.com/ananyamk1",
    year: "2026",
  },
  {
    slug: "genai-drilling-reports",
    title: "GenAI Drilling Report Pipeline",
    description: "LangChain pipeline that extracts 28 structured parameters from daily oil & gas drilling PDFs and answers source-cited questions.",
    details: [
      "Ingests daily drilling PDFs and extracts 28 operational parameters (ROP, WOB, mud weight, CO₂) into SQLite with Pydantic validation on every extraction.",
      "Semantic chunking with local HuggingFace embeddings (all-MiniLM-L6-v2) in ChromaDB.",
      "Replaces manual report review with source-cited cross-report queries like “what formation was drilled when ROP dropped below 5 ft/hr?”",
    ],
    tags: ["Python", "LangChain", "Pydantic", "ChromaDB", "HuggingFace"],
    status: "active",
    githubUrl: "https://github.com/ananyamk1",
    year: "2026",
  },
  {
    slug: "raredx",
    title: "RareDx",
    description: "Multi-agent diagnostic system built as an auditable LangGraph state machine — 92.5% top-1 accuracy on a 40-case clinical benchmark.",
    details: [
      "4-layer agentic system as an explicit LangGraph state machine (normalize → graph retrieval → vector retrieval → fusion → validation → report) so every evidence step is inspectable.",
      "MCP tool servers expose PubMed, FHIR, and ICD-10 lookups; inference routed through Llama 3.1 on Groq.",
      "Validated with unittest against a 40-case clinical benchmark: 92.5% top-1 accuracy with zero hallucinated diagnoses.",
    ],
    tags: ["Python", "LangGraph", "MCP", "Neo4j", "ChromaDB", "Llama 3.1"],
    status: "active",
    githubUrl: "https://github.com/ananyamk1",
    year: "2026",
  },
];

// ---------------------------------------------------------------------------
// TOOLS — icons live in /public
// ---------------------------------------------------------------------------
export const tools = [
  { name: "VS Code", category: "Editor", icon: asset("/vscode.webp"), href: "https://code.visualstudio.com" },
  { name: "PyCharm", category: "Editor", icon: asset("/pycharm.webp"), href: "https://www.jetbrains.com/pycharm/" },
  { name: "Cursor", category: "AI Editor", icon: asset("/cursor.webp"), href: "https://cursor.com" },
  { name: "Windsurf", category: "AI Editor", icon: asset("/windsurf.webp"), href: "https://windsurf.com" },
  { name: "Claude", category: "AI Assistant", icon: asset("/claude.webp"), href: "https://claude.ai" },
  { name: "ChatGPT", category: "AI Assistant", icon: asset("/chatgpt.webp"), href: "https://chatgpt.com" },
  { name: "Gemini", category: "AI Assistant", icon: asset("/gemini.webp"), href: "https://gemini.google.com" },
  { name: "Perplexity", category: "Research", icon: asset("/perplexity.webp"), href: "https://perplexity.ai" },
  { name: "Hugging Face", category: "ML Models", icon: asset("/huggingface.webp"), href: "https://huggingface.co" },
  { name: "Lovable", category: "Prototyping", icon: asset("/lovable.webp"), href: "https://lovable.dev" },
  { name: "Notion", category: "Notes", icon: asset("/notion.webp"), href: "https://notion.so" },
  { name: "Slack", category: "Communication", icon: asset("/slack.webp"), href: "https://slack.com" },
  { name: "Medium", category: "Writing", icon: asset("/medium.webp"), href: "https://medium.com" },
];

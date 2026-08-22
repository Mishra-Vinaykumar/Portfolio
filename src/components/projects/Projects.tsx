type Project = {
  name: string;
  badge?: string;
  href?: string;
  tech: string[];
  period: string;
  bullets: string[];
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    name: "CRM Platform — Current Team Project",
    badge: "In Progress",
    featured: true,
    tech: ["MongoDB", "Express", "React", "Node.js"],
    period: "2026 — ongoing",
    bullets: [
      "A full-stack Customer Relationship Management platform built with the MERN stack (MongoDB, Express, React, Node.js).",
      "Built to manage customers, leads, and sales pipelines in one place instead of scattered spreadsheets and manual tracking.",
      "Why: give sales and support teams a single source of truth for every customer interaction.",
      "Working as a full-stack developer within a collaborative team, contributing across the React frontend and Node/Express API.",
      "When: currently in active development (2026) — my main ongoing project right now.",
    ],
  },
  {
    name: "Resume Analyser — Backend API",
    href: "https://github.com/Mishra-Vinaykumar/resume-analyser-backend",
    tech: ["Node.js", "Express", "OpenAI"],
    period: "Feb – Apr 2026",
    bullets: [
      "An AI-powered resume-to-job matching REST API built with Node.js, Express, and OpenAI.",
      "Why: automate the slow, manual work of screening a resume against a job description.",
      "Detects eligibility blockers (hard requirements a candidate doesn't meet) before scoring.",
      "Returns structured JSON outputs with match scores for reliable programmatic use.",
      "When: built in Feb 2026 and actively improved through Apr 2026.",
    ],
  },
  {
    name: "Resume Analyser — Chrome Extension",
    href: "https://github.com/Mishra-Vinaykumar/resume-analyiser-ch-extension",
    tech: ["JavaScript", "Chrome Extension", "REST API"],
    period: "Feb 2026",
    bullets: [
      "A Chrome extension frontend that pairs with the Resume Analyser backend API.",
      "Compares your resume against any job description directly in the browser.",
      "Why: see your match score without leaving the job posting page.",
      "Generates a match score, gap analysis, and concrete recommendations to improve fit.",
      "When: built in Feb 2026 as the companion client for the backend service.",
    ],
  },
  {
    name: "YouTube-style Video CRUD API",
    href: "https://github.com/Mishra-Vinaykumar/Youtube-crud-API",
    tech: ["Node.js", "JavaScript", "REST"],
    period: "Jan 2026",
    bullets: [
      "A REST API where users can upload videos and posts, with full CRUD support.",
      "Why: practice production-style REST design — resources, routes, and status codes.",
      "Covers create, read, update, and delete flows for both videos and posts.",
      "Handles file/video upload alongside standard JSON endpoints.",
      "When: built in Jan 2026 as a backend fundamentals project.",
    ],
  },
  {
    name: "Wishes — Birthday Greeting App",
    href: "https://github.com/Mishra-Vinaykumar/wishes",
    tech: ["HTML", "CSS", "JavaScript"],
    period: "Jul 2026",
    bullets: [
      "A personalized birthday-greeting web app for creating special birthday wishes.",
      "Why: make birthday wishes feel personal and shareable instead of a plain text message.",
      "Delivers an animated greeting experience built with hand-crafted CSS.",
      "Planned updates: photo uploads, custom messages, and wishes for anyone.",
      "When: built in Jul 2026 as a fun, front-end-focused side project.",
    ],
  },
  {
    name: "This Portfolio",
    href: "https://github.com/Mishra-Vinaykumar/Portfolio",
    tech: ["Next.js", "TypeScript", "Three.js", "GSAP"],
    period: "Aug 2026 — ongoing",
    bullets: [
      "The site you're looking at — built with Next.js 16, TypeScript, and Tailwind CSS.",
      "Why: showcase my work with a premium, playful presentation instead of a static page.",
      "Features a scroll-driven 3D mascot animation using Three.js and React Three Fiber.",
      "GSAP powers the hero entrance animation and scroll-linked motion.",
      "When: started Aug 2026 and continuously evolving alongside my projects.",
    ],
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={`rounded-xl border border-foreground/10 p-6 ${
        project.featured ? "border-accent/40 sm:col-span-2 md:col-span-3" : ""
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="text-lg font-medium text-foreground">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              {project.name}
            </a>
          ) : (
            project.name
          )}
        </h3>
        {project.badge && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            {project.badge}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs uppercase tracking-wide text-foreground/50">
        {project.period}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-foreground/70">
        {project.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="w-full bg-background px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Projects
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
        <a
          href="https://github.com/Mishra-Vinaykumar"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block text-sm font-medium text-accent hover:opacity-80 transition-opacity"
        >
          See all repositories on GitHub →
        </a>
      </div>
    </section>
  );
}

import Link from "next/link";

interface ProjectSummary {
  slug: string;
  name: string;
  pitch: string;
  highlights: string[];
  stack: string[];
  github: string;
  demo?: string;
}

const PROJECTS: ProjectSummary[] = [
  {
    slug: "hoteliq",
    name: "HotelIQ",
    pitch:
      "A full-stack hotel revenue management platform: a real ETL pipeline, pre-aggregated analytics, and an XGBoost model built to challenge an existing Prophet forecaster — evaluated head-to-head with a leakage-free backtest, not just shipped and assumed correct.",
    highlights: [
      "35 REST endpoints, 3-layer ETL → analytics → AI pipeline, 40K+ synthetic bookings",
      "XGBoost challenger cut forecast error (MAE) ~30% vs. the Prophet baseline",
      "Bootstrapped revenue backtest replaying real bookings through the pricing engine",
    ],
    stack: ["FastAPI", "Next.js", "SQLAlchemy", "Pandas", "Prophet", "XGBoost", "Docker"],
    github: "https://github.com/karan00190/HotelIQ_Revenue_Management_Platform",
    demo: "https://hotel-iq-revenue-management-platfor.vercel.app/",
  },
  {
    slug: "api-gateway",
    name: "Rate-Limited Distributed API Gateway",
    pitch:
      "A distributed rate limiter implementing four algorithms as atomic Redis Lua scripts, horizontally scaled across multiple gateway instances — including a real TOCTOU race condition I found under load and fixed.",
    highlights: [
      "4 algorithms (token bucket, sliding window log/counter, leaky bucket) as atomic Lua scripts",
      "Found and fixed a TOCTOU race: over-admission dropped from 4x the limit to exactly the limit",
      "Real-time observability dashboard in zero-dependency vanilla JavaScript",
    ],
    stack: ["Python", "FastAPI", "Redis", "Lua", "Docker Compose", "Pytest", "Locust"],
    github: "https://github.com/karan00190/rate-limiter-gateway.git",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">03 &middot; Projects</p>
      <h2 className="mb-10 text-2xl font-semibold text-ink">Things I&rsquo;ve built</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <article
            key={project.slug}
            className="flex flex-col rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow)] transition-colors hover:border-accent/60 md:p-7"
          >
            <h3 className="mb-2 text-lg font-semibold text-ink">{project.name}</h3>
            <p className="mb-4 text-[14.5px] leading-relaxed text-ink-muted">{project.pitch}</p>
            <ul className="mb-5 space-y-2">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-[13.5px] leading-snug text-ink-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mb-6 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-ink-faint"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-border pt-5 font-mono text-[13px]">
              <Link href={`/projects/${project.slug}`} className="text-accent hover:underline">
                Read the case study &rarr;
              </Link>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-ink"
              >
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-muted hover:text-ink"
                >
                  Live demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

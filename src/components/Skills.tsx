const GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: ["Java", "Python", "TypeScript", "SQL"] },
  {
    label: "Frameworks & Libraries",
    items: ["Django", "FastAPI", "React", "Next.js", "SQLAlchemy", "Pandas", "XGBoost", "OpenCV", "spaCy"],
  },
  { label: "Databases", items: ["PostgreSQL", "SQLite", "Redis"] },
  { label: "Tools", items: ["Docker", "Git", "GitHub Actions", "Alembic", "Pytest", "Locust"] },
  {
    label: "Concepts",
    items: ["REST APIs", "Microservices", "System Design", "CI/CD", "OOP", "Computer Networks", "Cyber Security"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">04 &middot; Skills</p>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-2xl font-semibold text-ink">Technical skills</h2>
        <div className="space-y-5">
          {GROUPS.map((group) => (
            <div key={group.label} className="flex flex-col gap-2.5 sm:flex-row sm:gap-6">
              <span className="w-40 shrink-0 font-mono text-[12.5px] text-ink-faint">{group.label}</span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-border px-2.5 py-1 text-[13px] text-ink-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

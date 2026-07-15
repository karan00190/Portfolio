const SCHOOLS = [
  {
    school: "SIES College of Management Studies, Navi Mumbai",
    degree: "Master of Computer Application (MCA)",
    period: "Sept 2024 – Jul 2026",
    note: "Currently pursuing",
  },
  {
    school: "Vivekanand Education Society, Mumbai",
    degree: "BS in Computer Science",
    period: "Sept 2020 – May 2023",
    note: "CGPA 8.96 / 10.0",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">05 &middot; Education</p>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-2xl font-semibold text-ink">Education</h2>
        <div className="space-y-6">
          {SCHOOLS.map((s) => (
            <div key={s.school} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-border pb-5 last:border-0 last:pb-0">
              <div>
                <p className="text-[15px] font-medium text-ink">{s.school}</p>
                <p className="text-[13.5px] text-ink-muted">{s.degree}</p>
                <p className="font-mono text-[12px] text-ink-faint">{s.note}</p>
              </div>
              <span className="font-mono text-[12.5px] text-ink-faint">{s.period}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

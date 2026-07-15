export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">01 &middot; About</p>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <h2 className="text-2xl font-semibold text-ink">A little about how I work</h2>
        <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-ink-muted">
          <p>
            I&rsquo;m a Master of Computer Application student at SIES College of Management Studies,
            with a Computer Science degree from Vivekanand Education Society (CGPA 8.96/10)
            behind me. My background leans backend and systems-level — REST APIs, data
            pipelines, distributed systems, and the security engineering behind them.
          </p>
          <p>
            Most of what I know, I&rsquo;ve learned by building complete systems end to end rather
            than isolated exercises: a distributed rate limiter with real concurrency bugs to
            find and fix, a revenue management platform with a genuine ETL pipeline and two
            forecasting models evaluated against each other, and a full IDS evaluation platform
            during my internship at BARC. I care about correctness and being able to explain
            <em> why</em> a system behaves the way it does — not just that it runs.
          </p>
        </div>
      </div>
    </section>
  );
}

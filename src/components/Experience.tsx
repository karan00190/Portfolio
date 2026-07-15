const HIGHLIGHTS = [
  "Built MIAT, a full-stack C2 platform pairing a central Django/ASGI server with endpoint agents to simulate real-world attacker techniques and evaluate IDS threat detection across a controlled lab network.",
  "Delivered 40+ REST APIs across 9 data models with live dashboards and on-demand PDF/CSV reporting, secured end-to-end via a triple-layer mTLS + JWT + HMAC-SHA256 model that eliminates replay and impersonation attacks.",
  "Engineered an async Python agent with a modular plugin architecture (single-file module integration) simulating 4 attack classes — Nmap scanning, DGA, C2 beaconing, and multi-channel exfiltration (DNS, HTTP, ICMP, SQLi) — with real-time risk scoring.",
  "Streamed real-time attack telemetry over WebSockets at sub-second latency, and validated reliability with a 130-check regression suite (100% pass).",
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 md:py-20">
      <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">02 &middot; Experience</p>
      <div className="grid gap-8 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <h2 className="text-2xl font-semibold text-ink">Where I&rsquo;ve worked</h2>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6 shadow-[var(--shadow)] md:p-8">
          <div className="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold text-ink">Cyber Security Intern</h3>
            <span className="font-mono text-[12.5px] text-ink-faint">Mar 2026 &ndash; Jun 2026</span>
          </div>
          <p className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[13px]">
            <span className="text-accent">Bhabha Atomic Research Centre (BARC), Mumbai</span>
            <a
              href="https://drive.google.com/file/d/1avx0tMZgyNy73ZdH6nUoMjP9ionnPZbi/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted underline decoration-dotted underline-offset-4 transition-colors hover:text-accent"
            >
              Certificate &rarr;
            </a>
          </p>
          <ul className="space-y-3">
            {HIGHLIGHTS.map((point) => (
              <li key={point} className="flex gap-3 text-[14.5px] leading-relaxed text-ink-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

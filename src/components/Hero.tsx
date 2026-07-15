import Image from "next/image";

const LINKS = [
  { label: "GitHub", href: "https://github.com/karan00190" },
  { label: "LinkedIn", href: "https://linkedin.com/in/karan-katte-4a19261b9" },
  { label: "Email", href: "mailto:karankatte1091@gmail.com" },
  { label: "Resume", href: "https://drive.google.com/file/d/1bU7nuHE3xICplVCeAUoC0G8t7cZKzY-m/view?usp=drive_link" },
];

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-5xl flex-col-reverse items-start gap-10 px-6 pb-20 pt-16 md:flex-row md:items-center md:pb-28 md:pt-24">
      <div className="flex-1">
        <p className="mb-5 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">
          Backend Engineer &middot; Mumbai, India
        </p>
        <h1 className="mb-6 max-w-xl text-4xl font-semibold leading-[1.15] text-balance text-ink md:text-5xl">
          I build backend systems that hold up under real conditions.
        </h1>
        <p className="mb-9 max-w-lg text-[15.5px] leading-relaxed text-ink-muted">
          Cyber Security Intern at BARC. Recently shipped a distributed rate-limiting API
          gateway with atomic Redis Lua scripts, and HotelIQ — a full-stack revenue platform
          with an ETL pipeline and a rigorously-evaluated ML forecasting system.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-md border border-border px-4 py-2 font-mono text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="shrink-0">
        <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[var(--shadow)]">
          <Image
            src="/profile-photo.png"
            alt="Karan Katte"
            width={828}
            height={1345}
            className="h-auto w-44 md:w-64"
            priority
          />
        </div>
      </div>
    </section>
  );
}

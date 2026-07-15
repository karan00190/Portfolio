import Link from "next/link";

interface CaseStudyHeaderProps {
  eyebrow: string;
  title: string;
  pitch: string;
  stack: string[];
  github: string;
  demo?: string;
}

export function CaseStudyHeader({ eyebrow, title, pitch, stack, github, demo }: CaseStudyHeaderProps) {
  return (
    <header className="mx-auto w-full max-w-3xl px-6 pb-14 pt-14 md:pt-20">
      <Link href="/#projects" className="mb-8 inline-flex items-center gap-1.5 font-mono text-[13px] text-ink-muted hover:text-accent">
        &larr; Back to projects
      </Link>
      <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">{eyebrow}</p>
      <h1 className="mb-5 text-3xl font-semibold leading-tight text-ink md:text-4xl">{title}</h1>
      <p className="mb-7 max-w-xl text-[16px] leading-relaxed text-ink-muted">{pitch}</p>
      <div className="mb-7 flex flex-wrap gap-1.5">
        {stack.map((t) => (
          <span key={t} className="rounded border border-border px-2.5 py-1 font-mono text-[11.5px] text-ink-faint">
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap items-center gap-3 font-mono text-[13px]">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-border px-4 py-2 text-ink transition-colors hover:border-accent hover:text-accent"
        >
          View on GitHub
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-4 py-2 text-accent-ink transition-opacity hover:opacity-90"
          >
            Live demo
          </a>
        )}
      </div>
    </header>
  );
}

export function CaseStudySection({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-3xl scroll-mt-20 px-6 py-8">
      <h2 className="mb-4 text-xl font-semibold text-ink">{title}</h2>
      <div className="space-y-4 text-[15px] leading-relaxed text-ink-muted [&_strong]:text-ink [&_code]:rounded [&_code]:bg-surface [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-[0.87em] [&_code]:text-accent [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function CaseStudyCallout({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-border border-l-2 border-l-accent bg-surface p-5">
      <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.1em] text-accent">{label}</p>
      <div className="text-[14.5px] leading-relaxed text-ink-muted [&_strong]:text-ink">{children}</div>
    </div>
  );
}

export function MetricRow({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="my-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-border bg-surface p-4">
          <p className="font-mono text-xl font-semibold text-accent font-mono-tabular">{item.value}</p>
          <p className="mt-1 text-[12px] text-ink-muted">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

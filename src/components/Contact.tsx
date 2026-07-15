export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl scroll-mt-20 px-6 py-16 md:py-24">
      <div className="rounded-lg border border-border bg-surface px-8 py-14 text-center shadow-[var(--shadow)] md:py-20">
        <p className="mb-3 font-mono text-[12.5px] uppercase tracking-[0.14em] text-accent">06 &middot; Contact</p>
        <h2 className="mb-4 text-2xl font-semibold text-ink md:text-3xl">Let&rsquo;s talk</h2>
        <p className="mx-auto mb-8 max-w-md text-[15px] leading-relaxed text-ink-muted">
          Open to full-time backend / software engineering roles. The fastest way to reach me is
          email.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:karankatte1091@gmail.com"
            className="rounded-md bg-accent px-5 py-2.5 font-mono text-[13px] font-medium text-accent-ink transition-opacity hover:opacity-90"
          >
            karankatte1091@gmail.com
          </a>
          <a
            href="tel:+918104339049"
            className="rounded-md border border-border px-5 py-2.5 font-mono text-[13px] text-ink transition-colors hover:border-accent hover:text-accent"
          >
            +91 81043 39049
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-center font-mono text-[12px] text-ink-faint sm:flex-row sm:text-left">
        <span>&copy; {new Date().getFullYear()} Karan Katte</span>
        <div className="flex gap-5">
          <a href="https://github.com/karan00190" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/karan-katte-4a19261b9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://drive.google.com/file/d/1bU7nuHE3xICplVCeAUoC0G8t7cZKzY-m/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

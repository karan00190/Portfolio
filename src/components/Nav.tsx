import Link from "next/link";

import { ThemeToggle } from "./ThemeToggle";

const LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
  { href: "/#projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-ground/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="font-mono text-sm font-semibold tracking-tight text-ink">
          karan<span className="text-accent">.</span>katte
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-[13px] text-ink-muted transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1bU7nuHE3xICplVCeAUoC0G8t7cZKzY-m/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-md border border-border px-3 py-1.5 font-mono text-[12.5px] text-ink transition-colors hover:border-accent hover:text-accent sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

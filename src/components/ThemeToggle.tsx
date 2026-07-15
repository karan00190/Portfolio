"use client";

// No React state here on purpose: the icon shown is driven entirely by CSS
// reading the <html> element's data-theme attribute (see globals.css), so
// there's nothing to synchronize between server and client render - and
// nothing that needs a useEffect + setState pair, which is otherwise an easy
// way to trigger an avoidable extra render for a value this simple.
export function ThemeToggle() {
  function toggle() {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    const next = isLight ? "dark" : "light";
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem("portfolio-theme", next);
    } catch {
      // localStorage unavailable (private browsing, etc.) - theme just won't persist
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="theme-toggle flex h-8 w-8 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
    >
      <svg
        className="theme-toggle-sun"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
      <svg
        className="theme-toggle-moon"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

# Karan Katte — Portfolio

My personal portfolio — a single place to see what I've actually built, not just a list of buzzwords. Built to be fast, content-first, and genuinely mine rather than a template.

**Live:** https://myportfolio-omega-coral.vercel.app/
**Contact:** [karankatte1091@gmail.com](mailto:karankatte1091@gmail.com) &middot; [LinkedIn](https://linkedin.com/in/karan-katte-4a19261b9) &middot; [GitHub](https://github.com/karan00190)

## What this is

A backend/software engineering portfolio: who I am, where I've worked, and two projects I actually built end-to-end — with full case-study pages that explain the real engineering decisions behind each one (architecture, a real bug found and fixed, methodology), not just a tech-stack tag list.

- **Home** — hero, about, experience (BARC Cyber Security internship), a projects overview, skills, education, and contact
- **`/projects/hoteliq`** — a full-stack revenue management platform: a real ETL pipeline, and an XGBoost model built to challenge an existing Prophet forecaster, evaluated head-to-head with a leakage-free backtest
- **`/projects/api-gateway`** — a distributed rate-limiting API gateway: four algorithms as atomic Redis Lua scripts, and a real TOCTOU race condition found under load and fixed

## Tech stack

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS v4, custom design tokens (light/dark themes, no default `prefers-color-scheme` — dark is the deliberate default identity)
- **Type:** IBM Plex Mono + IBM Plex Sans, loaded via `next/font/google`
- **Hosting:** Vercel (static/SSG — no backend, no database)

## Design

Dark-first, near-black ground with a restrained warm gold accent — a deliberate callback to the navy+gold identity of the HotelIQ project featured here. A light theme is available via the toggle in the nav; the choice persists in `localStorage`. No `prefers-color-scheme` fallback — dark is always the default appearance, not just for OS-dark users.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npx eslint .    # lint
npx tsc --noEmit  # typecheck
```

## Project structure

```
src/
  app/
    page.tsx                 Home page (assembles all sections)
    projects/hoteliq/        HotelIQ case study
    projects/api-gateway/    API Gateway case study
    layout.tsx                Root layout: fonts, theme-init script, Nav/Footer
    globals.css                Design tokens (light/dark)
  components/
    Hero, About, Experience, Projects, Skills, Education, Contact, Footer
    Nav, ThemeToggle
    CaseStudyHeader           Shared chrome for the project case-study pages
public/
  profile-photo.png
```

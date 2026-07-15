import type { Metadata } from "next";

import { CaseStudyCallout, CaseStudyHeader, CaseStudySection, MetricRow } from "@/components/CaseStudyHeader";

export const metadata: Metadata = {
  title: "HotelIQ — Karan Katte",
  description:
    "A full-stack hotel revenue management platform with a real ETL pipeline and an XGBoost model evaluated head-to-head against a Prophet baseline.",
};

export default function HotelIQPage() {
  return (
    <article>
      <CaseStudyHeader
        eyebrow="Case study"
        title="HotelIQ — AI-Powered Hotel Revenue Management Platform"
        pitch="A full-stack revenue management platform built end to end: a real ETL pipeline with data-quality validation, pre-aggregated analytics, and two forecasting models evaluated against each other with a leakage-free, honestly-reported backtest — not just shipped and assumed correct."
        stack={["Python", "FastAPI", "SQLAlchemy", "Pandas", "Prophet", "XGBoost", "Next.js", "React", "TypeScript", "Docker"]}
        github="https://github.com/karan00190/HotelIQ_Revenue_Management_Platform"
        demo="https://hotel-iq-revenue-management-platfor.vercel.app/"
      />

      <MetricRow
        items={[
          { value: "35", label: "REST endpoints" },
          { value: "40K+", label: "synthetic bookings" },
          { value: "~30%", label: "lower forecast error" },
          { value: "3", label: "hotels, 290 rooms" },
        ]}
      />

      <CaseStudySection title="The problem">
        <p>
          Hotels that price every room the same regardless of demand leave money on the table — a
          room priced identically on a slow Tuesday and a packed Saturday ignores the single
          biggest lever a hotel has over its own revenue. I built HotelIQ to predict occupancy
          demand and turn that prediction into a concrete, explainable price recommendation, the
          way a real revenue management system does.
        </p>
        <p>
          I built this specifically to go deep on a real data engineering and ML pipeline rather
          than ship another CRUD app — the goal was a system that would survive a technical
          interviewer asking &ldquo;how did you actually verify this works?&rdquo;
        </p>
      </CaseStudySection>

      <CaseStudySection id="architecture" title="Architecture">
        <p>
          Three layers, each with a single responsibility. The <strong>Process layer</strong>{" "}
          ingests and validates raw booking data before anything downstream ever touches it. The{" "}
          <strong>Analytics layer</strong> pre-aggregates expensive KPIs (occupancy, ADR, RevPAR)
          into a dedicated table so dashboard reads are fast, indexed lookups instead of raw
          scans. The <strong>AI layer</strong> reads only from that clean, pre-aggregated history
          to forecast demand and recommend prices.
        </p>
        <ul>
          <li>
            <strong>ETL pipeline</strong> — a validator running 9 data-quality checks (required
            columns, parseable and logically-ordered dates, positive prices/guest counts,
            duplicate and statistical-outlier detection) gates everything before it reaches the
            database.
          </li>
          <li>
            <strong>Feature engineering</strong> — ~24 derived columns across five categories
            (time, stay-length, pricing, rolling-window, occupancy), all vectorized Pandas, with
            rolling windows computed per-hotel to avoid one property&apos;s booking pace leaking
            into another&apos;s &ldquo;recent activity&rdquo; feature.
          </li>
          <li>
            <strong>Idempotent, batched loads</strong> — inserts commit in batches of 100 and skip
            anything already present, so re-running the same file twice never creates duplicates.
          </li>
        </ul>
      </CaseStudySection>

      <CaseStudySection id="ml" title="The ML challenger, evaluated honestly">
        <p>
          The system already had a working Prophet-based forecaster. I built an{" "}
          <strong>XGBoost model as a challenger</strong> — predicting the same target (daily
          occupancy), evaluated head-to-head against Prophet on an identical held-out window,
          rather than just adding a second model and assuming newer means better.
        </p>
        <ul>
          <li>
            <strong>Strict time-based split, never shuffled</strong> — both models train only on
            the first ~80% of the calendar range and are evaluated on the same held-out last ~20%.
          </li>
          <li>
            <strong>Leakage-verified lag/rolling features</strong> — a day&apos;s
            &ldquo;rolling 7-day average occupancy&rdquo; feature is computed with{" "}
            <code>.shift(1)</code> before <code>.rolling()</code>, so it never includes that
            day&apos;s own outcome. I verified this by hand: picked one date, manually averaged
            the seven prior days from the raw database, and confirmed it matched the model&apos;s
            feature to the exact decimal.
          </li>
          <li>
            <strong>Pooled training</strong> — XGBoost trains once across all three hotels rather
            than one model per property, a deliberate choice given how few training rows a single
            hotel has after the holdout split.
          </li>
        </ul>
        <p>
          Result: XGBoost was the more accurate forecaster on every property, cutting mean
          absolute error by roughly 30% versus Prophet.
        </p>
      </CaseStudySection>

      <CaseStudySection id="backtest" title="The revenue backtest — and the finding I didn't expect">
        <p>
          A more accurate forecast is only useful if it changes a real decision. I built a
          backtest that replays every real historical booking in the held-out window through the{" "}
          <strong>unmodified rule-based pricing engine</strong>, once using Prophet&apos;s
          forecast and once using XGBoost&apos;s, and compares the simulated revenue against what
          was actually charged — with the deltas <strong>bootstrapped</strong> (1,000 resamples)
          into a confidence range instead of one falsely-precise number.
        </p>
        <CaseStudyCallout label="The honest finding">
          <p>
            XGBoost won decisively on forecast accuracy, but that didn&apos;t uniformly translate
            into more simulated revenue. The pricing engine reacts to a forecast through{" "}
            <strong>discrete tiers</strong> (predicted occupancy ≥90% → one price bump, ≥70% →
            a smaller one, and so on) rather than a smooth function — two different forecasts
            landing in the same tier produce an identical recommended price regardless of which
            one was numerically closer to the truth. I built the system to report that finding
            plainly rather than cherry-pick a more flattering number.
          </p>
        </CaseStudyCallout>
        <p>
          The backtest also states its one unavoidable assumption in plain language next to every
          number it reports: the booking data only records what actually happened, with no record
          of a declined or counterfactual price — so true price-elasticity modeling is
          structurally impossible from this data, not just statistically weak. The system predicts
          occupancy, something the data genuinely supports, and never claims more than that.
        </p>
      </CaseStudySection>

      <CaseStudySection id="deployment" title="Deployment">
        <p>
          Containerized the backend with Docker specifically to solve a real problem: Prophet
          depends on CmdStan, a compiled C++ toolchain, which made local setup fragile across
          machines. The Dockerfile installs the build toolchain, compiles CmdStan once at
          image-build time, and even bakes a fully-seeded, metrics-calculated database into the
          image itself. Backend deployed on Render, frontend on Vercel, connected live.
        </p>
      </CaseStudySection>
    </article>
  );
}

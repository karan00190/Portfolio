import type { Metadata } from "next";

import { CaseStudyCallout, CaseStudyHeader, CaseStudySection, MetricRow } from "@/components/CaseStudyHeader";

export const metadata: Metadata = {
  title: "Rate-Limited Distributed API Gateway — Karan Katte",
  description:
    "A distributed rate-limiting API gateway with four algorithms as atomic Redis Lua scripts, a TOCTOU race condition found and fixed, and a real-time observability dashboard.",
};

export default function ApiGatewayPage() {
  return (
    <article>
      <CaseStudyHeader
        eyebrow="Case study"
        title="Rate-Limited Distributed API Gateway"
        pitch="A distributed rate-limiting gateway implementing four industry-standard algorithms as atomic Redis Lua scripts, horizontally scaled across multiple instances with shared state — including a real concurrency bug I found under load and fixed at the source."
        stack={["Python", "FastAPI", "Redis", "Lua", "Docker", "Docker Compose", "Pytest", "Locust"]}
        github="https://github.com/karan00190"
      />

      <MetricRow
        items={[
          { value: "4", label: "rate-limit algorithms" },
          { value: "3", label: "gateway instances" },
          { value: "4x → 1x", label: "over-admission fixed" },
          { value: "11/11", label: "tests passing" },
        ]}
      />

      <CaseStudySection title="The problem">
        <p>
          Rate limiting sounds simple until you scale it horizontally: if every gateway instance
          tracks request counts in its own memory, the limit you actually enforce is (your
          configured limit) &times; (number of instances) — clients can trivially exceed it by
          getting load-balanced across replicas. I built this project to implement rate limiting
          the way a real distributed system needs it: shared state, atomic operations, and enough
          load testing to actually trust the numbers.
        </p>
      </CaseStudySection>

      <CaseStudySection id="algorithms" title="Four algorithms, one shared implementation strategy">
        <p>
          Implemented all four of the standard rate-limiting algorithms, each with different
          tradeoffs between memory usage, burst tolerance, and precision:
        </p>
        <ul>
          <li><strong>Token bucket</strong> — allows bursts up to a capacity, refills at a steady rate.</li>
          <li><strong>Sliding window log</strong> — tracks exact request timestamps for precise enforcement.</li>
          <li><strong>Sliding window counter</strong> — an approximation of the log approach with far less memory overhead.</li>
          <li><strong>Leaky bucket</strong> — smooths bursty traffic into a constant outflow rate.</li>
        </ul>
        <p>
          Every algorithm is implemented as an <strong>atomic Redis Lua script</strong> rather
          than separate GET/SET calls from the application — Redis executes an entire Lua script
          as one indivisible operation, so the read-check-write cycle that decides &ldquo;allow or
          deny&rdquo; can never be interrupted by a concurrent request from another gateway
          instance.
        </p>
      </CaseStudySection>

      <CaseStudySection id="race-condition" title="The bug: a TOCTOU race condition under load">
        <p>
          A time-of-check-to-time-of-use (TOCTOU) race condition happens when a system checks a
          condition and then acts on it as two separate, non-atomic steps — if enough time passes
          between the check and the action, that condition can have changed. In an earlier version
          of the rate limiter, checking &ldquo;is this client under the limit&rdquo; and then
          incrementing their request counter were two separate Redis calls, not one.
        </p>
        <CaseStudyCallout label="What that actually did under load">
          <p>
            Under 50 concurrent requests, multiple requests could all read the counter, all see
            it under the limit, and all get approved <em>before any of them had incremented it</em>{" "}
            — measured over-admission of up to 4x the configured limit. Rewriting the check and
            increment as a single atomic Lua script closed the race window entirely: under the
            same 50-concurrent-request load, admission matched the configured limit exactly.
          </p>
        </CaseStudyCallout>
        <p>
          Verified the fix with an 11-test automated suite (100% pass), and used Locust to
          generate the concurrent load that made the race condition reproducible in the first
          place — a bug like this rarely shows up in a single-request test, only under real
          concurrent pressure.
        </p>
      </CaseStudySection>

      <CaseStudySection id="scaling" title="Horizontal scaling and observability">
        <p>
          The gateway runs as three separate instances behind shared Redis state via Docker
          Compose, so the rate limit is enforced correctly regardless of which instance a request
          lands on — the whole point of fixing the race condition in the first place. Built a
          real-time observability dashboard in <strong>zero-dependency vanilla JavaScript</strong>{" "}
          visualizing live allow/deny decisions and per-instance traffic, backed by a custom
          Redis-backed stats API.
        </p>
      </CaseStudySection>
    </article>
  );
}

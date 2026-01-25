import Image from "next/image";
import logo from "../assets/flux-pro-2.0_Create_a_modern_minimalist_and_premium_logo_for_Omnia_Potentia_._Style_futuristi-0.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[color:var(--color-text)]">
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 h-[520px] w-full bg-[radial-gradient(circle_at_top,_rgba(124,108,246,0.22),_transparent_60%)]" />
        <div className="pointer-events-none absolute left-0 top-0 h-[520px] w-full bg-[radial-gradient(circle_at_top_right,_rgba(95,179,162,0.2),_transparent_55%)]" />
        <div className="pointer-events-none absolute right-16 top-24 h-72 w-72 rounded-full bg-[linear-gradient(135deg,rgba(124,108,246,0.25),rgba(95,179,162,0.2))] blur-3xl" />
        <div className="pointer-events-none absolute left-12 top-24 hidden h-52 w-52 rounded-full border border-white/70 bg-white/40 shadow-[0_20px_60px_rgba(124,108,246,0.12)] lg:block" />

        <header className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white/80 shadow-[0_12px_24px_rgba(30,30,47,0.12)]">
              <Image
                src={logo}
                alt="Omnia Potentia logo"
                className="h-8 w-8 object-contain"
              />
            </div>
            <div className="font-display text-lg font-semibold tracking-tight text-[color:var(--color-primary)]">
              Omnia Potentia
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-[color:var(--color-muted)] md:flex">
            <a
              className="transition hover:text-[color:var(--color-primary)]"
              href="#capabilities"
            >
              Capabilities
            </a>
            <a
              className="transition hover:text-[color:var(--color-primary)]"
              href="#products"
            >
              Products
            </a>
            <a
              className="transition hover:text-[color:var(--color-primary)]"
              href="#process"
            >
              Process
            </a>
            <a
              className="transition hover:text-[color:var(--color-primary)]"
              href="#contact"
            >
              Contact
            </a>
          </nav>
        </header>

        <section className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-24 pt-16 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
          <div
            className="flex max-w-2xl flex-col gap-6 animate-fade-up"
            style={{ animationDelay: "60ms", animationFillMode: "both" }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-secondary)]">
              AI Product Studio
            </p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-[color:var(--color-primary)] sm:text-5xl lg:text-6xl">
              Omnia Potentia
            </h1>
            <p className="text-lg text-[color:var(--color-text)] sm:text-xl">
              We build real AI products for real-world use.
            </p>
            <p className="text-base text-[color:var(--color-muted)] sm:text-lg">
              From mobile apps to scalable web platforms.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button className="group inline-flex items-center justify-center rounded-full bg-[color:var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(124,108,246,0.35)] transition hover:-translate-y-0.5 hover:bg-[#6a59ef]">
                Explore Products
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
              <span>Mobile & Web</span>
              <span>Security-First</span>
              <span>End-to-End Delivery</span>
            </div>
          </div>

          <div
            className="relative flex w-full max-w-md flex-col gap-6 animate-fade-up"
            style={{ animationDelay: "120ms", animationFillMode: "both" }}
          >
            <div className="glass rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                  Studio Signal
                </span>
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_12px_rgba(255,159,67,0.8)]" />
              </div>
              <div className="mt-4 space-y-4">
                <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-[color:var(--color-primary)]">
                    TravelersBase
                  </p>
                  <p className="text-sm text-[color:var(--color-muted)]">
                    AI travel planning for mobile + web.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-[color:var(--color-primary)]">
                    Moxakk Analyzer
                  </p>
                  <p className="text-sm text-[color:var(--color-muted)]">
                    Intelligent insights for complex data.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/70 bg-white/70 p-4">
                  <p className="text-sm font-semibold text-[color:var(--color-primary)]">
                    Health Analysis App
                  </p>
                  <p className="text-sm text-[color:var(--color-muted)]">
                    TBA — building for trusted outcomes.
                  </p>
                </div>
              </div>
            </div>
            <div className="glass animate-float rounded-3xl p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                Infrastructure
              </p>
              <p className="mt-3 text-lg font-semibold text-[color:var(--color-secondary)]">
                Flexible, secure, and production-ready.
              </p>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                Self-hosted on Hetzner or scaled on AWS and GCP with clear
                ownership.
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-secondary)]">
                <span>Hetzner</span>
                <span>AWS</span>
                <span>GCP</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <section
        id="capabilities"
        className="mx-auto w-full max-w-6xl px-6 py-20"
      >
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-secondary)]">
            What We Do
          </p>
          <h2 className="font-display text-3xl font-semibold text-[color:var(--color-primary)] sm:text-4xl">
            Built for practical AI systems with enterprise execution.
          </h2>
          <p className="max-w-2xl text-base text-[color:var(--color-muted)] sm:text-lg">
            We combine AI engineering, infrastructure choices, and performance
            optimization to deliver real products that run reliably in the wild.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="glass group rounded-3xl border border-[color:var(--color-primary)]/40 p-6 transition hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-primary)]/10 text-[color:var(--color-primary)]">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v4m0 10v4m9-9h-4M7 12H3m14.07 7.07-2.83-2.83M9.76 9.76 6.93 6.93m10.14 0-2.83 2.83M9.76 14.24l-2.83 2.83"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-primary)]">
                AI Systems
              </span>
            </div>
            <p className="mt-4 text-base text-[color:var(--color-text)]">
              Production-grade intelligence embedded into workflows.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
              <li>Chat systems</li>
              <li>Recommendation engines</li>
              <li>Automation workflows</li>
            </ul>
          </div>

          <div className="glass group rounded-3xl border border-[color:var(--color-secondary)]/40 p-6 transition hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-secondary)]/10 text-[color:var(--color-secondary)]">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 15a4 4 0 0 0 4 4h9a4 4 0 0 0 0-8 5 5 0 0 0-9.9-1.2A4 4 0 0 0 3 15Z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-secondary)]">
                Cloud Infrastructure
              </span>
            </div>
            <p className="mt-4 text-base text-[color:var(--color-text)]">
              Stable, compliant infrastructure tuned for reliability.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
              <li>Self-hosted (Hetzner)</li>
              <li>Public cloud (AWS, GCP)</li>
              <li>Scalable, secure architecture</li>
            </ul>
          </div>

          <div className="glass group rounded-3xl border border-[color:var(--color-accent)]/40 p-6 transition hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16 8 12l4 4 8-8"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-accent)]">
                Performance Engineering
              </span>
            </div>
            <p className="mt-4 text-base text-[color:var(--color-text)]">
              Optimized experiences that feel instant and dependable.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
              <li>Frontend speed optimization</li>
              <li>Backend latency reduction</li>
              <li>Caching & resource efficiency</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-secondary)]">
            Products / Case Studies
          </p>
          <h2 className="font-display text-3xl font-semibold text-[color:var(--color-primary)] sm:text-4xl">
            Real products delivered end-to-end.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="glass rounded-3xl p-6 transition hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-primary)]">
                TravelersBase
              </h3>
              <span className="rounded-full bg-[color:var(--color-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Ongoing
              </span>
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">
              AI-powered travel planning designed for effortless journeys across
              mobile and web.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
              <span className="rounded-full bg-[color:var(--color-primary)]/10 px-3 py-1 text-[color:var(--color-primary)]">
                AI
              </span>
              <span className="rounded-full bg-[color:var(--color-secondary)]/10 px-3 py-1 text-[color:var(--color-secondary)]">
                Mobile
              </span>
              <span className="rounded-full bg-[color:var(--color-secondary)]/10 px-3 py-1 text-[color:var(--color-secondary)]">
                Web
              </span>
              <span className="rounded-full bg-[color:var(--color-secondary)]/10 px-3 py-1 text-[color:var(--color-secondary)]">
                Cloud
              </span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 transition hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-primary)]">
                Moxakk Analyzer
              </h3>
              <span className="rounded-full bg-[color:var(--color-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-primary)]">
                Live
              </span>
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">
              AI-based analysis that transforms complex signals into actionable
              decisions.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
              <span className="rounded-full bg-[color:var(--color-primary)]/10 px-3 py-1 text-[color:var(--color-primary)]">
                AI
              </span>
              <span className="rounded-full bg-[color:var(--color-secondary)]/10 px-3 py-1 text-[color:var(--color-secondary)]">
                Web
              </span>
              <span className="rounded-full bg-[color:var(--color-secondary)]/10 px-3 py-1 text-[color:var(--color-secondary)]">
                Cloud
              </span>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 transition hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-[color:var(--color-primary)]">
                Health Analysis App
              </h3>
              <span className="rounded-full bg-[color:var(--color-accent)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Coming Soon
              </span>
            </div>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">
              A new standard for secure, patient-focused AI insights built with
              reliability first.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.16em]">
              <span className="rounded-full bg-[color:var(--color-primary)]/10 px-3 py-1 text-[color:var(--color-primary)]">
                AI
              </span>
              <span className="rounded-full bg-[color:var(--color-secondary)]/10 px-3 py-1 text-[color:var(--color-secondary)]">
                Mobile
              </span>
              <span className="rounded-full bg-[color:var(--color-secondary)]/10 px-3 py-1 text-[color:var(--color-secondary)]">
                Web
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="flex flex-col gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-secondary)]">
            How We Build
          </p>
          <h2 className="font-display text-3xl font-semibold text-[color:var(--color-primary)] sm:text-4xl">
            From discovery to delivery with full ownership.
          </h2>
          <p className="max-w-2xl text-base text-[color:var(--color-muted)] sm:text-lg">
            Quality, security, and end-to-end delivery are embedded across every
            phase.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Discovery",
              detail:
                "Align product goals, data reality, and the AI approach for real-world constraints.",
            },
            {
              title: "Architecture",
              detail:
                "Design secure systems, infrastructure choices, and performance baselines.",
            },
            {
              title: "Delivery",
              detail:
                "Ship production-ready experiences with observability and ongoing iteration.",
            },
          ].map((step, index) => (
            <div
              key={step.title}
              className="glass rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                  0{index + 1}
                </span>
                <span className="h-2 w-2 rounded-full bg-[color:var(--color-secondary)]" />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-[color:var(--color-primary)]">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-[color:var(--color-muted)]">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-secondary)]">
              Philosophy
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[color:var(--color-primary)] sm:text-4xl">
              AI as a practical capability, not a buzzword.
            </h2>
          </div>
          <div className="space-y-4 text-base text-[color:var(--color-muted)]">
            <p>We build real products, not demos or experiments.</p>
            <p>
              AI is applied to solve tangible user problems and business goals.
            </p>
            <p>
              Quality-first execution is non-negotiable across every release.
            </p>
            <p>Security is designed from day one, not bolted on later.</p>
            <p>
              Scalable systems are delivered with clear, accountable ownership.
            </p>
          </div>
        </div>
      </section>
      <footer
        id="contact"
        className="mx-auto w-full max-w-6xl px-6 py-12 text-center text-sm text-[color:var(--color-muted)]"
      >
        <p>© {new Date().getFullYear()} Omnia Potentia. All rights reserved.</p>
        <p className="mt-2">
          Contact us at{" "}
          <a href="mailto:info@omniapotentia.com">info@omniapotentia.com</a>.
        </p>
      </footer>
    </div>
  );
}

// app/page.tsx
import Link from "next/link";
import FiltersTest from "./components/FiltersTest";


function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
        ✓
      </span>
      <span className="text-sm leading-6 text-zinc-700">{children}</span>
    </li>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
      <div className="text-sm font-semibold text-zinc-900">{title}</div>
      <p className="mt-1 text-sm leading-6 text-zinc-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Small subtle green gradient (no off-screen blobs) */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(600px_350px_at_75%_20%,rgba(16,185,129,0.12),transparent_60%)]" />
      </div>

      <section className="grid gap-10 lg:grid-cols-12 lg:items-start">
        {/* Left: Copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
            Gentle guidance, not hype
          </div>

          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            Not sure what supplements you need?
            <span className="block text-emerald-700">Start here.</span>
          </h1>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-700">
            That&apos;s Whatsupp helps you narrow down options based on your goal,
            ingredients, and personal constraints without overwhelm.
          </p>

          <ul className="mt-6 grid gap-3">
            <CheckItem>No pressure. No confusing jargon.</CheckItem>
            <CheckItem>Filter by goals, ingredients, form, and budget.</CheckItem>
            <CheckItem>See clear tradeoffs and why something is suggested.</CheckItem>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/search"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              Start with a quick search
            </Link>
            <Link
              href="/chat"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              Ask the assistant
            </Link>
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            Coming soon: smarter filtering + product comparisons.
          </p>
        <div className="mt-6">
          <FiltersTest />
        </div>
        </div>

        {/* Right: Panel */}
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-zinc-900">
                  A calm starting point
                </div>
                <p className="mt-1 text-sm leading-6 text-zinc-600">
                  Pick what you care about most. We&apos;ll do the narrowing.
                </p>
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 font-semibold">
                TW
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="text-xs font-semibold text-zinc-700">
                  COMMON GOALS
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Energy", "Sleep", "Focus", "Stress", "Gut", "Recovery"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="text-xs font-semibold text-emerald-900">
                  SAFETY-FIRST FILTERS
                </div>
                <p className="mt-2 text-sm leading-6 text-emerald-900/80">
                  Avoid ingredients you don&apos;t want and prioritize third-party
                  testing when available.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <FeatureCard
              title="Search"
              description="Filter by goal, ingredients, form, and budget."
            />
            <FeatureCard
              title="Chat"
              description="Explain your situation and get guided options."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

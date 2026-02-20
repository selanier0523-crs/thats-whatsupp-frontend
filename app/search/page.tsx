"use client";
import React from "react";

function FilterChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
      {children}
    </span>
  );
}

function FilterRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <div className="text-sm font-medium text-zinc-900">{label}</div>
      {children}
    </div>
  );
}

export default function SearchPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState<any[]>([]);
  const [error, setError] = React.useState<string | null>(null);

  async function runSearch() {
    try {
      setError(null);
      const res = await fetch(`${API}/api/search?q=${encodeURIComponent(query)}`);
      const json = await res.json();
      setResults(json.results || []);
    } catch (e) {
      setError(String(e));
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Search Supplements</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Search by supplement, ingredient, brand, or goal, then refine with filters.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
          Filters are visual for now
        </div>
      </div>

      {/* Centered, smaller search bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // prevents page reload
          runSearch();
        }}
        className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
      >
        <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-emerald-200"
            placeholder="Search by supplement, ingredient, brand, or goal…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button
            type="submit"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Search
          </button>
        </div>
      </form>

      <div className="grid gap-6 lg:grid-cols-12">
        {/* Sidebar filters */}
        <aside className="lg:col-span-4">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-zinc-900">Filters</div>
                <p className="mt-1 text-sm text-zinc-600">
                  Narrow results. These controls are visual for now.
                </p>
              </div>
              <div className="rounded-xl bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                Beta
              </div>
            </div>

            <div className="mt-5 space-y-5">
              <FilterRow label="Goal">
                <div className="flex flex-wrap gap-2">
                  <FilterChip>Energy</FilterChip>
                  <FilterChip>Sleep</FilterChip>
                  <FilterChip>Focus</FilterChip>
                  <FilterChip>Stress</FilterChip>
                  <FilterChip>Gut</FilterChip>
                  <FilterChip>Recovery</FilterChip>
                </div>
              </FilterRow>

              <FilterRow label="Form">
                <div className="flex flex-wrap gap-2">
                  <FilterChip>Capsule</FilterChip>
                  <FilterChip>Powder</FilterChip>
                  <FilterChip>Gummy</FilterChip>
                  <FilterChip>Liquid</FilterChip>
                </div>
              </FilterRow>

              <FilterRow label="Avoid ingredients">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-700">
                    <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                    <span>Melatonin</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-700">
                    <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                    <span>Caffeine</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-700">
                    <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                    <span>Artificial sweeteners</span>
                  </div>
                </div>
              </FilterRow>

              <FilterRow label="Third-party testing">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-700">
                    <input type="checkbox" className="h-4 w-4 accent-emerald-600" />
                    <span>Only show third-party tested</span>
                  </div>
                </div>
              </FilterRow>

              <FilterRow label="Budget">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
                  Price slider coming soon
                </div>
              </FilterRow>
            </div>
          </div>
        </aside>

        {/* Results */}
        <section className="lg:col-span-8">
          <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-zinc-900">Results</div>
                <p className="mt-2 text-sm text-zinc-600">
                  The dataset is just a sample for now, but this shows that we can access the database! Search for things like "multivitamin" or "magnesium" to test it.
                </p>
              </div>

              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-medium text-emerald-800 whitespace-nowrap">
                {results.length} items
              </div>
            </div>

            {error ? (
              <div className="mt-5 text-sm text-red-600">{error}</div>
            ) : (
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {results.map((r) => (
                  <div
                    key={r.id}
                    className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <div className="text-sm font-semibold text-zinc-900">
                      {r.name}
                    </div>
                    <p className="mt-1 text-sm text-zinc-600">
                      {r.brand} • {r.form}
                    </p>
                    <p className="mt-2 text-sm text-zinc-600">{r.description}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="text-xs font-semibold text-emerald-900">
                SAFETY NOTE
              </div>
              <p className="mt-2 text-sm text-emerald-900/80">
                Recommendations will prioritize ingredient transparency and third-party testing.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
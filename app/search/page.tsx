export default function SearchPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Search Supplements</h1>

      <div className="flex gap-3">
        <input
          className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-white/10 dark:bg-black dark:focus:ring-white/20"
          placeholder="Search by supplement, ingredient, brand, or goal…"
        />
        <button className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-black">
          Search
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <aside className="md:col-span-4 rounded-2xl border border-zinc-200 p-4 dark:border-white/10">
          <div className="text-sm font-medium">Filters (coming soon)</div>
          <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Goal, ingredients, form, budget, third-party testing, allergens…
          </div>
        </aside>

        <section className="md:col-span-8 rounded-2xl border border-zinc-200 p-4 dark:border-white/10">
          <div className="text-sm font-medium">Results</div>
          <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            No results yet. Once we connect the dataset, results will show here.
          </div>
        </section>
      </div>
    </div>
  );
}

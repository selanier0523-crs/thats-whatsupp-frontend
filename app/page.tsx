import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-between px-6 py-16 sm:px-10">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zinc-950 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950">
              TW
            </div>
            <div className="leading-tight">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                SUPPLEMENT DISCOVERY
              </p>
              <h1 className="text-lg font-semibold tracking-tight">
                That&apos;s Whatsupp
              </h1>
            </div>
          </div>

          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
          >
            Docs
          </a>
        </header>

        <section className="mt-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-600 shadow-sm dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            FRONTEND IS LIVE AND DEPLOYED
          </div>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Find the supplement that fits you.
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            This is the barebones frontend. Next up is a simple search experience
            and a chat assistant that helps filter products by goals, ingredients,
            and constraints.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-950 px-6 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
            >
              Start a search (coming soon)
            </a>

            <a
              href="#"
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-medium text-zinc-900 shadow-sm transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-white/5"
            >
              Ask the assistant (coming soon)
            </a>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                STEP 1
              </p>
              <p className="mt-2 text-sm font-semibold">Search</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Filter by goal, ingredient, form, and budget.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                STEP 2
              </p>
              <p className="mt-2 text-sm font-semibold">Compare</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                See differences in dose, third party testing, and labels.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-zinc-950">
              <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                STEP 3
              </p>
              <p className="mt-2 text-sm font-semibold">Decide</p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                Use the assistant to narrow to a few best options.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 text-sm text-zinc-600 dark:border-white/10 dark:text-zinc-400 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={72}
              height={16}
              priority
            />
            <span className="text-xs">DEPLOYED ON VERCEL</span>
          </div>

          <p className="text-xs">
            Next step: add /search and /product pages, then wire to the backend.
          </p>
        </footer>
      </main>
    </div>
  );
}

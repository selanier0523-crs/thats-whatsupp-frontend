export default function ChatPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Chat Assistant</h1>
          <p className="mt-1 text-sm text-zinc-600">
            Explain your goal and constraints. We’ll guide you to options.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
          Safety-first guidance
        </div>
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
        <div className="space-y-3 text-sm">
          <div className="rounded-xl border border-black/20 bg-emerald-50 px-4 py-3 text-zinc-800">
            Hi — tell me your goal (sleep, energy, muscle, focus, etc.) and any
            constraints (budget, allergies, caffeine, vegan).
          </div>

          <div className="rounded-xl border border-black/20 bg-emerald-50 px-4 py-3 text-zinc-800">
            I want something for better sleep but I don’t want melatonin.
          </div>

          <div className="rounded-xl border border-black/20 bg-emerald-50 px-4 py-3 text-zinc-800">
            Got it. When we connect the backend, I’ll recommend a few options
            and explain why.
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <input
            className="w-full rounded-xl border border-black/20 bg-white px-4 py-3 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-emerald-200"
            placeholder="Type a message…"
          />

          <button
            type="button"
            className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Send
          </button>
        </div>

        <p className="mt-3 text-xs text-zinc-500">
          The send button is visual for now. We’ll wire it up when the backend is ready.
        </p>
      </div>
    </div>
  );
}

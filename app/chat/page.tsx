export default function ChatPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Chat Assistant</h1>

      <div className="rounded-2xl border border-zinc-200 p-4 dark:border-white/10">
        <div className="space-y-3 text-sm">
          <div className="rounded-xl bg-zinc-100 p-3 dark:bg-white/10">
            Hi — tell me your goal (sleep, energy, muscle, focus, etc.) and any
            constraints (budget, allergies, caffeine, vegan).
          </div>
          <div className="rounded-xl bg-black p-3 text-white dark:bg-white dark:text-black">
            I want something for better sleep but I don’t want melatonin.
          </div>
          <div className="rounded-xl bg-zinc-100 p-3 dark:bg-white/10">
            Got it. When we connect the backend, I’ll recommend a few options
            and explain why.
          </div>
        </div>

        <div className="mt-4 flex gap-3">
          <input
            className="w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-zinc-300 dark:border-white/10 dark:bg-black dark:focus:ring-white/20"
            placeholder="Type a message…"
          />
          <button className="rounded-xl bg-black px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-black">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

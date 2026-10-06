export type Bubble = { from: "agent" | "person"; text: string; note?: string };

export function PhoneMockup({ title, messages }: { title: string; messages: Bubble[] }) {
  return (
    <div className="mx-auto w-full max-w-sm rounded-[2.5rem] border border-slate-300 bg-slate-900 p-3 shadow-xl">
      <div className="rounded-[2rem] bg-white">
        <div className="border-b border-slate-200 px-5 py-3 text-center">
          <p className="text-sm font-semibold text-ink">{title}</p>
          <p className="text-xs text-slate-500">Text message</p>
        </div>
        <div className="space-y-3 px-4 py-5">
          {messages.map((m, i) => (
            <div key={i} className={m.from === "agent" ? "flex justify-start" : "flex justify-end"}>
              <div
                className={
                  m.from === "agent"
                    ? "max-w-[85%] rounded-2xl rounded-bl-sm bg-slate-100 px-3 py-2 text-sm text-ink"
                    : "max-w-[85%] rounded-2xl rounded-br-sm bg-pacific-600 px-3 py-2 text-sm text-white"
                }
              >
                {m.text}
                {m.note ? <span className="mt-1 block text-[11px] opacity-70">{m.note}</span> : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

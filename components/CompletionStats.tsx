import { Container } from "./Container";
import { completionStats as s } from "@/lib/content";

const points = [
  { title: "Dispatched the moment it's created", body: "The right tech gets the job by text right away, with photos and details." },
  { title: "Follow-ups that never wait", body: "Sutro checks in at every step, during each person's work hours, until the job is closed." },
  { title: "Approvals in one reply", body: "Spending approvals go to the owner by text, so parts aren't held up for days." },
];

export function CompletionStats() {
  const multiple = Math.round(s.benchmarkHours / s.sutroHours);
  const sutroPct = Math.max((s.sutroHours / s.benchmarkHours) * 100, 2);
  const sutroLabel = s.sutroMeasured ? "Average with Sutro Pacific" : "Sutro Pacific target";

  return (
    <section id="results" className="border-y border-slate-200 bg-white">
      <Container className="py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-pacific-600">Work order completion</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">From days to hours.</h2>
            <p className="mt-4 text-lg text-slate-600">
              The average work order takes {s.benchmarkHours} hours ({s.benchmarkDays} days) from the moment it&apos;s
              created to the moment the repair is done.{" "}
              {s.sutroMeasured
                ? `Teams working with Sutro Pacific average ${s.sutroHours} hours.`
                : `Sutro Pacific is built to bring that down to ${s.sutroHours} hours by keeping every step moving, from request to finished repair.`}
            </p>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-6xl font-semibold tracking-tight text-ink sm:text-7xl">{multiple}×</span>
              <span className="text-slate-600">faster than the industry average</span>
            </div>
          </div>

          <figure>
            <div
              className="space-y-7 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8"
              role="img"
              aria-label={`Industry average ${s.benchmarkHours} hours versus ${sutroLabel.toLowerCase()} ${s.sutroHours} hours from work order creation to completion`}
            >
              <Bar label="Industry average" value={`${s.benchmarkHours} hours`} note={`${s.benchmarkDays} days`} pct={100} tone="neutral" />
              <Bar label={sutroLabel} value={`${s.sutroHours} hours`} note={`${multiple}× faster`} pct={sutroPct} tone="brand" />
              <p className="text-xs text-slate-500">Time from work order creation to completed repair.</p>
            </div>
          </figure>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="border-t-2 border-pacific-600 pt-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{p.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Bar({
  label,
  value,
  note,
  pct,
  tone,
}: {
  label: string;
  value: string;
  note: string;
  pct: number;
  tone: "neutral" | "brand";
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-sm font-medium text-ink">{label}</span>
        <span className="text-sm text-slate-600">
          <span className="text-lg font-semibold text-ink">{value}</span> · {note}
        </span>
      </div>
      <div className="mt-2 h-3 w-full rounded-full bg-slate-200/70">
        <div
          className={`h-3 rounded-full ${tone === "brand" ? "bg-pacific-600" : "bg-slate-400"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

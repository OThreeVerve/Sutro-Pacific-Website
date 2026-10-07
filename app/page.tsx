import Link from "next/link";
import { Container } from "@/components/Container";
import { HeroChatDemo } from "@/components/HeroChatDemo";
import { PricingTable } from "@/components/PricingTable";
import { agents } from "@/lib/content";
import { pricing, site } from "@/lib/site";

const steps = [
  { n: "1", title: "Start a mission", body: "Create a work order or unit turn in the dashboard in under a minute." },
  { n: "2", title: "The agent texts your team", body: "The right maintenance tech, leasing agent or vendor gets a clear request by text. No app to install." },
  { n: "3", title: "It follows up, so you don't have to", body: "Check-ins, photos, spending approvals and reminders, only during each person's work hours." },
  { n: "4", title: "You get the full picture", body: "A timeline of every step and an email report when the mission closes." },
];

const principles = [
  { title: "Only people who opt in", body: "Team members and vendors confirm by text before the agent ever messages them, and can reply STOP at any time." },
  { title: "Only during work hours", body: "Routine texts arrive only inside each person's schedule. Only true emergencies go out after hours, and only to people who agreed." },
  { title: "Residents are never texted", body: "The agents coordinate your team. Your residents' contact information is never used to message them." },
  { title: "You keep the decisions", body: "Spending limits and approvals come from your settings. The agent asks; you decide." },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-pacific-50 to-white">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:px-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:gap-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-pacific-600">For property management teams</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
              AI agents that keep your team ahead
            </h1>
            <p className="mt-5 text-lg text-slate-600">
              Sutro Pacific&apos;s AI agents set the tempo for fast-moving property management teams. They check in with
              your team so work keeps moving, nothing slips through the cracks, and you always know where things stand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${site.salesEmail}?subject=Sutro%20Pacific%20demo%20request`}
                className="rounded-full bg-pacific-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pacific-700"
              >
                Request a demo
              </a>
              <a href="#how-it-works" className="rounded-full px-6 py-3 text-sm font-semibold text-ink ring-1 ring-slate-300 hover:bg-white">
                See how it works
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-500">Built for owners and managers of 10 to 200+ units.</p>
          </div>
          <HeroChatDemo />
        </div>
      </section>

      {/* Problem */}
      <section>
        <Container className="py-16">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight">
            Small teams don&apos;t lack effort. They lack someone keeping the tempo.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { t: "Visibility", b: "Know which work orders, turns and follow-ups are open, who owns them and what's blocking them, without chasing anyone." },
              { t: "Tempo", b: "Multi-step jobs stall between handoffs. The agent keeps every step moving, so vacant days and repeat calls go down." },
              { t: "Accountability", b: "Every request, reply, photo and approval is logged in one timeline, so nothing depends on memory." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-slate-600">{c.b}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="bg-sand">
        <Container className="py-16">
          <h2 className="text-3xl font-semibold tracking-tight">How it works</h2>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {steps.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white p-6 shadow-sm">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-pacific-600 text-sm font-semibold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Agents */}
      <section>
        <Container className="py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Meet the agents</h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Each agent runs missions from proven playbooks and texts from its own number, so your team always knows who&apos;s asking.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {agents.map((a) => (
              <div key={a.name} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{a.name}</h3>
                  <span
                    className={
                      a.status === "Available now"
                        ? "rounded-full bg-pacific-100 px-3 py-1 text-xs font-semibold text-pacific-700"
                        : "rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600"
                    }
                  >
                    {a.status}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-pacific-600">{a.focus}</p>
                <p className="mt-3 text-slate-600">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Principles */}
      <section className="bg-pacific-900 text-white">
        <Container className="py-16">
          <h2 className="text-3xl font-semibold tracking-tight">Respectful by design</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {principles.map((p) => (
              <div key={p.title}>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-pacific-100">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-sm text-pacific-100">
            Read how our texting program works on the <Link href="/sms" className="underline">SMS Program page</Link>.
          </p>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing">
        <Container className="grid gap-10 py-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">Simple pricing</h2>
            <p className="mt-4 text-lg text-slate-600">
              <span className="font-semibold text-ink">${pricing.baseMonthly}/month</span> plus{" "}
              <span className="font-semibold text-ink">${pricing.perUnitMonthly} per unit</span> under management.
            </p>
            <ul className="mt-6 space-y-2 text-slate-600">
              <li>Every agent included as it becomes available</li>
              <li>Unlimited missions across all of your properties</li>
              <li>Mission reports by email and a full timeline in the dashboard</li>
            </ul>
            <a
              href={`mailto:${site.salesEmail}?subject=Sutro%20Pacific%20demo%20request`}
              className="mt-8 inline-block rounded-full bg-pacific-600 px-6 py-3 text-sm font-semibold text-white hover:bg-pacific-700"
            >
              Request a demo
            </a>
          </div>
          <PricingTable />
        </Container>
      </section>
    </>
  );
}

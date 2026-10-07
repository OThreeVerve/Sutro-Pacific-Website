import type { Bubble } from "@/components/PhoneMockup";

// Animated hero demo on the home page (fictional company and people).
// "thread" picks the window: "alex" (maintenance tech) or "samantha" (admin / approver).
export type ScriptStep = {
  thread: "alex" | "samantha";
  from: "agent" | "person";
  text: string;
  photo?: string; // image path under /public
};

export const heroScript: ScriptStep[] = [
  { thread: "alex", from: "agent", text: "Hi Alex, urgent work order at The Grove, Unit 5: kitchen sink leaking under the cabinet. Can you head over now?" },
  { thread: "alex", from: "person", text: "On my way" },
  { thread: "alex", from: "agent", text: "Thanks! Send a photo when you're there." },
  { thread: "alex", from: "person", text: "Leak stopped. Need a part that might be expensive, somewhere around $200. Can you check with Samantha first?", photo: "/demo/leak.jpg" },
  { thread: "alex", from: "agent", text: "Let me get her approval and I'll get back to you here shortly." },
  { thread: "samantha", from: "agent", text: "Alex is on-site at The Grove, Unit 5 and is requesting a $200 charge to fix an emergency plumbing leak. Do I have your approval?" },
  { thread: "samantha", from: "person", text: "Yes, I approve." },
  { thread: "samantha", from: "agent", text: "Thanks Samantha, I'll let Alex know." },
  { thread: "alex", from: "agent", text: "You have Samantha's approval for the $200 part. Go ahead, and check in with me once the work is done." },
  { thread: "alex", from: "person", text: "All fixed", photo: "/demo/fixed.jpg" },
  { thread: "alex", from: "agent", text: "Great work. Sent to Samantha to close out." },
  { thread: "samantha", from: "agent", text: "The Grove Unit 5 leak is fixed. Photos are attached and it's ready for you to close out." },
];

// Opt-in flow shown on the SMS Program page (fictional company and people).
export const optInConversation: Bubble[] = [
  {
    from: "agent",
    text: "Hi Alex, this is Sutro, the team assistant for Strive Inc. I'll text you about work orders during your work hours. Msg frequency varies. Msg & data rates may apply. Reply YES to opt in, HELP for help, STOP to opt out.",
  },
  { from: "person", text: "YES" },
  {
    from: "agent",
    text: "Thanks Alex, you're all set. I'll only text during your work hours. Tip: on more than one job, start with the property and unit, like 'Grove 4 done'. Reply STOP anytime to opt out.",
  },
];

export const agents = [
  {
    name: "Sutro",
    focus: "Work orders and unit turns",
    status: "Available now",
    body: "Gets the right person moving on every work order, collects photos and approvals, and follows up until the job is closed. Coordinates move-outs and make-ready turns so units get back on the market faster.",
  },
  {
    name: "Xena",
    focus: "Leads to leases",
    status: "Coming soon",
    body: "Keeps your leasing team on top of tours, applications and follow-ups, so vacant units lease faster.",
  },
  {
    name: "Cash",
    focus: "Rent collection follow-through",
    status: "Coming soon",
    body: "Helps your property manager work through outstanding balances each month with a clear plan for every account.",
  },
  {
    name: "Wilbur",
    focus: "Lease renewals",
    status: "Coming soon",
    body: "Looks ahead at upcoming lease expirations and keeps renewals moving before residents go month-to-month.",
  },
];

// Work order completion comparison on the home page.
// Benchmark: 3.88 days (~93 hours) from creation to completion, 2023–2024 AppWork data reported by the
// National Apartment Association (naahq.org/node/6438).
// Keep sutroMeasured = false until the 4-hour figure comes from real, measured work orders. Then set it
// to true and fill in sutroSample (e.g., "Measured across 412 work orders at 6 properties, Jan–Mar 2027.").
export const completionStats = {
  benchmarkHours: 93,
  benchmarkDays: 3.9,
  sutroHours: 4,
  sutroMeasured: false,
  sutroSample: "",
};

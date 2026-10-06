import type { Bubble } from "@/components/PhoneMockup";

// Example conversation shown on the home page (fictional company and people).
export const workOrderConversation: Bubble[] = [
  { from: "agent", text: "Hi Alex, urgent work order at The Grove, Unit 5: kitchen sink leaking under the cabinet. Can you head over now?" },
  { from: "person", text: "On my way" },
  { from: "agent", text: "Thanks! Send a photo when you're there." },
  { from: "person", text: "Leak stopped. Need a part, about $85", note: "[photo]" },
  { from: "agent", text: "That's within Strive's $200 auto-approve limit, go ahead. I'll check in at 1:30." },
  { from: "person", text: "All fixed", note: "[photo]" },
  { from: "agent", text: "Great work. Sent to Samantha to close out." },
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

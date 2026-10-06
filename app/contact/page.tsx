import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a demo of Sutro Pacific or get help with the Sutro Pacific Team Assistant.",
};

const cards = [
  {
    title: "Request a demo",
    body: "See how an agent runs a work order from start to finish with your own team.",
    email: site.salesEmail,
    subject: "Sutro Pacific demo request",
  },
  {
    title: "Support",
    body: "Questions about the service, your account, or text messages you received from one of our agents.",
    email: site.supportEmail,
    subject: "Sutro Pacific support",
  },
  {
    title: "Privacy requests",
    body: "Ask to access, correct or delete your information.",
    email: site.privacyEmail,
    subject: "Privacy request",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="Talk to us" intro="We usually reply within one business day." />
      <Container className="py-14">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="flex flex-col rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold">{c.title}</h2>
              <p className="mt-2 flex-1 text-slate-600">{c.body}</p>
              <a
                href={`mailto:${c.email}?subject=${encodeURIComponent(c.subject)}`}
                className="mt-6 font-semibold text-pacific-600 hover:text-pacific-700"
              >
                {c.email}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-slate-50 p-6 text-sm text-slate-600">
          <p className="font-semibold text-ink">Received a text from one of our agents?</p>
          <p className="mt-2">
            Reply HELP for help or STOP to opt out at any time. Learn more on our <Link href="/sms" className="text-pacific-600 underline">SMS Program page</Link>.
          </p>
          <p className="mt-6 font-semibold text-ink">Company</p>
          <p className="mt-2">
            {site.brand} is a service of {site.legalName}, a {site.legalState} limited liability company.
            <br />
            {site.mailingAddress}
          </p>
        </div>
      </Container>
    </>
  );
}

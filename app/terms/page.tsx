import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "SMS terms for the Sutro Pacific Team Assistant and terms of service for client companies.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" intro={`Effective ${site.effectiveDate}`} />
      <Container className="max-w-3xl py-14">
        <div className="prose-legal">
          <p>
            These Terms &amp; Conditions are provided by {site.legalName}, doing business as {site.brand} (&quot;
            {site.brand},&quot; &quot;we,&quot; &quot;us&quot;). Part A applies to anyone who receives text messages from
            our program. Part B applies to companies that subscribe to the Service.
          </p>

          <h2>Part A. SMS Terms</h2>

          <h3>1. Program description</h3>
          <p>
            The {site.programName} sends operational text messages to employees and vendors of property management
            companies that use {site.brand} (&quot;client companies&quot;). Messages are about assigned work, such as work
            orders and unit turns: new requests, status check-ins, requests for photos, approvals and completion notices.
            The program is not used for marketing.
          </p>

          <h3>2. Opting in</h3>
          <p>
            You join the program when a client company you work with confirms that you agreed to receive these messages and
            you reply YES (or START) to our welcome message. Consent is not a condition of employment or of doing business
            with any client company.
          </p>

          <h3>3. Message frequency and cost</h3>
          <p>
            Message frequency varies based on the work assigned to you. Message and data rates may apply. Routine messages
            are sent only during your scheduled work hours and never before 8:00 AM or after 8:00 PM local time, except
            urgent messages to people who have agreed to be emergency contacts.
          </p>

          <h3>4. Opting out</h3>
          <p>
            Reply STOP to any message to opt out. You may also reply STOPALL, UNSUBSCRIBE, CANCEL, END, QUIT, REVOKE or OPT
            OUT, or tell us in your own words. You will receive one confirmation, and then no further messages. Opting out
            applies to all {site.brand} agents for that client company. Reply START to rejoin.
          </p>

          <h3>5. Help</h3>
          <p>
            Reply HELP to any message, or contact <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
          </p>

          <h3>6. Carriers and delivery</h3>
          <p>
            Mobile carriers are not liable for delayed or undelivered messages. Delivery depends on your carrier and device
            and is not guaranteed.
          </p>

          <h3>7. Privacy</h3>
          <p>
            Our <Link href="/privacy">Privacy Policy</Link> explains how we handle your information. We do not share text
            messaging opt-in data or consent with third parties, and we do not share mobile information with third parties
            or affiliates for marketing or promotional purposes.
          </p>

          <h3>8. Eligibility</h3>
          <p>You must be at least 18 years old and the account holder or authorized user of the mobile number you provide.</p>

          <h2>Part B. Terms of Service for client companies</h2>

          <h3>9. The Service</h3>
          <p>
            {site.brand} provides software, including AI agents, that coordinates tasks with a client company&apos;s team by
            text message and records progress in a dashboard. We may improve or change the Service over time. Some agents
            may be in development or offered as previews.
          </p>

          <h3>10. Accounts</h3>
          <p>
            You are responsible for your administrators&apos; activity and for keeping login credentials secure. Information
            you provide must be accurate, including business details used to register your messaging numbers with carriers.
          </p>

          <h3>11. Your messaging responsibilities</h3>
          <ul>
            <li>Add only team members and vendors who have agreed to receive operational text messages, and keep their contact details and work schedules accurate.</li>
            <li>Do not make consent a condition of employment, and coordinate another way with anyone who opts out.</li>
            <li>Do not use the Service to message residents, prospects or the public, or to send marketing.</li>
            <li>Set spending limits, approvers and other policies in the dashboard. The agents follow these settings; they do not make spending or business decisions for you.</li>
            <li>Comply with laws that apply to your business, including employment, privacy and fair housing laws.</li>
          </ul>

          <h3>12. Fees</h3>
          <p>
            Subscription fees are $100 per month plus $4 per unit under management, unless your order form says otherwise.
            Units are counted on the billing date. Fees are billed monthly in advance and are non-refundable except where
            required by law. We may change fees with at least 30 days&apos; notice.
          </p>

          <h3>13. Your data</h3>
          <p>
            You own the data you provide and the records created for you. You grant us the rights needed to host and process
            it to provide the Service, as described in our <Link href="/privacy">Privacy Policy</Link>. You may export your
            data while your account is active and for 30 days after it ends.
          </p>

          <h3>14. AI-generated content</h3>
          <p>
            Agents generate messages and summaries automatically. They can make mistakes. Review important information, such
            as costs, dates and completion status, before relying on it. The Service does not provide legal, financial,
            tenant screening or professional advice.
          </p>

          <h3>15. Acceptable use</h3>
          <p>
            Do not use the Service to send unlawful, harassing, deceptive or unsolicited messages; to interfere with the
            Service; or to access other customers&apos; data. We may suspend use that violates these Terms or carrier rules.
          </p>

          <h3>16. Disclaimers</h3>
          <p>
            The Service is provided &quot;as is&quot; and &quot;as available.&quot; To the extent permitted by law, we disclaim
            implied warranties of merchantability, fitness for a particular purpose and non-infringement. We do not guarantee
            that messages will be delivered or that the Service will be uninterrupted. Do not rely on the Service as your
            only means of handling emergencies; call emergency services when anyone may be in danger.
          </p>

          <h3>17. Limitation of liability</h3>
          <p>
            To the extent permitted by law, neither party is liable for indirect, incidental, special, consequential or
            punitive damages, or lost profits, and our total liability for any claim is limited to the fees you paid us in
            the 12 months before the claim arose.
          </p>

          <h3>18. Term and termination</h3>
          <p>
            Subscriptions continue month to month until cancelled. You may cancel at any time, effective at the end of the
            current billing period. We may terminate for material breach that is not cured within 15 days of notice.
          </p>

          <h3>19. Governing law</h3>
          <p>
            These Terms are governed by the laws of the State of {site.legalState}, without regard to its conflict-of-laws
            rules. Disputes will be resolved in the state or federal courts located in {site.legalState}.
          </p>

          <h3>20. Changes</h3>
          <p>
            We may update these Terms. We will post changes here with a new effective date and notify client companies of
            material changes. Continued use after changes take effect means you accept them.
          </p>

          <h3>21. Contact</h3>
          <p>
            {site.legalName} (dba {site.brand})<br />
            {site.mailingAddress}<br />
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>
          </p>
        </div>
      </Container>
    </>
  );
}

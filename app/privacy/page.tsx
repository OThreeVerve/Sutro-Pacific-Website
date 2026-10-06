import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Sutro Pacific collects, uses and protects information, including text messaging data.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" intro={`Effective ${site.effectiveDate}`} />
      <Container className="max-w-3xl py-14">
        <div className="prose-legal">
          <p>
            This Privacy Policy explains how {site.legalName}, doing business as {site.brand} (&quot;{site.brand},&quot;
            &quot;we,&quot; &quot;us&quot;), collects, uses, shares and protects information through our website at{" "}
            {site.domain}, our dashboard, and our text messaging program, the {site.programName} (together, the
            &quot;Service&quot;).
          </p>

          <h2>1. Who this policy covers</h2>
          <ul>
            <li><strong>Client companies</strong> that subscribe to the Service, and their administrators who use the dashboard.</li>
            <li><strong>Team members and vendors</strong> of client companies who receive text messages from our agents.</li>
            <li><strong>Website visitors</strong> and people who contact us.</li>
          </ul>
          <p>
            When a client company gives us information about its own team, properties or residents, we process that
            information on the client company&apos;s behalf and under its instructions, as its service provider.
          </p>

          <h2>2. Information we collect</h2>
          <ul>
            <li><strong>Account and business information:</strong> company name, business address, administrator names, email addresses, phone numbers and billing details.</li>
            <li><strong>Team member and vendor information</strong> provided by client companies: name, mobile phone number, email address, role, the properties they work on, work schedule and time zone.</li>
            <li><strong>Text message content:</strong> messages, photos and other attachments exchanged with our agents, with dates, times and delivery status.</li>
            <li><strong>Consent records:</strong> when and how a person opted in to or out of text messages.</li>
            <li><strong>Property information</strong> provided by client companies: property and unit details, work order details and, where needed, resident names associated with a unit. We never use resident information to contact residents.</li>
            <li><strong>Website and usage information:</strong> basic technical data such as browser type, pages visited and IP address, collected through standard server logs and essential cookies.</li>
          </ul>

          <h2>3. How we use information</h2>
          <ul>
            <li>To provide the Service: sending and receiving operational text messages, coordinating tasks, recording progress and producing reports for client companies.</li>
            <li>To honor consent choices, including opt-outs, and to keep records of them.</li>
            <li>To provide support, maintain security, prevent misuse, and improve the Service.</li>
            <li>To bill client companies and communicate with them about their accounts.</li>
            <li>To comply with legal obligations.</li>
          </ul>
          <p>We do not use text messaging information for marketing, and we do not sell personal information.</p>

          <h2>4. Automated processing</h2>
          <p>
            Our agents use artificial intelligence services to understand replies to text messages and to word the
            messages they send. These providers process message content only to deliver the Service to us, under
            agreements that do not permit them to use it to train their models or for their own purposes. Decisions such as
            spending approvals are made by people at the client company, not by our agents.
          </p>

          <h2>5. How we share information</h2>
          <p>We share information only as needed to run the Service:</p>
          <ul>
            <li><strong>With the client company</strong> the information relates to (for example, a work order&apos;s message history and photos).</li>
            <li>
              <strong>With service providers</strong> who process information on our behalf, such as our text messaging
              provider, cloud hosting and database providers, artificial intelligence providers, email delivery provider and
              payment processor. They may use the information only to provide services to us.
            </li>
            <li><strong>For legal reasons</strong>, when required by law or to protect rights, safety and security.</li>
            <li><strong>In a business transfer</strong>, such as a merger or acquisition, subject to this policy.</li>
          </ul>
          <p>
            <strong>
              No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
              All the above categories exclude text messaging originator opt-in data and consent; this information won&apos;t
              be shared with any third parties.
            </strong>
          </p>

          <h2>6. Text messaging</h2>
          <p>
            Our agents text only people who have opted in, and only about their work for a client company. You can reply
            STOP to any message to opt out, or HELP for help. Message frequency varies, and message and data rates may
            apply. See our <Link href="/sms">SMS Program page</Link> and <Link href="/terms">Terms &amp; Conditions</Link>.
          </p>

          <h2>7. Data retention</h2>
          <p>
            We keep message content and attachments for as long as the client company&apos;s account is active and for up
            to 24 months after a task closes, unless the client company sets a different period or the law requires
            otherwise. We keep consent and opt-out records for at least four years so we can show that we honored them.
            When information is no longer needed, we delete or de-identify it.
          </p>

          <h2>8. Security</h2>
          <p>
            We use administrative, technical and physical safeguards, including encryption in transit and at rest, access
            controls that separate each client company&apos;s data, and audit logs. No system is perfectly secure, but we work
            to protect the information we handle.
          </p>

          <h2>9. Your choices and rights</h2>
          <ul>
            <li><strong>Text messages:</strong> reply STOP to opt out at any time, or START to resume.</li>
            <li>
              <strong>Access, correction and deletion:</strong> you may ask to see, correct or delete your personal
              information. If your information was provided by a client company, we may refer your request to that company
              and act on its instructions.
            </li>
            <li>
              <strong>California residents:</strong> depending on the circumstances, California law may give you rights to
              know, delete and correct personal information, to limit the use of sensitive personal information, and not to
              be discriminated against for exercising these rights. We do not sell or share personal information for
              cross-context behavioral advertising.
            </li>
          </ul>
          <p>
            To make a request, email <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>. We will verify your
            request before acting on it.
          </p>

          <h2>10. Children</h2>
          <p>The Service is intended for businesses and is not directed to anyone under 18. We do not knowingly collect information from children.</p>

          <h2>11. Changes to this policy</h2>
          <p>
            We may update this policy from time to time. We will post the updated version here with a new effective date
            and, for material changes, notify client companies.
          </p>

          <h2>12. Contact us</h2>
          <p>
            {site.legalName} (dba {site.brand})<br />
            {site.mailingAddress}<br />
            <a href={`mailto:${site.privacyEmail}`}>{site.privacyEmail}</a>
          </p>
        </div>
      </Container>
    </>
  );
}

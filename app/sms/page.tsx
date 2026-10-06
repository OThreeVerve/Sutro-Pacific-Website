import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";
import { PhoneMockup } from "@/components/PhoneMockup";
import { optInConversation } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "SMS Program & Opt-In",
  description: "How the Sutro Pacific Team Assistant texting program works, how team members opt in, and how to opt out.",
};

export default function SmsProgramPage() {
  return (
    <>
      <PageHeader
        eyebrow="SMS Program"
        title="SMS Program & Opt-In"
        intro={`How the ${site.programName} texting program works, who receives messages, how people opt in, and how to stop messages at any time.`}
      />
      <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_380px]">
        <div className="prose-legal">
          <h2>Program overview</h2>
          <p>
            The {site.programName} is an operational text messaging program run by {site.brand}, a service of{" "}
            {site.legalName}. Property management companies (&quot;client companies&quot;) use {site.brand} to coordinate
            work with their own staff and vendors. Each message identifies the agent (for example, &quot;Sutro&quot;) and the
            client company it is sending for (for example, &quot;the team assistant for Strive Inc.&quot;).
          </p>
          <ul>
            <li><strong>Who receives messages:</strong> employees and vendors of client companies who have agreed to receive operational texts about their work.</li>
            <li><strong>Who does not:</strong> residents, prospects and the general public. We never text residents, and the program is never used for marketing.</li>
            <li><strong>What the messages are about:</strong> work orders, unit turns and related tasks, such as new job requests, status check-ins, requests for photos, spending approvals and completion notices.</li>
          </ul>

          <h2>How team members opt in</h2>
          <ul>
            <li>
              <strong>Step 1. The employer confirms consent.</strong> An administrator at the client company adds the team
              member or vendor in the {site.brand} dashboard and confirms that the person has agreed to receive
              operational text messages from the program.
            </li>
            <li>
              <strong>Step 2. A welcome text explains the program.</strong> The person receives one welcome message that names
              the client company, describes the messages, states that message frequency varies and that message and data
              rates may apply, and explains how to get help or opt out.
            </li>
            <li>
              <strong>Step 3. The person confirms by replying YES.</strong> No other messages are sent until the person
              replies YES (or START). If there is no reply, we send at most one reminder, then stop.
            </li>
          </ul>
          <p>
            <strong>Consent is voluntary.</strong> Agreeing to receive texts is not a condition of employment or of working
            with any client company. A person who opts out is never pressured through the program, and their employer is
            told to coordinate with them another way.
          </p>

          <h2>Message frequency</h2>
          <p>
            Message frequency varies with the amount of work assigned to you, typically a few messages per assigned task.
            Routine messages are sent only during your scheduled work hours and never before 8:00 AM or after 8:00 PM in
            your local time. People who have separately agreed to be emergency contacts may receive messages at other times
            about urgent issues such as active leaks.
          </p>

          <h2>Message and data rates</h2>
          <p>Message and data rates may apply, depending on your mobile plan.</p>

          <h2>How to opt out</h2>
          <p>
            Reply <strong>STOP</strong> to any message to stop receiving texts. You can also reply STOPALL, UNSUBSCRIBE,
            CANCEL, END, QUIT, REVOKE or OPT OUT, or simply tell us in your own words that you want the texts to stop. You
            will receive one confirmation message, and no further messages will be sent. Opting out of one agent stops
            messages from all {site.brand} agents for that client company. Reply <strong>START</strong> to resume.
          </p>

          <h2>How to get help</h2>
          <p>
            Reply <strong>HELP</strong> to any message, or email{" "}
            <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>.
          </p>

          <h2>Privacy</h2>
          <p>
            We do not sell, rent or share mobile phone numbers or text messaging opt-in data and consent with third parties
            or affiliates for their marketing or promotional purposes. Text messaging originator opt-in data and consent will
            not be shared with any third parties. See our <Link href="/privacy">Privacy Policy</Link> and{" "}
            <Link href="/terms">Terms &amp; Conditions</Link> for full details.
          </p>

          <h2>Carriers</h2>
          <p>Mobile carriers are not liable for delayed or undelivered messages.</p>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm font-semibold text-slate-600">What opting in looks like</p>
          <PhoneMockup title="Sutro · Strive Inc." messages={optInConversation} />
          <p className="text-xs text-slate-500">
            Example only. &quot;Strive Inc.&quot; and the people shown are fictional. Real messages name the client company
            you work with.
          </p>
        </aside>
      </Container>
    </>
  );
}

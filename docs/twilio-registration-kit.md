# Twilio Registration Kit: Sutro Pacific

What to enter in Twilio, in order, for **Sutro Pacific's own demo/test toll-free number**. Client numbers follow the same pattern later, using each client's details (see Technical Design, Section 4.8).

> **Before you start:** the website must be **live on its real domain**: Home, SMS Program, Privacy Policy and Terms pages reachable without a login. Replace the remaining placeholders in `lib/site.ts` (domain and emails) first. Twilio checks that the links work and that the business name matches.

---

## Step 1: Upgrade the account

Trial accounts can't complete toll-free verification. Click **Trial** / **Upgrade** in the console, add your business profile, address, payment method and a starting balance.

## Step 2: Business profile (Trust Hub → Compliance profile)

Twilio says business details must match your government registration exactly. Reviews take up to about 48 hours. Missing or wrong information is rejected immediately.

| Field | What to enter | Notes |
|---|---|---|
| First / last name | Chuck LoCascio | As on your government ID |
| Email, phone | Your business email and mobile | Twilio may contact you to confirm the business |
| Business title | e.g., Founder / Managing Member | Free text |
| Job position | Closest option (e.g., CEO or Director) | Dropdown |
| Business identity | **ISV Reseller or Partner** | You'll send messages for client companies |
| Legal business name | **O Three Verve LLC** | Exactly as on the IRS EIN letter and CA registration. **Not** "Sutro Pacific" |
| Business registration ID type | **EIN** | |
| Business registration number | **33-1760250** | Include the dash |
| Business industry | Technology (or Real Estate if Technology isn't offered) | |
| Company type | Limited Liability Corporation | |
| Business website URL | https://[your live domain] | Must load publicly. The footer states "Sutro Pacific is a service of O Three Verve LLC," which ties the brand to the legal name |
| Regions of operation | USA and Canada | |
| Business address | **606 Lake Street, San Francisco, CA 94118** | Must match the LLC's registration. Already set in `lib/site.ts` |
| Notification email | Your email | Status updates |

## Step 3: Buy the number

**Communications → Numbers & senders → Phone Numbers → Set up a new phone number.** Choose **Business**, search toll-free, select, **Purchase** ($2.15/month).

## Step 4: Toll-free verification

From the number: **Finish setting up your number → toll-free verification**, or the number's **Regulatory Information → Verify this toll free number**.

| Field | What to enter |
|---|---|
| Business / profile | The O Three Verve LLC profile from Step 2 |
| Use case(s) | **Account Notifications** (primary). Adding **Customer Care** is fine, since recipients reply in two-way conversations |
| Use case description (max 500 characters) | "Sutro Pacific (a service of O Three Verve LLC) sends operational texts to employees and vendors of property management companies to coordinate maintenance work orders: new job requests, status check-ins, photo requests, spending approvals and completion notices. Recipients are added by their employer and must reply YES to opt in. Two-way, no marketing. Residents are never texted. This number is for demos and testing with our own team." (438 characters) |
| Estimated monthly volume | 1,000 |
| Opt-in type | Via Text |
| Opt-in image / proof URL | https://[your domain]/sms (shows the full opt-in flow and the welcome message) |
| Privacy Policy URL | https://[your domain]/privacy |
| Terms & Conditions URL | https://[your domain]/terms |
| Opt-in confirmation message | "Thanks, you're all set. Sutro Pacific will only text during your work hours. Msg frequency varies. Msg & data rates may apply. Reply HELP for help, STOP to opt out." |
| Help message | "Sutro is the team assistant from Sutro Pacific (O Three Verve LLC). Help: support@[your domain]. Msg & data rates may apply. Reply STOP to opt out." |
| Opt-in keywords | YES, START |
| Sample messages | See below |

Track status: **Trust Hub → Registrations**. About 3 business days. If rejected, **Edit & resubmit** within 7 days.

## Sample messages (Work Order workflow)

Use 3–5 of these. Each names the brand; the first carries the full disclosures. For your demo number, the company is Sutro Pacific itself.

1. **Welcome / opt-in request**
   "Hi Alex, this is Sutro, the team assistant for Sutro Pacific. I'll text you about work orders during your work hours. Msg frequency varies. Msg & data rates may apply. Reply YES to opt in, HELP for help, STOP to opt out."
2. **New work order**
   "Sutro (Sutro Pacific): New urgent work order at The Grove, Unit 5: kitchen sink leaking under the cabinet. Can you head over now? Reply STOP to opt out."
3. **Check-in / photo request**
   "Sutro (Sutro Pacific): Checking in on The Grove Unit 5 leak. Is it fixed? Please reply with a photo of the repair."
4. **Spending approval (to owner)**
   "Sutro (Sutro Pacific): WO-5A, The Grove Unit 5. Alex needs $340 in parts to replace the sink trap. Reply APPROVE or DENY. Reply STOP to opt out."
5. **Completion**
   "Sutro (Sutro Pacific): Thanks Alex, the Unit 5 work order is complete and has been sent for review. Reply STOP to opt out."

For a client number, replace "Sutro Pacific" with the client's business name (e.g., "Sutro (Strive Inc.)").

## Pre-submission checklist

- [ ] Website live on the real domain; all four links load without a login
- [ ] Placeholders replaced in `lib/site.ts` (domain and emails; the mailing address is set)
- [ ] Support inbox working (Twilio and recipients may write to it)
- [ ] Legal name and address identical on the website, business profile and verification
- [ ] Privacy Policy contains the no-sharing sentence (it does, in section 5)
- [ ] Sample messages match the texts shown on the /sms page

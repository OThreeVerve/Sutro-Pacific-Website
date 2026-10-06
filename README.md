# Sutro Pacific website

Marketing and compliance site for Sutro Pacific (a service of O Three Verve LLC). Built with Next.js (App Router), React and Tailwind CSS v4.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: product, how it works, agents, pricing |
| `/sms` | SMS Program & Opt-In: the public opt-in proof page for Twilio toll-free verification |
| `/privacy` | Privacy Policy (includes Twilio's required no-sharing clause) |
| `/terms` | Terms & Conditions: SMS terms (Part A) and client terms of service (Part B) |
| `/contact` | Contact and company details |

## Run it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

Quick look without installing anything: open `index.html` in a browser. It's a static preview of the same five pages; the Next.js app is the source of truth.

## Before going live

1. Replace placeholders in `lib/site.ts` (domain, emails, mailing address). These must match what you submit to Twilio.
2. Have a California attorney review `/privacy` and `/terms`. They are drafts.
3. Deploy (e.g., Vercel), connect the domain, and confirm every page loads publicly.
4. Follow `docs/twilio-registration-kit.md`.

## Where things live

- `lib/site.ts`: business details, navigation, pricing
- `lib/content.ts`: agent descriptions and the example text conversations
- `components/`: header, footer, phone mockup, pricing table
- `app/`: one folder per page
# Sutro-Pacific-Website

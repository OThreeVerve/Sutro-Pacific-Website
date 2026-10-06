// Single source for business details used across the site.
// Items in [BRACKETS] or marked PLACEHOLDER must be replaced before going live
// and must match what you submit to Twilio (legal name, address, website, emails).

export const site = {
  brand: "Sutro Pacific",
  legalName: "O Three Verve LLC",
  legalState: "California",
  domain: "sutropacific.com", // PLACEHOLDER
  url: "https://sutropacific.com", // PLACEHOLDER
  salesEmail: "hello@sutropacific.com", // PLACEHOLDER
  supportEmail: "support@sutropacific.com", // PLACEHOLDER
  privacyEmail: "privacy@sutropacific.com", // PLACEHOLDER
  mailingAddress: "606 Lake Street, San Francisco, CA 94118", // must match the address on your Twilio business profile
  effectiveDate: "October 6, 2026",
  programName: "Sutro Pacific Team Assistant",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/sms", label: "SMS Program" },
  { href: "/contact", label: "Contact" },
];

export const pricing = {
  baseMonthly: 100,
  perUnitMonthly: 4,
  examples: [10, 50, 100, 150, 200, 250],
};

export function monthlyPrice(units: number): number {
  return pricing.baseMonthly + pricing.perUnitMonthly * units;
}

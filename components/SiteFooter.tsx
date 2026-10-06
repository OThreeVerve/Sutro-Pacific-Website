import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50">
      <Container className="grid gap-8 py-12 md:grid-cols-3">
        <div>
          <Logo className="text-ink" />
          <p className="mt-3 text-sm text-slate-600">
            AI agents that keep property teams on track, by text.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            {site.brand} is a service of {site.legalName}, a {site.legalState} limited liability company.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-ink">Company</p>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li><Link href="/sms" className="hover:text-ink">SMS Program &amp; Opt-In</Link></li>
            <li><Link href="/contact" className="hover:text-ink">Contact</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-ink">Legal</p>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li><Link href="/privacy" className="hover:text-ink">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-ink">Terms &amp; Conditions</Link></li>
            <li><a href={`mailto:${site.supportEmail}`} className="hover:text-ink">{site.supportEmail}</a></li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © 2026 {site.legalName}. All rights reserved.
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="Sutro Pacific home">
          <Logo className="text-ink" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink">
              {item.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.salesEmail}?subject=Sutro%20Pacific%20demo%20request`}
            className="rounded-full bg-pacific-600 px-4 py-2 text-white hover:bg-pacific-700"
          >
            Request a demo
          </a>
        </nav>

        {/* Mobile menu without client-side JavaScript */}
        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-md px-3 py-2 text-sm font-medium text-slate-700 ring-1 ring-slate-200">
            Menu
          </summary>
          <div className="absolute right-0 mt-2 w-48 rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50">
                {item.label}
              </Link>
            ))}
            <Link href="/privacy" className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50">
              Privacy Policy
            </Link>
            <Link href="/terms" className="block rounded-md px-3 py-2 text-sm hover:bg-slate-50">
              Terms
            </Link>
          </div>
        </details>
      </Container>
    </header>
  );
}

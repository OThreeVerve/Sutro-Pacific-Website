import { Container } from "./Container";

export function PageHeader({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <section className="border-b border-slate-200 bg-pacific-50">
      <Container className="py-14">
        {eyebrow ? <p className="text-sm font-semibold uppercase tracking-wider text-pacific-600">{eyebrow}</p> : null}
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h1>
        {intro ? <p className="mt-4 max-w-3xl text-lg text-slate-600">{intro}</p> : null}
      </Container>
    </section>
  );
}

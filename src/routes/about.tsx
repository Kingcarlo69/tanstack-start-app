import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Prime Web Studio — Cape Town Web Design Agency" },
      { name: "description", content: "Prime Web Studio helps South African businesses grow online with high-performance websites and proven SEO." },
      { property: "og:title", content: "About — Prime Web Studio" },
      { property: "og:description", content: "Cape Town agency focused on real results, not design hype." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-navy-foreground">
        <div className="container-page py-20 md:py-24 text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-glow uppercase">About</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">We help South African businesses grow online.</h1>
        </div>
      </section>

      <section className="container-page py-20 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl">Real results over design hype.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Prime Web Studio is a small, focused web design agency based in Cape Town. We work with local businesses, service providers and ambitious brands across South Africa who need a website that actually pulls its weight.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Pretty websites are easy. Websites that rank, load fast on mobile data, and turn visitors into customers — that’s our craft. Every project is built around your business goals, not our portfolio.
          </p>
          <Link to="/contact" className="mt-6 inline-flex rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant">
            Work with us
          </Link>
        </div>

        <div className="grid gap-4">
          {[
            { t: "Local-first", d: "We understand South African buyers, search habits and payment expectations." },
            { t: "Performance obsessed", d: "Sub-2s loads on mobile, optimized for Cloudflare’s global edge network." },
            { t: "SEO baked in", d: "Every page is structured for Google from the first line of code." },
            { t: "Transparent pricing", d: "Clear quotes, no surprise invoices, no lock-in contracts." },
          ].map((b) => (
            <div key={b.t} className="rounded-xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-bold">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="container-page py-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            { n: "50+", l: "Websites launched" },
            { n: "120%", l: "Avg. traffic growth" },
            { n: "24h", l: "Quote turnaround" },
            { n: "5★", l: "Client satisfaction" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl text-primary">{s.n}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

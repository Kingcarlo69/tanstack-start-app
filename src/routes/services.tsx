import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Web Design, SEO & Google Business — Prime Web Studio Cape Town" },
      { name: "description", content: "Web design, SEO, Google Business ranking and e-commerce services for Cape Town businesses. Outcome-driven and conversion-focused." },
      { property: "og:title", content: "Services — Prime Web Studio Cape Town" },
      { property: "og:description", content: "Outcome-driven web design and SEO for South African businesses." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          provider: { "@type": "LocalBusiness", name: "Prime Web Studio" },
          areaServed: "Cape Town",
          serviceType: ["Web Design", "SEO", "Google Business Optimization", "E-commerce"],
        }),
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    title: "Web Design & Development",
    outcome: "More leads, calls and sign-ups from visitors that actually convert.",
    points: ["Unique design tailored to your brand", "Mobile-first & lightning fast", "Conversion-focused copy & layout", "Built on modern, secure tech"],
  },
  {
    title: "SEO Optimization",
    outcome: "Rank on page one of Google for the keywords that bring real customers.",
    points: ["Local Cape Town keyword targeting", "On-page & technical SEO", "Content & blog strategy", "Monthly performance reports"],
  },
  {
    title: "Google Business Profile Ranking",
    outcome: "Show up in the Google Map Pack so ‘near me’ searches call you first.",
    points: ["Profile setup & optimization", "Local citations & directories", "Review generation strategy", "Map Pack ranking"],
  },
  {
    title: "E-commerce Development",
    outcome: "An online store designed to sell, scale and ship across South Africa.",
    points: ["Shopify, WooCommerce or custom", "Local payment gateways", "SEO-friendly product pages", "Fast checkout that converts"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero text-navy-foreground">
        <div className="container-page py-20 md:py-24 text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-glow uppercase">What we do</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Web design and SEO services that drive results</h1>
          <p className="mt-4 max-w-2xl mx-auto text-navy-foreground/80">
            We help South African businesses get found on Google, win trust online, and turn website traffic into paying customers.
          </p>
        </div>
      </section>

      <section className="container-page py-20 grid gap-8 md:grid-cols-2">
        {services.map((s, i) => (
          <article key={s.title} className="rounded-2xl border border-border bg-card p-8 shadow-card hover:shadow-elegant transition">
            <div className="font-display text-5xl text-primary/20">0{i + 1}</div>
            <h2 className="mt-2 text-2xl">{s.title}</h2>
            <p className="mt-2 text-primary font-semibold">{s.outcome}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2"><span className="text-primary">✓</span>{p}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
              Get a quote →
            </Link>
          </article>
        ))}
      </section>

      <section className="container-page pb-20">
        <div className="rounded-2xl bg-gradient-hero text-navy-foreground p-10 text-center">
          <h2 className="text-3xl">Not sure what you need?</h2>
          <p className="mt-2 text-navy-foreground/80">We’ll audit your site or Google Business Profile for free and tell you exactly what’s holding you back.</p>
          <Link to="/contact" className="mt-6 inline-flex rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant">Request a Free Audit</Link>
        </div>
      </section>
    </>
  );
}

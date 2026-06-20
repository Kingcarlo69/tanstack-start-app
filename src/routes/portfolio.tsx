import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Cape Town Web Design Projects — Prime Web Studio" },
      { name: "description", content: "Recent web design, SEO and e-commerce projects for South African businesses. Real results, real clients." },
      { property: "og:title", content: "Portfolio — Prime Web Studio" },
      { property: "og:description", content: "Cape Town web design and SEO projects with measurable outcomes." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { biz: "Cape Auto Repairs", type: "Local Service", outcome: "3x more booked jobs in 60 days", color: "from-blue-500 to-cyan-400" },
  { biz: "Boutique Stays CT", type: "Hospitality", outcome: "2x bookings, +180% organic traffic", color: "from-indigo-500 to-blue-400" },
  { biz: "Lerato Cleaning", type: "Home Services", outcome: "Top 3 in Google Map Pack", color: "from-sky-500 to-blue-600" },
  { biz: "Khanya Boutique", type: "E-commerce", outcome: "+240% online sales YoY", color: "from-blue-600 to-indigo-500" },
  { biz: "Table Mountain Tours", type: "Tourism", outcome: "Page 1 for ‘Cape Town tours’", color: "from-cyan-500 to-blue-500" },
  { biz: "Atlas Legal", type: "Professional Services", outcome: "5x qualified consultations/mo", color: "from-blue-500 to-blue-700" },
];

function PortfolioPage() {
  return (
    <>
      <section className="bg-gradient-hero text-navy-foreground">
        <div className="container-page py-20 md:py-24 text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-glow uppercase">Our Work</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Real businesses. Real results.</h1>
          <p className="mt-4 max-w-2xl mx-auto text-navy-foreground/80">
            A selection of recent projects across Cape Town and South Africa.
          </p>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.biz} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:-translate-y-1 hover:shadow-elegant transition">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.color} relative overflow-hidden`}>
                <div className="absolute inset-0 [background:radial-gradient(400px_200px_at_30%_30%,rgba(255,255,255,0.3),transparent)]" />
                <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/90 backdrop-blur p-3">
                  <div className="h-2 w-2/3 rounded bg-navy/20 mb-2" />
                  <div className="h-2 w-1/2 rounded bg-navy/10" />
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold tracking-widest text-primary uppercase">{p.type}</div>
                <h3 className="mt-1 text-lg font-bold">{p.biz}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.outcome}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/contact" className="inline-flex rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant">
            Start your project
          </Link>
        </div>
      </section>
    </>
  );
}

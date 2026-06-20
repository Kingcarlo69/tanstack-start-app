import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Web Studio — Web Design & SEO across South Africa" },
      { name: "description", content: "An independent web design studio from Cape Town. We build fast, distinctive websites that rank on Google and convert visitors — for ambitious brands across South Africa." },
      { property: "og:title", content: "Prime Web Studio — Web Design South Africa" },
      { property: "og:description", content: "Fast, distinctive websites for ambitious South African brands." },
    ],
  }),
  component: HomePage,
});

const ease = [0.22, 1, 0.36, 1] as const;

function HomePage() {
  return (
    <>
      <Hero />
      <TickerBand />
      <Manifesto />
      <Services />
      <Showcase />
      <Process />
      <Stats />
      <Testimonials />
      <FinalCta />
    </>
  );
}

/* ============ LIVE CLOCK ============ */
function useCapeTownTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const fmt = new Intl.DateTimeFormat("en-ZA", {
        timeZone: "Africa/Johannesburg",
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false,
      }).format(now);
      setTime(fmt);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

/* ============ HERO ============ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const time = useCapeTownTime();

  // Pointer-tracking glow
  const mx = useMotionValue(50);
  const my = useMotionValue(30);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set(((e.clientX - r.left) / r.width) * 100);
        my.set(((e.clientY - r.top) / r.height) * 100);
      }}
      className="relative overflow-hidden min-h-[100svh] flex flex-col"
    >
      {/* Pointer glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background: useTransform(
            [sx, sy] as any,
            ([x, y]: any) =>
              `radial-gradient(600px circle at ${x}% ${y}%, oklch(0.55 0.22 258 / 0.35), transparent 60%)`
          ),
        }}
      />
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div className="orb -top-40 -left-40 h-[560px] w-[560px] bg-primary/25 animate-blob" aria-hidden />
      <div className="orb top-1/2 -right-40 h-[600px] w-[600px] bg-primary-glow/20 animate-blob [animation-delay:-7s]" aria-hidden />

      {/* Top utility row */}
      <div className="relative container-page pt-6 flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span>Cape Town · 33.92°S 18.42°E</span>
        </div>
        <div className="hidden md:block tabular-nums">{time} SAST</div>
        <div className="hidden md:block">© MMXXVI · Studio №01</div>
      </div>

      {/* Massive editorial headline */}
      <motion.div style={{ y }} className="relative container-page flex-1 flex flex-col justify-center pt-16 pb-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="text-xs font-mono uppercase tracking-[0.3em] text-primary"
        >
          [ Independent Web Design Studio · est. Cape Town ]
        </motion.p>

        <h1 className="display-tight mt-8 text-[clamp(3.2rem,11vw,11.5rem)] leading-[0.85]">
          <SplitLine delay={0.1}>
            <span className="text-glow">Websites that</span>
          </SplitLine>
          <SplitLine delay={0.25}>
            <span className="italic font-light text-gradient">don't look</span>{" "}
            <span className="text-glow">like</span>
          </SplitLine>
          <SplitLine delay={0.4}>
            <span className="text-glow">everyone</span>{" "}
            <span className="relative inline-block">
              <span className="text-gradient">else's.</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.1, delay: 1.1, ease }}
                className="absolute left-0 right-0 -bottom-2 h-[6px] origin-left rounded-full bg-gradient-blue"
              />
            </span>
          </SplitLine>
        </h1>

        <div className="mt-12 grid md:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease }}
            className="md:col-span-5"
          >
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              We're a small studio in Cape Town building <span className="text-foreground">fast, distinctive websites</span> for ambitious brands across South Africa — engineered to rank, designed to be remembered.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.05, ease }}
            className="md:col-span-4 md:col-start-9 flex flex-wrap gap-3"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-blue px-7 py-4 text-sm font-semibold text-white shadow-glow hover:shadow-elegant transition-all"
            >
              Start a project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full glass px-7 py-4 text-sm font-semibold hover:border-primary/50 transition"
            >
              See the work
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom rail */}
      <div className="relative container-page pb-8 grid md:grid-cols-4 gap-6 border-t border-border pt-6 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <Detail k="01" v="Web Design" />
        <Detail k="02" v="SEO & Local" />
        <Detail k="03" v="E-commerce" />
        <Detail k="04" v="Brand Systems" />
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-muted-foreground">
        <span>Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}

function SplitLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1, delay, ease }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function Detail({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-primary">{k}</span>
      <span className="text-foreground/80 normal-case tracking-normal font-sans text-sm">{v}</span>
    </div>
  );
}

/* ============ TICKER BAND ============ */
function TickerBand() {
  const items = [
    "Cape Town", "Johannesburg", "Durban", "Pretoria", "Stellenbosch",
    "Sandton", "Port Elizabeth", "Bloemfontein", "Centurion", "Paarl",
  ];
  const row = [...items, ...items, ...items];
  return (
    <section className="relative border-y border-border bg-background overflow-hidden py-10">
      <div className="flex gap-14 whitespace-nowrap animate-marquee will-change-transform">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-14 font-display font-bold text-5xl md:text-7xl tracking-tighter">
            <span className={i % 2 === 0 ? "text-foreground" : "text-foreground/15 italic font-light"}>
              {t}
            </span>
            <span className="text-primary text-3xl">✺</span>
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent" />
    </section>
  );
}

/* ============ MANIFESTO (asymmetric editorial) ============ */
function Manifesto() {
  return (
    <section className="container-page py-28 md:py-40 relative">
      <div className="grid md:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="md:col-span-3"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">§ 01 — Manifesto</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            For ambitious SA brands
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="md:col-span-9"
        >
          <p className="display-tight text-3xl md:text-5xl lg:text-6xl text-glow leading-[1.05]">
            We don't make <span className="italic font-light text-gradient">templates</span>. We design <span className="italic font-light text-gradient">tools</span> — websites that earn attention, hold it, and turn it into bookings, calls and orders. Every pixel pulls weight. Every page is engineered to load in under <span className="text-primary not-italic font-bold">2 seconds</span>.
          </p>
          <div className="mt-12 grid sm:grid-cols-3 gap-5">
            {[
              { k: "Performance-first", v: "Lightning fast on every device." },
              { k: "SEO-first", v: "Engineered to rank locally." },
              { k: "Edge-deployed", v: "Hosted on Cloudflare's network." },
            ].map((b) => (
              <div key={b.k} className="border-t border-border pt-5">
                <div className="text-sm font-semibold">{b.k}</div>
                <div className="mt-1 text-sm text-muted-foreground">{b.v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============ SERVICES ============ */
const services = [
  { n: "01", title: "Web Design & Development", desc: "Websites that load fast, look distinctive, and convert visitors into customers.", tags: ["React", "TanStack", "Edge"] },
  { n: "02", title: "SEO & Local Ranking", desc: "Win the keywords that bring real customers — across South Africa, not just your city.", tags: ["Technical SEO", "Local", "Schema"] },
  { n: "03", title: "Google Business Profile", desc: "Dominate the Map Pack and turn 'near me' searches into phone calls and walk-ins.", tags: ["GBP", "Reviews", "Maps"] },
  { n: "04", title: "E-commerce & Stores", desc: "Online stores built for speed, scale and South African payment gateways.", tags: ["Shopify", "Payfast", "Yoco"] },
];

function Services() {
  return (
    <section className="relative border-y border-border">
      <div className="container-page py-28 md:py-36">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">§ 02 — Services</p>
            <h2 className="display-tight mt-5 text-4xl md:text-6xl text-glow">Four things. Done properly.</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-foreground hover:text-primary transition">All services →</Link>
        </div>

        <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border border-t border-border">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06, ease }}
              className={`group relative p-8 md:p-12 ${i >= 2 ? "md:border-t md:border-border" : ""} hover:bg-card/40 transition-colors`}
            >
              <div className="absolute top-8 right-8 font-mono text-xs text-muted-foreground tracking-widest">{s.n} / 04</div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold tracking-tight max-w-md">
                {s.title}
              </h3>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">{s.desc}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-widest rounded-full border border-border px-2.5 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="absolute bottom-8 right-8 h-10 w-10 rounded-full border border-border grid place-items-center group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ SHOWCASE ============ */
function Showcase() {
  const items = [
    { n: "001", tag: "E-commerce", name: "Boutique Stays", res: "+220% bookings", grad: "from-primary/50 via-primary-glow/30 to-transparent" },
    { n: "002", tag: "Local Business", name: "Cape Auto", res: "Top 3 on Maps", grad: "from-primary-glow/45 via-primary/30 to-transparent" },
    { n: "003", tag: "Services", name: "Lerato Cleaning", res: "5 → 25 leads/day", grad: "from-primary/40 to-primary-glow/30" },
  ];
  return (
    <section className="container-page py-28 md:py-36">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
        <div className="max-w-xl">
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">§ 03 — Selected Work</p>
          <h2 className="display-tight mt-5 text-4xl md:text-6xl text-glow">Results, framed.</h2>
        </div>
        <Link to="/portfolio" className="text-sm font-semibold hover:text-primary transition">Full archive →</Link>
      </div>

      <div className="grid md:grid-cols-12 gap-5">
        {items.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1, ease }}
            className={`group relative overflow-hidden rounded-3xl glass-strong p-7 flex flex-col justify-between ${
              i === 0 ? "md:col-span-7 md:row-span-2 aspect-[5/6] md:aspect-auto md:min-h-[560px]" : "md:col-span-5 aspect-[5/4]"
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${p.grad} opacity-70 group-hover:opacity-95 transition-opacity duration-700`} />
            <div className="absolute inset-0 grid-bg opacity-50" />
            {/* Scan line */}
            <div className="absolute inset-x-0 h-px bg-primary/60 top-0 group-hover:top-full transition-all duration-[1.5s] ease-out" />

            <div className="relative flex items-start justify-between">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/70">{p.n}</span>
              <span className="inline-flex rounded-full glass px-3 py-1 text-[11px] font-mono uppercase tracking-widest">{p.tag}</span>
            </div>
            <div className="relative">
              <div className="display-tight text-4xl md:text-6xl">{p.name}</div>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest bg-foreground text-background rounded-full px-3 py-1.5">
                ↗ {p.res}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ PROCESS ============ */
function Process() {
  const steps = [
    { t: "Discover", d: "We learn your business, audience and competitive landscape." },
    { t: "Strategise", d: "Sitemap, wireframes and an SEO keyword roadmap." },
    { t: "Design", d: "Brand-led visuals — no two sites alike." },
    { t: "Develop", d: "Clean code. Edge-deployed. Ruthlessly fast." },
    { t: "Launch & Grow", d: "We test, optimise and keep ranking you higher." },
  ];
  return (
    <section className="relative border-y border-border bg-card/20">
      <div className="container-page py-28 md:py-36">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">§ 04 — Process</p>
            <h2 className="display-tight mt-5 text-4xl md:text-5xl text-glow">From brief to launch in <span className="italic font-light text-gradient">4 weeks</span>.</h2>
            <p className="mt-5 text-muted-foreground">No mystery, no jargon. Five steps, weekly check-ins, and a site you'll be proud to share.</p>
          </div>
          <div className="lg:col-span-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05, ease }}
                className="group grid grid-cols-12 gap-4 items-baseline border-t border-border py-7 last:border-b hover:bg-background/40 transition-colors"
              >
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-primary tracking-widest">0{i + 1}</div>
                <div className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl font-semibold tracking-tight">{s.t}</div>
                <div className="col-span-12 md:col-span-6 text-muted-foreground md:pl-4">{s.d}</div>
                <div className="col-span-12 md:col-span-1 hidden md:flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary"><path d="M7 17L17 7M9 7h8v8" /></svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============ STATS ============ */
function Stats() {
  const stats = [
    { n: "50+", l: "Sites launched" },
    { n: "3.2×", l: "Avg. lead lift" },
    { n: "<2s", l: "Mobile load" },
    { n: "98", l: "Lighthouse" },
  ];
  return (
    <section className="container-page py-24 md:py-28">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.07 }}
            className={`p-8 md:p-10 ${i !== 0 ? "lg:border-l border-border" : ""} ${i < 3 ? "border-b sm:border-b lg:border-b-0" : ""} ${i % 2 === 0 ? "sm:border-r lg:border-r-0" : ""} border-border`}
          >
            <div className="display-tight text-6xl md:text-7xl text-gradient">{s.n}</div>
            <p className="mt-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">{s.l}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ============ TESTIMONIALS ============ */
function Testimonials() {
  const quotes = [
    { name: "Lerato M.", biz: "Lerato Cleaning · Johannesburg", quote: "From 2 enquiries a week to 5 a day. The Maps ranking changed our business." },
    { name: "Sipho N.", biz: "Cape Auto · Cape Town", quote: "Fast, professional — and they actually understand SEO. Best money we've spent." },
    { name: "Amelia K.", biz: "Boutique Stays · Durban", quote: "Bookings doubled in three months. The site is gorgeous and lightning fast." },
  ];
  return (
    <section className="relative border-y border-border">
      <div className="container-page py-28 md:py-36">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">§ 05 — Reviews</p>
            <h2 className="display-tight mt-5 text-4xl md:text-6xl text-glow">Loved by SA businesses.</h2>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-primary text-lg">★★★★★</span>
            <span className="font-semibold">5.0</span>
            <span className="text-muted-foreground">· 50+ reviews</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {quotes.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="relative card-border-gradient rounded-3xl p-8"
            >
              <span aria-hidden className="absolute -top-4 left-7 font-display text-7xl text-primary/40 leading-none">"</span>
              <blockquote className="relative leading-relaxed text-foreground/90 text-lg">{t.quote}</blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border text-sm font-semibold flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-blue text-white text-xs font-bold">
                  {t.name.charAt(0)}
                </span>
                <span>
                  {t.name}
                  <span className="block text-xs text-muted-foreground font-normal mt-0.5">{t.biz}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============ FINAL CTA ============ */
function FinalCta() {
  return (
    <section className="container-page py-28 md:py-36">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-border noise">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="orb -top-32 -right-20 h-[420px] w-[420px] bg-primary/40 animate-blob" />
        <div className="orb -bottom-40 -left-20 h-[420px] w-[420px] bg-primary-glow/30 animate-blob [animation-delay:-6s]" />

        <div className="relative px-8 md:px-16 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-primary">§ 06 — Let's build</p>
            <h2 className="display-tight mt-5 text-5xl md:text-7xl lg:text-8xl text-glow leading-[0.9]">
              Got a project? <br />
              <span className="italic font-light text-gradient">Let's talk.</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl">
              Free strategy call. No-obligation quote within 24 hours. Serving the entire South Africa.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-3">
            <Link to="/contact" className="group inline-flex items-center justify-between gap-2 rounded-full bg-gradient-blue px-7 py-5 text-sm font-semibold text-white shadow-glow hover:shadow-elegant transition-all">
              Book a free call
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <a href="https://wa.me/27848823016" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-2 rounded-full glass px-7 py-5 text-sm font-semibold hover:border-primary/50 transition">
              WhatsApp us
              <span>↗</span>
            </a>
            <a href="mailto:hello@primewebstudio.co.za" className="inline-flex items-center justify-between gap-2 rounded-full px-7 py-5 text-sm font-semibold text-muted-foreground hover:text-foreground transition">
              hello@primewebstudio.co.za
              <span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

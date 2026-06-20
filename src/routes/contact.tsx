import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Prime Web Studio — Web Design Cape Town" },
      { name: "description", content: "Contact Prime Web Studio in Cape Town. WhatsApp, call or email us for a free website quote and SEO audit." },
      { property: "og:title", content: "Contact — Prime Web Studio" },
      { property: "og:description", content: "Get a free quote and SEO audit. Cape Town based." },
    ],
  }),
  component: ContactPage,
});

const budgets = ["Under R5,000", "R5,000 – R15,000", "R15,000 – R40,000", "R40,000+"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", email: "", budget: budgets[1], message: "" });

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi Prime Web Studio!\n\nName: ${form.name}\nBusiness: ${form.business}\nEmail: ${form.email}\nBudget: ${form.budget}\n\n${form.message}`,
    );
    window.open(`https://wa.me/27848823016?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <>
      <section className="bg-gradient-hero text-navy-foreground">
        <div className="container-page py-20 md:py-24 text-center">
          <p className="text-sm font-semibold tracking-widest text-primary-glow uppercase">Let’s talk</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">Let’s build your dream website</h1>
          <p className="mt-4 max-w-xl mx-auto text-navy-foreground/80">Tell us about your business — we usually reply within a few hours.</p>
        </div>
      </section>

      <section className="container-page py-20 grid lg:grid-cols-5 gap-10">
        {/* Form */}
        <div className="lg:col-span-3 rounded-2xl border border-border bg-card p-8 shadow-card">
          {sent ? (
            <div className="text-center py-10">
              <div className="text-5xl">✅</div>
              <h2 className="mt-3 text-2xl">Thanks — we’ll be in touch!</h2>
              <p className="mt-2 text-muted-foreground">We’ve opened WhatsApp so you can send your message instantly.</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-5">
              <h2 className="text-2xl">Request a free quote</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Your name" required value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                <Field label="Business name" value={form.business} onChange={(v) => setForm({ ...form, business: v })} />
              </div>
              <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <div>
                <label className="block text-sm font-medium mb-1.5">Budget range</label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {budgets.map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Tell us about your project</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="What do you need? Goals, timing, anything we should know."
                  maxLength={1000}
                />
              </div>
              <button type="submit" className="inline-flex justify-center items-center rounded-md bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground shadow-elegant hover:opacity-95">
                Send via WhatsApp
              </button>
              <p className="text-xs text-muted-foreground">By submitting you agree we may contact you about your request.</p>
            </form>
          )}
        </div>

        {/* Contact info */}
        <aside className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="text-lg font-bold">Prime Web Studio</h3>
            <p className="mt-1 text-sm text-muted-foreground">Cape Town, Western Cape, South Africa</p>
            <div className="mt-5 space-y-3 text-sm">
              <a href="tel:+27848823016" className="flex items-center gap-3 hover:text-primary">📞 +27 84 882 3016</a>
              <a href="mailto:primewstudio@gmail.com" className="flex items-center gap-3 hover:text-primary">✉ primewstudio@gmail.com</a>
              <a href="https://wa.me/27848823016" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">💬 WhatsApp</a>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Cape+Town" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary">📍 Get directions</a>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-border shadow-card">
            <iframe
              title="Prime Web Studio — Cape Town"
              src="https://www.google.com/maps?q=Cape+Town,+South+Africa&output=embed"
              loading="lazy"
              className="w-full aspect-video"
            />
          </div>

          <div className="rounded-2xl bg-gradient-hero text-navy-foreground p-6">
            <h3 className="text-lg font-bold">Prefer to chat?</h3>
            <p className="mt-1 text-sm text-navy-foreground/80">Tap below for an instant WhatsApp conversation.</p>
            <a href="https://wa.me/27848823016" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex rounded-md bg-gradient-primary px-5 py-2.5 font-semibold text-primary-foreground">Open WhatsApp</a>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1.5">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        type={type}
        value={value}
        required={required}
        maxLength={200}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

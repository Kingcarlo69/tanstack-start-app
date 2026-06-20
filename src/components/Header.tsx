import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={logo}
            alt="Prime Web Studio logo"
            width={40}
            height={40}
            className="h-9 w-9 md:h-10 md:w-10 object-contain rounded-md bg-white p-1 transition-transform group-hover:scale-105"
          />
          <span className="font-display font-bold text-base md:text-lg tracking-tight">
            Prime <span className="text-primary">Web Studio</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <div className="flex items-center gap-1 rounded-full border border-border bg-card/40 backdrop-blur p-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "bg-primary/15 text-primary" }}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-foreground/75 hover:text-foreground transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </div>
          <Link
            to="/contact"
            className="ml-3 group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-blue px-5 py-2.5 text-sm font-semibold text-white shadow-glow hover:shadow-elegant transition-shadow"
          >
            Get a Quote
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </nav>

        <button
          aria-label="Menu"
          className="md:hidden rounded-md p-2 text-foreground"
          onClick={() => setOpen((s) => !s)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-page py-3 flex flex-col">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center rounded-full bg-gradient-blue px-4 py-3 text-sm font-semibold text-white"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

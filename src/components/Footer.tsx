import { Link } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border overflow-hidden">
      <div className="absolute inset-x-0 -top-40 h-80 bg-gradient-blue opacity-10 blur-3xl pointer-events-none" />
      <div className="container-page relative py-16 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="Prime Web Studio" width={40} height={40} className="h-10 w-10 object-contain rounded-md bg-white p-1" />
            <span className="font-display font-bold text-lg">
              Prime <span className="text-primary">Web Studio</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Future-ready websites built for ambitious South African brands. Cape Town based — serving the entire country.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold mb-4 text-foreground/90 uppercase tracking-widest">Explore</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-primary transition-colors">Work</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold mb-4 text-foreground/90 uppercase tracking-widest">Services</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>Web Design South Africa</li>
            <li>SEO &amp; Local Ranking</li>
            <li>Google Business Profile</li>
            <li>E-commerce Development</li>
            <li>Brand &amp; Identity</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold mb-4 text-foreground/90 uppercase tracking-widest">Get in touch</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li>Cape Town · Serving all of South Africa</li>
            <li><a href="mailto:primewstudio@gmail.com" className="hover:text-primary transition-colors">primewstudio@gmail.com</a></li>
            <li><a href="tel:+27848823016" className="hover:text-primary transition-colors">+27 84 882 3016</a></li>
            <li><a href="https://wa.me/27848823016" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} Prime Web Studio. All rights reserved.</span>
          <span>Designing Websites · Building Brands · Delivering Results</span>
        </div>
      </div>
    </footer>
  );
}

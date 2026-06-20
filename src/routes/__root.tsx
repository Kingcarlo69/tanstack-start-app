import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prime Web Studio | Web Design Cape Town & SEO Services South Africa" },
      { name: "description", content: "Prime Web Studio is a Cape Town web design agency building fast, SEO-optimized websites that bring real customers. Get a free SEO audit today." },
      { name: "keywords", content: "Web Design Cape Town, Website Design South Africa, SEO Services Cape Town, Google Business Optimization Cape Town, E-commerce Cape Town" },
      { name: "author", content: "Prime Web Studio" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Prime Web Studio | Web Design Cape Town & SEO Services South Africa" },
      { property: "og:description", content: "Prime Web Studio is a Cape Town web design agency building fast, SEO-optimized websites that bring real customers. Get a free SEO audit today." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_ZA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#ffffff" },
      { name: "twitter:title", content: "Prime Web Studio | Web Design Cape Town & SEO Services South Africa" },
      { name: "twitter:description", content: "Prime Web Studio is a Cape Town web design agency building fast, SEO-optimized websites that bring real customers. Get a free SEO audit today." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ed4c4a6d-f585-42a5-bf38-1ee3c0d14b51/id-preview-b409ec7a--5e68045a-2277-438e-8324-08f451502b68.lovable.app-1778322337478.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ed4c4a6d-f585-42a5-bf38-1ee3c0d14b51/id-preview-b409ec7a--5e68045a-2277-438e-8324-08f451502b68.lovable.app-1778322337478.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
      { rel: "canonical", href: "https://primewebstudio.co.za/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Prime Web Studio",
          image: "https://primewebstudio.co.za/og.jpg",
          telephone: "+27848823016",
          email: "primewstudio@gmail.com",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Cape Town",
            addressRegion: "Western Cape",
            addressCountry: "ZA",
          },
          areaServed: ["Cape Town", "Johannesburg", "Durban", "Pretoria", "South Africa"],
          url: "https://primewebstudio.co.za/",
          priceRange: "RR",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </QueryClientProvider>
  );
}

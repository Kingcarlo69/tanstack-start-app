export function FloatingWhatsApp() {
  const phone = "27848823016";
  const msg = encodeURIComponent("Hi Prime Web Studio, I'd like a quote for a website.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.65_0.18_150)] text-white shadow-elegant hover:scale-105 transition-transform"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M19.05 4.91A10 10 0 0 0 2.2 17.34L1 23l5.78-1.51a10 10 0 0 0 4.78 1.22h.01A10 10 0 0 0 19.05 4.9zM12 21.07a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.43.9.92-3.34-.2-.34A8.3 8.3 0 1 1 12 21.07zm4.55-6.22c-.25-.13-1.47-.73-1.7-.81s-.4-.13-.56.13-.64.81-.79.97-.29.2-.54.07a6.8 6.8 0 0 1-2-1.24 7.5 7.5 0 0 1-1.39-1.73c-.14-.25 0-.38.11-.5s.25-.29.37-.43.16-.25.25-.42.04-.31-.02-.43-.56-1.34-.76-1.84-.4-.42-.55-.43h-.47a.9.9 0 0 0-.65.3 2.74 2.74 0 0 0-.86 2.04 4.74 4.74 0 0 0 1 2.52 10.9 10.9 0 0 0 4.16 3.67c.58.25 1.04.4 1.39.51a3.36 3.36 0 0 0 1.54.1 2.52 2.52 0 0 0 1.65-1.16 2.04 2.04 0 0 0 .14-1.16c-.06-.1-.22-.16-.47-.29z"/>
      </svg>
    </a>
  );
}

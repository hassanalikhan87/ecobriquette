export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-[var(--color-hero-bg)] py-20 text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#3a3b3dd9] via-[#58595bcc] to-[#b8eb1d59]" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
          Get in touch
        </p>
        <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
          Ready to deploy carbon-negative micro-hubs?
        </h2>
        <p className="text-base text-white/80 sm:text-lg">
          Share your biomass profile and project goals. We’ll blueprint a pilot, estimate carbon removal yields, and map commercialization pathways.
        </p>
        <a
          href="mailto:hello@ecobriquette.com"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--color-accent-dark)] px-8 py-3 text-sm font-semibold text-[var(--color-hero-bg)] transition hover:bg-[var(--color-accent)]"
        >
          hello@ecobriquette.com
        </a>
        <div className="text-xs text-white/80">
          Prefer a call? +1 (800) 555-4722 · Available Monday–Friday
        </div>
      </div>
    </section>
  );
}

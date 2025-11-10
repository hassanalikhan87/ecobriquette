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
          Want to know more?
        </h2>
        <p className="text-base text-white/80 sm:text-lg">
          Reach out to us using the following details.
        </p>
        <a
          href="mailto:hello@ecobriquette.com"
          className="inline-flex items-center gap-3 rounded-full bg-[var(--color-accent-dark)] px-8 py-3 text-sm font-semibold text-[var(--color-hero-bg)] transition hover:bg-[var(--color-accent)]"
        >
          umarfarooq@ecobriquette.com
        </a>
        <div className="text-xs text-white/80">
          <p>Address:</p>
          <p>Tec Labs, Campus da FCUL</p>
          <p>Campo Grande</p>
          <p>1749-016 Lisboa, Portugal</p>
        </div>
        <div className="text-xs text-white/80">Available Monday–Friday</div>
      </div>
    </section>
  );
}

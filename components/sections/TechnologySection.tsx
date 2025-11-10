import Image from "next/image";

import AccentDot from "@/components/ui/AccentDot";

export default function TechnologySection() {
  return (
    <section
      id="technology"
      className="relative isolate overflow-hidden bg-[var(--color-surface-dark)] py-24 text-white"
    >
      <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/forest-briquettes.jpg"
          alt="Briquette manufacturing technology"
          fill
          sizes="50vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[var(--color-surface-dark)] via-[var(--color-overlay-dark)] to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 sm:px-10 lg:grid-cols-2 lg:px-12">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[var(--color-accent)]">
            Technology
          </p>
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            The Biochar Carbon Removal Process
          </h2>
          <p className="text-base text-white/80">
            Our system is engineered to maximize the climate value of
            residual biomass, focusing on durable carbon storage outputs as
            illustrated in the provided process diagram:
          </p>
          <ul className="grid gap-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <AccentDot />
              Residual Biomass Feedstock: We process diverse, hard-to-handle
              residues—from agricultural waste to forestry cuttings—using
              automated recipe presets.
            </li>
            <li className="flex items-start gap-3">
              <AccentDot />
              Pyrolysis Plant: The feedstock is fed into our mobile unit for
              clean, oxygen-lean conversion. The process deliberately optimizes
              for Biochar output.
            </li>
            <li className="flex items-start gap-3">
              <AccentDot />
              Biochar: The conversion recovers up to 80% of the feedstock’s
              carbon into a stable, high-value Biochar product.
            </li>
            <li className="flex items-start gap-3">
              <AccentDot />
              Durable Carbon Storage: Our biochar is refined for long-term
              carbon storage applications, qualifying the outputs for durable
              carbon removal credits: Biochar applied in agriculture, amending
              soil to enhance fertility and sequestering carbon for centuries.
            </li>
          </ul>
          <p
            className="text-white/75"
          >
            This process ensures that EcoBriquette not only converts waste but
            also guarantees verifiable, durable carbon removal outcomes.{" "}
          </p>
        </div>
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur lg:block">
          <Image
            src="/bio-char-process.png"
            alt="Inside a biomass briquette facility"
            fill
            sizes="100%"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

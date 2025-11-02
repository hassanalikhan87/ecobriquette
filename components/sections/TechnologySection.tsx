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
          src="/technology-briquettes.jpg"
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
            Adaptive pyrolysis designed for tough environments
          </h2>
          <p className="text-base text-white/80">
            Each EcoBriquette hub integrates feedstock conditioning, oxygen-lean
            conversion, and gas cleaning inside a ruggedized frame. Inspired by
            field-proven mobility and precision process control, the system
            maintains optimal residence time and temperature even with variable
            biomass.
          </p>
          <ul className="grid gap-3 text-sm text-white/75">
            <li className="flex items-start gap-3">
              <AccentDot />
              Wide feedstock tolerance—from nut shells and prunings to
              sawdust—managed through automated recipe presets.
            </li>
            <li className="flex items-start gap-3">
              <AccentDot />
              <div>
                Low-oxygen reactors recover up to{" "}
                <strong className="font-semibold text-white">
                  80% of carbon
                </strong>{" "}
                into stable biochar fractions.
              </div>
            </li>
            <li className="flex items-start gap-3">
              <AccentDot />
              Embedded IoT stack streams kiln telemetry, stack emissions, and
              product analytics for compliance-ready reporting.
            </li>
          </ul>
          <a
            href="#contact"
            className="inline-flex max-w-fit items-center gap-2 rounded-full bg-[var(--color-accent-dark)] px-6 py-3 text-sm font-semibold text-[var(--color-accent-contrast)] transition hover:bg-[var(--color-accent)]"
          >
            Schedule a facility assessment
          </a>
        </div>
        <div className="relative hidden min-h-[320px] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur lg:block">
          <Image
            src="/technology-briquettes.jpg"
            alt="Inside a biomass briquette facility"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

import SectionHeading from "@/components/layout/SectionHeading";
import SectionWrapper from "@/components/layout/SectionWrapper";
import type { Stat } from "@/lib/types/home";

export default function ImpactSection({ stats }: { stats: Stat[] }) {
  return (
    <SectionWrapper id="impact">
      <SectionHeading
        eyebrow="Impact dashboard"
        title="Quantify climate benefits and community outcomes"
        description="Our reporting suite merges carbon analytics with social and agronomic data, giving stakeholders confidence in every tonne converted."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <article className="space-y-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-[var(--color-text-primary)]">
            Biomas conversion perfectly matched to each ecosystem’s need
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Dashboards integrate laboratory analyses and
            field-based biomass assessments to substantiate carbon removal
            claims. Exportable reports monitor avoided emissions, soil health
            improvements, and fair revenue distribution.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-[var(--color-background)] p-5 shadow-sm"
              >
                <div className="text-3xl font-semibold text-[var(--color-accent-dark)]">
                  {stat.value}
                </div>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
}

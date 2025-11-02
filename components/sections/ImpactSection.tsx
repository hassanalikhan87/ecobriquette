import SectionHeading from "@/components/layout/SectionHeading";
import SectionWrapper from "@/components/layout/SectionWrapper";
import type { Stat } from "@/lib/types/home";

const partnerHighlights = [
  {
    title: "Pacific Northwest forestry",
    body: "transformed slash piles into biochar and briquettes, reducing wildfire smoke days by 40% across two counties.",
  },
  {
    title: "East African agri-coop",
    body: "co-located hubs with harvest centers, delivering 18,000 tonnes of carbon removal credits in year one.",
  },
  {
    title: "Municipal waste team",
    body: "powered greenhouse heating with syngas while diverting 12,000 tonnes of green waste from landfill.",
  },
];

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
            Carbon intelligence in real time
          </h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Dashboards combine kiln telemetry, lab analyses, and satellite-backed biomass surveys to validate carbon removal claims. Exportable reports track avoided emissions, soil productivity, and equitable revenue sharing.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-[var(--color-background)] p-5 shadow-sm">
                <div className="text-3xl font-semibold text-[var(--color-accent-dark)]">{stat.value}</div>
                <p className="mt-1 text-xs uppercase tracking-wide text-[var(--color-text-secondary)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="space-y-6 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-dark)] p-8 text-white shadow-sm">
          <h3 className="text-xl font-semibold">Partner success snapshot</h3>
          <ul className="space-y-4 text-sm text-white/80">
            {partnerHighlights.map((highlight) => (
              <li key={highlight.title}>
                <strong className="text-white">{highlight.title}</strong> {highlight.body}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionWrapper>
  );
}

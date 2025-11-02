import SectionHeading from "@/components/layout/SectionHeading";
import SectionWrapper from "@/components/layout/SectionWrapper";
import AccentDot from "@/components/ui/AccentDot";
import type { Application } from "@/lib/types/home";

export default function UseCasesSection({ applications }: { applications: Application[] }) {
  return (
    <SectionWrapper>
      <SectionHeading
        eyebrow="Use cases"
        title="Tailor equipment and offtake for every biomass ecosystem"
        description="EcoBriquette micro-hubs flex between carbon removal credits, local energy needs, and soil regeneration priorities."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {applications.map((application) => (
          <article
            key={application.title}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-background)] p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{application.title}</h3>
            <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
              {application.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <AccentDot />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

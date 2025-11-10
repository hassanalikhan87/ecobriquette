import SectionHeading from "@/components/layout/SectionHeading";
import SectionWrapper from "@/components/layout/SectionWrapper";
import type { Highlight } from "@/lib/types/home";

export default function SolutionsSection({ highlights }: { highlights: Highlight[] }) {
  return (
    <SectionWrapper id="solutions">
      <SectionHeading
        eyebrow="Why Ecobriquette"
        title="Practical Technology, Measurable Climate Results"
        description="EcoBriquette streamlines biomass processing for fast, field-ready deployment, turning residues into valuable BioChar and carbon removal."
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map(({ title, description, Icon }) => (
          <article
            key={title}
            className="flex flex-col gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(184,235,29,0.12)]">
              <Icon />
            </div>
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{title}</h3>
            <p className="text-sm text-[var(--color-text-secondary)]">{description}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

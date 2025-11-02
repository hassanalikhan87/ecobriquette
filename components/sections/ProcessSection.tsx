import SectionHeading from "@/components/layout/SectionHeading";
import type { ProcessStep } from "@/lib/types/home";

export default function ProcessSection({ steps }: { steps: ProcessStep[] }) {
  return (
    <section id="process" className="bg-[var(--color-surface-muted)] py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Process"
          title="Closed-loop operations with verifiable outcomes"
          description="From feedstock audit to carbon registry submission, our team supports partners with engineering, training, and ongoing performance analytics."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="flex gap-5 rounded-2xl border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(184,235,29,0.15)] text-base font-semibold text-[var(--color-accent-dark)]">
                {index + 1}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">{step.title}</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

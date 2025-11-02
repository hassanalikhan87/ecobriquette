import SectionHeading from "@/components/layout/SectionHeading";
import type { Faq } from "@/lib/types/home";

export default function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section className="bg-[var(--color-hero-bg)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="FAQ"
          title="Answers to the questions we hear most"
          description="Still curious about financing, carbon programs, or agronomic impacts? Reach out and we’ll tailor the right program."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
              <p className="text-sm text-white/80">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

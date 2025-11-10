import SectionHeading from "@/components/layout/SectionHeading";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section id="partners" className="bg-[var(--color-surface-muted)] py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="Partners"
          title="Collaborating to advance biochar technology."
        />
        <div className="mt-10 flex flex-col items-center gap-10 justify-center md:flex-row">
          <Image
            src="/tec-labs.png"
            alt="tec labs, university of lisbon"
            width={192}
            height={108}
            className="h-auto max-w-3xl object-contain"
            priority
          />
          <Image
            src="/ciencias-ulisboa.png"
            alt="department of science, university of lisbon"
            width={192}
            height={108}
            className="h-auto max-w-3xl object-contain"
            priority
          />
          <Image
            src="/SUP Negativo@300x-100.png"
            alt="startup portugal"
            width={192}
            height={108}
            className="h-auto max-w-3xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

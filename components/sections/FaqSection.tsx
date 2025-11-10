import SectionHeading from "@/components/layout/SectionHeading";
import Image from "next/image";

export default function FaqSection() {
  return (
    <section className="bg-[var(--color-hero-bg)] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-12">
        <SectionHeading
          eyebrow="UN SUSTAINABLE DEVELOPMENT GOALS"
          title="Our work impacts the following"
        />
        <div className="mt-10 flex flex-col gap-10 justify-center items-center md:flex-row">
          <Image
            src="/005.png"
            alt="Inside a biomass briquette facility"
            width={192}
            height={108}
            className="h-auto max-w-3xl object-contain"
            priority
          />
          <Image
            src="/001.png"
            alt="Inside a biomass briquette facility"
            width={192}
            height={108}
            className="h-auto max-w-3xl object-contain"
            priority
          />
          <Image
            src="/002.png"
            alt="Inside a biomass briquette facility"
            width={192}
            height={108}
            className="h-auto max-w-3xl object-contain"
            priority
          />
          <Image
            src="/003.png"
            alt="Inside a biomass briquette facility"
            width={192}
            height={108}
            className="h-auto max-w-3xl object-contain"
            priority
          />
          <Image
            src="/004.png"
            alt="Inside a biomass briquette facility"
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

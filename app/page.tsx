import ContactSection from "@/components/sections/ContactSection";
import FaqSection from "@/components/sections/FaqSection";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import TechnologySection from "@/components/sections/TechnologySection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import Footer from "@/components/layout/Footer";
import {
  applications,
  faqs,
  highlights,
  processSteps,
  stats,
} from "@/lib/homeContent";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection stats={stats} />
      <main className="flex-1">
        <SolutionsSection highlights={highlights} />
        <TechnologySection />
        <UseCasesSection applications={applications} />
        <ProcessSection steps={processSteps} />
        <ImpactSection stats={stats} />
        <FaqSection faqs={faqs} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

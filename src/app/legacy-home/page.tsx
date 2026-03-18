import { AudienceSection } from "@/components/AudienceSection";
import { CTASection } from "@/components/CTASection";
import { ExampleComparison } from "@/components/ExampleComparison";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ProblemSection } from "@/components/ProblemSection";
import { SiteHeader } from "@/components/SiteHeader";

export default function LegacyHome() {
  return (
    <main className="relative overflow-hidden bg-midnight text-white">
      <div className="absolute inset-x-0 top-[-200px] z-0 h-[500px] bg-gradient-to-b from-electricPurple/30 via-transparent to-transparent blur-3xl" />
      <div className="relative z-10 flex flex-col gap-4">
        <SiteHeader />
        <HeroSection />
        <ProblemSection />
        <HowItWorks />
        <FeaturesGrid />
        <ExampleComparison />
        <AudienceSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}

import { MatrixRain } from "@/components/matrix-rain";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services";
import { ProcessSection } from "@/components/sections/process";
import { TechStackSection } from "@/components/sections/tech-stack";
import { AboutSection } from "@/components/sections/about";
import { SocialProofSection } from "@/components/sections/social-proof";
import { CTASection } from "@/components/sections/cta";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <MatrixRain />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <ServicesSection />
        <SocialProofSection />
        <ProcessSection />
        <TechStackSection />
        <AboutSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

import HeroSection from "@/components/pages/homepage/HeroSection";
import AboutSection from "@/components/pages/homepage/AboutSection";
import WhyUsSection from "@/components/pages/homepage/WhyUsSection";
import ServicesSection from "@/components/pages/homepage/ServicesSection";
import ProcessSection from "@/components/pages/homepage/ProcessSection";
import TrustedBySection from "@/components/pages/homepage/TrustedBySection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustedBySection />
      <AboutSection />
      <ServicesSection />
      <WhyUsSection />
      <ProcessSection />
    </div>
  );
}

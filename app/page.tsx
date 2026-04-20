import Hero from "@/components/home/Hero";
import FeatureStrip from "@/components/home/FeatureStrip";
import WhyUs from "@/components/home/WhyUs";
import ProcessSteps from "@/components/home/ProcessSteps";
import ServiceGrid from "@/components/home/ServiceGrid";
import BrandStrip from "@/components/ui/BrandStrip";
import CtaBand from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeatureStrip />
      <WhyUs />
      <ProcessSteps />
      <ServiceGrid />
      <BrandStrip />
      <CtaBand />
    </>
  );
}

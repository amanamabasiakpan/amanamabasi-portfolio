import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CallToAction from "@/components/CallToAction";
import FooterSection from "@/components/FooterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <TestimonialsSection />
      <CallToAction />
      <FooterSection />
    </>
  );
}

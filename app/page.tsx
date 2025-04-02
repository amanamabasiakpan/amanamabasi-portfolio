import HeroSection from "@/components/hero-section";
import Features from "@/components/features-1";
import ContentSection from "@/components/content-1";
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import WallOfLoveSection from "@/components/testimonials";
import ContactSection from "@/components/contact";
import FeaturesSection from "@/components/features-5";
import Title from "@/components/title";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <Features /> */}
      <Title />
      <FeaturesSection />
      <ContentSection />
      <WallOfLoveSection />
      {/* <ContactSection /> */}
      <CallToAction />
      <FooterSection />
    </>
  );
}

import { Nav } from "@/components/landing/nav";
import { Hero } from "@/components/landing/hero";
import { StackMarquee } from "@/components/landing/marquee";
import {
  ProblemSection,
  HowItWorks,
  AgentsSection,
  TracksSection,
} from "@/components/landing/sections";
import { DemoSection } from "@/components/landing/demo";
import { FAQSection, EarlyAccess, Footer } from "@/components/landing/cta";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <StackMarquee />
      <ProblemSection />
      <HowItWorks />
      <DemoSection />
      <AgentsSection />
      <TracksSection />
      <FAQSection />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
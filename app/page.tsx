import NavBar from "@/components/sections/NavBar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import HowWeHelp from "@/components/sections/HowWeHelp";
import MissionBanner from "@/components/sections/MissionBanner";
import OurTeam from "@/components/sections/OurTeam";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";
export default function Page() {
  return (
    <main className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <HowItWorks />
      <HowWeHelp />
      <MissionBanner />
      <OurTeam />
      <FAQ />
      <Footer />
    </main>
  );
}

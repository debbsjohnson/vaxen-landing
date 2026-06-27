import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TrustBar from "@/components/TrustBar";
import BuiltFor from "@/components/BuiltFor";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import WhoWeServe from "@/components/WhoWeServe";
import PlatformPreview from "@/components/PlatformPreview";
import Currencies from "@/components/Currencies";
import FAQ from "@/components/FAQ";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <StatsBar />
        <BuiltFor />
        <Problem />
        <Approach />
        <HowItWorks />
        <WhoWeServe />
        <PlatformPreview />
        <Currencies />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BuiltFor from "@/components/BuiltFor";
import Problem from "@/components/Problem";
import Approach from "@/components/Approach";
import HowItWorks from "@/components/HowItWorks";
import WhoWeServe from "@/components/WhoWeServe";
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
        <BuiltFor />
        <Problem />
        <Approach />
        <HowItWorks />
        <WhoWeServe />
        <Currencies />
        <FAQ />
        <Closing />
      </main>
      <Footer />
    </>
  );
}

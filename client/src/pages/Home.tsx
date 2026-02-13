import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Mission } from "@/sections/Mission";
import { Services } from "../sections/Services"; // Keep relative import as it was
import { Stats } from "@/sections/Stats";
import { Doctors } from "@/sections/Doctors";
import { Schedule } from "@/sections/Schedule";
import { Values } from "@/sections/Values";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <Values />
      <Stats />
      <Doctors />
      <Schedule />
      <Footer />
    </div>
  );
}

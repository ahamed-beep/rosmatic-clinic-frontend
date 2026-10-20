import ConsultationCTASection from "@/components/layout/ConsultationCTASection";
import FooterSection from "@/components/layout/FooterSection";
import CareSection from "@/components/sections/home/CareSection";
import ClinicSection from "@/components/sections/home/ClinicSection";
import ExpertiseSection from "@/components/sections/home/ExpertiseSection";
import HeroSection from "@/components/sections/home/HeroSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";
import TreatmentSection from "@/components/sections/home/TreatmentSection";
import WelcomeToRosmatic from "@/components/sections/home/WelcometoRoasmatic";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <WelcomeToRosmatic/>
      <TreatmentSection/>
      <CareSection/>
      <ExpertiseSection/>
      <TestimonialsSection/>
      <ClinicSection/>
      <ConsultationCTASection/>
      <FooterSection/>
    </div>
  );
}

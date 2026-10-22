import ConsultationCTASection from "@/components/layout/ConsultationCTASection";
import FooterSection from "@/components/layout/FooterSection";
import Navbar from "@/components/layout/Navbar";
import ConsultationSection from "@/components/sections/Treatments/ConsultationSection";
import FaqSection from "@/components/sections/Treatments/FaqSection";
import TreatmentDirectorySection from "@/components/sections/Treatments/TreatmentDirectorySection";
import TreatmentsHeroSection from "@/components/sections/Treatments/TreatmentsHeroSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Treatments — Care as individual as your skin",
  description:
    "Explore dermatology, laser and aesthetic care tailored to your skin.",
  openGraph: {
    title: "Our Treatments — Care as individual as your skin",
    description:
      "Explore dermatology, laser and aesthetic care tailored to your skin.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function TreatmentsPage() {
  return (
    <>
          <Navbar />
      <TreatmentsHeroSection />
      <TreatmentDirectorySection/>
      <ConsultationSection/>
      <FaqSection/>
      <ConsultationCTASection/>
      <FooterSection/>
    </>
  );
}
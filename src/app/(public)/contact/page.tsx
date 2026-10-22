import Navbar from "@/components/layout/Navbar";
import ConsultationCTASection from "@/components/layout/ConsultationCTASection";
import FooterSection from "@/components/layout/FooterSection";
import ContactFormSection from "@/components/sections/contact/ContactFormSection";
import ContactHeroSection from "@/components/sections/contact/ContactHeroSection";
import LocationMapSection from "@/components/sections/contact/LocationMapSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rosmatic — Contact / Visit",
  description:
    "A question, a consultation, a little reassurance. Whatever brings you here, we're glad to help.",
  openGraph: {
    title: "Rosmatic — A warm welcome awaits.",
    description:
      "A question, a consultation, a little reassurance. Whatever brings you here, we're glad to help.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ContactPage() {
  return (
    <main>
        <Navbar />
      <ContactHeroSection />
      <ContactFormSection/>
      <LocationMapSection/>
      <ConsultationCTASection/>
      <FooterSection/>
    </main>
  );
}
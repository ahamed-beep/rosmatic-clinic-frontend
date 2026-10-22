"use client";
import Navbar from "@/components/layout/Navbar";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

// Mobile gradient: forehead se eyes tak clear, phir neeche slowly light se dark
const CLEAR_UNTIL = 38; // % : yahan tak gradient bilkul nahi (eyes ki line)

const MOBILE_GRADIENT = `linear-gradient(180deg,
  rgba(21, 62, 154, 0) 0%,
  rgba(21, 62, 154, 0) ${CLEAR_UNTIL}%,
  rgba(21, 62, 154, 0.45) 53.33%,
  rgba(14, 49, 125, 0.8) 75%,
  rgba(10, 39, 100, 1) 96.08%
)`;

export default function HeroSection() {
  return (
    <section
      style={sans}
      className="relative min-h-screen w-full overflow-hidden bg-[#0A2764] text-white"
    >
      {/* Desktop image */}
      <img
        src="/images/home/hero/hero.jpg"
        alt="Rosmatic model"
        className="absolute inset-y-0 right-0 hidden h-full w-[75%] object-cover object-[70%_center] md:block"
      />
      {/* Mobile image */}
      <img
        src="/images/home/hero/heromob.png"
        alt="Rosmatic model"
        className="absolute inset-0 h-full w-full object-cover object-top md:hidden"
      />
      {/* Desktop gradient overlay */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0A2764] from-[30%] via-[#153E9A]/60 via-[55%] to-[#153E9A]/0 md:block" />
      {/* Mobile gradient overlay (top clear, bottom dark) */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: MOBILE_GRADIENT }}
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] flex-col px-5 md:px-18">
        <Navbar />

        {/* Hero content */}
        <div className=" pb-8 md:mb-auto md:mt-auto md:pb-0 md:pt-24 md:mt-0 mt-55">
          <p style={sans} className="text-[10px] uppercase tracking-[0.14em] text-[#D4E0F9] md:text-[11px]">
            Dermatology, refined.
          </p>
          <h1
            style={serif}
            className="mt-6 max-w-[350px] text-[#FFFFFF] text-[54px] leading-[0.98] md:mt-5 md:max-w-none md:text-[88px] md:leading-[1.02]"
          >
            <span className="md:hidden">
              Healthy,
              <br />
              confident skin
              <br />
              starts here.
            </span>
            <span className="hidden md:inline">
              Healthy, confident
              <br />
              skin starts here.
            </span>
          </h1>
          <p style={sans} className="mt-5 max-w-[300px]  text-[13px] leading-relaxed text-[#D4E0F9] md:max-w-[420px] md:text-[15px]">
            Expert dermatology, lasers and aesthetic care. Personalised to your skin. Thoughtfully
            designed around you.
          </p>
          <div className="mt-7 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-4">
        <Link
  style={sans}
  href="/contact#contact-form"
  className="flex font-semibold  items-center justify-center gap-6 rounded-sm bg-[#FFFFFF] px-6 py-4 text-[13px] text-[#173FA9] md:w-auto md:px-6"
>
  <span className="md:hidden">Book a consultation</span>
  <span className="hidden md:inline">Book an appointment</span>
  <ArrowUpRight size={18} />
</Link>
          <Link
  style={sans}
  href="/treatments#treatment-directory"
  className="flex items-center gap-2 text-[13px] text-white md:gap-6 md:rounded-sm md:border md:border-white/60 md:px-6 md:py-4"
>
  Explore treatments <ArrowUpRight size={18} />
</Link>
          </div>
        </div>

        <div className="flex items-center md:mt-18 gap-3 pb-8 md:pb-10">
          <span className="block h-0.5 w-8 bg-[#D4E0F9]" />
          <span style={sans} className="text-[8px] uppercase tracking-[0.16em] text-[#D4E0F9]     md:text-[9px]">
            Your skin, our care / Dhaka (BD)
          </span>
        </div>
      </div>
    </section>
  );
}
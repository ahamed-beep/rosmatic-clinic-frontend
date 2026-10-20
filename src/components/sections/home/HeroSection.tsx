"use client";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [open, setOpen] = useState(false);
  const links = ["Home", "Treatments", "Our clinic", "Contact"];

  // Sidebar khula ho toh page scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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
        {/* Nav */}
        <header className="flex items-start justify-between pt-5 md:pt-8">
          <div>
            <div style={serif} className="text-[40px] text-[#FFFFFF] leading-none tracking-wide md:text-[40px]">
              rosmatic
            </div>
            <div style={serif} className="mt-1 text-[9px] uppercase md:tracking-[0.18em] text-[#D4E0F9] md:text-[8px]">
              Skin · Laser · Aesthetics
            </div>
          </div>
          <nav style={sans} className="hidden items-center gap-10  md:flex">
            {links.map((l, i) => (
              <a
                key={l}
                href="#"
                className={`pb-1 text-[13px] ${
                  i === 0 ? "border-b  border-[#FFFFFF] md:text-sm text-[#FFFFFF]" : "text-gray-200 hover:text-white md:text-sm "
                }`}
              >
                {l}
              </a>
            ))}
            <a
              href="#"
              className=" flex items-center gap-6 rounded-sm bg-white pl-5 pr-4 py-2 text-[13px] md:text-xs font-semibold text-[#173FA9]"
            >
              Book an appointment <ArrowUpRight size={16} />
            </a>
            <hr />
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="flex h-12 w-12 mt-2 items-center justify-center p-0 rounded-sm border border-[#FFFFFF55] md:hidden"
            aria-label="Open menu"
          >
            <span className="flex font-semibold flex-col gap-[6px]">
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
              <span className="block h-px w-5 bg-white" />
            </span>
          </button>
        </header>

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
            <a
              style={sans}
              href="#"
              className="flex font-semibold  items-center justify-center gap-6 rounded-sm bg-[#FFFFFF] px-6 py-4 text-[13px] text-[#173FA9] md:w-auto md:px-6"
            >
              <span className="md:hidden">Book a consultation</span>
              <span className="hidden md:inline">Book an appointment</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              style={sans}
              href="#"
              className="flex items-center gap-2 text-[13px] text-white md:gap-6 md:rounded-sm md:border md:border-white/60 md:px-6 md:py-4"
            >
              Explore treatments <ArrowUpRight size={18} />
            </a>
          </div>
        </div>

        <div className="flex items-center md:mt-18 gap-3 pb-8 md:pb-10">
          <span className="block h-0.5 w-8 bg-[#D4E0F9]" />
          <span style={sans} className="text-[8px] uppercase tracking-[0.16em] text-[#D4E0F9]     md:text-[9px]">
            Your skin, our care / Dhaka (BD)
          </span>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        style={sans}
        className={`fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-[320px] flex-col bg-[#0A2764] px-6 pb-8 pt-5 text-white shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <div style={serif} className="text-[32px] leading-none tracking-wide">
            rosmatic
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#FFFFFF55]"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col">
          {links.map((l, i) => (
            <a
              key={l}
              href="#"
              onClick={() => setOpen(false)}
              className={`border-b border-white/15 py-4 text-[15px] ${
                i === 0 ? "text-white" : "text-[#D4E0F9]"
              }`}
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#"
          onClick={() => setOpen(false)}
          className="mt-auto flex items-center justify-center gap-6 rounded-sm bg-white px-6 py-4 text-[13px] font-semibold text-[#173FA9]"
        >
          Book a consultation <ArrowUpRight size={18} />
        </a>
      </aside>
    </section>
  );
}
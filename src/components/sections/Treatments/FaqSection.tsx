"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I choose the right treatment?",
    a: "You don't need to decide before you visit. We'll listen to your concerns, assess your skin and explain suitable options during your consultation.",
  },
  {
    q: "What should I bring to my consultation?",
    a: "Bring a list of your current skincare, medicines and any previous treatments. Let us know about allergies and relevant medical history.",
  },
  {
    q: "Will I need time to recover?",
    a: "Recovery varies by treatment and by person. Your clinician will explain what to expect and how to care for your skin before you make a decision.",
  },
];
const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };
export default function FaqSection() {
  const [open, setOpen] = useState<boolean[]>(() => faqs.map(() => true));

  return (
    <section
      className="bg-white"
      
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 py-14 sm:px-10 lg:grid-cols-12 lg:gap-6 lg:px-[5.5%] lg:py-24">
        {/* Left: heading block */}
        <div className="lg:col-span-5">
          <p style={sans} className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#173FA9]">
            A little clarity
          </p>
          <h2
          style={serif}
            className="mt-5 text-[40px] leading-[1.22] text-[#102A60] sm:text-[44px] lg:mt-7 lg:text-[58px] lg:leading-[1.28]"
            
          >
            Before your
            <br />
            first visit.
          </h2>
          <p style={sans} className="mt-6 max-w-[450px] text-[13px] leading-relaxed text-[#61718C]">
            Questions are always welcome. Here are a few good places to start.
          </p>
        </div>

        {/* Right: FAQ accordion */}
        <div className="lg:col-span-7 lg:col-start-6">
          {faqs.map((item, i) => (
            <div key={item.q} className="border-t border-[#DCE4F1]">
              <button
                type="button"
                onClick={() => setOpen((o) => o.map((v, j) => (j === i ? !v : v)))}
                aria-expanded={open[i]}
                className="flex text-[#173FA9] pb-1 w-full items-center justify-between gap-6 pt-5 text-left"
              >
                <span style={sans} className="text-[13px] pb-2 font-semibold text-[#172C50]">{item.q}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  className="shrink-0 text-[#102A60]"
                  aria-hidden="true"
                >
                  <line x1="1" y1="6" x2="11" y2="6" stroke="currentColor" strokeWidth="1.3" />
                  {!open[i] && (
                    <line x1="6" y1="1" x2="6" y2="11" stroke="currentColor" strokeWidth="1.3" />
                  )}
                </svg>
              </button>
              {open[i] && (
                <p style={sans} className="pb-7 pt-4 text-[12px] leading-relaxed text-[#61718C]">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
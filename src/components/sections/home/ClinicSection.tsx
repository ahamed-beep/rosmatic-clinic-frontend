import { ArrowUpRight } from "lucide-react";


export default function ClinicSection() {
    const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };
  return (
    <div className="min-h-screen bg-white" >
      <div className="h-6  md:h-2" />
      <section className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-2 md:gap-16 md:px-10 md:py-20">
        <picture>
          <source media="(min-width: 768px)" srcSet="/images/home/clinic/clinic-desk.png" />
          <img src="/images/home/clinic/clinic-mob.png" alt="Calm, light-filled clinic lobby" className="aspect-square w-full object-cover md:aspect-[4/3]" />
        </picture>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-[#173FA9] md:text-[11px]">Find your calm</p>
          <h2
            className="mt-4 text-[34px] font-medium leading-[1.15] text-[#102A60] md:text-[58px]"
            style={serif}
          >
            A little sanctuary.
            <br />
            Right here in Lahore.
          </h2>
          <p style={sans} className="mt-5 max-w-md text-[15px] leading-7 text-[#61718C] md:text-[13px] md:leading-6">
            Step away from the everyday. Our light-filled clinic is designed to make every visit feel unhurried, comfortable and entirely about you.
          </p>
          <div className="mt-5 border-t-2 border-gray-[#DCE4F1] pt-5">
            <p style={sans} className="flex items-center gap-3 text-[13px] text-[#172C50] md:text-[12px]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0 stroke-[#173FA9]" strokeWidth="2">
                <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
              134 - Y, Phase 3, DHA Lahore
            </p>
            <a
            style={sans}
              href="/contact#contact-form"
              className="mt-6 inline-flex items-center gap-6 border border-[#DCE4F1] px-6 py-4 text-[13px]  text-[#173FA9] font-semibold transition-colors hover:bg-slate-50 md:mt-5 md:px-5 md:py-3 md:text-[12px]"
            >
              Plan your visit
             <ArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
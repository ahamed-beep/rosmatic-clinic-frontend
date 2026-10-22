
export default function TreatmentsHeroSection() {
    const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };
  return (
    <main className=" ">
      <section className="relative    w-full overflow-hidden  h-[680px] md:h-[600px]">
        {/* Photo */}
        <img
          src="/images/treatments/hero/hero-mob.png"
          alt="Woman with glowing skin, eyes closed"
          className="absolute  inset-0 h-full w-full object-cover object-top md:hidden"
        />
        <img
          src="/images/treatments/hero/hero-desk.png"
          alt="Woman with glowing skin, eyes closed"
          className="absolute left-50 inset-0 hidden h-full w-full object-cover object-right md:block"
        />

        {/* Scrim — mobile (top to bottom) */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(9,23,51,0.04) 0%, rgba(9,23,51,0.15) 40%, rgba(9,23,51,0.84) 73%, rgba(9,23,51,0.98) 80%)",
          }}
        />
        {/* Scrim — desktop (left to right) */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(90deg, rgba(9,23,51,0.98) 0%, rgba(9,23,51,0.84) 27%, rgba(9,23,51,0.15) 60%, rgba(9,23,51,0.04) 100%)",
          }}
        />

        {/* Copy */}
        <div className="relative z-10 flex h-full items-end px-5 pb-14 md:mx-auto md:max-w-[1440px] md:items-center md:px-18 md:pb-0">
          <div className="max-w-[350px] md:max-w-[740px]">
            <p style={sans} className="text-[10px] font-medium uppercase tracking-[0.02em] text-[#D4E0F9] md:text-[11px]">
              Our treatments / Your possibilities
            </p>
            <h1
            style={serif}
              className="mt-4 text-[44px] font-normal leading-[1.05] text-white md:mt-6 md:text-[76px] md:leading-[1.1]"
            
            >
              Care as individual as your skin.
            </h1>
            <p style={sans} className="mt-5 text-[15px] leading-[1.6] text-[#D4E0F9] md:mt-6 md:max-w-[690px] md:text-[15px] md:leading-[1.75]">
              Explore dermatology, laser and aesthetic care. Every treatment begins with you—and a
              conversation about what your skin really needs.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
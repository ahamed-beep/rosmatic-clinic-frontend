const HERO_DESKTOP = "/images/contact/hero/hero-desk.png";
const HERO_MOBILE = "/images/contact/hero/hero-mob.png";
        const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

export default function ContactHeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#102A60]">
      {/* Background photograph: desktop */}
      <img
        src={HERO_DESKTOP}
        alt="Rosmatic reception"
        className="absolute inset-0 hidden h-full w-full object-cover md:block"
      />
      {/* Background photograph: mobile */}
      <img
        src={HERO_MOBILE}
        alt="Rosmatic reception"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      />

      {/* Blue gradient overlay: desktop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(115deg, rgba(16,42,96,0.9608) 0%, rgba(16,42,96,0.55) 45%, rgba(16,42,96,0.1255) 100%)",
        }}
      />
      {/* Blue gradient overlay: mobile */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(90deg, rgba(16,42,96,0.9608) 0%, rgba(16,42,96,0.55) 45%, rgba(16,42,96,0.1255) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen   items-center px-6 sm:px-10 md:px-18 ">
        <div className=" w-full md:max-w-2xl mt-55 md:mt-0"> 
          <p style={sans} className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#D4E0F9] md:text-xs">
            Contact / Visit Rosmatic
          </p>
          <h1
          style={serif}
            className="mt-6 text-[52px] font-normal leading-[1.15] text-[#FFFFFF]  md:mt-8 md:text-[78px]"
            
          >
            A warm welcome
            <br className="hidden md:inline" /> awaits.
          </h1>
          <p style={sans} className="mt-5 text-sm leading-relaxed text-[#D4E0F9] md:mt-6 md:text-[15px]">
            A question, a consultation, a little reassurance. Whatever brings
            you here, we're glad to help.
          </p>
        </div>
      </div>
    </section>
  );
}
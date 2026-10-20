const steps = [
  {
    number: "01",
    title: "We listen first",
    text: "Your concerns, your history and what you hope to feel.",
  },
  {
    number: "02",
    title: "We plan with purpose",
    text: "A personalised approach, with clear guidance at every step.",
  },
  {
    number: "03",
    title: "We care beyond the visit",
    text: "Practical aftercare and a conversation that continues.",
  },
];
const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

export default function CareSection() {
  return (
    <main className="min-h-screen bg-white">
      <section className="flex min-h-screen flex-col md:grid md:h-[49vw]  md:grid-cols-[51.3%_48.7%]">
        {/* Photo — desktop scene on md+, mobile scene below md */}
        <div className="relative h-[94vw] max-h-[440px] w-full md:h-full md:max-h-none">
          <img
            src="/images/home/care/care-mob.png"
            alt="A dermatologist listening to her patient during a consultation"
            className="h-full w-full object-cover object-[62%_38%] md:hidden"
          />
          <img
            src="/images/home/care/care-desk.png"
            alt="A dermatologist talking with her patient in a bright consultation room"
            className="hidden h-full w-full object-cover object-[35%_60%] md:block"
          />
        </div>

        {/* Navy content panel */}
        <div className="flex flex-1 flex-col justify-center bg-[#102A60] px-7 pb-20 pt-16 md:px-[68px] md:py-28 xl:px-[76px]">
          <p style={sans} className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#D4E0F9] ">
            Beyond the treatment
          </p>

          <h2 style={serif} className="mt-6 text-[40px] leading-[1.32] font-medium text-white  md:mt-7 md:text-[58px] md:leading-[1.18]">
            Care that sees
            <br />
            all of you.
          </h2>

          <p style={sans} className="mt-6 text-[15px] leading-[1.75] text-[#D4E0F9]  md:mt-7 md:max-w-none">
            No two skin stories are the same. Your care shouldn't be either.
          </p>

          <ul className="mt-9 md:mt-10">
            {steps.map((step) => (
              <li
                key={step.number}
                className="flex gap-0 border-t border-[#FFFFFF30] pt-6 pb-6 md:pt-[26px] md:pb-[17px]"
              >
                <span style={serif} className="w-11 shrink-0 pt-[2px] text-[26px] font-medium tracking-[0.08em] text-[#D4E0F9] ">
                  {step.number}
                </span>
                <div>
                  <h3 style={sans} className="text-[14px]  font-medium text-[#FFFFFF] ">
                    {step.title}
                  </h3>
                  <p style={sans} className="mt-[10px] text-[12px] leading-[1.6] text-[#D4E0F9] ">
                    {step.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
const testimonials = [
  {
    quote:
      "Thank you, Dr. Sania and the entire Rosmatic team, for consistently providing such outstanding service.",
    initials: "SR",
    name: "Sadia Rana",
    role: "Rosmatic patient",
  },
  {
    quote:
      "The doctor was professional, kind, and explained the treatment properly. The clinic environment was clean and comfortable.",
    initials: "RZ",
    name: "Ritza Zulfiqar",
    role: "Laser treatment",
  },
  {
    quote:
      "My laser sessions have shown great results, and the facial treatments are done with so much care and attention to detail.",
    initials: "NA",
    name: "Nabeeha Adnan Butt",
    role: "Laser & facials",
  },
];

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

export default function TestimonialsSection() {
  return (
    <section className=" bg-[#F1F5FC] px-5 py-10 sm:px-10 sm:py-16 lg:px-12">
    
      <div className="mx-auto max-w-6xl" style={serif}>
        <p style={sans} className="text-[11px]  font-semibold uppercase tracking-wide text-[#173FA9]">
          In their own words
        </p>
        <h2
        style={serif}
          className="mt-3 text-[40px] font-medium leading-tight text-[#102A60] md:text-[50px]"
        >
          Real people. Personal stories.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-5 sm:mt-8 md:grid-cols-3 md:gap-5">
          {testimonials.map((t) => (
            <article key={t.name} className="flex flex-col bg-white px-6 pb-6 pt-5 sm:px-6">
              <span
                className="text-[62px] leading-none text-[#173FA9]"
                style={serif}
              >
                &ldquo;
              </span>
              <p
              style={serif}
                className="mt-4 text-[26px] leading-snug text-[#102A60] sm:text-[22px]"
               
              >
                {t.quote}
              </p>
              <div className="mt-auto pt-4">
                <div className="flex items-center gap-3 border-t-2 border-[#DCE4F1] pt-4">
                  <span  style={serif} className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#EDF3FF] text-[16px] font-medium text-[#173FA9]">
                    {t.initials}
                  </span>
                  <div className="min-w-0">
                    <p style={sans} className="text-[12px] font-semibold text-[#172C50]">{t.name}</p>
                    <p style={sans} className="text-[10px] text-[#61718C]">{t.role}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-8 text-[11px] text-[#61718C] sm:mt-10">
          Patient experiences are personal. Treatment suitability and results vary from person to person.
        </p>
      </div>
    </section>
  );
}
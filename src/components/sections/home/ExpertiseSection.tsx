import { ArrowUpRight } from "lucide-react";

const doctors = [
  {
    img: "/images/home/expertise/Editorialphotograph(8).png",
    name: "Dr. Sania Javaid",
    role: "Board-certified dermatologist · Clinic lead",
    bio: "Leading Roomatic with a thoughtful approach to dermatology and aesthetic care.",
  },
  {
    img: "/images/home/expertise/Editorialphotograph(7).png",
    name: "Dr. Maria",
    role: "Roomatic care team",
    bio: "Part of the Roomatic team, supporting a welcoming and personalised clinic experience.",
  },
];

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

export default function ExpertiseSection() {
  return (
    <div className=" py-9  md:pt-26 bg-white md:px-18" style={{ fontFamily: "Inter, sans-serif" }}>
      <section className="mx-auto   px-5 py-10 md:px-16 md:py-20">
        <p style={sans} className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#173FA9]">
          Expertise with empathy
        </p>
        <div className="mt-3 flex flex-col gap-4 md:mt-5 md:flex-row md:items-end md:justify-between">
          <h2
          style={serif}
            className="text-[40px] leading-[1.05] text-[#102A60] md:text-[64px]"
          >
            Expert hands.
            <br />
            A human touch.
          </h2>
          <p style={sans} className="max-w-[340px] text-[15px] leading-relaxed text-[#61718C] md:mb-3">
            Meet the people behind your care. A team that takes time to understand, explain and help you feel at ease.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-10 md:mt-12 md:grid-cols-2 md:gap-6">
          {doctors.map((d) => (
            <article key={d.name}>
              <div className="overflow-hidden bg-gray-200">
                <img
                  src={d.img}
                  alt={d.name}
                  width={1200}
                  height={912}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover md:aspect-[4/3]"
                />
              </div>
              <div className="mt-4 flex items-start justify-between">
                <h3
                style={serif}
                  className="text-[28px] leading-tight text-[#102A60]"
                >
                  {d.name}
                </h3>
                <span className="mt-1 text-sm text-[#173FA9]"><ArrowUpRight/></span>
              </div>
              <p style={sans} className="mt-1 text-[11px] text-[#173FA9]">{d.role}</p>
              <p style={sans} className="mt-4 text-[13px] leading-relaxed text-[#61718C]">{d.bio}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
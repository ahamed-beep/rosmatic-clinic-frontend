import { ArrowUpRight } from "lucide-react";

const treatments = [
  { img: "/images/home/treatment/Editorialphotograph.png", tag: "Clarify & restore", title: "Acne & skin health", text: "Thoughtful care for acne, pigmentation and skin that needs a fresh start." },
  { img: "/images/home/treatment/Editorialphotograph(1).png", tag: "Balance & define", title: "Botox & fillers", text: "A considered approach to facial balance, with your individuality at the centre." },
  { img: "/images/home/treatment/Editorialphotograph(2).png", tag: "Smooth & refine", title: "Laser treatments", text: "Targeted laser care for unwanted hair, uneven tone and texture." },
  { img: "/images/home/treatment/Editorialphotograph(3).png", tag: "Renew & rejuvenate", title: "Anti-aging solutions", text: "Personalised options to support skin quality through every chapter." },
];

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };


export default function TreatmentSection() {
  return (
    <main className=" bg-[#F1F5FC] ">

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-16 md:py-20" >
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p style={sans} className="text-[10px] font-semibold uppercase tracking-wider text-[#173FA9]">Care, curated for you</p>
            <h2 style={serif} className=" mt-4 md:mt-3 text-4xl leading-tight text-[#102A60] font-medium md:text-6xl">
              Your skin. Your possibilities.
            </h2>
          </div>
          <a style={sans} href="#" className="inline-flex w-fit items-center md:mt-0 mt-1 gap-3 md:mb-4 border border-[#DCE4F1]  px-5 py-3 text-xs md:text-[13px]  font-semibold text-[#173FA9] transition-colors hover:bg-blue-100">
            View all treatments <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:mt-13 md:gap-5 lg:grid-cols-4">
          {treatments.map((t) => (
            <a key={t.title} href="#" className="group block">
              <div className="aspect-[8/9] overflow-hidden ">
                <img src={t.img} alt={t.title} width={768} height={864} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <p style={sans} className="mt-4 md:mt-5 text-[9px] font-semibold uppercase tracking-wider text-[#173FA9]">{t.tag}</p>
              <div className="mt-2 flex items-center justify-between gap-3">
                <h3 style={serif} className="text-2xl text-[#102A60] md:text-[26px]">{t.title}</h3>
                <ArrowUpRight size={18} color="#173FA9" />
              </div>
              <p style={sans} className="mt-2 text-[13px] leading-relaxed text-[#61718C]">{t.text}</p>
            </a>
          ))}
        </div>

        <p style={sans} className="md:mt-10 mt-6 text-[12px] text-[#61718C]">Not sure where to begin? We'll help you find the right care at your consultation.</p>
      </section>
    </main>
  );
}
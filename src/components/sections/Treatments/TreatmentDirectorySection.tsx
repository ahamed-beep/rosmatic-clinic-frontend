"use client";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const focus = ["Acne & skin health", "Botox & fillers", "Laser treatments", "Anti-aging solutions"];

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

const treatments = [
  { img: "/images/treatments/treatmentdirectory/treatment1.png", tag: "Acne & skin health", title: "Acne & pigmentation care", desc: "A dermatologist-led approach to breakouts, redness and uneven skin tone, shaped around your skin's needs.", meta: "Acne · Melasma · Uneven tone" },
  { img: "/images/treatments/treatmentdirectory/treatment2.png", tag: "Acne & skin health", title: "Organic & carbon peels", desc: "Carefully selected exfoliation treatments to address dullness, congestion and the appearance of uneven texture.", meta: "Glow · Pores · Texture" },
  { img: "/images/treatments/treatmentdirectory/treatment3.png", tag: "Laser treatments", title: "Laser hair removal", desc: "Targeted care for unwanted facial and body hair, with a treatment plan tailored to your skin and hair.", meta: "Face · Body · Personalised settings" },
  { img: "/images/treatments/treatmentdirectory/treatment4.png", tag: "Botox & fillers", title: "Botox & dermal fillers", desc: "Considered aesthetic treatments for expression lines and facial balance, guided by an individual consultation.", meta: "Expression lines · Facial balance" },
  { img: "/images/treatments/treatmentdirectory/treatment5.png", tag: "Anti-aging solutions", title: "Microneedling & skin boosters", desc: "Options focused on skin quality, hydration and the appearance of texture. Your plan starts with assessment.", meta: "Texture · Hydration · Glow" },
  { img: "/images/treatments/treatmentdirectory/treatment6.png", tag: "Anti-aging solutions", title: "HIFU skin rejuvenation", desc: "An ultrasound-based option for selected skin laxity concerns, with suitability discussed during consultation.", meta: "Firmness · Contour · Lift" },
];

export default function TreatmentDirectorySection() {
  const [active, setActive] = useState<number | null>(null);

  // active null = sab dikhao, warna sirf selected category
  const visible =
    active === null ? treatments : treatments.filter((t) => t.tag === focus[active]);

  return (
  <div  className="bg-white font-['Inter',sans-serif] text-slate-900">
      <section className="bg-[#F1F5FC] px-4 py-6 sm:px-10 sm:py-8">
        <div className="mx-auto max-w-6xl">
          <p style={sans} className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173FA9]">Find your focus</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {focus.map((f, i) => (
              <button
                key={f}
                style={sans}
                onClick={() => setActive(active === i ? null : i)}
                className={`h-[48px] rounded-[4px] border text-[11px] transition-colors ${i === active ? "border-[#173FA9] bg-[#173FA9] text-[#FFFFFF]" : "border-[#DCE4F1] bg-[#FFFFFF] text-[#173FA9] hover:border-blue-300"}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section id="treatment-directory" className="px-4 py-10 sm:px-18 sm:py-16">
        <div className="mx-auto ">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p style={sans} className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#173FA9]">Considered care, inside out</p>
              <h2 style={serif} className=" text-[40px] leading-[1.05] text-[#102A60] sm:text-[58px]">
                A thoughtful path<br />to healthier skin.
              </h2>
            </div>
            <p style={sans} className="max-w-xs  leading-relaxed text-[#61718C] text-[15px]">
              From everyday concerns to a little renewal, discover care that supports your skin without losing sight of what makes you, you.
            </p>
          </div>

          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((t) => (
              <article key={t.title} className="flex flex-col">
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img src={t.img} alt={t.title} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <p style={sans} className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#173FA9]">{t.tag}</p>
                <h3 style={serif} className="mt-2 text-[32px]  md:text-[34px] text-[#102A60]">{t.title}</h3>
                <p style={sans} className="mt-3 text-[13px] leading-relaxed text-[#61718C]">{t.desc}</p>
                <p style={sans} className="mt-3 text-[10px] md:text-[11px] text-[#173FA9]">{t.meta}</p>
                <a style={sans} href="#" className="mt-6 flex items-center justify-between border-t border-[#DCE4F1] pt-4 text-[12px] font-medium text-[#173FA9]  hover:text-blue-700">
                  Discuss this treatment <ArrowUpRight/>
                </a>    
              </article>
            ))}
          </div>

          <p style={sans} className="mt-12 text-[11px] text-[#61718C]">
            Treatment plans are tailored to each individual following consultation. Results vary and suitability is assessed by a qualified practitioner.
          </p>
        </div>
      </section>
    </div>
  );
}
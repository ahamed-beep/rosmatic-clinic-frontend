import { ArrowUpRight } from "lucide-react";

const steps = [
  "An individual skin assessment",
  "A clear conversation about your options",
  "A personalised plan and practical aftercare",
];

export default function ConsultationSection() {
    const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };
  return (
    <section className="grid grid-cols-1 bg-white lg:grid-cols-2">
      {/* Photo: desktop pe wide shot, mobile pe portrait */}
      <div className="relative h-[356px] w-full overflow-hidden lg:h-full lg:min-h-[640px]">
        <img
          src="/images/treatments/consultation/consultation1.png"
          alt="Doctor and patient talking during a consultation"
          className="absolute inset-0 h-full w-full object-cover object-[50%_30%] lg:hidden"
        />
        <img
          src="/images/treatments/consultation/consultation2.png"
          alt="Doctor and patient talking during a consultation"
          className="absolute inset-0 hidden h-full w-full object-cover lg:block"
        />
      </div>

      {/* Content panel */}
      <div className="flex flex-col justify-center bg-[#F1F5FC] px-8 py-14 lg:px-14 lg:py-20 xl:px-16">
        <p style={serif} className=" text-[11px]  font-semibold uppercase tracking-[0.08em] text-[#173FA9]">
          Start with understanding
        </p>

        <h2 style={serif} className="mt-6 text-[38hpx]  md:text-[32px] font-medium leading-[1.22] text-[#102A60] lg:mt-8 lg:text-[58px] lg:leading-[1.15]">
          Not just a treatment.
          <br />
          A plan for you.
        </h2>

        <p style={sans} className="mt-6 max-w-[600px]  text-[15px] leading-[1.9] text-[#61718C] lg:text-[15px]">
          Your first consultation is a chance to talk openly, understand your
          skin and explore your options—without pressure to choose a
          treatment.
        </p>

        <ul className="mt-8 space-y-5 lg:mt-10 lg:space-y-7">
          {steps.map((step, i) => (
            <li key={step} className="flex items-baseline gap-4 lg:gap-5">
              <span style={serif} className="w-6 shrink-0  text-[22px] leading-none text-[#173FA9] lg:text-[22px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span style={sans} className="  leading-snug text-[#172C50] text-[12px]">
                {step}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-9 lg:mt-12">
          <a
          style={sans}
            href="/contact#contact-form"
            className="inline-flex items-center gap-8 rounded-[4px] bg-[#173fa9] px-7 py-4 font-['DM_Sans',sans-serif] text-[13px] font-medium text-[#FFFFFF] transition-colors hover:bg-[#12368f] lg:px-9 lg:py-[18px] lg:text-[15px]"
          >
            Arrange a consultation
        <ArrowUpRight className="h-[18px] w-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}
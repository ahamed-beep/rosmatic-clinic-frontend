import { ArrowUpRight } from "lucide-react";

export default function ConsultationCTASection() {
    const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };
  return (
    <div className="">
      <section className="bg-blue-800 px-6 py-10 md:px-10 md:py-18" >
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="">
            <p style={sans} className="mb-3 text-[9px] font-medium uppercase tracking-wider text-[#D4E0F9] md:text-[11px]">
              A little care. A new beginning.
            </p>
            <h2

              className="text-3xl font-medium leading-tight text-[#FFFFFF] md:text-[58px]"
              style={serif}
            >
              Your skin’s next chapter starts with a conversation.
            </h2>
          </div>
          <div className="flex w-full flex-col items-center gap-3 md:w-72">
            <a
            style={sans}
              href="#"
              className="flex w-full items-center justify-center gap-5 rounded bg-white px-6 py-3 text-xs  text-[#173FA9] font-semibold transition hover:bg-blue-50"
            >
              Book your consultation
              <ArrowUpRight size={16} color="#173FA9" />
            </a>
            <a  style={sans} href="tel:+923204800366" className="text-[13px] text-[#FFFFFF] hover:text-white">
              or call +92 320 4800366
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
const explore = ["Home", "Treatments", "Our clinic", "Our doctors", "Contact"];
const care = ["Skin health", "Botox & Fillers", "Laser treatments", "Anti-aging"];

export default function FooterSection() {
        const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };
  return (
    <div className=" flex flex-col justify-end">
      <footer className="bg-[#102A60] text-gray-300 font-sans">
        <div className="mx-auto  px-6 md:px-18 pt-8 md:pt-16 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-6">
            <div className="md:col-span-5">
              <h2 style={serif} className="font-serif text-[62px] md:text-[58px] text-[#FFFFFF] tracking-wide">rosmatic</h2>
              <p style={sans} className="md:mt-1 text-[8px] tracking-[0.2em] uppercase text-[#D4E0F9]">Skin, laser, aesthetics</p>
              <p style={sans} className="mt-5 text-[13px] leading-relaxed text-[#D4E0F9] max-w-xs">
                Thoughtful dermatology. Considered aesthetics. Care that feels like you.
              </p>
              <div className="mt-4 flex gap-4 text-[#FFFFFF]">
                <a href="#" aria-label="Instagram" className="hover:text-white">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-white">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6v4h3v7h4v-7h3l1-4h-4V7a1 1 0 0 1 1-1h2z" /></svg>
                </a>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-2 gap-6">
              <div>
                <h3 style={serif} className="text-[13px] font-semibold uppercase tracking-wider text-white">Explore</h3>
                <ul style={sans} className="mt-4 space-y-3 text-[12px]">
                  {explore.map((l) => <li style={sans} key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
                </ul>
              </div>
              <div>
                <h3 style={serif} className="text-[13px] font-semibold uppercase tracking-wider text-white">Our care</h3>
                <ul style={sans} className="mt-4 space-y-3 text-[12px]">
                  {care.map((l) => <li style={sans} key={l}><a href="#" className="hover:text-white">{l}</a></li>)}
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <h3 style={serif} className="text-[13px] font-semibold uppercase tracking-wider text-white">Visit Rosmatic</h3>
              <ul style={sans}  className="mt-4 space-y-3 text-[12px]">
                <li>124 - Y Phase 3, DHA Lahore</li>
                <li><a href="tel:+923204850368" className="hover:text-white">+92 320 4850368</a></li>
                <li><a href="mailto:rosmaticclinic@gmail.com" className="hover:text-white">rosmaticclinic@gmail.com</a></li>
              </ul>
              <div style={sans} className="mt-4 border-t border-[#FFFFFF30] pt-4 space-y-2 text-[12px]  ">
                <p>Monday–Friday: 2:00 PM – 5:30 PM</p>
                <p>Saturday: 2:30 PM – 5:30 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          <div style={sans} className="mt-10 md:mt-16 border-t border-[#FFFFFF30] pt-5 flex items-center justify-between text-[10px] text-[#D4E0F9]">
            <p>© 2026 Rosmatic. All rights reserved.</p>
            <a href="#" className="hover:text-white">Privacy policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
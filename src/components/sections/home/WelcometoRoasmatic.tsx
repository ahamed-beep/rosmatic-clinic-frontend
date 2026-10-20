export default function WelcomeToRosmatic() {

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };


  const features = [
    {
      label: "Dermatologist-led care",
      icon: "/images/home/welcome/shield-check.png",
    },
    {
      label: "Personalised treatment plans",
      icon: "/images/home/welcome/scan-face.png",
    },
    {
      label: "Your comfort, considered",
      icon: "/images/home/welcome/heart-handshake.png",
    },
  ];

  return (
    <div className="" style={sans}>
      <section className="mx-auto  bg-white px-6 pb-12 pt-10 md:px-18 md:pb-14 md:pt-16">
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <div>
            <p style={sans} className="mb-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#173FA9] md:mb-6">
              Welcome to Rosmatic
            </p>
            <h1
              className="text-[34px] leading-[1.1] text-[#102A60]  font-medium md:text-[52px] md:leading-[1.15]"
              style={serif}
            >
              The science of skin.
              <br className="hidden md:block" /> The art of feeling yourself.
            </h1>
          </div>
          <div className="md:pt-0">
            <p style={sans} className="text-[15px] leading-[1.8] text-[#61718C]">
            Good skin care begins with understanding you. Led by Dr. Sania Javaid, our DHA Lahore clinic brings dermatology and aesthetics together in a calm, considered space—where your comfort matters as much as your care.
            </p>
            <a
            style={sans}
              href="#approach"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#173FA9] underline-offset-4 hover:underline"
            >
              Discover our approach
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M9 12h6M13 9l3 3-3 3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-10 border-t-2 border-gray-200 pt-8 md:mt-12 md:pt-10">
          <ul className="flex flex-col md:mt-2 gap-5 md:grid md:grid-cols-3">
            {features.map((f) => (
              <li style={sans} key={f.label} className="flex items-center gap-3 text-[13px] md:text-[13px] text-[#172C50]">
                <img src={f.icon} alt="" className=" h-[22px] w-[22px] md:h-[20px] md:w-[20px]" />
                {f.label}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
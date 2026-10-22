const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

const MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const ADDRESS =
  "Rosmatic Skin Clinic, Plaza 134, Y Block Sector Y DHA Phase 3, Lahore, 54000, Pakistan";

const EMBED_URL = `https://www.google.com/maps/embed/v1/place?key=${MAPS_API_KEY}&q=${encodeURIComponent(ADDRESS)}&zoom=16`;
const DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export default function LocationMapSection() {
  return (
    <section id="location" className="scroll-mt-20 mx-auto bg-white px-5 py-10 md:px-12 md:py-14 lg:px-16">
      {/* header */}
      <p style={sans} className="text-[9px]  font-semibold tracking-[0.22em] text-[#173FA9] uppercase md:text-[11px]">
        RIGHT HERE IN DHA
      </p>
      <div className="mt-3 flex flex-col items-start gap-5 md:mt-2 md:flex-row md:items-center md:justify-between">
        <h2 style={serif} className="font-serif text-[40px] leading-tight text-[#102A60] md:text-[58px]">
          A place to feel at ease.
        </h2>
        <a
          href={DIRECTIONS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex shrink-0 items-center gap-2 rounded-md border border-[#DCE4F1] bg-white px-3.5 py-2 text-xs font-medium text-[#173FA9] shadow-sm transition-colors hover:bg-gray-50 md:px-5 md:py-2.5 md:text-[13px]"
        >
          Get directions
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-[#173FA9] md:h-4 md:w-4" />
        </a>
      </div>

      {/* map */}
      <div className="relative mt-6 h-[440px] overflow-hidden rounded-lg bg-gray-200 sm:h-[520px] md:mt-8 md:h-auto md:aspect-[16/9.5] md:rounded-xl">
        <iframe
          title="Rosmatic Skin Clinic location"
          src={EMBED_URL}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      {/* footer address */}
      <div className="mt-4 flex items-center gap-2 md:mt-5">
        <MapPinIcon className="h-3.5 w-3.5 text-[#173FA9] md:h-4 md:w-4" />
        <p className="text-[11px] text-[#61718C] md:text-[12px]">
          Plaza 134, Y Block, Sector Y, DHA Phase 3, Lahore, 54000
        </p>
      </div>
    </section>
  );
}
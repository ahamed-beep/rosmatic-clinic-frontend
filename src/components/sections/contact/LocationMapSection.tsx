/* ---------- map geometry data ---------- */

type Block = { l: number; t: number; w: number; h: number; teal?: boolean };

const BLOCKS: Block[] = [
  // top row
  { l: 3, t: 4, w: 11, h: 12, teal: true },
  { l: 16, t: 4, w: 12, h: 12 },
  { l: 30, t: 4, w: 12, h: 12 },
  { l: 44, t: 4, w: 12, h: 12 },
  { l: 58, t: 4, w: 12, h: 12 },
  { l: 74, t: 4, w: 10, h: 12, teal: true },
  { l: 86, t: 4, w: 10, h: 12 },
  // left column
  { l: 3, t: 22, w: 11, h: 22 },
  { l: 3, t: 52, w: 11, h: 16 },
  { l: 3, t: 72, w: 8, h: 12, teal: true },
  // central upper row
  { l: 18, t: 22, w: 16, h: 22 },
  { l: 37, t: 22, w: 13, h: 22 },
  { l: 53, t: 22, w: 13, h: 22 },
  { l: 69, t: 22, w: 11, h: 22 },
  // central lower row
  { l: 18, t: 51, w: 16, h: 25 },
  { l: 37, t: 51, w: 13, h: 25 },
  { l: 53, t: 51, w: 13, h: 25 },
  { l: 69, t: 51, w: 11, h: 25 },
  // right column
  { l: 83, t: 22, w: 14, h: 22 },
  { l: 83, t: 51, w: 14, h: 25 },
  // bottom row
  { l: 18, t: 82, w: 10, h: 12, teal: true },
  { l: 30, t: 82, w: 14, h: 12 },
  { l: 47, t: 82, w: 14, h: 12 },
  { l: 63, t: 82, w: 12, h: 12 },
  { l: 78, t: 82, w: 19, h: 12 },
];

type Road = { l: number; t: number; w: number; h: number };

const ROADS: Road[] = [
  // thin white gaps between the top-row blocks
  { l: 14, t: 4, w: 1.9, h: 12 },
  { l: 28, t: 4, w: 1.9, h: 12 },
  { l: 42, t: 4, w: 1.9, h: 12 },
  { l: 56, t: 4, w: 1.9, h: 12 },
  { l: 70, t: 4, w: 3.9, h: 12 },
  { l: 84, t: 4, w: 1.9, h: 12 },
  // main horizontal street
  { l: 0, t: 44, w: 100, h: 7 },
  // vertical streets between the central columns
  { l: 34, t: 20, w: 3, h: 58 },
  { l: 50, t: 20, w: 3, h: 58 },
  { l: 66, t: 20, w: 3, h: 58 },
  { l: 80, t: 20, w: 3, h: 58 },
  // thin white gaps between the bottom-row blocks
  { l: 28, t: 82, w: 1.9, h: 12 },
  { l: 44.5, t: 82, w: 2.4, h: 12 },
  { l: 61, t: 82, w: 1.9, h: 12 },
  { l: 75, t: 82, w: 2.9, h: 12 },
];

/* ---------- tiny inline icons ---------- */

        const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

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

function SparkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2c.6 4.6 2.8 6.8 7.4 7.4-4.6.6-6.8 2.8-7.4 7.4-.6-4.6-2.8-6.8-7.4-7.4C9.2 8.8 11.4 6.6 12 2Z" />
      <circle cx="17.5" cy="17.5" r="1.6" />
    </svg>
  );
}

function MaximizeIcon({ className }: { className?: string }) {
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
      <path d="M8 3H5a2 2 0 0 0-2 2v3" />
      <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
      <path d="M3 16v3a2 2 0 0 0 2 2h3" />
      <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
    </svg>
  );
}

/* ---------- map pieces ---------- */

function MapBlocks() {
  return (
    <>
      {BLOCKS.map((b, i) => (
        <div
          key={`b${i}`}
          className={`absolute rounded-[3px] md:rounded-[6px] ${
            b.teal ? "bg-teal-100/70" : "bg-gray-300/70"
          }`}
          style={{
            left: `${b.l}%`,
            top: `${b.t}%`,
            width: `${b.w}%`,
            height: `${b.h}%`,
          }}
        />
      ))}
      {ROADS.map((r, i) => (
        <div
          key={`r${i}`}
          className="absolute bg-white"
          style={{
            left: `${r.l}%`,
            top: `${r.t}%`,
            width: `${r.w}%`,
            height: `${r.h}%`,
          }}
        />
      ))}
    </>
  );
}

function DiagonalRoad() {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full"
    >
      <line
        x1="-2"
        y1="94"
        x2="103"
        y2="6"
        stroke="#ffffff"
        strokeWidth="3.2"
      />
      <line
        x1="-2"
        y1="94"
        x2="103"
        y2="6"
        stroke="#d1d5db"
        strokeWidth="0.5"
        strokeDasharray="3 2.4"
      />
    </svg>
  );
}

function MapLabels() {
  return (
    <>
      <span
        className="absolute text-[8px] font-medium tracking-[0.18em] text-gray-400 uppercase md:text-[10px]"
        style={{ left: "4.5%", top: "33%" }}
      >
        DHA Phase 5
      </span>
      <span
        className="absolute text-[8px] font-medium tracking-[0.18em] text-gray-400 uppercase md:text-[10px]"
        style={{ left: "62%", top: "26%" }}
      >
        I-Blok
      </span>
      <span
        className="absolute font-serif text-base text-gray-400 italic md:text-2xl"
        style={{ left: "87%", top: "62%" }}
      >
        Lahore
      </span>
      <span className="absolute right-1.5 bottom-1 text-[6px] text-gray-400 md:right-2 md:bottom-1.5 md:text-[8px]">
        Map data ©2026 Google Terms
      </span>
    </>
  );
}

function ZoomControls() {
  const btn =
    "flex h-6 w-6 items-center justify-center rounded-[6px] border border-gray-200/70 bg-white text-gray-500 shadow-sm md:h-9 md:w-9";
  return (
    <div className="absolute top-2 right-2 flex flex-col gap-1.5 md:top-3 md:right-3 md:gap-2">
      <button type="button" className={btn} aria-label="Toggle fullscreen">
        <MaximizeIcon className="h-3 w-3 md:h-4 md:w-4" />
      </button>
      <button type="button" className={btn} aria-label="Zoom in">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-3 w-3 md:h-4 md:w-4"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <button type="button" className={btn} aria-label="Zoom out">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="h-3 w-3 md:h-4 md:w-4"
        >
          <path d="M5 12h14" />
        </svg>
      </button>
    </div>
  );
}

function RosmaticPin() {
  return (
    <div className="absolute top-[46%] left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 md:gap-2.5">
      <div className="rounded-md bg-white px-3 py-1 shadow-[0_4px_14px_rgba(0,0,0,0.12)] md:px-5 md:py-1.5">
        <span className="font-serif text-sm text-slate-700 md:text-2xl">
          rosmatic<span className="text-slate-700">.</span>
        </span>
      </div>
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.45)] md:h-10 md:w-10">
        <SparkIcon className="h-4 w-4 md:h-5 md:w-5" />
      </div>
    </div>
  );
}

function DestinationCard() {
  return (
    <div className="absolute bottom-[12%] left-[3%] rounded-md bg-white px-3.5 py-2.5 shadow-[0_6px_20px_rgba(0,0,0,0.12)] md:bottom-[14%] md:px-5 md:py-3.5">
      <p className="font-serif text-xs text-slate-700 md:text-xl">
        Your destination for skin care.
      </p>
      <p className="mt-0.5 text-[7px] text-gray-400 md:mt-1 md:text-[11px]">
        13A - 1st Floor, 5, DHA Lahore
      </p>
    </div>
  );
}

/* ---------- section ---------- */

export default function LocationMapSection() {
  return (
   <section id="location" className="mx-auto bg-white px-5 py-10 md:px-12 md:py-14 lg:px-16">
      {/* header */}
      <p style={sans} className="text-[9px]  font-semibold tracking-[0.22em] text-[#173FA9] uppercase md:text-[11px]">
        RIGHT HERE IN DHA
      </p>
      <div className="mt-3 flex flex-col items-start gap-5 md:mt-2 md:flex-row md:items-center md:justify-between">
        <h2 style={serif} className="font-serif text-[40px] leading-tight text-[#102A60] md:text-[58px]">
          A place to feel at ease.
        </h2>
        <button
          type="button"
          className="flex shrink-0 items-center gap-2 rounded-md border border-[#DCE4F1] bg-white px-3.5 py-2 text-xs font-medium text-[#173FA9] shadow-sm transition-colors hover:bg-gray-50 md:px-5 md:py-2.5 md:text-[13px]"
        >
          Get directions
          <ArrowUpRightIcon className="h-3.5 w-3.5 text-[#173FA9] md:h-4 md:w-4" />
        </button>
      </div>

      {/* map */}
      <div className="relative mt-6 h-[440px] overflow-hidden rounded-lg bg-gray-200 sm:h-[520px] md:mt-8 md:h-auto md:aspect-[16/9.5] md:rounded-xl">
        <MapBlocks />
        <DiagonalRoad />
        <MapLabels />
        <RosmaticPin />
        <DestinationCard />
        <ZoomControls />
      </div>

      {/* footer address */}
      <div className="mt-4 flex items-center gap-2 md:mt-5">
        <MapPinIcon className="h-3.5 w-3.5 text-[#173FA9] md:h-4 md:w-4" />
        <p className="text-[11px] text-[#61718C] md:text-[12px]">
          13A - 1st Floor, 5, DHA Lahore
        </p>
      </div>
    </section>
  );
}
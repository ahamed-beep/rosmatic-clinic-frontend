"use client";

export default function Loading() {
  const letters = "rosmatic".split("");

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-[#0A2764]"
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <style>{`
        @keyframes ros-letter-in {
          0%   { opacity: 0; transform: translateY(10px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes ros-breathe {
          0%, 100% { opacity: 1;    transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(0.985); }
        }
        @keyframes ros-line {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        @keyframes ros-fade-up {
          0%   { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ros-anim { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; }
        }
      `}</style>

      {/* Wordmark */}
      <div
        className="ros-anim flex"
        style={{ animation: "ros-breathe 2.4s ease-in-out 1.2s infinite" }}
      >
        {letters.map((l, i) => (
          <span
            key={i}
            className="ros-anim text-5xl font-semibold tracking-wide text-white md:text-6xl"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              opacity: 0,
              animation: `ros-letter-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.09}s forwards`,
            }}
          >
            {l}
          </span>
        ))}
      </div>

      {/* Tagline */}
      <p
        className="ros-anim mt-3 text-[10px] font-medium uppercase tracking-[0.3em] text-[#a6b1ce]"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          opacity: 0,
          animation: "ros-fade-up 0.8s ease-out 0.9s forwards",
        }}
      >
        Skin · Laser · Aesthetics
      </p>

      {/* Sliding line */}
      <div className="mt-8 h-px w-28 overflow-hidden bg-white/15">
        <div
          className="ros-anim h-full w-2/5 bg-white"
          style={{ animation: "ros-line 1.4s ease-in-out infinite" }}
        />
      </div>

      <span className="sr-only">Loading</span>
    </div>
  );
}
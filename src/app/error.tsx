"use client";
import { useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const letters = "rosmatic".split("");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0A2764] px-6 text-center">
      <style>{`
        @keyframes ros-letter-in {
          0%   { opacity: 0; transform: translateY(10px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0);    filter: blur(0); }
        }
        @keyframes ros-breathe {
          0%, 100% { opacity: 1;    transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(0.985); }
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

      {/* Divider */}
      <div className="mt-8 h-px w-28 bg-white/15" />

      {/* Message */}
      <div
        className="ros-anim mt-8 flex flex-col items-center"
        style={{
          fontFamily: "var(--font-manrope), sans-serif",
          opacity: 0,
          animation: "ros-fade-up 0.8s ease-out 1.3s forwards",
        }}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#a6b1ce]">
          Something went wrong
        </p>
        <h1
          className="mt-4 max-w-[520px] text-4xl font-normal leading-[1.1] text-white md:text-6xl"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          We hit an unexpected problem.
        </h1>
        <p className="mt-5 max-w-[420px] text-[13px] leading-relaxed text-[#D4E0F9] md:text-[15px]">
          Please try again in a moment. If the problem continues, go back to
          the home page.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 md:flex-row">
          <button
            type="button"
            onClick={() => reset()}
            className="flex items-center justify-center gap-6 rounded-sm bg-white px-6 py-4 text-[13px] font-semibold text-[#173FA9]"
          >
            Try again <ArrowUpRight size={18} />
          </button>
          <Link
            href="/"
            className="flex items-center justify-center gap-6 rounded-sm border border-white/60 px-6 py-4 text-[13px] text-white"
          >
            Back to home <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
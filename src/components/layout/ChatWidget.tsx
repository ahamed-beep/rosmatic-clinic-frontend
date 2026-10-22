"use client";
import { useState } from "react";

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

const chips = ["Book a consultation", "Explore treatments", "Contact the team"];

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={sans}
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-4 md:bottom-6 md:right-6"
    >
      {open && (
        /* ---------- Chat widget card ---------- */
        <div className="flex h-[min(620px,calc(100dvh-7.5rem))] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-[20px] bg-white shadow-xl shadow-slate-400/20">
          {/* Header */}
          <div className="relative shrink-0 bg-[#173FA9] px-5 pb-4 pt-4">
            <div className="pr-16">
              <p className="text-[26px] leading-none text-white" style={serif}>
                rosmatic
              </p>
              <div className="mt-2 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                <span className="text-[10px] text-[#D4E0F9]">
                  Plastic &amp; aesthetic company
                </span>
              </div>
            </div>
            <div className="absolute right-4 top-4 flex items-center gap-1">
              <button
                type="button"
                aria-label="Minimize"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="min-h-0 flex-1 overflow-y-auto px-5 pb-4 pt-6">
            <p style={sans}  className="text-center text-[10px] text-[#61718C]">Today</p>

            {/* User message */}
            <div className="mt-5 flex flex-col items-end">
              <div style={sans} className="max-w-[80%] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[3px] rounded-bl-[12px]   bg-[#173FA9] px-4 py-3 text-[12.5px] leading-relaxed text-[#FFFFFF]">
                How do I plan a visit to the clinic?
              </div>
              <p className="mt-1.5 text-[9px] text-slate-400">Read 20:20 PM</p>
            </div>

            {/* Bot reply */}
            <div className="mt-4 flex flex-col items-start">
              <div style={sans} className="max-w-[94%] rounded-[12px] rounded-bl-[3px] bg-[#F1F5FC] px-4 py-4 text-[12.5px] leading-relaxed text-[#172C50]">
                <p>
                  We'd love to welcome you. Find us at C4 - 1, Phase 1, DHA
                  Lahore.
                </p>
                <p className="mt-3">Monday–Friday: 2:00 PM – 9:30 PM</p>
                <p>Saturday: 2:00 PM – 8:30 PM</p>
                <p>Sunday: Closed</p>
                <p className="mt-3">
                  Call +92 300 4463388 or email rosmaticclinic@gmail.com to
                  arrange your visit. How else can we help?
                </p>
              </div>
              <p style={sans} className="mt-1.5 text-[9px] text-[#61718C]">
                Rosmatic consultant &nbsp;2:31 PM
              </p>
            </div>
            <p style={sans} className="mt-5 text-[9px] uppercase tracking-wide text-[#61718C]">
              You might also like
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  style={sans}
                  className="rounded-full border border-[#DCE4F1] px-4 py-2 text-[11.5px] text-[#173FA9] transition-colors hover:bg-slate-100"
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>

          {/* Composer */}
          <div className="shrink-0 border-t border-slate-100 px-4 pb-2.5 pt-3">
            <div className="flex items-center gap-2 rounded-2xl bg-[#F1F5FC] py-1.5 pl-4 pr-1.5">
              <input
              style={sans}
                type="text"
                placeholder="Type your message..."
                className="min-w-0 flex-1 bg-transparent text-[12.5px] text-[#61718C] outline-none placeholder:text-slate-400"
              />
              <button
              style={sans}
                type="button"
                aria-label="Send message"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#173FA9] text-white transition-colors hover:bg-blue-900"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>
            </div>
            <p style={sans} className="mt-2 text-center text-[8.5px] uppercase tracking-wide text-[#61718C]">
              Rosmatic OMC — AI answers, not medical advice
            </p>
          </div>
        </div>
      )}

      {/* Floating toggle */}
      <button
        type="button"
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-blue-800 text-white shadow-lg shadow-blue-800/30 transition-colors hover:bg-blue-900"
      >
        {open ? (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>
    </div>
  );
}
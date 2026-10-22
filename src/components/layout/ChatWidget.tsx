"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

const chips = [
  { label: "Book a consultation", prompt: "How do I book a consultation?" },
  { label: "Explore treatments", prompt: "What treatments do you offer?" },
  { label: "Contact the team", prompt: "How can I contact the clinic and where are you located?" },
];

// Backend ke treatment ids ke hisaab se
const TREATMENTS: Record<string, { title: string; meta: string; img: string }> = {
  acne: { title: "Acne & pigmentation care", meta: "Acne · Melasma · Uneven tone", img: "/images/treatments/treatmentdirectory/treatment1.png" },
  peels: { title: "Organic & carbon peels", meta: "Glow · Pores · Texture", img: "/images/treatments/treatmentdirectory/treatment2.png" },
  laser: { title: "Laser hair removal", meta: "Face · Body · Personalised settings", img: "/images/treatments/treatmentdirectory/treatment3.png" },
  fillers: { title: "Botox & dermal fillers", meta: "Expression lines · Facial balance", img: "/images/treatments/treatmentdirectory/treatment4.png" },
  microneedling: { title: "Microneedling & skin boosters", meta: "Texture · Hydration · Glow", img: "/images/treatments/treatmentdirectory/treatment5.png" },
  hifu: { title: "HIFU skin rejuvenation", meta: "Firmness · Contour · Lift", img: "/images/treatments/treatmentdirectory/treatment6.png" },
};

type Msg = { role: "user" | "assistant"; content: string; treatments?: string[] };

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || loading) return;

    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          },
          body: JSON.stringify({
            messages: next.map(({ role, content }) => ({ role, content })),
          }),
          signal: AbortSignal.timeout(30000),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");
      setMessages([
        ...next,
        { role: "assistant", content: data.reply, treatments: data.treatments },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again, or contact our team directly.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

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
            <p style={sans} className="text-center text-[10px] text-[#61718C]">Today</p>

            {/* Welcome message */}
            <div className="mt-4 flex flex-col items-start">
              <div style={sans} className="max-w-[94%] rounded-[12px] rounded-bl-[3px] bg-[#F1F5FC] px-4 py-4 text-[12.5px] leading-relaxed text-[#172C50]">
                Welcome to Rosmatic. Ask me about our treatments, clinic
                location, hours, or how to book a consultation.
              </div>
              <p style={sans} className="mt-1.5 text-[9px] text-[#61718C]">
                Rosmatic consultant
              </p>
            </div>

            {messages.map((m, i) =>
              m.role === "user" ? (
                <div key={i} className="mt-5 flex flex-col items-end">
                  <div style={sans} className="max-w-[80%] rounded-tl-[12px] rounded-tr-[12px] rounded-br-[3px] rounded-bl-[12px] bg-[#173FA9] px-4 py-3 text-[12.5px] leading-relaxed text-[#FFFFFF]">
                    {m.content}
                  </div>
                </div>
              ) : (
                <div key={i} className="mt-4 flex flex-col items-start">
                  <div style={sans} className="max-w-[94%] whitespace-pre-line rounded-[12px] rounded-bl-[3px] bg-[#F1F5FC] px-4 py-4 text-[12.5px] leading-relaxed text-[#172C50]">
                    {m.content}
                  </div>

                  {m.treatments && m.treatments.length > 0 && (
                    <div className="mt-3 flex w-full flex-col gap-3">
                      {m.treatments.map((id) => {
                        const t = TREATMENTS[id];
                        if (!t) return null;
                        return (
                          <div key={id} className="overflow-hidden rounded-[12px] border border-[#DCE4F1] bg-white">
                            <img
                              src={t.img}
                              alt={t.title}
                              loading="lazy"
                              className="aspect-[16/10] w-full object-cover"
                            />
                            <div className="px-4 py-3">
                              <p style={serif} className="text-[20px] leading-tight text-[#102A60]">
                                {t.title}
                              </p>
                              <p style={sans} className="mt-1 text-[10px] text-[#173FA9]">
                                {t.meta}
                              </p>
                              <Link
                                href="/contact#contact-form"
                                onClick={() => setOpen(false)}
                                style={sans}
                                className="mt-3 inline-block text-[11.5px] font-medium text-[#173FA9] hover:underline"
                              >
                                Discuss this treatment ↗
                              </Link>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )
            )}

            {loading && (
              <div className="mt-4 flex flex-col items-start">
                <div style={sans} className="rounded-[12px] rounded-bl-[3px] bg-[#F1F5FC] px-4 py-3 text-[12.5px] text-[#61718C]">
                  Typing...
                </div>
              </div>
            )}

            {messages.length === 0 && (
              <>
                <p style={sans} className="mt-5 text-[9px] uppercase tracking-wide text-[#61718C]">
                  You might also like
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {chips.map((chip) => (
                    <button
                      key={chip.label}
                      type="button"
                      style={sans}
                      onClick={() => send(chip.prompt)}
                      className="rounded-full border border-[#DCE4F1] px-4 py-2 text-[11.5px] text-[#173FA9] transition-colors hover:bg-slate-100"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Composer */}
          <div className="shrink-0 border-t border-slate-100 px-4 pb-2.5 pt-3">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 rounded-2xl bg-[#F1F5FC] py-1.5 pl-4 pr-1.5"
            >
              <input
                style={sans}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={300}
                placeholder="Type your message..."
                className="min-w-0 flex-1 bg-transparent text-[12.5px] text-[#61718C] outline-none placeholder:text-slate-400"
              />
              <button
                style={sans}
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#173FA9] text-white transition-colors hover:bg-blue-900 disabled:opacity-60"
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
            </form>
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
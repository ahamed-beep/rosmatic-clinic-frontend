"use client";
import { useState } from "react";

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
      <path d="m21.854 2.147-10.94 10.939" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-[#1B2F5C]"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

        const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

const inputClass =
  "w-full rounded-[4px] border border-[#DCE4F1] bg-white px-3.5 text-[12px] text-[#61718C] placeholder:text-slate-400 transition-colors focus:border-[#173FA9]/50 focus:outline-none focus:ring-2 focus:ring-[#173FA9]/15";

export default function ContactFormSection() {
  const [treatment, setTreatment] = useState("");

  return (
    <div
      className="bg-white"
 >

      {/* Hero ke neeche ki gradient strip (dark navy se warm taupe) */}
      <div
        className="h-5 w-full lg:h-3"
        style={{
          background:
            "linear-gradient(90deg,#0F2A59 0%,#32466F 16%,#526285 33%,#64708C 45%,#7D8397 62%,#828893 76%,#645C59 82%,#736054 90%,#5B483D 100%)",
        }}
      />

      <section className="bg-white pt-16 pb-10 lg:pt-24 lg:pb-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1fr] lg:gap-12">
            {/* Left column: intro + contact details */}
            <div>
              <p style={sans} className="text-[11px] font-semibold tracking-[0.18em] text-[#2F55C9] uppercase">
                We're here for you
              </p>
              <h2 style={serif} className="font-display mt-7 text-[40px] leading-[1.16] font-medium text-[#102A60] lg:text-[58px]">
                Your next step,
                <br />
                made simple.
              </h2>
              <p style={sans} className="mt-5 max-w-[470px] text-[13px] leading-[1.55] text-[#61718C]">
                Speak with our team to arrange your visit, ask about treatments
                or find the right place to begin.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3FF] text-[#2F55C9]">
                    <PhoneIcon />
                  </div>
                  <div className="min-w-0">
                    <p style={sans} className="text-[8px] font-medium tracking-[0.16em] text-[#61718C] uppercase">
                      Call us
                    </p>
                    <p style={sans} className="mt-0.5 text-[13px]  text-[#102A60]">
                      +92 320 6800388
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3FF] text-[#2F55C9]">
                    <MailIcon />
                  </div>
                  <div className="min-w-0">
                    <p style={sans} className="text-[8px] font-medium tracking-[0.16em] text-[#61718C] uppercase">
                      Email us
                    </p>
                    <p style={sans} className="mt-0.5 text-[13px]  break-all text-[#102A60]">
                      rosmafsclinic@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EDF3FF] text-[#2F55C9]">
                    <PinIcon />
                  </div>
                  <div className="min-w-0">
                    <p style={sans} className="text-[8px] font-medium tracking-[0.16em] text-[#61718C] uppercase">
                      Visit us
                    </p>
                    <p style={sans} className="mt-0.5 text-[13px]  text-[#102A60]">
                      154 - Y, Phase 5, DHA Lahore
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-9 border-t border-[#DCE4F1]" />

              <p className="mt-8 text-[11px] font-semibold tracking-[0.18em] text-[#173FA9] uppercase">
                Clinic hours
              </p>
              <div style={sans} className="mt-3  space-y-5 text-[12px]">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[#61718C]">Monday-Friday</span>
                  <span className="font-medium text-[#1B2F5C]">
                    2:00 PM - 8:30 PM
                  </span>
                </div>
                <div style={sans} className="flex items-center justify-between gap-4">
                  <span className="text-[#61718C]">Saturday</span>
                  <span className="font-medium text-[#1B2F5C]">
                    2:00 PM - 9:30 PM
                  </span>
                </div>
                <div style={sans} className="flex items-center justify-between gap-4">
                  <span className="text-[#61718C]">Sunday</span>
                  <span className="font-medium text-[#1B2F5C]">Closed</span>
                </div>
              </div>
              <p style={sans} className="mt-6 text-[11px] leading-[1.7] text-[#61718C]">
                Appointments are recommended. Please call ahead so we can help
                you plan a comfortable visit.
              </p>
            </div>

            {/* Right column: contact form card */}
            <div id="contact-form" className="mt-12 rounded-sm bg-[#F1F5FC] p-6 sm:p-8 lg:mt-0 lg:p-12 lg:pb-20">
              <h2 style={serif} className="font-display text-[34px] leading-[1.2] font-medium text-[#102A60] lg:text-[40px]">
                Let's talk about your skin.
              </h2>
              <p style={sans} className="mt-2.5 text-[12px] leading-[1.6] text-[#61718C]">
                Tell us a little about yourself and our team will help you take
                the next step.
              </p>

              <form
                className="mt-7"
                onSubmit={(e) => e.preventDefault()}
                noValidate
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="full-name"
                      className="mb-2 block text-[11px] font-semibold text-[#172C50]"
                    >
                      Full name*
                    </label>
                    <input
                      id="full-name"
                      name="fullName"
                      type="text"
                      placeholder="Your full name"
                      className={`${inputClass} h-12`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-[11px] font-semibold text-[#172C50]"
                    >
                      Email address*
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className={`${inputClass} h-12`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-[11px] font-semibold text-[#172C50]"
                    >
                      Phone number*
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+92"
                      className={`${inputClass} h-12`}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="treatment"
                      className="mb-2 block text-[11px] font-semibold text-[#172C50]"
                    >
                      I'm interested in
                    </label>
                    <div className="relative">
                      <select
                        id="treatment"
                        name="treatment"
                        value={treatment}
                        onChange={(e) => setTreatment(e.target.value)}
                        className={`${inputClass} h-12 appearance-none pr-10 ${
                          treatment === "" ? "text-slate-400" : ""
                        }`}
                      >
                        <option value="">Select a treatment</option>
                        <option>Skin Consultation</option>
                        <option>Laser Hair Removal</option>
                        <option>Acne Treatment</option>
                        <option>HydraFacial</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[11px] font-semibold text-[#172C50]"
                    >
                      Your message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      className={`${inputClass} h-28 resize-none py-3`}
                    />
                  </div>
                </div>

                <div className="mt-3 flex items-start gap-2.5">
                  <input
                    id="agree"
                    name="agree"
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 shrink-0 rounded-[2px] border border-[#DCE4F1] accent-[#173FA9]"
                  />
                  <label
                    htmlFor="agree"
                    className="text-[10px] leading-[1.6] text-[#61718C]"
                  >
                    I agree to be contacted about my inquiry and have read the
                    privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2.5 rounded-[4px] bg-[#173FA9] border border-[#FFFFFF00] px-7 text-[13px] font-medium text-white transition-colors hover:bg-[#14368F] focus:outline-none focus:ring-2 focus:ring-[#173FA9]/30 sm:w-auto"
                >
                  Send your message
                  <SendIcon />
                </button>
              </form>

              <p style={sans} className="mt-8 text-[10px] leading-[1.7] text-[#61718C]">
                Please don't include sensitive medical information. For urgent
                medical concerns, contact your local emergency service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
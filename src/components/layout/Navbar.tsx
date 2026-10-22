"use client";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serif = { fontFamily: "var(--font-cormorant), serif" };
const sans = { fontFamily: "var(--font-manrope), sans-serif" };

const links = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our clinic", href: "/contact#location" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Sidebar khula ho toh page scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="absolute inset-x-0 top-0 z-20 mx-auto max-w-[1440px] px-5 md:px-18">
      {/* Nav */}
      <header className="flex items-start justify-between pt-5 md:pt-8">
        <Link href="/">
          <div style={serif} className="text-[40px] text-[#FFFFFF] leading-none tracking-wide md:text-[40px]">
            rosmatic
          </div>
          <div style={serif} className="mt-1 text-[9px] uppercase md:tracking-[0.18em] text-[#D4E0F9] md:text-[8px]">
            Skin · Laser · Aesthetics
          </div>
        </Link>
        <nav style={sans} className="hidden items-center gap-10  md:flex">
          {links.map((l) => {
            const active = l.href !== "#" && pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`pb-1 text-[13px] ${
                  active ? "border-b  border-[#FFFFFF] md:text-sm text-[#FFFFFF]" : "text-gray-200 hover:text-white md:text-sm "
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        <Link
  href="/contact#contact-form"
  className=" flex items-center gap-6 rounded-sm bg-white pl-5 pr-4 py-2 text-[13px] md:text-xs font-semibold text-[#173FA9]"
>
            Book an appointment <ArrowUpRight size={16} />
          </Link>
          <hr />
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="flex h-12 w-12 mt-2 items-center justify-center p-0 rounded-sm border border-[#FFFFFF55] md:hidden"
          aria-label="Open menu"
        >
          <span className="flex font-semibold flex-col gap-[6px]">
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
            <span className="block h-px w-5 bg-white" />
          </span>
        </button>
      </header>

      {/* Mobile sidebar */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <aside
        style={sans}
        className={`fixed right-0 top-0 z-50 flex h-full w-[78%] max-w-[320px] flex-col bg-[#0A2764] px-6 pb-8 pt-5 text-white shadow-2xl transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <div style={serif} className="text-[32px] leading-none tracking-wide">
            rosmatic
          </div>
          <button
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#FFFFFF55]"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col">
          {links.map((l) => {
            const active = l.href !== "#" && pathname === l.href;
            return (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-white/15 py-4 text-[15px] ${
                  active ? "text-white" : "text-[#D4E0F9]"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

     <Link
  href="/contact#contact-form"
  onClick={() => setOpen(false)}
  className="mt-auto flex items-center justify-center gap-6 rounded-sm bg-white px-6 py-4 text-[13px] font-semibold text-[#173FA9]"
>
          Book a consultation <ArrowUpRight size={18} />
        </Link>
      </aside>
    </div>
  );
}
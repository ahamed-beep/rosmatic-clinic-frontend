"use client";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const KEY = "smooth-scroll-target";

const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export default function SmoothHashScroll() {
  const pathname = usePathname();
  const router = useRouter();

  // Naya page khulne ke baad: saved section tak smooth scroll
  useEffect(() => {
    const saved = sessionStorage.getItem(KEY);
    let t: ReturnType<typeof setTimeout> | undefined;

    if (saved) {
      sessionStorage.removeItem(KEY);
      t = setTimeout(() => {
        scrollToId(saved);
        history.replaceState(null, "", `#${saved}`);
      }, 400); // page render hone ka wait
    } else if (window.location.hash) {
      // Direct URL (/contact#location) khulne par
      const hash = window.location.hash.slice(1);
      t = setTimeout(() => scrollToId(hash), 300);
    }

    return () => {
      if (t) clearTimeout(t);
    };
  }, [pathname]);

  // Hash wale links ko intercept karo
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a || !a.href) return;

      const url = new URL(a.href, window.location.origin);
      if (url.origin !== window.location.origin || !url.hash) return;

      e.preventDefault(); // Next ka instant jump band

      if (url.pathname === window.location.pathname) {
        // Same page: seedha smooth scroll
        history.pushState(null, "", url.hash);
        setTimeout(() => scrollToId(url.hash.slice(1)), 100);
      } else {
        // Dusra page: pehle page kholo (top par), phir smooth scroll
        sessionStorage.setItem(KEY, url.hash.slice(1));
        router.push(url.pathname);
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  return null;
}
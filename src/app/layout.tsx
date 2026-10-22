import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ChatWidget from "@/components/layout/ChatWidget";
import SmoothHashScroll from "@/components/layout/SmoothHashScroll";

const cormorant = localFont({
  src: "../../public/fonts/CormorantGaramond-Regular.ttf",
  variable: "--font-cormorant",
  weight: "400",
  display: "swap",
});

const manrope = localFont({
  src: "../../public/fonts/Manrope-Regular.ttf",
  variable: "--font-manrope",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rosmatic — Skin, Laser & Aesthetics",
  description:
    "Expert dermatology, lasers and aesthetic care. Personalised to your skin.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}
    >
            <body className="min-h-full flex flex-col">
        <SmoothHashScroll />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
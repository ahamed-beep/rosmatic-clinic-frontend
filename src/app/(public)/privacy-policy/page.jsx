import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Rosmatic Skin Clinic",
  description:
    "How Rosmatic Skin Clinic collects, uses and protects your information.",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Contact", href: "/contact" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-800">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
        <nav className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3 px-6 py-4">
          <Link href="/" className="text-[22px] font-bold text-neutral-900">
            Rosmatic
          </Link>
          <div className="flex flex-wrap items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[15px] text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-neutral-900 px-[18px] py-2.5 text-sm text-white transition-opacity hover:opacity-90"
            >
              Book Consultation
            </Link>
          </div>
        </nav>
      </header>

      {/* Content */}
      <main className="mx-auto w-full max-w-[800px] flex-1 px-6 py-16 leading-[1.7]">
        <h1 className="mb-2 text-4xl font-bold">Privacy Policy</h1>
        <p className="mb-6 text-neutral-500">Last updated: October 23, 2026</p>

        <p>
          Rosmatic Skin Clinic (&quot;Rosmatic&quot;, &quot;we&quot;, &quot;us&quot;), located in DHA
          Phase 5, Lahore, Pakistan, respects your privacy. This policy explains
          what information we collect through our website and our WhatsApp
          chatbot, how we use it, and the choices you have.
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          1. Information We Collect
        </h2>
        <ul className="list-disc pl-5">
          <li>Your name, phone number and email address when you contact us or fill out a form on our website.</li>
          <li>The messages you send to our WhatsApp chatbot, including questions about treatments and appointments.</li>
          <li>Basic technical information such as browser type and pages visited on our website.</li>
        </ul>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc pl-5">
          <li>To answer your questions about our treatments and services.</li>
          <li>To book and manage consultations and appointments.</li>
          <li>To improve our website and chatbot responses.</li>
          <li>To contact you about your enquiry or appointment.</li>
        </ul>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          3. WhatsApp Communication
        </h2>
        <p>
          Our chatbot uses the WhatsApp Business Platform provided by Meta.
          Messages you send to us are processed through this platform and our
          servers so that we can reply to you. You can stop chatting with us at
          any time by simply not messaging, or by asking us to stop.
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          4. Sharing of Information
        </h2>
        <p>
          We do not sell or rent your personal information. We only share it
          with service providers who help us run our website and chatbot (such
          as hosting, database and messaging providers), and only when needed
          to provide our services, or when required by law.
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          5. Data Security and Retention
        </h2>
        <p>
          We take reasonable steps to protect your information. We keep it only
          as long as needed for the purposes described above, or as required by
          law.
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">6. Your Rights</h2>
        <p>
          You may ask us to access, correct or delete the personal information
          we hold about you by contacting us using the details below.
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">7. Contact Us</h2>
        <p>
          Rosmatic Skin Clinic, DHA Phase 5, Lahore, Pakistan.
          <br />
          Email:{" "}
          <a
            href="mailto:muhamedahamed251@gmail.com"
            className="text-blue-600 underline"
          >
            muhamedahamed251@gmail.com
          </a>
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          8. Changes to This Policy
        </h2>
        <p>
          We may update this policy from time to time. The latest version will
          always be available on this page.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-neutral-500">
          <span>
            © {new Date().getFullYear()} Rosmatic Skin Clinic. All rights reserved.
          </span>
          <div className="flex flex-wrap gap-5">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-neutral-900"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
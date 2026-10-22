import Link from "next/link";

export const metadata = {
  title: "Data Deletion Instructions | Rosmatic Skin Clinic",
  description:
    "How to request deletion of your data from Rosmatic Skin Clinic.",
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Treatments", href: "/treatments" },
  { label: "Contact", href: "/contact" },
];

export default function DataDeletionPage() {
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
        <h1 className="mb-2 text-4xl font-bold">Data Deletion Instructions</h1>
        <p className="mb-6 text-neutral-500">Last updated: October 23, 2026</p>

        <p>
          Rosmatic Skin Clinic respects your right to control your personal
          data. If you have chatted with our WhatsApp chatbot or submitted a
          form on our website, you can ask us to delete the information we hold
          about you.
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          How to Request Deletion
        </h2>
        <ol className="list-decimal pl-5">
          <li>
            Send an email to{" "}
            <a
              href="mailto:muhamedahamed251@gmail.com"
              className="text-blue-600 underline"
            >
              muhamedahamed251@gmail.com
            </a>{" "}
            with the subject &quot;Data Deletion Request&quot;.
          </li>
          <li>
            Include the phone number you used to message our WhatsApp chatbot,
            and your name if you shared it with us.
          </li>
          <li>
            We will confirm your request and delete your data from our systems.
          </li>
        </ol>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          What Gets Deleted
        </h2>
        <ul className="list-disc pl-5">
          <li>Your name, phone number and email address.</li>
          <li>Your chat messages with our WhatsApp chatbot.</li>
          <li>Any enquiry or appointment details you submitted through our website.</li>
        </ul>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">Timeline</h2>
        <p>
          We process deletion requests within 30 days. Some information may be
          kept for longer only if the law requires us to.
        </p>

        <h2 className="mb-2 mt-8 text-[22px] font-semibold">
          More Information
        </h2>
        <p>
          Read our{" "}
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>{" "}
          to learn how we collect and use your information.
        </p>
      </main>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-neutral-50">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm text-neutral-500">
          <span>© 2026 Rosmatic Skin Clinic. All rights reserved.</span>
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
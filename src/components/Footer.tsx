import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Apply", href: "#closing" },
];

export default function Footer() {
  return (
    <footer className="page-shell border-t border-black/[0.07]">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">

        {/* Main row */}
        <div className="grid gap-12 py-16 lg:grid-cols-[1fr_auto] lg:py-20">

          {/* Brand */}
          <div className="max-w-[420px]">
            <Image
              src="/assets/Logo/PNG/Vaxen colour black.png"
              alt="Vaxen"
              width={1284}
              height={910}
              className="h-auto w-[118px]"
              priority={false}
            />
            <p className="mt-5 text-[0.9rem] font-medium leading-[1.65] text-black/45">
              Private treasury and execution infrastructure for institutional
              cross-border operators.
            </p>
            <a
              href="mailto:access@vaxenglobal.com"
              className="mt-4 inline-block text-[0.88rem] font-semibold text-black/55 transition-colors hover:text-black"
            >
              access@vaxenglobal.com
            </a>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap content-start gap-x-10 gap-y-3 lg:pt-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.9rem] font-medium text-black/50 transition-colors hover:text-black"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-black/[0.06] py-8">
          <p className="max-w-[800px] text-[0.78rem] font-medium leading-[1.75] text-black/30">
            Vaxen Global Ltd. is a private company. This platform is not authorised
            or regulated by the Financial Conduct Authority or any equivalent regulatory
            authority. Services are made available exclusively to verified institutional
            clients and do not constitute a regulated financial product, public offering,
            or invitation to invest.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-black/[0.05] pb-10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.8rem] font-medium text-black/35">
            © Vaxen Global Ltd. 2026. All rights reserved. Private &amp; Confidential.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-[0.8rem] font-medium text-black/35 transition-colors hover:text-black/60">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[0.8rem] font-medium text-black/35 transition-colors hover:text-black/60">
              Terms of Use
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

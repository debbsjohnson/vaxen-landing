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
    <footer className="page-shell">
      <div className="mx-auto grid min-h-[39rem] max-w-[1560px] px-6 py-20 lg:grid-cols-[31rem_1fr] lg:px-10 lg:py-24">
        <div className="flex items-start justify-center lg:justify-start lg:pt-10">
          <div className="w-[17.5rem]">
            <Image
              src="/assets/Logo/PNG/Vaxen colour black.png"
              alt="Vaxen"
              width={1284}
              height={910}
              className="h-auto w-full"
              priority={false}
            />
          </div>
        </div>

        <div className="flex min-h-[24rem] flex-col">
          <nav className="mt-12 flex flex-wrap items-start justify-center gap-x-10 gap-y-4 lg:mt-[5.25rem] lg:justify-between">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[0.95rem] font-semibold text-black/78 transition-colors duration-200 hover:text-black/55"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3 lg:justify-start">
            <a href="mailto:access@vaxenglobal.com" className="text-[0.9rem] font-medium text-black/60 hover:text-black transition-colors">
              access@vaxenglobal.com
            </a>
            <a href="/privacy" className="text-[0.9rem] font-medium text-black/60 hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[0.9rem] font-medium text-black/60 hover:text-black transition-colors">
              Terms of Use
            </a>
          </div>

          <p className="mt-auto pb-6 text-center text-[0.85rem] font-medium text-black/50 lg:text-right">
            © Vaxen Global Ltd. 2026. All rights reserved. Private &amp; Confidential.
          </p>
        </div>
      </div>
    </footer>
  );
}

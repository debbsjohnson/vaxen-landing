import Image from "next/image";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "The Problem", href: "#problem" },
  { label: "Approach", href: "#approach" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Closing", href: "#closing" },
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
          <nav className="mt-12 flex flex-wrap items-start justify-center gap-x-12 gap-y-4 lg:mt-[5.25rem] lg:justify-between">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[1rem] font-semibold text-black/78 transition-colors duration-200 hover:text-black/55"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <p className="mt-auto pb-6 text-center text-[1rem] font-semibold text-black/72 lg:text-right">
            Vaxen 2026. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

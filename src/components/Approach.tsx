import Image from "next/image";

const capabilities = [
  {
    icon: "/assets/icon-coin.svg",
    iconSize: 40,
    title: "Multi-Currency Balance Management",
    body: "Maintain controlled balances across USD, GBP, EUR, and BRL within a unified treasury environment.",
  },
  {
    icon: "/assets/icon-banking.svg",
    iconSize: 42,
    title: "Consolidated Treasury Visibility",
    body: "Single-framework oversight across all holdings and exposure — no fragmented views, no blind spots.",
  },
  {
    icon: "/assets/icon-transfer.svg",
    iconSize: 42,
    title: "Precision Currency Conversion",
    body: "Execute conversions at scale, with attention to timing, liquidity, and execution quality.",
  },
  {
    icon: "/assets/icon-money.svg",
    iconSize: 46,
    title: "Structured Settlement Access",
    body: "Access high-value settlement with institutional-grade structure across supported jurisdictions.",
  },
  {
    icon: "/assets/icon-manage.svg",
    iconSize: 36,
    title: "Reporting & Transaction Oversight",
    body: "Maintain clear, auditable records with structured operational reporting on every transaction.",
  },
];


export default function Approach() {
  return (
    <section id="approach" className="page-shell large-section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[620px] w-[620px] translate-x-1/3 -translate-y-1/4 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(227,35,63,0.08) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 left-0 h-[580px] w-[580px] -translate-x-1/3 translate-y-1/4 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(116,86,199,0.08) 0%, transparent 60%)" }} />
      </div>
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        {/* Header */}
        <div className="text-center">
          <h4 className="section-title text-black">The Vaxen Approach</h4>
          <p className="mx-auto mt-8 max-w-[600px] text-[1.05rem] font-medium leading-[1.65] text-black/80">
            One treasury structure. Precision execution. Controlled deployment.
          </p>
        </div>

        {/* Capability cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="soft-card rounded-[1.5rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.045)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            >
              {/* Icon disc */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-black/[0.05]">
                <Image
                  src={cap.icon}
                  alt=""
                  width={cap.iconSize}
                  height={cap.iconSize}
                  className="object-contain"
                />
              </div>
              <h3 className="text-[1.05rem] font-bold leading-snug text-black">
                {cap.title}
              </h3>
              <p className="mt-3 text-[0.9rem] font-medium leading-[1.65] text-black/65">
                {cap.body}
              </p>
            </div>
          ))}

          {/* CTA card — fills the 6th slot in the 3-col grid */}
          <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-[#06060B] p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.18)] sm:col-span-2 lg:col-span-1">
            <p className="text-[1.1rem] font-bold leading-snug text-white">
              Built for operators who move capital at institutional scale.
            </p>
            <a
              href="mailto:access@vaxenglobal.com"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-[0.88rem] font-bold text-white transition-all hover:bg-white hover:text-[#06060B]"
            >
              Request Access
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

const capabilities = [
  { title: "Multi-Currency Balance Management",  body: "Maintain controlled balances across USD, GBP, EUR, and BRL within a unified treasury environment." },
  { title: "Consolidated Treasury Visibility",   body: "Single-framework oversight across all holdings and exposure — no fragmented views, no blind spots." },
  { title: "Precision Currency Conversion",      body: "Execute conversions at scale, with attention to timing, liquidity, and execution quality." },
  { title: "Structured Settlement Access",       body: "Access high-value settlement with institutional-grade structure across supported jurisdictions." },
  { title: "Reporting & Transaction Oversight",  body: "Maintain clear, auditable records with structured operational reporting on every transaction." },
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
        <div className="mb-16 max-w-[620px]">
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-black/35">
            Capabilities
          </p>
          <h2 className="section-title text-black">
            Everything required.
            <br />
            Nothing redundant.
          </h2>
          <p className="mt-6 text-[1.05rem] font-medium leading-[1.65] text-black/70">
            One treasury structure. Precision execution. Controlled deployment.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="soft-card rounded-[1.5rem] p-8 shadow-[0_8px_32px_rgba(0,0,0,0.045)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
            >
              <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-black/25">
                0{i + 1}
              </p>
              <h3 className="text-[1.05rem] font-bold leading-snug text-black">
                {cap.title}
              </h3>
              <p className="mt-3 text-[0.9rem] font-medium leading-[1.65] text-black/65">
                {cap.body}
              </p>
            </div>
          ))}

          {/* CTA card — fills the 6th slot in the 3-col grid */}
          <div className="flex flex-col items-center justify-center rounded-[1.5rem] bg-[#06091C] p-8 text-center shadow-[0_8px_32px_rgba(0,0,0,0.18)] sm:col-span-2 lg:col-span-1">
            <p className="text-[1.1rem] font-bold leading-snug text-white">
              Built for operators who move capital at institutional scale.
            </p>
            <a
              href="mailto:access@vaxenglobal.com"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-3 text-[0.88rem] font-bold text-white transition-all hover:bg-white hover:text-[#06091C]"
            >
              Request Access
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

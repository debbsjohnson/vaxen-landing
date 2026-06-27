const capabilities = [
  { title: "Execute",   body: "High-value international transactions" },
  { title: "Manage",   body: "Recurring multi-currency exposure" },
  { title: "Precision",body: "Exact timing and execution quality on every conversion" },
  { title: "Operate",  body: "Across multiple financial jurisdictions" },
];

export default function BuiltFor() {
  return (
    <section id="about" className="page-shell large-section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[700px] w-[700px] -translate-x-1/3 -translate-y-1/2 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(41,116,255,0.10) 0%, transparent 60%)" }} />
        <div className="absolute right-0 top-1/3 h-[580px] w-[580px] translate-x-1/3 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(227,35,63,0.08) 0%, transparent 60%)" }} />
      </div>
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:pl-2">
            <p className="mb-5 text-[1.25rem] font-semibold leading-none text-black">
              Built for Capital
            </p>
            <h2 className="text-[clamp(2.7rem,4.4vw,5.1rem)] font-bold leading-[1.04] text-black">
              Operating
              <br />
              Across Borders
            </h2>
            <p className="mt-8 max-w-[560px] text-[1.05rem] font-medium leading-[1.65] text-black/80">
              Vaxen Global is a private treasury and execution platform designed
              for organisations managing significant cross-border transaction volume.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-4 top-24 h-[28rem] rounded-full bg-[#d53140]/10 blur-3xl" />
            <p className="mb-8 text-[1.15rem] font-semibold text-black">
              We support businesses that:
            </p>
            <div className="relative grid gap-5 sm:grid-cols-2">
              {capabilities.map((item, i) => (
                <article
                  key={item.title}
                  className="soft-card min-h-[13rem] rounded-[1.55rem] p-7"
                >
                  <p className="mb-5 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-black/25">
                    0{i + 1}
                  </p>
                  <h3 className="text-[1.55rem] font-bold leading-none text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[1.05rem] font-medium leading-snug text-black/75">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer — dark treatment for emphasis */}
        <div className="mt-20 rounded-[1.5rem] bg-[#06091C] px-8 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/40 mb-3">
                Important
              </p>
              <p className="max-w-[460px] text-[1.7rem] font-bold leading-tight text-white lg:text-[2rem]">
                This is not a retail
                <br />
                payment service.
              </p>
            </div>
            <div className="h-px w-full bg-white/10 md:h-16 md:w-px md:shrink-0" />
            <p className="text-[1.2rem] font-medium leading-[1.55] text-white/70">
              It is structured infrastructure for capital-intensive operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

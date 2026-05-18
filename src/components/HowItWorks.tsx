const steps = [
  {
    number: "1",
    title: "Treasury Structuring",
    body: "We configure a multi-currency treasury environment aligned to your cross-border transaction profile.",
    className: "left-0 top-[1.25rem]",
  },
  {
    number: "2",
    title: "Balance Consolidation",
    body: "Maintain controlled exposure across USD, GBP, EUR, and BRL within a unified structure.",
    className: "left-[26rem] top-[9.5rem]",
  },
  {
    number: "3",
    title: "Precision Conversion & Settlement",
    body: "Execute high-value currency conversion and settlement with attention to timing, liquidity, and execution quality.",
    className: "left-0 top-[20.5rem]",
  },
  {
    number: "4",
    title: "Capital Deployment",
    body: "Transfer funds for acquisitions, capital allocation, or operational requirements with structured oversight and transparency.",
    extra: "All activity operates within a controlled, auditable framework designed for capital-intensive organisations.",
    className: "left-[26rem] top-[33rem]",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="page-shell py-16 sm:py-24">
      <div className="mx-auto max-w-[1040px] px-6">
        <h2
          className="section-title text-center text-black"
          style={{ fontSize: "clamp(3.2rem, 5vw, 4.4rem)" }}
        >
          How It Works
        </h2>

        <div className="relative left-1/2 mt-20 h-[51rem] w-[47rem] max-w-[calc(100vw-3rem)] -translate-x-1/2 origin-top scale-[min(1,calc((100vw-3rem)/47rem))] bg-[radial-gradient(circle_at_46%_36%,rgba(44,116,255,0.13),transparent_34%),radial-gradient(circle_at_55%_60%,rgba(215,36,57,0.13),transparent_42%)]">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 752 816"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M 320 92 H 570 Q 595 92 595 118 V 190"
              stroke="#ef4550"
              strokeWidth="1.5"
            />
            <path
              d="M 416 258 H 145 Q 120 258 120 284 V 330"
              stroke="#3f7fff"
              strokeWidth="1.5"
            />
            <path
              d="M 320 432 H 570 Q 595 432 595 458 V 520"
              stroke="#ef4550"
              strokeWidth="1.5"
            />
          </svg>
          <div className="relative h-full">
            {steps.map((step) => (
              <article
                key={step.number}
                className={`soft-card absolute w-[20rem] rounded-[1rem] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.055)] ${step.className}`}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/55 text-[1rem] font-bold text-black shadow-sm">
                    {step.number}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="text-[1.14rem] font-bold leading-tight text-black">
                      {step.title}
                    </h3>
                    <p className="mt-5 text-[0.82rem] font-medium leading-[1.55] text-black/85">
                      {step.body}
                    </p>
                    {step.extra ? (
                      <p className="mt-5 text-[0.82rem] font-medium leading-[1.55] text-black/85">
                        {step.extra}
                      </p>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

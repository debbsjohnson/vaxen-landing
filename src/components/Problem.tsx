function FXChart() {
  const points = "0,68 45,52 90,72 135,40 180,58 225,36 270,55 315,42 360,60";
  return (
    <div className="mt-auto w-full overflow-hidden rounded-xl bg-black/[0.04] p-4">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[0.7rem] font-bold uppercase tracking-wider text-black/35">USD / GBP</span>
        <span className="text-[0.72rem] font-bold text-[#ef4550]">▼ −2.4%</span>
      </div>
      <svg viewBox="0 0 360 80" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="fxFill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#ef4550" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ef4550" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[25, 50].map((y) => (
          <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="black" strokeOpacity="0.05" strokeWidth="1" />
        ))}
        <polygon points={`0,80 ${points} 360,80`} fill="url(#fxFill)" />
        <polyline points={points} stroke="#ef4550" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="360" cy="60" r="3.5" fill="#ef4550" />
        <circle cx="360" cy="60" r="8" fill="#ef4550" fillOpacity="0.18" />
      </svg>
      <div className="mt-2 flex justify-between">
        <span className="text-[0.65rem] text-black/30">Agreement date</span>
        <span className="text-[0.65rem] font-semibold text-black/40">Settlement</span>
      </div>
    </div>
  );
}

function SettlementTimeline() {
  const steps = [
    { day: "T+0", label: "Trade executed", active: false },
    { day: "T+1", label: "In processing", active: false },
    { day: "T+2", label: "Settlement complete", active: true },
  ];
  return (
    <div className="mt-auto w-full space-y-2.5">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-3">
          <div
            className={`flex h-9 w-16 shrink-0 items-center justify-center rounded-lg text-[0.72rem] font-bold ${
              step.active
                ? "bg-[#ef4550] text-white"
                : "bg-black/[0.06] text-black/50"
            }`}
          >
            {step.day}
          </div>
          <span
            className={`text-[0.85rem] font-medium ${
              step.active ? "font-bold text-[#ef4550]" : "text-black/55"
            }`}
          >
            {step.label}
          </span>
        </div>
      ))}
      <p className="pt-1 text-[0.72rem] font-semibold uppercase tracking-wider text-black/30">
        Traditional banking cycle
      </p>
    </div>
  );
}

function ProviderDiagram() {
  const nodes = [
    { x: 40, y: 32, label: "Bank A" },
    { x: 220, y: 32, label: "Bank B" },
    { x: 40, y: 128, label: "FX Co." },
    { x: 220, y: 128, label: "Bank C" },
  ];
  return (
    <div className="mt-auto w-full">
      <svg viewBox="0 0 260 160" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="centerNode" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2974ff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#e3233f" stopOpacity="0.12" />
          </radialGradient>
        </defs>
        {nodes.map((n) => (
          <line
            key={n.label}
            x1="130" y1="80"
            x2={n.x} y2={n.y}
            stroke="black" strokeOpacity="0.1" strokeWidth="1.5" strokeDasharray="5 4"
          />
        ))}
        {nodes.map((n) => (
          <g key={n.label}>
            <circle cx={n.x} cy={n.y} r="22" fill="white" stroke="black" strokeOpacity="0.08" strokeWidth="1" />
            <text x={n.x} y={n.y + 4} textAnchor="middle" fontSize="9" fill="black" fillOpacity="0.45" fontWeight="600" fontFamily="sans-serif">{n.label}</text>
          </g>
        ))}
        <circle cx="130" cy="80" r="30" fill="url(#centerNode)" stroke="black" strokeOpacity="0.07" strokeWidth="1" />
        <text x="130" y="77" textAnchor="middle" fontSize="8" fill="black" fillOpacity="0.45" fontWeight="700" fontFamily="sans-serif">YOUR</text>
        <text x="130" y="89" textAnchor="middle" fontSize="8" fill="black" fillOpacity="0.45" fontWeight="700" fontFamily="sans-serif">CAPITAL</text>
      </svg>
      <p className="text-center text-[0.7rem] font-semibold uppercase tracking-wider text-black/30">
        4 separate providers · no unified view
      </p>
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="page-shell large-section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-[700px] w-[700px] -translate-x-1/4 -translate-y-1/4 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(41,116,255,0.09) 0%, transparent 60%)" }} />
        <div className="absolute bottom-0 right-0 h-[650px] w-[650px] translate-x-1/4 translate-y-1/4 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(116,86,199,0.09) 0%, transparent 60%)" }} />
      </div>
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="mx-auto mb-28 max-w-[760px] text-center">
          <h2 className="section-title text-black">The Problem</h2>
          <p className="mt-8 text-[1.05rem] font-medium leading-[1.65] text-black/80">
            Cross-border capital execution demands control.
            <br />
            Organisations operating internationally face:
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {/* Large card — spans 2 rows */}
          <article className="soft-card row-span-2 flex min-h-[28rem] lg:min-h-[48rem] flex-col rounded-[1.5rem] bg-gradient-to-br from-[#edf3ff] to-white p-8 lg:p-10">
            <p className="text-[1.4rem] font-medium leading-snug text-black">
              <strong className="font-semibold">Currency volatility</strong>
              <br />
              between agreement and
              <br />
              settlement
            </p>
            <FXChart />
            <div className="mt-8">
              <h3 className="text-[1.95rem] font-bold text-black">At Scale</h3>
              <p className="mt-4 text-[1rem] font-medium leading-[1.55] text-black/80">
                these inefficiencies directly erode margins, reduce execution
                quality, and introduce unnecessary risk
              </p>
            </div>
          </article>

          {/* Slippage */}
          <article className="soft-card flex min-h-[18rem] flex-col rounded-[1.5rem] bg-gradient-to-br from-[#f0f4ff] to-white p-8 lg:p-10">
            <p className="text-[1.4rem] font-medium leading-snug text-black">
              <strong className="font-semibold">Slippage</strong>
              <br />
              when converting size
              <br />
              across fragmented
              <br />
              liquidity sources
            </p>
            <div className="mt-auto flex items-end justify-end pt-6">
              <div className="flex gap-1.5 items-end h-16">
                {[40, 65, 45, 80, 35, 70, 50].map((h, i) => (
                  <div
                    key={i}
                    className="w-4 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 4
                          ? "linear-gradient(180deg,#ef4550,#c41e3a)"
                          : "rgba(0,0,0,0.08)",
                    }}
                  />
                ))}
              </div>
            </div>
          </article>

          {/* Delays */}
          <article className="soft-card flex min-h-[18rem] flex-col rounded-[1.5rem] bg-gradient-to-br from-[#edf3ff] to-white p-8 lg:p-10">
            <p className="text-[1.4rem] font-medium leading-snug text-black">
              <strong className="font-semibold">Delays driven</strong>
              <br />
              by traditional banking
              <br />
              settlement cycles
            </p>
            <SettlementTimeline />
          </article>

          {/* Operational complexity */}
          <article className="soft-card flex min-h-[22rem] flex-col rounded-[1.5rem] bg-gradient-to-br from-[#f4dede] to-white p-8 lg:p-10">
            <p className="text-[1.25rem] font-medium leading-[1.55] text-black">
              <strong className="font-semibold">Operational complexity</strong>
              <br />
              across multiple accounts
              <br />
              and providers
            </p>
            <ProviderDiagram />
          </article>

          {/* Limited visibility */}
          <article className="soft-card flex min-h-[22rem] flex-col rounded-[1.5rem] p-8 lg:p-10">
            <p className="text-[1.25rem] font-medium leading-snug text-black">
              <strong className="font-semibold">Limited visibility</strong>
              <br />
              over consolidated
              <br />
              multi-currency exposure
            </p>
            <div className="mt-auto space-y-2.5 pt-6">
              {[
                { label: "USD", color: "#3b82f6", pct: 38 },
                { label: "GBP", color: "#8b5cf6", pct: 27 },
                { label: "EUR", color: "#06b6d4", pct: 21 },
                { label: "BRL", color: "#10b981", pct: 14 },
              ].map(({ label, color, pct }) => (
                <div key={label}>
                  <div className="mb-1 flex items-center justify-between">
                    <span className="text-[0.72rem] font-bold text-black/50">{label}</span>
                    <span className="text-[0.65rem] font-medium text-black/25">No unified view</span>
                  </div>
                  <div className="h-[5px] w-full overflow-hidden rounded-full bg-black/[0.05]">
                    <div
                      className="h-full rounded-full opacity-40"
                      style={{ width: `${pct}%`, background: color }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[0.65rem] font-semibold uppercase tracking-wider text-black/25">
              4 separate balance pools · fragmented
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

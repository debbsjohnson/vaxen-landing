const CORRIDORS = [
  {
    from: "USD", to: "GBP", fromColor: "#3b82f6", toColor: "#8b5cf6",
    rate: "0.7891", chg: "+0.12%", up: true,
    spark: "0,20 10,18 20,22 30,15 40,17 50,13 60,10",
    vol: 82,
  },
  {
    from: "USD", to: "EUR", fromColor: "#3b82f6", toColor: "#06b6d4",
    rate: "0.9234", chg: "−0.08%", up: false,
    spark: "0,10 10,14 20,12 30,16 40,18 50,20 60,22",
    vol: 68,
  },
  {
    from: "USD", to: "BRL", fromColor: "#3b82f6", toColor: "#10b981",
    rate: "4.9812", chg: "+0.21%", up: true,
    spark: "0,22 10,19 20,21 30,16 40,14 50,10 60,8",
    vol: 55,
  },
  {
    from: "GBP", to: "EUR", fromColor: "#8b5cf6", toColor: "#06b6d4",
    rate: "1.1698", chg: "+0.03%", up: true,
    spark: "0,20 10,20 20,18 30,19 40,17 50,17 60,16",
    vol: 44,
  },
  {
    from: "GBP", to: "BRL", fromColor: "#8b5cf6", toColor: "#10b981",
    rate: "6.3104", chg: "+0.18%", up: true,
    spark: "0,22 10,20 20,22 30,17 40,15 50,12 60,10",
    vol: 38,
  },
  {
    from: "EUR", to: "BRL", fromColor: "#06b6d4", toColor: "#10b981",
    rate: "5.3927", chg: "−0.04%", up: false,
    spark: "0,12 10,12 20,14 30,14 40,16 50,18 60,20",
    vol: 31,
  },
];

function Sparkline({ points, up }: { points: string; up: boolean }) {
  const color = up ? "#34d399" : "#f87171";
  return (
    <svg viewBox="0 0 60 30" className="h-6 w-14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`spk-${up ? "up" : "dn"}`} x1="0" y1="0" x2="0" y2="1" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={color} stopOpacity="0.18" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,30 ${points} 60,30`} fill={`url(#spk-${up ? "up" : "dn"})`} />
      <polyline points={points} stroke={color} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function Currencies() {
  return (
    <section className="bg-[#06060B] py-20 lg:py-28">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute left-0 h-[32rem] w-[32rem] -translate-x-1/3 rounded-full bg-[#8b5cf6]/[0.055] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[1390px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/30">
              Infrastructure
            </p>
            <h2 className="section-title text-white">Active Trading Corridors</h2>
            <p className="mt-5 max-w-[500px] text-[1rem] font-medium leading-[1.65] text-white/40">
              Six cross-border pairs, structured for institutional volume.
              Execution at mid-market rates — not retail spreads.
            </p>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="h-1.5 w-1.5 rounded-full bg-emerald-400"
              style={{ animation: "vaxen-pulse 2s ease-in-out infinite" }}
            />
            <span className="text-[0.7rem] font-semibold uppercase tracking-wider text-emerald-400/60">
              All corridors active
            </span>
          </div>
        </div>

        {/* Corridor table */}
        <div className="overflow-hidden rounded-[1.2rem] border border-white/[0.07]">
          {/* Table header */}
          <div className="grid grid-cols-[1fr_auto_auto_auto_auto] gap-6 border-b border-white/[0.06] bg-white/[0.025] px-7 py-3.5">
            <span className="text-[0.65rem] font-bold uppercase tracking-widest text-white/25">Corridor</span>
            <span className="hidden text-right text-[0.65rem] font-bold uppercase tracking-widest text-white/25 sm:block">Rate</span>
            <span className="hidden text-right text-[0.65rem] font-bold uppercase tracking-widest text-white/25 md:block">24h</span>
            <span className="hidden text-right text-[0.65rem] font-bold uppercase tracking-widest text-white/25 lg:block">Trend</span>
            <span className="text-right text-[0.65rem] font-bold uppercase tracking-widest text-white/25">Volume</span>
          </div>

          {/* Rows */}
          {CORRIDORS.map((c, i) => (
            <div
              key={`${c.from}-${c.to}`}
              className={`grid grid-cols-[1fr_auto_auto_auto_auto] items-center gap-6 px-7 py-5 transition-colors hover:bg-white/[0.025] ${
                i < CORRIDORS.length - 1 ? "border-b border-white/[0.04]" : ""
              }`}
            >
              {/* Pair */}
              <div className="flex items-center gap-3">
                {/* Color dots */}
                <div className="flex items-center gap-1">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: c.fromColor }} />
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: c.toColor }} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[0.9rem] font-bold" style={{ color: c.fromColor }}>{c.from}</span>
                  <svg className="h-3.5 w-3.5 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <span className="text-[0.9rem] font-bold" style={{ color: c.toColor }}>{c.to}</span>
                </div>
                {/* Active badge */}
                <div className="hidden items-center gap-1 rounded-full border border-emerald-500/15 bg-emerald-500/[0.08] px-2 py-0.5 sm:flex">
                  <div className="h-1 w-1 rounded-full bg-emerald-400" />
                  <span className="text-[0.58rem] font-bold uppercase tracking-wider text-emerald-400/70">Active</span>
                </div>
              </div>

              {/* Rate */}
              <span
                className="hidden text-right text-[0.92rem] font-bold text-white sm:block"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {c.rate}
              </span>

              {/* Change */}
              <div className="hidden items-center justify-end gap-1.5 md:flex">
                <span className={`text-[0.78rem] font-bold ${c.up ? "text-emerald-400" : "text-rose-400"}`}>
                  {c.up ? "▲" : "▼"} {c.chg}
                </span>
              </div>

              {/* Sparkline */}
              <div className="hidden lg:block">
                <Sparkline points={c.spark} up={c.up} />
              </div>

              {/* Volume bar */}
              <div className="flex min-w-[80px] items-center justify-end gap-2.5">
                <div className="h-[3px] w-16 overflow-hidden rounded-full bg-white/[0.07]">
                  <div
                    className="h-full rounded-full bg-white/30"
                    style={{ width: `${c.vol}%` }}
                  />
                </div>
                <span className="w-6 text-right text-[0.65rem] font-bold text-white/25">{c.vol}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-[0.72rem] font-medium text-white/20">
          Rates shown are indicative only. Execution pricing is structured for institutional volume — not retail spreads.
        </p>
      </div>
    </section>
  );
}

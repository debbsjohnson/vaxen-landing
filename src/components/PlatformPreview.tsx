const TRANSACTIONS = [
  { id: "VX-4892", from: "USD", to: "GBP", fromColor: "#3b82f6", toColor: "#8b5cf6", amount: "$2,450,000", converted: "£1,934,295", status: "Settled",    time: "14:32:08 UTC" },
  { id: "VX-4891", from: "EUR", to: "BRL", fromColor: "#06b6d4", toColor: "#10b981", amount: "€3,100,000", converted: "R$16,717,700", status: "Settled",    time: "14:31:19 UTC" },
  { id: "VX-4890", from: "GBP", to: "EUR", fromColor: "#8b5cf6", toColor: "#06b6d4", amount: "£1,890,000", converted: "€2,210,862",  status: "Processing", time: "14:31:44 UTC" },
  { id: "VX-4889", from: "USD", to: "EUR", fromColor: "#3b82f6", toColor: "#06b6d4", amount: "$5,200,000", converted: "€4,801,680",  status: "Settled",    time: "14:29:22 UTC" },
  { id: "VX-4888", from: "BRL", to: "USD", fromColor: "#10b981", toColor: "#3b82f6", amount: "R$12,400,000", converted: "$2,490,350", status: "Settled",   time: "14:28:55 UTC" },
];

const BALANCES = [
  { code: "USD", symbol: "$",  color: "#3b82f6", amount: "18,420,000", pct: 78 },
  { code: "GBP", symbol: "£",  color: "#8b5cf6", amount: "12,890,000", pct: 55 },
  { code: "EUR", symbol: "€",  color: "#06b6d4", amount: "8,340,000",  pct: 35 },
  { code: "BRL", symbol: "R$", color: "#10b981", amount: "24,100,000", pct: 96 },
];

const RATES = [
  { pair: "USD / GBP", rate: "0.7891", up: true,  chg: "+0.12%" },
  { pair: "USD / EUR", rate: "0.9234", up: false, chg: "−0.08%" },
  { pair: "USD / BRL", rate: "4.9812", up: true,  chg: "+0.21%" },
];

export default function PlatformPreview() {
  return (
    <section className="relative overflow-hidden bg-[#06060B] py-24 lg:py-36">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute right-0 top-0 h-[44rem] w-[44rem] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#2974ff]/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[36rem] w-[36rem] -translate-x-1/4 translate-y-1/4 rounded-full bg-[#7456c7]/[0.06] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1390px] px-6 lg:px-10">
        {/* Section header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/30">
              The Platform
            </p>
            <h2 className="section-title text-white">
              Treasury operations,
              <br />
              centralized.
            </h2>
            <p className="mt-6 max-w-[540px] text-[1.05rem] font-medium leading-[1.7] text-white/45">
              A single operational framework for multi-currency exposure,
              transaction execution, and real-time corridor oversight.
            </p>
          </div>
          <a
            href="mailto:access@vaxenglobal.com"
            className="hidden shrink-0 items-center justify-center rounded-full border border-white/15 px-7 py-3 text-[0.85rem] font-bold text-white/70 transition-all hover:border-white/30 hover:text-white lg:inline-flex"
          >
            Request Access →
          </a>
        </div>

        {/* Dashboard mockup */}
        <div
          className="overflow-hidden rounded-[1.4rem] border border-white/[0.07]"
          style={{
            background: "linear-gradient(160deg, #0d0d1a 0%, #08080f 100%)",
            boxShadow: "0 60px 160px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
          }}
        >
          {/* Mock navigation bar */}
          <div className="flex items-center gap-2 border-b border-white/[0.06] bg-[#0E0E18] px-5 py-3.5">
            {/* Window controls (decorative) */}
            <div className="mr-3 flex items-center gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
              <div className="h-2.5 w-2.5 rounded-full bg-white/10" />
            </div>
            {/* Logo */}
            <div className="mr-6 flex items-center gap-2">
              <div className="h-4 w-4 rounded-sm bg-gradient-to-br from-[#2974ff] to-[#7456c7]" />
              <span
                className="text-[0.7rem] font-black uppercase tracking-[0.14em] text-white/70"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                Vaxen
              </span>
            </div>
            {/* Nav tabs */}
            <div className="hidden items-center gap-0.5 sm:flex">
              {["Treasury", "Transactions", "Balances", "Reports"].map((tab, i) => (
                <span
                  key={tab}
                  className={`rounded-md px-3.5 py-1.5 text-[0.72rem] font-semibold transition-colors ${
                    i === 1 ? "bg-white/[0.08] text-white" : "text-white/30"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            {/* Right: user */}
            <div className="ml-auto flex items-center gap-3">
              <span className="hidden text-[0.65rem] font-semibold uppercase tracking-wider text-white/20 lg:block">
                ACME CAPITAL GROUP
              </span>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2974ff]/20 text-[0.6rem] font-bold text-[#2974ff]">
                AC
              </div>
            </div>
          </div>

          {/* Dashboard content */}
          <div className="grid lg:grid-cols-[1fr_0.52fr]">
            {/* ── Left: Transaction list ── */}
            <div className="border-b border-white/[0.05] p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="mb-5 flex items-center justify-between">
                <h3 className="text-[0.8rem] font-bold uppercase tracking-wider text-white/40">
                  Recent Transactions
                </h3>
                <div className="flex items-center gap-1.5">
                  <div
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    style={{ animation: "vaxen-pulse 2s ease-in-out infinite" }}
                  />
                  <span className="text-[0.62rem] font-bold uppercase tracking-wider text-emerald-400/60">
                    Live
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                {TRANSACTIONS.map((tx) => (
                  <div
                    key={tx.id}
                    className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-4 rounded-xl px-4 py-3.5 transition-colors hover:bg-white/[0.03]"
                  >
                    {/* Pair */}
                    <div className="flex items-center gap-2">
                      <span className="text-[0.75rem] font-bold" style={{ color: tx.fromColor }}>{tx.from}</span>
                      <svg className="h-3 w-3 text-white/15" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                      <span className="text-[0.75rem] font-bold" style={{ color: tx.toColor }}>{tx.to}</span>
                    </div>
                    {/* Amounts */}
                    <div>
                      <p className="text-[0.88rem] font-bold text-white">{tx.amount}</p>
                      <p className="text-[0.68rem] text-white/30">{tx.converted}</p>
                    </div>
                    {/* Status */}
                    <div
                      className={`rounded-full px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-wide ${
                        tx.status === "Settled"
                          ? "bg-emerald-500/12 text-emerald-400"
                          : "bg-amber-500/12 text-amber-400"
                      }`}
                    >
                      {tx.status}
                    </div>
                    {/* Time */}
                    <span className="hidden text-[0.65rem] text-white/20 lg:block">{tx.time}</span>
                  </div>
                ))}
              </div>

              {/* Show more */}
              <div className="mt-4 px-4">
                <span className="cursor-default text-[0.72rem] font-semibold text-white/20">
                  ↓ 147 more transactions this session
                </span>
              </div>
            </div>

            {/* ── Right: Balances + Rates ── */}
            <div className="p-6 lg:p-8">
              {/* Balance overview */}
              <div className="mb-8">
                <h3 className="mb-5 text-[0.8rem] font-bold uppercase tracking-wider text-white/40">
                  Balance Overview
                </h3>
                <div className="space-y-4">
                  {BALANCES.map((b) => (
                    <div key={b.code}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full" style={{ background: b.color }} />
                          <span className="text-[0.72rem] font-bold text-white/50">{b.code}</span>
                        </div>
                        <span
                          className="text-[0.78rem] font-bold text-white/80"
                          style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                          {b.symbol}{b.amount}
                        </span>
                      </div>
                      <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${b.pct}%`, background: b.color, opacity: 0.55 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="mb-8 h-px bg-white/[0.05]" />

              {/* Active rates */}
              <div>
                <h3 className="mb-4 text-[0.8rem] font-bold uppercase tracking-wider text-white/40">
                  Active Corridors
                </h3>
                <div className="space-y-2">
                  {RATES.map((r) => (
                    <div
                      key={r.pair}
                      className="flex items-center justify-between rounded-xl bg-white/[0.03] px-4 py-3"
                    >
                      <span className="text-[0.72rem] font-semibold text-white/40">{r.pair}</span>
                      <div className="flex items-center gap-3">
                        <span
                          className="text-[0.82rem] font-bold text-white/80"
                          style={{ fontFamily: "var(--font-orbitron)" }}
                        >
                          {r.rate}
                        </span>
                        <span className={`text-[0.65rem] font-bold ${r.up ? "text-emerald-400" : "text-rose-400"}`}>
                          {r.up ? "▲" : "▼"} {r.chg}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Status bar */}
          <div className="flex items-center justify-between border-t border-white/[0.04] bg-[#0E0E18]/60 px-8 py-2.5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-400" style={{ animation: "vaxen-pulse 2.5s ease-in-out infinite" }} />
                <span className="text-[0.6rem] font-semibold text-white/20">Systems operational</span>
              </div>
              <span className="text-[0.6rem] text-white/10">|</span>
              <span className="text-[0.6rem] font-semibold text-white/15">End-to-end encrypted</span>
            </div>
            <span className="hidden text-[0.6rem] font-semibold text-white/15 lg:block">
              Rates indicative only · Execution subject to institutional review
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

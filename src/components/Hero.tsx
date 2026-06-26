const NODES = [
  { id: "USD", x: 95,  y: 155, color: "#3b82f6", label: "USD", region: "United States" },
  { id: "GBP", x: 378, y: 88,  color: "#8b5cf6", label: "GBP", region: "United Kingdom" },
  { id: "EUR", x: 402, y: 302, color: "#06b6d4", label: "EUR", region: "European Union" },
  { id: "BRL", x: 150, y: 374, color: "#10b981", label: "BRL", region: "Brazil" },
];

const NODE_MAP = new Map(NODES.map((n) => [n.id, n]));

const EDGES = [
  { from: "USD", to: "GBP", dur: "3.4s", begin: "0s" },
  { from: "GBP", to: "EUR", dur: "2.9s", begin: "1.1s" },
  { from: "EUR", to: "BRL", dur: "3.7s", begin: "2.2s" },
  { from: "BRL", to: "USD", dur: "3.1s", begin: "0.7s" },
  { from: "USD", to: "EUR", dur: "4.3s", begin: "2.0s" },
  { from: "GBP", to: "BRL", dur: "4.1s", begin: "3.1s" },
];

function CorridorMap() {
  return (
    <svg
      viewBox="0 0 490 448"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[520px]"
      aria-hidden="true"
    >
      <defs>
        {NODES.map((n) => (
          <radialGradient key={`grd-${n.id}`} id={`grd-${n.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={n.color} stopOpacity="0.28" />
            <stop offset="100%" stopColor={n.color} stopOpacity="0" />
          </radialGradient>
        ))}
      </defs>

      {/* Edges */}
      {EDGES.map((edge, i) => {
        const f = NODE_MAP.get(edge.from)!;
        const t = NODE_MAP.get(edge.to)!;
        return (
          <g key={i}>
            <line
              x1={f.x} y1={f.y}
              x2={t.x} y2={t.y}
              stroke="rgba(255,255,255,0.11)"
              strokeWidth="1"
            />
            <circle r="3.5" fill={f.color} opacity="0.9">
              <animateMotion
                path={`M ${f.x},${f.y} L ${t.x},${t.y}`}
                dur={edge.dur}
                begin={edge.begin}
                repeatCount="indefinite"
              />
            </circle>
          </g>
        );
      })}

      {/* Nodes */}
      {NODES.map((n) => (
        <g key={n.id}>
          {/* Outer glow */}
          <circle cx={n.x} cy={n.y} r="52" fill={`url(#grd-${n.id})`} />
          {/* Mid ring */}
          <circle cx={n.x} cy={n.y} r="28" fill={n.color} opacity="0.13" />
          {/* Inner ring */}
          <circle cx={n.x} cy={n.y} r="19" fill={n.color} opacity="0.22" />
          {/* Core */}
          <circle cx={n.x} cy={n.y} r="12" fill={n.color} opacity="0.95" />
          {/* Centre dot */}
          <circle cx={n.x} cy={n.y} r="4" fill="white" opacity="0.9" />
          {/* Currency code */}
          <text
            x={n.x}
            y={n.y + 36}
            textAnchor="middle"
            fill="white"
            fontSize="11"
            fontWeight="700"
            letterSpacing="2"
            opacity="0.85"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            {n.label}
          </text>
          {/* Region */}
          <text
            x={n.x}
            y={n.y + 50}
            textAnchor="middle"
            fill="white"
            fontSize="7.5"
            fontWeight="500"
            opacity="0.35"
          >
            {n.region}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#06060B]">
      {/* Atmosphere */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[56rem] w-[56rem] rounded-full bg-[#2974ff]/[0.065] blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[42rem] w-[42rem] translate-x-1/3 rounded-full bg-[#7456c7]/[0.055] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-[#e3233f]/[0.04] blur-[90px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1560px] items-center px-6 pb-16 pt-28 lg:px-10 lg:pt-36">
        <div className="grid w-full gap-14 lg:grid-cols-2 lg:items-center lg:gap-8">
          {/* ── Left: content ── */}
          <div>
            <p className="mb-5 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-white/38">
              Institutional Treasury Infrastructure
            </p>

            <h1
              className="font-black uppercase leading-none text-white"
              style={{
                fontFamily: "var(--font-orbitron)",
                fontSize: "clamp(2.4rem, 8vw, 6.2rem)",
              }}
            >
              Vaxen Global
            </h1>

            <p className="mt-6 max-w-[560px] text-[1.15rem] font-bold leading-snug text-white lg:text-[1.3rem]">
              Private infrastructure for cross-border capital at institutional scale.
            </p>

            <p className="mt-5 max-w-[480px] text-[0.95rem] font-medium leading-relaxed text-white/55 lg:text-[1rem]">
              Designed for institutional operators managing significant cross-border
              transaction volume across USD, GBP, EUR, and BRL.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="mailto:access@vaxenglobal.com"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-[0.9rem] font-bold text-[#06060B] shadow-lg transition-all duration-200 hover:bg-white/90"
              >
                Apply for Access
              </a>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-[0.85rem] font-semibold text-white/60 transition-colors hover:text-white"
              >
                Learn more
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2.5">
              {[
                "4 Supported Currencies",
                "Institutional Operators Only",
                "Application-Based Access",
                "Auditable Framework",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="h-1 w-1 rounded-full bg-white/35" />
                  <span className="text-[0.73rem] font-semibold uppercase tracking-wider text-white/45">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: corridor map ── */}
          <div className="flex items-center justify-center lg:justify-end">
            <CorridorMap />
          </div>
        </div>
      </div>
    </section>
  );
}

const points = [
  "Maintain balances across USD, GBP, EUR, and BRL",
  "Consolidate treasury visibility into a single framework",
  "Execute currency conversion based on timing and transaction size",
  "Access structured settlement for high-value transfers",
  "Maintain clear reporting and transaction oversight",
];

const tiles = [
  { icon: "database", className: "left-[12%] top-[38%] h-40 w-40" },
  { icon: "cash", className: "left-[30%] top-[25%] h-40 w-40" },
  { icon: "yen", className: "left-[30%] top-[53%] h-40 w-40" },
  { icon: "wallet", className: "left-[47%] top-[8%] h-44 w-44" },
  { icon: "globe", className: "left-[47%] top-[38%] h-40 w-40" },
  { icon: "dollar", className: "left-[47%] top-[68%] h-44 w-44" },
  { icon: "transfer", className: "left-[64%] top-[25%] h-40 w-40" },
  { icon: "euro", className: "left-[64%] top-[53%] h-40 w-40" },
  { icon: "aperture", className: "left-[82%] top-[38%] h-40 w-40" },
];

const pillars = [
  "Execution is deliberate.",
  "Exposure is managed.",
  "Settlement is controlled.",
];

function TileIcon({ name }: { name: string }) {
  const common = {
    className: "h-8 w-8",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "cash":
      return (
        <svg {...common}>
          <rect x="3.5" y="6.5" width="17" height="11" rx="2" />
          <circle cx="12" cy="12" r="2.3" />
          <path d="M7 10h1.2M15.8 14H17" />
        </svg>
      );
    case "wallet":
      return (
        <svg {...common}>
          <path d="M4 7.5h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5.5A2.5 2.5 0 0 1 3 16V7.8A2.8 2.8 0 0 1 5.8 5H17" />
          <path d="M15.5 12.2h4.5v4h-4.5a2 2 0 0 1 0-4Z" />
          <path d="M16.2 14.2h.1" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M4 12h16M12 4a12 12 0 0 1 0 16M12 4a12 12 0 0 0 0 16" />
        </svg>
      );
    case "transfer":
      return (
        <svg {...common}>
          <rect x="3.5" y="7" width="17" height="10" rx="2" />
          <path d="M7 11h5M9 9l-2 2 2 2M17 13h-5M15 11l2 2-2 2" />
        </svg>
      );
    case "aperture":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="m14.8 4.5-3.4 5.9M20 11.7h-6.8M15.2 19.5l-3.4-5.9M9.2 19.5l3.4-5.9M4 12.3h6.8M8.8 4.5l3.4 5.9" />
        </svg>
      );
    default:
      return <span className="text-[1.85rem] font-bold">{name}</span>;
  }
}

export default function Approach() {
  return (
    <section id="approach" className="page-shell large-section">
      <div className="mx-auto max-w-[1450px] px-6 lg:px-10">
        <div className="text-center">
          <h4 className="section-title text-black">The Vaxen Approach</h4>
          <p className="mt-10 text-[1.05rem] font-medium text-black/85">
            One treasury structure. Precision execution. Controlled deployment.
          </p>
          <p className="mt-4 text-[1.05rem] font-medium text-black/85">
            Vaxen Global enables you to:
          </p>
        </div>

        <div className="relative mx-auto mt-14 h-[40rem] max-w-[1100px] overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_31%_58%,rgba(47,124,255,0.14),transparent_39%),radial-gradient(circle_at_69%_50%,rgba(239,59,80,0.13),transparent_37%)]">
          {tiles.map((tile) => (
            <div
              key={`${tile.icon}-${tile.className}`}
              className={`soft-card absolute -translate-x-1/2 rounded-[0.9rem] ${tile.className} flex items-center justify-center shadow-[0_24px_75px_rgba(0,0,0,0.055)]`}
            >
              <span className="flex h-24 w-24 items-center justify-center rounded-full border border-black/[0.035] bg-white shadow-[0_4px_12px_rgba(0,0,0,0.09)]">
                <span className="flex h-[3.65rem] w-[3.65rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,#2974ff_0%,#7456c7_46%,#e3233f_100%)] text-white shadow-[inset_0_14px_18px_rgba(255,255,255,0.35)]">
                  {tile.icon === "yen" || tile.icon === "dollar" || tile.icon === "euro" ? (
                    <span className="text-[2rem] font-bold leading-none">
                      {tile.icon === "yen" ? "¥" : tile.icon === "dollar" ? "$" : "€"}
                    </span>
                  ) : (
                    <TileIcon name={tile.icon} />
                  )}
                </span>
              </span>
            </div>
          ))}
        </div>

        <ul className="mx-auto mt-12 max-w-[900px] text-center text-[1.1rem] font-medium leading-[1.8] text-black/85 lg:text-[1.25rem]">
          {points.map((point) => (
            <li key={point}>· {point}</li>
          ))}
        </ul>

        <div className="mt-12 flex justify-center">
          <a
            href="#closing"
            className="inline-flex min-w-[13rem] items-center justify-center rounded-full border-2 border-[#347bff] border-r-[#f04455] px-9 py-4 text-sm font-semibold text-black transition-colors hover:bg-white"
          >
            Request Access
          </a>
        </div>

        <div className="mt-24 grid gap-9 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar}
              className="soft-card flex min-h-[8rem] items-center justify-center rounded-[1.5rem] px-8 text-center"
            >
              <p className="text-[1.15rem] font-bold text-black">{pillar}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

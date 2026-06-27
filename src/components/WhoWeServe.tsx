import Image from "next/image";

const clients = [
  "Property investment and development firms",
  "Asset managers deploying capital internationally",
  "Cross-border trade and operating businesses",
  "Proprietary capital operators",
  "Organisations managing substantial transaction flow",
];

const controls = [
  "Role-based access and approval controls",
  "Transaction monitoring and reporting",
  "Structured operational workflows",
  "Secure authentication standards",
  "Infrastructure built to support large transaction volumes",
];

const currencies = [
  { symbol: "$", code: "USD", name: "United States", color: "#3b82f6", width: "85%" },
  { symbol: "£", code: "GBP", name: "United Kingdom", color: "#8b5cf6", width: "72%" },
  { symbol: "€", code: "EUR", name: "European Union", color: "#06b6d4", width: "65%" },
  { symbol: "R$", code: "BRL", name: "Brazil", color: "#10b981", width: "52%" },
];

const securityItems = [
  { icon: "/assets/icon-banking.svg", iconSize: 32, title: "Access Controls", sub: "Role-based approvals" },
  { icon: "/assets/icon-manage.svg", iconSize: 28, title: "Audit Trail", sub: "Full transaction logs" },
  { icon: "/assets/icon-execute.svg", iconSize: 28, title: "Workflows", sub: "Structured operations" },
  { icon: "/assets/icon-warning.svg", iconSize: 36, title: "Risk Management", sub: "Monitoring & alerts" },
];

function DotList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-black/25" />
          <span className="text-[0.97rem] font-medium leading-snug text-black/75">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function JurisdictionPanel() {
  return (
    <div className="flex min-h-[22rem] flex-col justify-between rounded-[1rem] bg-[#06060B] p-7 lg:min-h-[30rem] lg:p-9">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/35">
        Supported Jurisdictions
      </p>

      <div className="mt-6 flex-1 space-y-4">
        {currencies.map((c) => (
          <div key={c.code}>
            <div className="mb-2 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[0.85rem] font-bold"
                  style={{ background: `${c.color}22`, color: c.color }}
                >
                  {c.symbol}
                </div>
                <div className="leading-none">
                  <span className="text-[0.88rem] font-bold text-white">{c.code}</span>
                  <span className="ml-2 text-[0.75rem] text-white/35">{c.name}</span>
                </div>
              </div>
              <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-white/25">
                Active
              </span>
            </div>
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/[0.07]">
              <div
                className="h-full rounded-full"
                style={{ width: c.width, backgroundColor: c.color, opacity: 0.45 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.07] pt-6">
        {["4 Jurisdictions", "$500K+ Min.", "Application-Based"].map((label, i, arr) => (
          <span key={label} className="flex items-center gap-4">
            <span className="text-[0.72rem] font-semibold text-white/35">{label}</span>
            {i < arr.length - 1 && <span className="h-3 w-px bg-white/10" />}
          </span>
        ))}
      </div>
    </div>
  );
}

function SecurityPanel() {
  return (
    <div className="flex min-h-[22rem] flex-col rounded-[1rem] bg-[#06060B] p-7 lg:min-h-[30rem] lg:p-9">
      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/35">
        Operational Framework
      </p>
      <div className="mt-6 grid flex-1 grid-cols-2 gap-3">
        {securityItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-[0.9rem] border border-white/[0.07] bg-white/[0.03] p-4 lg:p-5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.07]">
              <Image
                src={item.icon}
                alt=""
                width={item.iconSize}
                height={item.iconSize}
                className="object-contain"
              />
            </div>
            <p className="text-[0.88rem] font-bold leading-tight text-white">{item.title}</p>
            <p className="mt-1.5 text-[0.75rem] font-medium leading-snug text-white/40">{item.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WhoWeServe() {
  return (
    <section className="page-shell py-8 lg:py-12">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="soft-card grid gap-10 rounded-[1.5rem] p-8 lg:grid-cols-[1fr_0.98fr] lg:p-14">
          <div className="flex flex-col justify-center">
            <h2 className="max-w-[650px] text-[1.75rem] font-bold leading-tight text-black lg:text-[2.1rem]">
              Designed for Institutional Cross-Border Operators
            </h2>
            <div className="mt-10">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-black/35">Operators we work with</p>
              <DotList items={clients} />
            </div>
            <p className="mt-10 max-w-[580px] text-[1rem] font-medium leading-[1.65] text-black/60">
              Vaxen Global is not a general payment service. Access is restricted
              to institutional operators with significant recurring cross-border volume.
            </p>
          </div>
          <JurisdictionPanel />
        </div>

        <div className="soft-card mt-10 grid gap-10 rounded-[1.5rem] p-8 lg:grid-cols-[0.98fr_1fr] lg:p-14">
          <SecurityPanel />
          <div className="flex flex-col justify-center">
            <h2 className="text-[1.75rem] font-bold leading-tight text-black lg:text-[2.1rem]">
              Security &amp; Operational Controls
            </h2>
            <p className="mt-6 max-w-[480px] text-[1rem] font-medium leading-[1.65] text-black/70">
              Every transaction operates within a structured framework of controls — ensuring oversight, auditability, and integrity at scale.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                { value: "100%", label: "Application-reviewed access" },
                { value: "Full", label: "Audit trail on every transaction" },
                { value: "All", label: "Activity within structured controls" },
                { value: "Zero", label: "Unmonitored transaction paths" },
              ].map((item) => (
                <div key={item.label} className="rounded-[1rem] border border-black/[0.06] bg-black/[0.03] p-4">
                  <p className="text-[1.6rem] font-bold leading-none text-black"
                     style={{ fontFamily: "var(--font-orbitron)" }}>
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.78rem] font-medium leading-snug text-black/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

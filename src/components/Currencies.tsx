import Image from "next/image";

const currencies = [
  {
    symbol: "$",
    code: "USD",
    name: "US Dollar",
    region: "United States",
    color: "#3b82f6",
    icon: "/assets/icon-dollar.svg",
    iconSize: 38,
  },
  {
    symbol: "£",
    code: "GBP",
    name: "British Pound",
    region: "United Kingdom",
    color: "#8b5cf6",
    icon: null,
    iconSize: 0,
  },
  {
    symbol: "€",
    code: "EUR",
    name: "Euro",
    region: "European Union",
    color: "#06b6d4",
    icon: "/assets/icon-euro.svg",
    iconSize: 36,
  },
  {
    symbol: "R$",
    code: "BRL",
    name: "Brazilian Real",
    region: "Brazil",
    color: "#10b981",
    icon: null,
    iconSize: 0,
  },
];

export default function Currencies() {
  return (
    <section className="bg-[#06060B] py-20 lg:py-28">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="mb-16 text-center">
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-white/30">
            Infrastructure
          </p>
          <h2
            className="text-[2rem] font-bold text-white lg:text-[2.4rem]"
          >
            Supported Currencies
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currencies.map((c) => (
            <div
              key={c.code}
              className="flex flex-col items-center rounded-[1.4rem] border border-white/[0.07] bg-white/[0.03] px-6 py-9 text-center transition-colors hover:bg-white/[0.05]"
            >
              {/* Symbol disc */}
              <div
                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
                style={{ background: `${c.color}20` }}
              >
                {c.icon ? (
                  <Image
                    src={c.icon}
                    alt={c.code}
                    width={c.iconSize}
                    height={c.iconSize}
                    className="object-contain"
                  />
                ) : (
                  <span
                    className="text-[1.35rem] font-bold leading-none"
                    style={{ color: c.color }}
                  >
                    {c.symbol}
                  </span>
                )}
              </div>

              {/* Code in Orbitron */}
              <p
                className="text-[1.9rem] font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {c.code}
              </p>

              {/* Full name */}
              <p className="mt-2 text-[0.9rem] font-medium text-white/50">
                {c.name}
              </p>

              {/* Region */}
              <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-wider text-white/25">
                {c.region}
              </p>

              {/* Active badge */}
              <div
                className="mt-6 inline-flex items-center gap-1.5 rounded-full px-3 py-1"
                style={{ background: `${c.color}18` }}
              >
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: c.color }}
                />
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-wider"
                  style={{ color: c.color }}
                >
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-[0.92rem] font-medium text-white/35">
          Structured for high-value, cross-border capital activity.
        </p>
      </div>
    </section>
  );
}

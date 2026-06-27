const stats = [
  { value: "4", label: "Supported Currencies" },
  { value: "$500K+", label: "Minimum Transaction Size" },
  { value: "4", label: "Financial Jurisdictions" },
  { value: "100%", label: "Application-Based Access" },
];

export default function StatsBar() {
  return (
    <div className="bg-[#06060B] py-8">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-0 lg:grid-cols-4 divide-x divide-white/[0.07]">
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 py-1 text-center lg:text-left lg:first:pl-0">
              <p
                className="text-[2rem] font-bold text-white leading-none"
                style={{ fontFamily: "var(--font-orbitron)" }}
              >
                {stat.value}
              </p>
              <p className="mt-1.5 text-[0.78rem] font-semibold uppercase tracking-widest text-white/40">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

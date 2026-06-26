const signals = [
  "Institutional-Grade Infrastructure",
  "Full Audit Trail",
  "Application-Reviewed Access",
  "Structured Settlement",
  "Designed for Operators at Scale",
];

export default function TrustBar() {
  return (
    <div className="border-y border-white/[0.04] bg-[#0a0a12] py-3.5">
      <div className="mx-auto max-w-[1560px] overflow-x-auto px-6 lg:px-10">
        <div className="flex min-w-max items-center justify-center gap-0 lg:min-w-0">
          {signals.map((s, i) => (
            <div key={s} className="flex items-center">
              <span className="whitespace-nowrap text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/35">
                {s}
              </span>
              {i < signals.length - 1 && (
                <span className="mx-6 h-3 w-px shrink-0 bg-white/[0.12]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

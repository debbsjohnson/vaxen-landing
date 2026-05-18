const currencies = ["$", "£", "€", "R$"];

export default function Currencies() {
  return (
    <section className="page-shell large-section pb-14">
      <div className="mx-auto max-w-[1390px] px-6 text-center lg:px-10">
        <h2 className="text-[2rem] font-bold text-black">Supported Currencies</h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currencies.map((symbol) => (
            <div
              key={symbol}
              className="soft-card flex min-h-[8.2rem] items-center justify-center rounded-[1.25rem]"
            >
              <span className="currency-disc flex h-[4.75rem] w-[4.75rem] items-center justify-center rounded-full text-[1.65rem] font-bold text-white">
                {symbol}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-20 text-[1.05rem] font-semibold text-black/85">
          Structured for high-value, cross-border capital activity.
        </p>
      </div>
    </section>
  );
}

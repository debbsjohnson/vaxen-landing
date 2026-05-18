function DocumentCoins() {
  return (
    <div className="relative mx-auto h-64 w-72">
      <div className="absolute bottom-8 left-4 h-20 w-56 -skew-x-12 rounded-[1rem] bg-[#89a8ff]" />
      <div className="absolute bottom-14 left-8 h-20 w-56 -skew-x-12 rounded-[1rem] bg-[#e9f1ff]" />
      <div className="absolute left-24 top-6 h-36 w-24 -skew-y-12 rounded-xl bg-[#3e37f2] shadow-xl">
        <div className="absolute left-6 top-16 h-3 w-16 rounded-full bg-white" />
        <div className="absolute left-7 top-20 h-3 w-16 rounded-full bg-white" />
      </div>
      <div className="absolute bottom-20 right-10 flex gap-2">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ca4d] text-2xl font-black text-white shadow-md">
          $
        </span>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f3ca4d] text-2xl font-black text-white shadow-md">
          ¥
        </span>
      </div>
    </div>
  );
}

function BankCoin() {
  return (
    <div className="relative mx-auto h-52 w-72">
      <div className="absolute bottom-6 left-10 h-24 w-56 -skew-x-12 rounded-xl bg-[#87a8ff]" />
      <div className="absolute bottom-12 left-14 h-24 w-56 -skew-x-12 rounded-xl bg-[#e9f0ff]" />
      <div className="absolute bottom-28 left-28 h-24 w-28 rounded-t-xl bg-[#c6282f] text-center text-sm font-black text-white shadow-lg">
        <div className="pt-2">BANK</div>
        <div className="mx-auto mt-3 flex w-20 justify-between">
          <span className="h-11 w-3 bg-white" />
          <span className="h-11 w-3 bg-white" />
          <span className="h-11 w-3 bg-white" />
        </div>
      </div>
      <span className="absolute bottom-20 right-20 flex h-16 w-16 items-center justify-center rounded-full bg-[#f3ca4d] text-3xl font-black text-white shadow-md">
        ¥
      </span>
    </div>
  );
}

function Chip() {
  return (
    <div className="relative mx-auto h-44 w-44">
      <div className="absolute inset-0 m-auto h-24 w-24 bg-[#bfe1ff]" />
      <div className="absolute inset-0 m-auto h-20 w-20 bg-[#5cb4df]" />
      <div className="absolute inset-0 m-auto h-12 w-12 bg-[#16556f]" />
      {Array.from({ length: 6 }).map((_, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 h-2 w-36 -translate-x-1/2 -translate-y-1/2 bg-[#cfe8ff]"
          style={{ transform: `translate(-50%, -50%) rotate(${i * 30}deg)` }}
        />
      ))}
      <span className="absolute inset-0 m-auto h-4 w-4 bg-white" />
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="page-shell large-section">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="mx-auto mb-28 max-w-[760px] text-center">
          <h2 className="section-title text-black">The Problem</h2>
          <p className="mt-8 text-[1.05rem] font-medium leading-[1.65] text-black/80">
            Cross-border capital execution demands control.
            <br />
            Organisations operating internationally face:
          </p>
        </div>

        <div className="grid gap-9 lg:grid-cols-3">
          <article className="soft-card row-span-2 flex min-h-[48rem] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-[#edf3ff] to-white p-10">
            <p className="text-[1.4rem] font-medium leading-snug text-black">
              <strong className="font-semibold">Currency volatility</strong>
              <br />
              between agreement and
              <br />
              settlement
            </p>
            <DocumentCoins />
            <div>
              <h3 className="text-[1.95rem] font-bold text-black">At Scale</h3>
              <p className="mt-4 text-[1rem] font-medium leading-[1.55] text-black/80">
                these inefficiencies directly erode margins, reduce execution
                quality, and introduce unnecessary risk
              </p>
            </div>
          </article>

          <article className="soft-card flex min-h-[18rem] items-center justify-center rounded-[1.5rem] p-10 text-center">
            <p className="text-[1.45rem] font-bold leading-[1.55] text-black">
              Slippage
              <br />
              <span className="text-[1.1rem] font-medium">when converting size</span>
              <br />
              <span className="text-[1.1rem] font-medium">across fragmented</span>
              <br />
              <span className="text-[1.1rem] font-medium">liquidity sources</span>
            </p>
          </article>

          <article className="soft-card flex min-h-[18rem] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-[#edf3ff] to-white p-10">
            <p className="text-[1.4rem] font-medium leading-snug text-black">
              <strong className="font-semibold">Delays driven</strong>
              <br />
              by traditional banking
              <br />
              settlement cycles
            </p>
            <BankCoin />
          </article>

          <article className="soft-card flex min-h-[22rem] flex-col justify-between rounded-[1.5rem] bg-gradient-to-br from-[#f4dede] to-white p-10">
            <p className="text-[1.25rem] font-medium leading-[1.55] text-black">
              <strong className="font-semibold">Operational complexity</strong>
              <br />
              across multiple accounts
              <br />
              and providers
            </p>
            <Chip />
          </article>

          <article className="soft-card flex min-h-[22rem] items-center justify-center rounded-[1.5rem] p-10 text-center">
            <p className="max-w-[360px] text-[1.25rem] font-bold leading-[1.55] text-black">
              Limited visibility over consolidated multi-currency exposure
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

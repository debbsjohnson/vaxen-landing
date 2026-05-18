import Image from 'next/image';

function DocumentCoins() {
  return (
    <Image
      src="/assets/curr_vol.jpeg"
      alt="Currency volatility visualization"
      width={288}
      height={256}
      className="mx-auto rounded-lg object-contain"
    />
  );
}

function BankCoin() {
  return (
    <Image
      src="/assets/delays_driven.jpeg"
      alt="Banking delays visualization"
      width={288}
      height={208}
      className="mx-auto rounded-lg object-contain"
    />
  );
}

function Chip() {
  return (
    <div className="mx-auto rounded-lg p-4">
      <Image
        src="/assets/op_comp2.jpeg"
        alt="Operational complexity visualization"
        width={176}
        height={176}
        className="mx-auto rounded-lg object-contain"
      />
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

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/VaxenHeroImage1.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#06060B]/45" />
      </div>

      <div className="relative z-10 w-full pt-24 pb-16 pl-[clamp(1.5rem,8vw,10rem)] pr-6">
        <h1
          className="font-black uppercase text-white leading-none mb-6 whitespace-nowrap"
          style={{
            fontFamily: "var(--font-orbitron)",
            fontSize: "clamp(2.5rem, 5vw, 6.4rem)",
            letterSpacing: "0",
          }}
        >
          Vaxen Global
        </h1>

        <div className="flex flex-col gap-3 max-w-[760px]">
          <p className="text-[1.05rem] lg:text-[1.4rem] text-white font-extrabold leading-snug whitespace-nowrap">
            Strategic Cross-Border Treasury &amp; Execution
          </p>

          <p className="text-[0.82rem] lg:text-[0.9rem] text-white/88 leading-snug max-w-[440px] font-semibold">
            Manage, convert, and deploy capital across USD, GBP, EUR, and BRL
            with precision, timing control, and structured settlement.
          </p>

          <div className="pt-5">
            <a
              href="#closing"
              className="inline-flex min-w-[10.5rem] items-center justify-center rounded-full border border-white/85 px-7 py-3 text-xs font-extrabold text-white transition-colors duration-200 hover:bg-white hover:text-[#06060B]"
            >
              Request Access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

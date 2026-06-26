export default function Closing() {
  return (
    <section id="closing" className="relative overflow-hidden bg-[#06060B] py-32 lg:py-44">
      {/* Brand gradient glows */}
      <div className="pointer-events-none absolute left-[8%] top-[15%] h-[32rem] w-[32rem] rounded-full bg-[#2974ff]/[0.08] blur-[90px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-[28rem] w-[28rem] rounded-full bg-[#e3233f]/[0.09] blur-[80px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[60rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7456c7]/[0.05] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center lg:px-10">
        <p className="mb-6 text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/30">
          Apply
        </p>

        <h2 className="text-[clamp(2.2rem,3.5vw,4rem)] font-bold leading-tight text-white">
          Strategic capital requires
          <br />
          structured execution.
        </h2>

        <p className="mx-auto mt-7 max-w-[580px] text-[1.05rem] font-medium leading-[1.75] text-white/50">
          Apply for institutional access. Our team reviews each application
          individually and prioritises operators with significant cross-border
          transaction volume.
        </p>

        <a
          href="mailto:access@vaxenglobal.com"
          className="mt-12 inline-flex min-w-[14rem] items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-10 py-4 text-[0.9rem] font-bold text-white transition-all duration-200 hover:bg-white hover:text-[#06060B]"
        >
          Request Access
        </a>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {["4 Supported Currencies", "Application-Based Access", "Institutional Operators Only", "Auditable Framework"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="h-1 w-1 rounded-full bg-white/25" />
              <span className="text-[0.72rem] font-semibold uppercase tracking-wider text-white/30">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

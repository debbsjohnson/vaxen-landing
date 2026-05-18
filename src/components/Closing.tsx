import Image from "next/image";

export default function Closing() {
  return (
    <section id="closing" className="relative min-h-[45rem] overflow-hidden bg-[#120313]">
      <Image
        src="/assets/Pattern 12.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#090016]/25 via-[#260018]/10 to-[#b7152d]/25" />

      <div className="relative z-10 mx-auto flex min-h-[45rem] max-w-[1560px] items-center px-6 py-28 lg:justify-end lg:px-10">
        <div className="w-full max-w-[980px] text-center text-white lg:pr-16">
          <h2 className="text-[clamp(3.1rem,4vw,4.6rem)] font-bold leading-none lg:text-right">
            Closing
          </h2>
          <p className="mt-8 text-[clamp(1.7rem,2.35vw,2.35rem)] font-bold leading-tight">
            Strategic capital requires structured execution.
          </p>
          <p className="mx-auto mt-8 max-w-[760px] text-[clamp(1rem,1.15vw,1.2rem)] font-medium leading-[1.85] text-white/88 lg:mr-0">
            Vaxen Global provides the control, clarity, and precision required
            for cross-border treasury and settlement operations.
          </p>

          <a
            href="mailto:access@vaxenglobal.com"
            className="mt-12 inline-flex min-w-[13.5rem] items-center justify-center rounded-full border border-white/75 px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#06060B] lg:ml-auto"
          >
            Request Access
          </a>
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  {
    icon: "execute",
    title: "Execute",
    body: "High-value international transactions",
  },
  {
    icon: "manage",
    title: "Manage",
    body: "Recurring multi-currency exposure",
  },
  {
    icon: "require",
    title: "Require",
    body: "Precision in timing and conversion",
  },
  {
    icon: "operate",
    title: "Operate",
    body: "across multiple financial jurisdictions",
  },
];

function CapabilityIcon({ type }: { type: string }) {
  return (
    <div className="currency-disc mb-5 flex h-[5.4rem] w-[5.4rem] items-center justify-center rounded-full">
      <svg
        className="h-10 w-10"
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
      >
        {type === "execute" && (
          <>
            <path
              d="M23.2 8.5h5.6l1.2 5.1c1.1.4 2.1 1 3 1.7l5-1.5 2.8 4.8-3.8 3.6c.1.6.2 1.2.2 1.8s-.1 1.2-.2 1.8l3.8 3.6-2.8 4.8-5-1.5c-.9.7-1.9 1.3-3 1.7l-1.2 5.1h-5.6L22 34.4c-1.1-.4-2.1-1-3-1.7l-5 1.5-2.8-4.8 3.8-3.6c-.1-.6-.2-1.2-.2-1.8s.1-1.2.2-1.8l-3.8-3.6 2.8-4.8 5 1.5c.9-.7 1.9-1.3 3-1.7l1.2-5.1Z"
              fill="white"
            />
            <circle cx="26" cy="24" r="7" fill="#744490" />
          </>
        )}

        {type === "manage" && (
          <>
            <path
              d="M10 11h20l8 8v18H10V11Z"
              fill="white"
            />
            <path d="M30 11v8h8" fill="white" fillOpacity="0.9" />
            <circle cx="34" cy="33" r="8" fill="white" />
            <path
              d="M33 27h3l.6 2.2c.5.2.9.5 1.3.8l2.1-.6 1.5 2.5-1.6 1.6v1.4l1.6 1.6L40 40l-2.1-.6c-.4.3-.8.6-1.3.8l-.6 2.2h-3l-.6-2.2c-.5-.2-.9-.5-1.3-.8L29 40l-1.5-2.5 1.6-1.6v-1.4l-1.6-1.6L29 30.4l2.1.6c.4-.3.8-.6 1.3-.8L33 27Z"
              fill="#744490"
            />
            <circle cx="34.5" cy="34.7" r="2.7" fill="white" />
          </>
        )}

        {type === "require" && (
          <>
            <circle
              cx="24"
              cy="21"
              r="16"
              stroke="white"
              strokeWidth="5"
            />
            <circle
              cx="24"
              cy="21"
              r="9"
              stroke="white"
              strokeWidth="4"
            />
            <circle cx="24" cy="21" r="4" fill="white" />
            <path
              d="M12 41h20M12 38h4M18 38h4M24 38h4M31 36l5 3-5 3"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {type === "operate" && (
          <>
            <rect
              x="8"
              y="12"
              width="30"
              height="24"
              rx="4"
              fill="white"
            />
            <path
              d="M8 21h30M17 12v24"
              stroke="#744490"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M33 29v12m0 0-5-5m5 5 5-5M41 31V19m0 0-5 5m5-5 5 5"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    </div>
  );
}

export default function BuiltFor() {
  return (
    <section id="about" className="page-shell large-section">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="lg:pl-2">
            <p className="mb-5 text-[1.25rem] font-semibold leading-none text-black">
              Built for Capital
            </p>
            <h2 className="text-[clamp(2.7rem,4.4vw,5.1rem)] font-bold leading-[1.04] text-black">
              Operating
              <br />
              Across Borders
            </h2>
            <p className="mt-8 max-w-[560px] text-[1.05rem] font-medium leading-[1.65] text-black/80">
              Vaxen Global is a private treasury and execution platform designed
              for organisations managing significant cross-border transaction volume.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-x-4 top-24 h-[28rem] rounded-full bg-[#d53140]/10 blur-3xl" />
            <p className="mb-8 text-[1.15rem] font-semibold text-black">
              We support businesses that:
            </p>
            <div className="relative grid gap-6 sm:grid-cols-2">
              {capabilities.map((item) => (
                <article
                  key={item.title}
                  className="soft-card min-h-[15.4rem] rounded-[1.55rem] p-7"
                >
                  <CapabilityIcon type={item.icon} />
                  <h3 className="text-[1.55rem] font-bold leading-none text-black">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[1.05rem] font-medium leading-snug text-black/85">
                    {item.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 grid items-center gap-8 rounded-[1.5rem] bg-white/75 px-10 py-12 shadow-[0_24px_70px_rgba(0,0,0,0.04)] md:grid-cols-[7rem_1fr_1.1fr] lg:px-16 lg:py-16">
          <div className="flex h-[4.1rem] w-[4.1rem] rotate-45 items-center justify-center rounded-[0.8rem] bg-gradient-to-br from-[#2876ff] to-[#df263e]">
            <span className="-rotate-45 text-[1.75rem] font-bold text-white">!</span>
          </div>
          <p className="max-w-[560px] text-[1.8rem] font-bold leading-tight text-black lg:text-[2.05rem]">
            This is not a retail
            <br />
            payment service.
          </p>
          <p className="text-[1.3rem] font-medium leading-tight text-black/85">
            It is structured infrastructure for capital-
            <br className="hidden xl:block" />
            intensive operations.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is Vaxen Global designed for?",
    a: "Organisations executing recurring high-value cross-border transactions and managing multi-currency exposure across USD, GBP, EUR, and BRL. We work with property investment firms, asset managers, cross-border trade operators, and proprietary capital operators.",
  },
  {
    q: "What is the minimum transaction size?",
    a: "$500,000 USD or equivalent. Vaxen Global is structured for capital-intensive operations — not retail or SME payment flows. Our infrastructure is calibrated for significant, recurring cross-border volume.",
  },
  {
    q: "Which currencies do you support?",
    a: "We currently support USD (US Dollar), GBP (British Pound), EUR (Euro), and BRL (Brazilian Real). Our infrastructure is designed for high-value, structured capital activity across these four currencies and jurisdictions.",
  },
  {
    q: "Is Vaxen a consumer payment platform?",
    a: "No. Vaxen Global is not a retail or consumer payment service. It is structured infrastructure for capital-intensive operations — designed for institutional and professional operators transacting at scale.",
  },
  {
    q: "How long does onboarding take?",
    a: "Onboarding timelines vary based on operator complexity and jurisdiction. Typically 1–3 weeks from an approved application to operational setup. Our team will outline exact timelines during the review process.",
  },
  {
    q: "How do I gain access?",
    a: "Access to Vaxen Global is by application only. Submit a request and our team will review your organisation's profile to determine fit. We prioritise operators with significant cross-border transaction volume.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="page-shell large-section relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-[550px] w-[550px] -translate-x-1/3 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(41,116,255,0.09) 0%, transparent 60%)" }} />
        <div className="absolute bottom-1/4 right-0 h-[500px] w-[500px] translate-x-1/3 rounded-full"
             style={{ background: "radial-gradient(circle, rgba(227,35,63,0.07) 0%, transparent 60%)" }} />
      </div>
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <div className="mb-14 text-center">
          <p className="mb-4 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-black/35">
            Common Questions
          </p>
          <h2 className="section-title text-black">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mx-auto max-w-[860px] flex flex-col gap-2.5">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[1.25rem] border border-black/[0.06] bg-white/60 transition-colors"
            >
              <button
                className="flex w-full items-center gap-5 px-7 py-6 text-left lg:px-10"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span
                  className="shrink-0 text-[0.72rem] font-bold tabular-nums text-black/20"
                  style={{ fontFamily: "var(--font-orbitron)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-[1.05rem] font-bold leading-snug text-black">
                  {f.q}
                </span>
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 text-black/40 transition-transform duration-200 ${
                    open === i ? "rotate-45 border-black/20" : ""
                  }`}
                >
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="px-7 pb-7 lg:px-10 lg:pb-8" style={{ paddingLeft: "calc(1.75rem + 2rem + 1.25rem)" }}>
                  <p className="text-[1rem] font-medium leading-[1.7] text-black/70">
                    {f.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

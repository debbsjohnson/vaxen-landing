"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Who is Vaxen Global designed for?",
    a: "Organisations executing recurring high-value cross-border transactions and managing multi-currency exposure.",
  },
  {
    q: "Which currencies do you support?",
    a: "We currently support USD (US Dollar), GBP (British Pound), EUR (Euro), and BRL (Brazilian Real). Our infrastructure is designed for high-value, structured capital activity across these four currencies.",
  },
  {
    q: "Is Vaxen a consumer payment platform?",
    a: "No. Vaxen Global is not a retail or consumer payment service. It is structured infrastructure for capital-intensive operations — designed for institutional and professional operators transacting at scale.",
  },
  {
    q: "How do I gain access?",
    a: "Access to Vaxen Global is by application only. Submit a request and our team will review your organisation's profile to determine fit. We prioritise operators with significant cross-border transaction volume.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="page-shell large-section pt-10">
      <div className="mx-auto max-w-[1390px] px-6 lg:px-10">
        <h2 className="section-title mb-28 text-center text-black">
          Frequently Asked Questions
        </h2>

        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="soft-card overflow-hidden rounded-[1.25rem]"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-8 py-8 text-left lg:px-12"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="text-[1.1rem] font-bold leading-snug text-black">
                  {f.q}
                </span>
                <span
                  className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-black/15 transition-transform duration-200 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <svg className="h-3.5 w-3.5 text-black/55" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-8 pb-10 lg:px-12">
                  <p className="text-[1rem] font-medium leading-[1.65] text-black/80">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

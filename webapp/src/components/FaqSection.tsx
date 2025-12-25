import { FAQItem } from "@/data/offers";

type Props = {
  faqs: FAQItem[];
};

export function FaqSection({ faqs }: Props) {
  return (
    <section className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl sm:p-12">
      <h2 className="text-2xl font-semibold text-white sm:text-3xl">
        Critical questions, candid answers
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-slate-300">
        Lifetime connectivity promises demand skeptical validation. Use these
        answers as a baseline when interrogating brokers or program founders.
      </p>
      <div className="mt-8 space-y-4">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-white/10 bg-slate-900/60 p-5 transition hover:border-primary-200/40"
          >
            <summary className="cursor-pointer list-none text-base font-semibold text-white marker:hidden">
              {faq.question}
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

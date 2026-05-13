export default function FAQSection({ faqs }) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>

      <div className="mt-6 space-y-5">
        {faqs.map((faq) => (
          <div key={faq.question}>
            <h3 className="font-semibold text-emerald-400">{faq.question}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact VoltWise",
  description: "Contact VoltWise for questions, feedback, or support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-semibold text-emerald-400">Contact</p>

        <h1 className="mt-4 text-4xl font-bold">Contact VoltWise</h1>

        <p className="mt-6 leading-8 text-slate-300">
          Have feedback, corrections, or questions about VoltWise calculators?
          Contact us by email.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-6">
  <h2 className="text-2xl font-bold text-white">
    Contact VoltWise
  </h2>

  <p className="mt-4 text-slate-300">
    For business inquiries, partnerships, feedback, calculator corrections,
    or support, contact us at:
  </p>

  <a
    href="mailto:sunkalasujatha@gmail.com"
    className="mt-4 inline-block text-lg font-semibold text-emerald-400 hover:underline"
  >
    sunkalasujatha@gmail.com
  </a>

  <p className="mt-4 text-sm text-slate-500">
    VoltWise typically responds within 24–48 hours.
  </p>
</div>
      </section>

      <Footer />
    </main>
  );
}
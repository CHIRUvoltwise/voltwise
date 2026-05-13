import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lastUpdated } from "@/data/legalContent";

export const metadata = {
  title: "Terms and Conditions - VoltWise",
  description: "Read the VoltWise terms and conditions.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>

        <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 leading-8 text-slate-300">
          <p>
            By using VoltWise, you agree to these terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold text-white">Use of Website</h2>
          <p>
            VoltWise provides calculators and informational content for general
            educational purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-white">Accuracy</h2>
          <p>
            We try to provide helpful estimates, but electricity costs may vary
            based on location, appliance efficiency, usage behavior, taxes,
            fixed charges, and provider rates.
          </p>

          <h2 className="text-2xl font-semibold text-white">No Professional Advice</h2>
          <p>
            VoltWise does not provide professional financial, electrical,
            engineering, solar installation, or energy provider advice.
          </p>

          <h2 className="text-2xl font-semibold text-white">User Responsibility</h2>
          <p>
            You are responsible for checking official electricity bills,
            provider rates, appliance labels, and local rules before making
            decisions.
          </p>

          <h2 className="text-2xl font-semibold text-white">Changes</h2>
          <p>
            We may update these terms as the website grows.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
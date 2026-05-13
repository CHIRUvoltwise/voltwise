import Navbar from "./Navbar";
import Footer from "./Footer";
import AdBox from "./AdBox";
import InternalLinks from "./InternalLinks";
import TrustBox from "./TrustBox";
import FavoriteButton from "./FavoriteButton";

export default function CalculatorLayout({ title, description, children }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_300px]">
        <div>
          <p className="text-sm font-semibold text-emerald-400">
            VoltWise Calculator
          </p>

          <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{title}</h1>

          <p className="mt-4 max-w-3xl text-slate-300">{description}</p>
          <FavoriteButton title={title} href="#" /> 
          <AdBox label="Advertisement" />

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            {children}
          </div>

          <TrustBox />
          <InternalLinks />
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdBox label="Sponsored" />

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="font-semibold text-white">Calculator Note</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Enter your local electricity rate for better estimates. Actual
                bills may include taxes, fixed charges, and provider fees.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
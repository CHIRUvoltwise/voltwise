import Navbar from "./Navbar";
import Footer from "./Footer";
import AdBox from "./AdBox";
import InternalLinks from "./InternalLinks";
import TrustBox from "./TrustBox";

export default function GuideLayout({ title, description, children }) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-12 lg:grid-cols-[1fr_300px]">
        <article>
          <p className="text-sm font-semibold text-emerald-400">
            VoltWise Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-300">
            {description}
          </p>

          <AdBox label="Advertisement" />

          <div className="mt-8 space-y-6 leading-8 text-slate-300">
            {children}
          </div>

          <AdBox label="Advertisement" />
          <TrustBox />
          <InternalLinks />
        </article>

        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <AdBox label="Sponsored" />

            <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
              <h2 className="font-semibold text-white">Guide Note</h2>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                This guide is for general understanding. Use your actual
                electricity bill and provider rate for accurate decisions.
              </p>
            </div>
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
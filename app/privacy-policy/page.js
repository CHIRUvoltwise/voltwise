import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lastUpdated } from "@/data/legalContent";

export const metadata = {
  title: "Privacy Policy - VoltWise",
  description: "Read the VoltWise privacy policy.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>

        <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>

        <div className="mt-8 space-y-6 leading-8 text-slate-300">
          <p>
            VoltWise respects your privacy. This policy explains how information
            may be collected and used when you visit our website.
          </p>

          <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
          <p>
            We may collect basic usage information such as pages visited, device
            type, browser type, approximate location, referring pages, and general
            analytics data.
          </p>

          <h2 className="text-2xl font-semibold text-white">Cookies</h2>
          <p>
            VoltWise may use cookies to improve the website, understand visitor
            behavior, remember preferences, and support advertising features.
          </p>

          <h2 className="text-2xl font-semibold text-white">Analytics</h2>
          <p>
            We may use analytics tools to understand which pages are useful and
            how visitors interact with the website.
          </p>

          <h2 className="text-2xl font-semibold text-white">Advertising</h2>
          <p>
            In the future, VoltWise may display ads through services such as
            Google AdSense. Advertising partners may use cookies to serve ads
            based on user visits to this and other websites.
          </p>

          <h2 className="text-2xl font-semibold text-white">Third-Party Links</h2>
          <p>
            VoltWise may link to third-party websites. We are not responsible
            for the privacy practices or content of those websites.
          </p>

          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p>
            For privacy questions, contact us through the contact page.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
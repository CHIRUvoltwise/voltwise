import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-slate-400">
        <p className="font-semibold text-white">VoltWise</p>
        <p className="mt-2">
          Simple home energy calculators to estimate costs and savings.
        </p>

        <div className="mt-5 flex flex-wrap gap-4">
          <Link href="/tools">Tools</Link>
           <Link href="/favorites">Favorites</Link>
           <Link href="/bill-tracker">Bill Tracker</Link>
           <Link href="/compare-appliances">Compare</Link>
           <Link href="/dashboard">Dashboard</Link>
           <Link href="/appliance-wattage">Wattage</Link>
          <Link href="/rates">Rates</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>

        <p className="mt-6 text-xs text-slate-500">
          © 2026 VoltWise. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
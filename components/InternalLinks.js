import Link from "next/link";

export default function InternalLinks() {
  const links = [
    { href: "/tools/appliance-cost-calculator", label: "Appliance Cost Calculator" },
    { href: "/tools/ac-running-cost-calculator", label: "AC Running Cost Calculator" },
    { href: "/tools/ev-charging-cost-calculator", label: "EV Charging Cost Calculator" },
    { href: "/appliance-wattage", label: "Appliance Wattage Database" },
    { href: "/rates", label: "Electricity Rates" },
    { href: "/guides", label: "Energy Saving Guides" },
  ];

  return (
    <section className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="text-2xl font-bold text-white">Explore More VoltWise Tools</h2>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm font-semibold text-slate-300 transition hover:border-emerald-400 hover:text-emerald-400"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
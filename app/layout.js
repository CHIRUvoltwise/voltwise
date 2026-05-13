import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://voltwise.vercel.app"),
  title: {
    default: "VoltWise - Home Energy Savings Calculators",
    template: "%s | VoltWise",
  },
  description:
    "Use VoltWise calculators to estimate appliance electricity cost, AC running cost, EV charging cost, solar savings, and home energy usage.",
  keywords: [
    "electricity cost calculator",
    "appliance cost calculator",
    "AC running cost calculator",
    "EV charging cost calculator",
    "solar savings calculator",
    "home energy calculator",
  ],
  openGraph: {
    title: "VoltWise - Home Energy Savings Calculators",
    description:
      "Estimate appliance electricity costs, AC running costs, EV charging costs, solar savings, and home energy usage.",
    url: "https://voltwise.vercel.app",
    siteName: "VoltWise",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
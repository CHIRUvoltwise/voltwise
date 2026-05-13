import { guides } from "@/data/guides";
import { tools } from "@/data/tools";

const baseUrl = "https://voltwise.vercel.app";

export default function sitemap() {
 const staticPages = [
  "",
  "/favorites",
"/bill-tracker",
"/compare-appliances",
"/dashboard",
  "/tools",
  "/tools/electricity-cost",
  "/tools/savings",
  "/guides",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/disclaimer",
  "/rates",
  "/appliance-wattage",
];

  const toolPages = tools.map((tool) => tool.href);
const guidePages = guides.map((guide) => guide.href);

 const allPages = [...staticPages, ...toolPages, ...guidePages];

  return allPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page.includes("/tools/") ? "monthly" : "weekly",
    priority: page === "" ? 1 : page.includes("/tools/") ? 0.8 : 0.7,
  }));
}
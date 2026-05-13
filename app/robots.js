export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://voltwise.vercel.app/sitemap.xml",
  };
}
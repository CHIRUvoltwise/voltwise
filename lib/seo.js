export function createPageMetadata({ title, description, path = "" }) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://voltwise.vercel.app${path}`,
      siteName: "VoltWise",
      type: "website",
    },
  };
}
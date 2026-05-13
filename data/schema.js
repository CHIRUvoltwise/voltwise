export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "VoltWise",
  url: "https://voltwise.vercel.app",
  description:
    "Home energy savings calculators for appliance costs, AC running costs, EV charging, solar savings, and electricity usage.",
};

export function calculatorSchema({ name, description, url }) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
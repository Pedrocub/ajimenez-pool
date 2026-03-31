import { SITE, SERVICES } from "@/lib/constants";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ajimenezpoolservice.com",
    name: SITE.name,
    telephone: SITE.phone,
    email: SITE.email,
    url: `https://${SITE.domain}`,
    image: `https://${SITE.domain}/images/pool-service-tech.webp`,
    description:
      "Professional pool cleaning, maintenance & repair in Miami. SPO Certified. Weekly service, green pool recovery, resurfacing & more. Available 24/7.",
    areaServed: {
      "@type": "City",
      name: "Miami",
      "@id": "https://www.wikidata.org/wiki/Q8652",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Miami",
      addressRegion: "FL",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.7617,
      longitude: -80.1918,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pool Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.titleEn,
          description: s.descEn,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

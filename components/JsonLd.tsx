export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Posted Productions",
    url: "https://www.posted-productions.com",
    logo: "https://www.posted-productions.com/postedlogo.png",
    description:
      "Posted Productions - Documentary and video production company in Seoul. Where vision meets storytelling. Fixer services, documentary, corporate, and music video production.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seoul",
      addressCountry: "KR",
    },
    sameAs: [
      "https://www.instagram.com/postedproductions",
      "https://www.linkedin.com/company/posted-productions",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

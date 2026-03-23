import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Professional production services in South Korea for films, TV, commercials, and digital content. Expert local crew, logistics, permits, equipment support, and full project management.",
  keywords: [
    "video production service",
    "video production services",
    "video agency",
    "production company",
    "video production company",
    "film production agency",
    "media production services",
    "content production agency",
    "filming companies",
    "video production agencies",
    "commercial videographer",
    "video company",
    "video production agency",
    "video design company",
    "video productions agency",
    "production services South Korea",
    "film support South Korea",
    "TV production South Korea",
    "professional videography services",
    "local producer services in South Korea",
    "video storytelling services",
    "documentary filmmaking services",
    "corporate content production services",
  ].join(", "),
  alternates: {
    canonical: "https://www.posted-productions.com/services",
  },
  openGraph: {
    title: "Services",
    description:
      "Professional production services in South Korea for films, TV, commercials, and digital content. Expert local crew, logistics, permits, equipment support, and full project management.",
    url: "https://www.posted-productions.com/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

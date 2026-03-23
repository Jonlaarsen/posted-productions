import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore our portfolio of documentary, music video, branded, and corporate productions. Filmed in South Korea and worldwide.",
  alternates: { canonical: "https://www.posted-productions.com/work" },
  openGraph: {
    title: "Work",
    description:
      "Documentary, music video, branded, and corporate content from Posted Productions.",
    url: "https://www.posted-productions.com/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

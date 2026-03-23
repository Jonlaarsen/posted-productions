import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Where vision meets storytelling. We are a dynamic multimedia production company with over 9 years of experience in documentary, corporate, branded, and music video production.",
  alternates: { canonical: "https://www.posted-productions.com/about" },
  openGraph: {
    title: "About",
    description:
      "Where vision meets storytelling. Documentary and branded content production in South Korea and worldwide.",
    url: "https://www.posted-productions.com/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Posted Productions team. Expert directors, producers, cinematographers, fixers, and creatives delivering compelling stories in South Korea and worldwide.",
  alternates: { canonical: "https://www.posted-productions.com/team" },
  openGraph: {
    title: "Our Team",
    description:
      "Meet our diverse team of production experts specializing in documentary, corporate, and branded content.",
    url: "https://www.posted-productions.com/team",
  },
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

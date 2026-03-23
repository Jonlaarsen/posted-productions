import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Posted Productions. Let's create together—documentary, branded, and music video production in Seoul and worldwide.",
  alternates: { canonical: "https://www.posted-productions.com/contact" },
  openGraph: {
    title: "Contact",
    description:
      "Get in touch for your next production. Documentary, corporate, branded content, and music videos in South Korea and worldwide.",
    url: "https://www.posted-productions.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

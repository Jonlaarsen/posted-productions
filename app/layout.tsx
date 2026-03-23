import type { Metadata } from "next";
import { Fira_Sans, Fugaz_One, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/nav/Header";
import { OrganizationJsonLd } from "@/components/JsonLd";
import Script from "next/script";

const geistSans = Fira_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600"],
});

const geistMono = Fugaz_One({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Posted Productions | Documentary & Video Production Seoul",
    template: "%s | Posted Productions",
  },
  description:
    "Posted Productions - Where vision meets storytelling. South Korea fixer services, documentary, corporate, and music video production. Trusted by VICE, Netflix, BBC, and more.",
  keywords: [
    "South Korea fixer",
    "South Korea production company",
    "video production service",
    "video production services",
    "video agency",
    "service video production",
    "productions companies",
    "production company",
    "company video production",
    "video production company",
    "video production corporate",
    "video film company",
    "video production firm",
    "filmmaking agency",
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
    "Documentary production company in Seoul",
    "Production company in South Korea",
    "Production services in South Korea",
    "video production services seol",
    "videao agency",
    "commercial videography",
  ].join(", "),
  alternates: {
    canonical: "https://www.posted-productions.com/",
  },
  openGraph: {
    title: "Posted Productions | Documentary & Video Production Seoul",
    description:
      "Posted Productions - Where vision meets storytelling. South Korea fixer, documentary, corporate, and music video production. VICE, Netflix, BBC.",
    url: "https://www.posted-productions.com/",
    siteName: "Posted Productions",
  },
  verification: {
    google: "vgkbFDUp2jclq5hMk8YqTF85zUd4luLVcG1Q_e4Pn_M",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-RJMZTVWS9B"
        ></Script>
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-RJMZTVWS9B');
    `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <OrganizationJsonLd />
        <Header />
        {children}
      </body>
    </html>
  );
}

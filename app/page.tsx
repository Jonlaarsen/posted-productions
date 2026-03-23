import type { Metadata } from "next";
import Hero from "@/components/landing/Hero";
import Vision from "@/components/landing/Vision";
import InfiniteCarousel from "@/components/ui/InfiniteCarousel";

export const metadata: Metadata = {
  title: "Posted Productions | Documentary & Video Production Seoul",
  description:
    "Posted Productions - Where vision meets storytelling. Documentary, corporate, branded, and music video production in Seoul and worldwide. Trusted fixer for VICE, Netflix, BBC, Al Jazeera.",
  alternates: { canonical: "https://www.posted-productions.com/" },
  openGraph: {
    title: "Posted Productions | Documentary & Video Production Seoul",
    url: "https://www.posted-productions.com/",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Vision />
      <InfiniteCarousel />
    </>
  );
}

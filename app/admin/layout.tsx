import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Posted Productions",
  description: "Posted Productions admin panel.",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Posted Productions",
  description: "Admin login for Posted Productions.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nazmul | Frontend Developer",
  description:
    "Nazmul is a frontend developer, Linux enthusiast, and security learner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

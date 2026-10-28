import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moumita Bala | Web Developer Portfolio",
  description: "Portfolio of Moumita Bala — web development projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

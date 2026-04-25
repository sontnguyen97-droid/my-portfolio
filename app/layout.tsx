import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Son Nguyen — CS Student & Software Engineer",
  description: "Portfolio of Son Nguyen, CS Student at Boston University and Software Engineer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
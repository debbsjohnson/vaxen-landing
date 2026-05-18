import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Vaxen Global — Strategic Cross Border Treasury & Execution",
  description:
    "Manage, convert, and deploy capital across USD, GBP, EUR, and BRL with precision, timing control, and structured settlement.",
  keywords: ["cross-border treasury", "currency conversion", "international payments", "capital execution", "multi-currency"],
  openGraph: {
    title: "Vaxen Global — Strategic Cross Border Treasury & Execution",
    description:
      "Manage, convert, and deploy capital across USD, GBP, EUR, and BRL with precision, timing control, and structured settlement.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

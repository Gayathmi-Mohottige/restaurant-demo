import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ember & Oak — Wood-Fired Grill",
  description:
    "A wood-fired grill in the heart of the city. Live fire, aged cuts, natural wine. Reservations open nightly.",
  openGraph: {
    title: "Ember & Oak — Wood-Fired Grill",
    description: "Live fire, aged cuts, natural wine. Reservations open nightly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}

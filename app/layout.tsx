import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EcoBriquette | Renewable Biomass Solutions",
  description:
    "EcoBriquette transforms organic waste into high-performance biomass briquettes that power communities and industries with clean energy.",
  keywords: [
    "ecobriquette",
    "biomass briquettes",
    "renewable energy",
    "sustainable fuel",
  ],
  openGraph: {
    title: "EcoBriquette | Renewable Biomass Solutions",
    description:
      "Discover how EcoBriquette converts organic waste into clean-burning biomass fuel to reduce emissions and unlock circular economies.",
    url: "https://ecobriquette.com",
    siteName: "EcoBriquette",
    images: [
      {
        url: "/hero-briquettes.jpg",
        width: 1800,
        height: 1200,
        alt: "EcoBriquette biomass briquettes stacked in leaves",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoBriquette | Renewable Biomass Solutions",
    description:
      "Cleaner combustion, circular economies, and carbon-negative fuel made from organic waste.",
    images: ["/hero-briquettes.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f7f4ef] text-[#1e1b16]`}
      >
        {children}
      </body>
    </html>
  );
}

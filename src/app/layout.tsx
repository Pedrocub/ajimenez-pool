import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { LocalBusinessJsonLd } from "@/components/json-ld";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ajimenezpoolservice.com"),
  title: {
    default: "A. Jiménez Pool Service | Miami's Trusted Pool Experts",
    template: "%s | A. Jiménez Pool Service Miami",
  },
  description:
    "Professional pool cleaning, maintenance & repair in Miami. SPO Certified. Weekly service, green pool recovery, resurfacing & more. Available 24/7. Call 305-417-0116.",
  keywords:
    "pool service Miami, pool cleaning Miami, pool maintenance, green pool recovery, pool resurfacing, salt system installation, Miami pool company",
  openGraph: {
    title: "A. Jiménez Pool Service | Miami's Trusted Pool Experts",
    description:
      "Professional pool cleaning, maintenance & repair in Miami. SPO Certified. Available 24/7.",
    url: "https://ajimenezpoolservice.com",
    siteName: "A. Jiménez Pool Service",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/pool-service-tech.webp",
        width: 1200,
        height: 630,
        alt: "A. Jiménez Pool Service — Professional Pool Care in Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "A. Jiménez Pool Service | Miami's Trusted Pool Experts",
    description:
      "Professional pool cleaning, maintenance & repair in Miami. SPO Certified. Available 24/7.",
    images: ["/images/pool-service-tech.webp"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <LocalBusinessJsonLd />
        {children}
      </body>
    </html>
  );
}

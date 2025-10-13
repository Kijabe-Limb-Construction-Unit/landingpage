import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import React from "react";
import "@fontsource/caveat";
// import "@fontsource/caveat/400-italic.css";

export const metadata: Metadata = {
  title: "Kijabe Limb Reconstruction Unit | Restoring Limbs, Rebuilding Lives",
  description:
    "The Kijabe Limb Reconstruction Unit provides comprehensive limb reconstruction services at AIC Kijabe Main Hospital. We specialize in restoring limbs and rebuilding lives through advanced medical care and compassionate treatment.",
  keywords:
    "limb reconstruction, orthopedic surgery, Kijabe Hospital, Kenya, medical care, rehabilitation, prosthetics",
  authors: [{ name: "Kijabe Limb Reconstruction Unit" }],
  creator: "Kijabe Limb Reconstruction Unit",
  publisher: "Kijabe Limb Reconstruction Unit",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kijabelimb.org",
    siteName: "Kijabe Limb Reconstruction Unit",
    title:
      "Kijabe Limb Reconstruction Unit | Restoring Limbs, Rebuilding Lives",
    description:
      "The Kijabe Limb Reconstruction Unit provides comprehensive limb reconstruction services at AIC Kijabe Main Hospital. We specialize in restoring limbs and rebuilding lives through advanced medical care and compassionate treatment.",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Kijabe Limb Reconstruction Unit Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Kijabe Limb Reconstruction Unit | Restoring Limbs, Rebuilding Lives",
    description:
      "The Kijabe Limb Reconstruction Unit provides comprehensive limb reconstruction services at AIC Kijabe Main Hospital.",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&display=swap" rel="stylesheet" /> */}
        <title>Kijabe Limb Reconstruction Unit</title>
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

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

export const metadata = {
  title: "Dhruv Rastogi | Portfolio",
  description: "Software Engineer at SAP Labs India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dhruv Rastogi",
        "url": "https://portfolio-taupe-ten-39.vercel.app",
        "sameAs": [
          "https://www.linkedin.com/in/dhruv-rastogi001",
          "https://github.com/DevilDhruv",
          "https://leetcode.com/Devil_Dhruv"
        ],
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "MNNIT Allahabad"
        }
      }
      </script>
    </html>
  );
}

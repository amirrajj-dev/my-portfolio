import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import BackToTop from "@/components/shared/BackToTop";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable : "--font-poppins"
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL as string;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Amirhosein Rajaei",
  description:
    "Hi, I'm Amirhosein Rajaei — a full-stack developer from Tabriz building modern, high-performance web apps with React, Node.js, and Next.js.",
  icons: {
     icon: [
      { url: "/logo/favicon.ico", type: "image/x-icon" },
      { url: "/logo/icon.png", type: "image/png" },
    ]
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Amirhosein Rajaei",
    description:
      "Full-stack developer building modern web apps with React, Node.js, and Next.js.",
    url: siteUrl,
    siteName: "Amirhosein Rajaei",
    images: [
      {
        url: "/logo/logo.png",
        width: 512,
        height: 512,
        alt: "Amirhosein Rajaei",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirhosein Rajaei",
    description:
      "Full-stack developer building modern web apps with React, Node.js, and Next.js.",
    images: ["/logo/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-theme="dracula">
      <body
        className={`${poppins.className} scroll-smooth antialiased`}
      >
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}

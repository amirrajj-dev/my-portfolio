import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/shared/navbar/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable : "--font-poppins"
});

export const metadata: Metadata = {
  icons: {
     icon: [
      { url: "/logo/favicon.ico", type: "image/x-icon" },
      { url: "/logo/icon.png", type: "image/png" },
    ]
  },
  robots: {
    index: true,
    follow: true,
  }
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
      </body>
    </html>
  );
}

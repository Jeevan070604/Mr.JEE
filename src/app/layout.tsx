import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "RESTARNT | Premium Street Food Experience",
  description: "Experience the finest street food with cinematic flavors. Order online or book a table for an unforgettable dining experience.",
  keywords: "restaurant, street food, fine dining, food delivery, table booking",
  openGraph: {
    title: "RESTARNT | Premium Street Food Experience",
    description: "Experience the finest street food with cinematic flavors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased bg-[#0B0B0B] text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sacrament Meetings",
    template: "%s | Sacrament Meetings",
  },
  description:
    "Plan, organize, and manage ward sacrament meetings, including speakers, hymns, prayers, and meeting schedules.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-gray-50 text-gray-900`}>
        <Header />

        <main className="mx-auto max-w-6xl px-6 py-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
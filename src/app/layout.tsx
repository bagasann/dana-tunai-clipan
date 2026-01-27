
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dana Tunai Support by Solusi Mudah Kredit Mobil",
  description: "Ajukan pinjaman dana tunai jaminan BPKB mobil dengan mudah dan cepat.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

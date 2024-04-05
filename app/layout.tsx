import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Libre_Franklin, Italiana } from 'next/font/google'

const italiana = Italiana({
  subsets: ['latin'],
  variable: "--font-mont",
  weight: "400"
})


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "loja",
  description: "projetinho de ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

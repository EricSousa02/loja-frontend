import type { Metadata } from "next";
import "./globals.css";
import { Libre_Franklin, Italiana } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster";

const LibreFranklin = Libre_Franklin({
  subsets: ['latin'],
  variable: "--font-mont",
  weight: "400"
})

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
      <body className={LibreFranklin.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../context/CartContext";
import CookieBanner from "../components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DjurhuusData - IT-løsninger og udvikling",
  description: "Professionelle IT-løsninger skræddersyet til dine behov. Portfolio af Arne Djurhuus - webudvikling, softwareudvikling og IT-konsulentservice.",
  keywords: ["webudvikling", "softwareudvikling", "IT-konsulent", "React", "Next.js"],
  authors: [{ name: "Arne Djurhuus" }],
  openGraph: {
    title: "DjurhuusData - IT-løsninger og udvikling",
    description: "Professionelle IT-løsninger skræddersyet til dine behov",
    url: "https://www.djurhuusdata.dk",
    siteName: "DjurhuusData",
    locale: "da_DK",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <CookieBanner />
        </CartProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { PrimeReactProvider } from "primereact/api";
import "./globals.css";
import WhatsAppButton from "@/components/homepage/WhatsAppButton";
import { LenisProvider } from "@/components/providers/LenisProvider";
import MotionProvider from "@/components/providers/MotionProvider";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT. Niatra Mega Gemilang",
  description: "Solusi Outsourcing Profesional untuk Mendukung Operasional Bisnis Anda",
  icons: {
    icon: "/favico.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} antialiased`}>
        <PrimeReactProvider>
          <LenisProvider>
            <MotionProvider>{children}</MotionProvider>
          </LenisProvider>
          <WhatsAppButton />
        </PrimeReactProvider>
      </body>
    </html>
  );
}

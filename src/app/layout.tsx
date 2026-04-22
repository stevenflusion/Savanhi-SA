import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import DocsLayout from "@/components/layout/DocsLayout";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Savanhi Docs — Documentación Oficial",
  description:
    "La plataforma que revitaliza el comercio de barrio. Documentación completa de negocio, producto, finanzas, legal y operaciones.",
  keywords: [
    "Savanhi",
    "tiendas de barrio",
    "cupones digitales",
    "Ecuador",
    "fintech",
    "comercio",
  ],
  authors: [{ name: "Savanhi S.A.S." }],
  manifest: "/manifest.json",
  icons: {
    icon: "/icon-192x192.png",
    apple: "/icon-192x192.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#1C1C1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${jetbrainsMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#1C1C1C] text-[#F4F4F4]">
        <DocsLayout>{children}</DocsLayout>
      </body>
    </html>
  );
}

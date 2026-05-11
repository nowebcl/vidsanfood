import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Vidsan Seafoods | Premium Chilean Seafood Export",
  description: "Líderes en la exportación de productos del mar premium desde la Patagonia Chilena. Calidad, trazabilidad e innovación global.",
  icons: {
    icon: "https://www.vidsanseafoods.cl/wp-content/uploads/2024/02/Logo-VidSan-1-130x126.png",
    apple: "https://www.vidsanseafoods.cl/wp-content/uploads/2024/02/Logo-VidSan-1-130x126.png",
  },
  keywords: ["Seafood Chile", "Vidsan Seafoods", "Exportación productos del mar", "Ancud", "Chilean King Crab", "Centolla", "Langosta"],
  openGraph: {
    title: "Vidsan Seafoods | Calidad y Sabor para Chile y el Mundo",
    description: "Líderes en procesamiento y exportación de productos del mar premium desde el sur de Chile.",
    url: "https://vidsanseafoods.cl",
    siteName: "Vidsan Seafoods",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vidsan Seafoods | Exportación de Calidad",
    description: "Procesamiento de productos del mar de alta calidad para el mercado nacional e internacional.",
  },
};


import { LanguageProvider } from "@/lib/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} font-sans scroll-smooth`}>

      <body className="min-h-screen bg-background text-foreground selection:bg-accent/30">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

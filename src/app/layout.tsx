import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ENE - Spécialiste Micro-Station d'Épuration | Assainissement Non Collectif",
    template: "%s | ENE Assainissement",
  },
  description:
    "ENE (Environnement Nature Équilibre), spécialiste de l'assainissement non collectif depuis 2006. Micro-stations Tricel, filtres compacts, pompes de relevage. Installation, entretien et SAV dans le Cher (18), Nièvre (58), Allier (03) et départements limitrophes.",
  keywords: [
    "micro-station épuration",
    "assainissement non collectif",
    "Tricel Novo",
    "filtre compact",
    "fosse septique",
    "ENE",
    "Sancoins",
    "Cher",
    "pompe de relevage",
    "eau de pluie",
  ],
  authors: [{ name: "ENE SAS" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://enemicrostation.fr",
    siteName: "ENE - Environnement Nature Équilibre",
    title: "ENE - Spécialiste Micro-Station d'Épuration",
    description:
      "Spécialiste de l'assainissement non collectif depuis 2006. Micro-stations Tricel, filtres compacts, installation et entretien.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

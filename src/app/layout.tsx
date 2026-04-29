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
  metadataBase: new URL("https://enemicrostation.fr"),
  title: {
    default: "ENE SAS - Spécialiste Micro-Station d'Épuration | Assainissement Non Collectif",
    template: "%s | ENE SAS Assainissement",
  },
  description:
    "ENE SAS (Environnement Nature Équilibre), spécialiste de l'assainissement non collectif depuis 2006. Micro-stations Tricel Novo, filtres compacts Seta, pompes de relevage Calpeda. Installation, entretien et SAV à Sancoins (18) et départements 58, 03, 36, 23, 63.",
  keywords: [
    "micro-station épuration",
    "assainissement non collectif",
    "Tricel Novo",
    "filtre compact Tricel Seta",
    "fosse septique",
    "ENE SAS",
    "Sancoins",
    "Cher",
    "Nièvre",
    "Allier",
    "pompe de relevage",
    "eau de pluie",
    "eaux grises",
    "assainissement individuel",
    "micro-station Tricel",
    "épuration eaux usées",
  ],
  authors: [{ name: "ENE SAS" }],
  creator: "ENE SAS - Environnement Nature Équilibre",
  publisher: "ENE SAS",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: "https://enemicrostation.fr" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://enemicrostation.fr",
    siteName: "ENE SAS - Environnement Nature Équilibre",
    title: "ENE SAS - Spécialiste Micro-Station d'Épuration depuis 2006",
    description:
      "Micro-stations Tricel Novo, filtres compacts, pompes de relevage. Installation et entretien dans le Cher (18), Nièvre (58), Allier (03) et départements limitrophes.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "ENE SAS - Environnement Nature Équilibre - Assainissement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENE SAS - Spécialiste Micro-Station d'Épuration",
    description: "Assainissement non collectif depuis 2006. Micro-stations Tricel, filtres compacts.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  other: {
    "geo.region": "FR-18",
    "geo.placename": "Sancoins",
    "geo.position": "46.8312;2.9231",
    "ICBM": "46.8312, 2.9231",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ENE SAS - Environnement Nature Équilibre",
  description: "Spécialiste de l'assainissement non collectif depuis 2006. Micro-stations Tricel Novo, filtres compacts, pompes de relevage, récupération d'eau de pluie.",
  url: "https://enemicrostation.fr",
  telephone: "+33248760284",
  email: "contact@ene-sas.fr",
  foundingDate: "2006",
  numberOfEmployees: "8",
  image: "https://enemicrostation.fr/opengraph-image.png",
  logo: "https://enemicrostation.fr/images/logo-ene.jpeg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 avenue des Fédérés",
    addressLocality: "Sancoins",
    postalCode: "18600",
    addressRegion: "Centre-Val de Loire",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.8312,
    longitude: 2.9231,
  },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Cher (18)" },
    { "@type": "AdministrativeArea", name: "Nièvre (58)" },
    { "@type": "AdministrativeArea", name: "Allier (03)" },
    { "@type": "AdministrativeArea", name: "Indre (36)" },
    { "@type": "AdministrativeArea", name: "Creuse (23)" },
    { "@type": "AdministrativeArea", name: "Puy-de-Dôme (63)" },
    { "@type": "AdministrativeArea", name: "Cantal (15)" },
    { "@type": "AdministrativeArea", name: "Haute-Loire (43)" },
    { "@type": "AdministrativeArea", name: "Loiret (45)" },
    { "@type": "AdministrativeArea", name: "Loir-et-Cher (41)" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "12:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "18:00",
    },
  ],
  sameAs: ["https://www.facebook.com/ENEmicrostation.epuration"],
  priceRange: "€€",
  serviceType: [
    "Installation de micro-stations d'épuration",
    "Assainissement non collectif",
    "Entretien et maintenance micro-stations",
    "Vente de filtres compacts",
    "Pompes de relevage",
    "Récupération d'eau de pluie",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

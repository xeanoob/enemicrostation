import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits - Assainissement Non Collectif",
  description: "Découvrez la gamme complète ENE SAS : micro-stations Tricel Novo, filtres compacts Seta, pompes de relevage Calpeda, récupération d'eau de pluie, traitement des eaux grises. Devis gratuit.",
  alternates: { canonical: "https://enemicrostation.fr/produits" },
  openGraph: {
    title: "Produits ENE SAS - Solutions d'Assainissement Non Collectif",
    description: "Micro-stations Tricel Novo, filtres compacts, pompes de relevage, eau de pluie. Solutions professionnelles d'assainissement.",
    url: "https://enemicrostation.fr/produits",
  },
};

export default function ProduitsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

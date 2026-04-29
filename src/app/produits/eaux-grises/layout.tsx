import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Traitement des Eaux Grises - Recyclage & Réutilisation",
  description: "Traitement et recyclage des eaux grises pour réutilisation : chasses d'eau, arrosage, lavage. Économie de 30 à 40% d'eau. Solution par ENE SAS à Sancoins (18). Devis sur mesure.",
  alternates: { canonical: "https://enemicrostation.fr/produits/eaux-grises" },
  openGraph: {
    title: "Traitement des Eaux Grises - ENE SAS",
    description: "Économisez 30 à 40% d'eau grâce au recyclage des eaux grises. Étude personnalisée par ENE SAS.",
    url: "https://enemicrostation.fr/produits/eaux-grises",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pompes et Postes de Relevage Calpeda",
  description: "Pompes et postes de relevage Calpeda pour particuliers, professionnels et collectivités. Étude, livraison, mise en route, entretien et SAV par ENE SAS à Sancoins (18). Devis gratuit.",
  alternates: { canonical: "https://enemicrostation.fr/produits/pompes-relevage" },
  openGraph: {
    title: "Pompes de Relevage Calpeda - ENE SAS",
    description: "Solutions de relevage pour eaux usées et pluviales. Installation et SAV par ENE SAS.",
    url: "https://enemicrostation.fr/produits/pompes-relevage",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

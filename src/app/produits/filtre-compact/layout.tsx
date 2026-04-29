import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Filtre Compact Tricel Seta - Assainissement Fibre de Coco",
  description: "Filtre compact Tricel Seta Simplex : cuve unique 2 compartiments, massif filtrant fibre de coco. Réduit 80% la surface d'épandage. Garantie 20 ans. ENE SAS Sancoins (18). Devis gratuit.",
  alternates: { canonical: "https://enemicrostation.fr/produits/filtre-compact" },
  openGraph: {
    title: "Filtre Compact Tricel Seta - ENE SAS",
    description: "Filtre compact fibre de coco, garantie 20 ans. Réduction de 80% de la surface d'assainissement.",
    url: "https://enemicrostation.fr/produits/filtre-compact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Récupération d'Eau de Pluie - Cuves Plasteau",
  description: "Solutions de récupération et stockage d'eau de pluie par ENE SAS. Cuves Plasteau de 1 à 130m³. Économisez 50% sur votre facture d'eau. Usage domestique, collectivité, industrie. Sancoins (18).",
  alternates: { canonical: "https://enemicrostation.fr/produits/eau-de-pluie" },
  openGraph: {
    title: "Récupération Eau de Pluie - ENE SAS",
    description: "Économisez 50% de votre facture d'eau. Cuves Plasteau, installation et dimensionnement par ENE SAS.",
    url: "https://enemicrostation.fr/produits/eau-de-pluie",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

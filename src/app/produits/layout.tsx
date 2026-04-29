import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits & Solutions",
  description: "Découvrez notre gamme complète de solutions d'assainissement : micro-stations Tricel, filtres compacts, pompes de relevage et récupération d'eau de pluie.",
};

export default function ProduitsLayout({ children }: { children: React.ReactNode }) {
  return children;
}

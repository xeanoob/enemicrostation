import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Micro-Station d'Épuration Tricel Novo - Installation & Entretien",
  description: "Micro-station d'épuration Tricel Novo : compacte (5m²), garantie 20 ans, culture fixée. Installation par ENE SAS à Sancoins (18). Départements 18, 58, 03, 36, 23, 63, 15, 43. Devis gratuit.",
  alternates: { canonical: "https://enemicrostation.fr/produits/micro-stations" },
  openGraph: {
    title: "Micro-Station Tricel Novo - ENE SAS",
    description: "Solution compacte d'assainissement non collectif. Installation sur 5m², garantie cuve 20 ans. Devis gratuit.",
    url: "https://enemicrostation.fr/produits/micro-stations",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

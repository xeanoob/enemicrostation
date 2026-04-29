import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Livraison & Installation - Départements 18, 58, 03, 36",
  description: "ENE SAS assure la livraison, l'installation et la mise en route de vos micro-stations et filtres compacts. 6 véhicules dédiés. Intervention dans 10 départements : Cher, Nièvre, Allier, Indre, Creuse, Puy-de-Dôme.",
  alternates: { canonical: "https://enemicrostation.fr/livraison" },
  openGraph: {
    title: "Livraison & Installation - ENE SAS",
    description: "Livraison et installation par nos techniciens dans 10 départements. 6 véhicules dédiés.",
    url: "https://enemicrostation.fr/livraison",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages Clients - Avis Micro-Stations Tricel",
  description: "Découvrez les témoignages de nos clients : maires, particuliers et professionnels satisfaits de nos micro-stations Tricel Novo. Plus de 3600 clients depuis 2006.",
  alternates: { canonical: "https://enemicrostation.fr/temoignages" },
  openGraph: {
    title: "Témoignages Clients - ENE SAS",
    description: "Avis et retours de nos clients sur les micro-stations Tricel Novo installées par ENE SAS.",
    url: "https://enemicrostation.fr/temoignages",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

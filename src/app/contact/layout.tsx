import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacter ENE SAS - Devis Gratuit Assainissement",
  description: "Contactez ENE SAS pour un devis gratuit. Micro-stations Tricel, filtres compacts, pompes de relevage. Téléphone : 02 48 76 02 84. 10 avenue des Fédérés, 18600 Sancoins.",
  alternates: { canonical: "https://enemicrostation.fr/contact" },
  openGraph: {
    title: "Contact ENE SAS - Devis Gratuit",
    description: "Demandez un devis gratuit pour votre projet d'assainissement. ENE SAS, Sancoins (18).",
    url: "https://enemicrostation.fr/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

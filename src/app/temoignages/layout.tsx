import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Témoignages Clients",
  description: "Découvrez les retours d'expérience de nos clients : mairies, professionnels et particuliers satisfaits de nos micro-stations Tricel Novo.",
};

export default function TemoignagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}

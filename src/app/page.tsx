import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Certifications from "@/components/sections/Certifications";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "ENE SAS - Micro-Station d'Épuration & Assainissement Non Collectif à Sancoins (18)",
  description: "ENE SAS, spécialiste assainissement non collectif depuis 2006. Micro-stations Tricel Novo, filtres compacts, pompes de relevage, eau de pluie. Installation, entretien, SAV. Sancoins, Cher (18), Nièvre (58), Allier (03).",
  alternates: { canonical: "https://enemicrostation.fr" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Certifications />
      <Solutions />
      <Process />
      <WhyUs />
      <CTA />
    </>
  );
}

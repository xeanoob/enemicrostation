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

import { client, isSanityConfigured } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  let heroData = { title: "ENE SAS", subtitle: "Énergies Nouvelles Environnement" };
  let productsList: any[] = [];
  let whyUsData: any = null;
  let processData: any = null;
  let phone: string | undefined = undefined;

  try {
    if (isSanityConfigured) {
      // Fetch homepage configurations
      const homepageData = await client.fetch(`*[_type == "homepage"][0]`);
      if (homepageData) {
        heroData = {
          title: homepageData.title || "ENE SAS",
          subtitle: homepageData.subtitle || "Énergies Nouvelles Environnement"
        };
      }

      // Fetch products list
      const sanityProducts = await client.fetch(`*[_type == "product"]`);
      if (sanityProducts && sanityProducts.length > 0) {
        productsList = sanityProducts.map((p: any) => ({
          title: p.title,
          desc: p.description,
          href: p.slug?.current ? `/produits/${p.slug.current}` : "/produits",
          image: p.image ? urlFor(p.image).url() : "/images/micro-station.jpg"
        }));
      }

      // Fetch whyUs settings
      const sanityWhyUs = await client.fetch(`*[_type == "whyUs"][0]`);
      if (sanityWhyUs) {
        whyUsData = {
          title: sanityWhyUs.title,
          subtitle: sanityWhyUs.subtitle,
          engagements: sanityWhyUs.engagements?.map((e: any) => ({
            title: e.title,
            desc: e.description,
            image: e.image ? urlFor(e.image).url() : "/images/livraison2.jpg"
          }))
        };
      }

      // Fetch process settings
      const sanityProcess = await client.fetch(`*[_type == "process"][0]`);
      if (sanityProcess) {
        processData = {
          title: sanityProcess.title,
          description1: sanityProcess.description1,
          description2: sanityProcess.description2,
          infoText: sanityProcess.infoText
        };
      }

      // Fetch site settings for phone
      const sanitySettings = await client.fetch(`*[_type == "siteSettings"][0]`);
      if (sanitySettings) {
        phone = sanitySettings.phone;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using default values:", error);
  }

  return (
    <>
      <Hero title={heroData.title} subtitle={heroData.subtitle} />
      <Certifications />
      <Solutions items={productsList} />
      <Process 
        title={processData?.title} 
        description1={processData?.description1} 
        description2={processData?.description2} 
        infoText={processData?.infoText} 
        phone={phone}
      />
      <WhyUs 
        title={whyUsData?.title} 
        subtitle={whyUsData?.subtitle} 
        items={whyUsData?.engagements} 
      />
      <CTA />
    </>
  );
}

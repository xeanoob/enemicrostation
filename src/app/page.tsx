import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Certifications from "@/components/sections/Certifications";
import Solutions from "@/components/sections/Solutions";
import WhyUs from "@/components/sections/WhyUs";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";
import { isSanityConfigured } from "@/sanity/lib/client";
import { getSanityClient } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "ENE SAS - Micro-Station d'Épuration & Assainissement Non Collectif à Sancoins (18)",
  description: "ENE SAS, spécialiste assainissement non collectif depuis 2006. Micro-stations Tricel Novo, filtres compacts, pompes de relevage, eau de pluie. Installation, entretien, SAV. Sancoins, Cher (18), Nièvre (58), Allier (03).",
  alternates: { canonical: "https://enemicrostation.fr" },
};

export default async function Home() {
  let heroData: any = {
    title: "ENE SAS",
    subtitle: "Énergies Nouvelles Environnement",
    bg: "/images/hero-bg.jpeg",
    desc1: "Spécialiste en assainissement depuis 2006",
    desc2: "Conseils, étude, livraison, mise en route, installation, SAV, entretien et maintenance",
    tags: "Micro-stations d'épuration Tricel • Filtres compacts • Pompes de relevage • Eau de pluie",
  };
  let productsList: any[] = [];
  let whyUsData: any = null;
  let processData: any = null;
  let phone = "02 48 76 02 84";
  let statsData: any[] | null = null;
  let ctaData: any = null;

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      // Fetch homepage configurations
      const homepageData = await sanityClient.fetch(`*[_type == "homepage"][0]`);
      if (homepageData) {
        heroData = {
          title: homepageData.title || heroData.title,
          subtitle: homepageData.subtitle || heroData.subtitle,
          bg: homepageData.heroBg ? urlFor(homepageData.heroBg).url() : heroData.bg,
          desc1: homepageData.heroDesc1 || heroData.desc1,
          desc2: homepageData.heroDesc2 || heroData.desc2,
          tags: homepageData.heroTags || heroData.tags,
        };
        statsData = homepageData.stats || null;
        if (homepageData.ctaTitle) {
          ctaData = {
            title: homepageData.ctaTitle,
            text1: homepageData.ctaText1,
            text2: homepageData.ctaText2,
            image: homepageData.ctaImage ? urlFor(homepageData.ctaImage).url() : undefined,
          };
        }
      }

      // Fetch products list
      const sanityProducts = await sanityClient.fetch(`*[_type == "product"]`);
      if (sanityProducts && sanityProducts.length > 0) {
        productsList = sanityProducts.map((p: any) => ({
          title: p.title,
          desc: p.description,
          href: p.slug?.current ? `/produits/${p.slug.current}` : "/produits",
          image: p.image ? urlFor(p.image).url() : "/images/micro-station.jpg"
        }));
      }

      // Fetch whyUs settings
      const sanityWhyUs = await sanityClient.fetch(`*[_type == "whyUs"][0]`);
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
      const sanityProcess = await sanityClient.fetch(`*[_type == "process"][0]`);
      if (sanityProcess) {
        processData = {
          title: sanityProcess.title,
          description1: sanityProcess.description1,
          description2: sanityProcess.description2,
          infoText: sanityProcess.infoText
        };
      }

      // Fetch site settings for phone
      const sanitySettings = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
      if (sanitySettings) {
        phone = sanitySettings.phone || phone;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch from Sanity, using default values:", error);
  }

  return (
    <>
      <Hero
        title={heroData.title}
        subtitle={heroData.subtitle}
        bg={heroData.bg}
        desc1={heroData.desc1}
        desc2={heroData.desc2}
        tags={heroData.tags}
        phone={phone}
      />
      <Certifications stats={statsData} />
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
      <CTA
        title={ctaData?.title}
        text1={ctaData?.text1}
        text2={ctaData?.text2}
        image={ctaData?.image}
        phone={phone}
      />
    </>
  );
}

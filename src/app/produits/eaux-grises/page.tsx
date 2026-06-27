import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { getSanityClient } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export default async function EauxGrisesPage() {
  let title = "Traitement des eaux grises";
  let subtitle = "Économisez 30 à 40% de votre consommation d&apos;eau";
  let introTitle = "Pourquoi traiter les eaux grises ?";
  let introText = "Le traitement des eaux grises permet leur réutilisation sur des postes n&apos;ayant pas besoin d&apos;eau potable, comme par exemple :";
  let benefits = ["Les chasses d&apos;eau", "L&apos;arrosage des pelouses", "Le lavage des véhicules", "Le lavage des sols"];
  let detailsText = "Le principe est de récupérer les eaux provenant des douches, baignoires, lavabos… Les eaux passent par un premier dégrilleur afin de récupérer cheveux et autres résidus, puis par une filtration membranaire ainsi qu&apos;un traitement chloré si besoin. Les eaux filtrées et traitées sont ensuite stockées pour être réutilisées.";
  let schemaImage = "/images/eaux-grises-schema.jpg";
  let phone = "02 48 76 02 84";

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      const pageData = await sanityClient.fetch(`*[_type == "productPage" && pageId == "eaux-grises"][0]`);
      if (pageData) {
        title = pageData.title || title;
        subtitle = pageData.subtitle || subtitle;
        introTitle = pageData.introTitle || introTitle;
        introText = pageData.introText || introText;
        if (pageData.benefits && pageData.benefits.length > 0) {
          benefits = pageData.benefits;
        }
        detailsText = pageData.detailsText || detailsText;
        if (pageData.schemaImage) {
          schemaImage = urlFor(pageData.schemaImage).url();
        }
      }

      const settingsData = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
      if (settingsData) {
        phone = settingsData.phone || phone;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch product page from Sanity:", error);
  }

  const cleanPhone = phone.replace(/\s+/g, "");

  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">{subtitle}</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{introTitle}</h2>
              <div className="w-16 h-1 bg-primary-400 mb-5" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: introText }} />
              
              <ul className="text-sm sm:text-base text-gray-600 list-disc list-inside space-y-2 mb-6">
                {benefits.map((benefit, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: benefit }} />
                ))}
              </ul>
            </div>
            <div>
              <Image
                src={schemaImage}
                alt="Schéma de traitement"
                width={600}
                height={400}
                className="w-full h-auto border border-gray-200"
                quality={85}
              />
              <p className="text-xs text-gray-500 mt-2 italic">Schéma de principe du traitement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Principe de fonctionnement</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: detailsText }} />
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Un projet de traitement des eaux grises ?</h2>
          <p className="text-white/80 mb-6 text-sm">Contactez-nous pour étudier la faisabilité technique.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 bg-white text-primary-500 font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
              Demander un devis
            </Link>
            <a href={`tel:${cleanPhone}`} className="px-6 py-3 border-2 border-white text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-primary-500 transition-colors">
              <Phone size={16} /> {phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

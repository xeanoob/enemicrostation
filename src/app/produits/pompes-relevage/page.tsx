import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, Download } from "lucide-react";
import { getSanityClient } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

export default async function PompesPage() {
  let title = "Pompes et postes de relevage";
  let subtitle = "Solutions de relevage adaptées à tous les besoins";
  let introTitle = "Le fonctionnement";
  let introText = "Les postes ou pompes de relevage servent à refouler les eaux au cas où l&apos;habitation ou l&apos;immeuble soit plus bas que le réseau d&apos;eaux usées ou pluviales. Composé d&apos;une cuve et d&apos;une ou plusieurs pompes, les eaux entrantes seront refoulées vers le réseau, grâce au déclenchement d&apos;un flotteur de niveau qui actionnera automatiquement la pompe. En fonction de la hauteur et de la distance, la très large gamme de pompes ou de postes de relevage est étudiée pour tous les besoins :";
  let benefits = ["Pour le particulier", "Pour les professionnels", "Pour les collectivités ou industries"];
  let detailsText = "Dans tous les cas, nous en assurons l&apos;étude, la livraison et si besoin la mise en route, l&apos;entretien et le SAV.";
  let schemaImage = "/images/installation.jpg";
  let phone = "02 48 76 02 84";

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      const pageData = await sanityClient.fetch(`*[_type == "productPage" && pageId == "pompes-relevage"][0]`);
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
              
              <ul className="text-sm sm:text-base text-gray-600 list-disc list-inside space-y-1 mb-6">
                {benefits.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
              <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: detailsText }} />
            </div>
            <div className="space-y-4">
              <Image
                src="/images/pompe-calpeda.jpg"
                alt="Pompe Calpeda"
                width={226}
                height={300}
                className="w-full max-w-[226px] h-auto border border-gray-200 mx-auto"
                quality={85}
              />
              <Image
                src="/images/califosse-schema.jpg"
                alt="Schéma Califosse poste de relevage"
                width={1024}
                height={374}
                className="w-full h-auto border border-gray-200"
                quality={85}
              />
              <p className="text-xs text-gray-500 italic">Schéma de fonctionnement Califosse</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Pour quelle utilité ?</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Les pompes Calpeda sont conçues pour assurer une gestion efficace de l&apos;eau,
            qu&apos;il s&apos;agisse d&apos;eau potable ou d&apos;eaux claires. Elles sont idéales pour :
          </p>
          <ul className="text-sm sm:text-base text-gray-600 list-disc list-inside space-y-2 mb-4">
            <li><strong>L&apos;approvisionnement en eau potable</strong> : Garantissez un approvisionnement continu et fiable
            pour les résidences, bâtiments commerciaux et installations industrielles.</li>
            <li><strong>L&apos;irrigation et les systèmes de refroidissement</strong> : Optimisez les systèmes d&apos;irrigation
            agricoles et les installations industrielles avec des pompes adaptées.</li>
          </ul>
          <p className="text-sm text-gray-500">
            Grâce à leur conception robuste et leur efficacité énergétique, les pompes Calpeda assurent
            un fonctionnement durable et économique.
          </p>
        </div>
      </section>


      {/* Documentation */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Documentation</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />
          <a href="/docs/pompes-calpeda.pdf" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all max-w-md">
            <div className="w-12 h-12 bg-red-50 flex items-center justify-center shrink-0">
              <FileText size={24} className="text-red-500" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-gray-800 text-sm">Pompes de relevage</p>
              <p className="text-xs text-gray-500">Par Calpeda</p>
            </div>
            <Download size={18} className="text-gray-500 shrink-0" />
          </a>
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Besoin d&apos;une pompe de relevage ?</h2>
          <p className="text-white/80 mb-6 text-sm">Nous étudions votre configuration et trouvons la solution adaptée.</p>
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

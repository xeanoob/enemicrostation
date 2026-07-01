import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, Download } from "lucide-react";
import { getSanityClient } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

const defaultDocs = [
  { title: "Brochure Tricel Filtro 18 EH", subtitle: "Filtre compact Tricel Filtro 18 EH", href: "/docs/brochure-tricel-filtro.pdf" },
  { title: "Brochure Tricel Filtro 21 EH", subtitle: "Filtre compact Tricel Filtro 21 EH", href: "/docs/brochure-tricel-filtro-21.pdf" },
];

const defaultGallery = [
  { src: "/images/filtre-1.jpg", alt: "Installation filtre compact Tricel Filtro" },
  { src: "/images/filtre-2.jpg", alt: "Chantier filtre compact Tricel Filtro" },
  { src: "/images/filtrecompact.jpeg", alt: "Filtre compact Tricel Filtro" },
];

export default async function FiltreCompactPage() {
  let title = "Le filtre compact Tricel Filtro";
  let subtitle = "Solution fiable pour le traitement des eaux usées domestiques";
  let introTitle = "Le fonctionnement";
  let introText1 = "Le filtre compact Tricel FILTRO permet de traiter efficacement les eaux usées domestiques et assimilées. Il est adapté pour les applications individuelles en utilisation permanente (résidences principales), en utilisation intermittente (résidences secondaires) ainsi que, sous réserve de validation par une étude de filière, pour les hôtels, campings, regroupements d&apos;habitations, etc.";
  let introText2 = "Le filtre compact Tricel FILTRO est monocuve avec 2 compartiments (sauf le modèle 18 EH) : un compartiment de décantation primaire pour le traitement primaire des eaux usées, et un compartiment massif filtrant pour le traitement secondaire.";
  let introText3 = "Le filtre compact ne nécessite aucune énergie pour le traitement des eaux usées en modèle Sortie basse. En modèle Sortie haute, une pompe de relevage assure l&apos;évacuation des eaux traitées. La technologie sur laquelle il repose assure aux usagers une fiabilité exceptionnelle et des coûts d&apos;entretien des plus bas.";
  let specTitle = "Spécificités du filtre compact Tricel FILTRO";
  let specText = "Les filtres compacts Tricel FILTRO sont composés d&apos;un compartiment de décantation primaire et d&apos;un massif filtrant compact en <strong>fibre de coco naturelle</strong>. Ce média filtrant ne nécessite aucune opération de maintenance de type ratissage : un simple réassort de quelques kilos annuels suffit pour maintenir les performances maximales. Les filtres compacts Tricel FILTRO sont disponibles en <strong>2 gammes</strong> agréées jusqu&apos;à 18 EH : Sortie basse (gravitaire, sans électricité) et Sortie haute (avec pompe de relevage). Les cuves bénéficient d&apos;une <strong>garantie 10 ans</strong> extensible à <strong>20 ans</strong> si l&apos;entretien est réalisé par Tricel ou un de ses partenaires exclusifs. Grâce à son emprise au sol réduite (entre <strong>5 et 18 m²</strong> selon le modèle), le filtre compact Tricel FILTRO vous permet de réduire considérablement la surface dédiée à l&apos;assainissement comparé aux filières traditionnelles (40 à 200 m²).";
  
  let dimTitle = "Quelle dimension choisir ?";
  let dimText = "La règle de calcul est simple : <strong>1 Équivalent-Habitant = 1 Pièce Principale</strong>";
  let dimGamme = "Gamme disponible : Tricel FILTRO 4, 5, 7, 10, 12, 15 et 18 EH.";
  let dimNote = "Une pièce principale est une pièce d&apos;au moins 7m² avec une ouverture vers l&apos;extérieur (porte, fenêtre) et une hauteur sous plafond ≥ 2,3m.";
  
  let phone = "02 48 76 02 84";
  let docs = defaultDocs;
  let gallery = defaultGallery;

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      const pageData = await sanityClient.fetch(`*[_type == "productPage" && pageId == "filtre-compact"][0] {
        ...,
        "resolvedDocs": documents[] {
          title,
          subtitle,
          externalUrl,
          "fileUrl": file.asset->url
        },
        "resolvedGallery": gallery[] {
          alt,
          "src": image.asset->url
        }
      }`);

      if (pageData) {
        title = pageData.title || title;
        subtitle = pageData.subtitle || subtitle;
        introTitle = pageData.introTitle || introTitle;
        if (pageData.introText) {
          introText1 = pageData.introText;
          introText2 = "";
          introText3 = "";
        }
        if (pageData.detailsText) {
          specText = pageData.detailsText;
        }
        dimTitle = pageData.dimensionsTitle || dimTitle;
        dimText = pageData.dimensionsText || dimText;
        dimGamme = pageData.dimensionsGamme || dimGamme;
        dimNote = pageData.dimensionsNote || dimNote;

        if (pageData.resolvedDocs && pageData.resolvedDocs.length > 0) {
          docs = pageData.resolvedDocs.map((d: any) => ({
            title: d.title,
            subtitle: d.subtitle,
            href: d.fileUrl || d.externalUrl || "#",
          }));
        }
        if (pageData.resolvedGallery && pageData.resolvedGallery.length > 0) {
          gallery = pageData.resolvedGallery.map((g: any) => ({
            src: g.src || "/images/filtre-1.jpg",
            alt: g.alt || "Photo de filtre compact",
          }));
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
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: introText1 }} />
              {introText2 && <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: introText2 }} />}
              {introText3 && <p className="text-sm sm:text-base text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: introText3 }} />}
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Principe de fonctionnement</h3>
              <div className="bg-gray-50 border border-gray-200 p-5">
                <div className="space-y-3 text-sm text-gray-600">
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Phase 1 : Traitement primaire</p>
                    <p>Les eaux usées arrivent dans le compartiment de décantation primaire.
                      Les matières solides et boues lourdes décantent en fond de cuve, les graisses
                      remontent en surface. Des bactéries anaérobies liquéfient boues et matières solides.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 mb-1">Phase 2 : Traitement secondaire</p>
                    <p>Les effluents pré-traités traversent le massif filtrant en fibre de coco.
                      Un auget bascule à niveau pour répartir les bâchées uniformément.
                      La filtration physique et la purification biologique aérobie assurent
                      un traitement conforme à la législation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">{specTitle}</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <div className="text-sm sm:text-base text-gray-600 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: specText }} />

          {dimTitle && (
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-3">{dimTitle}</h3>
              {dimText && <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: dimText }} />}
              {dimGamme && <p className="text-sm text-gray-500 mb-2">{dimGamme}</p>}
              {dimNote && <p className="text-sm text-gray-400 italic" dangerouslySetInnerHTML={{ __html: dimNote }} />}
            </div>
          )}
        </div>
      </section>

      {/* Photos installations */}
      {gallery && gallery.length > 0 && (
        <section className="py-10 sm:py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Nos installations</h2>
            <div className="w-16 h-1 bg-primary-400 mb-6" />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((img, idx) => (
                <div key={idx} className="relative aspect-square overflow-hidden border border-gray-200">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" quality={75} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Documentation */}
      {docs && docs.length > 0 && (
        <section className="py-10 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Documentation Tricel</h2>
            <div className="w-16 h-1 bg-primary-400 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {docs.map((doc, idx) => (
                <a key={idx} href={doc.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center shrink-0">
                    <FileText size={24} className="text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-sm">{doc.title}</p>
                    <p className="text-xs text-gray-500">{doc.subtitle}</p>
                  </div>
                  <Download size={18} className="text-gray-500 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Un projet de filtre compact ?</h2>
          <p className="text-white/80 mb-6 text-sm">Contactez-nous pour un devis gratuit et personnalisé.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 bg-white text-primary-500 font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
              Demander un devis
            </Link>
            <div className="px-6 py-3 border-2 border-white text-white font-semibold text-sm flex items-center justify-center gap-2">
              <Phone size={16} />
              <a href={`tel:${cleanPhone}`} className="hover:text-gray-200 transition-colors">{phone}</a>
              <span className="text-white/60 mx-1">/</span>
              <a href="tel:0618127714" className="hover:text-gray-200 transition-colors">06 18 12 77 14</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

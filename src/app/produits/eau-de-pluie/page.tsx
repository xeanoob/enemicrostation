import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, Download } from "lucide-react";
import { getSanityClient } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

const defaultPhases = [
  {
    num: "1",
    title: "Collecter et filtrer",
    desc: "Récupération des eaux de la toiture et alimentation de la cuve de stockage. Filtration : l'eau arrive sur un filtre autonettoyant à plan incliné. Les feuilles et autres matières sont évacuées par le trop plein.",
  },
  {
    num: "2",
    title: "Stocker",
    desc: "Remplissage de la cuve par un tube plongeant pour éviter les remous. Trop plein d'évacuation lorsque la cuve est totalement pleine.",
  },
  {
    num: "3",
    title: "Utiliser",
    desc: "Tuyau d'aspiration avec flotteur pour pomper dans la tranche d'eau la plus claire. Pompe immergée entièrement automatique et sonde de niveau. Centrale DMG+ : en cas de manque d'eau, l'électrovanne s'ouvre et la cuve est alimentée en eau de ville.",
  },
];

const defaultDocs = [
  { href: "/docs/plasteau-habitat-jardin.pdf", title: "Récupération eau de pluie", sub: "Habitat & jardin" },
  { href: "/docs/plasteau-cuves.pdf", title: "Cuves polyéthylène", sub: "Récupération & régulation" },
  { href: "/docs/plasteau-reserve-incendie.pdf", title: "Réserves incendie", sub: "Eau de pluie" },
];

export default async function EauDePluiePage() {
  let title = "Réutilisation d'eau de pluie";
  let subtitle = "Économisez plus de 50% de votre facture d'eau potable";
  let introTitle = "Pourquoi récupérer l'eau de pluie ?";
  let introText1 = "Plus de 50% de nos besoins domestiques n'ont pas besoin d'eau potable : l'arrosage du jardin, les chasses d'eau, le lavage de voiture, des sols, l'appoint de piscine… L'eau de pluie peut servir à toutes ces tâches à condition qu'elle ait été correctement filtrée et stockée.";
  let introText2 = "Par soucis d'économie — l'eau étant de plus en plus chère — ou d'écologie — inutile de prendre de l'eau potable pour les WC — bon nombre de pays voisins valorisent l'eau de pluie depuis de très nombreuses années.";
  let introText3 = "Installer un système de récupération d'eau de pluie donne une <strong>valeur durable</strong> à votre habitation. Cette eau est gratuite et non calcaire.";
  let schemaImage = "/images/eau-pluie-schema.jpg";
  let phone = "02 48 76 02 84";
  let phases = defaultPhases;
  let docs = defaultDocs;
  let videoUrl1 = "https://www.dailymotion.com/embed/video/x3obmxj?ui-highlight=0&amp;endscreen-enable=0&amp;controls=1&amp;mute=0";
  let videoUrl2 = "https://www.youtube-nocookie.com/embed/h5JPQiDiutA";

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      const pageData = await sanityClient.fetch(`*[_type == "productPage" && pageId == "eau-de-pluie"][0] {
        ...,
        "resolvedDocs": documents[] {
          title,
          subtitle,
          externalUrl,
          "fileUrl": file.asset->url
        },
        "resolvedPhases": phases[] {
          num,
          title,
          desc
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
        if (pageData.schemaImage) {
          schemaImage = urlFor(pageData.schemaImage).url();
        }
        if (pageData.resolvedPhases && pageData.resolvedPhases.length > 0) {
          phases = pageData.resolvedPhases.map((p: any) => ({
            num: p.num,
            title: p.title,
            desc: p.desc,
          }));
        }
        if (pageData.resolvedDocs && pageData.resolvedDocs.length > 0) {
          docs = pageData.resolvedDocs.map((d: any) => ({
            href: d.fileUrl || d.externalUrl || "#",
            title: d.title,
            sub: d.subtitle,
          }));
        }
        if (pageData.videoUrl) {
          videoUrl2 = pageData.videoUrl;
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
              <Image
                src={schemaImage}
                alt="Schéma de récupération"
                width={600}
                height={400}
                className="w-full h-auto border border-gray-200"
                quality={85}
              />
              <p className="text-xs text-gray-500 mt-2 italic">Schéma de fonctionnement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Le fonctionnement</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />

          <div className="space-y-4">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-white border border-gray-200 p-5">
                <h3 className="font-bold text-primary-400 text-sm uppercase mb-2">
                  {phase.num}. {phase.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Ce que dit la loi</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 p-5">
              <h3 className="font-bold text-gray-800 mb-3">Usage intérieur</h3>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Évacuer les eaux des WC (chasse d'eau)</li>
                <li>Nettoyer les sols</li>
                <li>Laver le linge (avec traitement adapté)</li>
              </ul>
              <p className="text-xs text-gray-500 mt-3 italic">
                Attention : interdit en aval d'un toit contenant de l'amiante-ciment ou du plomb.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-5">
              <h3 className="font-bold text-gray-800 mb-3">Usage extérieur</h3>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Arrosage des plantes</li>
                <li>Nettoyage d'un véhicule</li>
                <li>Utilisation libre à l'extérieur</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 border border-gray-200 p-5">
            <h3 className="font-bold text-gray-800 mb-2">Cuves grands volumes (10 à 130 m³)</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Collectivités :</strong> réserves incendie, arrosage de stade, de plantations, remplissage de balayeuse, chasses d'eau de salle des fêtes…</p>
            <p className="text-sm text-gray-600"><strong>Industrie :</strong> arrosage de pelouses, process sur machines-outils, lavage des sols et du matériel, piste de lavage de voitures…</p>
          </div>
        </div>
      </section>

      {/* Vidéos */}
      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Présentations vidéos</h2>
          <div className="w-16 h-1 bg-primary-400 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-3 font-sans">Plasteau lance une gamme de cuve gros volume</h3>
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={videoUrl1}
                  title="Dailymotion - Récupérateur d'eau de pluie Plasteau"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-3 font-sans">Ecoslim cuve de récupération des eaux de pluies</h3>
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={videoUrl2}
                  title="Tricel - Cuve Ecoslim récupération des eaux pluviales"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      {docs && docs.length > 0 && (
        <section className="py-10 sm:py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Documentation (Plasteau)</h2>
            <div className="w-16 h-1 bg-primary-400 mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {docs.map((doc, idx) => (
                <a key={idx} href={doc.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
                  <div className="w-10 h-10 bg-red-50 flex items-center justify-center shrink-0">
                    <FileText size={20} className="text-red-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-800 text-xs sm:text-sm">{doc.title}</p>
                    <p className="text-xs text-gray-500">{doc.sub}</p>
                  </div>
                  <Download size={16} className="text-gray-500 shrink-0" />
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Un projet de récupération d'eau de pluie ?</h2>
          <p className="text-white/80 mb-6 text-sm">Nous dimensionnons votre installation selon vos besoins.</p>
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

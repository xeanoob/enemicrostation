import Link from "next/link";
import Image from "next/image";
import { Zap, Volume2, Eye, Wrench, Leaf, DollarSign, ShieldCheck, Award, Phone, Beaker, Wind, FlaskConical, Download, FileText } from "lucide-react";
import { getSanityClient } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

const defaultAdvantages = [
  { icon: Zap, label: "Facilité et rapidité d'installation" },
  { icon: Volume2, label: "Solution silencieuse, sans odeur" },
  { icon: Eye, label: "Faible encombrement, impact visuel minime" },
  { icon: Wrench, label: "Entretien et coût de maintenance réduit" },
  { icon: Leaf, label: "Plus écologique" },
  { icon: DollarSign, label: "Plus économique" },
  { icon: ShieldCheck, label: "Marquage CE, conforme aux normes" },
  { icon: Award, label: "Agréments ministériels 2011-006 / 2012-003 / 2017-004" },
];

const defaultPhases = [
  { icon: Beaker, num: "1", title: "Décantation primaire", desc: "Les eaux usées entrent dans le compartiment de décantation primaire. Les boues lourdes et matières solides se déposent au fond du bassin. Un chapeau de flottants, principalement constitué de graisses, se forme en surface. Une digestion anaérobie commence alors, qui améliore la qualité des eaux en liquéfiant peu à peu les boues." },
  { icon: Wind, num: "2", title: "Aération / Oxygénation", desc: "Le bassin d'aération est équipé de supports bactériens en nid d'abeille spécialement conçus pour qu'une multitude de bactéries s'y développe naturellement. Les bactéries sont continuellement alimentées en oxygène grâce à un compresseur situé au sommet de la cuve. Les bactéries se nourrissent des impuretés et les éliminent des effluents." },
  { icon: FlaskConical, num: "3", title: "Clarification / Décantation finale", desc: "Les boues résiduelles se déposent au fond du bassin de décantation finale, où un système de recirculation basé sur un principe d'airlift les renvoie dans le premier bassin. Les effluents traités répondent aux normes en vigueur et peuvent être évacués vers l'exutoire (infiltration dans le sol, rejet dans le milieu hydraulique superficiel)." },
];

const defaultTanks = [
  { src: "/images/tank-fr6.webp", label: "Tricel FR6 1-6EH 3/4000 Litres" },
  { src: "/images/tank-2.webp", label: "Tricel FR9 7-9EH 5/6000 Litres" },
  { src: "/images/tank-3.webp", label: "Tricel FR11 10-11EH 6/7000 Litres" },
  { src: "/images/tank-4.png.webp.png.webp", label: "Tricel FR14 12-14EH 8000 Litres" },
  { src: "/images/tank-5.png.webp.png.webp", label: "Tricel FR17 15-17EH 9000 Litres" },
  { src: "/images/Tank-6.png.webp.png.webp", label: "Tricel FR20 18-20EH 10000 Litres" },
];

const defaultDocs = [
  { title: "Brochure Tricel Novo", subtitle: "Microstations d'épuration à culture fixée", href: "/docs/brochure-tricel-novo.pdf" },
  { title: "Guide d'utilisation Tricel Novo", subtitle: "Assainissement non collectif — 21-50 EH", href: "/docs/guide-utilisation-tricel-novo.pdf" },
];

const phaseIconMap: Record<string, any> = {
  Beaker,
  Wind,
  FlaskConical,
};

export default async function MicroStationsPage() {
  let title = "Micro-station d'épuration Tricel Novo";
  let subtitle = "Compacte, simple, robuste et fiable. Fabrication 100% française.";
  let introTitle = "Concessionnaires exclusifs Tricel";
  let introText1 = "Nous sommes concessionnaires exclusifs du fabricant de micro-station <strong>TRICEL</strong> qui conçoit des solutions de traitement des eaux usées compactes, simples, robustes et fiables. Les usines de production sont basées en France à <strong>Poitiers (86)</strong> et <strong>Sorgues (84)</strong>.";
  let introText2 = "Vous n'avez pas de place pour votre assainissement ? Vous souhaitez garder votre jardin en état ? La micro-station est votre solution. Pour votre résidence principale, elle remplace la fosse septique ou toutes eaux et le champ d'épandage (environ 30m²), ainsi que le bac dégraisseur.";
  let introText3 = "La <strong>FR6/4000</strong>, prévue de 1 à 4 chambres (jusqu'à 6 habitants permanents), s'installe sur seulement <strong>5m² au sol</strong> avec du matériel de moins de 3 tonnes. Rapide à poser et à raccorder, la micro-station Tricel vous garantit un rendement épuratoire élevé.";
  let introText4 = "Nos techniciens s'occupent de la livraison et de la mise en route afin de garder la <strong>garantie fabricant de 20 ans pour la cuve</strong> et de 2 ans pour les autres éléments.";
  let schemaImage = "/images/micro-station.jpg";
  let phone = "02 48 76 02 84";
  let benefits = defaultAdvantages.map(a => a.label);
  let tanks = defaultTanks;
  let phases = defaultPhases;
  let docs = defaultDocs;
  let videoUrl = "https://www.youtube-nocookie.com/embed/lxdgtN82HM4?si=nBx2YgOvY8KJ49vc";
  let realizationVideoUrl = "/images/25-Most-Beautiful-Destinations-in-the-World-2.mp4";
  let realizationVideoPoster = "/images/chantier.jpeg";

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      const pageData = await sanityClient.fetch(`*[_type == "productPage" && pageId == "micro-stations"][0] {
        ...,
        "resolvedTanks": tanks[] {
          label,
          "src": image.asset->url
        },
        "resolvedPhases": phases[] {
          num,
          title,
          desc,
          iconName
        },
        "resolvedDocs": documents[] {
          title,
          subtitle,
          externalUrl,
          "fileUrl": file.asset->url
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
          introText4 = "";
        }
        if (pageData.benefits && pageData.benefits.length > 0) {
          benefits = pageData.benefits;
        }
        if (pageData.schemaImage) {
          schemaImage = urlFor(pageData.schemaImage).url();
        }
        if (pageData.resolvedTanks && pageData.resolvedTanks.length > 0) {
          tanks = pageData.resolvedTanks.map((t: any) => ({
            src: t.src || "/images/tank-fr6.webp",
            label: t.label,
          }));
        }
        if (pageData.resolvedPhases && pageData.resolvedPhases.length > 0) {
          phases = pageData.resolvedPhases.map((p: any) => ({
            num: p.num,
            title: p.title,
            desc: p.desc,
            icon: phaseIconMap[p.iconName || ""] || Beaker,
          }));
        }
        if (pageData.resolvedDocs && pageData.resolvedDocs.length > 0) {
          docs = pageData.resolvedDocs.map((d: any) => ({
            title: d.title,
            subtitle: d.subtitle,
            href: d.fileUrl || d.externalUrl || "#",
          }));
        }
        videoUrl = pageData.videoUrl || videoUrl;
        realizationVideoUrl = pageData.realizationVideoUrl || realizationVideoUrl;
        if (pageData.realizationVideoPoster) {
          realizationVideoPoster = urlFor(pageData.realizationVideoPoster).url();
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

  const finalAdvantages = benefits.map((bLabel) => {
    const matched = defaultAdvantages.find(da => da.label === bLabel);
    return {
      icon: matched ? matched.icon : ShieldCheck,
      label: bLabel
    };
  });

  return (
    <>
      {/* Header */}
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-white/70 text-sm mb-1">Partenaire exclusif Tricel</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">{subtitle}</p>
        </div>
      </section>

      {/* Intro + Image */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">{introTitle}</h2>
              <div className="w-16 h-1 bg-primary-400 mb-5" />
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: introText1 }} />
              {introText2 && <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: introText2 }} />}
              {introText3 && <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: introText3 }} />}
              {introText4 && <p className="text-gray-600 leading-relaxed text-sm sm:text-base" dangerouslySetInnerHTML={{ __html: introText4 }} />}
              <p className="text-xs text-gray-500 mt-4">
                Intervention sur les départements 18 / 58 / 03 / 36 / 23 / 63 / 15 / 43.
              </p>
            </div>
            <div>
              <Image
                src={schemaImage}
                alt="Schéma micro-station Tricel Novo"
                width={565}
                height={343}
                className="w-full h-auto border border-gray-200"
                quality={85}
              />
              <p className="text-xs text-gray-500 mt-2 italic">Schéma de fonctionnement de la micro-station Tricel Novo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gamme de cuves */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">La gamme de micro-station Tricel Novo</h2>
          <div className="w-16 h-1 bg-primary-400 mb-4" />
          <p className="text-gray-500 text-sm mb-8 max-w-2xl">
            Les micro-stations Tricel Novo permettent de couvrir l&apos;ensemble des besoins en assainissement
            des particuliers, des professionnels et des collectivités. Basée sur un processus d&apos;épuration
            par culture fixée, plus simple au fonctionnement et facile à entretenir.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {tanks.map((tank) => (
              <div key={tank.label} className="bg-white border border-gray-200 p-4 text-center">
                <Image
                  src={tank.src}
                  alt={tank.label}
                  width={300}
                  height={300}
                  className="w-full h-48 object-contain mx-auto mb-3"
                  quality={80}
                />
                <p className="text-sm font-semibold text-gray-700">{tank.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Le fonctionnement</h2>
          <div className="w-16 h-1 bg-primary-400 mb-3" />
          <p className="text-sm text-gray-500 mb-4">Le processus d&apos;épuration des eaux usées domestiques</p>
          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-3xl">
            Le dispositif d&apos;assainissement Tricel est une microstation d&apos;épuration complète basée
            sur le procédé de culture fixée immergée aérobie. Cette technologie garantit une fabrication
            de haute qualité et des performances exceptionnelles dans le temps.
          </p>

          <div className="space-y-4">
            {phases.map((phase) => (
              <div
                key={phase.num}
                className="flex flex-col sm:flex-row gap-4 bg-white border border-gray-200 p-5"
              >
                <div className="w-12 h-12 bg-primary-400 flex items-center justify-center shrink-0">
                  <phase.icon size={22} className="text-white" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary-400 uppercase mb-1">{phase.num}ère phase</p>
                  <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{phase.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Documentation Tricel</h2>
          <div className="w-16 h-1 bg-primary-400 mb-8" />
          <div className="grid sm:grid-cols-2 gap-4">
            {docs.map((doc, idx) => (
              <a
                key={idx}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all"
              >
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

      {/* Avantages */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Les avantages</h2>
          <div className="w-16 h-1 bg-primary-400 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {finalAdvantages.map((a) => (
              <div
                key={a.label}
                className="flex items-center gap-3 p-4 bg-gray-50 border border-gray-200"
              >
                <a.icon size={20} className="text-primary-400 shrink-0" />
                <span className="text-sm text-gray-700">{a.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéo */}
      {videoUrl && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Vidéo de présentation</h2>
            <div className="w-16 h-1 bg-primary-400 mb-6" />
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={videoUrl}
                title="ENE SAS - Vidéo de présentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </section>
      )}

      {/* Vidéo réalisations */}
      {realizationVideoUrl && (
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Nos réalisations</h2>
            <div className="w-16 h-1 bg-primary-400 mb-6" />
            <div className="relative w-full aspect-video bg-black border border-gray-200">
              <video 
                controls 
                preload="none"
                className="absolute inset-0 w-full h-full object-cover"
                poster={realizationVideoPoster}
              >
                <source src={realizationVideoUrl} type="video/mp4" />
                Votre navigateur ne supporte pas la balise vidéo.
              </video>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Intéressé par une micro-station Tricel ?</h2>
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

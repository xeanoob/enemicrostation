"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, Download } from "lucide-react";

export default function FiltreCompactPage() {
  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Le filtre compact Tricel Filtro</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">Solution fiable pour le traitement des eaux usées domestiques</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Le fonctionnement</h2>
              <div className="w-16 h-1 bg-primary-400 mb-5" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Le filtre compact Tricel FILTRO permet de traiter efficacement les eaux usées domestiques
                et assimilées. Il est adapté pour les applications individuelles en utilisation permanente
                (résidences principales), en utilisation intermittente (résidences secondaires) ainsi que,
                sous réserve de validation par une étude de filière, pour les hôtels, campings,
                regroupements d&apos;habitations, etc.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Le filtre compact Tricel FILTRO est <strong>monocuve avec 2 compartiments</strong> (sauf le modèle 18 EH) :
                un compartiment de décantation primaire pour le traitement primaire des eaux usées,
                et un compartiment massif filtrant pour le traitement secondaire.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Le filtre compact <strong>ne nécessite aucune énergie</strong> pour le traitement des eaux usées
                en modèle Sortie basse.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                En modèle Sortie haute, une pompe de relevage assure
                l&apos;évacuation des eaux traitées.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                La technologie sur laquelle il repose assure aux usagers une fiabilité exceptionnelle
                et des coûts d&apos;entretien des plus bas.
              </p>
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
          <h2 className="text-xl font-bold text-gray-800 mb-2">Spécificités du filtre compact Tricel FILTRO</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Les filtres compacts Tricel FILTRO sont composés d&apos;un compartiment de décantation primaire
            et d&apos;un massif filtrant compact en <strong>fibre de coco naturelle</strong>.
            Ce média filtrant ne nécessite aucune opération de maintenance de type ratissage : un simple
            réassort de quelques kilos annuels suffit pour maintenir les performances maximales.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Les filtres compacts Tricel FILTRO sont disponibles en <strong>2 gammes</strong> agréées jusqu&apos;à 18 EH :
            Sortie basse (gravitaire, sans électricité) et Sortie haute (avec pompe de relevage).
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Les cuves bénéficient d&apos;une <strong>garantie 10 ans</strong> extensible
            à <strong>20 ans</strong> si l&apos;entretien est réalisé par Tricel ou un de ses partenaires exclusifs.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Grâce à son emprise au sol réduite (entre <strong>5 et 18 m²</strong> selon le modèle),
            le filtre compact Tricel FILTRO vous permet de réduire considérablement la surface
            dédiée à l&apos;assainissement comparé aux filières traditionnelles (40 à 200 m²).
          </p>

          <h3 className="text-lg font-bold text-gray-800 mb-3">Quelle dimension choisir ?</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
            La règle de calcul est simple : <strong>1 Équivalent-Habitant = 1 Pièce Principale</strong>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            Gamme disponible : Tricel FILTRO 4, 5, 7, 10, 12, 15 et 18 EH.
          </p>
          <p className="text-sm text-gray-500">
            Une pièce principale est une pièce d&apos;au moins 7m² avec une ouverture vers l&apos;extérieur
            (porte, fenêtre) et une hauteur sous plafond ≥ 2,3m.
          </p>
        </div>
      </section>

      {/* Photos installations */}
      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Nos installations</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { src: "/images/filtre-1.jpg", alt: "Installation filtre compact Tricel Filtro" },
              { src: "/images/filtre-2.jpg", alt: "Chantier filtre compact Tricel Filtro" },
              { src: "/images/filtrecompact.jpeg", alt: "Filtre compact Tricel Filtro" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden border border-gray-200">
                <Image src={img.src} alt={img.alt} fill className="object-cover" quality={75} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Documentation Tricel</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/docs/brochure-tricel-filtro.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center shrink-0">
                <FileText size={24} className="text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm">Brochure Tricel Filtro 18 EH</p>
                <p className="text-xs text-gray-500">Filtre compact Tricel Filtro 18 EH</p>
              </div>
              <Download size={18} className="text-gray-500 shrink-0" />
            </a>
            <a href="/docs/brochure-tricel-filtro-21.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center shrink-0">
                <FileText size={24} className="text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm">Brochure Tricel Filtro 21 EH</p>
                <p className="text-xs text-gray-500">Filtre compact Tricel Filtro 21 EH</p>
              </div>
              <Download size={18} className="text-gray-500 shrink-0" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Un projet de filtre compact ?</h2>
          <p className="text-white/80 mb-6 text-sm">Contactez-nous pour un devis gratuit et personnalisé.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 bg-white text-primary-500 font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
              Demander un devis
            </Link>
            <a href="tel:0248760284" className="px-6 py-3 border-2 border-white text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-primary-500 transition-colors">
              <Phone size={16} /> 02 48 76 02 84
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

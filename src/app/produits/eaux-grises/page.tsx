"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";

export default function EauxGrisesPage() {
  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Traitement des eaux grises</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">Économisez 30 à 40% de votre consommation d&apos;eau</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Pourquoi traiter les eaux grises ?</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Le traitement des eaux grises permet leur réutilisation sur des postes n&apos;ayant pas besoin
            d&apos;eau potable, comme par exemple :
          </p>
          <ul className="text-sm sm:text-base text-gray-600 list-disc list-inside space-y-1 mb-6">
            <li>Les chasses d&apos;eau</li>
            <li>L&apos;arrosage des pelouses</li>
            <li>Le lavage des véhicules</li>
            <li>Le lavage des sols</li>
          </ul>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Le principe est de récupérer les eaux provenant des douches, baignoires, lavabos…
            Les eaux passent par un premier <strong>dégrilleur</strong> afin de récupérer cheveux et autres résidus,
            puis par une <strong>filtration membranaire</strong> ainsi qu&apos;un traitement chloré si besoin.
            Les eaux filtrées et traitées sont ensuite stockées pour être réutilisées.
          </p>

          <Image
            src="/images/eaux-grises-schema.jpg"
            alt="Schéma traitement des eaux grises"
            width={768}
            height={543}
            className="w-full h-auto border border-gray-200 mt-4"
            quality={85}
          />
          <p className="text-xs text-gray-400 mt-2 italic mb-4">Schéma de traitement des eaux grises</p>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-gray-200 p-6 text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">30 à 40%</p>
              <p className="text-sm text-gray-600">D&apos;économie d&apos;eau</p>
            </div>
            <div className="bg-white border border-gray-200 p-6 text-center">
              <p className="text-lg font-bold text-gray-800 mb-2">Préservation des ressources</p>
              <p className="text-sm text-gray-600">
                Nul besoin d&apos;eau potable pour les chasses d&apos;eau ou l&apos;arrosage d&apos;une pelouse !
              </p>
            </div>
          </div>

          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Très répandu dans divers pays (Espagne, Maroc, Australie, Japon) depuis de nombreuses années,
            le traitement d&apos;eaux grises sera un des équipements à part entière sur les futures constructions
            désireuses de faire d&apos;importantes économies d&apos;eau.
          </p>
          <p className="text-sm text-gray-500">
            Exemples de sources : stades, salles de sports, hôtels, etc.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg font-bold text-gray-800 mb-2">Chaque projet est unique</p>
          <p className="text-sm text-gray-500 mb-6">
            Appelez-nous pour une étude personnalisée et un devis adapté à votre situation.
          </p>
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Intéressé par le traitement des eaux grises ?</h2>
          <p className="text-white/80 mb-6 text-sm">Appelez-nous au 02 48 76 02 84 pour une étude ou un devis.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 bg-white text-primary-500 font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
              Contactez-nous
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

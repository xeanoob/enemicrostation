"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, Download } from "lucide-react";

export default function FiltreCompactPage() {
  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Le filtre compact Tricel Seta</h1>
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
                Le filtre compact Tricel Seta Simplex est adapté pour les applications individuelles en utilisation
                permanente (résidence principale) comme en utilisation intermittente (résidence secondaire).
                Il est également adapté pour les « petits collectifs » : restaurants, hôtels, campings,
                regroupements d&apos;habitations, etc.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Le filtre compact Tricel Seta Simplex est constitué d&apos;une <strong>cuve unique avec 2 compartiments</strong> :
                une fosse septique pour le traitement primaire des eaux usées, et un massif filtrant pour le traitement secondaire.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Les technologies sur lesquelles il repose assurent aux usagers une fiabilité exceptionnelle
                et des coûts d&apos;entretien des plus bas.
              </p>
            </div>
            <div>
              <Image
                src="/images/fonctionnement-seta.webp"
                alt="Schéma de fonctionnement du filtre compact Tricel Seta"
                width={1024}
                height={542}
                className="w-full h-auto border border-gray-200"
                quality={85}
              />
              <p className="text-xs text-gray-400 mt-2 italic">Fonctionnement du filtre compact Tricel Seta</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Spécificités du filtre compact coco Tricel</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
            Les filtres compacts Tricel Seta et Seta Simplex sont composés d&apos;une fosse septique/toutes eaux
            et d&apos;un massif filtrant compact en <strong>fibre de coco</strong>, en une seule cuve pour le Tricel Seta Simplex.
            Écologique, ce dispositif inclut des matériaux hauts de gamme pour une longévité accrue.
            Toutes nos cuves sont <strong>garanties 20 ans</strong> dès la délivrance d&apos;un certificat de conformité.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
            Grâce à son emprise au sol réduite, le filtre compact coco Tricel vous permet de diminuer
            jusqu&apos;à <strong>80% la surface</strong> dédiée à l&apos;assainissement en comparaison avec une fosse septique
            raccordée à un épandage conventionnel.
          </p>

          <h3 className="text-lg font-bold text-gray-800 mb-3">Quelle dimension choisir ?</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-2">
            La règle de calcul est simple : <strong>1 Équivalent-Habitant = 1 Pièce Principale</strong>
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
              { src: "/images/filtre-1.jpg", alt: "Installation filtre compact 1" },
              { src: "/images/filtre-2.jpg", alt: "Installation filtre compact 2" },
              { src: "/images/fossactiver.jpg", alt: "Produit Foss'Activer" },
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
            <a href="/docs/brochure-tricel-seta.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center shrink-0">
                <FileText size={24} className="text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm">Brochure Tricel Seta</p>
                <p className="text-xs text-gray-500">Filtre compact Tricel Seta</p>
              </div>
              <Download size={18} className="text-gray-400 shrink-0" />
            </a>
            <a href="/docs/brochure-tricel-seta-simplex.pdf" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
              <div className="w-12 h-12 bg-red-50 flex items-center justify-center shrink-0">
                <FileText size={24} className="text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm">Brochure Tricel Seta Simplex</p>
                <p className="text-xs text-gray-500">Filtre compact monocuve</p>
              </div>
              <Download size={18} className="text-gray-400 shrink-0" />
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

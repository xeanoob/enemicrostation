"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, FileText, Download } from "lucide-react";

export default function EauDePluiePage() {
  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Réutilisation d&apos;eau de pluie</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">Économisez plus de 50% de votre facture d&apos;eau potable</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Pourquoi récupérer l&apos;eau de pluie ?</h2>
              <div className="w-16 h-1 bg-primary-400 mb-5" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Plus de 50% de nos besoins domestiques n&apos;ont pas besoin d&apos;eau potable :
                l&apos;arrosage du jardin, les chasses d&apos;eau, le lavage de voiture, des sols,
                l&apos;appoint de piscine… L&apos;eau de pluie peut servir à toutes ces tâches à condition
                qu&apos;elle ait été correctement filtrée et stockée.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Par soucis d&apos;économie — l&apos;eau étant de plus en plus chère — ou d&apos;écologie —
                inutile de prendre de l&apos;eau potable pour les WC — bon nombre de pays voisins
                valorisent l&apos;eau de pluie depuis de très nombreuses années.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Installer un système de récupération d&apos;eau de pluie donne une <strong>valeur durable</strong> à votre habitation.
                Cette eau est gratuite et non calcaire.
              </p>
            </div>
            <div>
              <Image
                src="/images/eau-pluie-schema.jpg"
                alt="Schéma de récupération d'eau de pluie"
                width={600}
                height={400}
                className="w-full h-auto border border-gray-200"
                quality={85}
              />
              <p className="text-xs text-gray-400 mt-2 italic">Schéma de fonctionnement</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Le fonctionnement</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />

          <div className="space-y-4">
            <div className="bg-white border border-gray-200 p-5">
              <h3 className="font-bold text-primary-400 text-sm uppercase mb-2">1. Collecter et filtrer</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Récupération des eaux de la toiture et alimentation de la cuve de stockage.</li>
                <li>Filtration : l&apos;eau arrive sur un filtre autonettoyant à plan incliné. Les feuilles et autres matières sont évacuées par le trop plein.</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-5">
              <h3 className="font-bold text-primary-400 text-sm uppercase mb-2">2. Stocker</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Remplissage de la cuve par un tube plongeant pour éviter les remous.</li>
                <li>Trop plein d&apos;évacuation lorsque la cuve est totalement pleine.</li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 p-5">
              <h3 className="font-bold text-primary-400 text-sm uppercase mb-2">3. Utiliser</h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Tuyau d&apos;aspiration avec flotteur pour pomper dans la tranche d&apos;eau la plus claire.</li>
                <li>Pompe immergée entièrement automatique et sonde de niveau.</li>
                <li>Centrale DMG+ : en cas de manque d&apos;eau, l&apos;électrovanne s&apos;ouvre et la cuve est alimentée en eau de ville.</li>
              </ul>
            </div>
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
                <li>Évacuer les eaux des WC (chasse d&apos;eau)</li>
                <li>Nettoyer les sols</li>
                <li>Laver le linge (avec traitement adapté)</li>
              </ul>
              <p className="text-xs text-gray-400 mt-3 italic">
                Attention : interdit en aval d&apos;un toit contenant de l&apos;amiante-ciment ou du plomb.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-200 p-5">
              <h3 className="font-bold text-gray-800 mb-3">Usage extérieur</h3>
              <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Arrosage des plantes</li>
                <li>Nettoyage d&apos;un véhicule</li>
                <li>Utilisation libre à l&apos;extérieur</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 bg-gray-50 border border-gray-200 p-5">
            <h3 className="font-bold text-gray-800 mb-2">Cuves grands volumes (10 à 130 m³)</h3>
            <p className="text-sm text-gray-600 mb-2"><strong>Collectivités :</strong> réserves incendie, arrosage de stade, de plantations, remplissage de balayeuse, chasses d&apos;eau de salle des fêtes…</p>
            <p className="text-sm text-gray-600"><strong>Industrie :</strong> arrosage de pelouses, process sur machines-outils, lavage des sols et du matériel, piste de lavage de voitures…</p>
          </div>
        </div>
      </section>

      {/* Vidéo */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Présentation vidéo</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />
          <div className="relative w-full aspect-video bg-black">
            <iframe
              src="https://www.youtube.com/embed/RDHj1cGnVqE"
              title="ENE SAS - Récupération eau de pluie"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Documentation (Plasteau)</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: "/docs/plasteau-habitat-jardin.pdf", title: "Récupération eau de pluie", sub: "Habitat & jardin" },
              { href: "/docs/plasteau-cuves.pdf", title: "Cuves polyéthylène", sub: "Récupération & régulation" },
              { href: "/docs/plasteau-reserve-incendie.pdf", title: "Réserves incendie", sub: "Eau de pluie" },
            ].map((doc) => (
              <a key={doc.href} href={doc.href} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-sm transition-all">
                <div className="w-10 h-10 bg-red-50 flex items-center justify-center shrink-0">
                  <FileText size={20} className="text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-gray-800 text-xs sm:text-sm">{doc.title}</p>
                  <p className="text-xs text-gray-500">{doc.sub}</p>
                </div>
                <Download size={16} className="text-gray-400 shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Un projet de récupération d&apos;eau de pluie ?</h2>
          <p className="text-white/80 mb-6 text-sm">Nous dimensionnons votre installation selon vos besoins.</p>
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

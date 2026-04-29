"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Truck, Wrench, Headphones, MapPin } from "lucide-react";

export default function LivraisonPage() {
  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Livraison des produits</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">Tous les moyens sont bons pour vous livrer !</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">Notre engagement</h2>
              <div className="w-16 h-1 bg-primary-400 mb-5" />
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Chez ENE, après la livraison, nous installons et maintenons le bon fonctionnement
                de votre système d&apos;assainissement, de traitement et de filtration d&apos;eau.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Nos techniciens parcourent des centaines de kilomètres chaque jour pour assurer
                la livraison et la mise en service de nos produits sur l&apos;ensemble de notre zone d&apos;intervention.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Nous disposons de <strong>6 véhicules dédiés</strong> à la livraison et à l&apos;installation,
                équipés du matériel nécessaire pour garantir une pose rapide et dans les règles de l&apos;art.
              </p>
            </div>
            <div>
              <Image
                src="/images/camion-ene.jpg"
                alt="Camion de livraison ENE SAS"
                width={600}
                height={400}
                className="w-full h-auto border border-gray-200"
                quality={85}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Nos services</h2>
          <div className="w-16 h-1 bg-primary-400 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Truck, title: "Livraison", desc: "Livraison par nos techniciens spécialisés directement sur votre terrain, avec du matériel adapté." },
              { icon: Wrench, title: "Mise en route", desc: "Installation et mise en service par nos équipes pour préserver la garantie fabricant de 20 ans." },
              { icon: Headphones, title: "SAV & Maintenance", desc: "Contrat de service pour le suivi et la maintenance. Intervention rapide en cas de besoin." },
            ].map((s) => (
              <div key={s.title} className="bg-white border border-gray-200 p-6">
                <div className="w-12 h-12 bg-primary-400 flex items-center justify-center mb-4">
                  <s.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos livraison */}
      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Nos transporteurs en action</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { src: "/images/livraison.jpg", alt: "Livraison ENE 1" },
              { src: "/images/livraison-2.jpg", alt: "Livraison ENE 2" },
              { src: "/images/gallery-1.jpg", alt: "Livraison sur site" },
              { src: "/images/gallery-2.jpg", alt: "Installation sur site" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden border border-gray-200">
                <Image src={img.src} alt={img.alt} fill className="object-cover" quality={75} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-10 sm:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Zone d&apos;intervention</h2>
          <div className="w-16 h-1 bg-primary-400 mb-5" />
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {[
              "Cher (18)", "Nièvre (58)", "Allier (03)", "Indre (36)", "Creuse (23)",
              "Puy-de-Dôme (63)", "Cantal (15)", "Haute-Loire (43)", "Loiret (45)", "Loir-et-Cher (41)",
            ].map((dept) => (
              <div key={dept} className="flex items-center gap-2 p-3 bg-white border border-gray-200 text-sm text-gray-700">
                <MapPin size={14} className="text-primary-400 shrink-0" />
                {dept}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Besoin d&apos;une livraison ?</h2>
          <p className="text-white/80 mb-6 text-sm">Contactez-nous pour organiser la livraison et l&apos;installation de votre matériel.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 bg-white text-primary-500 font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
              Nous contacter
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

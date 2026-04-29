"use client";

import Link from "next/link";
import { Phone, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean DELEUME",
    role: "Maire de Mars-sur-Allier (58)",
    videoId: "qjX93px88CI?si=QQQCnvHmIul9HJwJ",
    text: `En février 2012, les propriétaires de l'hôtel « Au Rendez-Vous des Cigognes » sur la commune de Mars-sur-Allier ont fait don de l'établissement à la mairie, don qui a été accepté à l'unanimité par le conseil municipal. Hôtel où l'assainissement devait être refait car non conforme aux normes en vigueur.

Après avoir consulté différentes entreprises pour cette réhabilitation, la mairie était partie au départ sur une filière classique comme une fosse septique avec épandage mais le devis était élevé car il fallait installer une pompe de relevage pour aller au filtre à sable.

Après avoir vu la brochure des micro-stations de Tricel, la mairie a pris rendez-vous avec le distributeur régional de Tricel (ENE Energies Nouvelles Environnement) pour étudier les propositions que pouvait proposer le distributeur. Partant sur une micro-station Tricel Novo équivalent 18 habitants, ENE a établi un devis, d'un prix inférieur de 20% par rapport à la fosse septique avec un épandage. Après que le conseil municipal ait accepté à l'unanimité le dispositif, l'installation a pu être entreprise.`,
  },
  {
    name: "Michel HÉRAULT",
    role: "Maire de Villeneuve-sur-Cher (18)",
    videoId: "zRqdqWRki4k?si=cj4siCWNKp-2ZvD3",
    text: `La mairie de Villeneuve-sur-Cher a installé une micro-station d'épuration Tricel Novo pour ses deux salles des fêtes d'une capacité de 200 personnes pour la plus grande et 50 pour l'autre.

Après un an d'utilisation, la mairie est satisfaite du système d'assainissement non collectif posé, surtout pour le service après-vente et recommande le dispositif à tous les particuliers qui ont aujourd'hui des problèmes avec leur fosse septique.

Selon le maire, les micro-stations d'épuration sont l'avenir de l'assainissement.`,
  },
  {
    name: "Jean-Marc DUGUET",
    role: "Maire de Saint-Georges-sur-la-Prée (18)",
    videoId: "_q6erbjURVo?si=BR19vWK1gpU_qxyA",
    text: `M. Duguet nous présente les avantages les plus importants d'installer des micro-stations Tricel Novo.

Depuis 2011, il est possible en France d'installer des micro-stations agréées, notamment la Tricel Novo 6 EH (Équivalent-Habitants) pour 4 à 6 habitants.

Aujourd'hui, la Tricel Novo est le produit le plus performant selon M. Duguet car elle est très fiable (aucune incidence sur la maintenance et le suivi de la clientèle). Facile à installer puisqu'elle peut être posée en une seule journée : terrassement, pose et installation client compris.`,
  },
];

export default function TemoignagesPage() {
  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Témoignages de nos clients</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">
            Nous parcourons des centaines de kilomètres tous les jours pour installer du matériel
            et réaliser nos maintenances chez tous nos clients.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-12">
          {testimonials.map((t) => (
            <article key={t.name} className="border border-gray-200 bg-white">
              {/* Video */}
              <div className="relative w-full aspect-video bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${t.videoId}`}
                  title={`Témoignage ${t.name}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute inset-0 w-full h-full"
                />
              </div>

              {/* Text */}
              <div className="p-5 sm:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <Quote size={24} className="text-primary-400 shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-gray-800 text-base">{t.name}</p>
                    <p className="text-xs text-primary-400 font-medium">{t.role}</p>
                  </div>
                </div>
                {t.text.split("\n\n").map((para, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3 last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Rejoignez nos 3600+ clients satisfaits</h2>
          <p className="text-white/80 mb-6 text-sm">Contactez-nous pour votre projet d&apos;assainissement.</p>
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

"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Filter, Waves, CloudRain, Recycle, ArrowRight } from "lucide-react";

const products = [
  { icon: Droplets, title: "Micro-station d'épuration", desc: "Solution compacte Tricel Novo basée sur le procédé de culture fixée immergée aérobie. Remplace fosse septique et champ d'épandage sur seulement 5m². Homologuée de 1 à 20 EH.", href: "/produits/micro-stations", image: "/images/micro-station.jpg" },
  { icon: Filter, title: "Filtre compact", desc: "Alternative performante avec un média filtrant naturel pour le traitement des eaux usées domestiques, nécessitant peu d'énergie.", href: "/produits/filtre-compact", image: "/images/fossactiver.jpg" },
  { icon: Waves, title: "Pompes et postes de relevage", desc: "Solutions de relevage adaptées à toutes configurations de terrain pour l'évacuation efficace des eaux usées et pluviales.", href: "/produits/pompes-relevage", image: "/images/installation.jpg" },
  { icon: CloudRain, title: "Réutilisation d'eau de pluie", desc: "Systèmes de stockage et de valorisation de l'eau de pluie pour une démarche écologique et économique au quotidien.", href: "/produits/eau-de-pluie", image: "/images/chantier.jpeg" },
  { icon: Recycle, title: "Traitement des eaux grises", desc: "Solutions de recyclage des eaux grises pour un usage responsable de l'eau dans votre habitat.", href: "/produits/eaux-grises", image: "/images/hero-bg.jpg" },
];

export default function ProduitsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="bg-primary-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Les produits proposés par ENE</h1>
          <p className="text-white/80 mt-2">Tout pour votre assainissement</p>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-600 leading-relaxed">
            Chaque jour, nos techniciens parcourent plusieurs centaines de kilomètres pour rejoindre
            nos clients et assurer la livraison ainsi que la mise en service d&apos;une vaste gamme de produits.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-16">
        <div className="max-w-6xl mx-auto px-4 space-y-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col md:flex-row bg-white border border-gray-200 hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative md:w-64 h-48 md:h-auto shrink-0">
                <Image src={p.image} alt={p.title} fill className="object-cover" quality={75} />
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <p.icon size={22} className="text-primary-400" />
                  <h2 className="text-lg font-bold text-gray-800">{p.title}</h2>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">{p.desc}</p>
                <Link href={p.href} className="text-sm font-semibold text-primary-400 hover:text-primary-500 flex items-center gap-1">
                    En savoir plus <ArrowRight size={14} />
                  </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

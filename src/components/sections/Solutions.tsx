"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "Micro-station d'épuration",
    desc: "Solution compacte Tricel Novo, remplace la fosse septique et le champ d'épandage sur seulement 5m². Silencieuse, sans odeur, de 1 à 20 EH.",
    href: "/produits/micro-stations",
    image: "/images/micro-station.jpg",
  },
  {
    title: "Filtre compact",
    desc: "Traitement des eaux usées domestiques avec un média filtrant naturel. Faible encombrement et peu d'énergie nécessaire.",
    href: "/produits#filtres",
    image: "/images/fossactiver.jpg",
  },
  {
    title: "Pompes de relevage",
    desc: "Postes et pompes de relevage pour l'évacuation des eaux usées et pluviales, adaptés à toutes configurations.",
    href: "/produits#pompes",
    image: "/images/installation.jpg",
  },
  {
    title: "Réutilisation eau de pluie",
    desc: "Systèmes de stockage et de valorisation de l'eau de pluie pour réduire votre consommation d'eau potable.",
    href: "/produits#eau-pluie",
    image: "/images/chantier.jpeg",
  },
];

export default function Solutions() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-white" id="solutions">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Nos activités et services
          </h2>
          <div className="w-16 h-1 bg-primary-400 mb-4" />
          <p className="text-gray-500 max-w-2xl">
            Chaque jour, nos techniciens parcourent plusieurs centaines de kilomètres pour livrer,
            installer et entretenir une gamme complète de solutions d&apos;assainissement.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <Link href={sol.href} className="group block bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md transition-all">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    quality={75}
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-800 mb-2 text-sm">{sol.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{sol.desc}</p>
                  <span className="text-xs font-semibold text-primary-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

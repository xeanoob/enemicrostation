"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    title: "Livraison",
    desc: "Livraison par nos techniciens spécialisés dans les départements 18, 58, 03, 36, 23, 63, 15, 43, 45, 41.",
    image: "/images/livraison.jpg",
  },
  {
    title: "Mise en route",
    desc: "Installation et mise en service par nos équipes qualifiées, préservant la garantie fabricant de 20 ans pour la cuve.",
    image: "/images/livraison-2.jpg",
  },
  {
    title: "Entretien / SAV / Maintenance",
    desc: "Contrat de service pour le suivi et la maintenance de votre installation. Intervention rapide en cas de besoin.",
    image: "/images/chantier-3.jpeg",
  },
];

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            Nos services
          </h2>
          <div className="w-16 h-1 bg-primary-400 mb-4" />
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl">
            De la première étude à l&apos;entretien régulier, nous vous accompagnons à chaque étape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-44">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  quality={75}
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-800 mb-2 text-sm sm:text-base">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

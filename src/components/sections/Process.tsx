"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Process({
  title = "Spécialistes de votre assainissement depuis 2006",
  description1 = "Basés dans le sud du département du Cher, aux confins de 3 régions, nous sommes spécialisés dans le domaine des micro-stations d'épuration, des filtres compacts, solutions d'assainissement sans odeurs, de faible encombrement.",
  description2 = "Nous proposons également le matériel pour stockage et valorisation d'eau de pluie, ainsi que les postes de relevage et pompes.",
  phone = "02 48 76 02 84",
  infoText = "Les micro-stations TRICEL sont homologuées de 1 à 50 équivalent habitant",
}: {
  title?: string;
  description1?: string;
  description2?: string;
  phone?: string;
  infoText?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const cleanPhone = phone.replace(/\s+/g, "");

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              {title}
            </h2>
            <div className="w-16 h-1 bg-primary-400 mb-6" />
            <p className="text-gray-600 leading-relaxed mb-4">
              {description1}
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              {description2}
            </p>
            <div className="bg-primary-400 text-white p-5">
              <p className="font-bold text-lg mb-1">Appelez-nous au</p>
              <a href={`tel:${cleanPhone}`} className="text-2xl font-bold hover:underline">
                {phone}
              </a>
              <p className="text-white/80 text-sm mt-2">
                {infoText}
              </p>
            </div>
          </motion.div>

          {/* Video + Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >


            <Image
              src="/images/departement.jpeg"
              alt="Carte des départements d'intervention de ENE SAS"
              width={433}
              height={576}
              sizes="(max-width: 768px) 100vw, 300px"
              className="w-full h-auto max-w-[300px] mx-auto"
              quality={85}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

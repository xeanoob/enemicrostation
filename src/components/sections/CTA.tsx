"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Partenaire exclusif de la marque TRICEL
            </h2>
            <div className="w-16 h-1 bg-primary-400 mb-6" />
            <p className="text-gray-300 mb-3 leading-relaxed">
              Nous intervenons dans les départements : Allier (03), Cantal (15),
              Cher (18), Creuse (23), Indre (36), Haute-Loire (43), Nièvre (58),
              Puy-de-Dôme (63), Loiret (45) et Loir-et-Cher (41).
            </p>
            <p className="text-gray-400 text-sm mb-8">
              Nos techniciens parcourent des centaines de kilomètres chaque jour
              pour assurer la livraison, l&apos;installation et la maintenance de vos équipements.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold transition-colors text-sm uppercase tracking-wide"
              >
                Contactez-nous
              </Link>
              <a
                href="tel:0248760284"
                className="px-6 py-3 border border-gray-500 hover:border-white text-white font-semibold transition-colors text-sm flex items-center gap-2"
              >
                <Phone size={16} />
                02 48 76 02 84
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center"
          >
            <Image
              src="/images/installation.jpg"
              alt="Installation micro-station par ENE"
              width={500}
              height={333}
              className="w-full max-w-md h-auto"
              quality={80}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

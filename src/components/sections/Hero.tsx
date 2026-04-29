"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[550px] md:h-[600px]">
      <Image
        src="/images/hero-bg.webp"
        alt="Installation de micro-station d'épuration par ENE"
        fill
        priority
        className="object-cover"
        quality={85}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
            ENE SAS
          </h1>
          <p className="text-xl sm:text-2xl text-primary-200 font-medium mb-4">
            Environnement Nature Équilibre
          </p>
          <p className="text-white/70 text-base md:text-lg mb-3">
            Spécialiste en assainissement depuis 2006
          </p>
          <p className="text-white/85 text-base md:text-lg mb-3 leading-relaxed">
            Conseils, étude, livraison, mise en route, installation, SAV, entretien et maintenance
          </p>
          <p className="text-white/70 text-sm mb-8">
            Micro-stations d&apos;épuration Tricel • Filtres compacts • Pompes de relevage • Eau de pluie
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-white font-semibold transition-colors text-sm uppercase tracking-wide"
            >
              Demander un devis
            </Link>
            <Link
              href="/produits"
              className="px-6 py-3 bg-white/90 hover:bg-white text-gray-800 font-semibold transition-colors text-sm uppercase tracking-wide"
            >
              Nos produits
            </Link>
            <a
              href="tel:0248760284"
              className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-800 font-semibold transition-colors text-sm flex items-center gap-2"
            >
              <Phone size={16} />
              02 48 76 02 84
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

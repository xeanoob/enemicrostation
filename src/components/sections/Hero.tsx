"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function Hero({
  title = "ENE SAS",
  subtitle = "Énergies Nouvelles Environnement",
  bg = "/images/hero-bg.jpeg",
  desc1 = "Spécialiste en assainissement depuis 2006",
  desc2 = "Conseils, étude, livraison, mise en route, installation, SAV, entretien et maintenance",
  tags = "Micro-stations d'épuration Tricel • Filtres compacts • Pompes de relevage • Eau de pluie",
  phone = "02 48 76 02 84",
}: {
  title?: string;
  subtitle?: string;
  bg?: string;
  desc1?: string;
  desc2?: string;
  tags?: string;
  phone?: string;
}) {
  const cleanPhone = phone.replace(/\s+/g, "");

  return (
    <section className="relative h-[550px] md:h-[600px]">
      <Image
        src={bg}
        alt="Installation de micro-station d'épuration par ENE"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[center_90%]"
        quality={85}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full max-w-6xl mx-auto px-4 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-2">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-primary-200 font-medium mb-4">
            {subtitle}
          </p>
          {desc1 && (
            <p className="text-white/70 text-base md:text-lg mb-3">
              {desc1}
            </p>
          )}
          {desc2 && (
            <p className="text-white/85 text-base md:text-lg mb-3 leading-relaxed">
              {desc2}
            </p>
          )}
          {tags && (
            <p className="text-white/70 text-sm mb-8">
              {tags}
            </p>
          )}
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
            <div className="px-6 py-3 border-2 border-white text-white font-semibold text-sm flex items-center gap-2">
              <Phone size={16} />
              <a href={`tel:${cleanPhone}`} className="hover:text-primary-300 transition-colors">{phone}</a>
              <span className="text-white/60 mx-1">/</span>
              <a href="tel:0618127714" className="hover:text-primary-300 transition-colors">06 18 12 77 14</a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

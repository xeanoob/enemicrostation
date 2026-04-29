"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jean Deleume",
    role: "Maire de Mars-sur-Allier (58)",
    content: "Après avoir consulté différentes entreprises, la mairie était partie sur une filière classique. Après avoir vu la brochure Tricel, nous avons opté pour une micro-station Novo 18 EH, avec un devis inférieur de 20% par rapport à la fosse septique avec épandage. L'installation a été rapide et professionnelle.",
  },
  {
    name: "Michel Hérault",
    role: "Maire de Villeneuve-sur-Cher (18)",
    content: "Après un an d'utilisation, la mairie est satisfaite du système d'assainissement posé, surtout pour le service après-vente. Nous recommandons le dispositif à tous les particuliers qui ont des problèmes avec leur fosse septique. Les micro-stations sont l'avenir de l'assainissement.",
  },
  {
    name: "Jean-Marc Duguet",
    role: "Maire de Saint-Georges-sur-la-Prée (18)",
    content: "La Tricel Novo est le produit le plus performant. Elle est très fiable, sans incidence sur la maintenance. Facile à installer puisqu'elle peut être posée en une seule journée : terrassement, pose et installation client compris.",
  },
];

export default function TemoignagesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <section className="bg-primary-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Témoignages de nos clients</h1>
          <p className="text-white/80 mt-2">Ils nous font confiance depuis des années.</p>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-gray-600">
            Nous parcourons des centaines de kilomètres tous les jours pour installer du matériel
            et réaliser nos maintenances. Voici quelques témoignages.
          </p>
        </div>
      </section>

      <section ref={ref} className="py-16">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white border border-gray-200 p-8 relative"
            >
              <Quote size={32} className="absolute top-6 right-6 text-gray-100" />
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((s) => <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />)}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">&laquo; {t.content} &raquo;</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 bg-primary-400 flex items-center justify-center text-white font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500 flex items-center gap-1"><MapPin size={12} /> {t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}

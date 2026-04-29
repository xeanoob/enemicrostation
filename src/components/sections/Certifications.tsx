"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, UserCheck, Truck } from "lucide-react";

const stats = [
  { number: "18", label: "Ans d'expérience", icon: Award },
  { number: "3600", label: "Plus de 3000 clients", icon: Users },
  { number: "8", label: "Collaborateurs", icon: UserCheck },
  { number: "6", label: "Véhicules dédiés", icon: Truck },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-14 bg-primary-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-white/30 flex items-center justify-center">
                <stat.icon size={22} className="text-white" />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">{stat.number}</p>
              <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

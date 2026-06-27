"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, UserCheck, Truck } from "lucide-react";

const defaultStats = [
  { number: "20", label: "Ans d'expérience", icon: "Award" },
  { number: "4000", label: "Clients", icon: "Users" },
  { number: "7", label: "Collaborateurs", icon: "UserCheck" },
  { number: "8", label: "Véhicules dédiés", icon: "Truck" },
];

const iconMap: Record<string, any> = {
  Award,
  Users,
  UserCheck,
  Truck,
};

export default function Certifications({
  stats = null
}: {
  stats?: Array<{ number: string; label: string; icon?: string }> | null;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const displayStats = stats && stats.length > 0 ? stats : defaultStats;

  return (
    <section ref={ref} className="py-14 bg-primary-400">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {displayStats.map((stat, i) => {
            const IconComponent = iconMap[stat.icon || ""] || Award;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <IconComponent size={22} className="text-white" />
                </div>
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1">{stat.number}</p>
                <p className="text-white/80 text-xs sm:text-sm uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

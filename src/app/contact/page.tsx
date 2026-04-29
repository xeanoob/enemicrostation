"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, ChevronRight, ChevronLeft, CheckCircle } from "lucide-react";

const requestTypes = [
  "Demande de devis",
  "Informations générales",
  "Documentation technique",
  "Réclamation",
  "Partenariat commercial",
  "Autre",
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ type: "", name: "", phone: "", email: "", postalCode: "", city: "", message: "" });

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center max-w-md">
          <CheckCircle size={48} className="text-accent-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Message envoyé !</h2>
          <p className="text-gray-500">Nous reviendrons vers vous dans les plus brefs délais.</p>
        </motion.div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Contacter la société ENE</h1>
          <p className="text-white/80 mt-2">Une question, un projet ? Nous sommes à votre écoute.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Nous rendre visite (sur RDV)", lines: ["10 avenue des Fédérés", "18600 SANCOINS"] },
                { icon: Phone, title: "Appelez-nous", lines: ["02 48 76 02 84"] },
                { icon: Clock, title: "Nos horaires", lines: ["Lun-Ven : 8h à 12h", "puis de 14h à 18h"] },
                { icon: Mail, title: "Par e-mail", lines: ["contact@ene-sas.fr"] },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-gray-50 border border-gray-200">
                  <div className="flex items-center gap-3 mb-2">
                    <item.icon size={18} className="text-primary-400" />
                    <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                  </div>
                  {item.lines.map((l) => (<p key={l} className="text-sm text-gray-500 ml-8">{l}</p>))}
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-gray-200 p-6 md:p-8">
                <h2 className="text-lg font-bold text-gray-800 mb-1">Formulaire de contact</h2>
                <p className="text-sm text-gray-500 mb-6">Pour toute information, contactez-nous via ce formulaire.</p>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex items-center gap-2 flex-1">
                      <div className={`w-8 h-8 flex items-center justify-center text-sm font-bold ${step >= s ? "bg-primary-400 text-white" : "bg-gray-200 text-gray-400"}`}>
                        {s}
                      </div>
                      {s < 3 && <div className={`flex-1 h-0.5 ${step > s ? "bg-primary-400" : "bg-gray-200"}`} />}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div key="s1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}>
                        <p className="font-semibold text-gray-700 mb-3 text-sm">Type de demande *</p>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {requestTypes.map((t) => (
                            <button type="button" key={t} onClick={() => update("type", t)}
                              className={`p-3 text-left text-sm border transition-colors ${form.type === t ? "border-primary-400 bg-primary-50 text-primary-600" : "border-gray-200 text-gray-600 hover:border-primary-300"}`}>
                              {t}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {step === 2 && (
                      <motion.div key="s2" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }} className="space-y-3">
                        <input type="text" aria-label="Identité" placeholder="Identité *" value={form.name} onChange={(e) => update("name", e.target.value)} required className="w-full px-4 py-2.5 border border-gray-200 text-sm focus:border-primary-400 focus:ring-1 focus:ring-primary-200 outline-none" />
                        <div className="grid sm:grid-cols-2 gap-3">
                          <input type="tel" aria-label="Téléphone" placeholder="Téléphone *" value={form.phone} onChange={(e) => update("phone", e.target.value)} required className="w-full px-4 py-2.5 border border-gray-200 text-sm focus:border-primary-400 focus:ring-1 focus:ring-primary-200 outline-none" />
                          <input type="email" aria-label="E-mail" placeholder="E-mail *" value={form.email} onChange={(e) => update("email", e.target.value)} required className="w-full px-4 py-2.5 border border-gray-200 text-sm focus:border-primary-400 focus:ring-1 focus:ring-primary-200 outline-none" />
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          <input type="text" aria-label="Code postal" placeholder="Code postal *" value={form.postalCode} onChange={(e) => update("postalCode", e.target.value)} required className="w-full px-4 py-2.5 border border-gray-200 text-sm focus:border-primary-400 focus:ring-1 focus:ring-primary-200 outline-none" />
                          <input type="text" aria-label="Ville" placeholder="Ville *" value={form.city} onChange={(e) => update("city", e.target.value)} required className="w-full px-4 py-2.5 border border-gray-200 text-sm focus:border-primary-400 focus:ring-1 focus:ring-primary-200 outline-none" />
                        </div>
                      </motion.div>
                    )}
                    {step === 3 && (
                      <motion.div key="s3" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}>
                        <textarea aria-label="Message" placeholder="Message *" rows={6} value={form.message} onChange={(e) => update("message", e.target.value)} required className="w-full px-4 py-2.5 border border-gray-200 text-sm focus:border-primary-400 focus:ring-1 focus:ring-primary-200 outline-none resize-none" />
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between mt-6">
                    {step > 1 ? (
                      <button type="button" onClick={() => setStep(step - 1)} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
                        <ChevronLeft size={16} /> Précédent
                      </button>
                    ) : <div />}
                    {step < 3 ? (
                      <button type="button" onClick={() => setStep(step + 1)} className="flex items-center gap-1 px-5 py-2.5 bg-primary-400 text-white text-sm font-semibold hover:bg-primary-500 transition-colors">
                        Suivant <ChevronRight size={16} />
                      </button>
                    ) : (
                      <button type="submit" className="flex items-center gap-2 px-5 py-2.5 bg-gray-800 text-white text-sm font-semibold hover:bg-gray-700 transition-colors">
                        <Send size={16} /> Envoyer
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

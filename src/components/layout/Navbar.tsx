"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "/" },
  {
    label: "Produits",
    href: "/produits",
    children: [
      { label: "Micro-station d'épuration", href: "/produits/micro-stations" },
      { label: "Filtre compact", href: "/produits/filtre-compact" },
      { label: "Pompes de relevage", href: "/produits/pompes-relevage" },
      { label: "Eau de pluie", href: "/produits/eau-de-pluie" },
      { label: "Eaux grises", href: "/produits/eaux-grises" },
    ],
  },
  { label: "Livraison", href: "/livraison" },
  { label: "Témoignages", href: "/temoignages" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Mobile: compact bar with logo + phone + hamburger */}
      {/* Desktop: info bar with logo + contact info */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 sm:py-3 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/logo-ene.jpeg"
              alt="ENE SAS"
              width={200}
              height={56}
              className="h-10 sm:h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop contact info */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="tel:0248760284" className="flex items-center gap-2 text-gray-700 hover:text-primary-400 font-medium">
              <Phone size={16} className="text-primary-400" />
              02 48 76 02 84
            </a>
            <a href="mailto:contact@ene-sas.fr" className="flex items-center gap-2 text-gray-700 hover:text-primary-400 font-medium">
              <Mail size={16} className="text-primary-400" />
              contact@ene-sas.fr
            </a>
            <Link href="/contact" className="px-5 py-2.5 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold transition-colors">
              NOUS CONTACTER
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-3 md:hidden">
            <a href="tel:0248760284" className="flex items-center justify-center w-10 h-10 bg-primary-400 text-white" aria-label="Appeler">
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center justify-center w-10 h-10 bg-gray-100 text-gray-700"
              aria-label="Menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Blue navigation bar — desktop only */}
      <nav className="bg-primary-400 shadow-md hidden md:block">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex items-center gap-0">
            {navLinks.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-1 px-5 py-3.5 text-white text-sm font-semibold uppercase tracking-wide hover:bg-white/15 transition-colors"
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </Link>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-64 bg-white shadow-lg border border-gray-200 z-50"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-5 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-500 border-b border-gray-100 last:border-0"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block px-5 py-3.5 text-white text-sm font-semibold uppercase tracking-wide hover:bg-white/15 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 top-[57px] bg-white z-40 overflow-y-auto"
          >
            <div className="px-4 py-4">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3.5 text-gray-800 font-semibold text-base border-b border-gray-100"
                  >
                    {link.label}
                  </Link>
                  {link.children?.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={() => setMobileOpen(false)}
                      className="block pl-4 py-3 text-gray-500 text-sm border-b border-gray-50"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ))}

              {/* Mobile contact info */}
              <div className="mt-6 space-y-3">
                <a href="tel:0248760284" className="flex items-center gap-3 p-4 bg-primary-400 text-white font-semibold text-sm">
                  <Phone size={18} /> 02 48 76 02 84
                </a>
                <a href="mailto:contact@ene-sas.fr" className="flex items-center gap-3 p-4 bg-gray-100 text-gray-700 text-sm">
                  <Mail size={18} className="text-primary-400" /> contact@ene-sas.fr
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center p-4 bg-gray-800 text-white font-semibold text-sm"
                >
                  NOUS CONTACTER
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

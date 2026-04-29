import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <Image
              src="/images/logo-ene.jpeg"
              alt="ENE SAS"
              width={160}
              height={45}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Depuis 2006, nous sommes spécialisés dans les micro-stations
              d&#39;épuration et filtres compacts, solutions d&#39;assainissement
              sans odeurs et de faible encombrement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Produits", href: "/produits" },
                { label: "Témoignages", href: "/temoignages" },
                { label: "Nous contacter", href: "/contact" },
                { label: "Mentions légales", href: "/mentions-legales" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-400 shrink-0 mt-0.5" />
                10 avenue des Fédérés, 18600 SANCOINS
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-primary-400 shrink-0" />
                <a href="tel:0248760284" className="hover:text-white transition-colors">02 48 76 02 84</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400 shrink-0" />
                <a href="mailto:contact@ene-sas.fr" className="hover:text-white transition-colors">contact@ene-sas.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="text-primary-400 shrink-0" />
                Lun-Ven : 8h-12h / 14h-18h
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ENE SAS – Tous droits réservés</p>
          <a
            href="https://www.facebook.com/ENEmicrostation.epuration"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}

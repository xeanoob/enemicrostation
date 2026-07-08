import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const FacebookIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer({
  phone = "02 48 76 02 84",
  email = "contact@ene-sas.fr",
  address = "10 avenue des Fédérés, 18600 SANCOINS",
  hours = "Lun-Jeu : 8h-12h / 13h-17h30\nVen : 8h-12h",
}: {
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
}) {
  const cleanPhone = phone.replace(/\s+/g, "");
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Company */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo-ene.png"
                alt="ENE SAS"
                width={160}
                height={45}
                className="h-10 w-auto mb-2 rounded bg-white p-1"
              />
            </Link>
            <p className="text-white font-bold text-sm mb-1">ENE SAS</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Depuis 2006, nous sommes spécialisés dans les micro-stations
              d&#39;épuration et filtres compacts, solutions d&#39;assainissement
              sans odeurs et de faible encombrement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h3>
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
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-primary-400 shrink-0 mt-0.5" />
                {address}
              </li>
              <li className="flex flex-wrap items-center gap-2 text-gray-400">
                <Phone size={16} className="text-primary-400 shrink-0" />
                <a href={`tel:${cleanPhone}`} className="hover:text-white transition-colors">{phone}</a>
                <span className="text-gray-600">/</span>
                <a href="tel:0618127714" className="hover:text-white transition-colors">06 18 12 77 14</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400 shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">{email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={16} className="text-primary-400 shrink-0 mt-0.5" />
                <span style={{ whiteSpace: "pre-line" }}>{hours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {new Date().getFullYear()} ENE SAS – Tous droits réservés</p>
          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com/profile.php?id=61551548193738"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a
              href="https://instagram.com/enemicrostation"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

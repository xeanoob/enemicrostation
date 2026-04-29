import Link from "next/link";
import { Home, Phone, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-primary-400 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">Page introuvable</h1>
        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
          Pas d&apos;inquiétude, nous pouvons vous aider !
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-400 text-white font-semibold text-sm hover:bg-primary-500 transition-colors"
          >
            <Home size={16} /> Retour à l&apos;accueil
          </Link>
          <a
            href="tel:0248760284"
            className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-800 text-gray-800 font-semibold text-sm hover:bg-gray-800 hover:text-white transition-colors"
          >
            <Phone size={16} /> 02 48 76 02 84
          </a>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-3">Vous cherchez peut-être :</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: "Micro-stations", href: "/produits/micro-stations" },
              { label: "Produits", href: "/produits" },
              { label: "Contact", href: "/contact" },
              { label: "Livraison", href: "/livraison" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 bg-gray-100 text-gray-600 text-xs hover:bg-primary-50 hover:text-primary-500 transition-colors flex items-center gap-1"
              >
                <ArrowLeft size={10} /> {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

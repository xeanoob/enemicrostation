import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { getSanityClient } from "@/sanity/lib/fetch";
import { urlFor } from "@/sanity/lib/image";

const defaultGallery = [
  { src: "/images/camion-ene.jpg", alt: "Camion ENE SAS" },
  { src: "/images/livraison.jpg", alt: "Livraison ENE 1" },
  { src: "/images/livraison-2.jpg", alt: "Livraison ENE 2" },
  { src: "/images/livraison-3.jpg", alt: "Transport micro-station" },
  { src: "/images/livraison-4.jpg", alt: "Déchargement cuve" },
  { src: "/images/livraison-5.jpg", alt: "Livraison sur chantier" },
];

export default async function LivraisonPage() {
  let title = "Livraison des produits";
  let subtitle = "Tous les moyens sont bons pour vous livrer !";
  let gallery = defaultGallery;
  let phone = "02 48 76 02 84";

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      const sanityLivraison = await sanityClient.fetch(`*[_type == "livraison"][0]`);
      if (sanityLivraison) {
        title = sanityLivraison.title || title;
        subtitle = sanityLivraison.subtitle || subtitle;
        if (sanityLivraison.gallery && sanityLivraison.gallery.length > 0) {
          gallery = sanityLivraison.gallery.map((g: any) => ({
            src: g.image ? urlFor(g.image).url() : "/images/camion-ene.jpg",
            alt: g.alt || "Photo de livraison",
          }));
        }
      }

      const sanitySettings = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
      if (sanitySettings) {
        phone = sanitySettings.phone || phone;
      }
    }
  } catch (error) {
    console.warn("Failed to fetch delivery settings from Sanity, using defaults:", error);
  }

  const cleanPhone = phone.replace(/\s+/g, "");

  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">{title}</h1>
          <p className="text-white/80 mt-2 text-sm sm:text-base">{subtitle}</p>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Nos transporteurs</h2>
          <div className="w-16 h-1 bg-primary-400 mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {gallery.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden border border-gray-200">
                <Image src={img.src} alt={img.alt} fill className="object-cover" quality={70} sizes="(max-width: 640px) 50vw, 33vw" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary-400">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Besoin d&apos;une livraison ?</h2>
          <p className="text-white/80 mb-6 text-sm">Contactez-nous pour organiser la livraison de votre matériel.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/contact" className="px-6 py-3 bg-white text-primary-500 font-semibold text-sm uppercase hover:bg-gray-100 transition-colors">
              Nous contacter
            </Link>
            <a href={`tel:${cleanPhone}`} className="px-6 py-3 border-2 border-white text-white font-semibold text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-primary-500 transition-colors">
              <Phone size={16} /> {phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { getSanityClient } from "@/sanity/lib/fetch";

export const metadata = {
  title: "Contacter ENE SAS",
  description: "Contacter la société ENE SAS à Sancoins (18). Formulaire de contact et coordonnées pour vos questions d'assainissement.",
};

export default async function ContactPage() {
  let settings = {
    phone: "02 48 76 02 84",
    email: "contact@ene-sas.fr",
    address: "10 avenue des Fédérés, 18600 SANCOINS",
    hours: "Lun-Jeu : 8h à 12h / 13h à 17h30\nVen : 8h à 12h",
  };

  try {
    const sanityClient = await getSanityClient();
    if (sanityClient) {
      const sanitySettings = await sanityClient.fetch(`*[_type == "siteSettings"][0]`);
      if (sanitySettings) {
        settings = {
          phone: sanitySettings.phone || settings.phone,
          email: sanitySettings.email || settings.email,
          address: sanitySettings.address || settings.address,
          hours: sanitySettings.hours || settings.hours,
        };
      }
    }
  } catch (error) {
    console.warn("Failed to fetch site settings in contact page:", error);
  }

  const hoursLines = settings.hours.split("\n");

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
              <div className="p-5 bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin size={18} className="text-primary-400" />
                  <h3 className="font-bold text-gray-800 text-sm">Nous rendre visite (sur RDV)</h3>
                </div>
                <p className="text-sm text-gray-500 ml-8">{settings.address}</p>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Phone size={18} className="text-primary-400" />
                  <h3 className="font-bold text-gray-800 text-sm">Appelez-nous</h3>
                </div>
                <p className="text-sm text-gray-500 ml-8">{settings.phone}</p>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Clock size={18} className="text-primary-400" />
                  <h3 className="font-bold text-gray-800 text-sm">Nos horaires</h3>
                </div>
                {hoursLines.map((line, idx) => (
                  <p key={idx} className="text-sm text-gray-500 ml-8">{line}</p>
                ))}
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <Mail size={18} className="text-primary-400" />
                  <h3 className="font-bold text-gray-800 text-sm">Par e-mail</h3>
                </div>
                <p className="text-sm text-gray-500 ml-8">
                  <a href={`mailto:${settings.email}`} className="hover:underline">{settings.email}</a>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

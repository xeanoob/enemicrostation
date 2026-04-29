import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site ENE SAS - Environnement Nature Équilibre.",
};

export default function MentionsLegales() {
  return (
    <>
      <section className="bg-primary-400 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Mentions légales</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-6 text-sm leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Éditeur du site</h2>
            <p><strong>ENE SAS</strong> – Environnement Nature Équilibre<br />10 avenue des Fédérés, 18600 SANCOINS<br />Téléphone : 02 48 76 02 84<br />E-mail : contact@ene-sas.fr</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Propriété intellectuelle</h2>
            <p>L&apos;ensemble du contenu de ce site (textes, images, logos) est la propriété exclusive d&apos;ENE SAS, sauf mention contraire.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-2">Protection des données personnelles</h2>
            <p>Les informations recueillies via le formulaire de contact sont destinées exclusivement à ENE SAS. Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données. Contact : contact@ene-sas.fr.</p>
          </div>
        </div>
      </section>
    </>
  );
}

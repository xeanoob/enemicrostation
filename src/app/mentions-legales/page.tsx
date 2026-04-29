import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales et conditions générales d'utilisation du site ENE SAS - Environnement Nature Équilibre. Politique de confidentialité et cookies.",
  alternates: { canonical: "https://enemicrostation.fr/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <>
      <section className="bg-primary-400 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Mentions légales</h1>
        </div>
      </section>
      <section className="py-10 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 text-gray-600 space-y-8 text-sm leading-relaxed">

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Présentation du site</h2>
            <p>
              Le site <strong>www.enemicrostation.fr</strong> est édité par la société <strong>ENE SAS</strong>,
              domiciliée à l&apos;adresse suivante : 10 avenue des Fédérés à Sancoins (18600).
            </p>
            <p className="mt-2">Téléphone : 02 48 76 02 84</p>
            <p>Adresse e-mail : contact@ene-sas.fr</p>
            <p className="mt-2">Le directeur de publication du site est : <strong>Frédéric CROSNIER</strong>.</p>
            <p className="mt-2">
              Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Barranca Ave #4133, Covina, CA 91723, USA.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Contact</h2>
            <p>
              Pour toute question ou demande d&apos;information concernant le site, ou tout signalement de contenu
              ou d&apos;activités illicites, l&apos;utilisateur peut contacter l&apos;éditeur à l&apos;adresse e-mail suivante :
              contact@ene-sas.fr.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Acceptation des conditions d&apos;utilisation</h2>
            <p>
              L&apos;accès et l&apos;utilisation du site sont soumis à l&apos;acceptation et au respect des présentes
              Conditions Générales d&apos;Utilisation. L&apos;éditeur se réserve le droit de modifier, à tout moment et sans
              préavis, le site et des services ainsi que les présentes CGU, notamment pour s&apos;adapter aux évolutions
              du site par la mise à disposition de nouvelles fonctionnalités ou la suppression ou la modification de
              fonctionnalités existantes.
            </p>
            <p className="mt-2">
              Il est conseillé à l&apos;utilisateur de se référer avant toute navigation à la dernière version des CGU,
              accessible à tout moment sur le site. En cas de désaccord avec les CGU, aucun usage du site ne saurait
              être effectué par l&apos;utilisateur.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Accès et navigation</h2>
            <p>
              L&apos;accès au site et son utilisation sont réservés aux personnes majeures. L&apos;éditeur met en œuvre les
              solutions techniques à sa disposition pour permettre l&apos;accès au site 24 heures sur 24, 7 jours sur 7.
              Il pourra néanmoins à tout moment suspendre, limiter ou interrompre l&apos;accès au site ou à certaines pages
              de celui-ci afin de procéder à des mises à jour, des modifications de son contenu ou tout autre action
              jugée nécessaire au bon fonctionnement du site.
            </p>
            <p className="mt-2">
              La connexion et la navigation sur le site valent acceptation sans réserve des présentes Conditions
              Générales d&apos;Utilisation, quels que soient les moyens techniques d&apos;accès et les terminaux utilisés.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Gestion du site</h2>
            <p>Pour la bonne gestion du site, l&apos;éditeur pourra à tout moment :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Suspendre, interrompre ou limiter l&apos;accès à tout ou partie du site</li>
              <li>Supprimer toute information pouvant en perturber le fonctionnement ou entrant en contravention avec les lois</li>
              <li>Suspendre le site afin de procéder à des mises à jour</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Responsabilités</h2>
            <p>L&apos;éditeur n&apos;est responsable que du contenu qu&apos;il a lui-même édité. L&apos;éditeur n&apos;est pas responsable :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>En cas de problématiques ou défaillances techniques, informatiques ou de compatibilité du site</li>
              <li>Des dommages directs ou indirects résultant de l&apos;utilisation ou des difficultés d&apos;utilisation du site</li>
              <li>Des caractéristiques intrinsèques de l&apos;Internet (manque de fiabilité, défaut de sécurisation)</li>
              <li>Des contenus ou activités illicites utilisant son site sans qu&apos;il en ait pris connaissance</li>
            </ul>
            <p className="mt-2">
              Le site ne saurait garantir l&apos;exactitude, la complétude, et l&apos;actualité des informations qui y sont diffusées.
              L&apos;utilisateur est responsable de la protection de son matériel et de ses données, ainsi que de l&apos;utilisation
              qu&apos;il fait du site.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes pointant vers d&apos;autres sites internet sur lesquels
              l&apos;éditeur n&apos;exerce pas de contrôle. Malgré les vérifications préalables, l&apos;éditeur décline toute
              responsabilité quant aux contenus de ces sites. L&apos;éditeur autorise la mise en place de liens hypertextes
              vers toute page de son site sous réserve que cela ne soit pas réalisé à des fins commerciales ou publicitaires.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Confidentialité et données personnelles</h2>

            <h3 className="font-semibold text-gray-700 mt-4 mb-2">1. Données collectées</h3>
            <p>
              Conformément au Règlement européen 2016/679 (RGPD), la collecte et le traitement des données respectent
              les principes de licéité, loyauté, transparence, finalités limitées, minimisation et conservation réduite.
            </p>
            <p className="mt-2">
              Les données collectées via le formulaire de contact sont : <strong>nom, prénom, numéro de téléphone et adresse e-mail</strong>.
              Elles sont conservées pour une durée de <strong>24 mois</strong>, sauf demande de suppression de l&apos;utilisateur.
              Les données ne seront en aucun cas transmises à un tiers.
            </p>

            <h3 className="font-semibold text-gray-700 mt-4 mb-2">2. Hébergement des données</h3>
            <p>Les données collectées et traitées par le site sont hébergées par Vercel Inc.</p>

            <h3 className="font-semibold text-gray-700 mt-4 mb-2">3. Responsable du traitement</h3>
            <p>
              Le responsable du traitement des données à caractère personnel est <strong>Michel PENARD</strong>.
              Contact : contact@ene-sas.fr
            </p>

            <h3 className="font-semibold text-gray-700 mt-4 mb-2">4. Droits de l&apos;utilisateur</h3>
            <p>Conformément au RGPD, l&apos;utilisateur dispose des droits suivants :</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Droit d&apos;accès, de rectification et droit à l&apos;oubli</strong> : consulter, mettre à jour ou supprimer ses données</li>
              <li><strong>Droit à la limitation et à l&apos;opposition</strong> du traitement de ses données</li>
              <li><strong>Droit de déterminer le sort des données après la mort</strong> (loi n°2016-1321)</li>
              <li><strong>Droit de saisir la CNIL</strong> (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:underline">www.cnil.fr</a>) ou tout juge compétent</li>
            </ul>
            <p className="mt-2">
              Le responsable du traitement s&apos;engage à répondre dans un délai de 30 jours maximum.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Cookies</h2>
            <p>
              Le site a éventuellement recours aux techniques de « cookies » pour traiter des statistiques et faciliter
              la navigation. Le consentement de l&apos;utilisateur est demandé pour une durée de 13 mois maximum.
            </p>
            <p className="mt-2">
              L&apos;utilisateur peut s&apos;opposer à l&apos;enregistrement des cookies en configurant son navigateur.
              Toutefois, tout dysfonctionnement du site provoqué par cette manipulation ne pourrait être considéré
              comme étant du fait de l&apos;éditeur.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-3">Propriété intellectuelle</h2>
            <p>
              La structuration du site ainsi que les textes, graphiques, images, photographies, sons, vidéos et
              applications informatiques qui le composent sont la propriété de l&apos;éditeur et sont protégés par les lois
              en vigueur au titre de la propriété intellectuelle.
            </p>
            <p className="mt-2">
              Toute représentation, reproduction, adaptation ou exploitation partielle ou totale des contenus,
              marques déposées et services proposés par le site, par quelque procédé que ce soit, sans l&apos;autorisation
              préalable, expresse et écrite de l&apos;éditeur, est strictement interdite (articles L. 335-2 et suivants
              du Code de la propriété intellectuelle).
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

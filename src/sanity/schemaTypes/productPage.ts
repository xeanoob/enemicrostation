import { defineField, defineType } from "sanity";

export const productPage = defineType({
  name: "productPage",
  title: "Pages Produits (Détails)",
  type: "document",
  fields: [
    defineField({
      name: "pageId",
      title: "Identifiant de la page (Slug)",
      type: "string",
      description: "Doit être exactement : micro-stations, filtre-compact, pompes-relevage, eau-de-pluie, ou eaux-grises",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Titre de la page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre / Slogan de la page",
      type: "string",
    }),
    defineField({
      name: "introTitle",
      title: "Titre de l'introduction",
      type: "string",
    }),
    defineField({
      name: "introText",
      title: "Texte d'introduction",
      type: "text",
    }),
    defineField({
      name: "benefits",
      title: "Liste des avantages / cas d'usage",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "detailsText",
      title: "Texte explicatif détaillé",
      type: "text",
    }),
    defineField({
      name: "schemaImage",
      title: "Image du schéma (Optionnel)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "phases",
      title: "Phases de fonctionnement (Optionnel)",
      type: "array",
      of: [
        {
          type: "object",
          name: "phaseItem",
          title: "Phase",
          fields: [
            { name: "num", type: "string", title: "Numéro de la phase (ex: 1, 2)" },
            { name: "title", type: "string", title: "Titre de la phase" },
            { name: "desc", type: "text", title: "Description de la phase" },
            { name: "iconName", type: "string", title: "Icône de la phase (Beaker, Wind, FlaskConical)", options: { list: ["Beaker", "Wind", "FlaskConical"] } },
          ],
        },
      ],
    }),
    defineField({
      name: "tanks",
      title: "Gamme de cuves / Modèles (Optionnel)",
      type: "array",
      of: [
        {
          type: "object",
          name: "tankItem",
          title: "Cuve",
          fields: [
            { name: "label", type: "string", title: "Libellé de la cuve" },
            { name: "image", type: "image", title: "Image de la cuve", options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: "documents",
      title: "Brochures et documentations (Optionnel)",
      type: "array",
      of: [
        {
          type: "object",
          name: "documentItem",
          title: "Document",
          fields: [
            { name: "title", type: "string", title: "Titre du document (ex: Brochure Tricel Novo)" },
            { name: "subtitle", type: "string", title: "Sous-titre (ex: Microstations d'épuration)" },
            { name: "file", type: "file", title: "Fichier PDF à télécharger" },
            { name: "externalUrl", type: "string", title: "Ou URL externe (si pas de fichier PDF)" },
          ],
        },
      ],
    }),
    defineField({
      name: "videoUrl",
      title: "URL de la vidéo Youtube (ex: https://www.youtube-nocookie.com/embed/...)",
      type: "string",
    }),
    defineField({
      name: "realizationVideoUrl",
      title: "URL de la vidéo de réalisation (.mp4) (Optionnel)",
      type: "string",
    }),
    defineField({
      name: "realizationVideoPoster",
      title: "Image de couverture de la vidéo de réalisation (Optionnel)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "dimensionsTitle",
      title: "Titre de la section Dimensions / Dimensionnement (Optionnel)",
      type: "string",
    }),
    defineField({
      name: "dimensionsText",
      title: "Règle de dimensionnement (Optionnel)",
      type: "text",
    }),
    defineField({
      name: "dimensionsSubtitle",
      title: "Sous-titre dimensionnement (Optionnel)",
      type: "string",
    }),
    defineField({
      name: "dimensionsGamme",
      title: "Gamme de dimensionnement (Optionnel)",
      type: "string",
    }),
    defineField({
      name: "dimensionsNote",
      title: "Note complémentaire sur le dimensionnement (Optionnel)",
      type: "text",
    }),
    defineField({
      name: "gallery",
      title: "Galerie d'installations / photos (Optionnel)",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryItem",
          title: "Photo",
          fields: [
            { name: "image", type: "image", title: "Image", options: { hotspot: true } },
            { name: "alt", type: "string", title: "Description de l'image" },
          ],
        },
      ],
    }),
  ],
});

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
  ],
});

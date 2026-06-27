import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Coordonnées et Configuration",
  type: "document",
  fields: [
    defineField({
      name: "phone",
      title: "Téléphone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "E-mail",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "address",
      title: "Adresse de l'entreprise",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hours",
      title: "Horaires d'ouverture",
      type: "string",
    }),
    defineField({
      name: "dirPublication",
      title: "Directeur de publication",
      type: "string",
      description: "Nom du directeur de publication (ex: Frédéric CROSNIER)",
    }),
    defineField({
      name: "dataController",
      title: "Responsable du traitement des données (RGPD)",
      type: "string",
      description: "Nom du responsable RGPD (ex: Michel PENARD)",
    }),
    defineField({
      name: "siret",
      title: "N° SIRET",
      type: "string",
    }),
  ],
});

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
  ],
});

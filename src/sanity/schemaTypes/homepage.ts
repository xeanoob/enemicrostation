import { defineField, defineType } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Page d'accueil",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre principal (Hero)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre (Hero)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "presentation",
      title: "Texte de présentation",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
  ],
});

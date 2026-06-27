import { defineField, defineType } from "sanity";

export const processSchema = defineType({
  name: "process",
  title: "Notre processus (Texte)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre de la section",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description1",
      title: "Description paragraphe 1",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description2",
      title: "Description paragraphe 2",
      type: "text",
    }),
    defineField({
      name: "infoText",
      title: "Texte d'avertissement (Badge)",
      type: "string",
      description: "Ex: Les micro-stations TRICEL sont homologuées...",
    }),
  ],
});

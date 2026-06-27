import { defineField, defineType } from "sanity";

export const whyUs = defineType({
  name: "whyUs",
  title: "Pourquoi nous choisir (Engagements)",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre de la section",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre / Description",
      type: "text",
    }),
    defineField({
      name: "engagements",
      title: "Liste des engagements",
      type: "array",
      of: [
        {
          type: "object",
          name: "engagement",
          title: "Engagement",
          fields: [
            { name: "title", title: "Titre", type: "string", validation: (Rule) => Rule.required() },
            { name: "description", title: "Description", type: "text", validation: (Rule) => Rule.required() },
            { name: "image", title: "Image illustrative", type: "image" },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

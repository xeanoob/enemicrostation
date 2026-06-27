import { defineField, defineType } from "sanity";

export const livraison = defineType({
  name: "livraison",
  title: "Page Livraison",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titre de la page",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre / Description de la page",
      type: "text",
    }),
    defineField({
      name: "gallery",
      title: "Galerie d'images de livraison",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryItem",
          title: "Image de la galerie",
          fields: [
            { name: "image", title: "Photo", type: "image", validation: (Rule) => Rule.required() },
            { name: "alt", title: "Description textuelle (Alt)", type: "string", validation: (Rule) => Rule.required() },
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
});

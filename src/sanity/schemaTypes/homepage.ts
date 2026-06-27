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
    defineField({
      name: "heroBg",
      title: "Image de fond du Hero",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "heroDesc1",
      title: "Hero Description 1",
      type: "string",
    }),
    defineField({
      name: "heroDesc2",
      title: "Hero Description 2",
      type: "string",
    }),
    defineField({
      name: "heroTags",
      title: "Hero Mots clés / Produits",
      type: "string",
    }),
    defineField({
      name: "stats",
      title: "Statistiques / Chiffres clés",
      type: "array",
      of: [
        {
          type: "object",
          name: "statItem",
          title: "Chiffre clé",
          fields: [
            { name: "number", type: "string", title: "Nombre (ex: 20, 4000)" },
            { name: "label", type: "string", title: "Libellé (ex: Ans d'expérience)" },
            { name: "icon", type: "string", title: "Nom de l'icône (Award, Users, UserCheck, Truck)", options: { list: ["Award", "Users", "UserCheck", "Truck"] } },
          ],
        },
      ],
    }),
    defineField({
      name: "ctaTitle",
      title: "Titre du CTA",
      type: "string",
    }),
    defineField({
      name: "ctaText1",
      title: "Texte du CTA - Paragraphe 1",
      type: "text",
    }),
    defineField({
      name: "ctaText2",
      title: "Texte du CTA - Paragraphe 2 (secondaire)",
      type: "text",
    }),
    defineField({
      name: "ctaImage",
      title: "Image du CTA",
      type: "image",
      options: { hotspot: true },
    }),
  ],
});

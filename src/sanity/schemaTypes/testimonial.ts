import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Témoignage",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nom du client / Maire / Entreprise",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "role",
      title: "Rôle / Description",
      type: "string",
      description: "Ex: Maire de Mars-sur-Allier (58) ou Installateur professionnel",
    }),
    defineField({
      name: "text",
      title: "Texte du témoignage",
      type: "text",
    }),
    defineField({
      name: "videoId",
      title: "ID Vidéo YouTube (Optionnel)",
      type: "string",
      description: "Ex: qjX93px88CI?si=QQQCnvHmIul9HJwJ (coller la partie après v= ou l'ID complet d'intégration)",
    }),
    defineField({
      name: "instagramId",
      title: "ID Publication Instagram (Optionnel)",
      type: "string",
      description: "Ex: DYEjNawMOBL (l'ID de la publication)",
    }),
  ],
});

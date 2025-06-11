import { defineField, defineType } from "sanity";

const careerTimelineType = defineType({
  name: "career_timeline",
  title: "Where I've worked",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
      name: "organization",
      title: "Organization",
      type: "linkObject",
    }),
    defineField({
      name: "tenure",
      title: "Tenure",
      type: "tenureObject",
    }),
    defineField({
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "list", // Optional: renders it as a bullet point list in Studio
      },
    }),
  ],
});

export default careerTimelineType;

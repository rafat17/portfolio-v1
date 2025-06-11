import { defineField, defineType } from "sanity";

const projectsType = defineType({
  name: "projects",
  title: "Some things I've built",
  type: "document",
  fields: [
    defineField({
      name: "sectionTitle",
      title: "Section Title",
      type: "string",
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "view",
      title: "View Project",
      type: "linkObject",
    }),
  ],
});

export default projectsType;

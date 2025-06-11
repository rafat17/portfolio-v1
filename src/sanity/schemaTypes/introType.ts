import { defineField, defineType } from "sanity";

const introType = defineType({
  name: "introduction",
  title: "introduction",
  type: "document",
  fields: [
    defineField({
      name: "header",
      type: "string",
    }),
    defineField({
      name: "description",
      type: "string",
    }),
  ],
});

export default introType;

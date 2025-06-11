import { defineType, defineField } from "sanity";

const tenureObject = defineType({
  name: "tenureObject",
  type: "object",
  title: "Tenure",
  fields: [
    defineField({
      name: "from",
      title: "From",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    }),
    defineField({
      name: "to",
      title: "To",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    }),
  ],
});

export default tenureObject;

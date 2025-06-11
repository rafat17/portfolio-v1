import { defineType } from "sanity";

export default defineType({
  name: "linkObject",
  type: "object",
  title: "Link with Label",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "url",
      type: "url",
      title: "URL",
    },
  ],
});

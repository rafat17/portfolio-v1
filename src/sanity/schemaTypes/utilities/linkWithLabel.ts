import { defineType } from "sanity";

const linkWithLabel = defineType({
  name: "linkWithLabel",
  title: "Link with Label",
  type: "document",
  fields: [
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "url",
      type: "string",
      title: "URL",
    },
    {
      name: "position",
      type: "number",
      title: "Position",
    },
  ],
});

export default linkWithLabel;

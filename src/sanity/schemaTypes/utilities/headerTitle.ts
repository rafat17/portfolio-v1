import { defineType } from "sanity";

const headerTitle = defineType({
  name: "headerTitle",
  title: "Header Label",
  type: "document",
  fields: [
    {
      name: "label1",
      type: "string",
      title: "Label 1",
    },
    {
      name: "label2",
      type: "string",
      title: "Label 2",
    },
  ],
});

export default headerTitle;

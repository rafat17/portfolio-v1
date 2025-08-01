import { defineType } from "sanity";

const resumeDocOBject = defineType({
  name: "cvDocument",
  title: "CV Document",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      description: 'A descriptive title for the CV (e.g., "My Resume")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: "cvFile",
      title: "CV File",
      type: "file",
      description: "Upload the CV file (e.g., PDF).",
      options: {
        accept: ".pdf", // Restrict to specific file types (optional)
      },
      validation: (Rule) => Rule.required(), // Make the field mandatory (optional)
    },
  ],
});

export default resumeDocOBject;

import { type SchemaTypeDefinition } from "sanity";
import headerTitle from "./utilities/headerTitle";
import introType from "./introType";
import aboutType from "./aboutType";
import careerTimelineType from "./careerTimelineType";
import projectsType from "./projectsType";
import contactType from "./contactType";
import linkObject from "./utilities/linkObject";
import tenureObject from "./utilities/tenureObject";
import resumeDocOBject from "./utilities/resumeDocObject";
import linkWithLabel from "./utilities/linkWithLabel";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    headerTitle,
    linkWithLabel,
    resumeDocOBject,
    tenureObject,
    linkObject,
    introType,
    aboutType,
    careerTimelineType,
    projectsType,
    contactType,
  ],
};

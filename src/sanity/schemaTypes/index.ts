import { type SchemaTypeDefinition } from "sanity";
import introType from "./introType";
import aboutType from "./aboutType";
import careerTimelineType from "./careerTimelineType";
import projectsType from "./projectsType";
import contactType from "./contactType";
import linkObject from "./utilities/linkObject";
import tenureObject from "./utilities/tenureObject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    tenureObject,
    linkObject,
    introType,
    aboutType,
    careerTimelineType,
    projectsType,
    contactType,
  ],
};
